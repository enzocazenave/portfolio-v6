import { Experience } from "./"

const experiences = [
  { 
    id: 0,
    time: 'JUN 2023 - PRESENTE',
    description: 'Especializado en crear interfaces web funcionales e impresionantes. Trabajo en efectiva colaboración con equipos para transformar conceptos creativos en soluciones web de alta calidad y rendimiento',
    position: 'Frontend Engineer',
    location: 'Upbrands Agency, Buenos Aires, Argentina.',
    tools: ['JavaScript', 'HTML', 'CSS', 'PHP']
  },
  { 
    id: 1,
    time: 'ENE 2022 - DIC 2022',
    description: 'Desarrollé script, funcionalidades e interfaces para servidores del juego FiveM para clientes del exterior.',
    position: 'Freelance Developer',
    location: 'Freelancing desde Buenos Aires, Argentina.',
    tools: ['Lua', 'JavaScript', 'HTML', 'CSS']
  },
]

export const Experiences = () => {
  return (
    <section>
      <h2 className="text-xl text-green-300 font-medium mb-6">Experiencia</h2>
      
      <main className="flex flex-col gap-9">
        { experiences.map(e => <Experience key={e.id} experience={e} />) }
      </main>
    </section>
  )
}