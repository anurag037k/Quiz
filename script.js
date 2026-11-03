// --- 1. DIRECT HARDCODED QUESTION BANK ---
let questions = [
    { q: "Which Article of the Indian Constitution guarantees the Right to Equality before Law and Equal Protection of Laws?", opts: ["Article 14", "Article 19", "Article 21", "Article 32"], ans: 0, cat: "Fundamental Rights" },
    { q: "Who is widely recognized as the principal architect or 'Father of the Indian Constitution'?", opts: ["Mahatma Gandhi", "Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Dr. Rajendra Prasad"], ans: 1, cat: "Constitutional History" },
    { q: "The 'Basic Structure Doctrine' limiting Parliament's power to amend the Constitution was established by the Supreme Court in which landmark case?", opts: ["Golaknath v. State of Punjab", "Kesavananda Bharati v. State of Kerala", "Minerva Mills v. Union of India", "Maneka Gandhi v. Union of India"], ans: 1, cat: "Judicial Review & Amendments" },
    { q: "Which Article of the Constitution was described by Dr. B.R. Ambedkar as 'the heart and soul of the Constitution'?", opts: ["Article 12", "Article 19", "Article 21", "Article 32"], ans: 3, cat: "Constitutional Remedies" },
    { q: "Protection of Life and Personal Liberty under Article 21 can be curtailed according to procedure established by law, provided such procedure is fair, just, and reasonable, as ruled in which case?", opts: ["A.K. Gopalan v. State of Madras", "Maneka Gandhi v. Union of India", "K.S. Puttaswamy v. Union of India", "S.R. Bommai v. Union of India"], ans: 1, cat: "Fundamental Rights" },
    { q: "Which part of the Indian Constitution contains the Directive Principles of State Policy (DPSP)?", opts: ["Part II", "Part III", "Part IV", "Part IV-A"], ans: 2, cat: "Directive Principles" },
    { q: "Right to Privacy was explicitly declared as a Fundamental Right under Article 21 by a 9-judge constitutional bench in which year?", opts: ["2015", "2017", "2019", "2021"], ans: 1, cat: "Fundamental Rights" },
    { q: "Which constitutional amendment introduced the Goods and Services Tax (GST) in India?", opts: ["99th Amendment Act", "101st Amendment Act", "103rd Amendment Act", "105th Amendment Act"], ans: 1, cat: "Constitutional Amendments" },
    { q: "Under Article 360, Proclamation of Financial Emergency can be declared by whom?", opts: ["Prime Minister", "Chief Justice of India", "President of India", "Union Finance Minister"], ans: 2, cat: "Emergency Provisions" },
    { q: "The procedure for amendment of the Indian Constitution (Article 368) has been borrowed from the constitution of which country?", opts: ["United Kingdom", "United States", "South Africa", "Canada"], ans: 2, cat: "Constitutional Sources" }
];

while (questions.length < 100) {
    questions.push({
        q: `Constitutional Law Grand Test Question #${questions.length + 1}: Detailed constitutional law scenario involving fundamental rights, directive principles, or judicial review.`,
        opts: ["Article 14 - Right to Equality", "Article 21 - Personal Liberty", "Article 32 - Remedies", "Basic Structure Doctrine"],
        ans: 3, cat: "General Principles"
    });
}

// --- 2. EXAM STATE INIT ---
let totalQuestions = questions.length;
let userAnswers = new Array(totalQuestions).fill(null);
let userStatus = new Array(totalQuestions).fill('not-visited');
if (totalQuestions > 0) userStatus[0] = 'unanswered';

let currentIndex = 0;
let warnings = 0;
let timeRemaining = 7199; // 120 minutes
let examActive = false;
let phoneDetectionInterval = null;

document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById('total-score-display');
    if(display) display.innerText = totalQuestions;
});

// --- 3. CAMERA SETUP ---
document.getElementById('request-cam-btn')?.addEventListener('click', async () => {
    const loading = document.getElementById('camera-loading');
    const errorMsg = document.getElementById('camera-error');
    const camBtn = document.getElementById('request-cam-btn');
    
    if (loading) loading.classList.remove('hidden');
    if (errorMsg) errorMsg.classList.add('hidden');
    if (camBtn) camBtn.classList.add('hidden');

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        const video = document.getElementById('proctor-video');
        if (video) {
            video.srcObject = stream;
            video.classList.remove('hidden');
        }
        if (loading) loading.classList.add('hidden');
        document.getElementById('proceed-to-login')?.classList.remove('hidden');
    } catch (err) {
        console.error(err);
        if (loading) loading.classList.add('hidden');
        if (errorMsg) errorMsg.classList.remove('hidden');
        if (camBtn) camBtn.classList.remove('hidden');
    }
});

document.getElementById('proceed-to-login')?.addEventListener('click', () => {
    document.getElementById('camera-screen').classList.add('hidden');
    document.getElementById('login-screen').classList.remove('hidden');
});

// --- 4. START EXAM ---
document.getElementById('start-exam-btn')?.addEventListener('click', () => {
    const name = document.getElementById('candidate-name').value.trim();
    const uni = document.getElementById('candidate-university').value.trim();
    
    if (!name || !uni) return alert("Please fill in both fields.");
    
    window.candidateEmail = uni; 
    document.getElementById('display-roll').innerText = uni;
    
    document.getElementById('login-screen').style.display = 'none';
    const examScreen = document.getElementById('exam-screen');
    examScreen.classList.remove('hidden');
    examScreen.style.display = 'flex';
    
    if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen().catch(e => {});
    
    examActive = true;
    initGrid();
    loadQuestion(0);
    startTimer();
    setTimeout(initProctoring, 1000); 
});

// --- 5. GRID & NAVIGATION ---
function initGrid() {
    const grid = document.getElementById('palette-grid');
    grid.innerHTML = '';
    for (let i = 0; i < totalQuestions; i++) {
        const btn = document.createElement('button');
        btn.innerText = i + 1;
        btn.className = `w-10 h-10 rounded text-sm font-bold flex items-center justify-center border border-gray-600 bg-gray-700 text-gray-300 hover:bg-gray-500`;
        btn.onclick = () => loadQuestion(i);
        btn.id = `grid-btn-${i}`;
        grid.appendChild(btn);
    }
    updateGridUI();
}

function loadQuestion(index) {
    if (userStatus[currentIndex] !== 'answered' && userStatus[currentIndex] !== 'marked') {
        userStatus[currentIndex] = userAnswers[currentIndex] !== null ? 'answered' : 'unanswered';
    }
    currentIndex = index;
    if (userStatus[currentIndex] === 'not-visited') userStatus[currentIndex] = 'unanswered';
    
    const q = questions[currentIndex];
    document.getElementById('q-current-num').innerText = currentIndex + 1;
    document.getElementById('question-category').innerText = q.cat || "General";
    document.getElementById('question-text').innerText = q.q;
    
    const optsContainer = document.getElementById('options-container');
    optsContainer.innerHTML = '';
    
    const labels = ['A', 'B', 'C', 'D'];
    q.opts.forEach((optText, i) => {
        const div = document.createElement('div');
        const isSelected = userAnswers[currentIndex] === i;
        div.className = `p-4 border rounded cursor-pointer transition-colors flex items-center gap-4 ${isSelected ? 'border-gold bg-gold/10' : 'border-gray-600 bg-navy hover:bg-gray-800'}`;
        div.onclick = () => {
            userAnswers[currentIndex] = i;
            userStatus[currentIndex] = 'answered';
            loadQuestion(currentIndex);
        };
        
        const badge = document.createElement('div');
        badge.className = `w-8 h-8 rounded border flex items-center justify-center font-bold text-sm shrink-0 ${isSelected ? 'border-gold text-gold' : 'border-gray-500 text-gray-400'}`; 
        badge.innerText = labels[i]; 
        const text = document.createElement('span'); 
        text.innerText = optText; 
        div.appendChild(badge); 
        div.appendChild(text); 
        optsContainer.appendChild(div); 
    }); 
    
    document.getElementById('prev-btn').disabled = currentIndex === 0; 
    updateGridUI(); 
} 

document.getElementById('next-btn')?.addEventListener('click', () => { if (currentIndex < totalQuestions - 1) loadQuestion(currentIndex + 1); }); 
document.getElementById('prev-btn')?.addEventListener('click', () => { if (currentIndex > 0) loadQuestion(currentIndex - 1); }); 
document.getElementById('clear-option-btn')?.addEventListener('click', () => { userAnswers[currentIndex] = null; userStatus[currentIndex] = 'unanswered'; loadQuestion(currentIndex); }); 
document.getElementById('mark-review-btn')?.addEventListener('click', () => { userStatus[currentIndex] = 'marked'; updateGridUI(); if (currentIndex < totalQuestions - 1) loadQuestion(currentIndex + 1); }); 

function updateGridUI() { 
    let counts = { answered: 0, unanswered: 0, marked: 0, 'not-visited': 0 }; 
    for (let i = 0; i < totalQuestions; i++) { 
        counts[userStatus[i]]++; 
        const btn = document.getElementById(`grid-btn-${i}`);
        if (!btn) continue;
        
        btn.className = `w-10 h-10 rounded text-sm font-bold flex items-center justify-center border `;
        if (i === currentIndex) btn.className += 'ring-2 ring-white ';
        
        if (userStatus[i] === 'answered') btn.className += 'bg-green-600 border-green-500 text-white';
        else if (userStatus[i] === 'marked') btn.className += 'bg-yellow-600 border-yellow-500 text-white';
        else if (userStatus[i] === 'unanswered') btn.className += 'bg-red-600 border-red-500 text-white';
        else btn.className += 'bg-gray-700 border-gray-600 text-gray-300';
    }
    
    document.getElementById('count-answered').innerText = counts.answered;
    document.getElementById('count-unanswered').innerText = counts.unanswered;
    document.getElementById('count-marked').innerText = counts.marked;
    document.getElementById('count-not-visited').innerText = counts['not-visited'];
}

function startTimer() {
    const display = document.getElementById('timer-display');
    const intv = setInterval(() => {
        if (!examActive) return clearInterval(intv);
        if (timeRemaining <= 0) { clearInterval(intv); submitExam(); return; }
        timeRemaining--;
        const h = String(Math.floor(timeRemaining / 3600)).padStart(2, '0');
        const m = String(Math.floor((timeRemaining % 3600) / 60)).padStart(2, '0');
        const s = String(timeRemaining % 60).padStart(2, '0');
        display.innerText = `${h}:${m}:${s}`; 
    }, 1000); 
} 

// --- 6. EXAM SUBMISSION (SECURE MONGODB FETCH) ---
async function submitExam() {
    examActive = false;
    if (phoneDetectionInterval) clearInterval(phoneDetectionInterval);
    
    document.getElementById('exam-screen').classList.add('hidden');
    document.getElementById('warning-modal')?.classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    
    if (document.fullscreenElement) document.exitFullscreen().catch(e => {});
    const video = document.getElementById('proctor-video');
    if (video && video.srcObject) video.srcObject.getTracks().forEach(track => track.stop());

    const candidateName = document.getElementById('candidate-name').value.trim() || "Anonymous";
    const candidateIdentifier = window.candidateEmail || "unknown";

    try {
        const res = await fetch('/api/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: candidateName,
                email: candidateIdentifier,
                userAnswers: userAnswers
            })
        });
        
        const data = await res.json();
        if (data.success) {
            document.getElementById('final-score').innerText = data.score;
        }
    } catch (err) {
        console.error("Submission failed:", err);
    }
}

document.getElementById('submit-exam-btn')?.addEventListener('click', () => {
    if (confirm("Are you sure you want to finalize and submit your test?")) submitExam();
});

// --- 7. ANTI-CHEAT MONGODB LOGGING ---
let absenceTimer = 0;
let objectDetector = null;

async function initProctoring() {
    const videoElement = document.getElementById('proctor-video');
    if (!videoElement) return;

    if (typeof cocoSsd !== 'undefined') {
        try {
            objectDetector = await cocoSsd.load();
            phoneDetectionInterval = setInterval(async () => {
                if (!examActive || !objectDetector) return;
                const predictions = await objectDetector.detect(videoElement);
                if (predictions.some(p => p.class === 'cell phone' && p.score > 0.5)) {
                    triggerWarning(); 
                    captureAndUploadViolationSnapshot("Phone Detected");
                }
            }, 1500);
        } catch (e) {}
    }

    if (typeof FaceMesh !== 'undefined') {
        try {
            const faceMesh = new FaceMesh({ locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}` });
            faceMesh.setOptions({ maxNumFaces: 1, refineLandmarks: true, minDetectionConfidence: 0.5, minTrackingConfidence: 0.5 });
            faceMesh.onResults((results) => {
                if (!examActive) return;
                if (!results.multiFaceLandmarks || results.multiFaceLandmarks.length === 0) {
                    absenceTimer++;
                    if (absenceTimer > 3) { 
                        triggerWarning(); 
                        captureAndUploadViolationSnapshot("Face Not Detected"); 
                        absenceTimer = 0; 
                    }
                } else { absenceTimer = 0; }
            });
            const camera = new Camera(videoElement, { onFrame: async () => { if(examActive) await faceMesh.send({image: videoElement}); }, width: 640, height: 480 });
            camera.start();
        } catch (err) {}
    }
}

function triggerWarning() { 
    if (!examActive) return; 
    warnings++; 
    document.getElementById('warning-count').innerText = `${warnings}/3`;
    document.getElementById('modal-warning-count').innerText = warnings;
    if (warnings >= 3) {
        alert("Maximum violations reached. Auto-submitting exam."); 
        submitExam();
    } else {
        document.getElementById('warning-modal').classList.remove('hidden');
    }
}

document.getElementById('dismiss-warning-btn')?.addEventListener('click', () => {
    document.getElementById('warning-modal').classList.add('hidden');
    if (document.documentElement.requestFullscreen && examActive) document.documentElement.requestFullscreen().catch(e => {});
});

window.addEventListener("blur", () => { 
    if (examActive) { 
        triggerWarning(); 
        captureAndUploadViolationSnapshot("Lost Focus (Tab Switch)"); 
    } 
});

function captureAndUploadViolationSnapshot(violationType) {
    const video = document.getElementById('proctor-video');
    if (!video) return;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth || 640; 
    canvas.height = video.videoHeight || 480;
    const ctx = canvas.getContext('2d'); 
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    const base64Image = canvas.toDataURL('image/jpeg', 0.5); 

    fetch('/api/violation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: window.candidateEmail || "anon",
            violation: violationType,
            snapshotUrl: base64Image
        })
    }).catch(err => console.error(err));
}