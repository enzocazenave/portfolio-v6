export const Course = ({ course }) => {
  return (
    <article className="flex flex-col gap-1">
      <time className="text-white text-opacity-70 text-xs font-medium">{course.time}</time>
      <p className="text-green-100 font-semibold">{course.title}</p>
      <p className="text-white text-opacity-90 mb-3 text-sm italic">{course.location}</p>
    </article>
  )
}