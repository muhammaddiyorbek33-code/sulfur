import React from "react";

const Header = () => {
  return (
    <header className="w-full flex flex-col items-center bg-white">
      <h1 className="text-center text-red-500 py-[60px] max-w-[900px] px-4 text-[20px] font-medium">
        Dear Customers, At the moment, we are not accepting any orders for sulfur and urea.
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-center max-w-[1120px] w-full gap-[40px] px-4">
        <div className="max-w-[540px]">
          <h1 className="font-semibold text-[26px] md:text-[28px] leading-[38px] tracking-[0.5px] mb-[20px] text-[#1a1a1a]">
            <span className="text-[#f09b00ww]">Technical alumini</span>, urea and other high-quality raw materials
            and chemicals from Middle and Central Asia
          </h1>

          <div className="text-[#333] text-[16px] leading-[26px] space-y-[16px]">
            <p>
              We distribute high-quality raw materials and chemicals from Middle (CIS states) and Central Asia.
            </p>
            <p>
              Right now, we offer high-quality <strong>technical granular sulfur</strong> (up to 2 million tons),
              lump sulfur, urea 46 (granular), and styrene.
            </p>
            <p>
              Due to close connections to several manufacturers (see the company's history), we can provide
              not only competitive pricing and high volumes, but more importantly, long-term cooperation
              between buyer and supplier.
            </p>
          </div>
        </div>

        <img
          src="https://sulfur-man.com/wp-content/uploads/2023/09/granular-sulphur-man-e1695209619612.jpg"
          alt="Sulfur granules"
          className="w-full md:w-[526px] h-[300px] md:h-[400px] object-cover rounded-md"
        />
      </div>

      <div className="py-[80px] w-full flex flex-col items-center">
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 justify-center items-center flex-wrap pb-[50px] px-4">
          <iframe
            width="300"
            height="500"
            src="https://www.youtube.com/embed/H7GMN4Atx0s"
            title="SULFUR PRODUCTION PLANT"
            className="rounded-md"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          <iframe
            width="300"
            height="500"
            src="https://www.youtube.com/embed/ntdygijHa48"
            title="Sulfur in Big Bags"
            className="rounded-md"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          <img
            alt="The ruler and sulfur granules"
            src="https://sulfur-man.com/wp-content/uploads/2023/09/granular-sulphur-line-e1693631589429.jpg"
            className="w-[300px] h-[500px] object-cover rounded-md"
          />
        </div>

        <button
          className="bg-[#f09b00] py-[10px] px-10 rounded-[80px] text-white font-semibold tracking-[0.5px] hover:bg-yellow-700 transition"
        >
          <a href="#order-section">ORDER NOW!</a>
        </button>
      </div>
    </header>
  );
};

export default Header;
