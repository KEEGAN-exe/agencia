import { useContext } from 'react'
import employees from '../mocs/employees.json'
import { AiOutlineClose } from 'react-icons/ai'
import { IsOpenModalContext } from '../Context'

export const Nosotros = () => {
  const data = employees
  const { isOpenModal, setIsOpenModal } = useContext(IsOpenModalContext)

  return (
    <section
      className={`fixed top-0 left-0 flex justify-center items-center w-screen h-screen shadow-xl ${
        isOpenModal ? 'block animate-jump-in animate-duration-300' : 'hidden animate-jump-out'
      }`}
    >
      <div className="fixed inset-0 backdrop-blur-sm">
      </div>
      <div className="bg-stone-900 rounded-2xl xl:w-[80%] 2xl:w-[55%] p-6 relative xl:h-[70%] overflow-y-scroll">
        <div
          className="text-2xl text-red-500 absolute right-4 top-4 hover:scale-105 transition-all duration-300 cursor-pointer"
          onClick={() => setIsOpenModal(false)}
        >
          <AiOutlineClose />
        </div>
        {data.map((item) => (
          <div
            className="flex justify-center items-center my-4 border-indigo-300 border-b-[1px] pb-4"
            key={item.id}
          >
            <div className="flex justify-center items-center">
              <img
                src={item.image}
                alt=""
                className="w-[150px] object-cover h-[150px] rounded-xl"
              />
            </div>
            <div className="flex justify-center items-center flex-col text-stone-200 h-full px-10">
              <div className="justify-between items-center flex w-full my-8">
                <h1>Nombre: {item.name}</h1>
                <p>{item.level}</p>
              </div>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
