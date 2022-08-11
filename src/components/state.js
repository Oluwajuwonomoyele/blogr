import circles from '../images/bg-pattern-circles.svg';

const State = () => {
    return (  
        <section className="relative bg-gradient-very-dark-gray-blue rounded-tr-[7rem] rounded-bl-[7rem] overflow-hidden">
            <img src={circles} alt='' className='absolute -top-[8rem]' />
            <div className="container mx-auto px-8 h-[70vh] text-neutral-white flex flex-col items-center justify-center gap-8 text-center relative z-20">
                <h1 className="text-2xl">State of the Art Infrastructure</h1>
                <p>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
            </div>
        </section>
    );
}
 
export default State;