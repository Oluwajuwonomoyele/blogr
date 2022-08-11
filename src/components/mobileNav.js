import Button from "./button";
import CompanyDd from "./dropdowns/companyDropdown";
import ConnectDd from "./dropdowns/connectDropdown";
import ProductDd from "./dropdowns/productDropdown";

const MobileNav = ({openNav }) => {
    return (  
        <div className={ openNav ? "fixed z-40 bg-neutral-white w-3/4 mx-auto inset-x-0 top-32 rounded-lg flex flex-col items-center text-center gap-8 py-12 shadow-xl transition-all ease-linear duration-200": "fixed bg-red-900 w-3/4 mx-auto inset-x-0 top-32 rounded-lg flex flex-col items-center text-center gap-8 py-12 shadow-xl scale-0 transition-all ease-linear duration-200"}>
            <div className="flex flex-col gap-8">
                <ProductDd mobile />
                <CompanyDd mobile />
                <ConnectDd mobile />
            </div>

            <hr className=" w-3/4 rounded-full border"/>

            <Button mobile />
        </div>
    );
}
 
export default MobileNav;