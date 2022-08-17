import { Menu } from '@headlessui/react';
import { useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

const ProductDd = ({mobile}) => {
    const [open, setOpen] = useState(false)

    return (  
        <Menu as='div' className={ mobile ? 'relative cursor-pointer' : 'relative cursor-pointer text-sm'}>
            <Menu.Button onClick={() => {setOpen(!open)}} className=''>
                <div className={ mobile ? 'flex items-center gap-2 hover:opacity-90' : 'flex items-center gap-2 text-neutral-white hover:underline'}>
                    <span>Product</span>

                    { open ? <HiChevronUp className={ mobile ? 'text-primary-light-red' : ''} /> : <HiChevronDown className={ mobile ? 'text-primary-light-red' : ''} />}
                </div>
            </Menu.Button>
            <Menu.Items className={ mobile ? 'bg-neutral-grayish-blue bg-opacity-30 mt-4 rounded-lg shadow-md px-8' : 'absolute bg-neutral-white top-12 left-0 rounded-lg shadow-md z-10'}>
                <ul className='flex flex-col gap-4 p-6 w-full lg:w-[190px]'>
                    <Menu.Item as='li' className={ mobile ? 'opacity-90' : 'text-neutral-very-dark-grayish-blue hover:font-bold transition-all ease-linear duration-100'} onClick={() => {setOpen(false)}}>Overview</Menu.Item>
                    <Menu.Item as='li' className={ mobile ? 'opacity-90' : 'text-neutral-very-dark-grayish-blue hover:font-bold transition-all ease-linear duration-100'} onClick={() => {setOpen(false)}}>Pricing</Menu.Item>
                    <Menu.Item as='li' className={ mobile ? 'opacity-90' : 'text-neutral-very-dark-grayish-blue hover:font-bold transition-all ease-linear duration-100'} onClick={() => {setOpen(false)}}>Marketplace</Menu.Item>
                    <Menu.Item as='li' className={ mobile ? 'opacity-90' : 'text-neutral-very-dark-grayish-blue hover:font-bold transition-all ease-linear duration-100'} onClick={() => {setOpen(false)}}>Features</Menu.Item>
                    <Menu.Item as='li' className={ mobile ? 'opacity-90' : 'text-neutral-very-dark-grayish-blue hover:font-bold transition-all ease-linear duration-100'} onClick={() => {setOpen(false)}}>Integrations</Menu.Item>
                </ul>
            </Menu.Items>
        </Menu>
    );
}
 
export default ProductDd;