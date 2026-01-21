import svgPaths from "./svg-xedy928wx8";
import imgLogo from "figma:asset/9ab59f47957b436f3532fe8fda05e18d75720f61.png";

function Frame() {
  return (
    <div className="absolute bg-[#343a6f] content-stretch flex items-center justify-between left-1/2 px-[64px] py-[16px] top-0 translate-x-[-50%] w-[1440px]">
      <div className="h-[60px] relative shrink-0 w-[151px]" data-name="Logo">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[106.67%] left-[-4.64%] max-w-none top-[-4.32%] w-[200.74%]" src={imgLogo} />
        </div>
      </div>
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-nowrap text-white">03 | Iconography</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute h-[44px] left-[10px] top-[3px] w-[36px]">
      <div className="absolute inset-[0_-5.56%_-4.55%_-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 46">
          <g id="Group 29">
            <rect height="4" id="Rectangle 20" stroke="var(--stroke-0, #EC5E74)" strokeLinejoin="round" strokeWidth="2" width="38" x="1" y="41" />
            <rect height="4" id="Rectangle 12" stroke="var(--stroke-0, #EC5E74)" strokeLinejoin="round" strokeWidth="2" width="38" x="1" y="13" />
            <rect fill="var(--fill-0, #EC5E74)" height="22" id="Rectangle 21" width="6" x="5" y="18" />
            <rect fill="var(--fill-0, #EC5E74)" height="22" id="Rectangle 18" width="6" x="17" y="18" />
            <rect fill="var(--fill-0, #EC5E74)" height="22" id="Rectangle 19" width="6" x="29" y="18" />
            <path d={svgPaths.p14ced400} id="Polygon 2" stroke="var(--stroke-0, #EC5E74)" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconSubject() {
  return (
    <div className="overflow-clip relative rounded-[8px] shrink-0 size-[56px]" data-name="Icon / Subject">
      <Group5 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute left-[5px] size-[8px] top-[5px]">
      <div className="absolute inset-[-12.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <g id="Group 2">
            <path d="M5 9V1" id="Vector 1" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
            <path d="M9 5L1 5" id="Vector 2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute left-[6.17px] size-[5.657px] top-[24.17px]">
      <div className="absolute inset-[-17.68%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.65691 7.65686">
          <g id="Group 4">
            <path d="M6.65685 6.65686L1 1" id="Vector 1" stroke="var(--stroke-0, #03B0E8)" strokeLinecap="round" strokeWidth="2" />
            <path d="M6.65691 6.65685L1.00006 1" id="Vector 2" stroke="var(--stroke-0, #03B0E8)" strokeLinecap="round" strokeWidth="2" />
            <path d="M1.00006 6.65685L6.65691 1" id="Vector 3" stroke="var(--stroke-0, #03B0E8)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute h-0 left-[23px] top-[9px] w-[8px]">
      <div className="absolute inset-[-1px_-12.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 2">
          <g id="Group 3">
            <path d="M9 1L1 1" id="Vector 2" stroke="var(--stroke-0, #03B0E8)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute h-[10px] left-[23px] top-[22px] w-[8px]">
      <div className="absolute inset-[0_-12.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <g id="Group 28">
            <path d="M9 5L1 5" id="Vector 2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
            <circle cx="5" cy="1.5" fill="var(--fill-0, white)" id="Ellipse 286" r="1.5" />
            <circle cx="5" cy="8.5" fill="var(--fill-0, white)" id="Ellipse 287" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-[#03b0e8] bottom-0 right-0 size-[18px]" />
      <div className="absolute bg-[#03b0e8] left-0 size-[18px] top-0" />
      <Group />
      <Group2 />
      <Group1 />
      <Group4 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute left-1/2 rounded-[2px] size-[36px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <div aria-hidden="true" className="absolute border-2 border-[#03b0e8] border-solid inset-[-2px] pointer-events-none rounded-[4px]" />
      <Group6 />
    </div>
  );
}

function IconContainer() {
  return (
    <div className="absolute left-1/2 overflow-clip rounded-[2.5px] size-[50px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="icon container">
      <Frame2 />
    </div>
  );
}

function IconSubject1() {
  return (
    <div className="overflow-clip relative rounded-[8px] shrink-0 size-[56px]" data-name="Icon / Subject">
      <IconContainer />
    </div>
  );
}

function IconSubject2() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="Icon / Subject">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <g id="Icon / Subject">
          <path clipRule="evenodd" d={svgPaths.p3bf6cd00} fill="var(--fill-0, #EB8900)" fillRule="evenodd" id="Union" />
          <path d={svgPaths.p2534e00} fill="var(--fill-0, #EB8900)" id="Vector 3 (Stroke)" />
          <path d={svgPaths.p4d80800} fill="var(--fill-0, #EB8900)" id="Vector 4 (Stroke)" />
          <path d={svgPaths.p13c2af00} fill="var(--fill-0, #EB8900)" id="Vector 5 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer1() {
  return (
    <div className="absolute left-1/2 size-[50px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="icon container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="icon container">
          <path d={svgPaths.p34676100} fill="var(--fill-0, #9266E5)" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function IconSubject3() {
  return (
    <div className="overflow-clip relative rounded-[8px] shrink-0 size-[56px]" data-name="Icon / Subject">
      <IconContainer1 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <div className="absolute h-[26px] left-1/2 rounded-[2px] top-[calc(50%-5px)] translate-x-[-50%] translate-y-[-50%] w-[38px]">
        <div aria-hidden="true" className="absolute border-2 border-[#6970b2] border-solid inset-[-2px] pointer-events-none rounded-[4px]" />
      </div>
      <div className="absolute h-[4px] left-1/2 top-[calc(50%+12px)] translate-x-[-50%] translate-y-[-50%] w-[14px]">
        <div aria-hidden="true" className="absolute border-2 border-[#6970b2] border-solid inset-[-2px] pointer-events-none" />
      </div>
      <div className="absolute h-[2px] left-1/2 top-[44px] translate-x-[-50%] w-[24px]">
        <div aria-hidden="true" className="absolute border-2 border-[#6970b2] border-solid inset-[-2px] pointer-events-none" />
      </div>
    </div>
  );
}

function IconSubject4() {
  return (
    <div className="overflow-clip relative rounded-[8px] shrink-0 size-[56px]" data-name="Icon / Subject">
      <Group7 />
      <div className="absolute h-[6px] left-[8px] top-[30px] w-[40px]" data-name="Subtract">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 6">
          <path d={svgPaths.p1a8673f0} fill="var(--fill-0, #6970B2)" id="Subtract" />
        </svg>
      </div>
    </div>
  );
}

function IconSubject5() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="Icon / Subject">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <g id="Icon / Subject">
          <path d={svgPaths.p32dc9180} id="Union" stroke="var(--stroke-0, #F2CC05)" strokeWidth="2" />
          <path d="M14 24H42" id="Vector 58" stroke="var(--stroke-0, #F2CC05)" strokeLinecap="round" strokeWidth="2" />
          <path d="M14 29H42" id="Vector 59" stroke="var(--stroke-0, #F2CC05)" strokeLinecap="round" strokeWidth="2" />
          <path d="M14 34H30" id="Vector 60" stroke="var(--stroke-0, #F2CC05)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Subjects() {
  return (
    <div className="absolute content-stretch flex gap-[40px] items-center left-[64px] px-[16px] py-0 top-[244px]" data-name="Subjects">
      <IconSubject />
      <IconSubject1 />
      <IconSubject2 />
      <IconSubject3 />
      <IconSubject4 />
      <IconSubject5 />
    </div>
  );
}

function AvatarRole() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="Avatar / Role">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <g id="Avatar / Role">
          <path d={svgPaths.p320a6380} fill="var(--fill-0, #343A6F)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute h-[43.75px] left-[calc(50%+0.44px)] top-[6px] translate-x-[-50%] w-[36.875px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.8749 43.7502">
        <g id="Group 67">
          <path d={svgPaths.p29e2c600} fill="var(--fill-0, #343A6F)" id="Rectangle 28" />
          <path d={svgPaths.p34c6f400} fill="var(--fill-0, #343A6F)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function AvatarRole1() {
  return (
    <div className="overflow-clip relative rounded-[8px] shrink-0 size-[56px]" data-name="Avatar / Role">
      <Group8 />
    </div>
  );
}

function AvatarRole2() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="Avatar / Role">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <g id="Avatar / Role">
          <path d={svgPaths.p18b44a00} fill="var(--fill-0, #343A6F)" id="Rectangle 31" />
          <path d={svgPaths.p35168f80} fill="var(--fill-0, #343A6F)" id="Rectangle 32" />
          <path d={svgPaths.p9755e00} fill="var(--fill-0, #343A6F)" id="Vector 45 (Stroke)" />
          <path d={svgPaths.p2cfc5400} fill="var(--fill-0, #343A6F)" id="Ellipse 293" />
          <g id="Group 66">
            <path d={svgPaths.p27815900} fill="var(--fill-0, #343A6F)" id="Union" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Role() {
  return (
    <div className="absolute content-stretch flex gap-[40px] items-center left-[736px] px-[16px] py-0 top-[244px]" data-name="Role">
      <AvatarRole />
      <AvatarRole1 />
      <AvatarRole2 />
    </div>
  );
}

function IconAlertOctagon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-alert-octagon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-alert-octagon">
          <g id="Shape">
            <path d={svgPaths.p2719c380} fill="#707070" />
            <path d={svgPaths.p30a2e970} fill="#707070" />
            <path clipRule="evenodd" d={svgPaths.pc6bd6b0} fill="#707070" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconArrowDown() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-arrow-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-arrow-down">
          <path d={svgPaths.p1134cc00} fill="var(--fill-0, #707070)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function IconArrowDownLeft() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-arrow-down-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-arrow-down-left">
          <path d={svgPaths.p343c9080} fill="var(--fill-0, #707070)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function IconArrowDownRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-arrow-down-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-arrow-down-right">
          <path d={svgPaths.p35745c00} fill="var(--fill-0, #707070)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function IconArrowLeft() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-arrow-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-arrow-left">
          <path d={svgPaths.p9078540} fill="var(--fill-0, #707070)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function IconArrowRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-arrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-arrow-right">
          <path d={svgPaths.p9206b00} fill="var(--fill-0, #707070)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function IconArrowUp() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-arrow-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-arrow-up">
          <path d={svgPaths.p3deec200} fill="var(--fill-0, #707070)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function IconArrowUpLeft() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-arrow-up-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-arrow-up-left">
          <path d={svgPaths.p2826cd80} fill="var(--fill-0, #707070)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function IconArrowUpRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-arrow-up-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-arrow-up-right">
          <path d={svgPaths.p2ca51900} fill="var(--fill-0, #707070)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function IconAssign() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-assign">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-assign">
          <g id="Shape">
            <path clipRule="evenodd" d={svgPaths.p29596280} fill="#707070" fillRule="evenodd" />
            <path d={svgPaths.p1b7b0000} fill="#707070" />
          </g>
          <path d={svgPaths.p25898730} fill="var(--fill-0, #707070)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function IconBell() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-bell">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-bell">
          <g id="Shape">
            <path clipRule="evenodd" d={svgPaths.p29458e00} fill="#707070" fillRule="evenodd" />
            <path d={svgPaths.p350ce580} fill="#707070" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconBookmark() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-bookmark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-bookmark">
          <path clipRule="evenodd" d={svgPaths.p1fddeb00} fill="var(--fill-0, #707070)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function IconCalendar() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-calendar">
          <path clipRule="evenodd" d={svgPaths.p3ee81400} fill="var(--fill-0, #707070)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function IconCheck() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-check">
          <path clipRule="evenodd" d={svgPaths.p9937370} fill="var(--fill-0, #707070)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function IconCheckCircle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-check-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-check-circle">
          <g id="Shape">
            <path d={svgPaths.p1c324700} fill="#707070" />
            <path d={svgPaths.p12b6ef80} fill="#707070" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconCheckSquare() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-check-square">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-check-square">
          <g id="Shape">
            <path d={svgPaths.p29a29700} fill="#707070" />
            <path d={svgPaths.p34eb0880} fill="#707070" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconChevronDown() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-chevron-down">
          <path d={svgPaths.p14d42000} fill="var(--fill-0, #707070)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function IconChevronLeft() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-chevron-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-chevron-left">
          <path d={svgPaths.p137e7140} fill="var(--fill-0, #707070)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function IconChevronRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-chevron-right">
          <path d={svgPaths.p2a4cfe00} fill="var(--fill-0, #707070)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function IconChevronUp() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-chevron-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-chevron-up">
          <path d={svgPaths.p3d3c8c00} fill="var(--fill-0, #707070)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function IconCircle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-circle">
          <path clipRule="evenodd" d={svgPaths.pd16fa00} fill="var(--fill-0, #707070)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function IconClock() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-clock">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-clock">
          <g id="Shape">
            <path d={svgPaths.p32a5b600} fill="#707070" />
            <path clipRule="evenodd" d={svgPaths.pc72a700} fill="#707070" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconDownload() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-download">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-download">
          <g id="Shape">
            <path d={svgPaths.p1f46e1a0} fill="#707070" />
            <path d={svgPaths.p15791b00} fill="#707070" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconEdit() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-edit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-edit">
          <g id="Shape">
            <path clipRule="evenodd" d={svgPaths.p299a9980} fill="#707070" fillRule="evenodd" />
            <path d={svgPaths.p1f22ed00} fill="#707070" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconEdit1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-edit-2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-edit-2">
          <path clipRule="evenodd" d={svgPaths.p27534d00} fill="var(--fill-0, #707070)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function IconEdit2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-edit-3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-edit-3">
          <g id="Shape">
            <path clipRule="evenodd" d={svgPaths.p24917400} fill="#707070" fillRule="evenodd" />
            <path d={svgPaths.p545a700} fill="#707070" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconExternalLink() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-external-link">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-external-link">
          <g id="Shape">
            <path d={svgPaths.p38913800} fill="#707070" />
            <path d={svgPaths.p1d8cb100} fill="#707070" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconEye() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-eye">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-eye">
          <g id="Shape">
            <path clipRule="evenodd" d={svgPaths.p279efa80} fill="#707070" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p9502780} fill="#707070" fillRule="evenodd" />
            <path d={svgPaths.p245f7900} fill="#707070" />
            <path d={svgPaths.p367a3980} fill="#707070" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconEyeOff() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-eye-off">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_2237_896)" id="icon-eye-off">
          <g id="Shape">
            <path clipRule="evenodd" d={svgPaths.p2e81de00} fill="#707070" fillRule="evenodd" />
            <path d={svgPaths.p2c1ce580} fill="#707070" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2237_896">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconFile() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-file">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-file">
          <path clipRule="evenodd" d={svgPaths.p144b4600} fill="var(--fill-0, #707070)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function IconFileMinus() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-file-minus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-file-minus">
          <path d={svgPaths.p917f5c0} fill="var(--fill-0, #707070)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function IconFilePlus() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-file-plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-file-plus">
          <g id="Shape">
            <path d={svgPaths.p232d300} fill="#707070" />
            <path clipRule="evenodd" d={svgPaths.p1e03d380} fill="#707070" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconFileText() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-file-text">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-file-text">
          <g id="Shape">
            <path d={svgPaths.p6e27940} fill="#707070" />
            <path d={svgPaths.p37353180} fill="#707070" />
            <path d={svgPaths.p16f07300} fill="#707070" />
            <path clipRule="evenodd" d={svgPaths.p2dacaf00} fill="#707070" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconFilm() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-film">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-film">
          <path clipRule="evenodd" d={svgPaths.p3de53180} fill="var(--fill-0, #707070)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[14px] left-[3px] top-[5px] w-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 14">
        <g id="Frame 1618867671">
          <path d={svgPaths.p390be900} fill="var(--fill-0, #707070)" id="Shape" />
          <path d={svgPaths.pdc5b000} fill="var(--fill-0, #707070)" id="Shape_2" />
          <path d={svgPaths.p2e10c800} fill="var(--fill-0, #707070)" id="Shape_3" />
        </g>
      </svg>
    </div>
  );
}

function IconFilter() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon-filter">
      <Frame1 />
    </div>
  );
}

function IconFolder() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-folder">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-folder">
          <path clipRule="evenodd" d={svgPaths.p180f6800} fill="var(--fill-0, #707070)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function IconFolderMinus() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-folder-minus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-folder-minus">
          <g id="Shape">
            <path d={svgPaths.p19814b00} fill="#707070" />
            <path clipRule="evenodd" d={svgPaths.p180f6800} fill="#707070" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconFolderPlus() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-folder-plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-folder-plus">
          <g id="Shape">
            <path d={svgPaths.p2a332520} fill="#707070" />
            <path clipRule="evenodd" d={svgPaths.p24737e00} fill="#707070" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconGrid() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-grid">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-grid">
          <g id="Shape">
            <path clipRule="evenodd" d={svgPaths.p37e1c00} fill="#707070" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3372d300} fill="#707070" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p1a8c5c80} fill="#707070" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p8ce6200} fill="#707070" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconHelpCircle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-help-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-help-circle">
          <g id="Shape">
            <path d={svgPaths.p11df1580} fill="#707070" />
            <path d={svgPaths.pab96900} fill="#707070" />
            <path clipRule="evenodd" d={svgPaths.p32386b80} fill="#707070" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconHome() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-home">
          <path clipRule="evenodd" d={svgPaths.p37185c00} fill="var(--fill-0, #707070)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function IconImage() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-image">
          <g id="Shape">
            <path clipRule="evenodd" d={svgPaths.pb366e00} fill="#707070" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p36caf300} fill="#707070" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconInfo() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-info">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-info">
          <g id="Shape">
            <path d={svgPaths.p2bfbab40} fill="#707070" />
            <path d={svgPaths.p20c8ee00} fill="#707070" />
            <path clipRule="evenodd" d={svgPaths.p32386b80} fill="#707070" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconInstagram() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-instagram">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-instagram">
          <g id="Shape">
            <path clipRule="evenodd" d={svgPaths.p1a65a200} fill="#707070" fillRule="evenodd" />
            <path d={svgPaths.pc9a5680} fill="#707070" />
            <path clipRule="evenodd" d={svgPaths.p23831d70} fill="#707070" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconLink() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-link-2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-link-2">
          <g id="Shape">
            <path d={svgPaths.pf8c1180} fill="#707070" />
            <path d={svgPaths.p3ac7b200} fill="#707070" />
            <path d={svgPaths.p32b4cf00} fill="#707070" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconLogout() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-logout">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-logout">
          <path d={svgPaths.p2f8ac300} fill="var(--fill-0, #707070)" id="Shape" />
          <path d={svgPaths.p1dd4be74} id="Vector 55" stroke="var(--stroke-0, #707070)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconMoreHorizontal() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-more-horizontal">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-more-horizontal">
          <g id="Shape">
            <path d={svgPaths.p1b970df0} fill="#707070" />
            <path d={svgPaths.pdb31b00} fill="#707070" />
            <path d={svgPaths.p1f0800} fill="#707070" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconPanelCollapse() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-panel-collapse">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-panel-collapse">
          <path d="M3 21V3" id="Vector 55" stroke="var(--stroke-0, #707070)" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p7d63700} fill="var(--fill-0, #707070)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function IconPanelExpand() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-panel-expand">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-panel-expand">
          <path d={svgPaths.p100ed880} fill="var(--fill-0, #707070)" id="Shape" />
          <path d="M21 21V3" id="Vector 55" stroke="var(--stroke-0, #707070)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconPaperclip() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-paperclip">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-paperclip">
          <path clipRule="evenodd" d={svgPaths.p32ca7300} fill="var(--fill-0, #707070)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function IconRefreshCcw() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-refresh-ccw">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-refresh-ccw">
          <g id="Shape">
            <path d={svgPaths.p218b0d00} fill="#707070" />
            <path d={svgPaths.p1b44e80} fill="#707070" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconRefreshCw() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-refresh-cw">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-refresh-cw">
          <g id="Shape">
            <path d={svgPaths.p15d927c0} fill="#707070" />
            <path d={svgPaths.p88e0680} fill="#707070" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconSettings() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-settings">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_2237_936)" id="icon-settings">
          <g id="Shape">
            <path clipRule="evenodd" d={svgPaths.p279efa80} fill="#707070" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3647fd00} fill="#707070" fillRule="evenodd" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2237_936">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconShare() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-share">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-share">
          <g id="Shape">
            <path d={svgPaths.p19dcc800} fill="#707070" />
            <path d={svgPaths.p17fff400} fill="#707070" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Down() {
  return (
    <div className="absolute bottom-[16.67%] left-[8.33%] right-1/2 top-[29.17%]" data-name="Down">
      <div className="absolute inset-[-7.69%_-10%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 15">
          <g id="Down">
            <path d="M1 9L6 14L11 9" id="Vector 1" stroke="var(--stroke-0, #707070)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M6 13.5V1" id="Vector 2" stroke="var(--stroke-0, #707070)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Up() {
  return (
    <div className="absolute bottom-[29.17%] left-1/2 right-[8.33%] top-[16.67%]" data-name="Up">
      <div className="absolute inset-[-7.69%_-10%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 15">
          <g id="Up">
            <path d="M11 6L6 1L1 6" id="Vector 1" stroke="var(--stroke-0, #707070)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M6 1.5L6 14" id="Vector 2" stroke="var(--stroke-0, #707070)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[16.67%_8.33%]">
      <Down />
      <Up />
    </div>
  );
}

function IconSortDefault() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon-sort/Default">
      <Group3 />
    </div>
  );
}

function IconTrash() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-trash">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-trash">
          <g id="Shape">
            <path d={svgPaths.p3fcc8c80} fill="#707070" />
            <path d={svgPaths.p3a822f00} fill="#707070" />
            <path clipRule="evenodd" d={svgPaths.p3a4ed00} fill="#707070" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconUpload() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-upload">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-upload">
          <g id="Shape">
            <path d={svgPaths.p13850f80} fill="#707070" />
            <path d={svgPaths.p2deb8100} fill="#707070" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconUser() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-user">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-user">
          <g id="Shape">
            <path clipRule="evenodd" d={svgPaths.p3bdc280} fill="#707070" fillRule="evenodd" />
            <path d={svgPaths.p22e8e400} fill="#707070" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconUserCheck() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-user-check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-user-check">
          <g id="Shape">
            <path clipRule="evenodd" d={svgPaths.p968d8c0} fill="#707070" fillRule="evenodd" />
            <path d={svgPaths.p347f1d80} fill="#707070" />
            <path d={svgPaths.p2226da00} fill="#707070" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconUserMinus() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-user-minus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-user-minus">
          <g id="Shape">
            <path clipRule="evenodd" d={svgPaths.p968d8c0} fill="#707070" fillRule="evenodd" />
            <path d={svgPaths.p347f1d80} fill="#707070" />
            <path d={svgPaths.p30b76a00} fill="#707070" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconUserPlus() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-user-plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-user-plus">
          <g id="Shape">
            <path clipRule="evenodd" d={svgPaths.p29596280} fill="#707070" fillRule="evenodd" />
            <path d={svgPaths.p1b7b0000} fill="#707070" />
            <path d={svgPaths.p376e1b00} fill="#707070" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconUserX() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-user-x">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-user-x">
          <g id="Shape">
            <path clipRule="evenodd" d={svgPaths.p29596280} fill="#707070" fillRule="evenodd" />
            <path d={svgPaths.p1b7b0000} fill="#707070" />
            <path d={svgPaths.p3a9d6e00} fill="#707070" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconUsers() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-users">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-users">
          <g id="Shape">
            <path clipRule="evenodd" d={svgPaths.p36c4df70} fill="#707070" fillRule="evenodd" />
            <path d={svgPaths.p1dd8e900} fill="#707070" />
            <path d={svgPaths.p32a5d900} fill="#707070" />
            <path d={svgPaths.p296f7520} fill="#707070" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconXSquare() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-x-square">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-x-square">
          <g id="Shape">
            <path d={svgPaths.p1d536380} fill="#707070" />
            <path clipRule="evenodd" d={svgPaths.p33954d70} fill="#707070" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconZoomIn() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-zoom-in">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-zoom-in">
          <g id="Shape">
            <path d={svgPaths.p25418000} fill="#707070" />
            <path clipRule="evenodd" d={svgPaths.p3272e580} fill="#707070" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconZoomOut() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-zoom-out">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-zoom-out">
          <g id="Shape">
            <path d={svgPaths.p14d89780} fill="#707070" />
            <path clipRule="evenodd" d={svgPaths.p7ba180} fill="#707070" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconGrid1() {
  return (
    <div className="absolute content-start flex flex-wrap gap-[24px] items-start left-[64px] top-[439px] w-[1311px]" data-name="Icon Grid">
      <IconAlertOctagon />
      <IconArrowDown />
      <IconArrowDownLeft />
      <IconArrowDownRight />
      <IconArrowLeft />
      <IconArrowRight />
      <IconArrowUp />
      <IconArrowUpLeft />
      <IconArrowUpRight />
      <IconAssign />
      <IconBell />
      <IconBookmark />
      <IconCalendar />
      <IconCheck />
      <IconCheckCircle />
      <IconCheckSquare />
      <IconChevronDown />
      <IconChevronLeft />
      <IconChevronRight />
      <IconChevronUp />
      <IconCircle />
      <IconClock />
      <IconDownload />
      <IconEdit />
      <IconEdit1 />
      <IconEdit2 />
      <IconExternalLink />
      <IconEye />
      <IconEyeOff />
      <IconFile />
      <IconFileMinus />
      <IconFilePlus />
      <IconFileText />
      <IconFilm />
      <IconFilter />
      <IconFolder />
      <IconFolderMinus />
      <IconFolderPlus />
      <IconGrid />
      <IconHelpCircle />
      <IconHome />
      <IconImage />
      <IconInfo />
      <IconInstagram />
      <IconLink />
      <IconLogout />
      <IconMoreHorizontal />
      <IconPanelCollapse />
      <IconPanelExpand />
      <IconPaperclip />
      <IconRefreshCcw />
      <IconRefreshCw />
      <IconSettings />
      <IconShare />
      <IconSortDefault />
      <IconTrash />
      <IconUpload />
      <IconUser />
      <IconUserCheck />
      <IconUserMinus />
      <IconUserPlus />
      <IconUserX />
      <IconUsers />
      <IconXSquare />
      <IconZoomIn />
      <IconZoomOut />
    </div>
  );
}

export default function Component03Iconography() {
  return (
    <div className="bg-white relative size-full" data-name="03 | Iconography">
      <Frame />
      <Subjects />
      <p className="absolute font-['Rubik:Medium',sans-serif] font-medium leading-[40px] left-[64px] text-[#707070] text-[32px] text-nowrap top-[180px]">Subject</p>
      <p className="absolute font-['Rubik:Medium',sans-serif] font-medium leading-[40px] left-[64px] text-[#707070] text-[32px] text-nowrap top-[375px]">Interface</p>
      <p className="absolute font-['Rubik:Medium',sans-serif] font-medium leading-[40px] left-[736px] text-[#707070] text-[32px] text-nowrap top-[180px]">Role</p>
      <p className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[24px] left-[107px] text-[#121212] text-[16px] text-center text-nowrap top-[308px] translate-x-[-50%]">History</p>
      <p className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[24px] left-[204px] text-[#121212] text-[16px] text-center text-nowrap top-[308px] translate-x-[-50%]">Math</p>
      <p className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[24px] left-[299.5px] text-[#121212] text-[16px] text-center text-nowrap top-[308px] translate-x-[-50%]">Reading</p>
      <p className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[24px] left-[396px] text-[#121212] text-[16px] text-center text-nowrap top-[308px] translate-x-[-50%]">Science</p>
      <p className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[24px] left-[492px] text-[#121212] text-[16px] text-center text-nowrap top-[308px] translate-x-[-50%]">Career/Tech</p>
      <p className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[24px] left-[588px] text-[#121212] text-[16px] text-center text-nowrap top-[308px] translate-x-[-50%]">Other</p>
      <p className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[24px] left-[780px] text-[#121212] text-[16px] text-center text-nowrap top-[308px] translate-x-[-50%]">Teacher</p>
      <p className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[24px] left-[876.5px] text-[#121212] text-[16px] text-center text-nowrap top-[308px] translate-x-[-50%]">Student</p>
      <p className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[24px] left-[971px] text-[#121212] text-[16px] text-center text-nowrap top-[308px] translate-x-[-50%]">Admin</p>
      <Role />
      <IconGrid1 />
    </div>
  );
}