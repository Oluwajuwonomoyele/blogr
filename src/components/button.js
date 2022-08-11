const Button = ({mobile}) => {
    return (  
        <div className={mobile ? 'flex lg:hidden flex-col gap-4 justify-center' : "hidden lg:flex gap-2 items-center text-sm"}>
            <button className={ mobile ? "bg-transparent text-primary-very-dark-blue px-8 py-2 transition-all ease-linear duration-200 hover:bg-neutral-white hover:text-primary-light-red rounded-full" : "bg-transparent text-neutral-white px-8 py-2 transition-all ease-linear duration-200 hover:bg-neutral-white hover:text-primary-light-red rounded-full"}>Login</button>
            <button className={mobile ? "bg-gradient-to-r from-primary-very-light-red to-primary-light-red text-neutral-white px-8 py-2 rounded-full transition-all ease-linear duration-200 hover:bg-primary-very-light-red hover:text-neutral-white" : "bg-neutral-white text-primary-light-red px-8 py-2 rounded-full transition-all ease-linear duration-200 hover:bg-primary-very-light-red hover:text-neutral-white"}>Sign Up</button>
        </div>
    );
}
 
export default Button;