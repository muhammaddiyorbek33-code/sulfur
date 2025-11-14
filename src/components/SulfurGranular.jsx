const SulfurGranular = () => {
    return (
        <section id="granular-section">
            <div className="text-center bg-gray-100 py-20">
                <p className="text-orange-500 text-[23px] font-bold tracking-[2px]">
                    SULFUR & UREA
                </p>
                <h2 className="text-gray-700 text-[40px] md:text-[50px] font-bold">
                    Our Products
                </h2>
            </div>

            <div className="flex flex-col items-center justify-center py-[60px] px-4 ">
                <h2 className="text-orange-400 text-[36px] md:text-[50px] font-bold">
                    1. Sulfur Granular
                </h2>
                <p className="max-w-[480px] text-[18px] md:text-[20px] leading-[28px] text-gray-700 mt-[10px] font-medium">
                    Product: technical sulfur, technical sulphur, agricultural sulfur,
                    fertilizer, commercial sulfur, commercial sulphur
                </p>
            </div>

            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-22 bg-[#f5f5f5]">
                <div className="bg-white shadow-sm p-4 flex flex-col items-center text-center rounded-md">
                    <img
                        className="w-full h-[180px] object-cover rounded"
                        src="https://sulfur-man.com/wp-content/uploads/2023/09/granular-sulfur-hand.jpg"
                        alt="Sulfur granules"
                    />
                    <h3 className="text-gray-800 text-[30px] font-bold mt-4 pb-[100px]">
                        Sulfur granules
                    </h3>
                    <p className="text-[20px] text-gray-600 mt-2 mb-[23px]">1 ton + shipping costs</p>
                    <p className="text-[20px] text-gray-600 mb-[40px]">
                        Shipping ports of the Persian Gulf
                    </p>
                    <p className="text-[20px] text-red-500 font-semibold mt-2">
                        Available amount: 2 million tons (more - by request)
                    </p>

                    <div className="text-left text-[14px] mt-4 space-y-2 w-full px-2">
                        <p className="text-[20px] text-[#404040]"><b className="">Country of origin:</b> Uzbekistan</p>
                        <p className="text-[20px] text-[#404040]"><b className="">Form:</b> granular</p>
                        <p className="text-[20px] text-[#404040]"><b className="">Production technology:</b> gas</p>
                        <p className="text-[20px] text-[#404040]"><b className="">Minimum order:</b> 60 000 metric tons (less - by request)</p>
                        <p className="text-[20px] text-[#404040]"><b className="">Manufacturer:</b> Mubarek gas processing plant</p>
                        <p className="text-[20px] text-[#404040]"><b className="">Lead time:</b> 20-30 business days</p>
                        <p className="text-[20px] text-[#404040]"><b className="">Logistic costs:</b> 100% AP</p>
                        <p className="text-[20px] text-[#404040]"><b className="">Payment method:</b> LC for products, AP for logistic</p>
                    </div>

                    <button
                        className="bg-[#f09b00] py-[10px] px-10 rounded-[80px] text-white items-center my-[30px]"
                    >
                        <a
                            className="music-primary-button font-semibold tracking-[0.5px]"
                            href="#order-section"
                        >
                            ORDER NOW!
                        </a>
                    </button>
                </div>

                <div className="bg-white shadow-sm p-4 flex flex-col rounded-md">
                    <img
                        className="w-full  object-cover rounded"
                        src="https://sulfur-man.com/wp-content/uploads/2023/08/technical-sulfur-in-big-bags.jpg"
                        alt="Packaging"
                    />
                    <h3 className="text-gray-800 text-[30px] font-bold mt-4 text-center">
                        Packaging
                    </h3>
                    <p className="text-[20px] text-gray-700 mt-2 font-normal">
                        <b>Packaging:</b> big bags from 1 ton/2 tons
                    </p>

                    <img
                        className="w-full  object-cover rounded mt-4"
                        src="https://sulfur-man.com/wp-content/uploads/2023/09/SULFUR-GRANULAR-SULFURMAN.jpg"
                        alt="Sulfur packaging"
                    />
                </div>

                <div className="bg-white shadow-sm p-4 flex flex-col rounded-md">
                    <img
                        className="w-full object-contain rounded"
                        src="https://sulfur-man.com/wp-content/uploads/2023/07/GRADE9998.jpeg"
                        alt="Quality Passport"
                    />
                    <h3 className="text-gray-800 text-[30px] font-bold mt-4 text-center ">
                        Quality Passport
                    </h3>
                    <p className="text-[20px] text-gray-700 mt-2">
                        <b>Quality standard:</b> TDS 127.1-93 (GOST 127.1-93)
                    </p>
                    <p className="text-[20px] text-gray-700">grade 99.98%</p>
                </div>
            </div>
        </section>
    );
};

export default SulfurGranular;
