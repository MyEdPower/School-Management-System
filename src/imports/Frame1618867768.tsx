import svgPaths from "./svg-yd2km7vtm5";
import imgImage30 from "figma:asset/1c762085a46f3b552e1614982d930587eb9639ed.png";

function Frame5() {
  return (
    <div className="absolute bg-[#343a6f] bottom-0 content-stretch flex font-['Rubik:Medium',sans-serif] font-medium items-center justify-between leading-[24px] left-1/2 pb-[48px] pt-0 px-[64px] text-[16px] text-nowrap text-white translate-x-[-50%] w-[1440px]">
      <p className="relative shrink-0">Schema Design</p>
      <p className="relative shrink-0">August 2024</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute bg-[#343a6f] content-stretch flex items-center justify-between left-1/2 pb-0 pt-[48px] px-[64px] top-0 translate-x-[-50%] w-[1440px]">
      <div className="h-[60px] shrink-0 w-[151px]" data-name="Logo" />
    </div>
  );
}

function Outro() {
  return (
    <div className="absolute bg-[#343a6f] h-[900px] left-[13464px] overflow-clip top-0 w-[1440px]" data-name="Outro">
      <p className="absolute font-['Rubik:Medium',sans-serif] font-medium leading-none left-[64px] text-[168px] text-nowrap text-white top-[220px] tracking-[-3.36px]">Thank you</p>
      <div className="absolute h-0 left-1/2 top-[796px] translate-x-[-50%] w-[1312px]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1312 1">
            <path d="M0 0.5H1312" id="Vector 1" stroke="var(--stroke-0, white)" />
          </svg>
        </div>
      </div>
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute bg-[#343a6f] content-stretch flex items-center justify-between left-1/2 px-[64px] py-[16px] top-0 translate-x-[-50%] w-[1440px]">
      <div className="h-[60px] shrink-0 w-[151px]" data-name="Logo" />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-nowrap text-white">06 | Selectors</p>
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

function TextField() {
  return (
    <div className="absolute content-stretch flex h-[40px] items-center justify-between left-[64px] px-[16px] py-[8px] rounded-[4px] top-[244px] w-[304px]" data-name="Text Field">
      <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-nowrap">Dropdown</p>
      <IconChevronDown />
    </div>
  );
}

function Rectangle() {
  return <div className="absolute bg-white border-2 border-[#707070] border-solid inset-[8.33%] rounded-[3px]" />;
}

function CheckboxBase() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="_Checkbox Base">
      <Rectangle />
    </div>
  );
}

function TextField1() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[401px] rounded-[4px] top-[244px] w-[191px]" data-name="Text Field">
      <CheckboxBase />
      <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-nowrap">Default</p>
    </div>
  );
}

function Frame() {
  return <div className="absolute border-2 border-[#707070] border-solid left-[2px] rounded-[9999px] size-[20px] top-[2px]" />;
}

function RadioButtonBase() {
  return (
    <div className="relative rounded-[3px] shrink-0 size-[24px]" data-name="_Radio button Base">
      <Frame />
    </div>
  );
}

function TextField2() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[624px] rounded-[4px] top-[244px] w-[192px]" data-name="Text Field">
      <RadioButtonBase />
      <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-nowrap">Default</p>
    </div>
  );
}

function IconsCheck() {
  return (
    <div className="absolute left-[-2px] size-[24px] top-[-2px]" data-name="Icons/Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icons/Check">
          <path d={svgPaths.p232a8f80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[#343a6f] left-[2px] overflow-clip rounded-[3px] size-[20px] top-[2px]">
      <IconsCheck />
    </div>
  );
}

function CheckboxBase1() {
  return (
    <div className="relative rounded-[3px] shrink-0 size-[24px]" data-name="_Checkbox Base">
      <Frame1 />
    </div>
  );
}

function TextField3() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[401px] rounded-[4px] top-[276px] w-[191px]" data-name="Text Field">
      <CheckboxBase1 />
      <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-nowrap">Active</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute left-[2px] size-[20px] top-[2px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame 1">
          <rect height="18" rx="9" stroke="var(--stroke-0, #343A6F)" strokeWidth="2" width="18" x="1" y="1" />
          <path d={svgPaths.pf833c80} fill="var(--fill-0, #343A6F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RadioButtonBase1() {
  return (
    <div className="relative rounded-[3px] shrink-0 size-[24px]" data-name="_Radio button Base">
      <Frame2 />
    </div>
  );
}

function TextField4() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[624px] rounded-[4px] top-[276px] w-[191px]" data-name="Text Field">
      <RadioButtonBase1 />
      <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-nowrap">Active</p>
    </div>
  );
}

function Rectangle1() {
  return <div className="absolute bg-white border-2 border-[#d4d4d4] border-solid inset-[8.33%] rounded-[3px]" />;
}

function CheckboxBase2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="_Checkbox Base">
      <Rectangle1 />
    </div>
  );
}

function TextField5() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[401px] rounded-[4px] top-[308px] w-[191px]" data-name="Text Field">
      <CheckboxBase2 />
      <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-nowrap">Inactive</p>
    </div>
  );
}

function Frame3() {
  return <div className="absolute border-2 border-[#d4d4d4] border-solid left-[2px] rounded-[9999px] size-[20px] top-[2px]" />;
}

function RadioButtonBase2() {
  return (
    <div className="relative rounded-[3px] shrink-0 size-[24px]" data-name="_Radio button Base">
      <Frame3 />
    </div>
  );
}

function TextField6() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[624px] rounded-[4px] top-[308px] w-[191px]" data-name="Text Field">
      <RadioButtonBase2 />
      <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-nowrap">Inactive</p>
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

function TextField7() {
  return (
    <div className="absolute content-stretch flex h-[40px] items-center justify-between left-[64px] px-[16px] py-[8px] rounded-[8px] top-[452px] w-[304px]" data-name="Text Field">
      <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-nowrap">Dropdown</p>
      <IconChevronUp />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[16px]">Option 1</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[16px]">Option 2</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[16px]">Option 3</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[16px]">Option 4</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[16px]">Option 5</p>
    </div>
  );
}

function Search() {
  return (
    <div className="absolute bg-white left-[64px] min-h-[40px] rounded-[8px] top-[508px] w-[304px]" data-name="Search">
      <div className="content-stretch flex flex-col gap-[8px] items-start justify-center min-h-[inherit] overflow-clip p-[16px] relative rounded-[inherit] w-full">
        <div className="absolute bg-[#f7f7f7] h-[40px] left-0 top-[48px] w-[304px]" />
        <Frame27 />
        <div className="h-0 relative shrink-0 w-full" data-name="divider">
          <div className="absolute inset-[-0.5px_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 272 1">
              <path d="M0 0.5H272" id="divider" stroke="var(--stroke-0, #D4D4D4)" />
            </svg>
          </div>
        </div>
        <Frame28 />
        <div className="h-0 relative shrink-0 w-full" data-name="divider">
          <div className="absolute inset-[-0.5px_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 272 1">
              <path d="M0 0.5H272" id="divider" stroke="var(--stroke-0, #D4D4D4)" />
            </svg>
          </div>
        </div>
        <Frame29 />
        <div className="h-0 relative shrink-0 w-full" data-name="divider">
          <div className="absolute inset-[-0.5px_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 272 1">
              <path d="M0 0.5H272" id="divider" stroke="var(--stroke-0, #D4D4D4)" />
            </svg>
          </div>
        </div>
        <Frame30 />
        <div className="h-0 relative shrink-0 w-full" data-name="divider">
          <div className="absolute inset-[-0.5px_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 272 1">
              <path d="M0 0.5H272" id="divider" stroke="var(--stroke-0, #D4D4D4)" />
            </svg>
          </div>
        </div>
        <Frame31 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function IconLeft() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon Left">
          <path d={svgPaths.p150e4900} fill="var(--fill-0, #707070)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function TextInputSearch() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] items-center left-[400.5px] min-h-[40px] px-[24px] py-[12px] rounded-[100px] top-[452px] w-[528px]" data-name="TextInput / Search">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <IconLeft />
      <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#707070] text-[16px]">Default</p>
    </div>
  );
}

function IconLeft1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon Left">
          <path d={svgPaths.p150e4900} fill="var(--fill-0, #707070)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function IconLeft2() {
  return (
    <div className="relative size-[20px]" data-name="Icon Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon Left">
          <path d={svgPaths.p38bb2100} fill="var(--fill-0, #707070)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function TextInputSearch1() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] items-center left-[400px] min-h-[40px] px-[24px] py-[12px] rounded-[100px] top-[524px] w-[528px]" data-name="TextInput / Search">
      <div aria-hidden="true" className="absolute border border-[#c4c8e1] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <IconLeft1 />
      <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#707070] text-[16px]">Hover</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <IconLeft2 />
        </div>
      </div>
    </div>
  );
}

function IconLeft3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon Left">
          <path d={svgPaths.p150e4900} fill="var(--fill-0, #343A6F)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function IconLeft4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon Left">
          <path d={svgPaths.p38bb2100} fill="var(--fill-0, #343A6F)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function TextInputSearch2() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] items-center left-[400px] min-h-[40px] px-[24px] py-[12px] rounded-[100px] top-[596px] w-[528px]" data-name="TextInput / Search">
      <div aria-hidden="true" className="absolute border border-[#343a6f] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <IconLeft3 />
      <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[16px]">Active</p>
      <IconLeft4 />
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

function Frame18() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full">
      <IconChevronLeft />
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5660] text-[16px] text-center text-nowrap">July 2025</p>
      <IconChevronRight />
    </div>
  );
}

function CalendarDayCell() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center relative shrink-0 w-[30px]" data-name="Calendar / DayCell">
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-center text-nowrap">SUN</p>
    </div>
  );
}

function CalendarDayCell1() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center relative shrink-0 w-[30px]" data-name="Calendar / DayCell">
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-center text-nowrap">{`MON `}</p>
    </div>
  );
}

function CalendarDayCell2() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center relative shrink-0 w-[30px]" data-name="Calendar / DayCell">
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-center text-nowrap">TUE</p>
    </div>
  );
}

function CalendarDayCell3() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center relative shrink-0 w-[30px]" data-name="Calendar / DayCell">
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-center text-nowrap">WED</p>
    </div>
  );
}

function CalendarDayCell4() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center relative shrink-0 w-[30px]" data-name="Calendar / DayCell">
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-center text-nowrap">THU</p>
    </div>
  );
}

function CalendarDayCell5() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center relative shrink-0 w-[30px]" data-name="Calendar / DayCell">
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-center text-nowrap">FRI</p>
    </div>
  );
}

function CalendarDayCell6() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center relative shrink-0 w-[30px]" data-name="Calendar / DayCell">
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-center text-nowrap">SAT</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <CalendarDayCell />
      <CalendarDayCell1 />
      <CalendarDayCell2 />
      <CalendarDayCell3 />
      <CalendarDayCell4 />
      <CalendarDayCell5 />
      <CalendarDayCell6 />
    </div>
  );
}

function Date() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[30px] z-[7]" data-name="Date">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5660] text-[16px] text-center w-[20px]">1</p>
    </div>
  );
}

function Date1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[30px] z-[6]" data-name="Date">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5660] text-[16px] text-center w-[20px]">2</p>
    </div>
  );
}

function Date2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[30px] z-[5]" data-name="Date">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5660] text-[16px] text-center w-[20px]">3</p>
    </div>
  );
}

function Date3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[30px] z-[4]" data-name="Date">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5660] text-[16px] text-center w-[20px]">4</p>
    </div>
  );
}

function Date4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[30px] z-[3]" data-name="Date">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5660] text-[16px] text-center w-[20px]">5</p>
    </div>
  );
}

function Date5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[30px] z-[2]" data-name="Date">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5660] text-[16px] text-center w-[20px]">6</p>
    </div>
  );
}

function Date6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[30px] z-[1]" data-name="Date">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5660] text-[16px] text-center w-[20px]">7</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[8px] isolate items-start relative shrink-0">
      <Date />
      <Date1 />
      <Date2 />
      <Date3 />
      <Date4 />
      <Date5 />
      <Date6 />
    </div>
  );
}

function Date7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[30px] z-[7]" data-name="Date">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5660] text-[16px] text-center w-[20px]">8</p>
    </div>
  );
}

function Date8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[30px] z-[6]" data-name="Date">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5660] text-[16px] text-center w-[20px]">9</p>
    </div>
  );
}

function Date9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[30px] z-[5]" data-name="Date">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5660] text-[16px] text-center w-[20px]">10</p>
    </div>
  );
}

function Date10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[30px] z-[4]" data-name="Date">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5660] text-[16px] text-center w-[20px]">11</p>
    </div>
  );
}

function Date11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[30px] z-[3]" data-name="Date">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5660] text-[16px] text-center w-[20px]">12</p>
    </div>
  );
}

function Date12() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[30px] z-[2]" data-name="Date">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5660] text-[16px] text-center w-[20px]">13</p>
    </div>
  );
}

function Date13() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[30px] z-[1]" data-name="Date">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5660] text-[16px] text-center w-[20px]">14</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[8px] isolate items-start relative shrink-0">
      <Date7 />
      <Date8 />
      <Date9 />
      <Date10 />
      <Date11 />
      <Date12 />
      <Date13 />
    </div>
  );
}

function Date14() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[30px] z-[7]" data-name="Date">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5660] text-[16px] text-center w-[20px]">15</p>
    </div>
  );
}

function Date15() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[30px] z-[6]" data-name="Date">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5660] text-[16px] text-center w-[20px]">16</p>
    </div>
  );
}

function Date16() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[30px] z-[5]" data-name="Date">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5660] text-[16px] text-center w-[20px]">17</p>
    </div>
  );
}

function Date17() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[30px] z-[4]" data-name="Date">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5660] text-[16px] text-center w-[20px]">18</p>
    </div>
  );
}

function Date18() {
  return (
    <div className="bg-[#343a6f] content-stretch flex flex-col items-center justify-center relative rounded-[29px] shrink-0 size-[30px]" data-name="Date">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-center text-white w-[20px]">19</p>
    </div>
  );
}

function Date19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 z-[3]" data-name="Date">
      <Date18 />
    </div>
  );
}

function DateVariant() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[30px] z-[2]" data-name="Date/Variant3">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5660] text-[16px] text-center w-[20px]">20</p>
    </div>
  );
}

function Date20() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[30px] z-[1]" data-name="Date">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5660] text-[16px] text-center w-[20px]">21</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[8px] isolate items-start relative shrink-0">
      <Date14 />
      <Date15 />
      <Date16 />
      <Date17 />
      <Date19 />
      <DateVariant />
      <Date20 />
    </div>
  );
}

function Date21() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[30px] z-[8]" data-name="Date">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5660] text-[16px] text-center w-[20px]">22</p>
    </div>
  );
}

function Date22() {
  return (
    <div className="bg-[#343a6f] content-stretch flex flex-col items-center justify-center relative rounded-[29px] shrink-0 size-[30px]" data-name="Date">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-center text-white w-[20px]">23</p>
    </div>
  );
}

function Date23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 z-[7]" data-name="Date">
      <Date22 />
    </div>
  );
}

function Date24() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[30px] z-[6]" data-name="Date">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5660] text-[16px] text-center w-[20px]">24</p>
    </div>
  );
}

function Date25() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[30px] z-[5]" data-name="Date">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5660] text-[16px] text-center w-[20px]">25</p>
    </div>
  );
}

function Date26() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[30px] z-[4]" data-name="Date">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5660] text-[16px] text-center w-[20px]">26</p>
    </div>
  );
}

function Date27() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[30px] z-[3]" data-name="Date">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5660] text-[16px] text-center w-[20px]">27</p>
    </div>
  );
}

function Date28() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[30px] z-[2]" data-name="Date">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5660] text-[16px] text-center w-[20px]">28</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[8px] isolate items-start relative shrink-0">
      <Date21 />
      <Date23 />
      <Date24 />
      <Date25 />
      <Date26 />
      <Date27 />
      <Date28 />
      <div className="absolute bg-[#c4c8e1] h-[30px] left-0 rounded-[100px] top-1/2 translate-y-[-50%] w-[68px] z-[1]" />
    </div>
  );
}

function Date29() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[30px] z-[3]" data-name="Date">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5660] text-[16px] text-center w-[20px]">29</p>
    </div>
  );
}

function Date30() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[30px] z-[2]" data-name="Date">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5660] text-[16px] text-center w-[20px]">30</p>
    </div>
  );
}

function Date31() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[30px] z-[1]" data-name="Date">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5660] text-[16px] text-center w-[20px]">31</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[8px] isolate items-start relative shrink-0">
      <Date29 />
      <Date30 />
      <Date31 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame20 />
      <Frame21 />
      <Frame22 />
      <Frame23 />
      <Frame24 />
    </div>
  );
}

function DateInputCalendar() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[8px] items-start left-[961px] overflow-clip rounded-[8px] top-[452px]" data-name="DateInput / Calendar">
      <div className="absolute bg-[#c4c8e1] h-[30px] left-[calc(50%+76px)] rounded-[100px] top-[calc(50%+30px)] translate-x-[-50%] translate-y-[-50%] w-[106px]" />
      <Frame18 />
      <Frame19 />
      <Frame25 />
    </div>
  );
}

function TabBase() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[12px] pt-0 px-[4px] relative shrink-0" data-name="_Tab Base">
      <div aria-hidden="true" className="absolute border-[#d4d4d4] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#707070] text-[16px] text-center text-nowrap">Default</p>
    </div>
  );
}

function TabBase1() {
  return (
    <div className="bg-[#c4c8e1] content-stretch flex gap-[8px] items-center pb-[12px] pt-0 px-[4px] relative shrink-0" data-name="_Tab Base">
      <div aria-hidden="true" className="absolute border-[#343a6f] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#343a6f] text-[16px] text-center text-nowrap">Hover</p>
    </div>
  );
}

function TabBase2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[12px] pt-0 px-[4px] relative shrink-0" data-name="_Tab Base">
      <div aria-hidden="true" className="absolute border-[#343a6f] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#343a6f] text-[16px] text-center text-nowrap">Active</p>
    </div>
  );
}

function TabBase3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[12px] pt-0 px-[4px] relative shrink-0" data-name="_Tab Base">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#d4d4d4] text-[16px] text-center text-nowrap">Inactive</p>
    </div>
  );
}

function TabBar() {
  return (
    <div className="absolute content-stretch flex gap-[24px] items-start left-[848px] top-[244px]" data-name="Tab Bar">
      <div aria-hidden="true" className="absolute border-[#d4d4d4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TabBase />
      <TabBase1 />
      <TabBase2 />
      <TabBase3 />
    </div>
  );
}

function ProfilePicture() {
  return (
    <div className="absolute left-0 overflow-clip rounded-[71.427px] size-[36px] top-0" data-name="Profile Picture">
      <div className="absolute h-[39.999px] left-0 top-0 w-[40px]" data-name="image 30">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[171.47%] left-[-7.14%] max-w-none top-[-21.04%] w-[114.29%]" src={imgImage30} />
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="relative rounded-[1000px] shrink-0 size-[40px]" data-name="Avatar">
      <ProfilePicture />
    </div>
  );
}

function ProfilePicture1() {
  return (
    <div className="absolute left-0 overflow-clip rounded-[71.427px] size-[36px] top-0" data-name="Profile Picture">
      <div className="absolute h-[39.999px] left-0 top-0 w-[40px]" data-name="image 30">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[171.47%] left-[-7.14%] max-w-none top-[-21.04%] w-[114.29%]" src={imgImage30} />
        </div>
      </div>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="relative rounded-[1000px] shrink-0 size-[40px]" data-name="Avatar">
      <ProfilePicture1 />
      <div className="absolute left-[28px] size-[12px] top-0" data-name="Notification Dot">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <circle cx="8" cy="8" fill="var(--fill-0, #C62828)" id="Notification Dot" r="7" stroke="var(--stroke-0, white)" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ProfilePicture2() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start left-[1184px] top-[244px]" data-name="Profile Picture">
      <Avatar />
      <Avatar1 />
    </div>
  );
}

function ArrowWrapper() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Arrow Wrapper">
      <div className="flex h-[16px] items-center justify-center relative shrink-0 w-[8px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] scale-y-[-100%]">
          <div className="h-[8px] relative w-[16px]" data-name="Arrow">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 8">
              <path d="M8 8L16 0H0L8 8Z" fill="var(--fill-0, #343A6F)" id="Arrow" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentWrapper() {
  return (
    <div className="bg-[#343a6f] content-stretch flex gap-[10px] items-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="Content Wrapper">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white">Tooltip</p>
    </div>
  );
}

function TooltipBase() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tooltip / Base">
      <div className="flex flex-row items-center self-stretch">
        <ArrowWrapper />
      </div>
      <ContentWrapper />
    </div>
  );
}

function ContentWrapper1() {
  return (
    <div className="bg-[#343a6f] content-stretch flex gap-[10px] items-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="Content Wrapper">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white">Tooltip</p>
    </div>
  );
}

function ArrowWrapper1() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Arrow Wrapper">
      <div className="flex h-[16px] items-center justify-center relative shrink-0 w-[8px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-[8px] relative w-[16px]" data-name="Arrow">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 8">
              <path d="M8 8L16 0H0L8 8Z" fill="var(--fill-0, #343A6F)" id="Arrow" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function TooltipBase1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tooltip / Base">
      <ContentWrapper1 />
      <div className="flex flex-row items-center self-stretch">
        <ArrowWrapper1 />
      </div>
    </div>
  );
}

function ArrowWrapper2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Arrow Wrapper">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[12px] py-0 relative w-full">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none scale-y-[-100%]">
              <div className="h-[8px] relative w-[16px]" data-name="Arrow">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 8">
                  <path d="M8 8L16 0H0L8 8Z" fill="var(--fill-0, #343A6F)" id="Arrow" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentWrapper2() {
  return (
    <div className="bg-[#343a6f] content-stretch flex gap-[10px] items-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="Content Wrapper">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white">Tooltip</p>
    </div>
  );
}

function TooltipBase2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Tooltip / Base">
      <ArrowWrapper2 />
      <ContentWrapper2 />
    </div>
  );
}

function ContentWrapper3() {
  return (
    <div className="bg-[#343a6f] content-stretch flex gap-[10px] items-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="Content Wrapper">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white">Tooltip</p>
    </div>
  );
}

function ArrowWrapper3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Arrow Wrapper">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[12px] py-0 relative w-full">
          <div className="h-[8px] relative shrink-0 w-[16px]" data-name="Arrow">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 8">
              <path d="M8 8L16 0H0L8 8Z" fill="var(--fill-0, #343A6F)" id="Arrow" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function TooltipBase3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Tooltip / Base">
      <ContentWrapper3 />
      <ArrowWrapper3 />
    </div>
  );
}

function ArrowWrapper4() {
  return (
    <div className="content-stretch flex h-full items-end px-0 py-[12px] relative shrink-0" data-name="Arrow Wrapper">
      <div className="flex h-[16px] items-center justify-center relative shrink-0 w-[8px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] scale-y-[-100%]">
          <div className="h-[8px] relative w-[16px]" data-name="Arrow">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 8">
              <path d="M8 8L16 0H0L8 8Z" fill="var(--fill-0, #343A6F)" id="Arrow" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentWrapper4() {
  return (
    <div className="bg-[#343a6f] content-stretch flex gap-[10px] items-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="Content Wrapper">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white">Tooltip</p>
    </div>
  );
}

function TooltipBase4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tooltip / Base">
      <div className="flex flex-row items-center self-stretch">
        <ArrowWrapper4 />
      </div>
      <ContentWrapper4 />
    </div>
  );
}

function ContentWrapper5() {
  return (
    <div className="bg-[#343a6f] content-stretch flex gap-[10px] items-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="Content Wrapper">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white">Tooltip</p>
    </div>
  );
}

function ArrowWrapper5() {
  return (
    <div className="content-stretch flex h-full items-end px-0 py-[12px] relative shrink-0" data-name="Arrow Wrapper">
      <div className="flex h-[16px] items-center justify-center relative shrink-0 w-[8px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-[8px] relative w-[16px]" data-name="Arrow">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 8">
              <path d="M8 8L16 0H0L8 8Z" fill="var(--fill-0, #343A6F)" id="Arrow" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function TooltipBase5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tooltip / Base">
      <ContentWrapper5 />
      <div className="flex flex-row items-center self-stretch">
        <ArrowWrapper5 />
      </div>
    </div>
  );
}

function ArrowWrapper6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Arrow Wrapper">
      <div className="size-full">
        <div className="content-stretch flex items-start px-[12px] py-0 relative w-full">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none scale-y-[-100%]">
              <div className="h-[8px] relative w-[16px]" data-name="Arrow">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 8">
                  <path d="M8 8L16 0H0L8 8Z" fill="var(--fill-0, #343A6F)" id="Arrow" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentWrapper6() {
  return (
    <div className="bg-[#343a6f] content-stretch flex gap-[10px] items-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="Content Wrapper">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white">Tooltip</p>
    </div>
  );
}

function TooltipBase6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Tooltip / Base">
      <ArrowWrapper6 />
      <ContentWrapper6 />
    </div>
  );
}

function ContentWrapper7() {
  return (
    <div className="bg-[#343a6f] content-stretch flex gap-[10px] items-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="Content Wrapper">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white">Tooltip</p>
    </div>
  );
}

function ArrowWrapper7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Arrow Wrapper">
      <div className="size-full">
        <div className="content-stretch flex items-start px-[12px] py-0 relative w-full">
          <div className="h-[8px] relative shrink-0 w-[16px]" data-name="Arrow">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 8">
              <path d="M8 8L16 0H0L8 8Z" fill="var(--fill-0, #343A6F)" id="Arrow" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function TooltipBase7() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Tooltip / Base">
      <ContentWrapper7 />
      <ArrowWrapper7 />
    </div>
  );
}

function ArrowWrapper8() {
  return (
    <div className="content-stretch flex h-full items-start px-0 py-[12px] relative shrink-0" data-name="Arrow Wrapper">
      <div className="flex h-[16px] items-center justify-center relative shrink-0 w-[8px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] scale-y-[-100%]">
          <div className="h-[8px] relative w-[16px]" data-name="Arrow">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 8">
              <path d="M8 8L16 0H0L8 8Z" fill="var(--fill-0, #343A6F)" id="Arrow" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentWrapper8() {
  return (
    <div className="bg-[#343a6f] content-stretch flex gap-[10px] items-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="Content Wrapper">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white">Tooltip</p>
    </div>
  );
}

function TooltipBase8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tooltip / Base">
      <div className="flex flex-row items-center self-stretch">
        <ArrowWrapper8 />
      </div>
      <ContentWrapper8 />
    </div>
  );
}

function ContentWrapper9() {
  return (
    <div className="bg-[#343a6f] content-stretch flex gap-[10px] items-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="Content Wrapper">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white">Tooltip</p>
    </div>
  );
}

function ArrowWrapper9() {
  return (
    <div className="content-stretch flex h-full items-start px-0 py-[12px] relative shrink-0" data-name="Arrow Wrapper">
      <div className="flex h-[16px] items-center justify-center relative shrink-0 w-[8px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-[8px] relative w-[16px]" data-name="Arrow">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 8">
              <path d="M8 8L16 0H0L8 8Z" fill="var(--fill-0, #343A6F)" id="Arrow" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function TooltipBase9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tooltip / Base">
      <ContentWrapper9 />
      <div className="flex flex-row items-center self-stretch">
        <ArrowWrapper9 />
      </div>
    </div>
  );
}

function ArrowWrapper10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Arrow Wrapper">
      <div className="flex flex-row justify-end size-full">
        <div className="content-stretch flex items-start justify-end px-[12px] py-0 relative w-full">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none scale-y-[-100%]">
              <div className="h-[8px] relative w-[16px]" data-name="Arrow">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 8">
                  <path d="M8 8L16 0H0L8 8Z" fill="var(--fill-0, #343A6F)" id="Arrow" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentWrapper10() {
  return (
    <div className="bg-[#343a6f] content-stretch flex gap-[10px] items-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="Content Wrapper">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white">Tooltip</p>
    </div>
  );
}

function TooltipBase10() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Tooltip / Base">
      <ArrowWrapper10 />
      <ContentWrapper10 />
    </div>
  );
}

function ContentWrapper11() {
  return (
    <div className="bg-[#343a6f] content-stretch flex gap-[10px] items-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="Content Wrapper">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white">Tooltip</p>
    </div>
  );
}

function ArrowWrapper11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Arrow Wrapper">
      <div className="flex flex-row justify-end size-full">
        <div className="content-stretch flex items-start justify-end px-[12px] py-0 relative w-full">
          <div className="h-[8px] relative shrink-0 w-[16px]" data-name="Arrow">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 8">
              <path d="M8 8L16 0H0L8 8Z" fill="var(--fill-0, #343A6F)" id="Arrow" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function TooltipBase11() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Tooltip / Base">
      <ContentWrapper11 />
      <ArrowWrapper11 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="absolute content-start flex flex-wrap gap-[48px] items-start left-[64px] top-[1036px] w-[1312px]">
      <TooltipBase />
      <TooltipBase1 />
      <TooltipBase2 />
      <TooltipBase3 />
      <TooltipBase4 />
      <TooltipBase5 />
      <TooltipBase6 />
      <TooltipBase7 />
      <TooltipBase8 />
      <TooltipBase9 />
      <TooltipBase10 />
      <TooltipBase11 />
    </div>
  );
}

function Breadcrumb() {
  return (
    <div className="absolute capitalize content-stretch flex font-['Rubik:Regular',sans-serif] font-normal gap-[12px] items-start leading-[16px] left-[626px] text-[14px] text-nowrap top-[844px]" data-name="Breadcrumb">
      <p className="relative shrink-0 text-[#707070]">First Page</p>
      <p className="relative shrink-0 text-[#707070]">|</p>
      <p className="relative shrink-0 text-[#707070]">Second Page</p>
      <p className="relative shrink-0 text-[#707070]">|</p>
      <p className="relative shrink-0 text-[#121212]">Current Page</p>
    </div>
  );
}

function ButtonLarge() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center min-h-[40px] min-w-[40px] px-[16px] py-[12px] relative rounded-[100px] shrink-0" data-name="Button_Large">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#707070] text-[16px] text-center">First</p>
    </div>
  );
}

function ButtonLarge1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center min-h-[40px] min-w-[40px] px-[16px] py-[12px] relative rounded-[100px] shrink-0" data-name="Button_Large">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#707070] text-[16px] text-center">Previous</p>
    </div>
  );
}

function ButtonLarge2() {
  return (
    <div className="bg-[#343a6f] content-stretch flex gap-[4px] items-center justify-center min-h-[40px] min-w-[48px] px-[16px] py-[12px] relative rounded-[100px] shrink-0" data-name="Button_Large">
      <p className="basis-0 font-['Rubik:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white">1</p>
    </div>
  );
}

function ButtonLarge3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center min-h-[40px] min-w-[48px] px-[16px] py-[12px] relative rounded-[100px] shrink-0" data-name="Button_Large">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[16px] text-center">2</p>
    </div>
  );
}

function ButtonLarge4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center min-h-[40px] min-w-[48px] px-[16px] py-[12px] relative rounded-[100px] shrink-0" data-name="Button_Large">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[16px] text-center">3</p>
    </div>
  );
}

function ButtonLarge5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center min-h-[40px] min-w-[40px] px-[16px] py-[12px] relative rounded-[100px] shrink-0" data-name="Button_Large">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[16px] text-center">Next</p>
    </div>
  );
}

function ButtonLarge6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center min-h-[40px] min-w-[40px] px-[16px] py-[12px] relative rounded-[100px] shrink-0" data-name="Button_Large">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[16px] text-center">Last</p>
    </div>
  );
}

function Pagination() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[64px] top-[852px]" data-name="Pagination">
      <ButtonLarge />
      <ButtonLarge1 />
      <ButtonLarge2 />
      <ButtonLarge3 />
      <ButtonLarge4 />
      <ButtonLarge5 />
      <ButtonLarge6 />
    </div>
  );
}

function Component06Selectors() {
  return (
    <div className="absolute bg-white h-[1252px] left-[10472px] overflow-clip top-0 w-[1440px]" data-name="06 | Selectors">
      <Frame7 />
      <p className="absolute font-['Rubik:Medium',sans-serif] font-medium leading-[32px] left-[64px] text-[#707070] text-[20px] top-[180px] tracking-[-0.2px] w-[304px]">Dropdown (Collapsed)</p>
      <p className="absolute font-['Rubik:Medium',sans-serif] font-medium leading-[32px] left-[64px] text-[#707070] text-[20px] top-[972px] tracking-[-0.2px] w-[304px]">Tooltips</p>
      <p className="absolute font-['Rubik:Medium',sans-serif] font-medium leading-[32px] left-[401px] text-[#707070] text-[20px] top-[180px] tracking-[-0.2px] w-[191px]">Checkbox</p>
      <p className="absolute font-['Rubik:Medium',sans-serif] font-medium leading-[32px] left-[848px] text-[#707070] text-[20px] top-[180px] tracking-[-0.2px] w-[191px]">Tabs</p>
      <p className="absolute font-['Rubik:Medium',sans-serif] font-medium leading-[32px] left-[1184px] text-[#707070] text-[20px] top-[180px] tracking-[-0.2px] w-[191px]">Profile Picture</p>
      <p className="absolute font-['Rubik:Medium',sans-serif] font-medium leading-[32px] left-[624px] text-[#707070] text-[20px] top-[180px] tracking-[-0.2px] w-[191px]">Radio</p>
      <p className="absolute font-['Rubik:Medium',sans-serif] font-medium leading-[32px] left-[64px] text-[#707070] text-[20px] top-[388px] tracking-[-0.2px] w-[304px]">Dropdown (Expanded)</p>
      <p className="absolute font-['Rubik:Medium',sans-serif] font-medium leading-[32px] left-[400px] text-[#707070] text-[20px] top-[388px] tracking-[-0.2px] w-[304px]">Search</p>
      <p className="absolute font-['Rubik:Medium',sans-serif] font-medium leading-[32px] left-[626px] text-[#707070] text-[20px] top-[780px] tracking-[-0.2px] w-[304px]">Breadcrumb</p>
      <p className="absolute font-['Rubik:Medium',sans-serif] font-medium leading-[32px] left-[64px] text-[#707070] text-[20px] top-[780px] tracking-[-0.2px] w-[304px]">Pagination</p>
      <p className="absolute font-['Rubik:Medium',sans-serif] font-medium leading-[32px] left-[960px] text-[#707070] text-[20px] top-[388px] tracking-[-0.2px] w-[304px]">Calendar</p>
      <TextField />
      <TextField1 />
      <TextField2 />
      <TextField3 />
      <TextField4 />
      <TextField5 />
      <TextField6 />
      <TextField7 />
      <Search />
      <TextInputSearch />
      <TextInputSearch1 />
      <TextInputSearch2 />
      <DateInputCalendar />
      <TabBar />
      <ProfilePicture2 />
      <Frame32 />
      <Breadcrumb />
      <Pagination />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute bg-[#343a6f] content-stretch flex items-center justify-between left-1/2 px-[64px] py-[16px] top-0 translate-x-[-50%] w-[1440px]">
      <div className="h-[60px] shrink-0 w-[151px]" data-name="Logo" />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-nowrap text-white">07 | Buttons</p>
    </div>
  );
}

function ButtonLarge7() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[4px] items-center justify-center left-[355px] min-h-[40px] min-w-[40px] px-[16px] py-[12px] rounded-[100px] top-[325px] w-[192px]" data-name="Button_Large">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[16px] text-center">Button</p>
    </div>
  );
}

function IconLeft5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon Left">
          <path clipRule="evenodd" d={svgPaths.pb261f00} fill="var(--fill-0, #707070)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function ButtonLarge8() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[4px] items-center justify-center left-[915px] min-h-[40px] min-w-[40px] p-[12px] rounded-[100px] size-[48px] top-[325px]" data-name="Button_Large">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <IconLeft5 />
    </div>
  );
}

function IconLeft6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon Left">
          <path clipRule="evenodd" d={svgPaths.pb261f00} fill="var(--fill-0, #707070)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function IconRight() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon Right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon Right">
          <g id="Shape">
            <path d={svgPaths.pe95e500} fill="#707070" />
            <path d={svgPaths.p363e3d00} fill="#707070" />
            <path d={svgPaths.p2eafa000} fill="#707070" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ButtonLarge9() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center justify-center left-[355px] min-h-[40px] min-w-[40px] px-[16px] py-[12px] rounded-[100px] top-[613px] w-[192px]" data-name="Button_Large">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <IconLeft6 />
      <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[16px] text-center">Button</p>
      <IconRight />
    </div>
  );
}

function ButtonLarge10() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[4px] items-center justify-center left-[579px] min-h-[40px] min-w-[40px] px-[16px] py-[12px] rounded-[100px] top-[325px] w-[192px]" data-name="Button_Large">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="basis-0 capitalize font-['Rubik:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[14px] text-center">Button</p>
    </div>
  );
}

function ButtonSmall() {
  return (
    <div className="absolute bg-[#f7f7f7] content-stretch flex gap-[4px] items-center justify-center left-[803px] min-w-[40px] px-[8px] py-[4px] rounded-[100px] top-[325px]" data-name="Button_Small">
      <p className="basis-0 capitalize font-['Rubik:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[14px] text-center">Button</p>
    </div>
  );
}

function ButtonLarge11() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center justify-center left-[355px] min-h-[40px] min-w-[40px] px-[16px] py-[12px] rounded-[100px] top-[541px] w-[192px]" data-name="Button_Large">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#707070] text-[16px] text-center">Button</p>
    </div>
  );
}

function IconLeft7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon Left">
          <path clipRule="evenodd" d={svgPaths.pb261f00} fill="var(--fill-0, #707070)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function ButtonLarge12() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center justify-center left-[915px] min-h-[40px] min-w-[40px] p-[12px] rounded-[100px] size-[48px] top-[613px]" data-name="Button_Large">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <IconLeft7 />
    </div>
  );
}

function IconLeft8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_11_4101)" id="Icon Left">
          <path clipRule="evenodd" d={svgPaths.p3a1cbe00} fill="var(--fill-0, #707070)" fillRule="evenodd" id="Shape" />
        </g>
        <defs>
          <clipPath id="clip0_11_4101">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconRight1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon Right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon Right">
          <g id="Shape">
            <path d={svgPaths.p346d8030} fill="#707070" />
            <path d={svgPaths.p821e880} fill="#707070" />
            <path d={svgPaths.p2d61a500} fill="#707070" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ButtonLarge13() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center justify-center left-[579px] min-h-[40px] min-w-[40px] px-[16px] py-[12px] rounded-[100px] top-[613px] w-[192px]" data-name="Button_Large">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <IconLeft8 />
      <p className="basis-0 capitalize font-['Rubik:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[14px] text-center">Button</p>
      <IconRight1 />
    </div>
  );
}

function ButtonLarge14() {
  return (
    <div className="absolute bg-[#c4c8e1] content-stretch flex gap-[4px] items-center justify-center left-[355px] min-h-[40px] min-w-[40px] px-[16px] py-[12px] rounded-[100px] top-[397px] w-[192px]" data-name="Button_Large">
      <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#343a6f] text-[16px] text-center">Button</p>
    </div>
  );
}

function IconLeft9() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon Left">
          <path clipRule="evenodd" d={svgPaths.p30092f00} fill="var(--fill-0, #707070)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function IconRight2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon Right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon Right">
          <g id="Shape">
            <path d={svgPaths.p3a380c00} fill="#707070" />
            <path d={svgPaths.p10d25300} fill="#707070" />
            <path d={svgPaths.p38084f00} fill="#707070" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ButtonSmall1() {
  return (
    <div className="absolute bg-[#f7f7f7] content-stretch flex gap-[4px] items-center justify-center left-[803px] min-w-[40px] px-[8px] py-[4px] rounded-[100px] top-[613px]" data-name="Button_Small">
      <IconLeft9 />
      <p className="basis-0 capitalize font-['Rubik:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[14px] text-center">Button</p>
      <IconRight2 />
    </div>
  );
}

function IconLeft10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon Left">
          <path clipRule="evenodd" d={svgPaths.pb261f00} fill="var(--fill-0, #D4D4D4)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function ButtonLarge15() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center justify-center left-[915px] min-h-[40px] min-w-[40px] p-[12px] rounded-[100px] size-[48px] top-[541px]" data-name="Button_Large">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <IconLeft10 />
    </div>
  );
}

function ButtonLarge16() {
  return (
    <div className="absolute bg-[#343a6f] content-stretch flex gap-[4px] items-center justify-center left-[355px] min-h-[40px] min-w-[40px] px-[16px] py-[12px] rounded-[100px] top-[469px] w-[192px]" data-name="Button_Large">
      <p className="basis-0 font-['Rubik:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white">Button</p>
    </div>
  );
}

function ButtonLarge17() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center justify-center left-[579px] min-h-[40px] min-w-[40px] px-[16px] py-[12px] rounded-[100px] top-[541px] w-[192px]" data-name="Button_Large">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="basis-0 capitalize font-['Rubik:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#707070] text-[14px] text-center">Button</p>
    </div>
  );
}

function ButtonSmall2() {
  return (
    <div className="absolute bg-[#f7f7f7] content-stretch flex gap-[4px] items-center justify-center left-[803px] min-w-[40px] opacity-50 px-[8px] py-[4px] rounded-[100px] top-[541px]" data-name="Button_Small">
      <p className="basis-0 capitalize font-['Rubik:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[14px] text-center">Button</p>
    </div>
  );
}

function IconLeft11() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon Left">
          <path clipRule="evenodd" d={svgPaths.pb261f00} fill="var(--fill-0, #343A6F)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function ButtonLarge18() {
  return (
    <div className="absolute bg-[#c4c8e1] content-stretch flex gap-[4px] items-center justify-center left-[915px] min-h-[40px] min-w-[40px] p-[12px] rounded-[100px] size-[48px] top-[397px]" data-name="Button_Large">
      <IconLeft11 />
    </div>
  );
}

function ButtonLarge19() {
  return (
    <div className="absolute bg-[#c4c8e1] content-stretch flex gap-[4px] items-center justify-center left-[579px] min-h-[40px] min-w-[40px] px-[16px] py-[12px] rounded-[100px] top-[397px] w-[192px]" data-name="Button_Large">
      <p className="basis-0 capitalize font-['Rubik:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#343a6f] text-[14px] text-center">Button</p>
    </div>
  );
}

function ButtonSmall3() {
  return (
    <div className="absolute bg-[#c4c8e1] content-stretch flex gap-[4px] items-center justify-center left-[803px] min-w-[40px] px-[8px] py-[4px] rounded-[100px] top-[397px]" data-name="Button_Small">
      <p className="basis-0 capitalize font-['Rubik:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#343a6f] text-[14px] text-center">Button</p>
    </div>
  );
}

function IconLeft12() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon Left">
          <path clipRule="evenodd" d={svgPaths.pb261f00} fill="var(--fill-0, white)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function ButtonLarge20() {
  return (
    <div className="absolute bg-[#343a6f] content-stretch flex gap-[4px] items-center justify-center left-[915px] min-h-[40px] min-w-[40px] p-[12px] rounded-[100px] size-[48px] top-[469px]" data-name="Button_Large">
      <IconLeft12 />
    </div>
  );
}

function ButtonLarge21() {
  return (
    <div className="absolute bg-[#343a6f] content-stretch flex gap-[4px] items-center justify-center left-[579px] min-h-[40px] min-w-[40px] px-[16px] py-[12px] rounded-[100px] top-[469px] w-[192px]" data-name="Button_Large">
      <p className="basis-0 capitalize font-['Rubik:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[14px] text-center text-white">Button</p>
    </div>
  );
}

function ButtonSmall4() {
  return (
    <div className="absolute bg-[#343a6f] content-stretch flex gap-[4px] items-center justify-center left-[803px] min-w-[40px] px-[8px] py-[4px] rounded-[100px] top-[469px]" data-name="Button_Small">
      <p className="basis-0 capitalize font-['Rubik:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[14px] text-center text-white">Button</p>
    </div>
  );
}

function IconLeft13() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon Left">
          <g id="Shape">
            <path clipRule="evenodd" d={svgPaths.p389d0f00} fill="white" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2976b680} fill="white" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p17980900} fill="white" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p90be000} fill="white" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ButtonConcept() {
  return (
    <div className="bg-[#343a6f] content-stretch flex gap-[4px] items-center justify-center min-w-[40px] px-[16px] py-[12px] relative rounded-[100px] shrink-0" data-name="Button _Concept 2">
      <IconLeft13 />
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-center text-nowrap text-white">Grid</p>
    </div>
  );
}

function IconLeft14() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon Left">
          <g id="Shape">
            <path d={svgPaths.p11926580} fill="#707070" />
            <path d={svgPaths.p357c8580} fill="#707070" />
            <path d={svgPaths.pe8b6800} fill="#707070" />
            <path d={svgPaths.p14a9d200} fill="#707070" />
            <path d={svgPaths.p3a8b400} fill="#707070" />
            <path d={svgPaths.p1211fa00} fill="#707070" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ButtonConcept1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center min-h-[40px] min-w-[40px] px-[16px] py-[12px] relative rounded-[100px] shrink-0" data-name="Button _Concept 3">
      <IconLeft14 />
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-center text-nowrap">List</p>
    </div>
  );
}

function ToggleViewMode() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[1027px] rounded-[40px] top-[325px]" data-name="Toggle / View Mode">
      <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[40px]" />
      <ButtonConcept />
      <ButtonConcept1 />
    </div>
  );
}

function IconLeft15() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon Left">
          <g id="Shape">
            <path clipRule="evenodd" d={svgPaths.p389d0f00} fill="#707070" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2976b680} fill="#707070" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p17980900} fill="#707070" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p90be000} fill="#707070" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ButtonConcept2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[40px] px-[16px] py-[12px] relative rounded-[100px] shrink-0" data-name="Button _Concept 2">
      <IconLeft15 />
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-center text-nowrap">Grid</p>
    </div>
  );
}

function IconLeft16() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon Left">
          <g id="Shape">
            <path d={svgPaths.p11926580} fill="white" />
            <path d={svgPaths.p357c8580} fill="white" />
            <path d={svgPaths.pe8b6800} fill="white" />
            <path d={svgPaths.p14a9d200} fill="white" />
            <path d={svgPaths.p3a8b400} fill="white" />
            <path d={svgPaths.p1211fa00} fill="white" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ButtonConcept3() {
  return (
    <div className="bg-[#343a6f] content-stretch flex gap-[4px] items-center justify-center min-h-[40px] min-w-[40px] px-[16px] py-[12px] relative rounded-[100px] shrink-0" data-name="Button _Concept 3">
      <IconLeft16 />
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-center text-nowrap text-white">List</p>
    </div>
  );
}

function ToggleViewMode1() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[1025px] rounded-[40px] top-[389px]" data-name="Toggle / View Mode">
      <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[40px]" />
      <ButtonConcept2 />
      <ButtonConcept3 />
    </div>
  );
}

function IconLeft17() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_11_3883)" id="Icon Left">
          <path clipRule="evenodd" d={svgPaths.pd16fa00} fill="var(--fill-0, #707070)" fillRule="evenodd" id="Shape" />
        </g>
        <defs>
          <clipPath id="clip0_11_3883">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonSmallFavorited() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[4px] items-center justify-center left-[1025px] min-h-[40px] min-w-[40px] px-[16px] py-[12px] rounded-[100px] top-[541px]" data-name="Button / Small / Favorited">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <IconLeft17 />
      <p className="basis-0 capitalize font-['Rubik:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[14px] text-center">Unselected</p>
    </div>
  );
}

function IconLeft18() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_11_3934)" id="Icon Left">
          <g id="Shape">
            <path d={svgPaths.p1c324700} fill="white" />
            <path d={svgPaths.p12b6ef80} fill="white" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_11_3934">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonSmallFavorited1() {
  return (
    <div className="absolute bg-[#343a6f] content-stretch flex gap-[4px] items-center justify-center left-[1025px] min-h-[40px] min-w-[40px] px-[16px] py-[12px] rounded-[100px] top-[601px]" data-name="Button / Small / Favorited">
      <IconLeft18 />
      <p className="basis-0 capitalize font-['Rubik:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[14px] text-center text-white">Selected</p>
    </div>
  );
}

function Component07Buttons() {
  return (
    <div className="absolute bg-white h-[900px] left-[11968px] overflow-clip top-0 w-[1440px]" data-name="07 | Buttons">
      <Frame8 />
      <p className="absolute font-['Rubik:Medium',sans-serif] font-medium leading-[32px] left-[243px] text-[#707070] text-[20px] top-[325px] tracking-[-0.2px] w-[80px]">Default</p>
      <p className="absolute font-['Rubik:Medium',sans-serif] font-medium leading-[32px] left-[355px] text-[#707070] text-[20px] top-[269px] tracking-[-0.2px] w-[80px]">Large</p>
      <p className="absolute font-['Rubik:Medium',sans-serif] font-medium leading-[32px] left-[915px] text-[#707070] text-[20px] top-[269px] tracking-[-0.2px] w-[80px]">Icon</p>
      <p className="absolute font-['Rubik:Medium',sans-serif] font-medium leading-[32px] left-[1027px] text-[#707070] text-[20px] top-[269px] tracking-[-0.2px] w-[80px]">Toggle</p>
      <p className="absolute font-['Rubik:Medium',sans-serif] font-medium leading-[32px] left-[1025px] text-[#707070] text-[20px] top-[485px] tracking-[-0.2px] w-[237px]">Multi-select Buttons</p>
      <p className="absolute font-['Rubik:Medium',sans-serif] font-medium leading-[32px] left-[579px] text-[#707070] text-[20px] top-[269px] tracking-[-0.2px] w-[80px]">Medium</p>
      <p className="absolute font-['Rubik:Medium',sans-serif] font-medium leading-[32px] left-[803px] text-[#707070] text-[20px] top-[269px] tracking-[-0.2px] w-[80px]">Small</p>
      <p className="absolute font-['Rubik:Medium',sans-serif] font-medium leading-[32px] left-[243px] text-[#707070] text-[20px] top-[541px] tracking-[-0.2px] w-[80px]">Inactive</p>
      <p className="absolute font-['Rubik:Medium',sans-serif] font-medium leading-[32px] left-[243px] text-[#707070] text-[20px] top-[613px] tracking-[-0.2px] w-[80px]">Icons</p>
      <p className="absolute font-['Rubik:Medium',sans-serif] font-medium leading-[32px] left-[243px] text-[#707070] text-[20px] top-[397px] tracking-[-0.2px] w-[80px]">Hover</p>
      <ButtonLarge7 />
      <p className="absolute font-['Rubik:Medium',sans-serif] font-medium leading-[32px] left-[243px] text-[#707070] text-[20px] top-[469px] tracking-[-0.2px] w-[80px]">Active</p>
      <ButtonLarge8 />
      <ButtonLarge9 />
      <ButtonLarge10 />
      <ButtonSmall />
      <ButtonLarge11 />
      <ButtonLarge12 />
      <ButtonLarge13 />
      <ButtonLarge14 />
      <ButtonSmall1 />
      <ButtonLarge15 />
      <ButtonLarge16 />
      <ButtonLarge17 />
      <ButtonSmall2 />
      <ButtonLarge18 />
      <ButtonLarge19 />
      <ButtonSmall3 />
      <ButtonLarge20 />
      <ButtonLarge21 />
      <ButtonSmall4 />
      <ToggleViewMode />
      <ToggleViewMode1 />
      <ButtonSmallFavorited />
      <ButtonSmallFavorited1 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute bg-[#343a6f] content-stretch flex items-center justify-between left-1/2 px-[64px] py-[16px] top-0 translate-x-[-50%] w-[1440px]">
      <div className="h-[60px] shrink-0 w-[151px]" data-name="Logo" />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-nowrap text-white">05 | Text Fields</p>
    </div>
  );
}

function TextField8() {
  return (
    <div className="h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Text Field">
      <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[8px] relative size-full">
          <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-nowrap">Input Text</p>
        </div>
      </div>
    </div>
  );
}

function TextFieldContainer() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11px] items-start left-[64px] top-[244px] w-[304px]" data-name="Text Field Container">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-nowrap w-full">Text Field Header Example</p>
      <TextField8 />
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] text-nowrap w-full">Status Example</p>
    </div>
  );
}

function TextField9() {
  return (
    <div className="h-[160px] relative rounded-[8px] shrink-0 w-full" data-name="Text Field">
      <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[8px] relative size-full">
          <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[16px]">Lorem ipsum dolor sit amet consectetur. Morbi auctor ipsum ipsum integer consectetur diam. Mattis adipiscing ut dolor quisque viverra tempus accumsan diam. Sit varius in sapien tincidunt.</p>
        </div>
      </div>
    </div>
  );
}

function TextFieldContainer1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11px] items-start left-[64px] top-[474px] w-[304px]" data-name="Text Field Container">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-nowrap w-full">Text Field Header Example</p>
      <TextField9 />
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] text-nowrap w-full">Status Example</p>
    </div>
  );
}

function IconChevronDown1() {
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

function TextField10() {
  return (
    <div className="h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Text Field">
      <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[8px] relative size-full">
          <IconChevronDown1 />
          <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-nowrap">Input Text</p>
          <IconChevronDown1 />
        </div>
      </div>
    </div>
  );
}

function TextFieldContainer2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11px] items-start left-[400px] top-[474px] w-[304px]" data-name="Text Field Container">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-nowrap w-full">Text Field Header Example</p>
      <TextField10 />
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] text-nowrap w-full">Status Example</p>
    </div>
  );
}

function TextField11() {
  return (
    <div className="h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Text Field">
      <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[8px] relative size-full">
          <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-nowrap">Input Text</p>
        </div>
      </div>
    </div>
  );
}

function TextFieldContainer3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11px] items-start left-[400px] top-[279px] w-[304px]" data-name="Text Field Container">
      <TextField11 />
    </div>
  );
}

function TextField12() {
  return (
    <div className="h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Text Field">
      <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[8px] relative size-full">
          <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-nowrap">Input Text</p>
        </div>
      </div>
    </div>
  );
}

function TextFieldContainer4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11px] items-start left-[736px] top-[244px] w-[304px]" data-name="Text Field Container">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-nowrap w-full">Text Field Header Example</p>
      <TextField12 />
    </div>
  );
}

function TextField13() {
  return (
    <div className="h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Text Field">
      <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[8px] relative size-full">
          <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-nowrap">Input Text</p>
        </div>
      </div>
    </div>
  );
}

function TextFieldContainer5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11px] items-start left-[1072px] top-[279px] w-[304px]" data-name="Text Field Container">
      <TextField13 />
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] text-nowrap w-full">Status Example</p>
    </div>
  );
}

function TextField14() {
  return (
    <div className="h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Text Field">
      <div aria-hidden="true" className="absolute border border-[#343a6f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[8px] relative size-full">
          <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-nowrap">Input Text</p>
        </div>
      </div>
    </div>
  );
}

function TextFieldContainer6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11px] items-start left-[736px] top-[474px] w-[304px]" data-name="Text Field Container">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-nowrap w-full">Text Field Header Example</p>
      <TextField14 />
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#343a6f] text-[16px] text-nowrap w-full">Success!</p>
    </div>
  );
}

function TextField15() {
  return (
    <div className="h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Text Field">
      <div aria-hidden="true" className="absolute border border-[#c62828] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[8px] relative size-full">
          <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-nowrap">Input Text</p>
        </div>
      </div>
    </div>
  );
}

function TextFieldContainer7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11px] items-start left-[1072px] top-[474px] w-[304px]" data-name="Text Field Container">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-nowrap w-full">Text Field Header Example</p>
      <TextField15 />
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#c62828] text-[16px] text-nowrap w-full">Error!</p>
    </div>
  );
}

function Component05TextFields() {
  return (
    <div className="absolute bg-white h-[900px] left-[8976px] overflow-clip top-0 w-[1440px]" data-name="05 | Text Fields">
      <Frame9 />
      <TextFieldContainer />
      <TextFieldContainer1 />
      <TextFieldContainer2 />
      <TextFieldContainer3 />
      <TextFieldContainer4 />
      <TextFieldContainer5 />
      <TextFieldContainer6 />
      <TextFieldContainer7 />
      <p className="absolute font-['Rubik:Medium',sans-serif] font-medium leading-[32px] left-[64px] text-[#707070] text-[20px] top-[180px] tracking-[-0.2px] w-[304px]">Text Field (Default Example)</p>
      <p className="absolute font-['Rubik:Medium',sans-serif] font-medium leading-[32px] left-[64px] text-[#707070] text-[20px] top-[410px] tracking-[-0.2px] w-[304px]">Text Area (Example)</p>
      <p className="absolute font-['Rubik:Medium',sans-serif] font-medium leading-[32px] left-[400px] text-[#707070] text-[20px] top-[410px] tracking-[-0.2px] w-[304px]">Text Field (Icon Positions)</p>
      <p className="absolute font-['Rubik:Medium',sans-serif] font-medium leading-[32px] left-[400px] text-[#707070] text-[20px] top-[180px] tracking-[-0.2px] w-[304px]">{`Text Field (No Label & Status)`}</p>
      <p className="absolute font-['Rubik:Medium',sans-serif] font-medium leading-[32px] left-[736px] text-[#707070] text-[20px] top-[410px] tracking-[-0.2px] w-[304px]">Input State (Success)</p>
      <p className="absolute font-['Rubik:Medium',sans-serif] font-medium leading-[32px] left-[1072px] text-[#707070] text-[20px] top-[410px] tracking-[-0.2px] w-[304px]">Input State (Error)</p>
      <p className="absolute font-['Rubik:Medium',sans-serif] font-medium leading-[32px] left-[736px] text-[#707070] text-[20px] top-[180px] tracking-[-0.2px] w-[304px]">Text Field + Label (No Status)</p>
      <p className="absolute font-['Rubik:Medium',sans-serif] font-medium leading-[32px] left-[1072px] text-[#707070] text-[20px] top-[180px] tracking-[-0.2px] w-[304px]">Text Field + Status (No Label)</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute bg-[#343a6f] content-stretch flex items-center justify-between left-1/2 px-[64px] py-[16px] top-0 translate-x-[-50%] w-[1440px]">
      <div className="h-[60px] shrink-0 w-[151px]" data-name="Logo" />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-nowrap text-white">04 | Spacing</p>
    </div>
  );
}

function SpacerGroup() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[29px]" data-name="spacer group">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#707070] text-[16px] text-nowrap">4px</p>
      <div className="bg-[#c4c8e1] h-[500px] shrink-0 w-[4px]" data-name="Spacer" />
    </div>
  );
}

function SpacerGroup1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[29px]" data-name="spacer group">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">8px</p>
      <div className="bg-[#c4c8e1] h-[500px] shrink-0 w-[8px]" data-name="Spacer" />
    </div>
  );
}

function SpacerGroup2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="spacer group">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#707070] text-[16px] text-nowrap">12px</p>
      <div className="bg-[#c4c8e1] h-[500px] shrink-0 w-[12px]" data-name="Spacer" />
    </div>
  );
}

function SpacerGroup3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="spacer group">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">16px</p>
      <div className="bg-[#c4c8e1] h-[500px] shrink-0 w-[16px]" data-name="Spacer" />
    </div>
  );
}

function SpacerGroup4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="spacer group">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#707070] text-[16px] text-nowrap">20px</p>
      <div className="bg-[#c4c8e1] h-[500px] shrink-0 w-[20px]" data-name="Spacer" />
    </div>
  );
}

function SpacerGroup5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="spacer group">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">24px</p>
      <div className="bg-[#c4c8e1] h-[500px] shrink-0 w-[24px]" data-name="Spacer" />
    </div>
  );
}

function SpacerGroup6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="spacer group">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#707070] text-[16px] text-nowrap">28px</p>
      <div className="bg-[#c4c8e1] h-[500px] shrink-0 w-[28px]" data-name="Spacer" />
    </div>
  );
}

function SpacerGroup7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="spacer group">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">32px</p>
      <div className="bg-[#c4c8e1] h-[500px] shrink-0 w-[32px]" data-name="Spacer" />
    </div>
  );
}

function SpacerGroup8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="spacer group">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">40px</p>
      <div className="bg-[#c4c8e1] h-[500px] shrink-0 w-[40px]" data-name="Spacer" />
    </div>
  );
}

function SpacerGroup9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="spacer group">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">48px</p>
      <div className="bg-[#c4c8e1] h-[500px] shrink-0 w-[48px]" data-name="Spacer" />
    </div>
  );
}

function SpacerGroup10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="spacer group">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">56px</p>
      <div className="bg-[#c4c8e1] h-[500px] shrink-0 w-[56px]" data-name="Spacer" />
    </div>
  );
}

function SpacerGroup11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="spacer group">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">64px</p>
      <div className="bg-[#c4c8e1] h-[500px] shrink-0 w-[64px]" data-name="Spacer" />
    </div>
  );
}

function SpacerGroup12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="spacer group">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">72px</p>
      <div className="bg-[#c4c8e1] h-[500px] shrink-0 w-[72px]" data-name="Spacer" />
    </div>
  );
}

function SpacerGroup13() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="spacer group">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">80px</p>
      <div className="bg-[#c4c8e1] h-[500px] shrink-0 w-[80px]" data-name="Spacer" />
    </div>
  );
}

function SpacerGroup14() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="spacer group">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">88px</p>
      <div className="bg-[#c4c8e1] h-[500px] shrink-0 w-[80px]" data-name="Spacer" />
    </div>
  );
}

function SpacerGroup15() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="spacer group">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">96px</p>
      <div className="bg-[#c4c8e1] h-[500px] shrink-0 w-[88px]" data-name="Spacer" />
    </div>
  );
}

function SpacerGroup16() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="spacer group">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">104px</p>
      <div className="bg-[#c4c8e1] h-[500px] shrink-0 w-[104px]" data-name="Spacer" />
    </div>
  );
}

function SpacerGroup17() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="spacer group">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">112px</p>
      <div className="bg-[#c4c8e1] h-[500px] shrink-0 w-[104px]" data-name="Spacer" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute bottom-[80px] content-stretch flex items-center justify-between left-[64px] w-[1312px]">
      <SpacerGroup />
      <SpacerGroup1 />
      <SpacerGroup2 />
      <SpacerGroup3 />
      <SpacerGroup4 />
      <SpacerGroup5 />
      <SpacerGroup6 />
      <SpacerGroup7 />
      <SpacerGroup8 />
      <SpacerGroup9 />
      <SpacerGroup10 />
      <SpacerGroup11 />
      <SpacerGroup12 />
      <SpacerGroup13 />
      <SpacerGroup14 />
      <SpacerGroup15 />
      <SpacerGroup16 />
      <SpacerGroup17 />
    </div>
  );
}

function Component04Spacing() {
  return (
    <div className="absolute bg-white h-[900px] left-[7480px] overflow-clip top-0 w-[1440px]" data-name="04 | Spacing">
      <Frame10 />
      <Frame11 />
      <p className="absolute font-['Rubik:Medium',sans-serif] font-medium leading-[40px] left-[64px] text-[#707070] text-[32px] text-nowrap top-[172px]">Spacing Guidelines</p>
      <p className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[24px] left-[64px] text-[#121212] text-[16px] text-nowrap top-[222px]">Spacing is measured in pixel variables, using increments of 8px. Additionally, there are some smaller 4px increments available for case by case needs.</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute bg-[#343a6f] content-stretch flex items-center justify-between left-1/2 px-[64px] py-[16px] top-0 translate-x-[-50%] w-[1440px]">
      <div className="h-[60px] shrink-0 w-[151px]" data-name="Logo" />
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

function Frame36() {
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
      <Frame36 />
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

function IconChevronDown2() {
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

function IconChevronLeft1() {
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

function IconChevronRight1() {
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

function IconChevronUp1() {
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
        <g clipPath="url(#clip0_11_3965)" id="icon-eye-off">
          <g id="Shape">
            <path clipRule="evenodd" d={svgPaths.p2e81de00} fill="#707070" fillRule="evenodd" />
            <path d={svgPaths.p2c1ce580} fill="#707070" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_11_3965">
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

function Frame26() {
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
      <Frame26 />
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
        <g clipPath="url(#clip0_11_3775)" id="icon-settings">
          <g id="Shape">
            <path clipRule="evenodd" d={svgPaths.p279efa80} fill="#707070" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3647fd00} fill="#707070" fillRule="evenodd" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_11_3775">
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
      <IconChevronDown2 />
      <IconChevronLeft1 />
      <IconChevronRight1 />
      <IconChevronUp1 />
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

function Component03Iconography() {
  return (
    <div className="absolute bg-white h-[900px] left-[5984px] overflow-clip top-0 w-[1440px]" data-name="03 | Iconography">
      <Frame12 />
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

function Row() {
  return (
    <div className="absolute content-stretch flex font-['Rubik:Medium',sans-serif] font-medium gap-[32px] items-center leading-[32px] left-[512px] text-[#707070] text-[20px] top-[180px] tracking-[-0.2px]" data-name="row">
      <p className="relative shrink-0 w-[192px]">Name</p>
      <p className="relative shrink-0 w-[192px]">Weight</p>
      <p className="relative shrink-0 w-[192px]">Font Size</p>
      <p className="relative shrink-0 w-[192px]">Line Height</p>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex font-['Rubik:Medium',sans-serif] font-medium gap-[32px] items-center relative shrink-0 w-full" data-name="row">
      <p className="leading-[40px] relative shrink-0 text-[#121212] text-[40px] tracking-[-0.8px] w-[192px]">Header 1</p>
      <p className="leading-[32px] relative shrink-0 text-[#707070] text-[20px] tracking-[-0.2px] w-[192px]">Medium</p>
      <p className="leading-[32px] relative shrink-0 text-[#707070] text-[20px] tracking-[-0.2px] w-[192px]">40px</p>
      <p className="leading-[32px] relative shrink-0 text-[#707070] text-[20px] tracking-[-0.2px] w-[192px]">40px</p>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex font-['Rubik:Medium',sans-serif] font-medium gap-[32px] items-center relative shrink-0 w-full" data-name="row">
      <p className="leading-[40px] relative shrink-0 text-[#121212] text-[32px] w-[192px]">Header 2</p>
      <p className="leading-[32px] relative shrink-0 text-[#707070] text-[20px] tracking-[-0.2px] w-[192px]">Medium</p>
      <p className="leading-[32px] relative shrink-0 text-[#707070] text-[20px] tracking-[-0.2px] w-[192px]">32px</p>
      <p className="leading-[32px] relative shrink-0 text-[#707070] text-[20px] tracking-[-0.2px] w-[192px]">40px</p>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex font-['Rubik:Medium',sans-serif] font-medium gap-[32px] items-center leading-[32px] relative shrink-0 text-[20px] tracking-[-0.2px] w-full" data-name="row">
      <p className="relative shrink-0 text-[#121212] w-[192px]">Header 3</p>
      <p className="relative shrink-0 text-[#707070] w-[192px]">Medium</p>
      <p className="relative shrink-0 text-[#707070] w-[192px]">20px</p>
      <p className="relative shrink-0 text-[#707070] w-[192px]">32px</p>
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex font-['Rubik:Medium',sans-serif] font-medium gap-[32px] items-center relative shrink-0 w-full" data-name="row">
      <p className="leading-[24px] relative shrink-0 text-[#121212] text-[16px] w-[192px]">Header 4</p>
      <p className="leading-[32px] relative shrink-0 text-[#707070] text-[20px] tracking-[-0.2px] w-[192px]">Medium</p>
      <p className="leading-[32px] relative shrink-0 text-[#707070] text-[20px] tracking-[-0.2px] w-[192px]">16px</p>
      <p className="leading-[32px] relative shrink-0 text-[#707070] text-[20px] tracking-[-0.2px] w-[192px]">24px</p>
    </div>
  );
}

function Row5() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full" data-name="row">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#121212] text-[16px] w-[192px]">Body</p>
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#707070] text-[20px] tracking-[-0.2px] w-[192px]">Regular</p>
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#707070] text-[20px] tracking-[-0.2px] w-[192px]">16px</p>
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#707070] text-[20px] tracking-[-0.2px] w-[192px]">24px</p>
    </div>
  );
}

function Row6() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full" data-name="row">
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#121212] text-[14px] w-[192px]">Header 5</p>
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#707070] text-[20px] tracking-[-0.2px] w-[192px]">Regular</p>
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#707070] text-[20px] tracking-[-0.2px] w-[192px]">14px</p>
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#707070] text-[20px] tracking-[-0.2px] w-[192px]">16px</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] items-start left-[512px] top-[268px]">
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
      <Row5 />
      <Row6 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute bg-[#343a6f] content-stretch flex items-center justify-between left-1/2 px-[64px] py-[16px] top-0 translate-x-[-50%] w-[1440px]">
      <div className="h-[60px] shrink-0 w-[151px]" data-name="Logo" />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-nowrap text-white">02 | Typography</p>
    </div>
  );
}

function Status() {
  return (
    <div className="absolute content-stretch flex font-['Rubik:Regular',sans-serif] font-normal gap-[8px] items-center leading-[24px] left-[64px] text-[16px] top-[600px] w-[410px]" data-name="Status">
      <p className="basis-0 grow min-h-px min-w-px relative shrink-0 text-[#707070]">Assessment Due Date</p>
      <p className="basis-0 grow min-h-px min-w-px relative shrink-0 text-[#121212]">07/01/25</p>
    </div>
  );
}

function Actions() {
  return (
    <div className="capitalize content-stretch flex font-['Rubik:Regular',sans-serif] font-normal gap-[8px] items-start leading-[16px] relative shrink-0 text-[14px] text-nowrap w-full" data-name="Actions">
      <p className="relative shrink-0 text-[#707070]">Battery Group 3</p>
      <p className="relative shrink-0 text-[#d4d4d4]">|</p>
      <p className="relative shrink-0 text-[#707070]">Grade 9</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[64px] top-[500px] w-[304px]">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[20px] text-nowrap tracking-[-0.2px] w-full">Rubic for Writing Narrative</p>
      <Actions />
    </div>
  );
}

function IconChevronUp2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-chevron-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-chevron-up">
          <path d={svgPaths.p3d3c8c00} fill="var(--fill-0, #121212)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame33() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
      <IconChevronUp2 />
      <p className="basis-0 font-['Rubik:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-nowrap">edify District</p>
    </div>
  );
}

function IconChevronDown3() {
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

function TextField16() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Text Field">
      <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[8px] relative size-full">
          <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] text-nowrap">Select</p>
          <IconChevronDown3 />
        </div>
      </div>
    </div>
  );
}

function Site() {
  return (
    <div className="content-stretch flex gap-[16px] h-[56px] items-center px-0 py-[8px] relative shrink-0 w-[416px]" data-name="site">
      <div aria-hidden="true" className="absolute border-[#d4d4d4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame33 />
      <TextField16 />
    </div>
  );
}

function IconSpacer() {
  return <div className="shrink-0 size-[24px]" data-name="icon-spacer" />;
}

function Name() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Name">
      <IconSpacer />
      <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-nowrap">Elementary School 1</p>
    </div>
  );
}

function IconChevronDown4() {
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

function TextField17() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Text Field">
      <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[8px] relative size-full">
          <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] text-nowrap">Select</p>
          <IconChevronDown4 />
        </div>
      </div>
    </div>
  );
}

function Site1() {
  return (
    <div className="content-stretch flex gap-[16px] h-[56px] items-center px-0 py-[8px] relative shrink-0 w-[416px]" data-name="site">
      <div aria-hidden="true" className="absolute border-[#d4d4d4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Name />
      <TextField17 />
    </div>
  );
}

function IconSpacer1() {
  return <div className="shrink-0 size-[24px]" data-name="icon-spacer" />;
}

function Name1() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Name">
      <IconSpacer1 />
      <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-nowrap">Elementary School 2</p>
    </div>
  );
}

function IconChevronDown5() {
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

function TextField18() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Text Field">
      <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[8px] relative size-full">
          <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] text-nowrap">Select</p>
          <IconChevronDown5 />
        </div>
      </div>
    </div>
  );
}

function Site2() {
  return (
    <div className="content-stretch flex gap-[16px] h-[56px] items-center px-0 py-[8px] relative shrink-0 w-[416px]" data-name="site">
      <div aria-hidden="true" className="absolute border-[#d4d4d4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Name1 />
      <TextField18 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[64px] top-[672px]">
      <Site />
      <Site1 />
      <Site2 />
    </div>
  );
}

function Component02Typography() {
  return (
    <div className="absolute bg-white h-[900px] left-[4488px] overflow-clip top-0 w-[1440px]" data-name="02 | Typography">
      <Row />
      <Frame4 />
      <Frame13 />
      <p className="absolute font-['Rubik:Medium',sans-serif] font-medium leading-[40px] left-[64px] text-[#121212] text-[40px] top-[180px] tracking-[-0.8px] w-[304px]">Rubik</p>
      <a className="[text-underline-position:from-font] absolute block cursor-pointer decoration-solid font-['Rubik:Medium',sans-serif] font-medium leading-[24px] left-[64px] text-[#121212] text-[16px] top-[236px] underline w-[416px]" href="https://fonts.google.com/specimen/Rubik?query=rubik">
        Rubik is a Google Font that can be found here.
      </a>
      <p className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[24px] left-[64px] text-[#121212] text-[16px] top-[276px] w-[416px]">For many elements, text included, you can use color to help distinguish between Primary, Secondary, Active, and Inactive elements. This is a flexible system that could change based on context, but in most instances, you should use Primary color to lead the eye to where it should go first and use Secondary color on the supplementary elements. Here are a few examples:</p>
      <Status />
      <Frame34 />
      <Frame35 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute bg-[#343a6f] content-stretch flex items-center justify-between left-1/2 px-[64px] py-[16px] top-0 translate-x-[-50%] w-[1440px]">
      <div className="h-[60px] shrink-0 w-[151px]" data-name="Logo" />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-nowrap text-white">01 | Color</p>
    </div>
  );
}

function Description() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">History Primary</p>
      <p className="relative shrink-0 text-[#707070] w-full">#EC5E74</p>
    </div>
  );
}

function Swatch() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#ec5e74] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description />
    </div>
  );
}

function Description1() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">History Background</p>
      <p className="relative shrink-0 text-[#707070] w-full">#FCE1E5</p>
    </div>
  );
}

function Swatch1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#fce1e5] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description1 />
    </div>
  );
}

function Description2() {
  return (
    <div className="content-stretch flex flex-col font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="font-['Rubik:Medium',sans-serif] relative shrink-0 text-[#121212] w-full">History Gradient</p>
      <p className="font-['Rubik:Medium','Noto_Sans:Medium',sans-serif] relative shrink-0 text-[#707070] w-full">#FCE1E5 → #FFFFFF</p>
    </div>
  );
}

function Swatch2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-gradient-to-b from-[#fce1e5] h-[120px] rounded-[16px] to-[#ffffff] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description2 />
    </div>
  );
}

function Description3() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">Math Primary</p>
      <p className="relative shrink-0 text-[#707070] w-full">#03B0E8</p>
    </div>
  );
}

function Swatch3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#03b0e8] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description3 />
    </div>
  );
}

function Description4() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">Math Background</p>
      <p className="relative shrink-0 text-[#707070] w-full">#D2F2FC</p>
    </div>
  );
}

function Swatch4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#d2f2fc] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description4 />
    </div>
  );
}

function Description5() {
  return (
    <div className="content-stretch flex flex-col font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="font-['Rubik:Medium',sans-serif] relative shrink-0 text-[#121212] w-full">Math Gradient</p>
      <p className="font-['Rubik:Medium','Noto_Sans:Medium',sans-serif] relative shrink-0 text-[#707070] w-full">#D2F2FC → #FFFFFF</p>
    </div>
  );
}

function Swatch5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-gradient-to-b from-[#d2f2fc] h-[120px] rounded-[16px] to-[#ffffff] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description5 />
    </div>
  );
}

function Description6() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">Reading Primary</p>
      <p className="relative shrink-0 text-[#707070] w-full">#EB8900</p>
    </div>
  );
}

function Swatch6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#eb8900] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description6 />
    </div>
  );
}

function Description7() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">Reading Background</p>
      <p className="relative shrink-0 text-[#707070] w-full">#FCECD4</p>
    </div>
  );
}

function Swatch7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#fcecd4] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description7 />
    </div>
  );
}

function Description8() {
  return (
    <div className="content-stretch flex flex-col font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="font-['Rubik:Medium',sans-serif] relative shrink-0 text-[#121212] w-full">Reading Gradient</p>
      <p className="font-['Rubik:Medium','Noto_Sans:Medium',sans-serif] relative shrink-0 text-[#707070] w-full">#FCECD4 → #FFFFFF</p>
    </div>
  );
}

function Swatch8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-gradient-to-b from-[#fcecd4] h-[120px] rounded-[16px] to-[#ffffff] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description8 />
    </div>
  );
}

function Description9() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">Science Primary</p>
      <p className="relative shrink-0 text-[#707070] w-full">#9266E5</p>
    </div>
  );
}

function Swatch9() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#9266e5] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description9 />
    </div>
  );
}

function Description10() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">Sciencet Background</p>
      <p className="relative shrink-0 text-[#707070] w-full">#ECE3FC</p>
    </div>
  );
}

function Swatch10() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#ece3fc] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description10 />
    </div>
  );
}

function Description11() {
  return (
    <div className="content-stretch flex flex-col font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="font-['Rubik:Medium',sans-serif] relative shrink-0 text-[#121212] w-full">Science Gradient</p>
      <p className="font-['Rubik:Medium','Noto_Sans:Medium',sans-serif] relative shrink-0 text-[#707070] w-full">#ECE3FC → #FFFFFF</p>
    </div>
  );
}

function Swatch11() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-gradient-to-b from-[#ece3fc] h-[120px] rounded-[16px] to-[#ffffff] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description11 />
    </div>
  );
}

function Description12() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">Career Tech Primary</p>
      <p className="relative shrink-0 text-[#707070] w-full">#7579B8</p>
    </div>
  );
}

function Swatch12() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#7579b8] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description12 />
    </div>
  );
}

function Description13() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">Career Tech Background</p>
      <p className="relative shrink-0 text-[#707070] w-full">#DFE1F5</p>
    </div>
  );
}

function Swatch13() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#dfe1f5] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description13 />
    </div>
  );
}

function Description14() {
  return (
    <div className="content-stretch flex flex-col font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="font-['Rubik:Medium',sans-serif] relative shrink-0 text-[#121212] w-full">Career Tech Gradient</p>
      <p className="font-['Rubik:Medium','Noto_Sans:Medium',sans-serif] relative shrink-0 text-[#707070] w-full">#DFE1F5 → #FFFFFF</p>
    </div>
  );
}

function Swatch14() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-gradient-to-b from-[#dfe1f5] h-[120px] rounded-[16px] to-[#ffffff] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description14 />
    </div>
  );
}

function Description15() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[#707070] text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 w-full">Other Primary</p>
      <p className="relative shrink-0 w-full">#F2CC05</p>
    </div>
  );
}

function Swatch15() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#f2cc05] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description15 />
    </div>
  );
}

function Description16() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">Other Background</p>
      <p className="relative shrink-0 text-[#707070] w-full">#FCF5CC</p>
    </div>
  );
}

function Swatch16() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#fcf5cc] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description16 />
    </div>
  );
}

function Description17() {
  return (
    <div className="content-stretch flex flex-col font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="font-['Rubik:Medium',sans-serif] relative shrink-0 text-[#121212] w-full">Other Gradient</p>
      <p className="font-['Rubik:Medium','Noto_Sans:Medium',sans-serif] relative shrink-0 text-[#707070] w-full">#FCF5CC → #FFFFFF</p>
    </div>
  );
}

function Swatch17() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-gradient-to-b from-[#fcf5cc] h-[120px] rounded-[16px] to-[#ffffff] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description17 />
    </div>
  );
}

function SwatchRow() {
  return (
    <div className="content-center flex flex-wrap gap-[32px] items-center relative shrink-0 w-full" data-name="Swatch Row">
      <Swatch />
      <Swatch1 />
      <Swatch2 />
      <Swatch3 />
      <Swatch4 />
      <Swatch5 />
      <Swatch6 />
      <Swatch7 />
      <Swatch8 />
      <Swatch9 />
      <Swatch10 />
      <Swatch11 />
      <Swatch12 />
      <Swatch13 />
      <Swatch14 />
      <Swatch15 />
      <Swatch16 />
      <Swatch17 />
    </div>
  );
}

function SwatchCategory() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[28px] items-start left-[64px] top-[1038px] w-[1312px]" data-name="Swatch Category">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[40px] relative shrink-0 text-[#707070] text-[32px] w-full">Subjects</p>
      <SwatchRow />
    </div>
  );
}

function Description18() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">{` 90-100`}</p>
      <p className="relative shrink-0 text-[#707070] w-full">#1565C0</p>
    </div>
  );
}

function Swatch18() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#1565c0] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description18 />
    </div>
  );
}

function Description19() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">{` 80-89`}</p>
      <p className="relative shrink-0 text-[#2a692d] w-full">#388E3C</p>
    </div>
  );
}

function Swatch19() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#2a692d] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description19 />
    </div>
  );
}

function Description20() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">{` 60-79`}</p>
      <p className="relative shrink-0 text-[#707070] w-full">#5F1980</p>
    </div>
  );
}

function Swatch20() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#5f1980] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description20 />
    </div>
  );
}

function Description21() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">40-59</p>
      <p className="relative shrink-0 text-[#707070] w-full">#F64C13</p>
    </div>
  );
}

function Swatch21() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#d93c08] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description21 />
    </div>
  );
}

function Description22() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">{` <40`}</p>
      <p className="relative shrink-0 text-[#707070] w-full">#F41F1F</p>
    </div>
  );
}

function Swatch22() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#b40808] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description22 />
    </div>
  );
}

function SwatchRow1() {
  return (
    <div className="content-center flex flex-wrap gap-[32px] items-center relative shrink-0 w-full" data-name="Swatch Row">
      <Swatch18 />
      <Swatch19 />
      <Swatch20 />
      <Swatch21 />
      <Swatch22 />
    </div>
  );
}

function SwatchCategory1() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-[1312px]" data-name="Swatch Category">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[40px] relative shrink-0 text-[#707070] text-[32px] w-full">{`Performance Band `}</p>
      <SwatchRow1 />
    </div>
  );
}

function SwatchRow2() {
  return (
    <div className="bg-white content-center flex flex-wrap gap-[32px] items-center relative shrink-0 w-full" data-name="Swatch Row">
      <SwatchCategory1 />
    </div>
  );
}

function Description23() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">Primary</p>
      <p className="relative shrink-0 text-[#707070] w-full">#121212</p>
    </div>
  );
}

function Swatch23() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#121212] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description23 />
    </div>
  );
}

function Description24() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">Secondary</p>
      <p className="relative shrink-0 text-[#707070] w-full">#8A8A8A</p>
    </div>
  );
}

function Swatch24() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#707070] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description24 />
    </div>
  );
}

function Description25() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">Divider</p>
      <p className="relative shrink-0 text-[#707070] w-full">#D4D4D4</p>
    </div>
  );
}

function Swatch25() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#d4d4d4] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description25 />
    </div>
  );
}

function Description26() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">Background</p>
      <p className="relative shrink-0 text-[#707070] w-full">#F7F7F7</p>
    </div>
  );
}

function Swatch26() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#f7f7f7] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description26 />
    </div>
  );
}

function Description27() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">White</p>
      <p className="relative shrink-0 text-[#707070] w-full">#FFFFFF</p>
    </div>
  );
}

function Swatch27() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-white h-[120px] relative rounded-[16px] w-full" data-name="Swatch">
            <div aria-hidden="true" className="absolute border border-[#121212] border-solid inset-0 pointer-events-none rounded-[16px]" />
          </div>
        </div>
      </div>
      <Description27 />
    </div>
  );
}

function SwatchRow3() {
  return (
    <div className="content-center flex flex-wrap gap-[32px] items-center relative shrink-0 w-full" data-name="Swatch Row">
      <Swatch23 />
      <Swatch24 />
      <Swatch25 />
      <Swatch26 />
      <Swatch27 />
    </div>
  );
}

function SwatchCategory2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[28px] items-start left-[64px] top-[476px] w-[1312px]" data-name="Swatch Category">
      <SwatchRow2 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[40px] relative shrink-0 text-[#707070] text-[32px] w-full">Neutral</p>
      <SwatchRow3 />
    </div>
  );
}

function Description28() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">Primary</p>
      <p className="relative shrink-0 text-[#707070] w-full">#343A6F</p>
    </div>
  );
}

function Swatch28() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#343a6f] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description28 />
    </div>
  );
}

function Description29() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">Secondary</p>
      <p className="relative shrink-0 text-[#707070] w-full">#C4C8E1</p>
    </div>
  );
}

function Swatch29() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#c4c8e1] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description29 />
    </div>
  );
}

function Swatch30() {
  return <div className="h-[48px] shrink-0 w-[192px]" data-name="Swatch" />;
}

function SwatchRow4() {
  return (
    <div className="content-center flex flex-wrap gap-[32px] items-center relative shrink-0 w-full" data-name="Swatch Row">
      <Swatch28 />
      <Swatch29 />
      <Swatch30 />
    </div>
  );
}

function SwatchCategory3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[28px] items-start left-[64px] top-[180px] w-[1312px]" data-name="Swatch Category">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[40px] relative shrink-0 text-[#707070] text-[32px] w-full">{`Primary `}</p>
      <SwatchRow4 />
    </div>
  );
}

function Description30() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">Primary / Assigned</p>
      <p className="relative shrink-0 text-[#707070] w-full">#343A6F</p>
    </div>
  );
}

function Swatch31() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#343a6f] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description30 />
    </div>
  );
}

function Description31() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">In Progress</p>
      <p className="relative shrink-0 text-[#707070] w-full">#5779C9</p>
    </div>
  );
}

function Swatch32() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="h-[120px] rounded-[16px] w-full" data-name="Swatch" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(87, 121, 201) 0%, rgb(87, 121, 201) 100%)" }} />
        </div>
      </div>
      <Description31 />
    </div>
  );
}

function Description32() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">Completed</p>
      <p className="relative shrink-0 text-[#707070] w-full">#55822B</p>
    </div>
  );
}

function Swatch33() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#55822b] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description32 />
    </div>
  );
}

function Description33() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">Error/Warning</p>
      <p className="relative shrink-0 text-[#707070] w-full">#C62828</p>
    </div>
  );
}

function Swatch34() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#c62828] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description33 />
    </div>
  );
}

function SwatchRow5() {
  return (
    <div className="content-center flex flex-wrap gap-[32px] items-center relative shrink-0 w-full" data-name="Swatch Row">
      <Swatch31 />
      <Swatch32 />
      <Swatch33 />
      <Swatch34 />
    </div>
  );
}

function SwatchCategory4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[28px] items-start left-[64px] top-[1766px] w-[1312px]" data-name="Swatch Category">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[40px] relative shrink-0 text-[#707070] text-[32px] w-full">Status Indicators</p>
      <SwatchRow5 />
    </div>
  );
}

function SwatchCategory5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[64px] top-[180px] w-[1312px]" data-name="Swatch Category">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[40px] relative shrink-0 text-[#707070] text-[32px] w-full">{`Primary `}</p>
    </div>
  );
}

function NumberContainer() {
  return (
    <div className="bg-[#381fd1] content-stretch flex h-[20px] items-center justify-center min-h-[20px] min-w-[20px] overflow-clip p-[6px] relative rounded-bl-[4px] rounded-tl-[4px] shrink-0" data-name="Number Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#fcfcfc] text-[12px] text-center text-nowrap">
        <p className="leading-[normal]">#1</p>
      </div>
    </div>
  );
}

function StatusIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Status Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Status Icon">
          <path d={svgPaths.p1cca5100} id="Vector" stroke="var(--stroke-0, #381FD1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Badge() {
  return (
    <div className="[grid-area:1_/_1] bg-[#fcfcfc] h-[24px] min-h-[24px] min-w-[24px] ml-0 mt-0 relative rounded-[6px]" data-name="Badge">
      <div className="content-stretch flex gap-[4px] h-full items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip pl-[2px] pr-[4px] py-0 relative rounded-[inherit]">
        <NumberContainer />
        <StatusIcon />
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#381fd1] text-[12px] text-center text-nowrap">
          <p className="leading-[normal]">Written</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#fcfcfc] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_0px_2px_1px_rgba(0,0,0,0.06),0px_2px_8px_1px_rgba(0,0,0,0.08)]" />
    </div>
  );
}

function AltText() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Alt-Text">
      <Badge />
    </div>
  );
}

function LogoId() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[52px] top-[4px]" data-name="Logo (ID: 10015:86743)">
      <AltText />
    </div>
  );
}

function StarkAnnotationsId() {
  return (
    <div className="absolute h-[1967px] left-0 top-0 w-[1440px]" data-name="Stark Annotations (ID: 10015:86705)">
      <LogoId />
    </div>
  );
}

function Component01Color() {
  return (
    <div className="absolute bg-white h-[2250px] left-[2992px] overflow-clip top-0 w-[1440px]" data-name="01 | Color">
      <Frame14 />
      <SwatchCategory />
      <SwatchCategory2 />
      <SwatchCategory3 />
      <SwatchCategory4 />
      <SwatchCategory5 />
      <StarkAnnotationsId />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute bg-[#343a6f] content-stretch flex items-center justify-between left-1/2 px-[64px] py-[16px] top-0 translate-x-[-50%] w-[1440px]">
      <div className="h-[60px] shrink-0 w-[151px]" data-name="Logo" />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-nowrap text-white">Table of Contents</p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium gap-[32px] items-start leading-[0] left-[64px] text-[#121212] text-[64px] text-nowrap top-1/2 tracking-[-1.28px] translate-y-[-50%] w-[640px]">
      <p className="leading-none relative shrink-0">
        <span className="text-[#707070]">{`01 `}</span>| Color
      </p>
      <p className="leading-none relative shrink-0">
        <span className="text-[#707070]">{`02 `}</span>| Typography
      </p>
      <p className="leading-none relative shrink-0">
        <span className="text-[#707070]">03</span>
        <span>{` | Iconography`}</span>
      </p>
      <p className="leading-none relative shrink-0">
        <span className="text-[#707070]">04</span>
        <span>{` | Spacing`}</span>
      </p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium gap-[32px] items-start leading-[0] left-[736px] text-[#121212] text-[64px] text-nowrap top-[calc(50%-48px)] tracking-[-1.28px] translate-y-[-50%] w-[640px]">
      <p className="leading-none relative shrink-0">
        <span className="text-[#707070]">05</span>
        <span>{` | Text Fields`}</span>
      </p>
      <p className="leading-none relative shrink-0">
        <span className="text-[#707070]">06</span>
        <span>{` | Selectors`}</span>
      </p>
      <p className="leading-none relative shrink-0">
        <span className="text-[#707070]">07</span>
        <span>{` | Buttons`}</span>
      </p>
    </div>
  );
}

function TableOfContents() {
  return (
    <div className="absolute bg-white h-[900px] left-[1496px] overflow-clip top-0 w-[1440px]" data-name="Table of Contents">
      <Frame15 />
      <Frame39 />
      <Frame37 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute bg-[#343a6f] bottom-0 content-stretch flex font-['Rubik:Medium',sans-serif] font-medium items-center justify-between leading-[24px] left-1/2 pb-[48px] pt-0 px-[64px] text-[16px] text-nowrap text-white translate-x-[-50%] w-[1440px]">
      <p className="relative shrink-0">Schema Design</p>
      <p className="relative shrink-0">August 2024</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute bg-[#343a6f] content-stretch flex items-center justify-between left-1/2 pb-0 pt-[48px] px-[64px] top-0 translate-x-[-50%] w-[1440px]">
      <div className="h-[60px] shrink-0 w-[151px]" data-name="Logo" />
    </div>
  );
}

function Cover() {
  return (
    <div className="absolute bg-[#343a6f] h-[900px] left-0 overflow-clip top-0 w-[1440px]" data-name="Cover">
      <p className="absolute font-['Rubik:Medium',sans-serif] font-medium leading-none left-[64px] text-[168px] text-nowrap text-white top-[220px] tracking-[-3.36px]">Style Guide</p>
      <div className="absolute h-0 left-1/2 top-[796px] translate-x-[-50%] w-[1312px]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1312 1">
            <path d="M0 0.5H1312" id="Vector 1" stroke="var(--stroke-0, white)" />
          </svg>
        </div>
      </div>
      <Frame16 />
      <Frame17 />
    </div>
  );
}

function Action() {
  return (
    <div className="absolute bg-[#f7f7f7] content-stretch flex flex-col items-start left-[12939px] px-[12px] py-[8px] rounded-[24px] top-[1009px] w-[68px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#343a6f] text-[14px] text-center w-full">Assign</p>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-gradient-to-b from-[#dcf0c0] relative shrink-0 to-[#ffffff] w-full" data-name="header">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-0 pt-[24px] px-[24px] relative w-full">
          <p className="basis-0 font-['Rubik:Medium',sans-serif] font-medium grow leading-[32px] min-h-[72px] min-w-px relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px]">Gafney Grade 8</p>
        </div>
      </div>
    </div>
  );
}

function Status1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Status">
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] min-w-full relative shrink-0 text-[#707070] text-[14px] w-[min-content]">Grade</p>
      <div className="content-stretch flex gap-[4px] items-center relative rounded-[4px] shrink-0 w-[178px]" data-name="Subject">
        <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">Math 8, English 5</p>
      </div>
    </div>
  );
}

function Status2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Status">
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] min-w-full relative shrink-0 text-[#707070] text-[14px] w-[min-content]">Courses</p>
      <div className="content-stretch flex gap-[4px] items-center relative rounded-[4px] shrink-0 w-[178px]" data-name="Subject">
        <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">Eight</p>
      </div>
    </div>
  );
}

function AssessmentDetails() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Assessment Details">
      <Status1 />
      <Status2 />
    </div>
  );
}

function PrimaryActions() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Primary Actions">
      <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[57px]" data-name="Action">
        <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#343a6f] text-[14px] text-center w-full">View</p>
      </div>
      <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[52px]" data-name="Action">
        <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#343a6f] text-[14px] text-center w-full">Edit</p>
      </div>
    </div>
  );
}

function Actions1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Actions">
      <PrimaryActions />
      <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[8px] py-[4px] relative shrink-0" data-name="Favorite">
        <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-nowrap">Favorite</p>
      </div>
    </div>
  );
}

function ActionsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Actions Container">
      <div className="h-0 relative shrink-0 w-full" data-name="divider">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 368 1">
            <path d="M0 0.5H368" id="divider" stroke="var(--stroke-0, #D4D4D4)" />
          </svg>
        </div>
      </div>
      <Actions1 />
    </div>
  );
}

function Body() {
  return (
    <div className="relative shrink-0 w-full" data-name="body">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
          <AssessmentDetails />
          <ActionsContainer />
        </div>
      </div>
    </div>
  );
}

export default function Frame38() {
  return (
    <div className="relative size-full">
      <Outro />
      <Component06Selectors />
      <Component07Buttons />
      <Component05TextFields />
      <Component04Spacing />
      <Component03Iconography />
      <Component02Typography />
      <Component01Color />
      <TableOfContents />
      <Cover />
      <Action />
      <div className="absolute bg-white left-[11616px] rounded-[8px] top-[1380px] w-[416px]" data-name="Class Card">
        <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
          <Header />
          <Body />
        </div>
        <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_3px_1px_rgba(0,0,0,0.15)]" />
      </div>
    </div>
  );
}