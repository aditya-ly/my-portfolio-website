# 🚀 Aditya Laksita Yhuda - Portfolio Website

A modern, responsive portfolio website built with Next.js 16, showcasing my projects, skills, and experience as a Full Stack Developer and Software Data Integration Engineer.

![Portfolio Preview](./public/professional-developer-portrait.png)

## ✨ Features

- 🎨 **Modern Design** - Clean and professional UI with smooth animations
- 🌓 **Dark/Light Mode** - Toggle between themes with persistent settings
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- ⚡ **Fast Performance** - Built with Next.js 16 and optimized for speed
- 🎭 **Interactive Components** - Engaging animations and transitions
- 📊 **Project Showcase** - Display your best work with detailed descriptions
- 📧 **Contact Form** - Easy way for visitors to get in touch

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) with React 19
- **Styling:** [Tailwind CSS 4.1](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Typography:** Inter font family
- **Icons:** [Lucide React](https://lucide.dev/)
- **Form Handling:** React Hook Form + Zod validation
- **Theme:** next-themes for dark/light mode
- **Language:** TypeScript

## 📂 Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── about-section.tsx
│   ├── contact-section.tsx
│   ├── experience-section.tsx
│   ├── footer.tsx
│   ├── landing-hero.tsx
│   ├── navigation.tsx
│   ├── projects-section.tsx
│   ├── skills-section.tsx
│   ├── theme-provider.tsx
│   └── ui/               # shadcn/ui components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets (images, etc.)
└── styles/              # Additional styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Run the development server:
```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Update Personal Information

Edit the following files to customize with your information:

1. **components/landing-hero.tsx** - Update name and title
2. **components/about-section.tsx** - Update bio and skills
3. **components/projects-section.tsx** - Add/edit your projects
4. **components/experience-section.tsx** - Add your work experience
5. **components/skills-section.tsx** - Update your technical skills
6. **components/contact-section.tsx** - Update contact information

### Update Images

Replace images in the `public/` directory:
- `professional-developer-portrait.png` - Your profile photo
- Project images for each project showcase

## 🏗️ Build for Production

```bash
pnpm build
# or
npm run build
```

Then start the production server:

```bash
pnpm start
# or
npm start
```

## 🚀 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Other Deployment Options

- **Netlify:** Connect your GitHub repo and deploy
- **AWS Amplify:** Use the Amplify Console
- **Docker:** Use the included Dockerfile (if added)

## 📦 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🎨 Color Customization

The portfolio uses CSS variables for theming. Edit `app/globals.css` to customize colors:

```css
:root {
  --primary: ...;
  --accent: ...;
  /* etc */
}
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

**Aditya Laksita Yhuda**

- Full Stack Developer
- Software Data Integration Engineer
- 📧 Email: [your-email@example.com]
- 💼 LinkedIn: [your-linkedin]
- 🐙 GitHub: [@your-username]

## 🌟 Show Your Support

Give a ⭐️ if you like this project!

---

Made with ❤️ using Next.js and Tailwind CSS
