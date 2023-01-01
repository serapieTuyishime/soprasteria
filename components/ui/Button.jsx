import React from 'react'

function Button({text="None yet", color="red"}) {
  return (
    <div className={`${color === 'red'? 'bg-red-800 text-white': 'bg-white border border-black'} sm:text-[9.72px] font-bold py-2.5 px-6.25 text-small max-w-max`}>
        {text}
    </div>
  )
}

export default Button