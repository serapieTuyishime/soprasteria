import Image from 'next/image'

function Navigation() {
  return (
    <div className='flex items-center justify-between w-full px-5 h-15.25 sm:h-[39.88px]'>
        <Image src="/images/logo.png" alt="Logo" width={125} height={16.48}/>
        <div>
            <span className='text-2xl'>S</span>
            <span className='text-2xl'>=</span>
        </div>
    </div>
  )
}

export default Navigation