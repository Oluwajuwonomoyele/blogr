const Info = ({heading, displayHeading, leadOne, descOne, leadTwo, descTwo, imgDesktop, imgMobile, textStart }) => {
    return (  
        <section>
            <div className={ textStart ? "container mx-auto px-8 lg:pl-12 py-16 text-center overflow-x-hidden" : "container mx-auto px-8 lg:pr-12 py-16 text-center overflow-x-hidden"}>
                <h1 className={displayHeading ? 'text-2xl lg:text-3xl text-primary-very-dark-blue' : 'hidden'}>{heading}</h1>

                <div className={textStart ? 'flex flex-col lg:flex-row-reverse gap-8 items-center  text-center lg:text-left pt-12 lg:pt-0 lg:gap-20' : 'flex flex-col lg:flex-row gap-8 lg:gap-20 items-center text-center lg:text-left pt-12 lg:pt-20'}>
                    <div className={textStart ? "lg:basis-1/2 lg:translate-x-[10rem]" : "lg:basis-1/2 lg:-translate-x-[10rem]"}>
                        <picture>
                            <source media="(min-width: 1024px)" srcSet={imgDesktop} />
                            <img src={imgMobile} alt="Illustration" />
                        </picture>
                    </div>

                    <div className="flex flex-col gap-12 basis-1/2">
                        <div>
                            <h2 className="text-2xl mb-4 text-primary-very-dark-blue">{leadOne}</h2>
                            <p>{descOne}</p>
                        </div>

                        <div>
                            <h2 className="text-2xl mb-4 text-primary-very-dark-blue">{leadTwo}</h2>
                            <p>{descTwo}</p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
 
export default Info;