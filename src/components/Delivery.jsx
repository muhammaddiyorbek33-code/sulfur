const Delivery = () => {
  return (
    <section id="delivery-section"  className="py-16">
      <h2 className="text-[50px] text-[#404040] text-center text-3xl font-bold mb-14 tracking-wide">
        Delivery
      </h2>

      <div className="
        max-w-[1200px] 
        mx-auto 
        px-4 
        grid 
        grid-cols-1 
        lg:grid-cols-2 
        gap-14
        text-[20px]
      ">

        <div className="flex flex-col justify-start">
          
        

          <h2 className="text-[50px] text-2xl font-semibold mb-4">
            Shipping terms
          </h2>

          <p className="text-gray-700 leading-relaxed">
            <b>Delivery of urea</b> is carried out through the transit ports of Persian Gulf.
          </p>

          <p className="text-gray-700 leading-relaxed mt-4">
            <b>Delivery of sulfur</b> is carried out through the transit ports of Persian Gulf.
          </p>

          <p className="text-gray-700 leading-relaxed mt-4">
            <b>Logistic costs</b>: 100% AP
          </p>

          <a
            href="#order-section"
            className="inline-block bg-[#f09b00] text-white font-semibold tracking-wide py-3 px-10 rounded-full mt-6 hover:bg-[#d68900] transition w-fit m-auto">
            CONTACT US
          </a>

        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h4 className="text-[#e39200] font-semibold mb-3">
            Shipment of sulfur to railway wagons
          </h4>

          <img
            src="https://sulfur-man.com/wp-content/uploads/2023/08/shipment-sulfur-granules.jpg"
            alt=""
            className="rounded-lg w-full object-cover"
          />
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 mt-14 grid grid-cols-1 md:grid-cols-2 gap-10">

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h4 className="text-[#e39200] font-semibold mb-3">
            Ports of Persian Gulf
          </h4>
          <img
            src="https://sulfur-man.com/wp-content/uploads/2023/08/2023-08-09_15-22-53.png"
            alt=""
            className="rounded-lg w-full object-cover"
          />
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h4 className="text-[#e39200] font-semibold mb-3">
            Port Zhenjiang (China)
          </h4>
          <img
            src="https://sulfur-man.com/wp-content/uploads/2023/08/2023-08-09_15-07-56-3.png"
            alt=""
            className="rounded-lg w-full object-cover"
          />
        </div>

      </div>

    </section>
  );
};

export default Delivery;
