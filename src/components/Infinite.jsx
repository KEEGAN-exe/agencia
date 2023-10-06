import employees from '../mocs/employees.json'
import '../custom.css'

export const Infinite = () => {
  const data = employees

  return (
    <div className="slider">
      <h1 className='font-bold 2xl:text-5xl text-4xl 2xl:text-start text-center  text-stone-200 my-8'>Conoce a nuestro equipo</h1>
      <div className="slide-track">
        {data.map((employee) => (
          <div className="slide" key={employee.id}>
            <img src={employee.image} alt="" />
          </div>
        ))}
        {data.map((employee,index) => (
          <div className="slide" key={index * 4}>
            <img src={employee.image} alt="" />
          </div>
        ))}
        {data.map((employee, index) => (
          <div className="slide" key={index * 2}>
            <img src={employee.image} alt="" />
          </div>
        ))}
        {data.map((employee,index) => (
          <div className="slide" key={index }>
            <img src={employee.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}
