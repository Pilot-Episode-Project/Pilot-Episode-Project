🚀 Pilot Episode

A Team-Building & Project Matching Platform for CS Students

📌 Overview

Pilot Episode is a web-based community platform that helps students turn ideas into teams.
Instead of a simple “post and pray” bulletin board, it supports granular interest tags, tech-stack-based discovery, and a role-based application system (Frontend, Backend, ML, etc.) to make forming project teams fast and structured—perfect for hackathons and class projects.

✨ Core Features
1) 🔍 Advanced Filtering & Search

Interest Categories: Browse projects by specialized categories such as:
Web Development, AI / Machine Learning, Data Science & Analytics, Blockchain & Web3, and more.

Tech-Stack Search: Type React, Python, TensorFlow, etc. to instantly find projects using your preferred tools.

2) 📝 Smooth Project Creation Flow

Step-by-step publishing: A clean 3-step UI flow:
Basics → Tags → Tech Stack

33+ Tech Stack Options: Creators can choose from a wide set of technologies to clearly communicate what the project needs.

3) 🎯 Role-Based Application System

Project leads define open roles (e.g., UI/UX Designer, Data Scientist) and specify how many members they need.

Users apply to specific roles directly from project pages.

Applications include real-time status tracking synced with the database.

4) 👤 Custom Profiles & Dashboard

Users can configure:

Skills / tech stack

Interest tags

GitHub + LinkedIn links

Avatar / project images (via storage)

A personalized dashboard shows:

Projects you posted

Applications you’ve submitted

Status updates in one place

🧱 Tech Stack
Frontend

React (Vite)

React Router DOM

Custom Vanilla CSS (no external UI libraries)

Backend (BaaS)

Supabase (PostgreSQL)

Supabase Auth

Supabase Storage (avatars + project images)

🗄 Database Architecture

Pilot Episode uses a normalized PostgreSQL structure with 4 core tables:

profiles

User identity & profile info

Skills / tech stacks / interests

Social links (GitHub, LinkedIn)

projects

Core project details and metadata

Category tags

Author foreign key

project_roles

Role definitions per project (e.g., Frontend, ML)

Availability & capacity (open/closed, required members)

applications

Maps users → roles

Tracks application status + history

📦 Getting Started
1) Clone the repository
git clone https://github.com/payjuper/cheesehacks.git
cd cheesehacks/Cheesehacks-projectSpecifics
2) Install dependencies
npm install
3) Configure environment variables

Create a .env file in the project root:

VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
4) Run the development server
npm run dev
🧪 Scripts

Common commands (Vite defaults):

npm run dev       # Start dev server
npm run build     # Build for production
npm run preview   # Preview production build locally
👨‍💻 Authors

Seunghoon Lee (Junior, Computer Science @ UW–Madison) — GitHub: @twoSquaredHoon

Jihun Chung (Sophomore, Computer Science @ UW–Madison) — GitHub: @MaxInventory

Hyuckjoon Kwon (Junior, Computer Science @ UW–Madison) — GitHub: @DARKXIGN

Youngkyo Kim (Junior, Computer Science @ UW–Madison) — GitHub: @payjuper

📄 License

Add your license here (e.g., MIT) if/when you decide to open-source it.
