import logo from '../images/logo.svg';

const Footer = () => {
    return (  
        <footer className="bg-neutral-very-dark-black-blue rounded-tr-[7rem]">
            <div className="container mx-auto px-8  py-16 flex flex-col items-center gap-16">
                <div className='cursor-pointer'>
                    <img src={logo} alt="Logo"/>
                </div>

                <div className='text-center md:text-left flex flex-col md:flex-row gap-8 md:gap-20'> 
                    <div className='flex flex-col gap-4'>
                        <h2 className='font-semibold text-neutral-white'>Product</h2>
                        <ul>
                            <li className='text-neutral-grayish-blue'>Overview</li>
                            <li className='text-neutral-grayish-blue'>Pricing</li>
                            <li className='text-neutral-grayish-blue'>Marketplace</li>
                            <li className='text-neutral-grayish-blue'>Features</li>
                            <li className='text-neutral-grayish-blue'>Integration</li>
                        </ul>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <h2 className='font-semibold text-neutral-white'>Company</h2>
                        <ul>
                            <li className='text-neutral-grayish-blue'>About</li>
                            <li className='text-neutral-grayish-blue'>Team</li>
                            <li className='text-neutral-grayish-blue'>Blog</li>
                            <li className='text-neutral-grayish-blue'>Careers</li>
                        </ul>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <h2 className='font-semibold text-neutral-white'>Connect</h2>
                        <ul>
                            <li className='text-neutral-grayish-blue'>Contact</li>
                            <li className='text-neutral-grayish-blue'>Newsletter</li>
                            <li className='text-neutral-grayish-blue'>LinkedIn</li>
                        </ul>

                    </div>
                </div>

            </div>
        </footer>
    );
}
 
export default Footer;