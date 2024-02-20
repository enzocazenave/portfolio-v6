import { Project } from "./"

const projects = [
  { 
    id: 0,
    time: 'MAY 2023 - PRESENTE',
    description: `Es una solución integral que simplifica la reserva de turnos para canchas de fútbol. Permite a los jugadores reservar 
    fácilmente mediante una web en línea. Además, ofrece análisis estadísticos detallados sobre la ocupación de las canchas y el rendimiento del negocio.`,
    title: 'Gestión de turnos',
    tools: ['React', 'JavaScript', 'HTML', 'CSS', 'Express', 'MongoDB', 'Socket-IO', 'Node'],
    imgSrc: './appointments-manager.jpeg'
  },
  { 
    id: 1,
    time: 'ENE 2020 - DEC 2021',
    description: `Lideré el desarrollo y gestión de Inmunes RP, servidor FiveM que alcanzó un promedio diario de más de
      200 jugadores simultáneos, destacando por su estabilidad y experiencia de juego inmersiva. Logré auto-
      sostenibilidad del servidor mediante la implementación de una tienda interna, brindando beneficios a los usuarios y contribuyendo al
      crecimiento continuo de Inmunes RP.`,
    title: 'Inmunes Roleplay',
    tools: ['JavaScript', 'HTML', 'CSS', 'PHP', 'Lua', 'jQuery', 'MySQL'],
    imgSrc: './inmunes-roleplay.png'
  }
]

export const Projects = () => {
  return (
    <section>
      <h2 className="text-xl text-green-300 font-medium mb-6">Proyectos</h2>
      
      <main className="flex flex-col gap-9">
        { projects.map(p => <Project key={p.id} project={p} />) }
      </main>
    </section>
  )
}