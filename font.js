const genomeDB = {
    "data": { role: "Data Analytics Manager", skills: "Python, SQL, Tableau, Stats", desc: "Expert in translating national data into intelligence.", yt: "https://www.youtube.com/results?search_query=data+analytics+course" },
    "cyber": { role: "Cybersecurity Architect", skills: "Pentesting, DevOps, Cryptography", desc: "Defense against adversarial hacker signals.", yt: "https://www.youtube.com/results?search_query=cybersecurity+roadmap" },
    "cloud": { role: "Cloud Solutions Engineer", skills: "AWS, Azure, APIs, Networking", desc: "Optimizing 100% offline-first reliability.", yt: "https://www.youtube.com/results?search_query=cloud+computing+course" },
    "prog": { role: "Senior Software Developer", skills: "Java, C++, OOP, Backend", desc: "Building lightweight systems for low-end devices.", yt: "https://www.youtube.com/results?search_query=software+development+roadmap" },
    "web": { role: "Full Stack Architect", skills: "HTML5, React, Node.js, JS", desc: "Developing intuitive citizen innovation portals.", yt: "https://www.youtube.com/results?search_query=full+stack+web+development" },
    "design": { role: "UI/UX Creative Lead", skills: "Figma, Adobe XD, Typography", desc: "Mapping user psychology to visual interfaces.", yt: "https://www.youtube.com/results?search_query=ui+ux+design+course" },
    "finance": { role: "Chartered Accountant", skills: "Tally, QuickBooks, Auditing", desc: "Managing national skill funding and policy.", yt: "https://www.youtube.com/results?search_query=accounting+finance+tutorial" },
    "nurse": { role: "Healthcare Specialist", skills: "Patient Records, ICU, Care", desc: "Providing human-centric medical hub services.", yt: "https://www.youtube.com/results?search_query=nursing+skills+tutorial" },
    "teach": { role: "Chief Mentorship Officer", skills: "Curriculum, Mentorship, Coaching", desc: "Developing the next generation of skill genomes.", yt: "https://www.youtube.com/results?search_query=teaching+skills+course" },
    "machinery": { role: "Equipment Manager", skills: "Machinery, Safety, Logistics", desc: "Driving infrastructure growth via equipment ops.", yt: "https://www.youtube.com/results?search_query=heavy+machinery+operation" }
};

function genCaptcha() {
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    document.getElementById('captchaDisplay').innerText = code;
}

function runInference() {
    const inputCode = document.getElementById('captchaInput').value.toUpperCase();
    if (inputCode !== document.getElementById('captchaDisplay').innerText) {
        alert("Captcha Incorrect! TinyWorld AI verification failed.");
        genCaptcha();
        return;
    }

    // Inputs
    const name = document.getElementById('name').value || "Candidate";
    const loc = document.getElementById('city').value + ", " + document.getElementById('nation').value;
    const uni = document.getElementById('university').value || "Skill Lab";
    const skillKey = document.getElementById('skillSelect').value;
    const data = genomeDB[skillKey];

    // Map to Resume
    document.getElementById('resName').innerText = name.toUpperCase();
    document.getElementById('resContact').innerText = `Location: ${loc} | Age: ${document.getElementById('age').value}`;
    document.getElementById('resJob').innerText = data.role;
    document.getElementById('resDesc').innerText = data.desc;
    document.getElementById('resUni').innerText = `Certified by ${uni} & National Skill Genome X`;

    // Skills
    const skillContainer = document.getElementById('resSkills');
    skillContainer.innerHTML = "";
    data.skills.split(',').forEach(s => {
        const span = document.createElement('span');
        span.innerText = s.trim();
        skillContainer.appendChild(span);
    });

    // YouTube & QR
    document.getElementById('ytArea').innerHTML = `<a href="${data.yt}" target="_blank" class="yt-btn">▶ Start ${data.role} Learning</a>`;
    document.getElementById('qrCodeImg').src = `https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encodeURIComponent(data.yt)}`;

    // Show result & Score Animation
    document.getElementById('result').classList.remove('hidden');
    setTimeout(() => { document.getElementById('scoreFill').style.width = (Math.random() * 20 + 80) + "%"; }, 100);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}
