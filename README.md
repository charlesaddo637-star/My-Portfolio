
# Charles.dev Portfolio

Personal portfolio website for **Charles Kofi Addo**, a frontend developer and Computer Science student. The site presents my skills, learning journey, featured projects, certificates, and contact links in a responsive single-page experience.

![Charles.dev portfolio preview](./public/Portfolio.webp)

## Live Demo

[View the live portfolio](https://charlesaddo637-star.github.io/My-Portfolio/)

## Features

- Responsive single-page portfolio layout
- Smooth navigation between About, Skills, Experience, and Contact sections
- Featured projects loaded from the GitHub REST API
- Automatic filtering of GitHub repositories marked with `Featured` in their description
- Certificate and letter-of-recommendation preview modal
- Responsive mobile navigation menu
- GitHub, LinkedIn, and email contact links
- GitHub Pages-ready Vite configuration

## Built With

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- JavaScript (ES modules)
- HTML5 and CSS3
- GitHub REST API

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/charlesaddo637-star/My-Portfolio.git
   cd My-Portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the local URL shown in the terminal.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Featured Projects

The Featured Projects section requests public repositories from the
[`charlesaddo637-star`](https://github.com/charlesaddo637-star) GitHub account. A repository appears on the portfolio when its description contains the word `Featured`.

To feature a project:

1. Add a description to the GitHub repository.
2. Include `Featured` in that description.
3. Optionally add repository topics; the first topic is displayed on the portfolio card.

## Project Structure

```text
src/
├── Components/
│   ├── About/
│   ├── Contact/
│   ├── Experience/
│   ├── Footer/
│   ├── Hero/
│   ├── Navbar/
│   └── Skills/
├── App.jsx
├── App.css
├── index.css
└── main.jsx
public/
├── Certificates/
└── Portfolio.webp
```

## Deployment

The Vite base path is configured for the `My-Portfolio` GitHub Pages project site. Build the application with:

```bash
npm run build
```

The generated files are placed in `dist/` and can be deployed to GitHub Pages or another static hosting provider.

## Contact

- **GitHub:** [charlesaddo637-star](https://github.com/charlesaddo637-star)
- **LinkedIn:** [Charles Addo](https://linkedin.com/in/charles-a-37b310412)
- **Email:** [charlesaddo637@gmail.com](mailto:charlesaddo637@gmail.com)

## License

This project is a personal portfolio. Please contact me before reusing its content, images, or certificates.
