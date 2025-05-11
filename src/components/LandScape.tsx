import Image from "next/image";
import React from "react";

function LandScape() {
  return (
    <div className="md:flex">
      <div>
        <Image
          src="/assets/landscape1.png"
          width={3000}
          height={3000}
          alt="img1"
        />
      </div>
      <div className="hidden md:block">
        <Image
          src="/assets/landscape2.png"
          width={3000}
          height={3000}
          alt="img2"
        />
      </div>
    </div>
  );
}

export default LandScape;
