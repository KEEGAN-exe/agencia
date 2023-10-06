import { useContext, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { IsOpenModalContext } from '../Context'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { setIsOpenModal } = useContext(IsOpenModalContext)

  return (
    <header className="text-stone-300 xl:bg-transparent bg-neutral-900 flex justify-between items-center xl:px-10 py-5 px-5 fixed xl:static w-full z-40 ">
      <img src="logo2.webp" alt="logo" className="xl:w-[70px] w-[15%]" />
      <nav className="flex justify-center items-center ">
        <ul
          className={`flex xl:justify-center xl:items-center xl:gap-10 text-2xl xl:mx-20 [&>li]:cursor-pointer xl:flex-row flex-col xl:static xl:bg-transparent bg-neutral-900 xl:w-[80%] fixed ${
            isOpen ? 'w-2/3' : 'w-0'
          } xl:h-auto bg-red-2400 top-[94px] h-full right-0 transition-all duration-300 xl:[&>li]:my-0 [&>li]:my-4 z-50 xl:z-0`}
        >
          <li className="xl:hover:bg-indigo-300 transition-all duration-300 hover:text-stone-100 px-5 py-2 rounded-2xl hover:shadow-xl hover:scale-110">
            <div href="" onClick={() => setIsOpenModal(true)}>Nosotros</div>
          </li>
          <li className="xl:hover:bg-indigo-300 transition-all duration-300 hover:text-stone-100 px-5 py-2 rounded-2xl hover:shadow-xl hover:scale-110">
            <a href="">Información</a>
          </li>
          <li className="xl:hover:bg-indigo-300 transition-all duration-300 hover:text-stone-100 px-5 py-2 rounded-2xl hover:shadow-xl hover:scale-110">
            <a href="">Clientes</a>
          </li>
          <li className="xl:hover:bg-indigo-300 transition-all duration-300 hover:text-stone-100 px-5 py-2 rounded-2xl hover:shadow-xl xl:hover:scale-110 hover:scale-105">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://api.whatsapp.com/send?phone=51934166548&text=%F0%9D%97%9B%F0%9D%97%BC%F0%9D%97%B9%F0%9D%97%AE%20%F0%9D%97%94%F0%9D%97%9A%F0%9D%97%98%F0%9D%97%A1%F0%9D%97%96%F0%9D%97%9C%F0%9D%97%94%20%F0%9D%97%A2%F0%9D%97%AA%F0%9D%97%9C%20deseo%20m%C3%A1s%20info%20de%20sus%20planes%F0%9F%90%BC"
          >Contáctanos</a>
          </li>
        </ul>
        <div className="xl:hidden" onClick={() => setIsOpen(!isOpen)}>
          <FaBars className=" text-3xl cursor-pointer" />
        </div>
      </nav>
      <div className="xl:block hidden"></div>
    </header>
  )
}
