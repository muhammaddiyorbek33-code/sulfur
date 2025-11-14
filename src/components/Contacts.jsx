import { FaHome } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

export default function Contacts() {
    return (
        <section id="contacts-section" className="w-full flex justify-center py-10 bg-white">
            <div className="max-w-6xl w-full flex flex-col md:flex-row items-start justify-between gap-10 px-4">

                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-6">
                    <h2 className="text-[50px] font-semibold text-[#404040] text-center w-full">
                        Contacts
                    </h2>

                    <div className="flex items-center gap-3">
                        <MdEmail size={32} color="#404040 " />
                        <a
                            href="mailto:info@sulfur-man.com"
                            className="text-[#f09b00] text-[18px] font-medium hover:text-[#f09b00] transition"
                        >
                            info@sulfur-man.com
                        </a>
                    </div>

                    <div className="flex items-center gap-3">
                        <FiPhone size={32} color="#404040 " />
                        <a
                            href="tel:+4915732015007"
                            className="text-[#f09b00] text-[18px] font-medium hover:text-[#f09b00] transition"
                        >
                            +49 157 320 150 07 (mobile, Germany)
                        </a>
                    </div>

                    <div className="flex items-center gap-3">
                        <FiPhone size={32} color="#404040  " />
                        <a
                            href="tel:+77017511487"
                            className="text-[#f09b00] text-[18px] font-medium hover:text-[#f09b00] transition"
                        >
                            +77017511487 (mobile, Kazakhstan)
                        </a>
                    </div>

                    <div className="flex items-center gap-3">
                        <FaHome size={32} color="#404040 " />
                        <a
                            href="https://goo.gl/maps/UoipLrkRUicCDX126"
                            className="text-[#f09b00] text-[18px] font-medium hover:text-[#f09b00] transition"
                        >
                            Kazakhstan, Astana, street Alikhan Bokeykhan, 29B
                        </a>
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex justify-center md:justify-end items-end">
                    <img
                        src="https://sulfur-man.com/wp-content/uploads/2023/12/sm2.png"
                        alt="SM Logo"
                        className="w-[300px] md:w-[380px] lg:w-[450px] object-contain mt-10"
                    />
                </div>

            </div>
        </section>
    );
}
