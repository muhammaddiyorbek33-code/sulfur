import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const FooterLink = ({ href, children, activeItem, setActiveItem }) => {
    const isActive = activeItem === children;

    return (
        <a
            href={href}
            onClick={() => setActiveItem(children)}
            className={`text-[#0074db] pl-3 relative before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-[#0074db] before:origin-top transition-transform duration-300 ${
                isActive ? "before:scale-y-100" : "before:scale-y-0"
            } hover:before:scale-y-100`}
        >
            {children}
        </a>
    );
};

const Footer = () => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(null);

    return (
        <footer className="bg-[#f5f5f5] py-10 mt-10">
            <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

                <div className="text-[#404040] flex flex-col items-center md:items-start">

                    <div className="md:hidden w-full flex justify-center mb-4">
                        <button onClick={() => setOpen(!open)}>
                            {open ? <FiX size={32} /> : <FiMenu size={32} />}
                        </button>
                    </div>

                    <nav className={`${open ? "block" : "hidden"} md:block`}>
                        <ul className="flex flex-col gap-3 text-[16px] items-center md:items-start md:ml-[150px] w-full">
                            <li  className="relative w-full">
                                <FooterLink href="#granular-section" activeItem={active} setActiveItem={setActive}>
                                    Sulfur
                                </FooterLink>
                            </li>
                            <li className="relative w-full">
                                <FooterLink href="#urea-section" activeItem={active} setActiveItem={setActive}>
                                    Urea
                                </FooterLink>
                            </li>
                            <li className="relative w-full">
                                <FooterLink href="#aboutUs-section" activeItem={active} setActiveItem={setActive}>
                                    About Us
                                </FooterLink>
                            </li>
                            <li className="relative w-full">
                                <FooterLink href="#news-section" activeItem={active} setActiveItem={setActive}>
                                    News
                                </FooterLink>
                            </li>
                            <li className="relative w-full">
                                <FooterLink href="#video-section" activeItem={active} setActiveItem={setActive}>
                                    Video
                                </FooterLink>
                            </li>
                            <li className="relative w-full">
                                <FooterLink href="#delivery-section" activeItem={active} setActiveItem={setActive}>
                                    Delivery
                                </FooterLink>
                            </li>
                            <li className="relative w-full">
                                <FooterLink href="#order-section" activeItem={active} setActiveItem={setActive}>
                                    Order
                                </FooterLink>
                            </li>
                            <li className="relative w-full">
                                <FooterLink href="#contacts-section" activeItem={active} setActiveItem={setActive}>
                                    Contacts
                                </FooterLink>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="flex justify-center">
                    <img
                        src="https://sulfur-man.com/wp-content/uploads/2023/09/eworldtrade.png"
                        alt="eWorldTrade"
                        className="w-[260px] md:w-[280px] object-contain shadow-lg"
                    />
                </div>

                <div className="flex flex-col items-center md:items-start text-center md:text-left text-[#404040]">
                    <img
                        src="https://sulfur-man.com/wp-content/uploads/2023/07/sulfurman.png"
                        alt="Sulfur-Man"
                        className="w-[170px] object-contain mb-3"
                    />

                    <a
                        href="tel:+4915732015007"
                        className="text-[16px] hover:text-[#f09b00] transition"
                    >
                        +49 157 320 150 07 <span className="text-[14px]">(Germany)</span>
                    </a>

                    <a
                        href="mailto:info@sulfur-man.com"
                        className="text-[16px] text-[#f09b00] transition mt-1"
                    >
                        info@sulfur-man.com
                    </a>

                    <p className="text-[15px] mt-2 leading-[22px]">
                        Z05T5PI, Kazakhstan, Astana,
                        <br />
                        street Alikhan Bokeykhan, 29B
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
