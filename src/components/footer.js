import logo from '../images/logo.svg';

const Footer = () => {
    const scrollHome = () => {
        window.scrollTo(0,0)
    }
    return (  
        <footer className="bg-neutral-very-dark-black-blue rounded-tr-[7rem]">
            <div className="container mx-auto px-8  py-16 flex flex-col lg:flex-row lg:justify-between items-center lg:items-start  gap-16">
                <div className='cursor-pointer lg:basis-[20%]' onClick={() => {scrollHome()}}>
                    <img src={logo} alt="Logo" className='mx-auto'/>
                </div>

                <div className='text-center md:text-left flex flex-col md:flex-row gap-8 md:gap-20 lg:basis-[70%] lg:w-full lg:gap-52'> 
                    <div className='flex flex-col gap-4'>
                        <h2 className='font-semibold text-neutral-white'>Product</h2>
                        <ul className='space-y-2'>
                            <li className='text-neutral-grayish-blue hover:underline cursor-pointer'>Overview</li>
                            <li className='text-neutral-grayish-blue hover:underline cursor-pointer'>Pricing</li>
                            <li className='text-neutral-grayish-blue hover:underline cursor-pointer'>Marketplace</li>
                            <li className='text-neutral-grayish-blue hover:underline cursor-pointer'>Features</li>
                            <li className='text-neutral-grayish-blue hover:underline cursor-pointer'>Integration</li>
                        </ul>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <h2 className='font-semibold text-neutral-white'>Company</h2>
                        <ul className='space-y-2'>
                            <li className='text-neutral-grayish-blue hover:underline cursor-pointer'>About</li>
                            <li className='text-neutral-grayish-blue hover:underline cursor-pointer'>Team</li>
                            <li className='text-neutral-grayish-blue hover:underline cursor-pointer'>Blog</li>
                            <li className='text-neutral-grayish-blue hover:underline cursor-pointer'>Careers</li>
                        </ul>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <h2 className='font-semibold text-neutral-white'>Connect</h2>
                        <ul className='space-y-2'>
                            <li className='text-neutral-grayish-blue hover:underline cursor-pointer'>Contact</li>
                            <li className='text-neutral-grayish-blue hover:underline cursor-pointer'>Newsletter</li>
                            <li className='text-neutral-grayish-blue hover:underline cursor-pointer'>LinkedIn</li>
                        </ul>

                    </div>
                </div>

            </div>
        </footer>
    );
}
 
export default Footer;