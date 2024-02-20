import { Badge } from "./"

export const Experience = ({ experience }) => {
  return (
    <article className="grid grid-cols-[4fr_10fr] gap-2">
      <aside>
        <time className="text-white text-opacity-70 text-xs font-medium">{experience.time}</time>
      </aside>
      <main className="flex-1">
        <p className="text-green-100 font-semibold">{experience.position}</p>
        <p className="text-white text-opacity-90 mb-3 text-sm italic">{experience.location}</p>
        <p className="text-white text-sm text-opacity-85 text-pretty">{experience.description}</p>

        <div className="mt-6 flex gap-2 flex-wrap">
          {experience.tools.map(tool => (
            <Badge key={tool} name={tool} />
          ))}
        </div>
      </main>
    </article>
  )
}