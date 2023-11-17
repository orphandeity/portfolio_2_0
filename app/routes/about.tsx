import type { MetaFunction } from '@remix-run/node'
import { Link } from '@remix-run/react'

export const meta: MetaFunction = () => {
  return [
    { title: 'Jeff Williams | Web Developer' },
    {
      name: 'description',
      content: 'Portfolio of Web Development work by Jeff Williams',
    },
  ]
}

export default function About(): JSX.Element {
  return (
    <div className="about">
      <h2>About me</h2>
      <div className="about_content">
        <p>
          Hi there! I'm Jeff. I'm an electronic musician who loves building
          things with code. I first discovered programming through computer
          music. For over ten years, I've used visual programming languages like
          Max and Pure Data to make custom instruments and audio effects.
        </p>
        <p>
          Learning to use these tools was a challenging but rewarding experience
          that helped me grow as an artist. They taught me to approach
          problem-solving programmatically and inspired me to explore innovative
          ways to combine different mediums and technologies.
        </p>
        <p>
          Several years ago, I shifted my focus toward web technologies. I found
          myself intrigued by hypermedia and was eager to experiment with the
          platform's capabilities. I started learning about HTML, CSS, and
          JavaScript and gradually built my skills in web development. It wasn't
          easy initially, but I enjoyed creating websites and applications that
          people could access worldwide.
        </p>
        <p>
          Since then, I've been honing my skills and learning JavaScript. I
          completed the Frontend Engineering Career Path certification program
          at Codecademy and participated in a comprehensive series of React
          workshops from Frontend Masters. I am always working on personal
          projects to refine my skills and am determined to stay current within
          a quickly changing industry.
        </p>
        <p>
          Currently, I am seeking a full-time role where I can help a company
          achieve its goals and grow as a valued team member. If you are looking
          to hire a developer, please feel free to{' '}
          <Link to="/#contact" className="link">
            reach out
          </Link>
          . I would love to hear from you!
        </p>
      </div>
    </div>
  )
}
