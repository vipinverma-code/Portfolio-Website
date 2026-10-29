import React from 'react'
const experiences = [
  {
    period: "15 September 2025 - 15 December 2025 ",
    role: "Web Developer Intern",
    company: "Webly Technolab",
    description:
      "Worked on frontend development, building and improving website layouts and user interfaces. Gained practical experience in creating responsive designs and developing user-friendly web pages.",
    technologies: [
      "React",
      "Javascript",
      "TailwindCSS",
      "CSS3",
      "HTML5",
      "Laravel",
    ],
    current: false,
  },
];
const Experience = () => {
  return (
    <section
    id="experience" className="py-32 relative overflow-hidden"
    >
      {/* Bg glow */}
      <div className='absolute top-1/2 left-1/4 w-96
      h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2' />

      <div className='container mx-auto px-6 relative z-10'>

      </div>

    </section>
  )
}

export default Experience