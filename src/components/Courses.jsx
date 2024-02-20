import { Course } from "./"

const courses = [
  { 
    id: 0,
    time: 'ENE 2023 - MAR 2023',
    title: 'Electron y React: Creando aplicaciones de escritorio.',
    location: 'Udemy (Online Learning Platform)'
  },
  { 
    id: 1,
    time: 'SEP 2022 - ENE 2023',
    title: 'React Native: Aplicaciones nativas para iOS y Android.',
    location: 'Udemy (Online Learning Platform)'
  },
  { 
    id: 2,
    time: 'AGO 2022 - OCT 2022',
    title: 'React: Aplicación en tiempo real con Socket-IO.',
    location: 'Udemy (Online Learning Platform)'
  },
  { 
    id: 3,
    time: 'FEB 2022 - AGO 2022',
    title: 'React y MERN: Desarrollo de aplicaciones web.',
    location: 'Udemy (Online Learning Platform)'
  },
  { 
    id: 4,
    time: 'SEP 2020 - ENE 2021',
    title: 'PHP y la Web.',
    location: 'Mastermind (Online Learning Platform)'
  },
  { 
    id: 5,
    time: 'FEB 2020 - ABR 2020',
    title: 'Aprende a programar con Python.',
    location: 'Mastermind (Online Learning Platform)'
  },
]

export const Courses = () => {
  return (
    <section>
      <h2 className="text-xl text-green-300 font-medium mb-6">Cursos</h2>
      
      <main className="flex flex-col gap-9">
        { courses.map(e => <Course key={e.id} course={e} />) }
      </main>
    </section>
  )
}