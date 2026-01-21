import svgPaths from "./svg-as83rsmc00";
import imgBrandLogo from "figma:asset/9ab59f47957b436f3532fe8fda05e18d75720f61.png";
import imgImage30 from "figma:asset/1c762085a46f3b552e1614982d930587eb9639ed.png";

function BrandLogo() {
  return (
    <div className="h-[59.603px] relative shrink-0 w-[150px]" data-name="Brand / Logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[106.67%] left-[-4.64%] max-w-none top-[-4.32%] w-[200.74%]" src={imgBrandLogo} />
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <BrandLogo />
    </div>
  );
}

function TabBase() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative shrink-0" data-name="_Tab Base">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-center text-nowrap text-white">Home</p>
    </div>
  );
}

function TabBase1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative shrink-0" data-name="_Tab Base">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-center text-nowrap text-white">Assessments</p>
    </div>
  );
}

function TabBase2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative shrink-0" data-name="_Tab Base">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-center text-nowrap text-white">Reports</p>
    </div>
  );
}

function TabBase3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative shrink-0" data-name="_Tab Base">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-center text-nowrap text-white">Classes</p>
    </div>
  );
}

function TabBase4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative shrink-0" data-name="_Tab Base">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-center text-nowrap text-white">Accounts</p>
    </div>
  );
}

function TabBar() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Bar">
      <TabBase />
      <TabBase1 />
      <TabBase2 />
      <TabBase3 />
      <TabBase4 />
    </div>
  );
}

function RoleInfo() {
  return (
    <div className="content-stretch flex font-['Rubik:Regular',sans-serif] font-normal gap-[2px] items-start leading-none relative shrink-0 text-[12px] text-nowrap text-white tracking-[0.24px] uppercase" data-name="Role Info">
      <p className="relative shrink-0">Admin</p>
      <p className="relative shrink-0">|</p>
      <p className="relative shrink-0">edify district</p>
    </div>
  );
}

function AccountInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Account Info">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.48px]">Anderson, Hunter</p>
      <RoleInfo />
    </div>
  );
}

function ProfilePicture() {
  return (
    <div className="absolute h-[39.999px] left-0 overflow-clip rounded-[71.427px] top-0 w-[40px]" data-name="Profile Picture">
      <div className="absolute h-[39.999px] left-0 top-0 w-[40px]" data-name="image 30">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[171.47%] left-[-7.14%] max-w-none top-[-21.04%] w-[114.29%]" src={imgImage30} />
        </div>
      </div>
    </div>
  );
}

function ProfilePicture1() {
  return (
    <div className="relative rounded-[1000px] shrink-0 size-[40px]" data-name="Profile Picture">
      <ProfilePicture />
      <div className="absolute left-[28px] size-[12px] top-0" data-name="Notification Dot">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <circle cx="8" cy="8" fill="var(--fill-0, #E54742)" id="Notification Dot" r="7" stroke="var(--stroke-0, #343A6F)" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AccountInfoContainer() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0" data-name="Account Info Container">
      <AccountInfo />
      <ProfilePicture1 />
    </div>
  );
}

function HeaderPrimaryNavigationDefault() {
  return (
    <div className="bg-[#343a6f] content-stretch flex gap-[60px] items-center px-[64px] py-[16px] relative shrink-0 w-[1440px]" data-name="Header_PrimaryNavigation_Default">
      <Frame16 />
      <TabBar />
      <AccountInfoContainer />
    </div>
  );
}

function ButtonConcept() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center justify-center min-h-[40px] min-w-[40px] px-[16px] py-[12px] relative rounded-[100px] shrink-0" data-name="Button _Concept 2">
      <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[16px] text-center">Your Assessments</p>
    </div>
  );
}

function ButtonConcept4() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center justify-center min-h-[40px] min-w-[40px] px-[16px] py-[12px] relative rounded-[100px] shrink-0" data-name="Button _Concept 2">
      <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[16px] text-center">Assigned</p>
    </div>
  );
}

function ButtonConcept3() {
  return (
    <div className="bg-[#343a6f] content-stretch flex gap-[4px] items-center justify-center min-h-[40px] min-w-[40px] px-[16px] py-[12px] relative rounded-[100px] shrink-0" data-name="Button _Concept 5">
      <p className="basis-0 font-['Rubik:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white">All Assessments</p>
    </div>
  );
}

function ButtonConcept5() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center justify-center min-h-[40px] min-w-[40px] px-[16px] py-[12px] relative rounded-[100px] shrink-0" data-name="Button _Concept 2">
      <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[16px] text-center">Favorited</p>
    </div>
  );
}

function FilterRow() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Filter Row">
      <ButtonConcept />
      <ButtonConcept4 />
      <ButtonConcept3 />
      <ButtonConcept5 />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="header">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[40px] relative shrink-0 text-[#121212] text-[32px] text-nowrap">Assessments</p>
      <FilterRow />
    </div>
  );
}

function ParentContainer() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center pb-[24px] pt-[32px] px-[64px] relative shrink-0 w-[1440px]" data-name="Parent Container">
      <div aria-hidden="true" className="absolute border-[#d4d4d4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Header />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start shrink-0 sticky top-0 w-full z-[3]">
      <HeaderPrimaryNavigationDefault />
      <ParentContainer />
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
    <div className="bg-white content-stretch flex gap-[8px] items-center min-h-[40px] px-[24px] py-[12px] relative rounded-[100px] shrink-0 w-[417px]" data-name="TextInput / Search">
      <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <IconLeft />
      <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[16px]">Search</p>
    </div>
  );
}

function SearchContainer() {
  return (
    <div className="basis-0 content-stretch flex gap-[24px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Search Container">
      <TextInputSearch />
    </div>
  );
}

function IconRight() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon Right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon Right">
          <path d={svgPaths.pac700} fill="var(--fill-0, #707070)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function ButtonConcept2() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center justify-center min-h-[40px] min-w-[40px] px-[16px] py-[12px] relative rounded-[100px] shrink-0" data-name="Button _Concept 4">
      <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[16px] text-center">Sort by:</p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-center text-nowrap">Most Recent</p>
      <IconRight />
    </div>
  );
}

function IconRight1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon Right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon Right">
          <path d={svgPaths.pac700} fill="var(--fill-0, #707070)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function ButtonConcept6() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center justify-center min-h-[40px] min-w-[40px] px-[16px] py-[12px] relative rounded-[100px] shrink-0" data-name="Button _Concept 2">
      <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[16px] text-center">Items Per Page:</p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-center text-nowrap">12</p>
      <IconRight1 />
    </div>
  );
}

function IconLeft1() {
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

function ButtonConcept7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[40px] px-[16px] py-[12px] relative rounded-[100px] shrink-0" data-name="Button _Concept 2">
      <IconLeft1 />
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-center text-nowrap">Grid</p>
    </div>
  );
}

function IconLeft2() {
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

function ButtonConcept1() {
  return (
    <div className="bg-[#343a6f] content-stretch flex gap-[4px] items-center justify-center min-h-[40px] min-w-[40px] px-[16px] py-[12px] relative rounded-[100px] shrink-0" data-name="Button _Concept 3">
      <IconLeft2 />
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-center text-nowrap text-white">List</p>
    </div>
  );
}

function ToggleViewMode() {
  return (
    <div className="bg-white content-stretch flex items-center relative rounded-[40px] shrink-0" data-name="Toggle / View Mode">
      <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[40px]" />
      <ButtonConcept7 />
      <ButtonConcept1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <ButtonConcept2 />
      <ButtonConcept6 />
      <ToggleViewMode />
    </div>
  );
}

function FilterRow1() {
  return (
    <div className="content-stretch flex gap-[480px] h-[48px] items-center min-w-[1312px] relative shrink-0 w-[1312px]" data-name="Filter_Row">
      <SearchContainer />
      <Frame2 />
    </div>
  );
}

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

function Frame6() {
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
      <Frame6 />
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

function Frame4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[20px] text-nowrap tracking-[-0.2px] w-full">Math Assessment</p>
      <Actions />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <SubjectIcon />
      <Frame4 />
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
    <div className="bg-white relative rounded-[8px] shrink-0 w-[416px]" data-name="Assessment Card">
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[24px] relative rounded-[inherit] w-full">
        <Frame5 />
        <Body />
        <ActionsContainer />
        <div className="absolute bg-[#03b0e8] bottom-0 h-[8px] left-px right-[-1px]" data-name="Divider/Math" />
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

function SubjectIcon1() {
  return (
    <div className="overflow-clip relative rounded-[8px] shrink-0 size-[56px]" data-name="Subject Icon">
      <IconContainer1 />
    </div>
  );
}

function Actions2() {
  return (
    <div className="capitalize content-stretch flex font-['Rubik:Regular',sans-serif] font-normal gap-[8px] items-start leading-[16px] relative shrink-0 text-[14px] text-nowrap w-full" data-name="Actions">
      <p className="relative shrink-0 text-[#707070]">Battery Group 4</p>
      <p className="relative shrink-0 text-[#d4d4d4]">|</p>
      <p className="relative shrink-0 text-[#707070]">Grade 5</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px] w-full">Science Assessment</p>
      <Actions2 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <SubjectIcon1 />
      <Frame7 />
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
      <div className="absolute bg-[#343a6f] h-[8px] left-0 rounded-[100px] top-0 w-[96px]" />
    </div>
  );
}

function Status3() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center justify-end min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Status">
      <ProgressBarLinear1 />
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-right w-[48px]">20/30</p>
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
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="body">
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
    <div className="bg-white h-[244px] relative rounded-[8px] shrink-0 w-[416px]" data-name="Assessment Card">
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[24px] relative rounded-[inherit] size-full">
        <Frame8 />
        <Body1 />
        <ActionsContainer1 />
        <div className="absolute bg-[#9266e5] bottom-0 h-[8px] left-px right-[-1px]" data-name="Divider/Science" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[8px]" />
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

function Actions4() {
  return (
    <div className="capitalize content-stretch flex font-['Rubik:Regular',sans-serif] font-normal gap-[8px] items-start leading-[16px] relative shrink-0 text-[14px] text-nowrap w-full" data-name="Actions">
      <p className="relative shrink-0 text-[#707070]">Battery Group 3</p>
      <p className="relative shrink-0 text-[#d4d4d4]">|</p>
      <p className="relative shrink-0 text-[#707070]">Grade 9</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[20px] text-nowrap tracking-[-0.2px] w-full">Reading Assessment</p>
      <Actions4 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <SubjectIcon2 />
      <Frame9 />
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
      <div className="absolute bg-[#343a6f] h-[8px] left-0 rounded-[100px] top-0 w-[48px]" />
    </div>
  );
}

function Status6() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center justify-end min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Status">
      <ProgressBarLinear2 />
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-right w-[48px]">9/28</p>
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
      <p className="basis-0 grow min-h-px min-w-px relative shrink-0 text-[#707070]">Assessment Due Date</p>
      <p className="basis-0 grow min-h-px min-w-px relative shrink-0 text-[#121212] text-right">01-July-2025</p>
    </div>
  );
}

function Body2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="body">
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
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Actions Container">
      <Actions5 />
    </div>
  );
}

function AssessmentCard2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-[416px]" data-name="Assessment Card">
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[24px] relative rounded-[inherit] w-full">
        <Frame10 />
        <Body2 />
        <ActionsContainer2 />
        <div className="absolute bg-[#eb8900] bottom-0 h-[8px] left-px right-[-1px]" data-name="Divider/Reading" />
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

function SubjectIcon3() {
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

function Actions6() {
  return (
    <div className="capitalize content-stretch flex font-['Rubik:Regular',sans-serif] font-normal gap-[8px] items-start leading-[16px] relative shrink-0 text-[14px] text-nowrap w-full" data-name="Actions">
      <p className="relative shrink-0 text-[#707070]">Battery Group 4</p>
      <p className="relative shrink-0 text-[#d4d4d4]">|</p>
      <p className="relative shrink-0 text-[#707070]">Grade 5</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px] w-full">Career/Tech Assessment</p>
      <Actions6 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <SubjectIcon3 />
      <Frame11 />
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

function Body3() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="body">
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
    <div className="bg-white relative rounded-[8px] shrink-0 w-[416px]" data-name="Assessment Card">
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[24px] relative rounded-[inherit] w-full">
        <Frame12 />
        <Body3 />
        <ActionsContainer3 />
        <div className="absolute bg-[#7579b8] bottom-0 h-[8px] left-px right-[-1px]" data-name="Divider/Career/Tech" />
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

function SubjectIcon4() {
  return (
    <div className="overflow-clip relative rounded-[8px] shrink-0 size-[56px]" data-name="Subject Icon">
      <Group4 />
    </div>
  );
}

function Actions8() {
  return (
    <div className="capitalize content-stretch flex font-['Rubik:Regular',sans-serif] font-normal gap-[8px] items-start leading-[16px] relative shrink-0 text-[14px] text-nowrap w-full" data-name="Actions">
      <p className="relative shrink-0 text-[#707070]">Battery Group 1</p>
      <p className="relative shrink-0 text-[#d4d4d4]">|</p>
      <p className="relative shrink-0 text-[#707070]">Grade 10</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px] w-full">History Assessment</p>
      <Actions8 />
    </div>
  );
}

function HeaderContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-[368px]" data-name="header container">
      <SubjectIcon4 />
      <Frame13 />
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
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-right w-[48px]">28/32</p>
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
      <p className="relative shrink-0 text-[#707070] w-[234px]">Assessment Due Date</p>
      <p className="basis-0 grow min-h-px min-w-px relative shrink-0 text-[#121212] text-right">01-July-2025</p>
    </div>
  );
}

function BodyContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[368px]" data-name="body container">
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
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[368px]" data-name="Actions Container">
      <Actions9 />
    </div>
  );
}

function AssessmentCard4() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0" data-name="Assessment Card">
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[24px] relative rounded-[inherit]">
        <HeaderContainer />
        <BodyContainer />
        <ActionsContainer4 />
        <div className="absolute bg-[#ec5e74] bottom-0 h-[8px] left-px right-[-1px]" data-name="Divider/History" />
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

function Frame14() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px] w-full">Other Assessment</p>
      <Actions10 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-[368px]">
      <SubjectIcon5 />
      <Frame14 />
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
    <div className="bg-white relative rounded-[8px] shrink-0" data-name="Assessment Card">
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[24px] relative rounded-[inherit]">
        <Frame15 />
        <Body4 />
        <ActionsContainer5 />
        <div className="absolute bg-[#f2cc05] bottom-0 h-[8px] left-px right-[-1px]" data-name="Divider/Other" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function SectionGrid() {
  return (
    <div className="content-start flex flex-wrap gap-[32px] items-start relative shrink-0 w-full" data-name="Section Grid">
      <AssessmentCard />
      <AssessmentCard1 />
      <AssessmentCard2 />
      <AssessmentCard3 />
      <AssessmentCard4 />
      <AssessmentCard5 />
      <AssessmentCard2 />
      <AssessmentCard1 />
      <AssessmentCard />
      <AssessmentCard />
      <AssessmentCard2 />
      <AssessmentCard2 />
      <AssessmentCard4 />
      <AssessmentCard1 />
      <AssessmentCard />
      <AssessmentCard1 />
      <AssessmentCard2 />
      <AssessmentCard5 />
      <AssessmentCard2 />
      <AssessmentCard2 />
      <AssessmentCard4 />
    </div>
  );
}

function CardGrid() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Card Grid">
      <SectionGrid />
    </div>
  );
}

function SectionContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center justify-center pb-[128px] pt-[40px] px-[64px] relative shrink-0 w-[1440px] z-[2]" data-name="Section Container">
      <FilterRow1 />
      <CardGrid />
    </div>
  );
}

function BrandLogo1() {
  return (
    <div className="h-[59.603px] relative shrink-0 w-[150px]" data-name="Brand / Logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[106.67%] left-[-4.64%] max-w-none top-[-4.32%] w-[200.74%]" src={imgBrandLogo} />
      </div>
    </div>
  );
}

function TabBase5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative shrink-0" data-name="_Tab Base">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-center text-nowrap text-white">Contact</p>
    </div>
  );
}

function TabBase6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative shrink-0" data-name="_Tab Base">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-center text-nowrap text-white">Safe Exam Browser</p>
    </div>
  );
}

function TabBase7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative shrink-0" data-name="_Tab Base">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-center text-nowrap text-white">Respondus Browser</p>
    </div>
  );
}

function TabBase8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative shrink-0" data-name="_Tab Base">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-center text-nowrap text-white">Support</p>
    </div>
  );
}

function TabBar1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Tab Bar">
      <TabBase5 />
      <TabBase6 />
      <TabBase7 />
      <TabBase8 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <BrandLogo1 />
      <TabBar1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.5px_-0.04%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1278 1">
            <path d="M0.5 0.5H1277.5" id="Vector 4" stroke="var(--stroke-0, white)" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-white w-full">Terms | Copyright © 2025</p>
    </div>
  );
}

function LayoutFooter() {
  return (
    <div className="bg-[#343a6f] content-stretch flex flex-col h-[200px] items-start justify-between overflow-clip px-[60px] py-[20px] relative shrink-0 w-[1397px] z-[1]" data-name="Layout / Footer">
      <Frame3 />
      <Frame />
    </div>
  );
}

export default function AllAssessmentsDefault() {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-start relative size-full" data-name="All Assessments - Default">
      <Frame1 />
      <SectionContainer />
      <LayoutFooter />
    </div>
  );
}