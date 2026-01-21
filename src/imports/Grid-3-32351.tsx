import svgPaths from "./svg-9vvo9z9st2";

function Group() {
  return (
    <div className="absolute left-[5px] size-[8px] top-[5px]">
      <div className="absolute inset-[-12.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <g id="Group 2">
            <path d="M5 9V1" id="Vector 1" stroke="var(--stroke-0, #D2F2FC)" strokeLinecap="round" strokeWidth="2" />
            <path d="M9 5L1 5" id="Vector 2" stroke="var(--stroke-0, #D2F2FC)" strokeLinecap="round" strokeWidth="2" />
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
            <path d="M9 5L1 5" id="Vector 2" stroke="var(--stroke-0, #D2F2FC)" strokeLinecap="round" strokeWidth="2" />
            <circle cx="5" cy="1.5" fill="var(--fill-0, #D2F2FC)" id="Ellipse 286" r="1.5" />
            <circle cx="5" cy="8.5" fill="var(--fill-0, #D2F2FC)" id="Ellipse 287" r="1.5" />
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

function Frame2() {
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
      <Frame2 />
    </div>
  );
}

function SubjectIcon() {
  return (
    <div className="overflow-clip relative rounded-[8px] shrink-0 size-[56px]" data-name="Subject Icon">
      <IconContainer />
    </div>
  );
}

function Actions() {
  return (
    <div className="capitalize content-stretch flex font-['Rubik:Regular',sans-serif] font-normal gap-[8px] items-start leading-[16px] relative shrink-0 text-[14px] text-nowrap w-full" data-name="Actions">
      <p className="relative shrink-0 text-[#707070]">Battery Group 2</p>
      <p className="relative shrink-0 text-[#d4d4d4]">|</p>
      <p className="relative shrink-0 text-[#707070]">Grade 10</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[20px] text-nowrap tracking-[-0.2px] w-full">Math Assessment</p>
      <Actions />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <SubjectIcon />
      <Frame />
    </div>
  );
}

function Subject() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Subject">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#707070] text-[16px] text-nowrap">Student Progress</p>
    </div>
  );
}

function ProgressBarLinear() {
  return (
    <div className="bg-[#c4c8e1] h-[8px] overflow-clip relative rounded-[32px] shrink-0 w-[120px]" data-name="Progress Bar / Linear">
      <div className="absolute bg-[#343a6f] h-[8px] left-0 rounded-[100px] top-0 w-[24px]" />
    </div>
  );
}

function Status() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center justify-end min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Status">
      <ProgressBarLinear />
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-right w-[48px]">4/30</p>
    </div>
  );
}

function Status1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Status">
      <Subject />
      <Status />
    </div>
  );
}

function Status2() {
  return (
    <div className="content-stretch flex font-['Rubik:Regular',sans-serif] font-normal items-center justify-between leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Status">
      <p className="basis-0 grow min-h-px min-w-px relative shrink-0 text-[#707070]">Assessment Due Date</p>
      <p className="basis-0 grow min-h-px min-w-px relative shrink-0 text-[#121212] text-right">01-July-2025</p>
    </div>
  );
}

function Body() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="body">
      <Status1 />
      <Status2 />
    </div>
  );
}

function Action() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[57px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-nowrap">View</p>
    </div>
  );
}

function Action1() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[71px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-nowrap">Assign</p>
    </div>
  );
}

function Action2() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[52px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-nowrap">Edit</p>
    </div>
  );
}

function PrimaryActions() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Primary Actions">
      <Action />
      <Action1 />
      <Action2 />
    </div>
  );
}

function Action3() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[81px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-nowrap">Favorite</p>
    </div>
  );
}

function Actions1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Actions">
      <PrimaryActions />
      <Action3 />
    </div>
  );
}

function ActionsContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Actions Container">
      <Actions1 />
    </div>
  );
}

function AssessmentCard() {
  return (
    <div className="absolute bg-white left-[432px] rounded-[8px] top-0 w-[416px]" data-name="Assessment Card">
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[24px] relative rounded-[inherit] w-full">
        <Frame1 />
        <Body />
        <ActionsContainer />
        <div className="absolute bg-[#03b0e8] bottom-0 h-[8px] left-px right-[-1px]" data-name="Divider/Math" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function SubjectIcon1() {
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

function Actions2() {
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
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[20px] text-nowrap tracking-[-0.2px] w-full">Reading Assessment</p>
      <Actions2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <SubjectIcon1 />
      <Frame3 />
    </div>
  );
}

function Subject1() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Subject">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#707070] text-[16px] text-nowrap">Student Progress</p>
    </div>
  );
}

function ProgressBarLinear1() {
  return (
    <div className="bg-[#c4c8e1] h-[8px] overflow-clip relative rounded-[32px] shrink-0 w-[120px]" data-name="Progress Bar / Linear">
      <div className="absolute bg-[#343a6f] h-[8px] left-0 rounded-[100px] top-0 w-[48px]" />
    </div>
  );
}

function Status3() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center justify-end min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Status">
      <ProgressBarLinear1 />
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-right w-[48px]">9/28</p>
    </div>
  );
}

function Status4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Status">
      <Subject1 />
      <Status3 />
    </div>
  );
}

function Status5() {
  return (
    <div className="content-stretch flex font-['Rubik:Regular',sans-serif] font-normal items-center justify-between leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Status">
      <p className="basis-0 grow min-h-px min-w-px relative shrink-0 text-[#707070]">Assessment Due Date</p>
      <p className="basis-0 grow min-h-px min-w-px relative shrink-0 text-[#121212] text-right">01-July-2025</p>
    </div>
  );
}

function Body1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="body">
      <Status4 />
      <Status5 />
    </div>
  );
}

function Action4() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[57px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-nowrap">View</p>
    </div>
  );
}

function Action5() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[71px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-nowrap">Assign</p>
    </div>
  );
}

function Action6() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[52px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-nowrap">Edit</p>
    </div>
  );
}

function PrimaryActions1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Primary Actions">
      <Action4 />
      <Action5 />
      <Action6 />
    </div>
  );
}

function Action7() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[81px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-nowrap">Favorite</p>
    </div>
  );
}

function Actions3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Actions">
      <PrimaryActions1 />
      <Action7 />
    </div>
  );
}

function ActionsContainer1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Actions Container">
      <Actions3 />
    </div>
  );
}

function AssessmentCard1() {
  return (
    <div className="absolute bg-white left-[864px] rounded-[8px] top-0 w-[416px]" data-name="Assessment Card">
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[24px] relative rounded-[inherit] w-full">
        <Frame4 />
        <Body1 />
        <ActionsContainer1 />
        <div className="absolute bg-[#eb8900] bottom-0 h-[8px] left-px right-[-1px]" data-name="Divider/Reading" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

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

function SubjectIcon2() {
  return (
    <div className="overflow-clip relative rounded-[8px] shrink-0 size-[56px]" data-name="Subject Icon">
      <Group4 />
    </div>
  );
}

function Actions4() {
  return (
    <div className="capitalize content-stretch flex font-['Rubik:Regular',sans-serif] font-normal gap-[8px] items-start leading-[16px] relative shrink-0 text-[14px] text-nowrap w-full" data-name="Actions">
      <p className="relative shrink-0 text-[#707070]">Battery Group 1</p>
      <p className="relative shrink-0 text-[#d4d4d4]">|</p>
      <p className="relative shrink-0 text-[#707070]">Grade 10</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px] w-full">History Assessment</p>
      <Actions4 />
    </div>
  );
}

function HeaderContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-[368px]" data-name="header container">
      <SubjectIcon2 />
      <Frame5 />
    </div>
  );
}

function Subject2() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Subject">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#707070] text-[16px] text-nowrap">Student Progress</p>
    </div>
  );
}

function ProgressBarLinear2() {
  return (
    <div className="bg-[#c4c8e1] h-[8px] overflow-clip relative rounded-[32px] shrink-0 w-[120px]" data-name="Progress Bar / Linear">
      <div className="absolute bg-[#343a6f] h-[8px] left-0 rounded-[100px] top-0 w-[96px]" />
    </div>
  );
}

function Status6() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center justify-end min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Status">
      <ProgressBarLinear2 />
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-right w-[48px]">28/32</p>
    </div>
  );
}

function Status7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Status">
      <Subject2 />
      <Status6 />
    </div>
  );
}

function Status8() {
  return (
    <div className="content-stretch flex font-['Rubik:Regular',sans-serif] font-normal items-center justify-between leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Status">
      <p className="relative shrink-0 text-[#707070] w-[234px]">Assessment Due Date</p>
      <p className="basis-0 grow min-h-px min-w-px relative shrink-0 text-[#121212] text-right">01-July-2025</p>
    </div>
  );
}

function BodyContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[368px]" data-name="body container">
      <Status7 />
      <Status8 />
    </div>
  );
}

function Action8() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[57px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-nowrap">View</p>
    </div>
  );
}

function Action9() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[71px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-nowrap">Assign</p>
    </div>
  );
}

function Action10() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[52px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-nowrap">Edit</p>
    </div>
  );
}

function PrimaryActions2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Primary Actions">
      <Action8 />
      <Action9 />
      <Action10 />
    </div>
  );
}

function Action11() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[81px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-nowrap">Favorite</p>
    </div>
  );
}

function Actions5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Actions">
      <PrimaryActions2 />
      <Action11 />
    </div>
  );
}

function ActionsContainer2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[368px]" data-name="Actions Container">
      <Actions5 />
    </div>
  );
}

function AssessmentCard2() {
  return (
    <div className="absolute bg-white left-0 rounded-[8px] top-0" data-name="Assessment Card">
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[24px] relative rounded-[inherit]">
        <HeaderContainer />
        <BodyContainer />
        <ActionsContainer2 />
        <div className="absolute bg-[#ec5e74] bottom-0 h-[8px] left-px right-[-1px]" data-name="Divider/History" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[8px]" />
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

function Actions6() {
  return (
    <div className="capitalize content-stretch flex font-['Rubik:Regular',sans-serif] font-normal gap-[8px] items-start leading-[16px] relative shrink-0 text-[14px] text-nowrap w-full" data-name="Actions">
      <p className="relative shrink-0 text-[#707070]">Battery Group 4</p>
      <p className="relative shrink-0 text-[#d4d4d4]">|</p>
      <p className="relative shrink-0 text-[#707070]">Grade 5</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px] w-full">Science Assessment</p>
      <Actions6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <SubjectIcon3 />
      <Frame6 />
    </div>
  );
}

function Subject3() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Subject">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#707070] text-[16px] text-nowrap">Student Progress</p>
    </div>
  );
}

function ProgressBarLinear3() {
  return (
    <div className="bg-[#c4c8e1] h-[8px] overflow-clip relative rounded-[32px] shrink-0 w-[120px]" data-name="Progress Bar / Linear">
      <div className="absolute bg-[#343a6f] h-[8px] left-0 rounded-[100px] top-0 w-[96px]" />
    </div>
  );
}

function Status9() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center justify-end min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Status">
      <ProgressBarLinear3 />
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-right w-[48px]">20/30</p>
    </div>
  );
}

function Status10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Status">
      <Subject3 />
      <Status9 />
    </div>
  );
}

function Status11() {
  return (
    <div className="content-stretch flex font-['Rubik:Regular',sans-serif] font-normal items-center justify-between leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Status">
      <p className="basis-0 grow min-h-px min-w-px relative shrink-0 text-[#707070]">Assessment Due Date</p>
      <p className="basis-0 grow min-h-px min-w-px relative shrink-0 text-[#121212] text-right">01-July-2025</p>
    </div>
  );
}

function Body2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="body">
      <Status10 />
      <Status11 />
    </div>
  );
}

function Action12() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[57px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-nowrap">View</p>
    </div>
  );
}

function Action13() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[71px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-nowrap">Assign</p>
    </div>
  );
}

function Action14() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[52px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-nowrap">Edit</p>
    </div>
  );
}

function PrimaryActions3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Primary Actions">
      <Action12 />
      <Action13 />
      <Action14 />
    </div>
  );
}

function Action15() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[81px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-nowrap">Favorite</p>
    </div>
  );
}

function Actions7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Actions">
      <PrimaryActions3 />
      <Action15 />
    </div>
  );
}

function ActionsContainer3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Actions Container">
      <Actions7 />
    </div>
  );
}

function AssessmentCard3() {
  return (
    <div className="absolute bg-white h-[244px] left-0 rounded-[8px] top-[273px] w-[416px]" data-name="Assessment Card">
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[24px] relative rounded-[inherit] size-full">
        <Frame7 />
        <Body2 />
        <ActionsContainer3 />
        <div className="absolute bg-[#9266e5] bottom-0 h-[8px] left-px right-[-1px]" data-name="Divider/Science" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[8px]" />
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

function Actions8() {
  return (
    <div className="capitalize content-stretch flex font-['Rubik:Regular',sans-serif] font-normal gap-[8px] items-start leading-[16px] relative shrink-0 text-[14px] text-nowrap w-full" data-name="Actions">
      <p className="relative shrink-0 text-[#707070]">Battery Group 4</p>
      <p className="relative shrink-0 text-[#d4d4d4]">|</p>
      <p className="relative shrink-0 text-[#707070]">Grade 5</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px] w-full">Career/Tech Assessment</p>
      <Actions8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <SubjectIcon4 />
      <Frame8 />
    </div>
  );
}

function Subject4() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Subject">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#707070] text-[16px] text-nowrap">Student Progress</p>
    </div>
  );
}

function ProgressBarLinear4() {
  return (
    <div className="bg-[#c4c8e1] h-[8px] overflow-clip relative rounded-[32px] shrink-0 w-[120px]" data-name="Progress Bar / Linear">
      <div className="absolute bg-[#343a6f] h-[8px] left-0 rounded-[100px] top-0 w-[96px]" />
    </div>
  );
}

function Status12() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center justify-end min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Status">
      <ProgressBarLinear4 />
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-right w-[48px]">20/30</p>
    </div>
  );
}

function Status13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Status">
      <Subject4 />
      <Status12 />
    </div>
  );
}

function Status14() {
  return (
    <div className="content-stretch flex font-['Rubik:Regular',sans-serif] font-normal items-center justify-between leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Status">
      <p className="basis-0 grow min-h-px min-w-px relative shrink-0 text-[#707070]">Assessment Due Date</p>
      <p className="basis-0 grow min-h-px min-w-px relative shrink-0 text-[#121212] text-right">01-July-2025</p>
    </div>
  );
}

function Body3() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="body">
      <Status13 />
      <Status14 />
    </div>
  );
}

function Action16() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[57px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-nowrap">View</p>
    </div>
  );
}

function Action17() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[71px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-nowrap">Assign</p>
    </div>
  );
}

function Action18() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[52px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-nowrap">Edit</p>
    </div>
  );
}

function PrimaryActions4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Primary Actions">
      <Action16 />
      <Action17 />
      <Action18 />
    </div>
  );
}

function Action19() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[81px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-nowrap">Favorite</p>
    </div>
  );
}

function Actions9() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Actions">
      <PrimaryActions4 />
      <Action19 />
    </div>
  );
}

function ActionsContainer4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Actions Container">
      <Actions9 />
    </div>
  );
}

function AssessmentCard4() {
  return (
    <div className="absolute bg-white left-[432px] rounded-[8px] top-[273px] w-[416px]" data-name="Assessment Card">
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[24px] relative rounded-[inherit] w-full">
        <Frame9 />
        <Body3 />
        <ActionsContainer4 />
        <div className="absolute bg-[#7579b8] bottom-0 h-[8px] left-px right-[-1px]" data-name="Divider/Career/Tech" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[8px]" />
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

function Actions10() {
  return (
    <div className="capitalize content-stretch flex font-['Rubik:Regular',sans-serif] font-normal gap-[8px] items-start leading-[16px] relative shrink-0 text-[14px] text-nowrap w-full" data-name="Actions">
      <p className="relative shrink-0 text-[#707070]">Battery Group 4</p>
      <p className="relative shrink-0 text-[#d4d4d4]">|</p>
      <p className="relative shrink-0 text-[#707070]">Grade 5</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px] w-full">Other Assessment</p>
      <Actions10 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-[368px]">
      <SubjectIcon5 />
      <Frame10 />
    </div>
  );
}

function Subject5() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Subject">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#707070] text-[16px] text-nowrap">Student Progress</p>
    </div>
  );
}

function ProgressBarLinear5() {
  return (
    <div className="bg-[#c4c8e1] h-[8px] overflow-clip relative rounded-[32px] shrink-0 w-[120px]" data-name="Progress Bar / Linear">
      <div className="absolute bg-[#343a6f] h-[8px] left-0 rounded-[100px] top-0 w-[96px]" />
    </div>
  );
}

function Status15() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center justify-end min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Status">
      <ProgressBarLinear5 />
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-right w-[48px]">20/30</p>
    </div>
  );
}

function Status16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Status">
      <Subject5 />
      <Status15 />
    </div>
  );
}

function Status17() {
  return (
    <div className="content-stretch flex font-['Rubik:Regular',sans-serif] font-normal items-center justify-between leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Status">
      <p className="basis-0 grow min-h-px min-w-px relative shrink-0 text-[#707070]">Assessment Due Date</p>
      <p className="basis-0 grow min-h-px min-w-px relative shrink-0 text-[#121212] text-right">01-July-2025</p>
    </div>
  );
}

function Body4() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[368px]" data-name="body">
      <Status16 />
      <Status17 />
    </div>
  );
}

function Action20() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[57px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-nowrap">View</p>
    </div>
  );
}

function Action21() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[71px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-nowrap">Assign</p>
    </div>
  );
}

function Action22() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[52px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-nowrap">Edit</p>
    </div>
  );
}

function PrimaryActions5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Primary Actions">
      <Action20 />
      <Action21 />
      <Action22 />
    </div>
  );
}

function Action23() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[81px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-nowrap">Favorite</p>
    </div>
  );
}

function Actions11() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Actions">
      <PrimaryActions5 />
      <Action23 />
    </div>
  );
}

function ActionsContainer5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[368px]" data-name="Actions Container">
      <Actions11 />
    </div>
  );
}

function AssessmentCard5() {
  return (
    <div className="absolute bg-white left-[864px] rounded-[8px] top-[273px]" data-name="Assessment Card">
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[24px] relative rounded-[inherit]">
        <Frame11 />
        <Body4 />
        <ActionsContainer5 />
        <div className="absolute bg-[#f2cc05] bottom-0 h-[8px] left-px right-[-1px]" data-name="Divider/Other" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

export default function Grid() {
  return (
    <div className="relative size-full" data-name="grid">
      <AssessmentCard />
      <AssessmentCard1 />
      <AssessmentCard2 />
      <AssessmentCard3 />
      <AssessmentCard4 />
      <AssessmentCard5 />
    </div>
  );
}