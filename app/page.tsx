"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";


type SectionDef = { heading: string; label: string; hideFromNav?: boolean };
type ExperienceJob = {
  date: string;
  ariaDate: string;
  company: { name: string; link: string };
  positions: string[];
  desc: string;
  tech: string[];
  links?: { title: string; url: string }[];
};
type ProjectCard = {
  title: string;
  link: string;
  image: string;
  alt: string;
  desc: string;
  tech?: string[];
  github?: string;
  download?: string;
};
type IconName =
  | "github"
  | "linkedin"
  | "x"
  | "arrow-external"
  | "arrow-internal"
  | "star"
  | "download"
  | "link";

const sections: SectionDef[] = [
  { heading: "About", label: "About me" },
  { heading: "Experience", label: "Work experience" },
  { heading: "Projects", label: "Selected projects" },
];

const socials = [
  { title: "GitHub", url: "https://github.com/YosephSE/", icon: "github" },
  { title: "X", url: "https://x.com/YosephKedir", icon: "x" },
  { title: "LinkedIn", url: "https://www.linkedin.com/in/yoseph-kedir/", icon: "linkedin" },
] as const;

const experience: ExperienceJob[] = [
  {
    date: "Mar 2025 - Present",
    ariaDate: "March 2025 to Present",
    company: { name: "Alactive", link: "https://www.linkedin.com/company/alactive" },
    positions: ["Founding Engineer"],
    desc: "Lead development of a multi-agent system with models tuned for specific tasks. Integrate the product with WhatsApp, Outlook and Gmail, web clients, and multiple property-management systems using public APIs and targeted reverse engineering where integrations are undocumented. Improve response time by 26% with a router that selects models based on query complexity. Build internal tools to monitor, analyze, and operate the agentic platform.",
    tech: ["TypeScript", "Python", "Node.js", "Docker", "REST APIs"],
  },
  {
    date: "Nov 2024 - Feb 2025",
    ariaDate: "November 2024 to February 2025",
    company: { name: "GO PLATFORM", link: "https://www.linkedin.com/company/go-platform" },
    positions: ["Full-stack Developer (Internship)"],
    desc: "Research competitor platforms to inform product direction and system design. Reverse engineer closed-source software to map architecture and workflows. Deliver core application features on Vue for the frontend and Express for backend services.",
    tech: ["Vue", "Express", "Node.js", "TypeScript", "JavaScript"],
  },
  {
    date: "May 2023 - Dec 2023",
    ariaDate: "May 2023 to December 2023",
    company: { name: "Datafinity", link: "https://datafinity.io" },
    positions: ["Back End Engineer"],
    desc: "Design, implement, and maintain a scalable database architecture on Supabase as usage grows. Reduce database query latency through strategic indexing and a high-performance caching layer. Ship secure backend integrations with TLS, hardened API endpoints, and strict access-control policies for reliable communication with the frontend.",
    tech: ["Supabase", "PostgreSQL", "Node.js", "Redis", "REST APIs"],
  },
  {
    date: "Dec 2022 - Mar 2023",
    ariaDate: "December 2022 to March 2023",
    company: { name: "Brighter Generation", link: "https://brightergeneration.info" },
    positions: ["Full Stack Developer (Internship)"],
    desc: "Lead a team of four to build a chronic-care patient monitoring system that automates patient management and real-time monitoring. Deploy the system across multiple hospitals, reducing average patient waiting time by 40 minutes and increasing daily hospital capacity by about 26%. Collaborate with hardware engineers to integrate IoT components into end-to-end monitoring workflows.",
    tech: ["React", "Node.js", "Express", "MongoDB", "IoT"],
  },
];

const projects: ProjectCard[] = [
  {
    title: "Tabs",
    link: "https://tabs.yosephk.com",
    image: "/images/projects/tabs.png",
    alt: "Tabs Chrome extension for saving and organizing browser sessions",
    desc: "A cross-browser side-panel extension for saving and organizing the pages you want to keep without leaving them open. It lets you capture the current tab or an entire session, group and search saved links, and return to them later from a clean, lightweight workspace. Available in the Chrome Web Store and Firefox Add-ons.",
    tech: ["React", "TypeScript", "Vite", "Chrome Extension"],
    github: "https://github.com/YosephSE/LumiTabs",
  },
  {
    title: "Application Tracking System",
    link: "https://ats-bay.vercel.app",
    image: "/images/projects/ats.png",
    alt: "Application tracking system for recruitment workflows",
    desc: "Full-stack hiring workspace that streamlines recruitment for organizations: manage applications, track candidates through the pipeline, and coordinate hiring workflows end to end. Layer in AI-assisted ranking so reviewers can sort applicants by skills and qualifications faster.",
    tech: ["Next.js", "React", "Express", "MongoDB", "Google Gemini"],
    github: "https://github.com/YosephSE/ats",
  },
];

function Icon({ use, className = "h-4 w-4" }: { use: IconName; className?: string }) {
  switch (use) {
    case "github":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden="true">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
        </svg>
      );
    case "x":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "arrow-external":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
          <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
        </svg>
      );
    case "arrow-internal":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
          <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
        </svg>
      );
    case "star":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
          <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
        </svg>
      );
    case "download":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
          <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
          <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
        </svg>
      );
    case "link":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
          <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
          <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
        </svg>
      );
  }
}

function Tag({ text }: { text: string }) {
  return <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{text}</div>;
}

function CardBackground() {
  return <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />;
}

function ExperienceHeadingLink({
  position,
  company,
  fill,
}: {
  position: string;
  company: { name: string; link: string };
  fill: boolean;
}) {
  return (
    <a
      className="relative inline-flex items-center font-medium leading-tight text-slate-200 group/link text-base"
      href={company.link}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`${position} at ${company.name} (opens in a new tab)`}
    >
      {fill ? <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" /> : null}
      <span className="relative inline-flex items-center gap-x-[0.4em]">
        <span>{position}</span>
        <span className="shrink-0 select-none leading-none text-slate-200" aria-hidden="true">
          {"\u00B7"}
        </span>
        <span className="inline-flex items-center">
          {company.name}
          <Icon
            use="arrow-external"
            className={`ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none`}
          />
        </span>
      </span>
    </a>
  );
}

function ExternalLink({
  title,
  url,
  label,
  className = "",
  fill = false,
  small = false,
}: {
  title: string;
  url: string;
  label?: string;
  className?: string;
  fill?: boolean;
  small?: boolean;
}) {
  const words = title.trim().split(" ");
  const last = words.pop();
  const rest = words.join(" ");

  return (
    <a className={`inline-flex items-baseline font-medium leading-tight text-slate-200 ${className} group/link ${small ? "text-sm" : "text-base"}`} href={url} target="_blank" rel="noreferrer noopener" aria-label={`${label || title} (opens in a new tab)`}>
      {fill ? <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" /> : null}
      <span>
        {rest}{" "}
        <span className="inline-block">
          {last}
          <Icon use="arrow-external" className={`inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ${small ? "ml-0.5" : "ml-1 translate-y-px"}`} />
        </span>
      </span>
    </a>
  );
}

function InternalLink({ title, url, className = "" }: { title: string; url: string; className?: string }) {
  const words = title.trim().split(" ");
  const last = words.pop();
  const rest = words.join(" ");

  return (
    <Link className={`inline-flex items-center font-medium leading-tight text-slate-200 ${className} group`} href={url} aria-label={title}>
      <span>
        <span className="pb-px transition motion-reduce:transition-none">{rest} </span>
        <span className="whitespace-nowrap">
          <span className="pb-px transition motion-reduce:transition-none">{last}</span>
          <Icon use="arrow-internal" className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
        </span>
      </span>
    </Link>
  );
}

function Header({ activeSection }: { activeSection: string }) {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <Link href="/">Yoseph Kedir</Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">AI Engineer / Full-Stack Developer</h2>
        <p className="mt-4 max-w-xs leading-normal">I build modern software that blends intelligence, speed, and seamless user experience.</p>
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {sections.map((section) =>
              section.hideFromNav ? null : (
                <li key={section.heading}>
                  <a className={`group flex items-center py-3 ${activeSection === section.heading.toLowerCase() ? "active" : ""}`} href={section.heading === "About" ? "/" : `#${section.heading.toLowerCase()}`}>
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" />
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">{section.heading}</span>
                  </a>
                </li>
              ),
            )}
          </ul>
        </nav>
      </div>
      <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
        {socials.map((social) => (
          <li className="mr-5 shrink-0 text-xs" key={social.title}>
            <a className="block" href={social.url} target="_blank" rel="noreferrer noopener" aria-label={`${social.title} (opens in a new tab)`} title={social.title}>
              <span className="sr-only">{social.title}</span>
              <Icon use={social.icon} className="h-6 w-6" />
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}

function About() {
  return (
    <div>
      <p className="mb-4">
        I&apos;m a software engineer who enjoys building products that sit at the intersection of AI, backend systems, and everyday usability. Most of my work has been about turning messy technical constraints into software that feels reliable, fast, and easy to use.
      </p>
      <p className="mb-4">
        Most recently, I was the founding engineer at <span className="font-medium text-slate-200">Alactive</span>, where I led development of a multi-agent system integrated with WhatsApp, Gmail, Outlook, web clients, and multiple property-management platforms. Some of those integrations came through public APIs, and some required careful reverse engineering. I also built internal tools for monitoring, analyzing, and maintaining the system in production.
      </p>
      <p className="mb-4">
        Before that, I worked across a mix of backend-heavy and product-driven roles. At <span className="font-medium text-slate-200">Datafinity</span>, I worked on three MVPs for startups, helping turn early product ideas into working software. At <span className="font-medium text-slate-200">GO PLATFORM</span>, I studied competitor products and reverse-engineered closed systems to better understand their underlying workflows. Earlier, at <span className="font-medium text-slate-200">Brighter Generation</span>, I helped build a chronic-care monitoring system used in hospital environments.
      </p>
      <p className="mb-4">
        Outside of work, I keep building products of my own, including <span className="font-medium text-slate-200">Tabs</span>, and an <span className="font-medium text-slate-200">Application Tracking System</span>  
      </p>
    </div>
  );
}
function Experience() {
  return (
    <div>
      <ol className="group/list">
        {experience.map((job) => (
          <li className="mb-12" key={`${job.date}-${job.company.name}`}>
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <CardBackground />
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label={job.ariaDate}>
                {job.date}
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  {job.positions.map((position, index) => (
                    <div key={position}>{index === 0 ? <ExperienceHeadingLink position={position} company={job.company} fill /> : <div className="text-slate-500" aria-hidden="true">{position}</div>}</div>
                  ))}
                </h3>
                <p className="mt-2 text-sm leading-normal">{job.desc}</p>
                {job.links ? (
                  <ul className="mt-2 flex flex-wrap" aria-label="Related links">
                    {job.links.map((link) => (
                      <li className="mr-4" key={link.title}>
                        <a className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300" href={link.url} target="_blank" rel="noreferrer noopener" aria-label={`${link.title} (opens in a new tab)`}>
                          <Icon use="link" className="mr-1 h-3 w-3" />
                          <span>{link.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                  {job.tech.map((tech) => (
                    <li className="mr-1.5 mt-2" key={tech}>
                      <Tag text={tech} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-12">
        <ExternalLink title="View Full Resume" url="/resume.pdf" className="font-semibold text-slate-200" />
      </div>
    </div>
  );
}

function GitHubStars({ repoUrl }: { repoUrl: string }) {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    const match = /^https?:\/\/github\.com\/([^/]+)\/([^/?#]+)/i.exec(repoUrl);
    if (!match) {
      return;
    }

    const [, owner, repo] = match;

    fetch(`https://api.github.com/repos/${owner}/${repo}`)
      .then((response) => response.json())
      .then((data: { stargazers_count?: number }) => {
        if (typeof data.stargazers_count === "number") {
          setStars(data.stargazers_count);
        }
      })
      .catch(() => {});
  }, [repoUrl]);

  if (!stars) {
    return null;
  }

  return (
    <a className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300" href={repoUrl} target="_blank" rel="noreferrer noopener" aria-label={`${stars} stars on GitHub (opens in a new tab)`}>
      <Icon use="star" className="mr-1 h-3 w-3" />
      <span>{stars.toLocaleString("en", { useGrouping: true })}</span>
    </a>
  );
}

function Projects() {
  return (
    <div>
      <ul className="group/list">
        {projects.map((project) => (
          <li className="mb-12" key={project.title}>
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <CardBackground />
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  <ExternalLink title={project.title} url={project.link} fill />
                </h3>
                <p className="mt-2 text-sm leading-normal">{project.desc}</p>
                {"github" in project && project.github ? <GitHubStars repoUrl={project.github} /> : null}
                {"download" in project && project.download ? (
                  <a className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300" href={project.download} target="_blank" rel="noreferrer noopener" aria-label="Over 100,000 installs on Visual Studio Code Marketplace (opens in a new tab)">
                    <Icon use="download" className="mr-1 h-4 w-4" />
                    <span>100k+ Installs</span>
                  </a>
                ) : null}
                {"tech" in project && project.tech ? (
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
                    {project.tech.map((tech) => (
                      <li className="mr-1.5 mt-2" key={tech}>
                        <Tag text={tech} />
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
              <Image className="aspect-video rounded border-2 border-slate-200/10 object-cover transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" src={project.image} alt={project.alt} width={200} height={48} />
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-12">
        <InternalLink title="View Full Project Archive" url="/archive" className="font-semibold text-slate-200" />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
      <p>Copyright 2026 Yoseph Kedir</p>
    </footer>
  );
}

function Section({
  heading,
  label,
  children,
  sectionRef,
  fullHeight = false,
}: {
  heading: string;
  label: string;
  children: React.ReactNode;
  sectionRef: (element: HTMLElement | null) => void;
  fullHeight?: boolean;
}) {
  return (
    <section
      id={heading.toLowerCase()}
      className={`mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24 ${fullHeight ? "lg:min-h-[calc(100vh-6rem+0.5rem)] lg:mb-0 lg:flex lg:flex-col" : "lg:mb-36"}`}
      aria-label={label}
      ref={sectionRef}
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">{heading}</h2>
      </div>
      {children}
    </section>
  );
}

export default function Home() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeSection, setActiveSection] = useState("about");
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onPointerMove = (event: PointerEvent) => {
      setSpotlight({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("pointermove", onPointerMove);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "0% 0% -70% 0%", threshold: 0 },
    );

    sectionRefs.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute" style={{ background: `radial-gradient(600px at ${spotlight.x}px ${spotlight.y}px, rgba(29, 78, 216, 0.15), transparent 80%)` }} />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        <a href="#content" className="absolute left-0 top-0 block -translate-x-full rounded bg-yellow-500 px-4 py-3 text-sm font-bold uppercase tracking-widest text-slate-900 focus-visible:translate-x-0 focus-visible:text-slate-900">
          Skip to Content
        </a>
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header activeSection={activeSection} />
          <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
            <Section heading="About" label="About me" sectionRef={(element) => (sectionRefs.current[0] = element)} fullHeight>
              <About />
            </Section>
            <Section heading="Experience" label="Work experience" sectionRef={(element) => (sectionRefs.current[1] = element)}>
              <Experience />
            </Section>
            <Section heading="Projects" label="Selected projects" sectionRef={(element) => (sectionRefs.current[2] = element)}>
              <Projects />
            </Section>
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}
