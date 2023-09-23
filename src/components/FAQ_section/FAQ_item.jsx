import React from "react";

export default function FAQItem(props) {
  return (
    <div
      className={`flex justify-between w-full items-center gap-6 py-1 sm:py-2 lg:py-3 border-b border-fuchsia-500 ${props.className} flex`}
    >
      <div className="self-stretch justify-start items-start gap-2 flex">
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 flex">
          <div className="self-stretch text-white text-[14px] sm:text-base lg:text-[18px] font-medium leading-7">
            {props.question}
          </div>
          <div className="self-stretch text-white text-[16px] font-normal leading-normal">
            {props.answer}
          </div>
        </div>
      </div>
      <div
        className="pt-0.5 flex-col justify-start items-start cursor-pointer inline-flex"
        open={false}
      >
        <svg
          width="11"
          height="10"
          viewBox="0 0 11 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.78 10V6.2H0.96V4.32H4.78V0.559999H6.58V4.32H10.4V6.2H6.58V10H4.78Z"
            fill="#D434FE"
          />
        </svg>
      </div>
    </div>
  );
}
