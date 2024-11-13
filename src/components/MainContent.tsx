 import avatar from '../assets/image-avatar.png'
 import clockIcon from '../assets/icon-clock.svg' 

 import ethereumIcon from '../assets/icon-ethereum.svg' 

function MainContent() {
  return (
    <div>
        <h1 className='text-2xl font-semibold text-white hover:text-cyan mb-4'>Equilibrium #3429  </h1>
        <p className='text-base font-medium text-softBlue mb-5'>Our Equilibrium collection promotes balance and calm. </p>
        <div className='flex justify-between items-center mb-6'>
            <div className='flex items-center gap-2'>
                <img src={ethereumIcon} alt="ethereun icon" />
                <p className='text-base font-semibold text-cyan'>0.041 ETH</p>
            </div>
            <div className='flex items-center gap-2 '>
                <img src={clockIcon} alt="clock icon" />
                <p className='text-base font-medium text-softBlue'>3 days left</p>
            </div>
        </div>
        <div className='bg-line mb-5 h-[1px] w-full' ></div>
        <div className='flex gap-3 items-center'>
            <img src={avatar} alt="Jules Wyvern" className='w-8 h-8 rounded-full border border-white block'/>
            <p className='text-softBlue text-base font-medium'> Creation of <span className='text-white hover:text-cyan'>Jules Wyvern</span></p>
        </div>
    </div>
  )
}

export default MainContent