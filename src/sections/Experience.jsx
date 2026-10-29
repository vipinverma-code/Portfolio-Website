import React from "react";
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
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Bg glow */}
      <div
        className="absolute top-1/2 left-1/4 w-96
      h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/*Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-seconadry-foreground text-sm
          font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>

          <h2
            className="text-4xl md:text-5xl font-bold
          mt-4 mb-6 animate-fade-in animation-delay-100
          text-seconadry-foreground"
          >
            Experience that {" "}
            <span className="font-serif italic font-normal text-white">
              speaks voulmes.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A timeline of my growth as a frontend developer, combining
            professional experience, continuous learning, and hands-on project
            development.
          </p>
        </div>
        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />
         {/* Experience Items */}
         <div className="space-y-12">

          </div>
 

        </div>
      </div>
    </section>
  );
};

export default Experience;
