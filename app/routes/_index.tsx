import type { MetaFunction } from '@remix-run/node'
import Skills from '~/components/skills'

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

      <Skills />

      <section className="projects">
        <h2>Projects</h2>
        <ul>
          <li>Markdown Editor</li>
          <li>Galleria Slideshow</li>
          <li>Planets Fact Site</li>
        </ul>
      </section>

      <section className="contact">
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
