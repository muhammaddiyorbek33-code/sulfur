const SulfurUrea = () => {
    return (
        <section id="urea-section"  className="my-[80px]">
            <div className="flex flex-col items-center justify-center py-[60px]">
                <h2 className="text-orange-400 text-[36px] md:text-[50px] font-bold ">
                    3. Urea 46
                </h2>
                <p className="max-w-[480px] text-[18px] md:text-[20px] leading-[28px] text-gray-700 mt-[10px] font-medium">
                    Product: Urea 46 agriculture grade
                    <br />
                    Depending on the purpose, two grades of urea are produced.
                    <br />
                    Urea brand A, B
                </p>
            </div>

            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-22 bg-[#f5f5f5]">
                <div className="bg-white shadow-sm p-4 flex flex-col items-center text-center rounded-md">
                    <img
                        className="w-full h-[200px] object-cover rounded"
                        src="https://sulfur-man.com/wp-content/uploads/2023/08/UREA-PROD.jpg"
                        alt="Sulfur Urea"
                    />
                    <h3 className="text-gray-800 text-[30px] font-bold mt-4 pb-[100px]">
                        Urea 46 agriculture grade
                    </h3>
                    <p className="text-[20px] text-gray-600 mt-2 mb-[23px]">1 ton</p>

                    <div className="text-left text-[14px] mt-4 space-y-2 w-full px-2">
                        <p className="text-[20px] text-[#404040]"><b className="">Country of origin:</b> Uzbekistan</p>
                        <p className="text-[20px] text-[#404040]"><b className="">Min</b> . lot under the contract 10,000 tons x 12 months</p>
                        <p className="text-[20px] text-[#404040]"><b className="">Max</b>. lot 150,000 tons x 12 months</p>
                        <p className="text-[20px] text-[#404040]"><b className="">Delivery options</b>  : Uzbekistan</p>
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
                        className="w-full h-[274px]  object-cover rounded"
                        src="https://sulfur-man.com/wp-content/uploads/2023/08/urea46-carbamid.jpg"
                        alt="Packaging"
                    />
                    <h3 className="text-gray-800 text-[30px] font-bold mt-4 text-center">
                        Packaging
                    </h3>
                    <p className="text-[20px] text-gray-700 mt-15 font-normal">
                        <b>Lead time:</b>: 20-30 business days
                    </p>
                    <p className="text-[20px] text-gray-700 mt-2 font-normal">
                        <b>Packaging:</b> 50 kg bags
                    </p>
                    <p className="text-[20px] text-gray-700 mt-2 font-normal">
                        <b>Logistic costs:</b> : 100% AP
                    </p>
                </div>

                <div className="bg-white shadow-sm p-4 flex flex-col rounded-md">
                    <img
                        className="w-full h-[601px] object-contain rounded"
                       src="https://sulfur-man.com/wp-content/uploads/2023/08/urea-spec-1.jpg"
                        alt=" Specifications"
                    />
                    <img
                        className="w-full h-[264px] object-contain rounded "
                        src="https://sulfur-man.com/wp-content/uploads/2023/08/UREA-SPEC.jpg"
                        alt=" Specifications"
                    />
                    <h3 className="text-gray-800 text-[30px] font-bold mt-4 text-center ">
                       Specifications
                    </h3>
                     <p className="text-[20px] text-gray-700 mt-[30px]">
                        <b>Quality standard:</b> : GOST 2081-92 grade 46% minimum
                    </p>
                </div>
            </div>
        </section>
    );
}

export default SulfurUrea