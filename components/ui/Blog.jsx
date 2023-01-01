import Image from 'next/image'
import React from 'react'

function Blog({title="title", body="body", date="", image='/images/towels.jpg'}) {
  return (
    <div className='grid'>
        <Image src={image} height={228.97} width={310} alt={title}/>
        <span className='pb-3.75 font-bold text-base underline underline-offset-4 decoration-red-800 hover:text-red-800'>{title}</span>
        <span className={`${date ==''? 'hidden': 'pb-3.75'}`}>{date}</span>
        <span>{body}</span>
    </div>
  )
}

export default Blog