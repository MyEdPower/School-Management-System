import svgPaths from "./svg-24xy9qqrmn";
import imgLogo from "figma:asset/9ab59f47957b436f3532fe8fda05e18d75720f61.png";

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

function Frame() {
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

function Frame1() {
  return (
    <div className="absolute bg-[#343a6f] content-stretch flex items-center justify-between left-1/2 px-[64px] py-[16px] top-0 translate-x-[-50%] w-[1440px]">
      <div className="h-[60px] relative shrink-0 w-[151px]" data-name="Logo">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[106.67%] left-[-4.64%] max-w-none top-[-4.32%] w-[200.74%]" src={imgLogo} />
        </div>
      </div>
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

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[64px] top-[500px] w-[304px]">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[20px] text-nowrap tracking-[-0.2px] w-full">Rubic for Writing Narrative</p>
      <Actions />
    </div>
  );
}

function IconChevronUp() {
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

function Frame2() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
      <IconChevronUp />
      <p className="basis-0 font-['Rubik:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-nowrap">edify District</p>
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
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Text Field">
      <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[8px] relative size-full">
          <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] text-nowrap">Select</p>
          <IconChevronDown />
        </div>
      </div>
    </div>
  );
}

function Site() {
  return (
    <div className="content-stretch flex gap-[16px] h-[56px] items-center px-0 py-[8px] relative shrink-0 w-[416px]" data-name="site">
      <div aria-hidden="true" className="absolute border-[#d4d4d4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame2 />
      <TextField />
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

function TextField1() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Text Field">
      <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[8px] relative size-full">
          <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] text-nowrap">Select</p>
          <IconChevronDown1 />
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
      <TextField1 />
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

function TextField2() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Text Field">
      <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[8px] relative size-full">
          <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] text-nowrap">Select</p>
          <IconChevronDown2 />
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
      <TextField2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[64px] top-[672px]">
      <Site />
      <Site1 />
      <Site2 />
    </div>
  );
}

export default function Component02Typography() {
  return (
    <div className="bg-white relative size-full" data-name="02 | Typography">
      <Row />
      <Frame />
      <Frame1 />
      <p className="absolute font-['Rubik:Medium',sans-serif] font-medium leading-[40px] left-[64px] text-[#121212] text-[40px] top-[180px] tracking-[-0.8px] w-[304px]">Rubik</p>
      <a className="[text-underline-position:from-font] absolute block cursor-pointer decoration-solid font-['Rubik:Medium',sans-serif] font-medium leading-[24px] left-[64px] text-[#121212] text-[16px] top-[236px] underline w-[416px]" href="https://fonts.google.com/specimen/Rubik?query=rubik">
        Rubik is a Google Font that can be found here.
      </a>
      <p className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[24px] left-[64px] text-[#121212] text-[16px] top-[276px] w-[416px]">For many elements, text included, you can use color to help distinguish between Primary, Secondary, Active, and Inactive elements. This is a flexible system that could change based on context, but in most instances, you should use Primary color to lead the eye to where it should go first and use Secondary color on the supplementary elements. Here are a few examples:</p>
      <Status />
      <Frame3 />
      <Frame4 />
    </div>
  );
}