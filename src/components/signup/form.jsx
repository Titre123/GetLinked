import movement from "../../assets/1f6b6-2640.png";
import ConfirmationModal from "../../pages/confirmation";

export default function SignupForm(props) {
  return (
    <form
      onSubmit={props.handleSubmit}
      className={`w-full flex flex-col justify-between h-full lg:bg-white lg:bg-opacity-5 lg:rounded-xl lg:shadow 
      lg:px-8 lg:w-[55%] lg:max-h-[700px] lg:self-center ${window.innerHeight < 700 && window.innerWidth >= 1024 ? 'lg:py-5 gap-y-0' : 'lg:py-8 gap-y-4'}`}
    >
      <p className={`text-fuchsia-500 text-[32px] font-semibold clash hidden lg:block ${window.innerHeight < 700 ? 'leading-[12px]' : 'leading-normal' }`}>
        Register
      </p>
      <div className="hidden lg:block">
        <div className="flex items-end gap-2">
          <p className="text-white text-xs font-normal font-['Montserrat']">
            Be part of this movement!
          </p>
          <div className="pt-[2px] flex border-b dashed border-fuchsia-500">
            <img src={movement} />
            <img src={movement} />
          </div>
        </div>
        <p className="text-white text-[18px] font-normal font-['Montserrat']">
          CREATE YOUR ACCOUNT
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-x-6 gap-y-[18px]">
        <label className="flex flex-col w-full gap-2" for="">
          <span className="text-white text-sm font-normal font-['Montserrat']">
            Team’s Name
          </span>
          <input
            type="email"
            className="font-['Montserrat'] h-full text-white py-[14px] px-[14px] w-full border rounded-[4px] border-white bg-transparent"
            placeholder="Enter the name of your group"
          />
        </label>
        <label className="flex w-full flex-col gap-2" for="">
          {" "}
          <span className="text-white text-sm font-normal font-['Montserrat']">
            Phone
          </span>
          <input
            type="email"
            className="font-['Montserrat'] h-full text-white py-[14px] px-[14px] w-full border rounded-[4px] border-white bg-transparent"
            placeholder="Enter your phone number"
          />
        </label>
      </div>
      <div className="flex flex-col lg:flex-row gap-x-6 gap-y-[18px]">
        <label className="flex w-full flex-col gap-2" for="">
          {" "}
          <span className="text-white text-sm font-normal font-['Montserrat']">
            Email
          </span>
          <input
            type="email"
            className="font-['Montserrat'] h-full text-white py-[14px] px-[14px] w-full border rounded-[4px] border-white bg-transparent"
            placeholder="Enter your email address"
          />
        </label>
        <label className="flex flex-col w-full gap-2" for="">
          {" "}
          <span className="text-white text-sm font-normal font-['Montserrat']">
            Project Topic
          </span>
          <input
            type="email"
            className="font-['Montserrat'] h-full text-white py-[14px] px-[14px] w-full border rounded-[4px] border-white bg-transparent"
            placeholder="What is your group project topic"
          />
        </label>
      </div>
      <div className="flex flex-col lg:flex-row gap-x-6 gap-y-[18px]">
        <div className="flex flex-col w-full gap-1">
          <label className="text-white text-sm font-normal font-['Montserrat']">
            Category
          </label>
          <select className="py-[14px] px-[14px] bg-transparent border text-white rounded-[4px] border-white ">
            <option value="" selected className="text-white">
              Select your category
            </option>
          </select>
        </div>
        <div className="flex flex-col w-full gap-1">
          <label className="text-white text-sm font-normal font-['Montserrat']">
            Group Size
          </label>
          <select className="py-[14px] px-[14px] bg-transparent border text-white rounded-[4px] border-white">
            <option value="" selected className="text-white">
              Select
            </option>
          </select>
        </div>
      </div>
      <div className="text-pink-500 text-[9px] font-normal font-['Montserrat']">
        Please review your registration details before submitting
      </div>
      <div className="flex gap-2">
        <input type="checkbox" />
        <div className="text-white text-xs font-normal font-['Montserrat']">
          I agreed with the event terms and conditions and privacy policy
        </div>
      </div>
      <button className="w-full self-center gradient-bg py-3 rounded-[4px]">
        <span className="text-white text-base font-normal font-['Montserrat']">
          Register Now
        </span>
        {props.submitted && <ConfirmationModal />}
      </button>
    </form>
  );
}
