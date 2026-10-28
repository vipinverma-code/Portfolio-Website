import { ArrowUpRight } from "lucide-react";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Zenvora - SaaS Landing Page",
    description:
      "A modern, responsive SaaS landing page built with React and Tailwind CSS. Features a clean interface, reusable components, and polished layouts to deliver a seamless user experience.",
    image: "/projects/project1.png",
    tags: ["React.js", "Tailwind CSS", "JavaScript"],
    link: "#",
    github: "https://github.com/vipinverma-code/zenvora-saas-ui",
  },

  {
    title: "WeHandle.ai - Marketing Agency",
    description:
      "A professional marketing agency website designed with a modern UI, engaging visuals, and responsive layouts to showcase digital services and create a strong online presence.",
    image: "/projects/project2.png",
    tags: ["React.js", "Tailwind CSS", "JavaScript"],
    link: "#",
    github: "https://github.com/vipinverma-code/wehandle.ai",
  },

  {
    title: "Newsify - News Application",
    description:
      "A dynamic news application that integrates APIs to fetch and display news articles. Features organized content, intuitive navigation, and a smooth news-browsing experience.",
    image: "/projects/project3.png",
    tags: ["React.js", "Javascript", "API Integration", "Bootstrap"],
    link: "#",
    github: "https://github.com/vipinverma-code/Newsify",
  },

  {
    title: "Todo App - Task Manager",
    description:
      "A simple and interactive task management application that allows users to add, edit, and delete tasks. Built to practice React state management and CRUD operations.",
    image: "/projects/project4.png",
    tags: ["React.js", "Javascript", "Bootstrap"],
    link: "#",
    github: "https://github.com/vipinverma-code/Todo-App",
  },

  {
    title: "Spotify Clone - Music Player UI",
    description:
      "A music streaming interface inspired by Spotify, featuring a familiar player layout, organized playlists, and an engaging design built with core frontend technologies.",
    image: "/projects/project5.png",
    tags: ["HTML", "CSS", "Javascript"],
    link: "#",
    github: "https://github.com/vipinverma-code/Spotify-Clone",
  },

  {
    title: "Crazy Craft",
    description:
      "A creative web project focused on an engaging user interface, thoughtful layouts, and visual presentation to deliver an attractive and user-friendly browsing experience.",
    image: "/projects/project6.png",
    tags: ["Bootstrap", "Javascript", "Laravel"],
    link: "#",
    github: "https://github.com/vipinverma-code/CrazyCrafts",
  },

  {
    title: "Learning Sphere - Learning Platform",
    description:
      "An online learning management system that connects students with mentors for guidance and provides an integrated chatbot to help students ask questions and get assistance.",
    image: "/projects/project7.png",
    tags: ["Bootstrap", "JavaScript", "Laravel"],
    link: "#",
    github: "https://github.com/vipinverma-code/LearnSpheres",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden ">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-seconadry-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-seconadry-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition transform  duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-card via-card/50
              to-transparent  opacity-60"
                />

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all "
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>
              {/* Content */}
              <div className="p-6 space-y-4 ">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover: text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 text-muted-foreground group-hover:text-primary
                  group-hover: translate-x-1
                  group-hover: translate-y-1 transition-all"
                  />
                </div>
                <p className="text-nuted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div>
          <AnimatedBorderButton></AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
export default Projects;
