import bgMobile from '../images/bg-pattern-intro-mobile.svg';
import bgDesktop from '../images/bg-pattern-intro-desktop.svg';

const Hero = () => {
    return ( 
        <section className="bg-primary-light-red rounded-bl-[7rem] relative overflow-hidden" id="hero">
            <picture className='absolute -left-[20rem] -top-[16rem] lg:-left-[50rem] lg:-top-[80rem] w-[400%] opacity-70'>
                <source media="(min-width: 1024px)" srcSet={bgDesktop} />
                <img src={bgMobile} alt="Background" />
            </picture>
            <div className="container mx-auto h-[80vh] flex flex-col gap-6 lg:gap-8 items-center justify-center px-8 text-center relative z-20">
                <h1 className="text-3xl md:text-4xl lg:text-6xl text-neutral-white">A modern publishing platform</h1>
                <p className="text-lg text-neutral-white">Grow your audience and build your online brand</p>
                <div className="flex items-center gap-4">
                    <button className="bg-neutral-white px-2 text-sm xs:text-base xs:px-4 sm:px-6 py-2 text-primary-light-red rounded-full font-semibold hover:bg-primary-very-light-red hover:text-neutral-white transition-all ease-linear duration-200">Start for Free</button>
                    <button className="border px-2 text-sm xs:text-base xs:px-4 sm:px-6 py-2 rounded-full text-neutral-white font-semibold hover:text-primary-very-light-red hover:bg-neutral-white transition-all ease-linear duration-200">Learn More</button>
                </div>
            </div>
        </section>
    );
}
 
export default Hero;