import "./Page.css";

export default function Content() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <section>
        <img
          src="/assets/67061df890aa3a22852e80db_hero ribbon.png"
          className="-z-10 pointer-events-none w-full absolute inset-0"
        />
        <div className="flex flex-col justify-start items-center">
          <div className=" flex gap-10 justify-center">
            <div className="tracking-wide uppercase mb-5 font-mono font-bold leading-none dark:text-white text-black text-base">
              November 8-9
            </div>
            <div className="tracking-wide uppercase mb-5 font-mono font-bold leading-none dark:text-white text-black text-base">
              Live and Virtual
            </div>
          </div>
          <h1 className="text-black dark:text-white text-[8vw] font-normal">
            Digital Makers
          </h1>
        </div>
      </section>
      <section>
        <div className=" max-w-[1360] px-10">
          <div className="flex flex-col justify-start items-center text-center mt-5">
            <div className="max-w-[480]">
              <div className="tracking-wide uppercase mb-5 font-mono font-bold leading-none dark:text-white text-black text-base">
                Arts Center, San Francisco
              </div>
              <p className="text-center leading-[150%] text-black dark:text-[#ffffffb3] mb-6 text-lg">
                Join us at Digital Makers, where digital creators unite to
                innovate, collaborate, and inspire new possibilities.
              </p>
              <a
                href="#Sign-up"
                className="text-center dark:text-white text-black uppercase tracking-wide rounded-lg py-6 px-9 leading-none cursor-pointer dark:bg-[#3898ec] bg-cyan-200 border-0 mt-5 text-xl no-underline inline-block"
              >
                Book your spot now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
