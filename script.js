// Initialize Lucide Icons
lucide.createIcons();

// Case Modal Data
const caseDetails = {
    case1: {
        title: "Terminal Juice",
        caseNo: "CASE FILE #001",
        status: "SOLVED & DEPLOYED",
        image: "images/tj.jpeg",
        problem: "Juice ordering and transaction tracking in the campus cafeteria were still handled manually. This caused long queues during peak hours, frequent order-recording errors, and made it difficult for sellers to monitor fruit inventory and cash flow in real-time.",
        solution: "Built a full-stack e-commerce web application powered by Node.js, React, Next.js and MongoDB. The system provides a dedicated dashboard for buyers and sellers, digitizing transactions, enabling CRUD product management, and ensuring smoother, more organized order monitoring.",
        techStack: ["React", "Next.js", "Node.js", "MongoDB", "Cloudinary"],
        demoUrl: "https://example.com",
        githubUrl: "https://github.com/Nataash03/terminal-juice.git"
    },
    case2: {
        title: "Nusantara Web",
        caseNo: "CASE FILE #002",
        status: "SOLVED & DEPLOYED",
        image: "images/nusantara.jpeg",
        problem: "Information regarding Javanese cultural heritage was scattered across various platforms without structured curation. The lack of interactive and accessible digital media left the younger generation less familiar with these traditional values, risking their preservation over time.",
        solution: "Designed an interactive web-based educational platform (HTML5, CSS3, and JavaScript) serving as a central hub for Javanese culture. The website integrates cultural resources with a clean, user-friendly interface to support inclusive cultural preservation.",
        techStack: ["HTML5", "CSS3", "Javascript"],
        demoUrl: "https://example.com",
        githubUrl: "https://github.com/Nataash03/kelompok-12.git"
    },
    case3: {
        title: "Central Creative Hub",
        caseNo: "CASE FILE #003",
        status: "SOLVED & DEPLOYED",
        image: "images/cch.jpeg",
        problem: "FSRD students frequently face space and time limitations when publishing and showcasing their artwork physically. Additionally, organizing physical exhibitions requires complex studio reservations and event coordination without a unified, centralized platform.",
        solution: "Developed a unified digital platform and visual gallery web application using React, Node.js and MongoDB. The platform functions as a digital exhibition gallery for FSRD students while providing an integrated event management and studio reservation system.",
        techStack: ["React", "Node.js", "MongoDB", "Atlas", "Cloudinary"],
        demoUrl: "https://example.com",
        githubUrl: "https://github.com/satoriaa/uts-softdev.git"
    }
};

// Open Modal Function
function openCaseModal(caseKey) {
    const data = caseDetails[caseKey];
    if (!data) return;

    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `
        <div class="flex items-center justify-between border-b border-stone-400/80 pb-3 mb-4">
            <span class="font-typewriter font-bold text-xs text-red-700 tracking-wider">${data.caseNo}</span>
            <span class="stamp-solved text-xs px-2 py-0.5 uppercase font-bold">${data.status}</span>
        </div>

        <div class="aspect-video rounded overflow-hidden mb-4 border border-stone-400 bg-stone-900">
            <img src="${data.image}" class="w-full h-full object-cover">
        </div>

        <h2 class="font-typewriter text-2xl font-bold text-stone-900 mb-2">${data.title}</h2>

        <div class="space-y-3 font-sans text-stone-800 text-sm mb-6">
            <div>
                <strong class="font-typewriter text-xs text-stone-600 uppercase block">THE MYSTERY (PROBLEM):</strong>
                <p class="mt-0.5">${data.problem}</p>
            </div>
            <div>
                <strong class="font-typewriter text-xs text-stone-600 uppercase block">THE SOLUTION & ARCHITECTURE:</strong>
                <p class="mt-0.5">${data.solution}</p>
            </div>
        </div>

        <div class="mb-6">
            <strong class="font-typewriter text-xs text-stone-600 uppercase block mb-2">EVIDENCE TECH STACK:</strong>
            <div class="flex flex-wrap gap-2 font-mono text-xs">
                ${data.techStack.map(tech => `<span class="bg-amber-200/90 px-2.5 py-1 rounded border border-amber-400 font-bold text-stone-900">${tech}</span>`).join('')}
            </div>
        </div>

        <div class="flex flex-wrap gap-3 pt-4 border-t border-stone-400/80">
            <a href="${data.demoUrl}" target="_blank" class="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-amber-200 font-typewriter text-xs font-bold rounded flex items-center gap-2">
                <i data-lucide="external-link" class="w-4 h-4"></i> INSPECT LIVE DEMO
            </a>
            <a href="${data.githubUrl}" target="_blank" class="px-4 py-2 bg-red-700 hover:bg-red-800 text-white font-typewriter text-xs font-bold rounded flex items-center gap-2">
                <i data-lucide="github" class="w-4 h-4"></i> SOURCE CODE (GITHUB)
            </a>
        </div>
    `;

    lucide.createIcons();
    document.getElementById('case-modal').classList.remove('hidden');
}

function closeCaseModal() {
    document.getElementById('case-modal').classList.add('hidden');
}

// Toggle UV Neon Vision Mode
function toggleUvMode() {
    const body = document.body;
    const btnText = document.getElementById('uv-toggle-text');
    body.classList.toggle('uv-mode');

    if (body.classList.contains('uv-mode')) {
        btnText.textContent = "NOIR MODE";
    } else {
        btnText.textContent = "UV NEON VISION";
    }
    drawRedStrings(); // Redraw strings with dynamic UV color
}

// Contact Form Handling
function handleContactSubmit(e) {
    e.preventDefault();
    const feedback = document.getElementById('contact-feedback');
    feedback.classList.remove('hidden');
    feedback.innerHTML = `
        <div class="flex items-center gap-2">
            <i data-lucide="check-circle" class="w-4 h-4 text-emerald-400"></i>
            <span>DISPATCH TRANSMITTED SUCCESSFULLY. INVESTIGATOR WILL RESPOND WITHIN 24 HOURS.</span>
        </div>
    `;
    lucide.createIcons();
    e.target.reset();
}

// Resume download simulation
function downloadResume() {
    const tempAnchor = document.createElement('a');
    tempAnchor.href = '#';
    tempAnchor.onclick = () => alert("Downloading Developer Resume Dossier (PDF)...");
    tempAnchor.click();
}

// Canvas Red Strings Connection System
function drawRedStrings() {
    const canvas = document.getElementById('string-canvas');
    const board = document.getElementById('crime-board');
    if (!canvas || !board) return;

    const rect = board.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const isUv = document.body.classList.contains('uv-mode');
    const stringColor = isUv ? 'rgba(0, 210, 255, 0.85)' : 'rgba(204, 41, 41, 0.85)';
    const shadowColor = isUv ? 'rgba(0, 210, 255, 0.4)' : 'rgba(0, 0, 0, 0.5)';

    // Connection pairs between element IDs
    const connections = [
        ['node-suspect', 'node-case-1'],
        ['node-suspect', 'node-case-2'],
        ['node-suspect', 'node-case-3'],
        ['node-case-1', 'node-tech-react'],
        ['node-case-1', 'node-tech-node'],
        ['node-case-2', 'node-tech-next'],
        ['node-case-2', 'node-tech-ts'],
        ['node-case-3', 'node-tech-react'],
        ['node-case-3', 'node-tech-tail']
    ];

    connections.forEach(([id1, id2]) => {
        const el1 = document.getElementById(id1);
        const el2 = document.getElementById(id2);

        if (el1 && el2) {
            const r1 = el1.getBoundingClientRect();
            const r2 = el2.getBoundingClientRect();

            // Calculate center points relative to board canvas
            const x1 = (r1.left + r1.width / 2) - rect.left;
            const y1 = (r1.top + 20) - rect.top;
            const x2 = (r2.left + r2.width / 2) - rect.left;
            const y2 = (r2.top + 20) - rect.top;

            // Draw string shadow
            ctx.beginPath();
            ctx.moveTo(x1 + 2, y1 + 4);
            ctx.quadraticCurveTo((x1 + x2) / 2, (y1 + y2) / 2 + 15, x2 + 2, y2 + 4);
            ctx.strokeStyle = shadowColor;
            ctx.lineWidth = 3;
            ctx.stroke();

            // Draw main red string with realistic curve
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.quadraticCurveTo((x1 + x2) / 2, (y1 + y2) / 2 + 10, x2, y2);
            ctx.strokeStyle = stringColor;
            ctx.lineWidth = 2;
            ctx.stroke();
        }
    });
}

// Draw strings on window load and resize
window.onload = function() {
    setTimeout(drawRedStrings, 100);
};
window.onresize = drawRedStrings;