import { AboutMe, Courses, Educations, Experiences, Projects } from "../components"

export const HomePage = () => {
  return (
    <div className="flex flex-col gap-16">
      <AboutMe />
      <Experiences />
      <Projects />
      <Educations />
      <Courses />
    </div>
  )
}