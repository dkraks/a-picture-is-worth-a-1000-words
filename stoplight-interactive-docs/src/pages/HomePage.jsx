import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>Doodle API Docs</h1>
        <p>
          Interactive documentation and SDK tutorials for the Doodle API.
          Browse the API reference or follow step-by-step tutorials to get
          started.
        </p>
        <div className="hero-actions">
          <Link to="/tutorials" className="btn btn-primary">
            Start Tutorial
          </Link>
          <Link to="/api-reference" className="btn btn-secondary">
            API Reference
          </Link>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>Interactive Tutorials</h3>
          <p>
            Step-by-step SDK walkthroughs with multi-language code examples.
            Switch between JavaScript, Python, and cURL.
          </p>
        </div>
        <div className="feature-card">
          <h3>API Reference</h3>
          <p>
            Full OpenAPI-powered reference docs with an interactive
            try-it-out console, powered by Stoplight Elements.
          </p>
        </div>
        <div className="feature-card">
          <h3>Code Playground</h3>
          <p>
            View expected outputs for each code example. Copy snippets
            directly and integrate them into your project.
          </p>
        </div>
      </section>
    </div>
  );
}
