import svgPaths from "./svg-ik5lgpuwcg";

function IconExternalLink() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-external-link">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-external-link">
          <g id="Shape">
            <path d={svgPaths.p38913800} fill="#343A6F" />
            <path d={svgPaths.p1d8cb100} fill="#343A6F" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Header">
      <IconExternalLink />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[40px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[32px] text-nowrap">Export</p>
    </div>
  );
}

function IconX() {
  return (
    <button className="block cursor-pointer relative shrink-0 size-[24px]" data-name="icon-x">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-x">
          <path d={svgPaths.p2f9c6900} fill="var(--fill-0, #121212)" id="Shape" />
        </g>
      </svg>
    </button>
  );
}

function HeaderRow() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header Row">
      <Header />
      <IconX />
    </div>
  );
}

function Header1() {
  return (
    <div className="bg-white relative shrink-0 w-full z-[2]" data-name="Header">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[32px] px-[32px] relative w-full">
          <HeaderRow />
          <div className="h-0 relative shrink-0 w-full" data-name="divider">
            <div className="absolute inset-[-0.5px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 584 1">
                <path d="M0 0.5H584" id="divider" stroke="var(--stroke-0, #D4D4D4)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
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

function Frame() {
  return (
    <div className="absolute bg-[#343a6f] left-[2px] overflow-clip rounded-[3px] size-[20px] top-[2px]">
      <IconsCheck />
    </div>
  );
}

function CheckboxBase() {
  return (
    <div className="relative rounded-[3px] shrink-0 size-[24px]" data-name="_Checkbox Base">
      <Frame />
    </div>
  );
}

function ProjectFolderCard() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Project Folder Card">
      <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[16px] relative w-full">
          <CheckboxBase />
          <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#333] text-[16px] text-nowrap">CSV</p>
        </div>
      </div>
    </div>
  );
}

function Rectangle() {
  return <div className="absolute bg-white border-2 border-[#707070] border-solid inset-[8.33%] rounded-[3px]" />;
}

function CheckboxBase1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="_Checkbox Base">
      <Rectangle />
    </div>
  );
}

function ProjectFolderCard1() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Project Folder Card">
      <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[16px] relative w-full">
          <CheckboxBase1 />
          <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#333] text-[16px] text-nowrap">EXCEL</p>
        </div>
      </div>
    </div>
  );
}

function AccordianMenu() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Accordian Menu">
      <ProjectFolderCard />
      <ProjectFolderCard1 />
    </div>
  );
}

function ButtonConcept() {
  return (
    <div className="bg-[#343a6f] min-h-[40px] min-w-[40px] relative rounded-[100px] shrink-0 w-full" data-name="Button _Concept 2">
      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[16px] py-[12px] relative w-full">
          <p className="basis-0 font-['Rubik:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white">Download</p>
        </div>
      </div>
    </div>
  );
}

function BodyContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative shrink-0 w-[648px] z-[1]" data-name="Body Container">
      <AccordianMenu />
      <ButtonConcept />
    </div>
  );
}

export default function ClassDownloadModal() {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-start overflow-clip relative rounded-[8px] size-full" data-name="Class Download Modal">
      <Header1 />
      <BodyContainer />
    </div>
  );
}