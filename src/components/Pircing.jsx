import { MdDone } from 'react-icons/md'
export const Pircing = () => {
  const plans = [
    {
      id: 1,
      name: 'Básico',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      options: [
        {
          id: 1,
          option: 'Diseño de logo'
        },
        {
          id: 2,
          option: 'Diseño de tarjeta de presentación'
        },
        {
          id: 3,
          option: 'Diseño de flyer'
        },
        {
          id: 4,
          option: 'Diseño de banner'
        },
        {
          id: 5,
          option: 'Diseño de post para redes sociales'
        },
        {
          id: 6,
          option: 'Diseño de brochure'
        },
        {
          id: 7,
          option: 'Diseño de catálogo'
        }
      ],
      price: 99
    },
    {
      id: 2,
      name: 'Premium',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      options: [
        {
          id: 1,
          option: 'Diseño de hoja membretada'
        },
        {
          id: 2,
          option: 'Diseño de volante'
        },
        {
          id: 3,
          option: 'Diseño de afiche'
        },
        {
          id: 4,
          option: 'Diseño de banner para web'
        },
        {
          id: 5,
          option: 'Diseño de banner para redes sociales'
        },
        {
          id: 6,
          option: 'Diseño de banner para email marketing'
        },
        {
          id: 7,
          option: 'Diseño de banner para google ads'
        },
        {
          id: 8,
          option: 'Diseño de banner para facebook ads'
        },
        {
          id: 9,
          option: 'Diseño de banner para instagram ads'
        },
        {
          id: 10,
          option: 'Diseño de banner para linkedin ads'
        }
      ],
      price: 180
    },
    {
      id: 3,
      name: 'Profesional',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      options: [
        {
          id: 1,
          option: 'Diseño de banner para youtube ads'
        },
        {
          id: 2,
          option: 'Diseño de banner para tiktok ads'
        },
        {
          id: 3,
          option: 'Diseño de banner para pinterest ads'
        },
        {
          id: 4,
          option: 'Diseño de banner para snapchat ads'
        },
        {
          id: 5,
          option: 'Diseño de banner para whatsapp ads'
        },
        {
          id: 6,
          option: 'Diseño de banner para telegram ads'
        },
        {
          id: 7,
          option: 'Diseño de banner para spotify ads'
        },
        {
          id: 8,
          option: 'Diseño de banner para twitch ads'
        },
        {
          id: 9,
          option: 'Diseño de banner para amazon ads'
        },
        {
          id: 10,
          option: 'Diseño de banner para twitter ads'
        },
        {
          id: 11,
          option: 'Diseño de banner para linkedin ads'
        }
      ],
      price: 250
    },
    {
      id: 4,
      name: 'Empresarial',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      options: [
        {
          id: 1,
          option: 'Diseño de hoja membretada'
        },
        {
          id: 2,
          option: 'Diseño de volante'
        },
        {
          id: 3,
          option: 'Diseño de afiche'
        },
        {
          id: 4,
          option: 'Diseño de banner para web'
        },
        {
          id: 5,
          option: 'Diseño de banner para redes sociales'
        },
        {
          id: 6,
          option: 'Diseño de banner para email marketing'
        },
        {
          id: 7,
          option: 'Diseño de banner para google ads'
        },
        {
          id: 8,
          option: 'Diseño de banner para facebook ads'
        },
        {
          id: 9,
          option: 'Diseño de banner para instagram ads'
        },
        {
          id: 10,
          option: 'Diseño de banner para linkedin ads'
        },
        {
          id: 6,
          option: 'Diseño de banner para email marketing'
        }
      ],
      price: 350
    },
    {
      id: 5,
      name: 'E-commerce',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      options: [
        {
          id: 6,
          option: 'Diseño de banner para email marketing'
        },
        {
          id: 7,
          option: 'Diseño de banner para google ads'
        },
        {
          id: 8,
          option: 'Diseño de banner para facebook ads'
        },
        {
          id: 9,
          option: 'Diseño de banner para instagram ads'
        },
        {
          id: 10,
          option: 'Diseño de banner para linkedin ads'
        },
        {
          id: 6,
          option: 'Diseño de banner para email marketing'
        },
        {
          id: 7,
          option: 'Diseño de banner para google ads'
        },
        {
          id: 8,
          option: 'Diseño de banner para facebook ads'
        },
        {
          id: 9,
          option: 'Diseño de banner para instagram ads'
        },
        {
          id: 10,
          option: 'Diseño de banner para linkedin ads'
        },
        {
          id: 6,
          option: 'Diseño de banner para email marketing'
        }
      ],
      price: 550
    }
  ]
  return (
    <section className="flex justify-center items-center flex-wrap gap-10 xl:my-16 my-4 mx-4">
      {plans.map((plan) => (
        <div
          className={`bg-stone-900 rounded-lg ${plan.id === 2 ? 'border-indigo-400 border-2 scale-110' : ''} text-stone-200 shadow-xl flex justify-between items-center my-6 flex-col py-10 2xl:py-3 px-4 xl:h-[850px] 2xl:h-[790px] 2xl:w-[25%] xl:w-[30%] relative transition-all duration-300`}
          key={plan.id}
        >
          <div className={`bg-gradient-to-r from-indigo-300 to-indigo-400 rounded-2xl p-4 text-stone-200 font-bold shadow-2xl absolute -top-7 ${plan.id === 2 ? '' : 'hidden'}`}>Más Popular</div>
          <div className='flex justify-center items-center flex-col px-4'>
            <h1 className="my-6 text-center text-4xl">{plan.name}</h1>
            <p className="my-4">{plan.description}</p>
            <button className="bg-indigo-300 py-3 px-6 rounded-lg font-bold opacity-80 hover:opacity-100 transition-all duration-300 my-2">
              Empieza ahora mismo
            </button>
            <h1 className="text-4xl font-bold text-center my-10">
              S/.{plan.price}
            </h1>
          </div>
          <ul className="flex flex-col gap-2 w-full h-full px-4">
            {plan.options.map((option) => (
              <li
                key={option.id}
                className="flex justify-start gap-2 items-center"
              >
                <div className="text-lg text-emerald-300">
                  <MdDone />
                </div>
                {option.option}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
