import Image from "next/image";
import React from "react";

const tourContents = {
  title: "TOUR",
  img: [
    {
      img: "/assets/tour1.png",
      label: "HAWAI",
    },
    {
      img: "/assets/tour2.png",
      label: "SAN FRANCISCO",
    },
    {
      img: "/assets/tour3.png",
      label: "VIETNAM",
    },
    {
      img: "/assets/tour4.png",
      label: "EGYPT",
    },
  ],
};

function Tour() {
  return (
    <section id="tour">
      <div className="container px-4 mx-auto">
        <div className="max-w-[960px] py-20 mx-auto">
          <h2 className="font-medium text-4xl text-center relative before:content-[' '] before:w-1 before:h-10 before:bg-[#6F91B1] before:absolute before:left-6/12 before:-top-12 ">
            {tourContents.title}
          </h2>
          {/* CONTENTS */}
          <div className="grid grid-cols-2 mt-10 gap-10">
            {tourContents.img.map((item, index) => (
              <div key={index} className="relative">
                <Image src={item.img} width={460} height={360} alt="img" />
                <div className="w-[80%] text-center py-3 bg-white/60 absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
                  <p className="font-bold text-2xl">{item.label}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="cursor-pointer btnPink ml-auto block !py-3 !px-8 mt-10 mx-auto">
            他のツアーを見る
          </button>
        </div>
      </div>
    </section>
  );
}

export default Tour;
