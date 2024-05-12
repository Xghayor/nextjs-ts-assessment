'use client'


import { useState } from "react";
import Image from "next/image";
import { satoshiBold, satoshiRegular } from "../ui/fonts";
import proon from "../../public/images/profiton.png";
import prooff from "../../public/images/profitoff.png";

const Accordion = () => {
  const [selected, setSelected] = useState(1);

  const items = [
    {
      id: 1,
      title: "Profitability and ",
      content: "At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success."
    },
    {
      id: 2,
      title: "Profitability and ",
      content: "At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success."
    },
    {
      id: 3,
      title: "Profitability and ",
      content: "At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success."
    },
    {
      id: 4,
      title: "Profitability and ",
      content: "At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success."
    }
  ];

  const handleClick = (id: number) => {
	setSelected(selected !== id ? id : Number);
  };
  

  return (
    <div className={`grid gap-8`}>
      <div className={`max-w-full mx-auto `}>
        <ul className={`shadow-box flex flex-col gap-10`}>
          {items.map((item) => (
            <li className={`relative`} key={item.id}>
              <div className={`image-container`}>
                <Image
                  src={selected === item.id ? proon : prooff}
                  alt="Image"
                  className={`w-50 h-50`}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: -120,
                  }}
                />
              </div>
              <button
                type="button"
                className={`w-full px-6 py-6 text-left`}
                onClick={() => handleClick(item.id)}
              >
                <div
                  className={`${satoshiBold.className} flex items-center justify-between text-[22px]`}
                >
                 <span>
  {item.title}
  <br />
  Growth
</span>

                  <svg
                    style={{
                      transform: selected === item.id ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease-in-out",
                    }}
                    className={`w-5 h-5 text-gray-500`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </button>
              <div
                className={`relative overflow-hidden transition-all max-h-0 duration-700`}
                style={{
                  maxHeight: selected === item.id ? "200px" : "0px",
                }}
              >
                <div className={`px-6 pb-6`}>
                  <p className={`${satoshiRegular.className} text-lg`}>
                    {item.content}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Accordion;
