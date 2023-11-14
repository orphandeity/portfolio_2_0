import type { MetaFunction } from '@remix-run/node'
import Contact from '~/components/contact'
import Projects from '~/components/projects'
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

      <Projects />

      <Contact />
    </div>
  )
}
