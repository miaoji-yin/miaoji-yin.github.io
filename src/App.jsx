import React from 'react';
import { projects, siteContent } from './data/siteContent.js';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import HomePage from './pages/HomePage.jsx';
import { projectPages } from './pages/projects/index.js';

function getCurrentRoute() {
  const hash = window.location.hash.replace(/^#\/?/, '');
  return hash || 'home';
}

function Sidebar({ currentRoute }) {
  return (
    <aside className="sidebar" aria-label="Site navigation">
      <a className="identity" href="#/" aria-current={currentRoute === 'home' ? 'page' : undefined}>
        <span className="identity__name">{siteContent.name}</span>
        <span className="identity__chinese">
          <span>{siteContent.chineseName.first}</span>
          <span className="identity__chinese-second">{siteContent.chineseName.second}</span>
        </span>
      </a>

      <nav className="site-nav">
        <div className="project-links">
          {projects.map((project) => (
            <a
              key={project.slug}
              href={`#/projects/${project.slug}`}
              aria-current={currentRoute === `projects/${project.slug}` ? 'page' : undefined}
            >
              {project.title}
            </a>
          ))}
        </div>

        <div className="utility-links">
          <a href="#/about" aria-current={currentRoute === 'about' ? 'page' : undefined}>
            About
          </a>
          <a href="#/contact" aria-current={currentRoute === 'contact' ? 'page' : undefined}>
            Contact
          </a>
        </div>
      </nav>
    </aside>
  );
}

function PageContent({ route }) {
  if (route === 'about') {
    return <AboutPage content={siteContent.about} />;
  }

  if (route === 'contact') {
    return <ContactPage content={siteContent.contact} />;
  }

  if (route.startsWith('projects/')) {
    const slug = route.replace('projects/', '');
    const Project = projectPages[slug];
    return Project ? <Project /> : <HomePage image={siteContent.homeImage} />;
  }

  return <HomePage image={siteContent.homeImage} />;
}

export default function App() {
  const [route, setRoute] = React.useState(getCurrentRoute);

  React.useEffect(() => {
    const handleHashChange = () => setRoute(getCurrentRoute());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="site-shell">
      <Sidebar currentRoute={route} />
      <main className="content" aria-live="polite">
        <PageContent route={route} />
      </main>
    </div>
  );
}
