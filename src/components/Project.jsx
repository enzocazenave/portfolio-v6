import { Badge } from "./Badge"

export const Project = ({ project }) => {
  return (
    <article className="grid grid-cols-[4fr_10fr] gap-2">
      <aside>
        <img src={project.imgSrc} className="rounded w-32" />
      </aside>
      <main className="flex-1">
        <div className="flex justify-between items-center mb-2">
          <p className="text-green-100 font-semibold">{project.title}</p>
          <time className="text-white text-opacity-70 text-xs font-medium italic">{project.time}</time>
        </div>

        <p className="text-white text-sm text-opacity-85 text-pretty">{project.description}</p>

        <div className="mt-6 flex gap-2 flex-wrap">
          {project.tools.map(tool => (
            <Badge key={tool} name={tool} />
          ))}
        </div>
      </main>
    </article>
  )
}