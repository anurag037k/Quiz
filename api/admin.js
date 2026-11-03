const { MongoClient } = require('mongodb');

let cachedClient = null;

async function connectToDatabase() {
    if (cachedClient) return cachedClient;
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    cachedClient = client;
    return client;
}

export default async function handler(req, res) {
    if (req.method !== 'GET') return res.status(405).json({ message: 'Method Not Allowed' });

    const adminSecret = req.headers['x-admin-secret'];
    if (!adminSecret || adminSecret !== process.env.ADMIN_SECRET) {
        return res.status(401).json({ error: 'Unauthorized: Invalid Admin Secret' });
    }

    try {
        const client = await connectToDatabase();
        const db = client.db('vidhiora_db');

        const results = await db.collection('exam_results').find().sort({ score: -1 }).limit(50).toArray();
        const violations = await db.collection('exam_violations').find().sort({ timestamp: -1 }).limit(50).toArray();

        res.status(200).json({ results, violations });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}