export const AboutMe = () => {
  return (
    <section>
      <h2 className="text-xl text-green-300 font-medium mb-6">Sobre Mi</h2>
      
      <div className="flex gap-4 flex-col">
        <p className="text-white max-w-[600px] text-pretty text-opacity-90">
          Disfruto de crear cosas que viven en el Internet. Actualmente, feliz estudiante de <span className="text-green-200">Ingeniería Informática</span>,
          que siempre se dedica a perfeccionar sus habilidades y adentrarse en nuevo desafíos.
        </p>
        <p className="text-white max-w-[600px] text-pretty text-opacity-90">
          Además de mi pasión por estar aprendiendo constantemente, disfruto de mis hobbies en mi tiempo libre. Soy jugador
          de <span className="text-green-200">Hockey sobre césped</span> desde los 4 años. También, me encanta andar en <span className="text-green-200">cuatriciclo</span>. Mis hobbies son una vía para relajarme y desconectar de la rutina.
        </p>
      </div>
    </section>
  )
}