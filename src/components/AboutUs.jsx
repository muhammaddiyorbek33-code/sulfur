const AboutUs = () => {
  return (
    <section id="aboutUs-section" className="bg-[#f5f5f5] py-20 px-5 md:px-20">
      <div className="text-center mb-10">
        <h2 className="text-[36px] md:text-[50px] text-[#404040] font-semibold">
          About Us
        </h2>
        <h2 className="text-[36px] md:text-[50px] text-[#f09b00] font-semibold">
          Our Company - TulparStroytech LLP.
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-start  gap-15">
        <img
          src="https://sulfur-man.com/wp-content/uploads/2023/08/sulfur-production-1.jpeg"
          alt="Sulfur Production"
          className="w-full h-[1079px] lg:w-[600px] rounded-lg shadow-md object-cover"
        />

        <div className="max-w-[550px] text-[#404040]  text-[20px]">
          <p>
            <a
              className="text-[#f09b00] font-semibold"
              href="https://www.go4worldbusiness.com/member/view/products/3844384/tulparstroytech-ltd-.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              TulparStroyTeh
            </a>{" "}
            offers high quality raw materials and chemicals from Middle (CIS
            states) and Central Asia.
          </p>

          <p className="mt-4">
            <b>Established:</b> 2012 <br />
            Supplier from Kazakhstan <br />
            <b>Supplier:</b> Sulphur
          </p>

          <h2 className="text-[35px] font-semibold mt-4">
            Brief history of the company
          </h2>
          <p className="text-[20px] mt-2">
            The company's history dates back to the early 90s. It specialized in
            engineering and integrations services for the construction and urban
            industries. Because of this background, we have lots of connections
            to the suppliers of raw materials, industry, business and
            governmental structures from Middle (CIS states) and Central Asia.
            This experience can be used for benefiting our customers not only by
            providing the best quality/price products, but also by creating
            long-term partnerships with the relevant business structures.
          </p>

          <p className="mt-4">
            <strong>Contact Details:</strong> Kazakhstan, Astana, street Alikhan
            Bokeykhan, 29B, apt 147 <br />
            Mobile (Germany):{" "}
            <a
              href="tel:+4915732015007"
              className="text-[#f09b00] font-semibold"
            >
              +49 157 320 150 07
            </a>
            <br />
            Email:{" "}
            <a
              href="mailto:info@sulfur-man.com"
              className="text-[#f09b00] font-semibold"
            >
              info@sulfur-man.com
            </a>
          </p>

          <button className="bg-[#f09b00] py-3 px-10 rounded-full text-white font-semibold tracking-wide mt-6 hover:bg-[#d68900] transition items-center">
            <a href="#order-section">CONTACT US</a>
          </button>
        </div>
      </div>

      <div className="flex flex-wrap  mt-16">

        <div className="text-center" style={{ width: "620px", margin: "0 20px 40px" }}>
          <img
            src="https://sulfur-man.com/wp-content/uploads/2023/08/shipment-sulfur-granules.jpg"
            alt="Shipment sulfur granules"
            className="w-full h-[465px] object-cover rounded-lg shadow-md"
          />
          <h4 className="text-[#f09b00] mt-3 uppercase font-medium text-sm">
            Shipment sulfur granules
          </h4>
        </div>

        <div className="text-center" style={{ width: "620px", margin: "0 20px 40px" }}>
          <img
            src="https://sulfur-man.com/wp-content/uploads/2023/08/sulfur-production.jpg"
            alt="Sulfur production"
            className="w-full h-[465px] object-cover rounded-lg shadow-md"
          />
          <h4 className="text-[#f09b00] mt-3 uppercase font-medium text-sm">
            Sulfur production
          </h4>
        </div>

        <div className="text-center " style={{ width: "620px", margin: "0 20px 40px" }}>
          <img
            src="https://sulfur-man.com/wp-content/uploads/2023/09/photo_2023-09-19_18-46-11.jpg"
            alt="Sulfur production plant"
            className="w-full h-[465px] object-cover rounded-lg shadow-md"
          />
          <h4 className="text-[#f09b00] mt-3 uppercase font-medium text-sm">
            Sulfur production plant
          </h4>
        </div>

        <div className="text-center" style={{ width: "443px", margin: "0 20px 40px" }}>
          <img
            src="https://sulfur-man.com/wp-content/uploads/2023/11/sulfur-man-1.jpg"
            alt="Granulated sulphur"
            className="w-full h-[412px] object-cover rounded-lg shadow-md"
          />
          <h4 className="text-[#f09b00] mt-3 uppercase font-medium text-sm">
            Granulated sulphur
          </h4>
        </div>

      </div>


    </section>
  );
};

export default AboutUs;
