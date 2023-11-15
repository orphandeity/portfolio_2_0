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
    demo: 'https://orphandeity.github.io/markdown-editor/',
    code: 'https://github.com/orphandeity/markdown-editor.git',
  },
  {
    title: 'Planets Fact Site',
    description:
      'An educational web app with information about the planets in our solar system',
    demo: 'https://orphandeity.github.io/markdown-editor/',
    code: 'https://github.com/orphandeity/markdown-editor.git',
  },
]

export default function Projects({
  ...props
}: React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <section>
      <h2>Projects</h2>
      <ul className={styles.list}>
        {data.map((project, index) => (
          <li key={index} className={styles.item}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className={styles.links}>
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live demo
                </a>
              )}
              {project.code && (
                <a href={project.code} target="_blank" rel="noreferrer">
                  Code repository
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
