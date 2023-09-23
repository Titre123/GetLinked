import Rules from "../../assets/girl_sitting.png";

export default function RulesAndRegulation() {
  return (
    <div className="flex flex-col items-center lg:flex-row justify-between items-center">
      <img src={Rules}  className="w-[430px] order-2 lg:w-[500px] aspect-[1/1]" />
      <div className="flex order-1 flex-col gap-2">
        <div className="pt-8 lg:pt-0 ">
          <p className="clash leading-[32px]">
            <span className="text-white text-[32px] font-bold font-['Clash Display']">
              Rules and
              <br />
            </span>
            <span className="text-fuchsia-500 text-[32px] font-bold font-['Clash Display']">
              Guidelines
            </span>
          </p>
        </div>
        <div className="text-white text-sm font-normal font-['Montserrat'] leading-7 max-w-[600px]">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius, a{" "}
          design maverick, or a concept wizard, you'll have the chance to transform 
          your ideas into reality. Solving real-world problems, pushing the boundaries
          of technology, and creating solutions that can change the world, that's what we're all about!
        </div>
      </div>
    </div>
  );
}
