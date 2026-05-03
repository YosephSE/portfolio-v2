"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const projects = [
  { date: "2026", title: "USD/ETB Exchange Rate", description: "Official and parallel market analysis tool", builtWith: ["TypeScript", "Node.js", "Express", "Puppeteer"], links: [{ title: "GitHub", url: "https://github.com/YosephSE/USD-ETB-Exchange-rate" }] },
  { date: "2026", title: "Clown Bot", description: "Telegram bot for daily goal and plan tracking", builtWith: ["TypeScript", "Node.js"], links: [{ title: "GitHub", url: "https://github.com/YosephSE/clown-bot" }] },
  { date: "2026", title: "Tabs", description: "Browser Chaos", builtWith: ["HTML", "CSS"], links: [{ title: "GitHub", url: "https://github.com/YosephSE/Tabs-landing-page" }] },
  { date: "2026", title: "OpenAI Proxy", description: "OpenAI proxy for tracking", builtWith: ["TypeScript", "Node.js", "Express"], links: [{ title: "GitHub", url: "https://github.com/YosephSE/open-ai-proxy" }] },
  { date: "2025", title: "Totals", description: "SMS-based expense tracker", builtWith: ["Dart", "Flutter"], links: [{ title: "GitHub", url: "https://github.com/YosephSE/totals" }] },
  { date: "2025", title: "Leet AI", description: "AI analysis for submissions", builtWith: ["JavaScript", "HTML", "CSS"], links: [{ title: "GitHub", url: "https://github.com/YosephSE/leet-ai" }] },
  { date: "2025", title: "PM2 Log Analysis", builtWith: ["HTML", "CSS", "JavaScript"], links: [{ title: "GitHub", url: "https://github.com/YosephSE/pm2-logs" }] },
  { date: "2024", title: "Bing Redirect", description: "Bing links to Google", builtWith: ["HTML", "CSS", "JavaScript"], links: [{ title: "GitHub", url: "https://github.com/YosephSE/Bing-redirect" }] },
  { date: "2024", title: "ATS", description: "AI powered recruitment", builtWith: ["TypeScript", "Node.js", "React"], links: [{ title: "GitHub", url: "https://github.com/YosephSE/ATS" }] },
  { date: "2024", title: "Forma", description: "Fit estimate with AI", builtWith: ["JavaScript", "HTML", "CSS"], links: [{ title: "GitHub", url: "https://github.com/YosephSE/Forma-Trial" }] },
  { date: "2024", title: "Go Platform", description: "Home page redesign", builtWith: ["Vue", "JavaScript", "CSS"], links: [{ title: "GitHub", url: "https://github.com/YosephSE/Go-Platform" }] },
  { date: "2024", title: "Social Blogging App", builtWith: ["JavaScript", "HTML", "CSS"], links: [{ title: "GitHub", url: "https://github.com/YosephSE/Social-Blogging-App" }] },
  { date: "2024", title: "Tic Tac Toe", builtWith: ["React", "JavaScript"], links: [{ title: "GitHub", url: "https://github.com/YosephSE/Tic-Tac-Toe-React" }] },
  { date: "2024", title: "Lead Generator", description: "Sales lead capturing tool", builtWith: ["HTML", "CSS", "JavaScript"], links: [{ title: "GitHub", url: "https://github.com/YosephSE/Lead-Generator" }] },
  { date: "2024", title: "Blackjack", builtWith: ["JavaScript", "HTML", "CSS"], links: [{ title: "GitHub", url: "https://github.com/YosephSE/Blackjack" }] },
  { date: "2024", title: "Passenger Counter", description: "Use state hook", builtWith: ["HTML", "CSS", "JavaScript"], links: [{ title: "GitHub", url: "https://github.com/YosephSE/passenger-counter" }] },
  { date: "2024", title: "Little Taco Shop", description: "Landing page", builtWith: ["HTML", "CSS"], links: [{ title: "GitHub", url: "https://github.com/YosephSE/LittleTacoShop-HTML" }] },
  { date: "2023", title: "LumiTabs", description: "Tabs 0.0", builtWith: ["TypeScript", "HTML", "CSS"], links: [{ title: "GitHub", url: "https://github.com/YosephSE/LumiTabs" }] },
  { date: "2023", title: "Health Monitoring System", builtWith: ["HTML", "CSS", "JavaScript"], links: [{ title: "GitHub", url: "https://github.com/YosephSE/Health-monitoring-system" }] },
  { date: "2023", title: "Members Management System", description: "Church members list and relations", builtWith: ["TypeScript", "Node.js"], links: [{ title: "GitHub", url: "https://github.com/YosephSE/Members-Managment-System" }] },
  { date: "2023", title: "Netflix", description: "Clone", builtWith: ["JavaScript", "HTML", "CSS"], links: [{ title: "GitHub", url: "https://github.com/YosephSE/Netflix" }] },
  { date: "2023", title: "HR Management System", description: "ATS pre AI", builtWith: ["JavaScript", "HTML", "CSS"], links: [{ title: "GitHub", url: "https://github.com/YosephSE/HR-Management-Frontend" }] },
  { date: "2023", title: "Airbnb", description: "Landing page", builtWith: ["HTML", "CSS", "JavaScript"], links: [{ title: "GitHub", url: "https://github.com/YosephSE/Alactive-Airbnb" }] },
  { date: "2023", title: "EveryDollar", description: "Finance tracker 2.0", builtWith: ["HTML", "CSS", "JavaScript"], links: [{ title: "GitHub", url: "https://github.com/YosephSE/EveryDollar" }] },
  { date: "2022", title: "React Jobs", description: "Job board", builtWith: ["React", "JavaScript"], links: [{ title: "GitHub", url: "https://github.com/YosephSE/React-jobs" }] },
  { date: "2022", title: "Finance Tracker", builtWith: ["TypeScript", "HTML", "CSS"], links: [{ title: "GitHub", url: "https://github.com/YosephSE/Finance-Tracker" }] },
  { date: "2022", title: "LinkLand", description: "Yet another social media", builtWith: ["HTML", "CSS", "JavaScript"], links: [{ title: "GitHub", url: "https://github.com/YosephSE/LinkLand" }] },
  { date: "2022", title: "School Management System", builtWith: ["HTML", "CSS", "JavaScript"], links: [{ title: "GitHub", url: "https://github.com/YosephSE/School-Management-System" }] },
  { date: "2022", title: "KKHC DB", builtWith: ["HTML", "CSS", "JavaScript"], links: [{ title: "GitHub", url: "https://github.com/YosephSE/kkhc-DB" }] },
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

function ArrowInternal({ className }: { className: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
    </svg>
  );
}

function ArrowExternal({ className }: { className: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
    </svg>
  );
}

function GitHubIcon({ className }: { className: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

function Tag({ text }: { text: string }) {
  return <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{text}</div>;
}

function ExternalLink({ title, url, className = "", small = false }: { title: string; url: string; className?: string; small?: boolean }) {
  const words = title.trim().split(" ");
  const last = words.pop();
  const rest = words.join(" ");

  return (
    <a className={`inline-flex items-baseline font-medium leading-tight text-slate-200 ${className} group/link ${small ? "text-sm" : "text-base"}`} href={url} target="_blank" rel="noreferrer noopener" aria-label={`${title} (opens in a new tab)`}>
      <span>
        {rest}{" "}
        <span className="inline-block">
          {last}
          <ArrowExternal className={`inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ${small ? "ml-0.5" : "ml-1 translate-y-px"}`} />
        </span>
      </span>
    </a>
  );
}

export default function ArchiveClient() {
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

  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute" style={{ background: `radial-gradient(600px at ${spotlight.x}px ${spotlight.y}px, rgba(29, 78, 216, 0.15), transparent 80%)` }} />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        <a href="#content" className="absolute left-0 top-0 block -translate-x-full rounded bg-yellow-500 px-4 py-3 text-sm font-bold uppercase tracking-widest text-slate-900 focus-visible:translate-x-0 focus-visible:text-slate-900">
          Skip to Content
        </a>
        <div className="lg:py-24">
          <Link href="/" className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300">
            <ArrowInternal className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2" />
            Yoseph Kedir
          </Link>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">All Projects</h1>
          <table id="content" className="mt-12 w-full border-collapse text-left">
            <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
              <tr>
                <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Year</th>
                <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Project</th>
                <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Description</th>
                <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Built with</th>
                <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">Link</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => {
                const visibleLinks = project.links && project.links.length > 1 ? project.links.filter((link) => link.title !== "GitHub") : project.links;

                return (
                  <tr className="border-b border-slate-300/10 last:border-none" key={`${project.date}-${project.title}`}>
                    <td className="py-4 pr-4 align-top text-sm">
                      <div className="translate-y-px">{new Date(project.date).getFullYear()}</div>
                    </td>
                    <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                      <div>
                        <div className="block sm:hidden">{visibleLinks?.length ? <ExternalLink title={project.title} url={visibleLinks[0].url} className="sm:hidden" /> : <span>{project.title}</span>}</div>
                        <div className="hidden sm:block">{project.title}</div>
                      </div>
                    </td>
                    <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                      <div className="translate-y-px whitespace-nowrap">{project.description}</div>
                    </td>
                    <td className="hidden py-4 pr-4 align-top lg:table-cell">
                      <ul className="flex -translate-y-1.5 flex-wrap">
                        {project.builtWith.map((tech) => (
                          <li className="my-1 mr-1.5" key={tech}>
                            <Tag text={tech} />
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="hidden py-4 align-top sm:table-cell">
                      {visibleLinks?.length ? (
                        <ul className="translate-y-1">
                          {visibleLinks.map((link) => (
                            <li className="mb-1 flex items-center" key={link.url}>
                              {link.title === "GitHub" ? (
                                <a className="flex items-center text-sm text-slate-400" href={link.url} target="_blank" rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)">
                                  <span>GitHub</span>
                                  <GitHubIcon className="ml-1.5 h-3.5 w-3.5 shrink-0" />
                                </a>
                              ) : (
                                <ExternalLink title={link.title} url={link.url} className="text-sm text-slate-400" small />
                              )}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <footer className="mt-8 text-sm text-slate-500">
            <p>* Link destinations may have been updated since this archive was created.</p>
          </footer>
        </div>
      </div>
    </>
  );
}
