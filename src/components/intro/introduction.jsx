import Intro from "../../assets/the big idea 1.png";

export default function Introduction() {
  return (
    <div className="flex flex-col items-center gap-6 lg:flex-row justify-between items-center py-8">
      <img src={Intro} className="w-[400px] lg:w-[500px] aspect-[1/1]"/>
      <div className="flex flex-col gap-2">
        <p className="clash leading-[32px]">
          <span className="text-white text-[32px] font-bold font-['Clash Display']">
            Introduction to getlinked
            <br />
          </span>
          <span className="text-fuchsia-500 text-[32px] font-bold font-['Clash Display']">
            tech Hackathon 1.0
          </span>
        </p>
        <div className="text-white text-sm font-normal font-['Montserrat'] leading-7 max-w-[600px]">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius, a{" "}
          design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems, pushing the boundaries
          of technology, and creating solutions that can change the world, that's what we're all about!
        </div>
      </div>
    </div>
  );
}
