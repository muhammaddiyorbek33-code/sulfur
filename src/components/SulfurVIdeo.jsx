const SulfurVideo = () => {
  return (
    <section id="video-section"  className="py-12 bg-[#f5f5f5]">
      <h2 className="text-[#404040] text-[50px] text-center text-3xl font-bold mb-10">
        Sulfur-Man Video
      </h2>

      <div className="grid gap-10 max-w-[1200px] mx-auto px-4 md:grid-cols-2 sm:grid-cols-1">
        <div>
          <div className="w-full aspect-video rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/wilutYNp1kw"
              className="w-full h-full border-0"
              allowFullScreen
            ></iframe>
          </div>
          <h4 className="mt-3 text-[#e39200] font-semibold">SULFUR IN BIG BAGS</h4>
        </div>

        <div>
          <div className="w-full aspect-video rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/w7v6c1C_DP0"
              className="w-full h-full border-0"
              allowFullScreen
            ></iframe>
          </div>
          <h4 className="mt-3 text-[#e39200] font-semibold">
            RAILWAY WAGONS FILLED WITH TECHNICAL SULFUR IN BIG BAGS
          </h4>
        </div>

        <div>
          <div className="w-full aspect-video rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/ntdygijHa48"
              className="w-full h-full border-0"
              allowFullScreen
            ></iframe>
          </div>
          <h4 className="mt-3 text-[#e39200] font-semibold">SULFUR IN BIG BAGS</h4>
        </div>

        <div>
          <div className="w-full aspect-video rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/tQTU_54yl6o"
              className="w-full h-full border-0"
              allowFullScreen
            ></iframe>
          </div>
          <h4 className="mt-3 text-[#e39200] font-semibold">DELIVERY OF SULFUR</h4>
        </div>
      </div>
    </section>
  );
};

export default SulfurVideo;
