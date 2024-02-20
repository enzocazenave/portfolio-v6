import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { BsTelephone } from "react-icons/bs"
import { IoCloudDownloadOutline } from "react-icons/io5";
import { PopupModal } from 'react-calendly'
import { useState } from "react";

export const Sidebar = () => {
  const [showCalendly, setShowCalendly] = useState(false)

  return (
    <aside className="flex-1 flex gap-8 xl:gap-0 flex-col justify-between xl:h-screen py-24 xl:fixed">
      <PopupModal
        url="https://calendly.com/enzocazenave/30min"
        open={showCalendly}
        rootElement={document.getElementById('root')}
        onModalClose={() => setShowCalendly(false)}
      />

      <main>
        <h1 className="text-5xl font-bold text-green-100">Enzo Cazenave</h1>
        <span className="text-2xl text-green-300 text-opacity-80">Full Stack Developer</span>
        
        <p className="text-white mt-6 text-pretty max-w-[450px]">
          Hola, soy Enzo Cazenave! Un desarrollador especializado en crear (y ocasionalmente diseñar) experiencias digitales excepcionales.
        </p>
        
        <div className="flex gap-4 mt-6 flex-col xl:flex-row max-w-[300px] xl:max-w-none">
          <button 
            onClick={() => setShowCalendly(true)}
            className="border border-green-300 px-4 py-3 text-green-300 rounded-md hover:bg-green-300 hover:bg-opacity-10 transition-colors flex items-center gap-4 text-sm"
          >
            <BsTelephone /> Agendá una reunión conmigo
          </button>
          <a target="_blank" href="https://drive.google.com/file/d/1Xnm-rd_dSm3rXw3BLKrb2oX7fSXI3aGC/view?usp=sharing" className="border border-green-300 px-4 py-3 text-green-300 rounded-md hover:bg-green-300 hover:bg-opacity-10 transition-colors flex items-center gap-4 text-sm cursor-pointer">
            <IoCloudDownloadOutline /> Descarga mi CV
          </a>
        </div>
      </main>

      <footer>
        <div className="flex gap-8 items-center mt-4">
          <a target="_blank" href="https://github.com/enzocazenave" className="cursor-pointer">
            <FaGithub color="#ccc" size={28} className="hover:fill-green-100 hover:scale-[1.15] transition-all" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/enzo-cazenave/" className="cursor-pointer">
            <FaLinkedin color="#ccc" size={28} className="hover:fill-green-100 hover:scale-[1.15] transition-all" />
          </a>
          <a target="_blank" href="mailto:enzocazenavedev@hotmail.com" className="cursor-pointer">
            <FaEnvelope color="#ccc" size={28} className="hover:fill-green-100 hover:scale-[1.15] transition-all" />
          </a>
        </div>
      </footer>
    </aside>
  )
}