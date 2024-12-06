import React from "react";

const Topbackground = () => {
  return (
    <>
      <div className="absolute w-full max-w-[360px] md:max-w-screen-lg h-[285px] md:h-[656px] top-[188px] md:top-11 left-1/2 -translate-x-1/2 md:overflow-x-hidden z-10">
        {/* ICON */}
        <div className="w-full h-full relative">
          <div className="circle-icon top-0 left-[171px] md:top-28 md:left-72">
            <img
              src="/rocket_icon.svg"
              alt="Rocket icon"
              width={23}
              height={23}
            />
          </div>
          <div className="circle-icon top-[162] -left-[171px] md:top-64 md:left-0">
            <img
              src="/bracket_icon.svg"
              alt="Bracket icon"
              width={23}
              height={23}
            />
          </div>
          <div className="circle-icon top-60 left-[149px] md:top-[470px] md:left-44">
            {" "}
            {/* md:lef-44 */}
            <img
              src="/github_icon.svg"
              alt="Github icon"
              width={23}
              height={23}
            />
          </div>
          <div className="hidden md:circle-icon md:top-[492px] md:left-[608px]">
            <img
              src="/electricity_icon.svg"
              alt="Electricity icon"
              width={23}
              height={23}
            />
          </div>
          <div className="hidden md:circle-icon md:top-[158px] md:left-[606px]">
            <img
              src="/merge_icon.svg"
              alt="Merge icon"
              width={23}
              height={23}
            />
          </div>
          <div className="hidden md:circle-icon md:top-[368px] md:left-[965px]">
            <img
              src="/stack_icon.svg"
              alt="Stack icon"
              width={23}
              height={23}
            />
          </div>
        </div>
      </div>
      <img
        src="/top_highlight.svg"
        alt="Top dark mode background highlight"
        width={809}
        height={877}
        className="absolute top-[-515px] hidden dark:md:block left-1/2 -translate-x-1/2"
      />
      <img
        src="/top_highlight_mobile.svg"
        alt="Top dark mode background highlight for mobile"
        width={429}
        height={465}
        className="absolute top-[-229px] hidden dark:block dark:md:hidden left-1/2 -translate-x-1/2"
      />
      {/* background for light mode */}
      <div className="absolute top-0 w-full h-[795px] bg-repeat-x bg-[url('/top_bg_light.svg')] bg[auto_auto] hidden dark:hidden md:block"></div>
      <div className="absolute top-0 w-full h-[600px] bg-repeat-x bg-[url('/top_bg_mobile_light.svg')] bg[auto_auto] dark:hidden md:hidden"></div>

      {/* background for dark mode */}
      <div className="absolute top-0 w-full h-[795px] bg-repeat-x bg-[url('/top_bg_dark.svg')] bg[auto_auto] hidden md:dark:block"></div>
      <div className="absolute top-0 w-full h-[600px] bg-repeat-x bg-[url('/top_bg_mobile_dark.svg')] bg[auto_auto] hidden dark:block md:dark:hidden "></div>
    </>
  );
};

export default Topbackground;
