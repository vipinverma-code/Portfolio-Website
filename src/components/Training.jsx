import React from "react";

const certificates = [
  {
    id: 1,
    title: "MERN Stack Development & DSA",
    category: "Technical Training",
    issuer: "ShapeMySkills by Ducat",
    association: "In association with BBDNIIT",
    date: "1 July – 6 August 2025",
    duration: "90 Hours",
    description:
      "Successfully completed a 90-hour training program focused on MERN Stack Development and Data Structures & Algorithms.",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "DSA"],
    image: "/certificates/mern-stack-dsa.png",
  },
  {
    id: 2,
    title: "Python Programming",
    category: "Workshop",
    issuer: "Softpro India",
    association: "BBDNIIT",
    date: "10 January 2024",
    duration: null,
    description:
      "Participated in a Python Programming workshop organized by Softpro India.",
    skills: ["Python Programming"],
    image: "/certificates/python-workshop.jpg",
  },
  {
    id: 3,
    title: "Career Essentials in Generative AI",
    category: "Learning Path",
    issuer: "Microsoft & LinkedIn Learning",
    association: "LinkedIn Learning",
    date: "1 June 2024",
    duration: "4 Hours 30 Minutes",
    description:
      "Completed a learning path covering Artificial Intelligence, Generative AI, and Computer Ethics.",
    skills: ["Artificial Intelligence", "Generative AI", "Computer Ethics"],
    image: "/certificates/generative-ai.png",
    file: "/certificates/generative-ai.pdf",
  },
];

const Training = () => {
  return (
    <section id="training" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute top-1/4 right-0
        w-96 h-96 bg-primary/5 rounded-full
        blur-3xl pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 animate-fade-in">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-seconadry-foreground
              text-sm font-medium tracking-wider uppercase"
            >
              Continuous Learning
            </span>

            <span className="w-12 h-px bg-primary/50" />
          </div>

          <div
            className="flex flex-col sm:flex-row
            sm:items-end sm:justify-between gap-5"
          >
            <h2
              className="text-4xl md:text-5xl
              font-bold text-foreground"
            >
              Training &{" "}
              <span
                className="font-serif italic
                font-normal text-primary"
              >
                Certifications.
              </span>
            </h2>

            <span
              className="text-sm text-muted-foreground
              border border-border rounded-full
              px-4 py-2 w-fit shrink-0"
            >
              03 Credentials
            </span>
          </div>

          <p
            className="text-muted-foreground
            leading-relaxed mt-6 max-w-2xl"
          >
            Technical training, workshops, and learning paths that have
            strengthened my programming foundations and contributed to my
            continuous growth as a developer.
          </p>
        </div>

        {/* Certificates Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2
          xl:grid-cols-3 gap-6"
        >
          {certificates.map((certificate, index) => (
            <article
              key={certificate.id}
              className="glass group rounded-2xl
              overflow-hidden border border-border
              hover:border-primary/40
              transition-all duration-500
              hover:-translate-y-2
              hover:shadow-[0_10px_40px_rgba(32,178,166,0.08)]
              animate-fade-in"
              style={{
                animationDelay: `${(index + 1) * 150}ms`,
              }}
            >
              {/* Certificate Image */}
              <div
                className="relative h-48 bg-surface
                border-b border-border
                flex items-center justify-center
                overflow-hidden"
              >
                <img
                  src={certificate.image}
                  alt={`${certificate.title} certificate`}
                  className="w-full h-full object-contain p-3
                  transition-transform duration-500
                  group-hover:scale-105"
                  loading="lazy"
                />

                {/* Category */}
                <span
                  className="absolute top-4 left-4
                  px-3 py-1.5 rounded-full text-xs
                  font-medium text-primary
                  bg-background/90 border border-primary/20"
                >
                  {certificate.category}
                </span>
              </div>

              {/* Certificate Details */}
              <div className="p-6 flex flex-col">
                <h3
                  className="text-xl font-bold
                  text-foreground
                  group-hover:text-primary
                  transition-colors duration-300"
                >
                  {certificate.title}
                </h3>

                <p
                  className="text-sm
                  text-muted-foreground mt-2"
                >
                  {certificate.issuer}
                </p>

                <p
                  className="text-xs
                  text-muted-foreground mt-1"
                >
                  {certificate.association}
                </p>

                {/* Date & Duration */}
                <div
                  className="flex flex-wrap gap-x-4
                  gap-y-2 text-xs text-muted-foreground mt-5"
                >
                  <span>{certificate.date}</span>

                  {certificate.duration && <span>{certificate.duration}</span>}
                </div>

                {/* Description */}
                <p
                  className="text-sm text-muted-foreground
                  leading-relaxed mt-5"
                >
                  {certificate.description}
                </p>

                {/* Skills */}
                <div className="mt-6">
                  <h4
                    className="text-xs font-semibold
                    text-foreground uppercase
                    tracking-wider mb-3"
                  >
                    Skills Covered
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {certificate.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5
                        bg-surface text-xs rounded-full
                        text-muted-foreground
                        border border-border
                        hover:text-primary
                        hover:border-primary/40
                        transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Certificate */}
                <div className="mt-6 pt-5 border-t border-border">
                  <a
                    href={certificate.file || certificate.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center
                    gap-2 text-sm font-medium
                    text-primary hover:gap-3
                    transition-all duration-300"
                  >
                    View Certificate
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;
