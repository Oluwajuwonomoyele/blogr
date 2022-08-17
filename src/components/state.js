import phones from '../images/illustration-phones.svg';

const State = () => {
    return (  
        <section className="relative bg-gradient-very-dark-gray-blue rounded-tr-[7rem] rounded-bl-[7rem] mt-24 sm:mt-40 md:mt-56 lg:mt-0 lg:flex lg:justify-between lg:items-center lg:px-8 lg:h-[45vh]" id='state'>
            <img src={phones} alt='' className='absolute lg:static -top-[8rem] sm:-top-[13rem] md:-top-[16rem] md:inset-x-0 md:mx-auto' />
            <div className="container mx-auto pt-28 xs:pt-40 sm:pt-28 px-8 h-[80vh] lg:h-[auto] lg:max-h-[80vh] lg:-mt-[5rem] text-neutral-white flex flex-col items-center lg:items-start justify-center gap-8 text-center lg:text-left relative z-20 lg:max-w-[700px]">
                <h1 className="text-2xl xs:text-3xl">State of the Art Infrastructure</h1>
                <p className='text-neutral-grayish-blue'>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
            </div>
        </section>
    );
}
 
export default State;