// import { GitHubLogoIcon, RocketIcon } from '@radix-ui/react-icons'
import { ExternalLinkIcon } from '@radix-ui/react-icons'
import styles from './style.module.css'

const data = [
  {
    title: 'Markdown Editor',
    description: 'A simple in-browser markdown editor with CRUD capabilities',
    demo: 'https://orphandeity.github.io/markdown-editor/',
    code: 'https://github.com/orphandeity/markdown-editor.git',
  },
  {
    title: 'Galleria Slideshow',
    description:
      'A gallery website with a masonry layout, lightbox view, and slideshow',
    demo: 'https://galleria-slideshow-site-amber.vercel.app/',
    code: 'https://github.com/orphandeity/galleria-slideshow-site.git',
  },
  {
    title: 'Planets Fact Site',
    description:
      'An educational web app with information about the planets in our solar system',
    demo: 'https://planets-fact-site-two.vercel.app/',
    code: 'https://github.com/orphandeity/planets-fact-site.git',
  },
]

export default function Projects({
  ...props
}: React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <section>
      <div className="grid">
        <div>
          <h2>Projects</h2>
          <p data-hidden className="text">
            Here are some of the projects I've been working on. Click on a
            project to view more info.
          </p>
        </div>
        <ul className={styles.list}>
          {data.map((project, index) => (
            <li key={index} className={styles.item}>
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className={styles.links}>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    <span>Live demo</span>
                    <ExternalLinkIcon />
                  </a>
                )}
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    <span>Code repository</span>
                    <ExternalLinkIcon />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
