# Manjeet Singh — Developer Portfolio ⛏️

A production-quality personal portfolio website with a **Minecraft-inspired creative developer aesthetic**. Built with React, TypeScript, Vite, and Tailwind CSS.

## 🎮 Features

- **Minecraft-Themed UI System**: Custom pixel-art SVG icons, inventory-slot bevels, and Minecraft-style block styling
- **Interactive Hotbar Navigation**: Press keys 1–8 to jump directly between sections
- **Developer Console**: Press `` ` `` or `~` to toggle a terminal shell — try `/help`, `/skills`, `/projects`, `/contact`
- **Authentic Project Builds**: Clean, professional cards showcasing real projects including the **FlashCard Generator App**, **School Website (Frontend)**, **Personal Portfolio Website**, and **AutoTank Project Exhibition**
- **Experience & Training**: Detailed career progression featuring 45-day Web Development training at **Curious Team Learning Pvt. Ltd.** (Kota), **XPERT CODERS Pvt. Ltd.** (Jodhpur), **Developer Student Club RTU**, and campus leadership
- **Comprehensive Skill Tree**: Categorized inventory covering C, C++, Java, JavaScript, HTML5, CSS3, Responsive Design, DOM Manipulation, Git, GitHub, and ongoing learning in React.js, Node.js, and DSA
- **Full Printable Resume**: Instant in-browser resume viewer with Print/PDF export and plain-text copy
- **Functional Contact Dispatch**: Working `mailto:` composer with pre-filled subject/body and instant email clipboard copy
- **Responsive & Accessible**: Mobile-first layout, high-contrast readability, semantic HTML, and zero bloated dependencies

## 🛠️ Tech Stack

| Category   | Technology                                                    |
|------------|---------------------------------------------------------------|
| Framework  | React 19 + TypeScript                                         |
| Build Tool | Vite 8                                                        |
| Styling    | Tailwind CSS 4 + Minecraft-inspired beveled CSS classes       |
| Icons      | Lucide React + custom pixel-art SVG components                |
| Fonts      | Silkscreen / Press Start 2P (pixel), Inter (body), JetBrains Mono (code) |

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## 📂 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx           # Fixed top navigation with pixel branding & shortcuts
│   ├── Hero.tsx             # Hero section with HUD & player card
│   ├── About.tsx            # Player profile, lore narrative & education credentials
│   ├── Skills.tsx           # Categorized skill tree (C, C++, Java, JS, HTML, CSS, etc.)
│   ├── Projects.tsx         # Clean, authentic project showcase
│   ├── Experience.tsx       # Quest log & timeline (Curious Team, XPERT CODERS, DSC RTU)
│   ├── Contact.tsx          # Transmission beacon & direct communication channels
│   ├── Hotbar.tsx           # Bottom inventory hotbar (1-8 keys)
│   ├── ResumeModal.tsx      # Full verified resume viewer with print & copy
│   ├── CommandConsole.tsx   # Interactive terminal shell
│   ├── PixelIcons.tsx       # Custom pixel-art SVG icon components
│   └── SocialIcons.tsx      # GitHub & LinkedIn SVG icons
├── data/
│   └── resumeData.ts        # Single source of truth for all developer data
├── App.tsx                  # Root component
├── main.tsx                 # Entry point
└── index.css                # Base styles & Minecraft utility bevels
```

## 📄 License

Personal developer portfolio — feel free to use as inspiration for your own.

---

**Crafted block by block** 🟩
