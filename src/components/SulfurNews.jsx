import { FaWhatsapp } from "react-icons/fa";

const SulfurNews = () => {
  return (
    <section id="news-section" className="px-4 md:px-20 lg:px-32 py-16">
      <div>
        <h2 className="text-[22px] text-[#f09b00] font-black uppercase mb-2 text-center">
          Company news
        </h2>
        <h2 className="text-[50px] md:text-[40px] text-[#404040] font-semibold mb-6 text-center">
          Gallery meetings and conferences
        </h2>
        <p className="text-[#404040] text-[20px] mb-12">
          Our company - TulparStroyTech LLP specialises in distribution of raw materials and chemicals and has connections to raw material/chemical suppliers/manufacturers from Central/Middle Asia.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="flex flex-col ">
            <img 
              src="https://sulfur-man.com/wp-content/uploads/2023/07/msg472312703-24454.jpg" 
              alt="Entrepreneurs Conference" 
              className="w-full h-[300px] object-cover mb-4 rounded"
            />
            <h4 className="text-[#f09b00] font-semibold mb-2 uppercase">
              Entrepreneurs Conference
            </h4>
            <p className="text-[#404040] text-center md:text-left">
              Meeting with entrepreneurs of <br /> KazakhExport
            </p>
          </div>

          <div className="flex flex-col ">
            <img 
              src="https://sulfur-man.com/wp-content/uploads/2023/07/msg5584839594-30384.jpg" 
              alt="Ministerial Meeting" 
              className="w-full h-[221px] object-cover mb-4 rounded"
            />
            <h4 className="text-[#f09b00] font-semibold mb-2 uppercase">
              Ministerial Meeting
            </h4>
            <a 
              href="https://eco.int/the-3rd-eco-ministerial-meeting-of-information-and-communication-technologies/" 
              className=" text-center md:text-left"
            >
              The Senior Officials Meeting (SOM) of the <br />
              <span className="font-semibold text-[#f09b00] ">
                Third ECO Ministerial Meeting Information and Communication Technology
              </span>
              <br />
              12 July 2023 Tehran
            </a>
          </div>

          <div className="flex flex-col items-center">
            <img 
              src="https://sulfur-man.com/wp-content/uploads/2023/07/msg472312703-24453.jpg" 
              alt="Ethiopia Companies" 
              className="w-full h-[300px] object-cover mb-4 rounded"
            />
            <h4 className="text-[#f09b00] font-semibold mb-2 uppercase">
              With Directors and Owners of Companies from Ethiopia
            </h4>
            <p className="text-[#404040] text-center md:text-left">
              Companies: Belayab groups, A.K.G. cons, A.T.G. cons, Gift Business group, Wudassie grup, Harambe University
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-12">
          <a 
            href="#order-section" 
            className="bg-[#f09b00] py-3 px-10 rounded-full text-white font-semibold tracking-wide hover:bg-[#d68900] transition"
          >
            CONTACT US
          </a>

          <a 
            href="https://wa.me/77017511487"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={40} color="#25D366" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SulfurNews;
