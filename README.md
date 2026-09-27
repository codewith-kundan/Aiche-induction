# AIChE Chapter Executive Team Directory

This is a complete, production-quality AIChE Chapter Executive Team Directory web application, designed with a high-end maximalist editorial and futuristic engineering aesthetic. It was built for the AIChE Web Development Team induction task.

## Features
- **Maximalist UI/UX:** High-contrast, dark-first design inspired by chemical engineering, scientific laboratories, and modern technology.
- **Responsive Layout:** Works beautifully across mobile, tablet, and desktop viewports without horizontal scrolling.
- **Dynamic Filtering & Search:** Instantly filter members by department or search by name/role/department.
- **Premium Member Cards:** Detailed member cards featuring abstract tech patterns, interactive hover states, and smooth transitions.
- **Member Detail Modal:** A beautiful modal/drawer displaying comprehensive member information, social links, and bio. 
- **Light / Dark Mode:** Fully functional theme toggler ensuring perfect contrast and readability on both themes.
- **Micro-Interactions & Animations:** CSS/Tailwind-based tasteful animations such as float, fade-in, and hover state transforms for elevated user experience.

## Tech Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (v4)
- **Icons:** Lucide React
- **Themes:** next-themes

## Project Structure
```
src/
├── app/
│   ├── globals.css      # Core styles, animations, theme vars
│   ├── layout.tsx       # Root layout containing Navbar, Footer, and ThemeProvider
│   └── page.tsx         # Main page aggregating Hero and TeamDirectory
├── components/
│   ├── FilterBar.tsx    # Filter options and Search input
│   ├── Footer.tsx       # Standard app footer
│   ├── Hero.tsx         # Highly animated and visual intro header
│   ├── MemberCard.tsx   # Visual card representation of an executive
│   ├── MemberModal.tsx  # Detailed popup modal for the member
│   ├── Navbar.tsx       # Main navigation and theme toggle
│   ├── TeamDirectory.tsx # Stateful container for rendering the team
│   └── ThemeProvider.tsx # Next-themes context wrapper
├── data/
│   └── members.ts       # Mocked robust data of 6 AIChE chapter members
├── lib/
│   └── utils.ts         # Tailwind `cn` utility function
└── types/
    └── member.ts        # TypeScript definitions for member types
```

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd "AICHE INDUCTION"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build for Production
To generate a production build:
```bash
npm run build
```

## Deployment
This project can easily be deployed on Vercel. 
1. Push your code to GitHub.
2. Link your GitHub repository in the Vercel Dashboard.
3. Vercel will automatically detect the Next.js framework and configure the deployment.
4. Click "Deploy".
# Aiche-induction
