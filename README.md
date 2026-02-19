# Layout Luxe

A modern, responsive web application built with React, JavaScript, and Tailwind CSS. A professional website showcasing modern web design and development practices.

## Features

- ⚡ **Fast Development** - Powered by Vite for instant HMR
- 🎨 **Modern Styling** - Tailwind CSS for utility-first styling
- 📱 **Fully Responsive** - Mobile-first design approach
- 🧩 **Reusable Components** - shadcn/ui component library integration
- 🔄 **State Management** - React Query for data fetching
- 🎯 **Routing** - React Router for navigation
- ✨ **Beautiful UI** - Lucide React icons and smooth animations
- 🧪 **Testing Ready** - Vitest configured for unit tests
- 📝 **ESLint Configured** - Code quality and consistency

## Tech Stack

- **Frontend Framework**: React 18.3.1
- **Build Tool**: Vite 5.4.19
- **Styling**: Tailwind CSS 3.4.17
- **Component Library**: shadcn/ui with Radix UI
- **Routing**: React Router DOM 6.30.1
- **State Management**: TanStack React Query 5.83.0
- **Icons**: Lucide React 0.462.0
- **Form Handling**: React Hook Form 7.61.1
- **Testing**: Vitest 3.2.4
- **Linting**: ESLint 9.32.0

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <YOUR_GIT_URL>
```

2. Navigate to the project directory:
```bash
cd layout-luxe-web
```

3. Install dependencies:
```bash
npm install
```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at:
- **Local**: http://localhost:8080/
- **Network**: http://192.168.20.7:8080/

### Building for Production

Create an optimized production build:

```bash
npm run build
```

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Check code quality with ESLint:

```bash
npm run lint
```

### Testing

Run unit tests:

```bash
npm run test
```

Watch mode for development:

```bash
npm run test:watch
```

## Project Structure

```
layout-luxe-web/
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # UI component stubs
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Features.jsx
│   │   ├── Projects.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   ├── MapSection.jsx
│   │   └── Footer.jsx
│   ├── pages/              # Page components
│   │   ├── Index.jsx
│   │   └── NotFound.jsx
│   ├── hooks/              # Custom React hooks
│   │   ├── use-mobile.jsx
│   │   └── use-toast.js
│   ├── lib/                # Utility functions
│   │   └── utils.js
│   ├── test/               # Test files
│   │   ├── setup.js
│   │   └── example.test.js
│   ├── assets/             # Static assets
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/                 # Static files
├── vite.config.js          # Vite configuration
├── vitest.config.js        # Vitest configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── eslint.config.js        # ESLint configuration
├── postcss.config.js       # PostCSS configuration
├── package.json
├── package-lock.json
└── README.md
```

## Key Components

### Pages
- **Index**: Main landing page with hero, features, projects, and testimonials
- **NotFound**: 404 error page

### Sections
- **Navbar**: Navigation bar with mobile menu support
- **Hero**: Hero section with call-to-action
- **About**: Company information and mission/vision
- **Features**: Why choose us section with feature cards
- **Projects**: Project showcase grid
- **Testimonials**: Client testimonials carousel
- **Contact**: Contact form and information
- **MapSection**: Embedded Google Map
- **Footer**: Footer with links and social media

## Configuration Files

- **vite.config.js** - Vite build tool configuration
- **tailwind.config.js** - Tailwind CSS theme and content configuration
- **eslint.config.js** - ESLint rules for code quality
- **vitest.config.js** - Unit testing configuration
- **postcss.config.js** - PostCSS and Tailwind CSS processing

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

The application is optimized for:
- Fast page load times (Vite instant HMR)
- Responsive images and lazy loading
- Optimized bundle size
- CSS class purging with Tailwind

## Development Best Practices

1. **Component Structure** - Keep components focused and single-responsibility
2. **Props Drilling** - Use Context API or React Query for global state
3. **CSS Classes** - Use Tailwind utility classes for styling
4. **Responsive Design** - Mobile-first approach with Tailwind breakpoints
5. **Accessibility** - Use semantic HTML and proper ARIA attributes
6. **Performance** - Lazy load components and images when needed

## Troubleshooting

### Port Already in Use
If port 8080 is in use, Vite will automatically use the next available port.

### Module Not Found
Clear node_modules and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Failures
Check Node.js version compatibility and clear Vite cache:
```bash
rm -rf node_modules/.vite
npm run dev
```

## Contributing

1. Create a feature branch (`git checkout -b feature/AmazingFeature`)
2. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
3. Push to the branch (`git push origin feature/AmazingFeature`)
4. Open a Pull Request

## License

This project is private and proprietary.

---

**Built with ❤️ using React and Tailwind CSS**

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
