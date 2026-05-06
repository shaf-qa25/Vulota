🛡️ Vulota - Advanced Cybersecurity Dashboard
Vulota (Comapiens) is a high-performance, offensive security-focused dashboard built for real-time monitoring and threat analysis. Designed with a sleek, dark-themed interface, it prioritizes data visualization and seamless user experience for security engineers.

✨ Key Features
1. Core Modules
Command Dashboard: A bird's-eye view of the system state with high-impact metric cards (Total Users, Threats Neutralized, Active Sessions, and System Risk Score).

Neural Analytics: Real-time data visualization using Recharts. Includes:

Activity Over Time: High-precision line charts for traffic monitoring.

Threat Distribution: Bar charts categorizing vulnerability types.

User Command Center: A robust management table with:

Status toggles (Active/Blocked).

Optimized data rendering with "View All" toggle for large datasets.

Offensive Security Insights:

Dynamic Risk Level Indicators (Low/Medium/High).

Recent Alerts feed with severity-based styling.

AI-driven security recommendations for threat mitigation.

2. Technical Excellence & UX
Cyber-Sentry 404 (Easter Egg): A custom-designed Error Page featuring the EvilEye (WebGL) component. It uses ogl and cursor-tracking to create an immersive "Neural-Net surveillance" feel.

Responsive Framework: Fully adaptive layout that transitions seamlessly from widescreen monitors to mobile devices.

Micro-Animations: Implemented Framer Motion for smooth transitions and hover states, giving it a premium SaaS feel.

Performance Optimized: Used useMemo for heavy data computations and Context API for global state management.

🛠️ Tech Stack
Framework: React.js (Vite)

Styling: Tailwind CSS (Mobile-First approach)

Graphics/WebGL: ogl (for EvilEye component)

Charts: Recharts

Icons: Lucide-React

Animation: Framer Motion

📂 Project Structure
Plaintext
src/
├── components/
│   ├── Layout/          # Sidebar, Navbar, and Container
│   ├── UI/              # Reusable Cards, Tables, Buttons
│   ├── Charts/          # Line and Bar chart wrappers
│   └── EvilEye/         # Custom WebGL surveillance component
├── pages/
│   ├── Dashboard/       # Main Overview
│   ├── Analytics/       # Detailed reporting
│   ├── UserManagement/  # User list and actions
│   └── ErrorPage/       # Interactive 404 Page
├── data/                # Mock JSON datasets
└── App.jsx              # Routing and Global Logic
🚀 Installation & Setup
Clone the repository:

Bash
git clone https://github.com/shaf-qa25/Vulota.git
Install dependencies:

Bash
npm install ogl framer-motion lucide-react recharts react-router-dom
Run the development server:

Bash
   npm run dev
🛡️ Security Note
This project is a demo developed for the Vulota Hiring Team assignment. It utilizes dummy data to demonstrate frontend proficiency and does not process real user information.

💡 My Approach
I treated this assignment as a real-world production task. My focus was on component modularity and thematic consistency. The addition of the WebGL "EvilEye" in the Error Page demonstrates my ability to integrate complex libraries into a standard React environment to enhance the brand identity of a cybersecurity tool.