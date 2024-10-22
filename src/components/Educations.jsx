import { Education } from "./"

const educations = [
  { 
    id: 0,
    time: 'ENE 2022 - PRESENTE',
    title: 'Ingeniería en informática',
    location: 'Universidad Argentina de la Empresa (UADE), Montserrat, BA.'
  },
  { 
    id: 1,
    time: 'FEB 2022 - AGO 2024',
    title: 'Analista en Informática',
    location: 'Universidad Argentina de la Empresa (UADE), Montserrat, BA.'
  },
  { 
    id: 2,
    time: 'ENE 2011 - DEC 2021',
    title: 'Diploma Superior en Capacitación de Inglés',
    location: 'Brighton English Institute, Berazategui, BA.'
  },
]

export const Educations = () => {
  return (
    <section>
      <h2 className="text-xl text-green-300 font-medium mb-6">Educación</h2>
      
      <main className="flex flex-col gap-9">
        { educations.map(e => <Education key={e.id} education={e} />) }
      </main>
    </section>
  )
}