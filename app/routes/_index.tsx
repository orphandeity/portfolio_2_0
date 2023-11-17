import type { MetaFunction } from '@remix-run/node'
import Hero from '~/components/hero'
import Skills from '~/components/skills'
import Projects from '~/components/projects'
import Contact from '~/components/contact'

export const meta: MetaFunction = () => {
  return [
    { title: 'Jeff Williams | Web Developer' },
    {
      name: 'description',
      content: 'Portfolio of Web Development work by Jeff Williams',
    },
  ]
}

export default function Index() {
  return (
    <div className="gap">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
