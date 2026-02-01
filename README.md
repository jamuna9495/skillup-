🧬 SkillGenome X | Professional Resume & AI Intelligence Portal
SkillGenome X is an all-in-one "National Skill Intelligence" platform that maps personal user DNA (Name, Location, University, and Skills) into a high-end professional resume. Powered by the TinyWorld AI Inference Engine, it features integrated security, automated career roadmaps, and instant PDF generation.

🚀 Key Features
Daniel Gallego Resume Aesthetic: Automatically generates resumes following the iconic clean-minimalist layout featuring bold typography and section dividers.

TinyWorld AI Security (Captcha): An adversarial defense layer that requires human verification before the "Inference Engine" processes the data.

50+ Career Clusters: Maps user inputs to specialized roles like Cybersecurity Architect, Data Analytics Manager, and Professional Modeling.

Learning Roadmap Integration: Dynamically generates YouTube Learning Paths and QR Codes for the assigned job role.

Instant PDF Export: Print-ready CSS that transforms the web dashboard into a physical professional document with one click.

🛠️ Technical Stack
Frontend: HTML5, CSS3 (including @media print logic)

Logic: JavaScript (ES6+)

AI Simulation: TinyWorld AI (Offline Inference Logic)

APIs: QR Server API (for dynamic Roadmap QR generation)

📂 Project Structure
Plaintext
├── index.html   # The core Dashboard and Resume structure
├── style.css    # Modern Dark UI & Daniel Gallego Resume styling
└── script.js    # Captcha logic, Skill Mapping, and Resume Builder
⚙️ How to Setup
Clone the Repository:

Bash
git clone https://github.com/your-username/skillgenome-x.git
Open the Project: Simply open the index.html file in any modern web browser (Chrome, Edge, Safari). No server or database is required as it runs on the TinyWorld Offline AI principle.

📖 Usage Instructions
Enter Personal DNA: Fill in your Name, Contact, University, and City.

Select Skill Cluster: Choose your primary area of expertise from the dropdown.

Solve AI Security: Enter the generated Captcha code to trigger the Inference Engine.

Review Genome: Scroll down to see your professional summary, auto-populated skills, and your QR-linked Learning Path.

Export: Click the "Download Official Resume" button to save your profile as a PDF.

🛡️ AI Security (Captcha Solver)
The system includes a custom genCaptcha() function to ensure data integrity.

JavaScript
function genCaptcha() {
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    document.getElementById('captchaDisplay').innerText = code;
}
This ensures the Inference Engine only runs for verified human users.

🤝 Contributing
Feel free to fork this project, add more skill clusters to the genomeDB, or improve the CSS resume templates. Pull requests are always welcome!
