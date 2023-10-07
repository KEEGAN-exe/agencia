import { Contact } from './components/Contact'
import { Header } from './components/Header'
import { Infinite } from './components/Infinite'
import { Message } from './components/Message'
import { Nosotros } from './components/Nosotros'
import { Pircing } from './components/Pircing'
import { ContextProvider } from './Context'
import { Carrousel } from './components/Carrusel'

function App() {
  return (
    <>
      <ContextProvider>
        <Header />
        <div className="w-screen h-[100px] xl:hidden"></div>
        <div className="flex justify-center w-screen xl:h-[630px] 2xl:h-[875px] relative xl:pt-0 items-center xl:flex-row flex-col">
          <div className="flex xl:w-[70%] justify-center items-center relative xl:flex-row-reverse flex-col-reverse xl:gap-0 gap-5">
            <Message />
            <Contact />
          </div>
          <div className="w-[100%] px-8 2xl:w-[50%] xl:w-[35%] flex justify-center items-center -z-30">
            <Carrousel />
          </div>
        </div>
        <div className='mb-6'>
          <Infinite />
        </div>
        <div className="text-stone-200 p-4">
          <h1 className="text-stone-200 xl:text-5xl text-4xl font-bold text-center">
            Nuestros Planes.
          </h1>
          <Pircing />
        </div>
        <Nosotros />
      </ContextProvider>
    </>
  )
}

export default App
