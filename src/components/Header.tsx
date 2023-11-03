import Container from "./Container";
import Logo from "./Logo";
import { IoMdCart } from 'react-icons/io'
import { FiSearch } from 'react-icons/fi'
import { AiOutlineUser } from 'react-icons/ai'

const Header = () => {
    return (
        <div className="bg-bodyColor h-20">
            <Container className="h-full flex items-center justify-between md:gap-x-5 md:justify-start">
                <Logo />

                {/* Search Field */}
                <div className="w-full bg-white hidden md:flex items-center gap-x-1 border-[1px] border-lightText/50
                rounded-full px-4 py-1.5 focus-within:border-orange-600 group">
                    <FiSearch className="text-gray-500 group-focus-within:text-darkText duration-200" />
                    <input type="text" placeholder="Search For Products"
                        className="placeholder:text-sm flex-1 outline-none"
                    />
                </div>

                {/* Login/Register */}
                <div className="headerDiv">
                    <AiOutlineUser className="text-2xl" />
                    <p className="text-sm font-semibold">Login/Register</p>
                </div>

                {/* Card Button */}
                <div className="bg-black hover:bg-slate-950 rounded-full text-slate-100 hover:text-white 
                flex items-center gap-x-1 px-3 py-1.5 border border-black hover:border-orange-600 duration-200 cursor-pointer relative">
                    <IoMdCart className="text-xl" />
                    <p className="text-sm font-semibold">$0.00</p>
                    <span className="bg-white text-orange-600 rounded-full text-xs font-semibold absolute 
                    -right-2 -top-1 w-5 h-5 flex items-center justify-center shadow-xl shadow-black">
                        10
                    </span>
                </div>
            </Container>
        </div>
    );
}

export default Header;