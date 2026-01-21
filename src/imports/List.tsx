import svgPaths from "./svg-ynj8to6q44";

function Group4() {
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

function SubjectIcon() {
  return (
    <div className="overflow-clip relative rounded-[8px] shrink-0 size-[56px]" data-name="Subject Icon">
      <Group4 />
    </div>
  );
}

function PrimaryContainer() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-0 py-[8px] relative shrink-0" data-name="Primary Container">
      <div aria-hidden="true" className="absolute border-[#f7f7f7] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <SubjectIcon />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px] w-[296px]">History Assessment</p>
    </div>
  );
}

function ProgressBarLinear() {
  return (
    <div className="bg-[#c4c8e1] h-[8px] overflow-clip relative rounded-[32px] shrink-0 w-[120px]" data-name="Progress Bar / Linear">
      <div className="absolute bg-[#343a6f] h-[8px] left-0 rounded-[100px] top-0 w-[96px]" />
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] w-[48px]">28/32</p>
      <ProgressBarLinear />
    </div>
  );
}

function Column1() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">Grade 10</p>
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">Battery Group 1</p>
    </div>
  );
}

function Column3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">01-July-2025</p>
    </div>
  );
}

function Column4() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">Sumin Chou</p>
    </div>
  );
}

function ColumnsContainer() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Columns container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[24px] py-0 relative w-full">
          <Column />
          <Column1 />
          <Column2 />
          <Column3 />
          <Column4 />
        </div>
      </div>
    </div>
  );
}

function Secondary() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px overflow-x-auto overflow-y-clip px-0 py-[12px] relative shrink-0" data-name="Secondary">
      <ColumnsContainer />
    </div>
  );
}

function Action() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[71px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#343a6f] text-[14px] text-nowrap">Assign</p>
    </div>
  );
}

function Action1() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[52px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#343a6f] text-[14px] text-nowrap">Edit</p>
    </div>
  );
}

function Action2() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[81px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#343a6f] text-[14px] text-nowrap">Favorite</p>
    </div>
  );
}

function Controls() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center px-[8px] py-[16px] relative shrink-0" data-name="Controls">
      <div aria-hidden="true" className="absolute border-[#f7f7f7] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Action />
      <Action1 />
      <Action2 />
    </div>
  );
}

function AssessmentTableRow() {
  return (
    <div className="absolute bg-white h-[72px] left-[3px] top-0 w-[1312px]" data-name="Assessment Table Row">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <PrimaryContainer />
        <Secondary />
        <Controls />
      </div>
      <div aria-hidden="true" className="absolute border-[#d4d4d4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
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

function Group3() {
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

function Group5() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-[#03b0e8] bottom-0 right-0 size-[18px]" />
      <div className="absolute bg-[#03b0e8] left-0 size-[18px] top-0" />
      <Group />
      <Group2 />
      <Group1 />
      <Group3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute left-1/2 rounded-[2px] size-[36px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <div aria-hidden="true" className="absolute border-2 border-[#03b0e8] border-solid inset-[-2px] pointer-events-none rounded-[4px]" />
      <Group5 />
    </div>
  );
}

function IconContainer() {
  return (
    <div className="absolute left-1/2 overflow-clip rounded-[2.5px] size-[50px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="icon container">
      <Frame />
    </div>
  );
}

function SubjectIcon1() {
  return (
    <div className="overflow-clip relative rounded-[8px] shrink-0 size-[56px]" data-name="Subject Icon">
      <IconContainer />
    </div>
  );
}

function PrimaryContainer1() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-0 py-[8px] relative shrink-0" data-name="Primary Container">
      <div aria-hidden="true" className="absolute border-[#f7f7f7] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <SubjectIcon1 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px] w-[296px]">Math Assessment</p>
    </div>
  );
}

function ProgressBarLinear1() {
  return (
    <div className="bg-[#c4c8e1] h-[8px] overflow-clip relative rounded-[32px] shrink-0 w-[120px]" data-name="Progress Bar / Linear">
      <div className="absolute bg-[#343a6f] h-[8px] left-0 rounded-[100px] top-0 w-[24px]" />
    </div>
  );
}

function Column5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">4/30</p>
      <ProgressBarLinear1 />
    </div>
  );
}

function Column6() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">Grade 10</p>
    </div>
  );
}

function Column7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">Battery Group 2</p>
    </div>
  );
}

function Column8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">01-July-2025</p>
    </div>
  );
}

function Column9() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">Ryan Hobbs</p>
    </div>
  );
}

function ColumnsContainer1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Columns container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[24px] py-0 relative w-full">
          <Column5 />
          <Column6 />
          <Column7 />
          <Column8 />
          <Column9 />
        </div>
      </div>
    </div>
  );
}

function Secondary1() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px overflow-x-auto overflow-y-clip px-0 py-[12px] relative shrink-0" data-name="Secondary">
      <ColumnsContainer1 />
    </div>
  );
}

function Action3() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[71px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#343a6f] text-[14px] text-nowrap">Assign</p>
    </div>
  );
}

function Action4() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[52px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#343a6f] text-[14px] text-nowrap">Edit</p>
    </div>
  );
}

function Action5() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[81px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#343a6f] text-[14px] text-nowrap">Favorite</p>
    </div>
  );
}

function Controls1() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center px-[8px] py-[16px] relative shrink-0" data-name="Controls">
      <div aria-hidden="true" className="absolute border-[#f7f7f7] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Action3 />
      <Action4 />
      <Action5 />
    </div>
  );
}

function AssessmentTableRow1() {
  return (
    <div className="absolute bg-white h-[72px] left-0 top-[85px] w-[1312px]" data-name="Assessment Table Row">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <PrimaryContainer1 />
        <Secondary1 />
        <Controls1 />
      </div>
      <div aria-hidden="true" className="absolute border-[#d4d4d4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SubjectIcon2() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="Subject Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <g id="Subject Icon">
          <path clipRule="evenodd" d={svgPaths.p3bf6cd00} fill="var(--fill-0, #EB8900)" fillRule="evenodd" id="Union" />
          <path d={svgPaths.p2534e00} fill="var(--fill-0, #EB8900)" id="Vector 3 (Stroke)" />
          <path d={svgPaths.p4d80800} fill="var(--fill-0, #EB8900)" id="Vector 4 (Stroke)" />
          <path d={svgPaths.p13c2af00} fill="var(--fill-0, #EB8900)" id="Vector 5 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function PrimaryContainer2() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-0 py-[8px] relative shrink-0" data-name="Primary Container">
      <div aria-hidden="true" className="absolute border-[#f7f7f7] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <SubjectIcon2 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px] w-[296px]">Reading Assessment</p>
    </div>
  );
}

function ProgressBarLinear2() {
  return (
    <div className="bg-[#c4c8e1] h-[8px] overflow-clip relative rounded-[32px] shrink-0 w-[120px]" data-name="Progress Bar / Linear">
      <div className="absolute bg-[#343a6f] h-[8px] left-0 rounded-[100px] top-0 w-[48px]" />
    </div>
  );
}

function Column10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">9/28</p>
      <ProgressBarLinear2 />
    </div>
  );
}

function Column11() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">Grade 9</p>
    </div>
  );
}

function Column12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">Battery Group 3</p>
    </div>
  );
}

function Column13() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">01-July-2025</p>
    </div>
  );
}

function Column14() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">Rebecca Ojala</p>
    </div>
  );
}

function ColumnsContainer2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Columns container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[24px] py-0 relative w-full">
          <Column10 />
          <Column11 />
          <Column12 />
          <Column13 />
          <Column14 />
        </div>
      </div>
    </div>
  );
}

function Secondary2() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px overflow-x-auto overflow-y-clip px-0 py-[12px] relative shrink-0" data-name="Secondary">
      <ColumnsContainer2 />
    </div>
  );
}

function Action6() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[71px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#343a6f] text-[14px] text-nowrap">Assign</p>
    </div>
  );
}

function Action7() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[52px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#343a6f] text-[14px] text-nowrap">Edit</p>
    </div>
  );
}

function Action8() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[81px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#343a6f] text-[14px] text-nowrap">Favorite</p>
    </div>
  );
}

function Controls2() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center px-[8px] py-[16px] relative shrink-0" data-name="Controls">
      <div aria-hidden="true" className="absolute border-[#f7f7f7] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Action6 />
      <Action7 />
      <Action8 />
    </div>
  );
}

function AssessmentTableRow2() {
  return (
    <div className="absolute bg-white left-0 top-[170px] w-[1312px]" data-name="Assessment Table Row">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] w-full">
        <PrimaryContainer2 />
        <Secondary2 />
        <div className="flex flex-row items-center self-stretch">
          <Controls2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#d4d4d4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
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

function SubjectIcon3() {
  return (
    <div className="overflow-clip relative rounded-[8px] shrink-0 size-[56px]" data-name="Subject Icon">
      <IconContainer1 />
    </div>
  );
}

function PrimaryContainer3() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-0 py-[8px] relative shrink-0" data-name="Primary Container">
      <div aria-hidden="true" className="absolute border-[#f7f7f7] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <SubjectIcon3 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px] w-[296px]">Science Assessment</p>
    </div>
  );
}

function ProgressBarLinear3() {
  return (
    <div className="bg-[#c4c8e1] h-[8px] overflow-clip relative rounded-[32px] shrink-0 w-[120px]" data-name="Progress Bar / Linear">
      <div className="absolute bg-[#343a6f] h-[8px] left-0 rounded-[100px] top-0 w-[72px]" />
    </div>
  );
}

function Column15() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">20/30</p>
      <ProgressBarLinear3 />
    </div>
  );
}

function Column16() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">Grade 5</p>
    </div>
  );
}

function Column17() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">Battery Group 4</p>
    </div>
  );
}

function Column18() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">01-July-2025</p>
    </div>
  );
}

function Column19() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">Jon Brundage</p>
    </div>
  );
}

function ColumnsContainer3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Columns container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[24px] py-0 relative w-full">
          <Column15 />
          <Column16 />
          <Column17 />
          <Column18 />
          <Column19 />
        </div>
      </div>
    </div>
  );
}

function Secondary3() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px overflow-x-auto overflow-y-clip px-0 py-[12px] relative shrink-0" data-name="Secondary">
      <ColumnsContainer3 />
    </div>
  );
}

function Action9() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[71px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#343a6f] text-[14px] text-nowrap">Assign</p>
    </div>
  );
}

function Action10() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[52px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#343a6f] text-[14px] text-nowrap">Edit</p>
    </div>
  );
}

function Action11() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[81px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#343a6f] text-[14px] text-nowrap">Favorite</p>
    </div>
  );
}

function Controls3() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center px-[8px] py-[16px] relative shrink-0" data-name="Controls">
      <div aria-hidden="true" className="absolute border-[#f7f7f7] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Action9 />
      <Action10 />
      <Action11 />
    </div>
  );
}

function AssessmentTableRow3() {
  return (
    <div className="absolute bg-white h-[72px] left-0 top-[255px] w-[1312px]" data-name="Assessment Table Row">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <PrimaryContainer3 />
        <Secondary3 />
        <Controls3 />
      </div>
      <div aria-hidden="true" className="absolute border-[#d4d4d4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Group6() {
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

function SubjectIcon4() {
  return (
    <div className="overflow-clip relative rounded-[8px] shrink-0 size-[56px]" data-name="Subject Icon">
      <Group6 />
      <div className="absolute h-[6px] left-[8px] top-[30px] w-[40px]" data-name="Subtract">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 6">
          <path d={svgPaths.p1a8673f0} fill="var(--fill-0, #6970B2)" id="Subtract" />
        </svg>
      </div>
    </div>
  );
}

function PrimaryContainer4() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-0 py-[8px] relative shrink-0" data-name="Primary Container">
      <div aria-hidden="true" className="absolute border-[#f7f7f7] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <SubjectIcon4 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px] w-[296px]">Career/Tech Assessment</p>
    </div>
  );
}

function ProgressBarLinear4() {
  return (
    <div className="bg-[#c4c8e1] h-[8px] overflow-clip relative rounded-[32px] shrink-0 w-[120px]" data-name="Progress Bar / Linear">
      <div className="absolute bg-[#343a6f] h-[8px] left-0 rounded-[100px] top-0 w-[24px]" />
    </div>
  );
}

function Column20() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">5/27</p>
      <ProgressBarLinear4 />
    </div>
  );
}

function Column21() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">Grade 11</p>
    </div>
  );
}

function Column22() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">Battery Group 1</p>
    </div>
  );
}

function Column23() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">01-July-2025</p>
    </div>
  );
}

function Column24() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">Ryan Hobbs</p>
    </div>
  );
}

function ColumnsContainer4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Columns container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[24px] py-0 relative w-full">
          <Column20 />
          <Column21 />
          <Column22 />
          <Column23 />
          <Column24 />
        </div>
      </div>
    </div>
  );
}

function Secondary4() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px overflow-x-auto overflow-y-clip px-0 py-[12px] relative shrink-0" data-name="Secondary">
      <ColumnsContainer4 />
    </div>
  );
}

function Action12() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[71px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#343a6f] text-[14px] text-nowrap">Assign</p>
    </div>
  );
}

function Action13() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[52px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#343a6f] text-[14px] text-nowrap">Edit</p>
    </div>
  );
}

function Action14() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[81px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#343a6f] text-[14px] text-nowrap">Favorite</p>
    </div>
  );
}

function Controls4() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center px-[8px] py-[16px] relative shrink-0" data-name="Controls">
      <div aria-hidden="true" className="absolute border-[#f7f7f7] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Action12 />
      <Action13 />
      <Action14 />
    </div>
  );
}

function AssessmentTableRow4() {
  return (
    <div className="absolute bg-white h-[72px] left-0 top-[340px] w-[1312px]" data-name="Assessment Table Row">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <PrimaryContainer4 />
        <Secondary4 />
        <Controls4 />
      </div>
      <div aria-hidden="true" className="absolute border-[#d4d4d4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SubjectIcon5() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="Subject Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <g id="Subject Icon">
          <path d={svgPaths.p32dc9180} id="Union" stroke="var(--stroke-0, #F2CC05)" strokeWidth="2" />
          <path d="M14 24H42" id="Vector 58" stroke="var(--stroke-0, #F2CC05)" strokeLinecap="round" strokeWidth="2" />
          <path d="M14 29H42" id="Vector 59" stroke="var(--stroke-0, #F2CC05)" strokeLinecap="round" strokeWidth="2" />
          <path d="M14 34H30" id="Vector 60" stroke="var(--stroke-0, #F2CC05)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function PrimaryContainer5() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-0 py-[8px] relative shrink-0" data-name="Primary Container">
      <div aria-hidden="true" className="absolute border-[#f7f7f7] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <SubjectIcon5 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px] w-[296px]">Other Assessment</p>
    </div>
  );
}

function ProgressBarLinear5() {
  return (
    <div className="bg-[#c4c8e1] h-[8px] overflow-clip relative rounded-[32px] shrink-0 w-[120px]" data-name="Progress Bar / Linear">
      <div className="absolute bg-[#343a6f] h-[8px] left-0 rounded-[100px] top-0 w-[48px]" />
    </div>
  );
}

function Column25() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">7/28</p>
      <ProgressBarLinear5 />
    </div>
  );
}

function Column26() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">Grade 8</p>
    </div>
  );
}

function Column27() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">Battery Group 3</p>
    </div>
  );
}

function Column28() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">01-July-2025</p>
    </div>
  );
}

function Column29() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">Rebecca Ojala</p>
    </div>
  );
}

function ColumnsContainer5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Columns container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[24px] py-0 relative w-full">
          <Column25 />
          <Column26 />
          <Column27 />
          <Column28 />
          <Column29 />
        </div>
      </div>
    </div>
  );
}

function Secondary5() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px overflow-x-auto overflow-y-clip px-0 py-[12px] relative shrink-0" data-name="Secondary">
      <ColumnsContainer5 />
    </div>
  );
}

function Action15() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[71px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#343a6f] text-[14px] text-nowrap">Assign</p>
    </div>
  );
}

function Action16() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[52px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#343a6f] text-[14px] text-nowrap">Edit</p>
    </div>
  );
}

function Action17() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[81px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#343a6f] text-[14px] text-nowrap">Favorite</p>
    </div>
  );
}

function Controls5() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center px-[8px] py-[16px] relative shrink-0" data-name="Controls">
      <div aria-hidden="true" className="absolute border-[#f7f7f7] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Action15 />
      <Action16 />
      <Action17 />
    </div>
  );
}

function AssessmentTableRow5() {
  return (
    <div className="absolute bg-white h-[72px] left-0 top-[425px] w-[1312px]" data-name="Assessment Table Row">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <PrimaryContainer5 />
        <Secondary5 />
        <Controls5 />
      </div>
      <div aria-hidden="true" className="absolute border-[#d4d4d4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

export default function List() {
  return (
    <div className="relative size-full" data-name="list">
      <AssessmentTableRow />
      <AssessmentTableRow1 />
      <AssessmentTableRow2 />
      <AssessmentTableRow3 />
      <AssessmentTableRow4 />
      <AssessmentTableRow5 />
    </div>
  );
}