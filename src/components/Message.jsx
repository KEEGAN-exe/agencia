import { useEffect, useRef } from "react"
import Typed from "typed.js"
import { Deatils } from "./Details"
import { Adds } from "./Adds"

export const Message = () => {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Donde la creatividad cobra vida para que llegues al <span class="styled-text">éxito</span>.'        
      ],
      typeSpeed: 40,
      backSpeed: 40,
      showCursor: false,
      onComplete: () => {
        setTimeout(() => {
          const styledText = el.current.querySelector('.styled-text')
          styledText.classList.add(
            'text-stone-50',
            'text-7xl',
            'duration-200',
            'transition-all',
            'bg-gradient-to-l',
            'rounded-3xl',
            'px-4',
            'py-2',
            'from-indigo-200',
            'to-indigo-300',
            '-rotate-[6deg]',
            'inline-block'
          )
        }, 1000)
      }
    })

    return () => {
      typed.destroy()
    }
  }, [])
  return (
    <div className="flex flex-col xl:mx-8 mx-1">
      <span ref={el} className='xl:text-7xl text-6xl font-bold text-stone-300 mx-4' id='typed'/>
      <p className="text-stone-300 my-4 text-lg mx-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis cupiditate ipsum in aliquid eveniet magnam, qui ipsam dolorem numquam deleniti autem, molestiae a cum ea, dignissimos officiis obcaecati voluptates blanditiis.</p>
      <Deatils />
      <Adds/>
    </div>
  )
}
