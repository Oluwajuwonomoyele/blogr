import logo from '../images/logo.svg';
import hambuger from '../images/hamburger.svg';
import close from '../images/close.svg';
import Button from './button'
import ProductDd from './dropdowns/productDropdown';
import CompanyDd from './dropdowns/companyDropdown';
import ConnectDd from './dropdowns/connectDropdown';

const Navbar = ({handleClick, openNav}) => {
    return (
        <header className='absolute w-full bg-transparent top-0 z-30'>
            <div className='container mx-auto px-8 py-8 lg:py-4 flex justify-between items-center'>
                <div className='flex gap-16 items-center'>
                    <div className='cursor-pointer'>
                        <img src={logo} alt="Logo"/>
                    </div>

                    <div className='hidden lg:flex flex-1 gap-8 items-center'>
                        <ProductDd />
                        <CompanyDd />
                        <ConnectDd />
                    </div>
                </div>

                <Button />

                <div className='cursor-pointer lg:hidden p-1' onClick={handleClick}>
                    { openNav ? <img src={close} alt="Close" /> : <img src={hambuger} alt="Hamburger" />}
                </div>
            </div>
        </header>
    );
}
 
export default Navbar;