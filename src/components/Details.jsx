export const Deatils = () => {

  const handleClick = (e) => {
    e.preventDefault()
    window.open('https://api.whatsapp.com/send?phone=51934166548&text=%F0%9D%97%9B%F0%9D%97%BC%F0%9D%97%B9%F0%9D%97%AE%20%F0%9D%97%94%F0%9D%97%9A%F0%9D%97%98%F0%9D%97%A1%F0%9D%97%96%F0%9D%97%9C%F0%9D%97%94%20%F0%9D%97%A2%F0%9D%97%AA%F0%9D%97%9C%20deseo%20m%C3%A1s%20info%20de%20sus%20planes%F0%9F%90%BC')
  }

  return (
    <div className="flex gap-6 items-center">
      <img src="logo4.png" className="w-1/3" alt="" />
      <button className="px-4 py-2 text-xl bg-indigo-300 font-bold text-stone-100 rounded-lg shadow-xl shadow-stone-950 opacity-90 hover:opacity-100 transition-opacity duration-500" onClick={handleClick}>CONTÁCTANOS.</button>
    </div>
  )
}