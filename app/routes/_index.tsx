import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export default function Index() {
  return (
    <div className="grid gap">
      <h1>
        Hi, I'm Jeff...
        <br />
        Web Developer
        <br />
        and Musician.
      </h1>
      <p>
        I create dynamic web experiences that people love to use. You can read a
        bit more about me or check out some things I have built.
      </p>

      <section>
        <h2>Skills</h2>
        <details>
          <summary>Modern Frontend Development</summary>
          HTML, CSS, JavaScript, TypeScript, React
        </details>
        <details>
          <summary>Server-Side Development</summary>
          Node, Express, Next, Remix
        </details>
        <details>
          <summary>Database Management</summary>
          SQL, Postgres, SQLite3
        </details>
        <details>
          <summary>Version Control and Collaboration</summary>
          Git, GitHub, Figma, Sketch
        </details>
      </section>

      <section>
        <h2>Projects</h2>
        <ul className="projects">
          <li>Markdown Editor</li>
          <li>Galleria Slideshow</li>
          <li>Planets Fact Site</li>
        </ul>
      </section>

      <section>
        <h2>Contact</h2>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" />
          </div>
          <button>Send message</button>
        </form>
      </section>
    </div>
  )
}
