import { BsWhatsapp } from 'react-icons/bs'
import { FaLocationDot } from 'react-icons/fa6'

export const Adds = () => {
  return (
    <div className="my-6 mx-2 flex items-start 2xl:flex-col flex-col gap-5 xl:flex-row">
      <div className="flex justify-center items-center gap-4 mx-1">
        <BsWhatsapp className="text-4xl text-stone-300" />
        <div>
          <h1 className='text-stone-200 text-lg mx-1'>Para mayor información:</h1>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://api.whatsapp.com/send?phone=51934166548&text=%F0%9D%97%9B%F0%9D%97%BC%F0%9D%97%B9%F0%9D%97%AE%20%F0%9D%97%94%F0%9D%97%9A%F0%9D%97%98%F0%9D%97%A1%F0%9D%97%96%F0%9D%97%9C%F0%9D%97%94%20%F0%9D%97%A2%F0%9D%97%AA%F0%9D%97%9C%20deseo%20m%C3%A1s%20info%20de%20sus%20planes%F0%9F%90%BC"
            className="text-indigo-300 font-bold text-lg"
          >
            +51 934 166 548
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4">
        <FaLocationDot className="text-4xl text-stone-300" />
        <div className='text-lg text-stone-300 mx-1'>
          <h1>Av. Los Ingenieros 123</h1>
          <h1>Urb. San Carlos</h1>
        </div>
      </div>
    </div>
  )
}
