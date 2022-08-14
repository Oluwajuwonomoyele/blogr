import phones from '../images/illustration-phones.svg';

const State = () => {
    return (  
        <section className="relative bg-gradient-very-dark-gray-blue rounded-tr-[7rem] rounded-bl-[7rem] mt-24 sm:mt-40 md:mt-56" id='state'>
            <img src={phones} alt='' className='absolute -top-[8rem] sm:-top-[13rem] md:-top-[16rem] md:inset-x-0 md:mx-auto' />
            <div className="container mx-auto pt-28 xs:pt-40 sm:pt-28 px-8 h-[80vh] text-neutral-white flex flex-col items-center justify-center gap-8 text-center relative z-20">
                <h1 className="text-2xl xs:text-3xl">State of the Art Infrastructure</h1>
                <p className='text-neutral-grayish-blue'>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
            </div>
        </section>
    );
}
 
export default State;