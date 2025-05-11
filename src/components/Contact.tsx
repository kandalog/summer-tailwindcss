import React from "react";

const contactContents = {
  img: "/assets/contact.png",
  radio: [
    {
      label: "来店予約",
      value: "reserve",
    },
    {
      label: "ご相談",
      value: "consult",
    },
    {
      label: "その他",
      value: "other",
    },
  ],
  form: ["お名前", "メールアドレス", "お問い合わせ内容"],
};

function Contact() {
  return (
    <section id="contact" className="text-white">
      <div className="bg-[url('/assets/contact.png')] min-h-[600px] md:h-[1164px] bg-no-repeat bg-cover relative">
        <div className="bg-black/30 p-4 md:p-10 w-full md:max-w-[65%] absolute top-0 md:top-1/4 right-0 md:right-0">
          <form className="px-2 md:px-8">
            <h2 className="text-white font-bold text-2xl md:text-4xl mb-4 md:mb-8">CONTACT</h2>
            {/* ラジオボタングループ */}
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-3 md:space-y-0 mb-6 md:mb-8">
              {contactContents.radio.map((item, index) => (
                <label key={index} className="flex items-center space-x-3 cursor-pointer">
                  <input type="radio" name="contactType" value={item.value} className="accent-pink-500 w-4 h-4" />
                  <p className="text-base md:text-lg">{item.label}</p>
                </label>
              ))}
            </div>
            <div className="space-y-4 md:space-y-8 mb-6 md:mb-8">
              {contactContents.form.map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8">
                  <div className="flex items-center space-x-3 min-w-[180px]">
                    <p className="text-base md:text-lg">{item}</p>
                    <span className="bg-white text-text px-2 md:px-3 py-1 text-xs rounded">
                      必須
                    </span>
                  </div>
                  <div className="flex-1 w-full">
                    {index === 2 ? (
                      <textarea 
                        className="bg-white rounded p-3 w-full min-h-20 md:min-h-40" 
                        placeholder={`${item}を入力してください`}
                      />
                    ) : (
                      <input
                        type="text"
                        placeholder={`${item}を入力してください`}
                        className="bg-white rounded p-3 w-full h-10 md:h-12"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center space-x-3 mb-6 md:mb-10">
              <input type="checkbox" id="privacy" className="w-4 md:w-5 h-4 md:h-5 accent-pink-500" />
              <label htmlFor="privacy" className="cursor-pointer text-base md:text-lg">プライバシーポリシーに同意する</label>
            </div>
            <div className="mt-6 md:mt-10">
              <button type="submit" className="btnPink text-text mx-auto md:ml-auto block !px-10 md:!px-20 hover:opacity-90 transition-opacity text-base md:text-lg font-medium">
                送信
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
