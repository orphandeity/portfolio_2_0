import styles from './style.module.css'

const data = [
  {
    category: 'Modern Frontend Development',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'],
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
      <h2>Skills</h2>
      <div className={styles.skills}>
        {data.map((category) => (
          <div key={category.category}>
            <h3>{category.category}</h3>
            <ul>
              {category.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
