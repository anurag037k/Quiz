const { MongoClient } = require('mongodb');

// Server-side answer key (0 = A, 1 = B, 2 = C, 3 = D)
const ANSWER_KEY = [0, 1, 1, 3, 1, 2, 1, 1, 2, 2];
while (ANSWER_KEY.length < 100) ANSWER_KEY.push(3);

let cachedClient = null;

async function connectToDatabase() {
    if (cachedClient) return cachedClient;
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    cachedClient = client;
    return client;
}

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ message: 'Method Not Allowed' });

    try {
        const { name, email, userAnswers } = req.body;

        if (!name || !email || !Array.isArray(userAnswers)) {
            return res.status(400).json({ error: 'Invalid payload submitted.' });
        }

        // Secure server-side score calculation
        let calculatedScore = 0;
        userAnswers.forEach((ans, idx) => {
            if (ans !== null && idx < ANSWER_KEY.length && ans === ANSWER_KEY[idx]) {
                calculatedScore++;
            }
        });

        const client = await connectToDatabase();
        const db = client.db('vidhiora_db');

        const record = {
            name: String(name).trim().slice(0, 100),
            email: String(email).trim().slice(0, 100),
            score: calculatedScore,
            total: ANSWER_KEY.length,
            timestamp: new Date()
        };

        await db.collection('exam_results').insertOne(record);
        res.status(200).json({ success: true, score: calculatedScore });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}