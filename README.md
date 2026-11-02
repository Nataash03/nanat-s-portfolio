# 🕵️ Portfolio

A personal portfolio website for **Natasya Agustine S.**, an Informatics Engineering student, designed as a detective's crime board. Projects become **case files**, the tech stack becomes the **evidence locker**, and recruiters can send a **dispatch** straight to my inbox.

🔗 **Live site:** [nanat-s-portfolio.vercel.app](https://nanat-s-portfolio.vercel.app)

## ✨ Features

- **Crime board hero** – an investigation summary pinned on a cork board, connected by red strings drawn with the HTML Canvas API.
- **Case files** – click a project to open a popup with its problem, solution, tech stack, live demo, and source code. Close it with the X button, by clicking outside the popup, or by pressing `Esc`.
- **Evidence locker** – an overview of the tech arsenal I work with.
- **UV Neon Vision mode** – toggle between the Noir theme and a neon blue UV theme.
- **Contact form** – visitors can send a message that arrives directly in my email, powered by [Web3Forms](https://web3forms.com).
- **Downloadable CV** – one click to download my resume as a PDF.
- **Responsive layout** – works on desktop and mobile.

## 🗂️ Featured Projects

| Case | Project | Stack |
|------|---------|-------|
| #001 | **Terminal Juice** – e-commerce web app for a campus juice stall | React, Next.js, Node.js, MongoDB, Cloudinary |
| #002 | **Nusantara Web** – interactive platform introducing Javanese culture | HTML5, CSS3, JavaScript |
| #003 | **Central Creative Hub** – digital gallery and studio reservation platform for FSRD students | React, Node.js, MongoDB, Atlas, Cloudinary |

## 🛠️ Built With

- HTML5, Vanilla JavaScript
- [Tailwind CSS](https://tailwindcss.com) (via CDN)
- [Lucide Icons](https://lucide.dev)
- Google Fonts (Special Elite, Courier Prime, Plus Jakarta Sans)
- [Web3Forms](https://web3forms.com) for the contact form

No build step or package installation needed.

## 🚀 Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/Nataash03/nanat-s-portfolio.git
cd nanat-s-portfolio

# 2. Serve it with any local server, for example:
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

> The contact form needs to be opened through `http://` (Live Server or a local server), not by double-clicking `index.html`, because browsers often block form requests from `file://`.

## 📬 Contact Form Setup

The form sends submissions with Web3Forms. To use your own inbox:

1. Create a free access key at [web3forms.com](https://web3forms.com).
2. Open `script.js` and replace the value of `WEB3FORMS_ACCESS_KEY` with your key.

The access key is not a secret and is safe to use in client-side code.

## 📁 Project Structure

```
├── index.html      # Page structure (Tailwind utility classes)
├── style.css       # Custom styles (cork board, UV mode, stamps, etc.)
├── script.js       # Case modal, UV mode, red strings, contact form, CV download
├── images/         # Project screenshots
└── cv/             # Resume PDF
```

## 📫 Let's Connect

- GitHub: [@Nataash03](https://github.com/Nataash03)
- LinkedIn: [Natasya Agustine Sadhi](https://www.linkedin.com/in/natasya-agustine-sadhi-1152b3389/)

---
