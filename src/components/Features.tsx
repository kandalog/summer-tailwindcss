import Image from "next/image";
import React from "react";

const featuresContents = [
  {
    img: "/assets/feature1.png",
    title: "あなただけの特別ツアーをご用意",
    description:
      "ご家族、カップル、お友達と最高に夏を楽しめるツアーをオーダーメイドでご用意します。あの人気の観光スポットを独り占めしたい！あの人気店でディナーがしたい！そんなご希望をどんどん教えてください。",
  },
  {
    img: "/assets/feature2.png",
    title: "初めての海外旅行でも安心・快適",
    description:
      "初めての海外旅行は楽しみだけど、不安もたくさんありますよね。パスポートをなくしたらどうしよう、トラブルに巻き込まれたらどうしよう。大丈夫です！TRAVELでは日本語を話せる現地スタッフが24時間365日スタンバイしていたいます。空港までお迎えにあがりますので、ご安心ください。",
  },
  {
    img: "/assets/feature3.png",
    title: "素敵な思い出をあなただけの特別な映像に",
    description:
      "写真やビデオに撮るのに気を取られて、思いのほか景色や現地の雰囲気を楽しめなかったと後で気づくことってありますよね。TRAVELでは旅行中の写真、ビデオはお任せください。自然な雰囲気を記録に残します。旅行中はカメラを持たなくてOKです！",
  },
];

function Features() {
  return (
    <section id="features" className="py-7">
      <div className="container px-4 mx-auto">
        <div className="max-w-[1000px] py-20 mx-auto">
          <h2 className="font-medium text-4xl text-center relative before:content-[' '] before:w-1 before:h-10 before:bg-[#6F91B1] before:absolute before:left-6/12 before:-top-12 ">
            FEATURES
          </h2>
          {/* FEATURESコンテンツ */}
          <div>
            <ul>
              {featuresContents.map((item, index) => {
                return (
                  <div key={index} className="mt-[80px] lg:flex space-x-10">
                    <li className="w-[400px] h-[400px] shrink-0 max-lg:mx-auto">
                      <Image
                        src={item.img}
                        width={375}
                        height={375}
                        className="object-fit"
                        alt="img"
                      />
                    </li>
                    <li
                      className={`${
                        index === 1 ? "order-first mr-10" : ""
                      } flex-grow`}
                    >
                      <p className="font-bold text-3xl mt-10">{item.title}</p>
                      <p className="mt-3 leading-relaxed">{item.description}</p>
                      <button className="cursor-pointer btnPink ml-auto block !py-3 !px-8 mt-10">
                        詳しくみる
                      </button>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
