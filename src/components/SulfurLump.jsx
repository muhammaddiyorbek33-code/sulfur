
const SulfurLump = () => {
    return (
        <section className="bg-[#f5f5f5] my-[80px]">
            <div className="flex flex-col items-center justify-center pt-[60px] px-4 ">
                <h2 className="text-orange-400 text-[36px] md:text-[50px] font-bold ">
                    2. Sulfur Lump
                </h2>
                <p className="max-w-[480px] text-[18px] md:text-[20px] leading-[28px] text-gray-700 mt-[10px] font-medium">
                    Product: technical sulphur, technical sulfur
                    <br />
                    form: lump
                </p>
            </div>

            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-22">
                <div className="bg-white shadow-sm p-4 flex flex-col items-center text-center rounded-md">
                    <img
                        className="w-full h-[534px] object-cover rounded"
                        src="https://sulfur-man.com/wp-content/uploads/2023/08/lump-sulfur.jpg"
                        alt="Sulfur Lump"
                    />
                    <h3 className="text-gray-800 text-[30px] font-bold mt-4 pb-[100px]">
                        Sulfur technical
                    </h3>
                    <p className="text-[20px] text-gray-600 mt-2 mb-[23px]">1 ton</p>

                    <div className="text-left text-[14px] mt-4 space-y-2 w-full px-2">
                        <p className="text-[20px] text-[#404040]"><b className="">Country of origin:</b> Uzbekistan</p>
                        <p className="text-[20px] text-[#404040]"><b className="">Form:</b> lump</p>
                        <p className="text-[20px] text-[#404040]"><b className="">Production technology:</b> gas</p>
                        <p className="text-[20px] text-[#404040]"><b className="">Minimum order:</b>  5,000 metric tons (less - by request)</p>
                        <p className="text-[20px] text-[#404040]"><b className="">Available amount</b> : available amount: 30,000 metric tons per month (more - by request)</p>
                        <p className="text-[20px] text-[#404040]"><b className="">Manufacturer:</b> Mubarek gas processing plant</p>
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
                        className="w-full h-[534px]  object-cover rounded"
                        src="https://sulfur-man.com/wp-content/uploads/2023/07/sulfur-big-bag.jpg"
                        alt="Packaging"
                    />
                    <h3 className="text-gray-800 text-[30px] font-bold mt-4 text-center">
                        Packaging
                    </h3>
                    <p className="text-[20px] text-gray-700 mt-15 font-normal">
                        <b>Lead time:</b>: 20-30 business days
                    </p>
                    <p className="text-[20px] text-gray-700 mt-2 font-normal">
                        <b>Packaging:</b> big bags from 1 ton/2 tons
                    </p>
                    <p className="text-[20px] text-gray-700 mt-2 font-normal">
                        <b>Logistic costs:</b> : 100% AP
                    </p>
                </div>

                <div className="bg-white shadow-sm p-4 flex flex-col rounded-md">
                    <img
                        className="w-full h-[534px] object-contain rounded"
                        src="https://sulfur-man.com/wp-content/uploads/2023/07/2021.09.02.PROD_.CERTIF.3.EN_.9995.jpeg"
                        alt="Quality Passport"
                    />
                    <h3 className="text-gray-800 text-[30px] font-bold mt-3 text-center ">
                        Quality Passport
                    </h3>
                    <p className="text-[20px] text-gray-700 mt-[30px]">
                        <b>Quality standard:</b> GOST 127.1-93
                    </p>
                    <p className="text-[20px] text-gray-700">(99.95%)</p>
                    <img
                        className="w-full h-[201px] object-contain rounded mt-[50px]"
                        src="https://sulfur-man.com/wp-content/uploads/2023/08/1684232449443.jpg"
                        alt="Quality Passport"
                    />
                    <h3 className="text-gray-800 text-[30px] font-bold mt-4 text-center ">
                        Commercial Sulfur
                    </h3>
                    <b className="text-[25px] text-gray-700 mt-2 text-center mt-[30px]">
                        TDS 127.1-93
                    </b>
                </div>
            </div>
        </section>
    );
}

export default SulfurLump