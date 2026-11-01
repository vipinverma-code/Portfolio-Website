import React from "react";

const experiences = [
  {
    id: 1,
    period: "15 September 2025 – 15 December 2025",
    year: "2025",
    duration: "SEP — DEC",
    role: "Web Developer Intern",
    company: "Webly Technolab",
    type: "Internship",
    description:
      "Worked on frontend development, building and improving website layouts and user interfaces. Gained practical experience in creating responsive designs and developing user-friendly web pages.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "CSS3",
      "HTML5",
      "Laravel",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 md:py-28 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div
        className="absolute top-1/2 left-1/4
        w-96 h-96 bg-primary/5 rounded-full
        blur-3xl -translate-y-1/2 pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span
            className="text-seconadry-foreground text-sm
            font-medium tracking-wider uppercase"
          >
            Career Journey
          </span>

          <h2
            className="text-4xl md:text-5xl font-bold
            mt-4 mb-5 text-foreground"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-primary">
              speaks volumes.
            </span>
          </h2>

          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            My professional journey as a frontend developer, gaining practical
            experience in building responsive and user-friendly web interfaces.
          </p>
        </div>

        {/* Experience List */}
        <div className="max-w-5xl">
          {experiences.map((exp) => (
            <article
              key={exp.id}
              className="grid md:grid-cols-[180px_1fr]
              gap-6 md:gap-10 items-start
              animate-fade-in"
            >
              {/* Left Metadata */}
              <div className="md:sticky md:top-28">
                <h3 className="text-3xl font-bold text-primary">{exp.year}</h3>

                <p className="text-sm text-muted-foreground mt-1">
                  {exp.duration}
                </p>

                <span
                  className="inline-flex mt-4 px-3 py-1.5
                  text-xs font-medium text-primary
                  bg-primary/10 border border-primary/20
                  rounded-full"
                >
                  {exp.type}
                </span>
              </div>

              {/* Experience Card */}
              <div
                className="glass group rounded-2xl p-6 md:p-8
                border border-primary/20
                transition-all duration-300
                hover:border-primary/50
                hover:-translate-y-1"
              >
                <div
                  className="flex flex-col sm:flex-row
                  sm:items-center sm:justify-between gap-2"
                >
                  <h4
                    className="text-xl md:text-2xl
                    font-bold text-foreground
                    group-hover:text-primary
                    transition-colors duration-300"
                  >
                    {exp.role}
                  </h4>

                  <span className="text-sm text-muted-foreground">
                    {exp.period}
                  </span>
                </div>

                <p className="text-muted-foreground mt-2">{exp.company}</p>

                <p
                  className="text-sm md:text-base
                  text-muted-foreground leading-relaxed mt-6"
                >
                  {exp.description}
                </p>

                <div className="mt-7 pt-5 border-t border-border">
                  <h5
                    className="text-sm font-semibold
                    text-foreground mb-4"
                  >
                    Technologies & Tools
                  </h5>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-surface
                        text-xs rounded-full
                        text-muted-foreground
                        border border-border
                        transition-colors duration-300
                        hover:text-primary hover:border-primary/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
