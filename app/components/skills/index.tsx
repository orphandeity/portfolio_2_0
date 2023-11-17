import styles from './style.module.css'

const data = [
  {
    category: 'Modern Frontend Development',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    category: 'Server-Side Development',
    skills: ['Node', 'Express', 'Next', 'Remix'],
  },
  {
    category: 'Database Management',
    skills: ['SQL', 'Postgres', 'SQLite3'],
  },
  {
    category: 'Version Control and Collaboration',
    skills: ['Git', 'GitHub', 'Figma', 'Sketch'],
  },
]

export default function Skills({
  ...props
}: React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <section {...props}>
      <div className={styles.container}>
        <div>
          <h2>Skills</h2>
          <p data-hidden className="text">
            I use modern tools and frameworks, along with a strong adherance to
            web standards to build fast, accessible, and secure web
            applications.
          </p>
        </div>
        <div className={styles.categories}>
          {data.map((category) => (
            <div key={category.category}>
              <h3>{category.category}</h3>
              <ul className={styles.list}>
                {category.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
