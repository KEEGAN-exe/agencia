import { BsInstagram, BsFacebook, BsLinkedin, BsTiktok } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

export const Contact = () => {
  return (
    <div className="text-3xl text-stone-300 xl:ml-10 xl:w-auto w-screen justify-center items-center gap-4
    [&>a]:hover:cursor-pointer animate-fade-left flex xl:flex-col flex-row ">
      <a className='border-2 border-indigo-300 p-3 rounded-full hover:scale-110 transition-all duration-300 opacity-80 hover:opacity-100' href='https://www.facebook.com/agenciaowi.pe' target='_blank' rel="noopener noreferrer">
        <BsFacebook />
      </a>

      <a className='border-2 border-indigo-300 p-3 rounded-full hover:scale-110 transition-all duration-300 opacity-80 hover:opacity-100' href='https://www.linkedin.com/company/owi-agencia-de-publicidad-y-marketing/' target='_blank' rel="noopener noreferrer">
        <BsLinkedin />
      </a>

      <a className='border-2 border-indigo-300 p-3 rounded-full hover:scale-110 transition-all duration-300 opacity-80 hover:opacity-100' href='https://www.facebook.com/agenciaowi.pe' target='_blank' rel="noopener noreferrer">
        <BsTiktok />
      </a>

      <a className='border-2 border-indigo-300 p-3 rounded-full hover:scale-110 transition-all duration-300 opacity-80 hover:opacity-100' href='https://www.instagram.com/agenciaowi.pe/' target='_blank' rel="noopener noreferrer">
        <BsInstagram />
      </a>

      <a className='border-2 border-indigo-300 p-3 rounded-full hover:scale-110 transition-all duration-300 opacity-80 hover:opacity-100' href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSPFdXZxpLXtHPrLnDBWdplwrBMdPCtTvtXkHZQBDlfFLnMmWGnrDkZWWnQTTRlGkwrwVpFC' target='_blank' rel="noopener noreferrer">
        <AiOutlineMail />
      </a>
    </div>
  )
}
