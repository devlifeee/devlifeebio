import type { ModelViewerElement } from '@google/model-viewer'

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<ModelViewerElement>, ModelViewerElement> & {
        src: string
        alt: string
        'camera-controls'?: boolean
        'auto-rotate'?: boolean
        'auto-rotate-delay'?: string
        'rotation-per-second'?: string
        'shadow-intensity'?: string
        exposure?: string
        'camera-orbit'?: string
        'min-camera-orbit'?: string
        'max-camera-orbit'?: string
        'interaction-prompt'?: string
        loading?: string
        ar?: boolean
      }
    }
  }
}

export default function App() {
  return (
    <>
      <main className="hero">
        <section className="intro" aria-labelledby="page-title">
          <h1 id="page-title">Hello everybody<br />I am <span>Ivan Novozhilov</span>.</h1>
          <p className="description">Frontend developer building modern products with React, TypeScript, JavaScript and AI.</p>
        </section>
      </main>

      <main className="content" aria-label="About me">
        <section className="about-section" id="about-me" aria-labelledby="about-title">
          <div className="section-label">01 / About</div>
          <div className="about-grid">
            <h2 id="about-title">About me</h2>
            <div className="about-copy">
              <p>I&rsquo;m a <strong>Frontend Developer</strong> focused on building modern web applications with <strong>React, TypeScript, and JavaScript</strong>.</p>
              <p>I enjoy turning ideas into working products and regularly participate in <strong>hackathons and industrial programming olympiads</strong>, where I work on real-world problems and build solutions under tight deadlines.</p>
              <p>I also have experience with <strong>B2B products</strong>, working with frontend development, business requirements, and user scenarios. One of my projects became <strong>one of the most popular projects at an olympiad</strong>, reaching <strong>100+ users within its first three days</strong>.</p>
              <p>Currently, I&rsquo;m interested in the intersection of frontend development, AI, and product development.</p>
            </div>
          </div>
        </section>

        <section className="achievements-section" id="achievements" aria-labelledby="achievements-title">
          <div className="section-label">02 / Milestones</div>
          <div className="achievements-grid">
            <h2 id="achievements-title">Achievements</h2>
            <ul className="achievement-list">
              <li><span>01</span><strong>Winner</strong><p>Nuclear IT Hack 2026, National Research Nuclear University MEPhI</p></li>
              <li><span>02</span><strong>Prize-winner</strong><p>Nuclear IT Hack 2025, National Research Nuclear University MEPhI</p></li>
              <li><span>03</span><strong>Prize-winner</strong><p>&ldquo;Решись&rdquo; Tournament, Central University 2025</p></li>
              <li><span>04</span><strong>Finalist</strong><p>PROD Olympiad 2026</p></li>
            </ul>
          </div>
        </section>

        <section className="model-section" id="model" aria-labelledby="model-title">
          <div className="section-label">03 / Character</div>
          <div className="model-heading">
            <h2 id="model-title">Meet the 3D version</h2>
            <p>The model is loading in the background while you explore the page.</p>
          </div>
          <div className="model-stage" aria-label="Interactive 3D Model">
          <model-viewer
            src={`${import.meta.env.BASE_URL}models/assets/models/model.glb`}
            alt="Мой 3D-персонаж" 
            loading="eager"
            camera-controls 
            auto-rotate
            auto-rotate-delay="0"
            rotation-per-second="10deg"
            shadow-intensity="1"
            exposure="1"
            camera-orbit="0deg 78deg 105%"
            min-camera-orbit="auto 40deg 65%"
            max-camera-orbit="auto 120deg 160%"
            interaction-prompt="auto"
            ar
          />
          <p className="hint">Потяни, чтобы повернуть</p>
          </div>
        </section>
      </main>
      <footer>© {new Date().getFullYear()} · Сделано с характером</footer>
    </>
  )
}
