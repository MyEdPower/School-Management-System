import svgPaths from "./svg-1vhmhqstzp";
import imgBrandLogo from "figma:asset/9ab59f47957b436f3532fe8fda05e18d75720f61.png";
import imgImage30 from "figma:asset/1c762085a46f3b552e1614982d930587eb9639ed.png";

function BrandLogo() {
  return (
    <div className="h-[60px] relative shrink-0 w-[151px]" data-name="Brand / Logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[106.67%] left-[-4.64%] max-w-none top-[-4.32%] w-[200.74%]" src={imgBrandLogo} />
      </div>
    </div>
  );
}

function TabBaseDark() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative shrink-0" data-name="_Tab Base Dark">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-center text-nowrap text-white">Home</p>
    </div>
  );
}

function TabBaseDark1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative shrink-0" data-name="_Tab Base Dark">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-center text-nowrap text-white">Assessments</p>
    </div>
  );
}

function TabBaseDark2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative shrink-0" data-name="_Tab Base Dark">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-center text-nowrap text-white">Reports</p>
    </div>
  );
}

function TabBaseDark3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative shrink-0" data-name="_Tab Base Dark">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-center text-nowrap text-white">Classes</p>
    </div>
  );
}

function TabBaseDark4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative shrink-0" data-name="_Tab Base Dark">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-center text-nowrap text-white">Accounts</p>
    </div>
  );
}

function TabBar() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Bar">
      <TabBaseDark />
      <TabBaseDark1 />
      <TabBaseDark2 />
      <TabBaseDark3 />
      <TabBaseDark4 />
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
      <BrandLogo />
      <TabBar />
      <AccountInfoContainer />
    </div>
  );
}

function Breadcrumb() {
  return (
    <div className="capitalize content-stretch flex font-['Rubik:Regular',sans-serif] font-normal gap-[12px] items-start leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-nowrap w-full" data-name="Breadcrumb">
      <p className="relative shrink-0">Home</p>
      <p className="relative shrink-0">|</p>
      <p className="relative shrink-0">Reports</p>
      <p className="relative shrink-0">|</p>
      <p className="relative shrink-0">Item Distribution Report</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[40px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[40px] text-nowrap tracking-[-0.8px] w-[715px]">Item Distribution Report</p>
    </div>
  );
}

function PageDetailsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Page Details Container">
      <Breadcrumb />
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1346px]">
      <PageDetailsContainer />
    </div>
  );
}

function SubHeaderNavigationReports() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[157px] items-center justify-center pb-[32px] pt-[24px] px-[64px] relative shrink-0 w-[1440px]" data-name="SubHeader_Navigation_Reports">
      <div aria-hidden="true" className="absolute border-[#d4d4d4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame3 />
    </div>
  );
}

function HeaderComponent() {
  return (
    <div className="content-stretch flex flex-col items-start shrink-0 sticky top-0 w-full z-[4]" data-name="Header Component">
      <HeaderPrimaryNavigationDefault />
      <SubHeaderNavigationReports />
    </div>
  );
}

function Breadcrumb1() {
  return (
    <div className="capitalize content-stretch flex font-['Rubik:Regular',sans-serif] font-normal gap-[12px] items-start leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-nowrap" data-name="Breadcrumb">
      <p className="relative shrink-0">Math</p>
      <p className="relative shrink-0">|</p>
      <p className="relative shrink-0">Math 8</p>
      <p className="relative shrink-0">|</p>
      <p className="relative shrink-0">{`Edify Math 8 Interim  Assessment 1`}</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] min-w-full relative shrink-0 text-[20px] text-black tracking-[-0.2px] w-[min-content]">Report Filters</p>
      <Breadcrumb1 />
    </div>
  );
}

function IconChevronDown() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="icon-chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="icon-chevron-down">
          <path d={svgPaths.pc89a500} fill="var(--fill-0, #8A8A8A)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="size-full">
        <div className="content-stretch flex gap-[16px] items-start px-[12px] py-0 relative w-full">
          <Frame6 />
          <IconChevronDown />
        </div>
      </div>
    </div>
  );
}

function FilterMenuLockedLogic() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-start p-[16px] relative shrink-0 w-[1312px]" data-name="Filter_Menu_LockedLogic">
      <div aria-hidden="true" className="absolute border-[#343a6f] border-[0px_0px_0px_4px] border-solid inset-0 pointer-events-none" />
      <Frame7 />
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Actions">
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#121212] text-[14px] text-nowrap">Edify Math 8 Interim Assessment 1</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col h-[64px] items-start justify-center relative shrink-0 w-[779px]" data-name="Text">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[20px] text-nowrap tracking-[-0.2px]">Mathematics Assessment</p>
      <Actions />
    </div>
  );
}

function IconLeft() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2180_1826)" id="Icon Left">
          <g id="Shape">
            <path d={svgPaths.p38913800} fill="#707070" />
            <path d={svgPaths.p1d8cb100} fill="#707070" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2180_1826">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonConcept() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center min-h-[40px] min-w-[40px] px-[16px] py-[12px] relative rounded-[100px] shrink-0" data-name="Button _Concept 10">
      <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <IconLeft />
      <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[16px] text-center">Export</p>
    </div>
  );
}

function IconRight() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon Right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2180_1867)" id="Icon Right">
          <path clipRule="evenodd" d={svgPaths.p26c8bb40} fill="var(--fill-0, #707070)" fillRule="evenodd" id="Shape" />
        </g>
        <defs>
          <clipPath id="clip0_2180_1867">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonConcept1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center min-h-[40px] min-w-[40px] px-[16px] py-[12px] relative rounded-[100px] shrink-0" data-name="Button _Concept 11">
      <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[16px] text-center">Print</p>
      <IconRight />
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-[514px]" data-name="Button Group">
      <ButtonConcept />
      <ButtonConcept1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center justify-end relative shrink-0 w-[514px]">
      <ButtonGroup />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[10px] h-[76px] items-center px-0 py-[12px] relative shrink-0 w-[1316px]">
      <div className="absolute bg-white h-[64px] left-0 rounded-[8px] top-1/2 translate-y-[-50%] w-[1316px]" data-name="Section Header / Block" />
      <Text />
      <Frame5 />
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section Header">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start pl-0 pr-[10px] py-0 relative w-full">
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#343a6f] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col font-medium gap-[2px] items-center justify-center px-[8px] py-[24px] relative text-center text-white w-full">
          <div className="flex flex-col font-['Rubik:Medium',sans-serif] justify-center leading-[0] min-w-full relative shrink-0 text-[32px] text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[min-content]">
            <p className="leading-[40px]">31</p>
          </div>
          <p className="font-['Roboto:Medium',sans-serif] leading-[24px] relative shrink-0 text-[16px] tracking-[0.15px] w-[360px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            28 assessments scored
          </p>
        </div>
      </div>
    </div>
  );
}

function ScoreBox() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow h-[162px] items-center min-h-px min-w-[360px] relative shadow-[0px_16px_16px_-8px_rgba(12,12,13,0.1),0px_4px_4px_-4px_rgba(12,12,13,0.05)] shrink-0" data-name="Score Box">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#121212] text-[20px] text-center tracking-[-0.2px] w-full">Students Enrolled</p>
      <Frame12 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#343a6f] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col font-medium gap-[2px] items-center justify-center px-[8px] py-[24px] relative text-center text-white w-full">
          <div className="flex flex-col font-['Rubik:Medium',sans-serif] justify-center leading-[0] min-w-full relative shrink-0 text-[32px] text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[min-content]">
            <p className="leading-[40px]">55%</p>
          </div>
          <p className="font-['Roboto:Medium',sans-serif] leading-[24px] relative shrink-0 text-[16px] tracking-[0.15px] w-[360px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Below Proficient
          </p>
        </div>
      </div>
    </div>
  );
}

function ScoreBox1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow h-[162px] items-center min-h-px min-w-[360px] relative shadow-[0px_16px_16px_-8px_rgba(12,12,13,0.1),0px_4px_4px_-4px_rgba(12,12,13,0.05)] shrink-0" data-name="Score Box">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#121212] text-[20px] text-center tracking-[-0.2px] w-full">Class Average</p>
      <Frame13 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#343a6f] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col font-medium gap-[2px] items-center justify-center px-[8px] py-[24px] relative text-center text-white w-full">
          <div className="flex flex-col font-['Rubik:Medium',sans-serif] justify-center leading-[0] min-w-full relative shrink-0 text-[32px] text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[min-content]">
            <p className="leading-[40px]">11</p>
          </div>
          <p className="font-['Roboto:Medium',sans-serif] leading-[24px] relative shrink-0 text-[16px] tracking-[0.15px] w-[360px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Number of Questions
          </p>
        </div>
      </div>
    </div>
  );
}

function ScoreBox2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow h-[162px] items-center min-h-px min-w-[360px] relative shadow-[0px_16px_16px_-8px_rgba(12,12,13,0.1),0px_4px_4px_-4px_rgba(12,12,13,0.05)] shrink-0" data-name="Score Box">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#121212] text-[20px] text-center tracking-[-0.2px] w-full">Questions</p>
      <Frame14 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#f7f7f7] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-center flex flex-wrap gap-[24px] items-center justify-center p-[24px] relative w-full">
          <ScoreBox />
          <ScoreBox1 />
          <ScoreBox2 />
        </div>
      </div>
    </div>
  );
}

function AdvancedIndicator() {
  return <div className="bg-[#36c] rounded-[100px] shrink-0 size-[24px]" data-name="Advanced Indicator" />;
}

function Frame10() {
  return (
    <div className="basis-0 content-center flex flex-wrap gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="flex h-[24.741px] items-center justify-center relative shrink-0 w-[72.141px]" style={{ "--transform-inner-width": "68.484375", "--transform-inner-height": "24" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.592deg]">
          <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative text-[#121212] text-[16px] text-center w-[71.897px]">
            <p className="leading-[24px]">{`90-100% `}</p>
          </div>
        </div>
      </div>
      <div className="flex h-[24.794px] items-center justify-center relative shrink-0 w-[77.244px]" style={{ "--transform-inner-width": "71.15625", "--transform-inner-height": "24" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.592deg]">
          <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative text-[#121212] text-[16px] text-nowrap">
            <p className="leading-[24px]">Advanced</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PerformanceSelection() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[196px]" data-name="Performance Selection">
      <AdvancedIndicator />
      <Frame10 />
    </div>
  );
}

function ComponentContainerProficiencyIndicator() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0" data-name="Component_Container_ProficiencyIndicator">
      <div className="content-stretch flex items-center overflow-clip p-[16px] relative rounded-[inherit]">
        <PerformanceSelection />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function AdvancedIndicator1() {
  return <div className="bg-[#2a692d] rounded-[100px] shrink-0 size-[24px]" data-name="Advanced Indicator" />;
}

function Frame11() {
  return (
    <div className="basis-0 content-center flex flex-wrap gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="flex h-[24.745px] items-center justify-center relative shrink-0 w-[72.53px]" style={{ "--transform-inner-width": "59.59375", "--transform-inner-height": "24" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.592deg]">
          <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative text-[#121212] text-[16px] w-[72.285px]">
            <p className="leading-[24px]">{`80-89% `}</p>
          </div>
        </div>
      </div>
      <div className="flex h-[24.815px] items-center justify-center relative shrink-0 w-[79.26px]" style={{ "--transform-inner-width": "66.6875", "--transform-inner-height": "24" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.592deg]">
          <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative text-[#121212] text-[16px] w-[79.016px]">
            <p className="leading-[24px]">Proficient</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PerformanceSelection1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[196px]" data-name="Performance Selection">
      <AdvancedIndicator1 />
      <Frame11 />
    </div>
  );
}

function ComponentContainerProficiencyIndicator1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0" data-name="Component_Container_ProficiencyIndicator">
      <div className="content-stretch flex items-center overflow-clip p-[16px] relative rounded-[inherit]">
        <PerformanceSelection1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function AdvancedIndicator2() {
  return <div className="bg-[#5f1980] rounded-[100px] shrink-0 size-[24px]" data-name="Advanced Indicator" />;
}

function Frame15() {
  return (
    <div className="basis-0 content-center flex flex-wrap gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="flex h-[24.745px] items-center justify-center relative shrink-0 w-[72.53px]" style={{ "--transform-inner-width": "59.59375", "--transform-inner-height": "24" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.592deg]">
          <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative text-[#121212] text-[16px] w-[72.285px]">
            <p className="leading-[24px]">{`60-79% `}</p>
          </div>
        </div>
      </div>
      <div className="flex h-[24.946px] items-center justify-center relative shrink-0 w-[91.954px]" style={{ "--transform-inner-width": "80.046875", "--transform-inner-height": "24" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.592deg]">
          <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative text-[#121212] text-[16px] w-[91.711px]">
            <p className="leading-[24px]">Developing</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PerformanceSelection2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[205px]" data-name="Performance Selection">
      <AdvancedIndicator2 />
      <Frame15 />
    </div>
  );
}

function ComponentContainerProficiencyIndicator2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-[235px]" data-name="Component_Container_ProficiencyIndicator">
      <div className="content-stretch flex items-center overflow-clip p-[16px] relative rounded-[inherit] w-full">
        <PerformanceSelection2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function AdvancedIndicator3() {
  return <div className="bg-[#d93c08] rounded-[100px] shrink-0 size-[24px]" data-name="Advanced Indicator" />;
}

function Frame16() {
  return (
    <div className="basis-0 content-center flex flex-wrap gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 flex grow h-[24.743px] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "59.59375", "--transform-inner-height": "24" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.592deg] w-full">
          <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative text-[#121212] text-[16px] w-full">
            <p className="leading-[24px]">{`40-59% `}</p>
          </div>
        </div>
      </div>
      <div className="flex h-[24.946px] items-center justify-center relative shrink-0 w-[91.954px]" style={{ "--transform-inner-width": "68.46875", "--transform-inner-height": "24" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.592deg]">
          <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative text-[#121212] text-[16px] w-[91.711px]">
            <p className="leading-[24px]">Emerging</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PerformanceSelection3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[204px]" data-name="Performance Selection">
      <AdvancedIndicator3 />
      <Frame16 />
    </div>
  );
}

function ComponentContainerProficiencyIndicator3() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0" data-name="Component_Container_ProficiencyIndicator">
      <div className="content-stretch flex items-center overflow-clip p-[16px] relative rounded-[inherit]">
        <PerformanceSelection3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function AdvancedIndicator4() {
  return <div className="bg-[#b40808] rounded-[100px] shrink-0 size-[24px]" data-name="Advanced Indicator" />;
}

function Frame17() {
  return (
    <div className="basis-0 content-center flex flex-wrap gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 flex grow h-[25.414px] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "80.046875", "--transform-inner-height": "24" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.592deg] w-full">
          <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative text-[#121212] text-[16px] w-full">
            <p className="leading-[24px]">Below 40%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PerformanceSelection4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[177px]" data-name="Performance Selection">
      <AdvancedIndicator4 />
      <Frame17 />
    </div>
  );
}

function ComponentContainerProficiencyIndicator4() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0" data-name="Component_Container_ProficiencyIndicator">
      <div className="content-stretch flex items-center overflow-clip p-[16px] relative rounded-[inherit]">
        <PerformanceSelection4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function PerformanceBand() {
  return (
    <div className="relative shrink-0 w-full" data-name="Performance Band">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-center flex flex-wrap gap-[24px] items-center justify-center px-[16px] py-[8px] relative w-full">
          <ComponentContainerProficiencyIndicator />
          <ComponentContainerProficiencyIndicator1 />
          <ComponentContainerProficiencyIndicator2 />
          <ComponentContainerProficiencyIndicator3 />
          <ComponentContainerProficiencyIndicator4 />
        </div>
      </div>
    </div>
  );
}

function ContentArea() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[54px] items-start overflow-clip px-[64px] py-[16px] relative shrink-0 w-[1440px] z-[3]" data-name="Content Area">
      <FilterMenuLockedLogic />
      <SectionHeader />
      <Frame8 />
      <PerformanceBand />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[323px]">
      <p className="basis-0 font-['Rubik:Medium',sans-serif] font-medium grow leading-[32px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[20px] text-nowrap tracking-[-0.2px]">Question Performance</p>
    </div>
  );
}

function SubHeaderContainer() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center relative rounded-[8px] shrink-0 w-[1312px]" data-name="SubHeader_Container">
      <Frame9 />
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-nowrap w-[min-content]">Percentage of students who answered each question correctly.</p>
    </div>
  );
}

function TabBase() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[12px] pt-0 px-[4px] relative shrink-0" data-name="_Tab Base">
      <div aria-hidden="true" className="absolute border-[#343a6f] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#343a6f] text-[16px] text-center text-nowrap">Overview</p>
    </div>
  );
}

function TabBase1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[12px] pt-0 px-[4px] relative shrink-0" data-name="_Tab Base">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#707070] text-[16px] text-center text-nowrap">By Question</p>
    </div>
  );
}

function TabBar1() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Tab Bar">
      <div aria-hidden="true" className="absolute border-[#d4d4d4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TabBase />
      <TabBase1 />
    </div>
  );
}

function Name() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Name">
      <p className="basis-0 font-['Rubik:Medium',sans-serif] font-medium grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px]">Question 1</p>
    </div>
  );
}

function StudentName() {
  return (
    <div className="content-stretch flex h-[32px] items-center relative shrink-0 w-full" data-name="Student Name">
      <Name />
    </div>
  );
}

function StandardId() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Standard ID">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">{`Standard: 8.EE  Expressions and Equations`}</p>
    </div>
  );
}

function RowHeaderReports() {
  return (
    <div className="content-stretch flex flex-col h-[64px] items-start justify-center relative shrink-0 w-[424px]" data-name="RowHeader_Reports">
      <StudentName />
      <StandardId />
    </div>
  );
}

function ProgressBarLarge() {
  return <div className="absolute bg-[#c4c8e1] h-[28px] left-0 overflow-clip rounded-[32px] top-0 w-[724px]" data-name="Progress Bar Large" />;
}

function ProgressBarLargeProficient() {
  return (
    <div className="h-[28px] relative shrink-0 w-[548px]" data-name="Progress Bar_Large/Proficient 80-89">
      <div className="absolute bg-[#2a692d] inset-0 rounded-[100px]" />
    </div>
  );
}

function ProgressBarLarge1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[28px] items-start relative shrink-0 w-[724px]" data-name="Progress Bar_Large">
      <ProgressBarLarge />
      <ProgressBarLargeProficient />
    </div>
  );
}

function AdvancedIndicator5() {
  return <div className="bg-[#388e3c] rounded-[100px] shrink-0 size-[24px]" data-name="Advanced Indicator" />;
}

function Container() {
  return (
    <div className="content-stretch flex items-center relative rounded-[100px] shrink-0 size-[24px]" data-name="Container">
      <AdvancedIndicator5 />
    </div>
  );
}

function ColorIndicator() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="ColorIndicator">
      <Container />
    </div>
  );
}

function ProgressRow() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="ProgressRow">
      <div aria-hidden="true" className="absolute border-[#d4d4d4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[8px] py-[24px] relative w-full">
          <RowHeaderReports />
          <ProgressBarLarge1 />
          <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#121212] text-[16px] w-[53px]">82%</p>
          <ColorIndicator />
        </div>
      </div>
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1312px]" data-name="Table">
      <TabBar1 />
      <ProgressRow />
    </div>
  );
}

function Name1() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Name">
      <p className="basis-0 font-['Rubik:Medium',sans-serif] font-medium grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px]">Question 2</p>
    </div>
  );
}

function StudentName1() {
  return (
    <div className="content-stretch flex h-[32px] items-center relative shrink-0 w-full" data-name="Student Name">
      <Name1 />
    </div>
  );
}

function StandardId1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Standard ID">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">{`Standard: 8.EE  Expressions and Equations`}</p>
    </div>
  );
}

function RowHeaderReports1() {
  return (
    <div className="content-stretch flex flex-col h-[64px] items-start justify-center relative shrink-0 w-[424px]" data-name="RowHeader_Reports">
      <StudentName1 />
      <StandardId1 />
    </div>
  );
}

function ProgressBarLarge2() {
  return <div className="absolute bg-[#c4c8e1] h-[28px] left-0 overflow-clip rounded-[32px] top-0 w-[724px]" data-name="Progress Bar Large" />;
}

function ProgressBarLargeDeveloping() {
  return (
    <div className="h-[28px] relative shrink-0 w-[432px]" data-name="Progress Bar_Large/Developing 60-79">
      <div className="absolute bg-[#5f1980] inset-0 rounded-[100px]" />
    </div>
  );
}

function ProgressBarLarge3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[28px] items-start relative shrink-0 w-[724px]" data-name="Progress Bar_Large">
      <ProgressBarLarge2 />
      <ProgressBarLargeDeveloping />
    </div>
  );
}

function AdvancedIndicator6() {
  return <div className="bg-[#5f1980] rounded-[100px] shrink-0 size-[24px]" data-name="Advanced Indicator" />;
}

function Container1() {
  return (
    <div className="content-stretch flex items-center relative rounded-[100px] shrink-0 size-[24px]" data-name="Container">
      <AdvancedIndicator6 />
    </div>
  );
}

function ColorIndicator1() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="ColorIndicator">
      <Container1 />
    </div>
  );
}

function Table1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table">
      <div aria-hidden="true" className="absolute border-[#d4d4d4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[8px] py-[24px] relative w-full">
          <RowHeaderReports1 />
          <ProgressBarLarge3 />
          <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#121212] text-[16px] w-[53px]">61%</p>
          <ColorIndicator1 />
        </div>
      </div>
    </div>
  );
}

function Table2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1312px]" data-name="Table">
      <Table1 />
    </div>
  );
}

function Name2() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Name">
      <p className="basis-0 font-['Rubik:Medium',sans-serif] font-medium grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px]">Question 3</p>
    </div>
  );
}

function StudentName2() {
  return (
    <div className="content-stretch flex h-[32px] items-center relative shrink-0 w-full" data-name="Student Name">
      <Name2 />
    </div>
  );
}

function StandardId2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Standard ID">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">{`Standard: 8.EE  Expressions and Equations`}</p>
    </div>
  );
}

function RowHeaderReports2() {
  return (
    <div className="content-stretch flex flex-col h-[64px] items-start justify-center relative shrink-0 w-[424px]" data-name="RowHeader_Reports">
      <StudentName2 />
      <StandardId2 />
    </div>
  );
}

function ProgressBarLarge4() {
  return <div className="absolute bg-[#c4c8e1] h-[28px] left-0 overflow-clip rounded-[32px] top-0 w-[724px]" data-name="Progress Bar Large" />;
}

function ProgressBarLargeAdvanced() {
  return (
    <div className="h-[28px] relative shrink-0 w-[648px]" data-name="Progress Bar_Large/Advanced 90-99">
      <div className="absolute bg-[#36c] inset-0 rounded-[100px]" />
    </div>
  );
}

function ProgressBarLarge5() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[28px] items-start relative shrink-0 w-[724px]" data-name="Progress Bar_Large">
      <ProgressBarLarge4 />
      <ProgressBarLargeAdvanced />
    </div>
  );
}

function AdvancedIndicator7() {
  return <div className="bg-[#1565c0] rounded-[100px] shrink-0 size-[24px]" data-name="Advanced Indicator" />;
}

function Container2() {
  return (
    <div className="content-stretch flex items-center relative rounded-[100px] shrink-0 size-[24px]" data-name="Container">
      <AdvancedIndicator7 />
    </div>
  );
}

function ColorIndicator2() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="ColorIndicator">
      <Container2 />
    </div>
  );
}

function Table3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table">
      <div aria-hidden="true" className="absolute border-[#d4d4d4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[8px] py-[24px] relative w-full">
          <RowHeaderReports2 />
          <ProgressBarLarge5 />
          <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#121212] text-[16px] w-[53px]">92%</p>
          <ColorIndicator2 />
        </div>
      </div>
    </div>
  );
}

function Table4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1312px]" data-name="Table">
      <Table3 />
    </div>
  );
}

function Name3() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Name">
      <p className="basis-0 font-['Rubik:Medium',sans-serif] font-medium grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px]">Question 4</p>
    </div>
  );
}

function StudentName3() {
  return (
    <div className="content-stretch flex h-[32px] items-center relative shrink-0 w-full" data-name="Student Name">
      <Name3 />
    </div>
  );
}

function StandardId3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Standard ID">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">{`Standard: 8.EE  Expressions and Equations`}</p>
    </div>
  );
}

function RowHeaderReports3() {
  return (
    <div className="content-stretch flex flex-col h-[64px] items-start justify-center relative shrink-0 w-[424px]" data-name="RowHeader_Reports">
      <StudentName3 />
      <StandardId3 />
    </div>
  );
}

function ProgressBarLarge6() {
  return <div className="absolute bg-[#c4c8e1] h-[28px] left-0 overflow-clip rounded-[32px] top-0 w-[724px]" data-name="Progress Bar Large" />;
}

function ProgressBarLarge7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[132px]" data-name="Progress Bar_Large">
      <div className="bg-[#b40808] h-[28px] rounded-[100px] shrink-0 w-full" />
    </div>
  );
}

function ProgressBarLarge8() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[28px] items-start relative shrink-0 w-[724px]" data-name="Progress Bar_Large">
      <ProgressBarLarge6 />
      <ProgressBarLarge7 />
    </div>
  );
}

function AdvancedIndicator8() {
  return <div className="bg-[#c62828] rounded-[100px] shrink-0 size-[24px]" data-name="Advanced Indicator" />;
}

function Container3() {
  return (
    <div className="content-stretch flex items-center relative rounded-[100px] shrink-0 size-[24px]" data-name="Container">
      <AdvancedIndicator8 />
    </div>
  );
}

function ColorIndicator3() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="ColorIndicator">
      <Container3 />
    </div>
  );
}

function Table5() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table">
      <div aria-hidden="true" className="absolute border-[#d4d4d4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[8px] py-[24px] relative w-full">
          <RowHeaderReports3 />
          <ProgressBarLarge8 />
          <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#121212] text-[16px] w-[53px]">32%</p>
          <ColorIndicator3 />
        </div>
      </div>
    </div>
  );
}

function Table6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1312px]" data-name="Table">
      <Table5 />
    </div>
  );
}

function Table7() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[782px] items-center justify-center pb-[128px] pt-[40px] px-[64px] relative shrink-0 w-[1440px] z-[2]" data-name="Table">
      <SubHeaderContainer />
      <Table />
      <Table2 />
      <Table4 />
      <Table6 />
    </div>
  );
}

function BrandLogo1() {
  return (
    <div className="h-[60px] relative shrink-0 w-[151px]" data-name="Brand / Logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[106.67%] left-[-4.64%] max-w-none top-[-4.32%] w-[200.74%]" src={imgBrandLogo} />
      </div>
    </div>
  );
}

function TabBaseDark5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative shrink-0" data-name="_Tab Base Dark">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-center text-nowrap text-white">Contact</p>
    </div>
  );
}

function TabBaseDark6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative shrink-0" data-name="_Tab Base Dark">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-center text-nowrap text-white">Safe Exam Browser</p>
    </div>
  );
}

function TabBaseDark7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative shrink-0" data-name="_Tab Base Dark">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-center text-nowrap text-white">Respondus Browser</p>
    </div>
  );
}

function TabBaseDark8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative shrink-0" data-name="_Tab Base Dark">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-center text-nowrap text-white">Support</p>
    </div>
  );
}

function TabBar2() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Tab Bar">
      <TabBaseDark5 />
      <TabBaseDark6 />
      <TabBaseDark7 />
      <TabBaseDark8 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <BrandLogo1 />
      <TabBar2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.5px_-0.04%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1321 1">
            <path d="M0.5 0.5H1320.5" id="Vector 4" stroke="var(--stroke-0, white)" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-white w-full">Terms | Copyright © 2025</p>
    </div>
  );
}

function LayoutFooter() {
  return (
    <div className="bg-[#343a6f] content-stretch flex flex-col h-[160px] items-start justify-between overflow-clip px-[60px] py-[20px] relative shrink-0 w-[1440px] z-[1]" data-name="Layout / Footer">
      <Frame1 />
      <Frame />
    </div>
  );
}

export default function ClassSummaryItemDistributionOpenLogic() {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-start relative size-full" data-name="Class Summary_ItemDistribution_OpenLogic">
      <HeaderComponent />
      <ContentArea />
      <Table7 />
      <LayoutFooter />
    </div>
  );
}