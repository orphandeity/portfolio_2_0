import styles from './style.module.css'

export default function Projects({
  ...props
}: React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <section>
      <h2>Projects</h2>
      <ul className={styles.projects}>
        <li>Markdown Editor</li>
        <li>Galleria Slideshow</li>
        <li>Planets Fact Site</li>
      </ul>
    </section>
  )
}
