export default function TimelineItem(props) {
  return (
    <>
      <div className={`hidden lg:flex ${props.className} gap-6 justify-center items-center`}>
        <div
          className={`self-end ${
            props.order === "right" ? "order-3 " : ""
          } basis-[50%]`}
        >
          <p
            className={`text-fuchsia-500 text-[20px] text-right font-bold ${
              props.order === "right" ? "text-start" : ""
            } font-['Montserrat']`}
          >
            {props.header}
          </p>
          <p
            className={`text-right ${
              props.order === "right" ? "text-start " : ""
            } text-white text-sm font-normal font-['Montserrat'] leading-normal`}
          >
            {props.text}
          </p>
        </div>

        <div
          className={`flex flex-col ${
            props.order === "right" ? "order-2" : ""
          } gap-2 items-center`}
        >
          <div className="w-[3px] h-[90px] bg-fuchsia-500"></div>
          <div className="lg:w-[45px] aspect-[1/1] gradient-bg rounded-[26.50px] flex justify-center items-center">
            <span className="text-white text-lg font-bold font-['Montserrat']">
              {props.number}
            </span>
          </div>
        </div>
        <p
          className={`self-end text-fuchsia-500 text-[20px] ${
            props.order === "right" ? "order-1 text-end" : ""
          } font-bold font-['Montserrat'] basis-[50%]`}
        >
          {props.date}
        </p>
      </div>
      <div className="flex gap-4 items-center lg:hidden">
        <div
          className={`flex flex-col gap-1 items-center`}
        >
          <div className="w-[3px] order-1 h-[100px] bg-fuchsia-500"></div>
          <div className="w-[32px] sm:w-[40px] w-[45px] order-2 aspect-[1/1] gradient-bg rounded-[26.50px] flex justify-center items-center">
            <span className="text-white text-lg font-bold font-['Montserrat']">
              {props.number}
            </span>
          </div>
        </div>
        <div className="flex flex-col h-full min-h-[135px] justify-between">
          <div className="">
            <p
              className={`text-fuchsia-500 mb-1 text-[14px] font-bold font-['Montserrat']`}
            >
              {props.header}
            </p>
            <p
              className={`text-white text-[12px] font-normal font-['Montserrat'] leading-normal`}
            >
              {props.text}
            </p>
          </div>
          <p
            className={`self-start text-fuchsia-500 text-[14px] font-bold font-['Montserrat']`}
          >
            {props.date}
          </p>
        </div>
      </div>
    </>
  );
}
