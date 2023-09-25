import SuccesMan from "../assets/successful-man-3025713-2526911 1.png";
import SuccessDone from "../assets/successfully-done-5108472-4288033 1.png";

export default function ConfirmationModal(props) {
  return (
    <div className="h-screen px-4 lg:px-0 flex justify-center items-center">
      <div className="border border-fuchsia-500 flex flex-col px-6 py-8 gap-y-6 justify-center">
        <div className="relative self-center">
          <img src={SuccessDone} />
          <img src={SuccesMan} className="absolute top-0 right-[-25%]  lg:right-[-50%]" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-center text-white text-base sm:text-[24px] lg:text-[32px] font-semibold font-['Montserrat']">
            Congratulations
            <br />
            you have successfully Registered!
          </div>
          <div className="text-center text-white text-sm font-semibold font-['Montserrat']">
            Yes, it was easy and you did it!
            <br />
            check your mail box for next step
          </div>
        </div>
        <button className="w-full self-center gradient-bg py-3 rounded-[4px]" onClick={props.handleClose}>
          <span className="text-white text-base font-normal font-['Montserrat']">
            Back
          </span>
        </button>
      </div>
    </div>
  );
}
