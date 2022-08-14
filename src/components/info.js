const Info = ({heading, displayHeading, leadOne, descOne, leadTwo, descTwo, imgDesktop, imgMobile, imgStart }) => {
    return (  
        <section>
            <div className="container mx-auto px-8 py-16 text-center">
                <h1 className={displayHeading ? 'text-2xl text-primary-very-dark-blue' : 'hidden'}>{heading}</h1>

                <div className={imgStart ? 'flex flex-col gap-8 items-center text-center pt-12' : 'flex flex-col gap-8 items-center text-center pt-12'}>
                    <div>
                        <picture>
                            <source media="(min-width: 1024px)" srcSet={imgDesktop} />
                            <img src={imgMobile} alt="Illustration" />
                        </picture>
                    </div>

                    <div className="flex flex-col gap-12">
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