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
        poster?: string
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
          <p className="description">Here will soon appear my projects, ideas and everything that inspires me. And for now, get to know my 3D character.</p>
        </section>
        <section className="model-stage" id="model" aria-label="Interactive 3D Model">
          <model-viewer
            src={`${import.meta.env.BASE_URL}models/assets/models/model.glb`}
            alt="Мой 3D-персонаж" 
            poster={`${import.meta.env.BASE_URL}models/assets/models/model-poster.png`}
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
        </section>
      </main>
      <footer>© {new Date().getFullYear()} · Сделано с характером</footer>
    </>
  )
}
