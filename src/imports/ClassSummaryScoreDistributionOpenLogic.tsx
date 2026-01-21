import svgPaths from "./svg-6zz0fwx29k";

function BrandLogo() {
  return <div className="h-[60px] shrink-0 w-[151px]" data-name="Brand / Logo" />;
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
      <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-solid border-white inset-0 pointer-events-none" />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-center text-nowrap text-white">Reports</p>
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
      <div className="absolute h-[39.999px] left-0 top-0 w-[40px]" data-name="image 30" />
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
    <div className="bg-[#343a6f] content-stretch flex gap-[60px] h-[92px] items-center px-[64px] py-[16px] relative shrink-0 w-[1440px]" data-name="Header_PrimaryNavigation_Default">
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
      <p className="relative shrink-0">Class Summary - Score Distribution Report</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[40px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[40px] text-nowrap tracking-[-0.8px] w-[715px]">Class Summary - Score Distribution Report</p>
    </div>
  );
}

function PageDetailsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Page Details Container">
      <Breadcrumb />
      <Frame3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-0 relative shrink-0 w-[1346px]">
      <PageDetailsContainer />
    </div>
  );
}

function SubHeaderNavigationReports() {
  return (
    <div className="bg-white h-[157px] relative shrink-0 w-full" data-name="SubHeader_Navigation_Reports">
      <div aria-hidden="true" className="absolute border-[#d4d4d4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pb-[32px] pt-[24px] px-[64px] relative size-full">
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function HeaderComponent() {
  return (
    <div className="content-stretch flex flex-col items-start shrink-0 sticky top-0 w-full z-[3]" data-name="Header Component">
      <HeaderPrimaryNavigationDefault />
      <SubHeaderNavigationReports />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[14px] left-[3px] top-[5px] w-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 14">
        <g id="Frame 1618867671">
          <path d={svgPaths.p390be900} fill="var(--fill-0, #343A6F)" id="Shape" />
          <path d={svgPaths.pdc5b000} fill="var(--fill-0, #343A6F)" id="Shape_2" />
          <path d={svgPaths.p2e10c800} fill="var(--fill-0, #343A6F)" id="Shape_3" />
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

function Breadcrumb1() {
  return (
    <div className="capitalize content-stretch flex font-['Rubik:Regular',sans-serif] font-normal gap-[12px] items-start leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-nowrap w-full" data-name="Breadcrumb">
      <p className="relative shrink-0">math</p>
      <p className="relative shrink-0">|</p>
      <p className="relative shrink-0">Math 8</p>
      <p className="relative shrink-0">|</p>
      <p className="relative shrink-0">{`Edify Math 8 Interim  Assessment 1`}</p>
      <p className="relative shrink-0">|</p>
      <p className="relative shrink-0">All Schools</p>
      <p className="relative shrink-0">|</p>
      <p className="relative shrink-0">All classes</p>
      <p className="relative shrink-0">|</p>
      <p className="relative shrink-0">all Students</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[20px] text-black text-nowrap tracking-[-0.2px]">Report Filters</p>
      <Breadcrumb1 />
    </div>
  );
}

function Frame89() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-start min-h-px min-w-px relative shrink-0">
      <IconFilter />
      <Frame6 />
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
          <Frame89 />
          <IconChevronDown />
        </div>
      </div>
    </div>
  );
}

function FiltersMenuOpenLogic() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-start p-[16px] relative shrink-0 w-[1312px]" data-name="FiltersMenu_OpenLogic">
      <div aria-hidden="true" className="absolute border-[#343a6f] border-[0px_0px_0px_4px] border-solid inset-0 pointer-events-none" />
      <Frame7 />
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text Container">
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#121212] text-[14px] text-nowrap">Edify Math 8 Interim Assessment 1</p>
    </div>
  );
}

function TextContainer1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[64px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Text Container">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[20px] text-nowrap tracking-[-0.2px] w-full">Mathematics Assessment</p>
      <TextContainer />
    </div>
  );
}

function IconRight() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon Right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon Right">
          <path d={svgPaths.p14d42000} fill="var(--fill-0, #707070)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function ButtonConcept() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center min-h-[40px] min-w-[40px] px-[16px] py-[12px] relative rounded-[100px] shrink-0" data-name="Button _Concept 10">
      <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[16px] text-center">Preview</p>
      <IconRight />
    </div>
  );
}

function IconLeft() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_27_5285)" id="Icon Left">
          <g id="Shape">
            <path d={svgPaths.p38913800} fill="#707070" />
            <path d={svgPaths.p1d8cb100} fill="#707070" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_27_5285">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonConcept2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center min-h-[40px] min-w-[40px] px-[16px] py-[12px] relative rounded-[100px] shrink-0" data-name="Button _Concept 10">
      <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <IconLeft />
      <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[16px] text-center">Export</p>
    </div>
  );
}

function IconRight1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon Right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_27_5274)" id="Icon Right">
          <path clipRule="evenodd" d={svgPaths.p7f7c500} fill="var(--fill-0, #707070)" fillRule="evenodd" id="Shape" />
        </g>
        <defs>
          <clipPath id="clip0_27_5274">
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
      <IconRight1 />
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Button Group">
      <ButtonConcept />
      <ButtonConcept2 />
      <ButtonConcept1 />
    </div>
  );
}

function ActionContainer() {
  return (
    <div className="basis-0 bg-white content-stretch flex gap-[10px] grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Action Container">
      <ButtonGroup />
    </div>
  );
}

function Frame5() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow h-[76px] items-center min-h-px min-w-px px-0 py-[12px] relative shrink-0">
      <div className="absolute bg-white h-[64px] left-0 rounded-[8px] top-1/2 translate-y-[-50%] w-[1312px]" data-name="Section Header / Block" />
      <TextContainer1 />
      <ActionContainer />
    </div>
  );
}

function SubheaderActionBarReports() {
  return (
    <div className="relative shrink-0 w-full" data-name="Subheader_Action Bar_Reports">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start pl-0 pr-[10px] py-0 relative w-full">
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function ScoreBox() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[162px] items-center relative shadow-[0px_16px_16px_-8px_rgba(12,12,13,0.1),0px_4px_4px_-4px_rgba(12,12,13,0.05)] shrink-0 w-[268px]" data-name="Score Box">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] min-w-full relative shrink-0 text-[#121212] text-[20px] text-center tracking-[-0.2px] w-[min-content]">Total Students</p>
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
        <div className="absolute inset-[0_-2.99%_-21.05%_-2.99%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 284 138">
            <g filter="url(#filter0_dd_27_5292)" id="Rectangle 19">
              <path d={svgPaths.pb85b000} fill="#343A6F" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="138" id="filter0_dd_27_5292" width="284" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="erode" radius="4" result="effect1_dropShadow_27_5292" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0 0.0509804 0 0 0 0.05 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_27_5292" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="erode" radius="8" result="effect2_dropShadow_27_5292" />
                <feOffset dy="16" />
                <feGaussianBlur stdDeviation="8" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0 0.0509804 0 0 0 0.1 0" />
                <feBlend in2="effect1_dropShadow_27_5292" mode="normal" result="effect2_dropShadow_27_5292" />
                <feBlend in="SourceGraphic" in2="effect2_dropShadow_27_5292" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute flex flex-col font-['Rubik:Medium',sans-serif] font-medium inset-[44.44%_0_30.86%_0] justify-center leading-[0] text-[32px] text-center text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-white">
        <p className="leading-[40px]">89</p>
      </div>
      <p className="absolute bottom-[48px] font-['Rubik:Regular',sans-serif] font-normal h-[19px] leading-[24px] left-0 right-0 text-[16px] text-center text-white translate-y-[100%]">Across 4 schools</p>
    </div>
  );
}

function ScoreBox1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[162px] items-center relative shadow-[0px_16px_16px_-8px_rgba(12,12,13,0.1),0px_4px_4px_-4px_rgba(12,12,13,0.05)] shrink-0 w-[268px]" data-name="Score Box">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] min-w-full relative shrink-0 text-[#121212] text-[20px] text-center tracking-[-0.2px] w-[min-content]">District Average</p>
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
        <div className="absolute inset-[0_-2.99%_-21.05%_-2.99%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 284 138">
            <g filter="url(#filter0_dd_27_5292)" id="Rectangle 19">
              <path d={svgPaths.pb85b000} fill="#343A6F" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="138" id="filter0_dd_27_5292" width="284" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="erode" radius="4" result="effect1_dropShadow_27_5292" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0 0.0509804 0 0 0 0.05 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_27_5292" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="erode" radius="8" result="effect2_dropShadow_27_5292" />
                <feOffset dy="16" />
                <feGaussianBlur stdDeviation="8" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0 0.0509804 0 0 0 0.1 0" />
                <feBlend in2="effect1_dropShadow_27_5292" mode="normal" result="effect2_dropShadow_27_5292" />
                <feBlend in="SourceGraphic" in2="effect2_dropShadow_27_5292" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute flex flex-col font-['Rubik:Medium',sans-serif] font-medium inset-[44.44%_0_30.86%_0] justify-center leading-[0] text-[32px] text-center text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-white">
        <p className="leading-[40px]">66.1 %</p>
      </div>
      <p className="absolute bottom-[48px] font-['Rubik:Regular',sans-serif] font-normal h-[19px] leading-[24px] left-0 right-0 text-[16px] text-center text-white translate-y-[100%]">Overall district performance</p>
    </div>
  );
}

function ScoreBox2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[162px] items-center relative shadow-[0px_16px_16px_-8px_rgba(12,12,13,0.1),0px_4px_4px_-4px_rgba(12,12,13,0.05)] shrink-0 w-[268px]" data-name="Score Box">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] min-w-full relative shrink-0 text-[#121212] text-[20px] text-center tracking-[-0.2px] w-[min-content]">Proficiency Rate</p>
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
        <div className="absolute inset-[0_-2.99%_-21.05%_-2.99%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 284 138">
            <g filter="url(#filter0_dd_27_5292)" id="Rectangle 19">
              <path d={svgPaths.pb85b000} fill="#343A6F" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="138" id="filter0_dd_27_5292" width="284" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="erode" radius="4" result="effect1_dropShadow_27_5292" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0 0.0509804 0 0 0 0.05 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_27_5292" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="erode" radius="8" result="effect2_dropShadow_27_5292" />
                <feOffset dy="16" />
                <feGaussianBlur stdDeviation="8" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0 0.0509804 0 0 0 0.1 0" />
                <feBlend in2="effect1_dropShadow_27_5292" mode="normal" result="effect2_dropShadow_27_5292" />
                <feBlend in="SourceGraphic" in2="effect2_dropShadow_27_5292" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute flex flex-col font-['Rubik:Medium',sans-serif] font-medium inset-[44.44%_0_30.86%_0] justify-center leading-[0] text-[32px] text-center text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-white">
        <p className="leading-[40px]">22.5 %</p>
      </div>
      <p className="absolute bottom-[48px] font-['Roboto:Medium',sans-serif] font-medium h-[19px] leading-[24px] left-0 right-0 text-[16px] text-center text-white tracking-[0.15px] translate-y-[100%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Students scoring 80% or higher
      </p>
    </div>
  );
}

function ScoreBox3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[162px] items-center relative shadow-[0px_16px_16px_-8px_rgba(12,12,13,0.1),0px_4px_4px_-4px_rgba(12,12,13,0.05)] shrink-0 w-[268px]" data-name="Score Box">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] min-w-full relative shrink-0 text-[#121212] text-[20px] text-center tracking-[-0.2px] w-[min-content]">At-Risk Students</p>
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
        <div className="absolute inset-[0_-2.99%_-21.05%_-2.99%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 284 138">
            <g filter="url(#filter0_dd_27_5292)" id="Rectangle 19">
              <path d={svgPaths.pb85b000} fill="#343A6F" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="138" id="filter0_dd_27_5292" width="284" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="erode" radius="4" result="effect1_dropShadow_27_5292" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0 0.0509804 0 0 0 0.05 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_27_5292" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="erode" radius="8" result="effect2_dropShadow_27_5292" />
                <feOffset dy="16" />
                <feGaussianBlur stdDeviation="8" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0 0.0509804 0 0 0 0.1 0" />
                <feBlend in2="effect1_dropShadow_27_5292" mode="normal" result="effect2_dropShadow_27_5292" />
                <feBlend in="SourceGraphic" in2="effect2_dropShadow_27_5292" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute flex flex-col font-['Rubik:Medium',sans-serif] font-medium inset-[44.44%_0_30.86%_0] justify-center leading-[0] text-[32px] text-center text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-white">
        <p className="leading-[40px]">30</p>
      </div>
      <p className="absolute bottom-[48px] font-['Roboto:Medium',sans-serif] font-medium h-[19px] leading-[24px] left-0 right-0 text-[16px] text-center text-white tracking-[0.15px] translate-y-[100%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Below 60%
      </p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="basis-0 content-center flex flex-wrap gap-[64px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <ScoreBox />
      <ScoreBox1 />
      <ScoreBox2 />
      <ScoreBox3 />
    </div>
  );
}

function StatsRow() {
  return (
    <div className="bg-white content-stretch flex items-center overflow-clip pb-[24px] pt-[16px] px-0 relative rounded-[8px] shrink-0 w-full" data-name="Stats / Row">
      <Frame57 />
    </div>
  );
}

function AdvancedIndicator() {
  return <div className="bg-[#36c] rounded-[100px] shrink-0 size-[24px]" data-name="Advanced Indicator" />;
}

function Frame87() {
  return (
    <div className="basis-0 content-center flex flex-wrap gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="flex h-[24.741px] items-center justify-center relative shrink-0 w-[72.141px]" style={{ "--transform-inner-width": "49.828125", "--transform-inner-height": "24" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.592deg]">
          <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative text-[#121212] text-[16px] w-[71.897px]">
            <p className="leading-[24px]">90-100</p>
          </div>
        </div>
      </div>
      <div className="flex h-[24.794px] items-center justify-center relative shrink-0 w-[77.244px]" style={{ "--transform-inner-width": "71.171875", "--transform-inner-height": "24" } as React.CSSProperties}>
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
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[204px]" data-name="Performance Selection">
      <AdvancedIndicator />
      <Frame87 />
    </div>
  );
}

function ComponentContainerProficiencyIndicator() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-[228.8px]" data-name="Component_Container_ProficiencyIndicator">
      <div className="content-stretch flex items-center overflow-clip p-[16px] relative rounded-[inherit] w-full">
        <PerformanceSelection />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function AdvancedIndicator1() {
  return <div className="bg-[#2a692d] rounded-[100px] shrink-0 size-[24px]" data-name="Advanced Indicator" />;
}

function Frame88() {
  return (
    <div className="basis-0 content-center flex flex-wrap gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="flex h-[24.745px] items-center justify-center relative shrink-0 w-[72.53px]" style={{ "--transform-inner-width": "45.375", "--transform-inner-height": "24" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.592deg]">
          <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative text-[#121212] text-[16px] w-[72.285px]">
            <p className="leading-[24px]">{`80-89 `}</p>
          </div>
        </div>
      </div>
      <div className="flex h-[24.815px] items-center justify-center relative shrink-0 w-[79.26px]" style={{ "--transform-inner-width": "66.703125", "--transform-inner-height": "24" } as React.CSSProperties}>
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
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[208px]" data-name="Performance Selection">
      <AdvancedIndicator1 />
      <Frame88 />
    </div>
  );
}

function ComponentContainerProficiencyIndicator1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-[228.8px]" data-name="Component_Container_ProficiencyIndicator">
      <div className="content-stretch flex items-center overflow-clip p-[16px] relative rounded-[inherit] w-full">
        <PerformanceSelection1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function AdvancedIndicator2() {
  return <div className="bg-[#5f1980] rounded-[100px] shrink-0 size-[24px]" data-name="Advanced Indicator" />;
}

function Frame90() {
  return (
    <div className="basis-0 content-center flex flex-wrap gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="flex h-[24.745px] items-center justify-center relative shrink-0 w-[72.53px]" style={{ "--transform-inner-width": "40.921875", "--transform-inner-height": "24" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.592deg]">
          <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative text-[#121212] text-[16px] w-[72.285px]">
            <p className="leading-[24px]">60-79</p>
          </div>
        </div>
      </div>
      <div className="flex h-[24.946px] items-center justify-center relative shrink-0 w-[91.954px]" style={{ "--transform-inner-width": "80.0625", "--transform-inner-height": "24" } as React.CSSProperties}>
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
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[208px]" data-name="Performance Selection">
      <AdvancedIndicator2 />
      <Frame90 />
    </div>
  );
}

function ComponentContainerProficiencyIndicator2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-[228.8px]" data-name="Component_Container_ProficiencyIndicator">
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

function Frame91() {
  return (
    <div className="basis-0 content-center flex flex-wrap gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="flex h-[24.745px] items-center justify-center relative shrink-0 w-[72.53px]" style={{ "--transform-inner-width": "45.375", "--transform-inner-height": "24" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.592deg]">
          <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative text-[#121212] text-[16px] w-[72.285px]">
            <p className="leading-[24px]">{`40-59 `}</p>
          </div>
        </div>
      </div>
      <div className="flex h-[24.946px] items-center justify-center relative shrink-0 w-[91.954px]" style={{ "--transform-inner-width": "68.484375", "--transform-inner-height": "24" } as React.CSSProperties}>
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
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[212px]" data-name="Performance Selection">
      <AdvancedIndicator3 />
      <Frame91 />
    </div>
  );
}

function ComponentContainerProficiencyIndicator3() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-[228.8px]" data-name="Component_Container_ProficiencyIndicator">
      <div className="content-stretch flex items-center overflow-clip p-[16px] relative rounded-[inherit] w-full">
        <PerformanceSelection3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function AdvancedIndicator4() {
  return <div className="bg-[#b40808] rounded-[100px] shrink-0 size-[24px]" data-name="Advanced Indicator" />;
}

function Frame92() {
  return (
    <div className="basis-0 content-center flex flex-wrap gap-[8px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="flex h-[25.519px] items-center justify-center relative shrink-0 w-[147.438px]" style={{ "--transform-inner-width": "65.828125", "--transform-inner-height": "24" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.592deg]">
          <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative text-[#121212] text-[16px] w-[147.198px]">
            <p className="leading-[24px]">Below 40</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PerformanceSelection4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[194px]" data-name="Performance Selection">
      <AdvancedIndicator4 />
      <Frame92 />
    </div>
  );
}

function ComponentContainerProficiencyIndicator4() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-[228.8px]" data-name="Component_Container_ProficiencyIndicator">
      <div className="content-stretch flex items-center overflow-clip p-[16px] relative rounded-[inherit] w-full">
        <PerformanceSelection4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function PerformanceBand() {
  return (
    <div className="content-center flex flex-wrap gap-[36px] items-center overflow-clip px-0 py-[24px] relative shrink-0 w-full" data-name="Performance Band">
      <ComponentContainerProficiencyIndicator />
      <ComponentContainerProficiencyIndicator1 />
      <ComponentContainerProficiencyIndicator2 />
      <ComponentContainerProficiencyIndicator3 />
      <ComponentContainerProficiencyIndicator4 />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col h-[54px] items-start justify-center relative shrink-0 w-[328px]" data-name="Text">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] overflow-ellipsis overflow-hidden relative shrink-0 text-[20px] text-nowrap text-white tracking-[-0.2px] w-full">District- Wide Score Distribution</p>
    </div>
  );
}

function IconInfo() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-info">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-info">
          <g id="Shape">
            <path d={svgPaths.p2bfbab40} fill="white" />
            <path d={svgPaths.p20c8ee00} fill="white" />
            <path clipRule="evenodd" d={svgPaths.p32386b80} fill="white" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col h-[54px] items-start justify-center pl-0 pr-[24px] py-0 relative shrink-0 w-[891px]" data-name="Text">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-right text-white w-full">Performance breakdown across students</p>
    </div>
  );
}

function Frame66() {
  return (
    <div className="basis-0 content-stretch flex gap-[22px] grow items-center min-h-px min-w-px relative shrink-0">
      <Text />
      <IconInfo />
      <Text1 />
    </div>
  );
}

function HeaderMeasuredOutcomes() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[24px] py-[12px] relative rounded-[8px] shrink-0 w-[1312px]" data-name="Header Measured Outcomes">
      <div className="absolute bg-[#343a6f] h-[64px] left-0 rounded-[8px] top-1/2 translate-y-[-50%] w-[1312px]" data-name="Section Header / Block" />
      <Frame66 />
    </div>
  );
}

function SubheaderSection() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[8px] shrink-0 w-[1312px]" data-name="Subheader_Section">
      <HeaderMeasuredOutcomes />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[2.77%_0_13.14%_5.63%]" data-name="Group">
      <div className="absolute inset-[86.52%_0_13.14%_5.63%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1238.12 1.41632">
          <path d={svgPaths.p376c8780} fill="var(--fill-0, #CCCCCC)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[69.84%_0_29.82%_5.63%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1238.12 1.41632">
          <path d={svgPaths.p376c8780} fill="var(--fill-0, #CCCCCC)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[53.16%_0_46.5%_5.63%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1238.12 1.41632">
          <path d={svgPaths.p376c8780} fill="var(--fill-0, #CCCCCC)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[36.13%_0_63.53%_5.63%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1238.12 1.41632">
          <path d={svgPaths.p376c8780} fill="var(--fill-0, #CCCCCC)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[19.45%_0_80.21%_5.63%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1238.12 1.41632">
          <path d={svgPaths.p376c8780} fill="var(--fill-0, #CCCCCC)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[2.77%_0_96.89%_5.63%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1238.12 1.41632">
          <path d={svgPaths.p376c8780} fill="var(--fill-0, #CCCCCC)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[78.01%_0_21.65%_5.63%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1238.12 1.41632">
          <path d={svgPaths.p376c8780} fill="var(--fill-0, #EBEBEB)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[61.33%_0_38.33%_5.63%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1238.12 1.41632">
          <path d={svgPaths.p376c8780} fill="var(--fill-0, #EBEBEB)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[44.64%_0_55.02%_5.63%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1238.12 1.41632">
          <path d={svgPaths.p376c8780} fill="var(--fill-0, #EBEBEB)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[27.96%_0_71.7%_5.63%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1238.12 1.41632">
          <path d={svgPaths.p376c8780} fill="var(--fill-0, #EBEBEB)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[11.28%_0_88.38%_5.63%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1238.12 1.41632">
          <path d={svgPaths.p376c8780} fill="var(--fill-0, #EBEBEB)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[3%_3.43%_13.59%_9.31%]" data-name="Group">
      <div className="absolute inset-[46.75%_78.79%_13.59%_9.31%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 156.119 165">
          <path d={svgPaths.p1339a700} fill="var(--fill-0, #B40808)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[26.56%_59.95%_13.59%_28.15%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 156.119 249">
          <path d={svgPaths.p284d2580} fill="var(--fill-0, #D93C08)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[3%_41.11%_13.59%_46.99%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 156.119 347">
          <path d={svgPaths.p1060a100} fill="var(--fill-0, #5F1980)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[19.83%_22.27%_13.59%_65.83%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 156.119 277">
          <path d={svgPaths.p3f094d40} fill="var(--fill-0, #2A692D)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[39.78%_3.43%_13.59%_84.67%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 156.119 194">
          <path d={svgPaths.p162d6000} fill="var(--fill-0, #3366CC)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[86.52%_0_13.14%_5.63%]" data-name="Group">
      <div className="absolute inset-[86.52%_0_13.14%_5.63%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1238.12 1.41632">
          <path d={svgPaths.p376c8780} fill="var(--fill-0, #333333)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[2.77%_0_13.14%_5.63%]" data-name="Group">
      <Group />
      <Group1 />
      <Group2 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[83.82%_96.89%_10.74%_1.36%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[83.82%_96.89%_10.74%_1.36%] leading-[normal] not-italic text-[#444] text-[13px] text-right">0</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[67.08%_96.89%_27.48%_1.55%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[67.08%_96.89%_27.48%_1.55%] leading-[normal] not-italic text-[#444] text-[13px] text-right">5</p>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[50.35%_96.89%_44.21%_0.19%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[50.35%_96.89%_44.21%_0.19%] leading-[normal] not-italic text-[#444] text-[13px] text-right">10</p>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[33.61%_96.89%_60.94%_0.39%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[33.61%_96.89%_60.94%_0.39%] leading-[normal] not-italic text-[#444] text-[13px] text-right">15</p>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[16.88%_96.89%_77.68%_0]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[16.88%_96.89%_77.68%_0] leading-[normal] not-italic text-[#444] text-[13px] text-right">20</p>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[0.14%_96.89%_94.41%_0]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[0.14%_96.89%_94.41%_0] leading-[normal] not-italic text-[#444] text-[13px] text-right">25</p>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-[0.14%_3.44%_10.74%_0]" data-name="Group">
      <Group4 />
      <Group5 />
      <Group6 />
      <Group7 />
      <Group8 />
      <Group9 />
      <div className="absolute flex flex-col font-['Rubik:Medium',sans-serif] font-medium inset-[31.37%_60.19%_61.62%_28.15%] justify-center leading-[0] text-[20px] text-center text-white tracking-[-0.2px]">
        <p className="leading-[32px]">18</p>
      </div>
      <div className="absolute flex flex-col font-['Rubik:Medium',sans-serif] font-medium inset-[8.05%_41.43%_84.94%_47.06%] justify-center leading-[0] text-[20px] text-center text-white tracking-[-0.2px]">
        <p className="leading-[32px]">25</p>
      </div>
      <div className="absolute flex flex-col font-['Rubik:Medium',sans-serif] font-medium inset-[24.63%_22.59%_68.35%_65.9%] justify-center leading-[0] text-[20px] text-center text-white tracking-[-0.2px]">
        <p className="leading-[32px]">20</p>
      </div>
      <div className="absolute flex flex-col font-['Rubik:Medium',sans-serif] font-medium inset-[43.38%_3.44%_49.6%_85.05%] justify-center leading-[0] text-[20px] text-center text-white tracking-[-0.2px]">
        <p className="leading-[32px]">14</p>
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[0.14%_0_10.74%_0]" data-name="Group">
      <div className="absolute inset-[2.85%_0_13.14%_5.63%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <Group3 />
      <Group10 />
    </div>
  );
}

function Subject() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[4px] shrink-0 w-[90px]" data-name="Subject">
      <p className="basis-0 font-['Rubik:Medium',sans-serif] font-medium grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[20px] text-center tracking-[-0.2px]">0-39</p>
    </div>
  );
}

function QuestionHeader() {
  return (
    <div className="content-stretch flex h-[23px] items-center justify-center relative shrink-0 w-full" data-name="Question Header">
      <Subject />
    </div>
  );
}

function StandardName() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Standard Name">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">13.5%</p>
    </div>
  );
}

function ContainerScoreDistribution() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[88.34%_80.14%_3.25%_10.36%] items-start justify-center" data-name="Container_Score_Distribution">
      <QuestionHeader />
      <StandardName />
    </div>
  );
}

function Subject1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[4px] shrink-0 w-[90px]" data-name="Subject">
      <p className="basis-0 font-['Rubik:Medium',sans-serif] font-medium grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[20px] text-center tracking-[-0.2px]">40-59</p>
    </div>
  );
}

function QuestionHeader1() {
  return (
    <div className="content-stretch flex h-[23px] items-center justify-center relative shrink-0 w-full" data-name="Question Header">
      <Subject1 />
    </div>
  );
}

function StandardName1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Standard Name">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">20.2%</p>
    </div>
  );
}

function ContainerScoreDistribution1() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[88.38%_61.28%_3.14%_29.19%] items-start justify-center px-0 py-[8px]" data-name="Container_Score_Distribution">
      <QuestionHeader1 />
      <StandardName1 />
    </div>
  );
}

function Subject2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[4px] shrink-0 w-[90px]" data-name="Subject">
      <p className="basis-0 font-['Rubik:Medium',sans-serif] font-medium grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[20px] text-center tracking-[-0.2px]">60-79</p>
    </div>
  );
}

function QuestionHeader2() {
  return (
    <div className="content-stretch flex h-[23px] items-center justify-center relative shrink-0 w-full" data-name="Question Header">
      <Subject2 />
    </div>
  );
}

function StandardName2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Standard Name">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">28.1%</p>
    </div>
  );
}

function ContainerScoreDistribution2() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[88.56%_42.45%_2.95%_48.02%] items-start justify-center px-0 py-[8px]" data-name="Container_Score_Distribution">
      <QuestionHeader2 />
      <StandardName2 />
    </div>
  );
}

function Subject3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[4px] shrink-0 w-[90px]" data-name="Subject">
      <p className="basis-0 font-['Rubik:Medium',sans-serif] font-medium grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[20px] text-center tracking-[-0.2px]">80-89</p>
    </div>
  );
}

function QuestionHeader3() {
  return (
    <div className="content-stretch flex h-[23px] items-center justify-center relative shrink-0 w-full" data-name="Question Header">
      <Subject3 />
    </div>
  );
}

function StandardName3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Standard Name">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">22.5%</p>
    </div>
  );
}

function ContainerScoreDistribution3() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[88.56%_23.63%_2.95%_66.84%] items-start justify-center px-0 py-[8px]" data-name="Container_Score_Distribution">
      <QuestionHeader3 />
      <StandardName3 />
    </div>
  );
}

function Subject4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[4px] shrink-0 w-[90px]" data-name="Subject">
      <p className="basis-0 font-['Rubik:Medium',sans-serif] font-medium grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[20px] text-center tracking-[-0.2px]">90-100</p>
    </div>
  );
}

function QuestionHeader4() {
  return (
    <div className="content-stretch flex h-[23px] items-center justify-center relative shrink-0 w-full" data-name="Question Header">
      <Subject4 />
    </div>
  );
}

function StandardName4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Standard Name">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">15.7%</p>
    </div>
  );
}

function ContainerScoreDistribution4() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[89.11%_4.8%_2.4%_85.67%] items-start justify-center px-0 py-[8px]" data-name="Container_Score_Distribution">
      <QuestionHeader4 />
      <StandardName4 />
    </div>
  );
}

function BarChart() {
  return (
    <div className="basis-0 grow h-[416px] min-h-px min-w-px overflow-clip relative shrink-0" data-name="Bar Chart">
      <div className="absolute inset-[-15.05%_0_-0.22%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1312 479.518">
          <path d="M1312 0H0V479.518H1312V0Z" fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <Group11 />
      <div className="absolute flex flex-col font-['Rubik:Medium',sans-serif] font-medium inset-[51.85%_79.03%_41.14%_9.31%] justify-center leading-[0] text-[20px] text-center text-white tracking-[-0.2px]">
        <p className="leading-[32px]">12</p>
      </div>
      <ContainerScoreDistribution />
      <ContainerScoreDistribution1 />
      <ContainerScoreDistribution2 />
      <ContainerScoreDistribution3 />
      <ContainerScoreDistribution4 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex h-[542px] items-center relative shrink-0 w-full">
      <BarChart />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col h-[54px] items-start justify-center relative shrink-0 w-[325px]" data-name="Text">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] overflow-ellipsis overflow-hidden relative shrink-0 text-[20px] text-nowrap text-white tracking-[-0.2px] w-[335px]">Student Performance by Standard</p>
    </div>
  );
}

function IconInfo1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-info">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-info">
          <g id="Shape">
            <path d={svgPaths.p2bfbab40} fill="white" />
            <path d={svgPaths.p20c8ee00} fill="white" />
            <path clipRule="evenodd" d={svgPaths.p32386b80} fill="white" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="basis-0 grow h-[54px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pl-0 pr-[24px] py-0 size-full" />
      </div>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex gap-[22px] items-center relative shrink-0 w-[1286px]">
      <Text2 />
      <IconInfo1 />
      <Text3 />
    </div>
  );
}

function HeaderMeasuredOutcomes1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[24px] py-[12px] relative rounded-[8px] shrink-0 w-[1310px]" data-name="Header Measured Outcomes">
      <div className="absolute bg-[#343a6f] h-[64px] left-0 rounded-[8px] top-1/2 translate-y-[-50%] w-[1310px]" data-name="Section Header / Block" />
      <Frame68 />
    </div>
  );
}

function SubheaderSection1() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Subheader_Section">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start pl-0 pr-[10px] py-0 relative w-full">
          <HeaderMeasuredOutcomes1 />
        </div>
      </div>
    </div>
  );
}

function TabBase() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[12px] pt-0 px-[4px] relative shrink-0 w-[375px]" data-name="_Tab Base">
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-center text-nowrap">Standard</p>
    </div>
  );
}

function TabBase1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip pb-[12px] pt-0 px-[4px] relative shrink-0 w-[127px]" data-name="_Tab Base">
      <p className="basis-0 capitalize font-['Rubik:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#707070] text-[14px] text-center">{`# Items `}</p>
    </div>
  );
}

function TabBase2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="_Tab Base">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pb-[12px] pt-0 px-[4px] relative w-full">
          <p className="basis-0 capitalize font-['Rubik:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#707070] text-[14px]">Student Results</p>
        </div>
      </div>
    </div>
  );
}

function TabBar1() {
  return (
    <div className="content-stretch flex gap-[29px] items-center pb-0 pt-[32px] px-0 relative shrink-0 w-full" data-name="TabBar">
      <div aria-hidden="true" className="absolute border-[#d4d4d4] border-[1px_0px] border-solid inset-0 pointer-events-none" />
      <TabBase />
      <TabBase1 />
      <TabBase2 />
    </div>
  );
}

function IconChevronDown1() {
  return (
    <div className="relative size-[32px]" data-name="icon-chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="icon-chevron-down">
          <path d={svgPaths.pc89a500} fill="var(--fill-0, #8A8A8A)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[365px]">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#121212] text-[0px] tracking-[-0.2px] w-[min-content]">
        <span className="leading-[32px] text-[20px]">{`8.EE  `}</span>
        <span className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] text-[16px]">Expressions and Equations</span>
      </p>
    </div>
  );
}

function StandardClassPerformanceBand() {
  return <div className="h-[32px] shrink-0 w-[712px]" data-name="Standard Class Performance Band618867830" />;
}

function Frame9() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex gap-[16px] items-start px-[12px] py-0 relative w-full">
          <Frame8 />
          <StandardClassPerformanceBand />
        </div>
      </div>
    </div>
  );
}

function Standard() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 w-[376px]" data-name="Standard">
      <Frame9 />
    </div>
  );
}

function NumberOfQuestions() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[141px]" data-name="Number of Questions">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap">
        <p className="leading-[normal]">5 Questions</p>
      </div>
    </div>
  );
}

function Component48() {
  return (
    <div className="bg-[#36c] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[177px]" data-name="90-100%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">24%</p>
      </div>
    </div>
  );
}

function Component32() {
  return (
    <div className="bg-[#2a692d] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[258px]" data-name="80-90%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[0px] text-center text-nowrap text-white tracking-[-0.2px]">
        <p>
          <span className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] text-[16px]">37</span>
          <span className="leading-[32px] text-[20px]">%</span>
        </p>
      </div>
    </div>
  );
}

function Component16() {
  return (
    <div className="basis-0 bg-[#5f1980] content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="60-79%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">23%</p>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="bg-[#d93c08] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[74px]" data-name="40-59%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">5%</p>
      </div>
    </div>
  );
}

function Below() {
  return (
    <div className="basis-0 bg-[#b40808] content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Below 40%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">11%</p>
      </div>
    </div>
  );
}

function HorizontalBarClassPerformanceBand() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-start min-h-px min-w-px relative shrink-0" data-name="Horizontal Bar: Class Performance Band">
      <NumberOfQuestions />
      <Component48 />
      <Component32 />
      <Component16 />
      <Component />
      <Below />
    </div>
  );
}

function Frame67() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
      <Standard />
      <HorizontalBarClassPerformanceBand />
    </div>
  );
}

function HorizontalBarStandardClassPerformance() {
  return (
    <div className="bg-white h-[76px] relative shrink-0 w-full" data-name="Horizontal Bar_Standard Class Performance">
      <div aria-hidden="true" className="absolute border-[#343a6f] border-[0px_0px_1px] border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
      <div className="size-full">
        <div className="content-stretch flex items-start p-[16px] relative size-full">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-[180deg]">
              <IconChevronDown1 />
            </div>
          </div>
          <Frame67 />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[32px] items-start relative shrink-0 w-[378px]">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium h-[32px] justify-center leading-[0] relative shrink-0 text-[#121212] text-[16px] w-[346px]">
        <p className="leading-[24px]">{`8.EE.A.2   Standard Header Description`}</p>
      </div>
    </div>
  );
}

function NumberOfQuestions1() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[141px]" data-name="Number of Questions">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap">
        <p className="leading-[normal]">5 Questions</p>
      </div>
    </div>
  );
}

function Component49() {
  return (
    <div className="bg-[#36c] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[177px]" data-name="90-100%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">24%</p>
      </div>
    </div>
  );
}

function Component33() {
  return (
    <div className="bg-[#2a692d] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[258px]" data-name="80-90%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[0px] text-center text-nowrap text-white tracking-[-0.2px]">
        <p>
          <span className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] text-[16px]">37</span>
          <span className="leading-[32px] text-[20px]">%</span>
        </p>
      </div>
    </div>
  );
}

function Component17() {
  return (
    <div className="bg-[#5f1980] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[113px]" data-name="60-79%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">23%</p>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="bg-[#d93c08] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[74px]" data-name="40-59%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">5%</p>
      </div>
    </div>
  );
}

function Below1() {
  return (
    <div className="basis-0 bg-[#b40808] content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Below 40%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">11%</p>
      </div>
    </div>
  );
}

function HorizontalBarClassPerformanceBand1() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-start min-h-px min-w-px relative shrink-0" data-name="Horizontal Bar: Class Performance Band">
      <NumberOfQuestions1 />
      <Component49 />
      <Component33 />
      <Component17 />
      <Component1 />
      <Below1 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex gap-[16px] items-start pl-[16px] pr-0 py-0 relative w-full">
          <Frame10 />
          <HorizontalBarClassPerformanceBand1 />
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="basis-0 bg-[#d4d4d4] content-stretch flex flex-col gap-[16px] grow items-start leading-[24px] min-h-px min-w-px relative shrink-0 text-[16px]">
      <p className="font-['Rubik:Regular',sans-serif] font-normal relative shrink-0 text-[#121212] w-[1249px]">Use square root and cube root symbols to represent solutions to equations of the form x2=p and x3=p, where p is a positive rationale number. Evaluate square roots of small perfect squares and cube roots of small perfect cubes. Know that square root of 2 is irrational.</p>
      <p className="font-['Rubik:Medium',sans-serif] font-medium h-[96px] relative shrink-0 text-black w-full">&nbsp;</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="basis-0 grow h-[48px] min-h-px min-w-px relative shrink-0">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-start px-[12px] py-0 relative size-full">
          <Frame12 />
        </div>
      </div>
    </div>
  );
}

function AccordionQuestionAndAnswerNew() {
  return (
    <div className="content-stretch flex gap-[16px] h-[64px] items-start overflow-clip relative shrink-0 w-[1280px]" data-name="Accordion Question and Answer NEW">
      <Frame13 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-col h-[64px] items-start relative shrink-0 w-full">
      <AccordionQuestionAndAnswerNew />
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[104px] items-start relative shrink-0 w-full">
      <Frame11 />
      <Frame72 />
    </div>
  );
}

function ContainerQuestion() {
  return (
    <div className="bg-[#d4d4d4] h-[125px] min-h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Container_Question">
      <div className="flex flex-col justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center min-h-[inherit] px-[16px] py-[8px] relative size-full">
          <Frame84 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#707070] border-[0px_1px_1px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[32px] items-start relative shrink-0 w-[378px]">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium h-[32px] justify-center leading-[0] relative shrink-0 text-[#121212] text-[16px] w-[346px]">
        <p className="leading-[24px]">{`8.EE.A.3   Standard Header Description`}</p>
      </div>
    </div>
  );
}

function NumberOfQuestions2() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[141px]" data-name="Number of Questions">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap">
        <p className="leading-[normal]">5 Questions</p>
      </div>
    </div>
  );
}

function Component50() {
  return (
    <div className="bg-[#36c] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[177px]" data-name="90-100%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#d4d4d4] text-[16px] text-center text-nowrap">
        <p className="leading-[24px]">24%</p>
      </div>
    </div>
  );
}

function Component34() {
  return (
    <div className="bg-[#2a692d] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[258px]" data-name="80-90%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#d4d4d4] text-[0px] text-center text-nowrap tracking-[-0.2px]">
        <p>
          <span className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] text-[16px]">37</span>
          <span className="leading-[32px] text-[20px]">%</span>
        </p>
      </div>
    </div>
  );
}

function Component18() {
  return (
    <div className="bg-[#5f1980] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[113px]" data-name="60-79%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#d4d4d4] text-[16px] text-center text-nowrap">
        <p className="leading-[24px]">23%</p>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="bg-[#d93c08] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[74px]" data-name="40-59%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#d4d4d4] text-[16px] text-center text-nowrap">
        <p className="leading-[24px]">5%</p>
      </div>
    </div>
  );
}

function Below2() {
  return (
    <div className="basis-0 bg-[#b40808] content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Below 40%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#d4d4d4] text-[16px] text-center text-nowrap">
        <p className="leading-[24px]">11%</p>
      </div>
    </div>
  );
}

function HorizontalBarClassPerformanceBand2() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-start min-h-px min-w-px relative shrink-0" data-name="Horizontal Bar: Class Performance Band">
      <NumberOfQuestions2 />
      <Component50 />
      <Component34 />
      <Component18 />
      <Component2 />
      <Below2 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex gap-[16px] items-start pl-[16px] pr-0 py-0 relative w-full">
          <Frame14 />
          <HorizontalBarClassPerformanceBand2 />
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="basis-0 bg-[#d4d4d4] content-stretch flex flex-col gap-[16px] grow items-start leading-[24px] min-h-px min-w-px relative shrink-0 text-[16px]">
      <p className="font-['Rubik:Regular',sans-serif] font-normal relative shrink-0 text-[#121212] w-[1249px]">Use square root and cube root symbols to represent solutions to equations of the form x2=p and x3=p, where p is a positive rationale number. Evaluate square roots of small perfect squares and cube roots of small perfect cubes. Know that square root of 2 is irrational.</p>
      <p className="font-['Rubik:Medium',sans-serif] font-medium h-[96px] relative shrink-0 text-black w-full">&nbsp;</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="basis-0 grow h-[48px] min-h-px min-w-px relative shrink-0">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-start px-[12px] py-0 relative size-full">
          <Frame16 />
        </div>
      </div>
    </div>
  );
}

function AccordionQuestionAndAnswerNew1() {
  return (
    <div className="content-stretch flex gap-[16px] h-[64px] items-start overflow-clip relative shrink-0 w-[1280px]" data-name="Accordion Question and Answer NEW">
      <Frame17 />
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-col h-[64px] items-start relative shrink-0 w-full">
      <AccordionQuestionAndAnswerNew1 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[104px] items-start relative shrink-0 w-full">
      <Frame15 />
      <Frame73 />
    </div>
  );
}

function ContainerQuestion1() {
  return (
    <div className="bg-[#d4d4d4] h-[125px] min-h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Container_Question">
      <div className="flex flex-col justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center min-h-[inherit] px-[16px] py-[8px] relative size-full">
          <Frame85 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#707070] border-[0px_1px_1px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[32px] items-start relative shrink-0 w-[378px]">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium h-[32px] justify-center leading-[0] relative shrink-0 text-[#121212] text-[16px] w-[346px]">
        <p className="leading-[24px]">{`8.EE.A.3a   Standard Header Description`}</p>
      </div>
    </div>
  );
}

function NumberOfQuestions3() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[141px]" data-name="Number of Questions">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap">
        <p className="leading-[normal]">5 Questions</p>
      </div>
    </div>
  );
}

function Component51() {
  return (
    <div className="bg-[#36c] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[177px]" data-name="90-100%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#d4d4d4] text-[16px] text-center text-nowrap">
        <p className="leading-[24px]">24%</p>
      </div>
    </div>
  );
}

function Component35() {
  return (
    <div className="bg-[#2a692d] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[258px]" data-name="80-90%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#d4d4d4] text-[0px] text-center text-nowrap tracking-[-0.2px]">
        <p>
          <span className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] text-[16px]">37</span>
          <span className="leading-[32px] text-[20px]">%</span>
        </p>
      </div>
    </div>
  );
}

function Component19() {
  return (
    <div className="bg-[#5f1980] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[113px]" data-name="60-79%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#d4d4d4] text-[16px] text-center text-nowrap">
        <p className="leading-[24px]">23%</p>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="bg-[#d93c08] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[74px]" data-name="40-59%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#d4d4d4] text-[16px] text-center text-nowrap">
        <p className="leading-[24px]">5%</p>
      </div>
    </div>
  );
}

function Below3() {
  return (
    <div className="basis-0 bg-[#b40808] content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Below 40%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#d4d4d4] text-[16px] text-center text-nowrap">
        <p className="leading-[24px]">11%</p>
      </div>
    </div>
  );
}

function HorizontalBarClassPerformanceBand3() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-start min-h-px min-w-px relative shrink-0" data-name="Horizontal Bar: Class Performance Band">
      <NumberOfQuestions3 />
      <Component51 />
      <Component35 />
      <Component19 />
      <Component3 />
      <Below3 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex gap-[16px] items-start pl-[16px] pr-0 py-0 relative w-full">
          <Frame18 />
          <HorizontalBarClassPerformanceBand3 />
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="basis-0 bg-[#d4d4d4] content-stretch flex flex-col gap-[16px] grow items-start leading-[24px] min-h-px min-w-px relative shrink-0 text-[16px]">
      <p className="font-['Rubik:Regular',sans-serif] font-normal relative shrink-0 text-[#121212] w-[1249px]">Use square root and cube root symbols to represent solutions to equations of the form x2=p and x3=p, where p is a positive rationale number. Evaluate square roots of small perfect squares and cube roots of small perfect cubes. Know that square root of 2 is irrational.</p>
      <p className="font-['Rubik:Medium',sans-serif] font-medium h-[96px] relative shrink-0 text-black w-full">&nbsp;</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="basis-0 grow h-[48px] min-h-px min-w-px relative shrink-0">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-start px-[12px] py-0 relative size-full">
          <Frame20 />
        </div>
      </div>
    </div>
  );
}

function AccordionQuestionAndAnswerNew2() {
  return (
    <div className="content-stretch flex gap-[16px] h-[64px] items-start overflow-clip relative shrink-0 w-[1280px]" data-name="Accordion Question and Answer NEW">
      <Frame21 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex flex-col h-[64px] items-start relative shrink-0 w-full">
      <AccordionQuestionAndAnswerNew2 />
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[104px] items-start relative shrink-0 w-full">
      <Frame19 />
      <Frame74 />
    </div>
  );
}

function ContainerQuestion2() {
  return (
    <div className="bg-[#d4d4d4] h-[125px] min-h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Container_Question">
      <div className="flex flex-col justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center min-h-[inherit] px-[16px] py-[8px] relative size-full">
          <Frame86 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#707070] border-[0px_1px_1px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function ContainerStandardDescription() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container_Standard_Description">
      <ContainerQuestion />
      <ContainerQuestion1 />
      <ContainerQuestion2 />
    </div>
  );
}

function DropdownStandardsReports() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-end relative shrink-0 w-[1312px]" data-name="Dropdown_Standards_Reports">
      <HorizontalBarStandardClassPerformance />
      <ContainerStandardDescription />
    </div>
  );
}

function IconChevronDown2() {
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

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[365px]">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#121212] text-[0px] tracking-[-0.2px] w-[min-content]">
        <span className="leading-[32px] text-[20px]">{`8.F  `}</span>
        <span className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] text-[16px]">Functions</span>
      </p>
    </div>
  );
}

function StandardClassPerformanceBand1() {
  return <div className="h-[32px] shrink-0 w-[712px]" data-name="Standard Class Performance Band618867830" />;
}

function Frame23() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex gap-[16px] items-start px-[12px] py-0 relative w-full">
          <Frame22 />
          <StandardClassPerformanceBand1 />
        </div>
      </div>
    </div>
  );
}

function Standard1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 w-[377px]" data-name="Standard">
      <Frame23 />
    </div>
  );
}

function NumberOfQuestions4() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[141px]" data-name="Number of Questions">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap">
        <p className="leading-[normal]">5 Questions</p>
      </div>
    </div>
  );
}

function Component52() {
  return (
    <div className="bg-[#36c] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[177px]" data-name="90-100%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">24%</p>
      </div>
    </div>
  );
}

function Component36() {
  return (
    <div className="bg-[#2a692d] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[258px]" data-name="80-90%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[0px] text-center text-nowrap text-white tracking-[-0.2px]">
        <p>
          <span className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] text-[16px]">37</span>
          <span className="leading-[32px] text-[20px]">%</span>
        </p>
      </div>
    </div>
  );
}

function Component20() {
  return (
    <div className="basis-0 bg-[#5f1980] content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="60-79%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">23%</p>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="bg-[#d93c08] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[74px]" data-name="40-59%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">5%</p>
      </div>
    </div>
  );
}

function Below4() {
  return (
    <div className="basis-0 bg-[#b40808] content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Below 40%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">11%</p>
      </div>
    </div>
  );
}

function HorizontalBarClassPerformanceBand4() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-start min-h-px min-w-px relative shrink-0" data-name="Horizontal Bar: Class Performance Band">
      <NumberOfQuestions4 />
      <Component52 />
      <Component36 />
      <Component20 />
      <Component4 />
      <Below4 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
      <IconChevronDown2 />
      <Standard1 />
      <HorizontalBarClassPerformanceBand4 />
    </div>
  );
}

function HorizontalBarStandardClassPerformance1() {
  return (
    <div className="bg-white h-[76px] relative shrink-0 w-full" data-name="Horizontal Bar_Standard Class Performance">
      <div aria-hidden="true" className="absolute border-[#343a6f] border-[0px_0px_1px] border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
      <div className="size-full">
        <div className="content-stretch flex items-start p-[16px] relative size-full">
          <Frame69 />
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[32px] items-start relative shrink-0 w-[404px]">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium h-[32px] justify-center leading-[0] relative shrink-0 text-[#121212] text-[16px] w-full">
        <p className="leading-[24px]">8.EE.A.2</p>
      </div>
    </div>
  );
}

function NumberOfQuestions5() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[141px]" data-name="Number of Questions">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap">
        <p className="leading-[normal]">5 Questions</p>
      </div>
    </div>
  );
}

function Component53() {
  return (
    <div className="bg-[#36c] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[177px]" data-name="90-100%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">24%</p>
      </div>
    </div>
  );
}

function Component37() {
  return (
    <div className="bg-[#2a692d] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[258px]" data-name="80-90%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[0px] text-center text-nowrap text-white tracking-[-0.2px]">
        <p>
          <span className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] text-[16px]">37</span>
          <span className="leading-[32px] text-[20px]">%</span>
        </p>
      </div>
    </div>
  );
}

function Component21() {
  return (
    <div className="basis-0 bg-[#5f1980] content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="60-79%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">23%</p>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="bg-[#d93c08] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[74px]" data-name="40-59%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">5%</p>
      </div>
    </div>
  );
}

function Below5() {
  return (
    <div className="basis-0 bg-[#b40808] content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Below 40%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">11%</p>
      </div>
    </div>
  );
}

function HorizontalBarClassPerformanceBand5() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-[834px]" data-name="Horizontal Bar: Class Performance Band">
      <NumberOfQuestions5 />
      <Component53 />
      <Component37 />
      <Component21 />
      <Component5 />
      <Below5 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[16px] items-start pl-[16px] pr-0 py-0 relative shrink-0 w-[1268px]">
      <Frame24 />
      <HorizontalBarClassPerformanceBand5 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col gap-[16px] grow items-start leading-[24px] min-h-px min-w-px relative shrink-0 text-[16px]">
      <p className="font-['Rubik:Regular',sans-serif] font-normal relative shrink-0 text-[#121212] w-[1249px]">Use square root and cube root symbols to represent solutions to equations of the form x2=p and x3=p, where p is a positive rationale number. Evaluate square roots of small perfect squares and cube roots of small perfect cubes. Know that square root of 2 is irrational.</p>
      <p className="font-['Rubik:Medium',sans-serif] font-medium h-[96px] relative shrink-0 text-black w-full">&nbsp;</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="size-full">
        <div className="content-stretch flex gap-[16px] items-start px-[12px] py-0 relative w-full">
          <Frame26 />
        </div>
      </div>
    </div>
  );
}

function AccordionQuestionAndAnswerNew3() {
  return (
    <div className="content-stretch flex gap-[16px] h-[82px] items-start p-[16px] relative shrink-0 w-[1280px]" data-name="Accordion Question and Answer NEW">
      <Frame27 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <AccordionQuestionAndAnswerNew3 />
    </div>
  );
}

function ContainerQuestion3() {
  return (
    <div className="bg-white h-[140px] min-h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Container_Question">
      <div className="flex flex-col justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center min-h-[inherit] px-[16px] py-[24px] relative size-full">
          <Frame25 />
          <Frame75 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#707070] border-[0px_1px_1px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[32px] items-start relative shrink-0 w-[404px]">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium h-[32px] justify-center leading-[0] relative shrink-0 text-[#121212] text-[16px] w-full">
        <p className="leading-[24px]">8.EE.A.3</p>
      </div>
    </div>
  );
}

function NumberOfQuestions6() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[141px]" data-name="Number of Questions">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap">
        <p className="leading-[normal]">2 Questions</p>
      </div>
    </div>
  );
}

function Component54() {
  return (
    <div className="bg-[#36c] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[177px]" data-name="90-100%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">24%</p>
      </div>
    </div>
  );
}

function Component38() {
  return (
    <div className="bg-[#2a692d] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[258px]" data-name="80-90%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[0px] text-center text-nowrap text-white tracking-[-0.2px]">
        <p>
          <span className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] text-[16px]">37</span>
          <span className="leading-[32px] text-[20px]">%</span>
        </p>
      </div>
    </div>
  );
}

function Component22() {
  return (
    <div className="basis-0 bg-[#5f1980] content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="60-79%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">23%</p>
      </div>
    </div>
  );
}

function Component6() {
  return (
    <div className="bg-[#d93c08] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[74px]" data-name="40-59%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">5%</p>
      </div>
    </div>
  );
}

function Below6() {
  return (
    <div className="basis-0 bg-[#b40808] content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Below 40%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">11%</p>
      </div>
    </div>
  );
}

function HorizontalBarClassPerformanceBand6() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-[834px]" data-name="Horizontal Bar: Class Performance Band">
      <NumberOfQuestions6 />
      <Component54 />
      <Component38 />
      <Component22 />
      <Component6 />
      <Below6 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[16px] items-start pl-[16px] pr-0 py-0 relative shrink-0 w-[1268px]">
      <Frame28 />
      <HorizontalBarClassPerformanceBand6 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col gap-[16px] grow items-start leading-[24px] min-h-px min-w-px relative shrink-0 text-[16px]">
      <p className="font-['Rubik:Regular',sans-serif] font-normal relative shrink-0 text-[#121212] w-[1249px]">Use square root and cube root symbols to represent solutions to equations of the form x2=p and x3=p, where p is a positive rationale number. Evaluate square roots of small perfect squares and cube roots of small perfect cubes. Know that square root of 2 is irrational.</p>
      <p className="font-['Rubik:Medium',sans-serif] font-medium h-[96px] relative shrink-0 text-black w-full">&nbsp;</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="size-full">
        <div className="content-stretch flex gap-[16px] items-start px-[12px] py-0 relative w-full">
          <Frame30 />
        </div>
      </div>
    </div>
  );
}

function AccordionQuestionAndAnswerNew4() {
  return (
    <div className="content-stretch flex gap-[16px] h-[82px] items-start p-[16px] relative shrink-0 w-[1280px]" data-name="Accordion Question and Answer NEW">
      <Frame31 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <AccordionQuestionAndAnswerNew4 />
    </div>
  );
}

function ContainerQuestion4() {
  return (
    <div className="bg-white h-[140px] min-h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Container_Question">
      <div className="flex flex-col justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center min-h-[inherit] px-[16px] py-[24px] relative size-full">
          <Frame29 />
          <Frame76 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#707070] border-[0px_1px_1px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[32px] items-start relative shrink-0 w-[404px]">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium h-[32px] justify-center leading-[0] relative shrink-0 text-[#121212] text-[16px] w-full">
        <p className="leading-[24px]">8.EE.A.3a</p>
      </div>
    </div>
  );
}

function NumberOfQuestions7() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[141px]" data-name="Number of Questions">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap">
        <p className="leading-[normal]">4 Questions</p>
      </div>
    </div>
  );
}

function Component55() {
  return (
    <div className="bg-[#36c] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[177px]" data-name="90-100%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">24%</p>
      </div>
    </div>
  );
}

function Component39() {
  return (
    <div className="bg-[#2a692d] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[258px]" data-name="80-90%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[0px] text-center text-nowrap text-white tracking-[-0.2px]">
        <p>
          <span className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] text-[16px]">37</span>
          <span className="leading-[32px] text-[20px]">%</span>
        </p>
      </div>
    </div>
  );
}

function Component23() {
  return (
    <div className="basis-0 bg-[#5f1980] content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="60-79%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">23%</p>
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="bg-[#d93c08] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[74px]" data-name="40-59%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">5%</p>
      </div>
    </div>
  );
}

function Below7() {
  return (
    <div className="basis-0 bg-[#b40808] content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Below 40%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">11%</p>
      </div>
    </div>
  );
}

function HorizontalBarClassPerformanceBand7() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-[834px]" data-name="Horizontal Bar: Class Performance Band">
      <NumberOfQuestions7 />
      <Component55 />
      <Component39 />
      <Component23 />
      <Component7 />
      <Below7 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[16px] items-start pl-[16px] pr-0 py-0 relative shrink-0 w-[1268px]">
      <Frame32 />
      <HorizontalBarClassPerformanceBand7 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col gap-[16px] grow items-start leading-[24px] min-h-px min-w-px relative shrink-0 text-[16px]">
      <p className="font-['Rubik:Regular',sans-serif] font-normal relative shrink-0 text-[#121212] w-[1249px]">Use square root and cube root symbols to represent solutions to equations of the form x2=p and x3=p, where p is a positive rationale number. Evaluate square roots of small perfect squares and cube roots of small perfect cubes. Know that square root of 2 is irrational.</p>
      <p className="font-['Rubik:Medium',sans-serif] font-medium h-[96px] relative shrink-0 text-black w-full">&nbsp;</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="size-full">
        <div className="content-stretch flex gap-[16px] items-start px-[12px] py-0 relative w-full">
          <Frame34 />
        </div>
      </div>
    </div>
  );
}

function AccordionQuestionAndAnswerNew5() {
  return (
    <div className="content-stretch flex gap-[16px] h-[82px] items-start p-[16px] relative shrink-0 w-[1280px]" data-name="Accordion Question and Answer NEW">
      <Frame35 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <AccordionQuestionAndAnswerNew5 />
    </div>
  );
}

function ContainerQuestion5() {
  return (
    <div className="bg-white h-[140px] min-h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Container_Question">
      <div className="flex flex-col justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center min-h-[inherit] px-[16px] py-[24px] relative size-full">
          <Frame33 />
          <Frame77 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#707070] border-[0px_1px_1px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function ContainerStandardDescription1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-0 items-start opacity-0 relative shrink-0 w-full" data-name="Container_Standard_Description">
      <ContainerQuestion3 />
      <ContainerQuestion4 />
      <ContainerQuestion5 />
    </div>
  );
}

function DropdownStandardsReports1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-end relative shrink-0 w-[1312px]" data-name="Dropdown_Standards_Reports">
      <HorizontalBarStandardClassPerformance1 />
      <ContainerStandardDescription1 />
    </div>
  );
}

function IconChevronDown3() {
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

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[365px]">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#121212] text-[0px] tracking-[-0.2px] w-[min-content]">
        <span className="leading-[32px] text-[20px]">{`8.G `}</span>
        <span className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] text-[16px]">Geometry</span>
      </p>
    </div>
  );
}

function StandardClassPerformanceBand2() {
  return <div className="h-[32px] shrink-0 w-[712px]" data-name="Standard Class Performance Band618867830" />;
}

function Frame37() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex gap-[16px] items-start px-[12px] py-0 relative w-full">
          <Frame36 />
          <StandardClassPerformanceBand2 />
        </div>
      </div>
    </div>
  );
}

function Standard2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 w-[377px]" data-name="Standard">
      <Frame37 />
    </div>
  );
}

function NumberOfQuestions8() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[141px]" data-name="Number of Questions">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap">
        <p className="leading-[normal]">5 Questions</p>
      </div>
    </div>
  );
}

function Component56() {
  return (
    <div className="bg-[#36c] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[177px]" data-name="90-100%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">24%</p>
      </div>
    </div>
  );
}

function Component40() {
  return (
    <div className="bg-[#2a692d] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[258px]" data-name="80-90%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[0px] text-center text-nowrap text-white tracking-[-0.2px]">
        <p>
          <span className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] text-[16px]">37</span>
          <span className="leading-[32px] text-[20px]">%</span>
        </p>
      </div>
    </div>
  );
}

function Component24() {
  return (
    <div className="basis-0 bg-[#5f1980] content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="60-79%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">23%</p>
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div className="bg-[#d93c08] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[74px]" data-name="40-59%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">5%</p>
      </div>
    </div>
  );
}

function Below8() {
  return (
    <div className="basis-0 bg-[#b40808] content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Below 40%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">11%</p>
      </div>
    </div>
  );
}

function HorizontalBarClassPerformanceBand8() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-start min-h-px min-w-px relative shrink-0" data-name="Horizontal Bar: Class Performance Band">
      <NumberOfQuestions8 />
      <Component56 />
      <Component40 />
      <Component24 />
      <Component8 />
      <Below8 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
      <IconChevronDown3 />
      <Standard2 />
      <HorizontalBarClassPerformanceBand8 />
    </div>
  );
}

function HorizontalBarStandardClassPerformance2() {
  return (
    <div className="bg-white h-[76px] relative shrink-0 w-full" data-name="Horizontal Bar_Standard Class Performance">
      <div aria-hidden="true" className="absolute border-[#343a6f] border-[0px_0px_1px] border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
      <div className="size-full">
        <div className="content-stretch flex items-start p-[16px] relative size-full">
          <Frame70 />
        </div>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[32px] items-start relative shrink-0 w-[404px]">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium h-[32px] justify-center leading-[0] relative shrink-0 text-[#121212] text-[16px] w-full">
        <p className="leading-[24px]">8.EE.A.2</p>
      </div>
    </div>
  );
}

function NumberOfQuestions9() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[141px]" data-name="Number of Questions">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap">
        <p className="leading-[normal]">5 Questions</p>
      </div>
    </div>
  );
}

function Component57() {
  return (
    <div className="bg-[#36c] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[177px]" data-name="90-100%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">24%</p>
      </div>
    </div>
  );
}

function Component41() {
  return (
    <div className="bg-[#2a692d] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[258px]" data-name="80-90%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[0px] text-center text-nowrap text-white tracking-[-0.2px]">
        <p>
          <span className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] text-[16px]">37</span>
          <span className="leading-[32px] text-[20px]">%</span>
        </p>
      </div>
    </div>
  );
}

function Component25() {
  return (
    <div className="basis-0 bg-[#5f1980] content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="60-79%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">23%</p>
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="bg-[#d93c08] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[74px]" data-name="40-59%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">5%</p>
      </div>
    </div>
  );
}

function Below9() {
  return (
    <div className="basis-0 bg-[#b40808] content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Below 40%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">11%</p>
      </div>
    </div>
  );
}

function HorizontalBarClassPerformanceBand9() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-[834px]" data-name="Horizontal Bar: Class Performance Band">
      <NumberOfQuestions9 />
      <Component57 />
      <Component41 />
      <Component25 />
      <Component9 />
      <Below9 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[16px] items-start pl-[16px] pr-0 py-0 relative shrink-0 w-[1268px]">
      <Frame38 />
      <HorizontalBarClassPerformanceBand9 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col gap-[16px] grow items-start leading-[24px] min-h-px min-w-px relative shrink-0 text-[16px]">
      <p className="font-['Rubik:Regular',sans-serif] font-normal relative shrink-0 text-[#121212] w-[1249px]">Use square root and cube root symbols to represent solutions to equations of the form x2=p and x3=p, where p is a positive rationale number. Evaluate square roots of small perfect squares and cube roots of small perfect cubes. Know that square root of 2 is irrational.</p>
      <p className="font-['Rubik:Medium',sans-serif] font-medium h-[96px] relative shrink-0 text-black w-full">&nbsp;</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="size-full">
        <div className="content-stretch flex gap-[16px] items-start px-[12px] py-0 relative w-full">
          <Frame40 />
        </div>
      </div>
    </div>
  );
}

function AccordionQuestionAndAnswerNew6() {
  return (
    <div className="content-stretch flex gap-[16px] h-[82px] items-start p-[16px] relative shrink-0 w-[1280px]" data-name="Accordion Question and Answer NEW">
      <Frame41 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <AccordionQuestionAndAnswerNew6 />
    </div>
  );
}

function ContainerQuestion6() {
  return (
    <div className="bg-white h-[140px] min-h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Container_Question">
      <div className="flex flex-col justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center min-h-[inherit] px-[16px] py-[24px] relative size-full">
          <Frame39 />
          <Frame78 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#707070] border-[0px_1px_1px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[32px] items-start relative shrink-0 w-[404px]">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium h-[32px] justify-center leading-[0] relative shrink-0 text-[#121212] text-[16px] w-full">
        <p className="leading-[24px]">8.EE.A.3</p>
      </div>
    </div>
  );
}

function NumberOfQuestions10() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[141px]" data-name="Number of Questions">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap">
        <p className="leading-[normal]">2 Questions</p>
      </div>
    </div>
  );
}

function Component58() {
  return (
    <div className="bg-[#36c] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[177px]" data-name="90-100%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">24%</p>
      </div>
    </div>
  );
}

function Component42() {
  return (
    <div className="bg-[#2a692d] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[258px]" data-name="80-90%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[0px] text-center text-nowrap text-white tracking-[-0.2px]">
        <p>
          <span className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] text-[16px]">37</span>
          <span className="leading-[32px] text-[20px]">%</span>
        </p>
      </div>
    </div>
  );
}

function Component26() {
  return (
    <div className="basis-0 bg-[#5f1980] content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="60-79%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">23%</p>
      </div>
    </div>
  );
}

function Component10() {
  return (
    <div className="bg-[#d93c08] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[74px]" data-name="40-59%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">5%</p>
      </div>
    </div>
  );
}

function Below10() {
  return (
    <div className="basis-0 bg-[#b40808] content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Below 40%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">11%</p>
      </div>
    </div>
  );
}

function HorizontalBarClassPerformanceBand10() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-[834px]" data-name="Horizontal Bar: Class Performance Band">
      <NumberOfQuestions10 />
      <Component58 />
      <Component42 />
      <Component26 />
      <Component10 />
      <Below10 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[16px] items-start pl-[16px] pr-0 py-0 relative shrink-0 w-[1268px]">
      <Frame42 />
      <HorizontalBarClassPerformanceBand10 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col gap-[16px] grow items-start leading-[24px] min-h-px min-w-px relative shrink-0 text-[16px]">
      <p className="font-['Rubik:Regular',sans-serif] font-normal relative shrink-0 text-[#121212] w-[1249px]">Use square root and cube root symbols to represent solutions to equations of the form x2=p and x3=p, where p is a positive rationale number. Evaluate square roots of small perfect squares and cube roots of small perfect cubes. Know that square root of 2 is irrational.</p>
      <p className="font-['Rubik:Medium',sans-serif] font-medium h-[96px] relative shrink-0 text-black w-full">&nbsp;</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="size-full">
        <div className="content-stretch flex gap-[16px] items-start px-[12px] py-0 relative w-full">
          <Frame44 />
        </div>
      </div>
    </div>
  );
}

function AccordionQuestionAndAnswerNew7() {
  return (
    <div className="content-stretch flex gap-[16px] h-[82px] items-start p-[16px] relative shrink-0 w-[1280px]" data-name="Accordion Question and Answer NEW">
      <Frame45 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <AccordionQuestionAndAnswerNew7 />
    </div>
  );
}

function ContainerQuestion7() {
  return (
    <div className="bg-white h-[140px] min-h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Container_Question">
      <div className="flex flex-col justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center min-h-[inherit] px-[16px] py-[24px] relative size-full">
          <Frame43 />
          <Frame79 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#707070] border-[0px_1px_1px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[32px] items-start relative shrink-0 w-[404px]">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium h-[32px] justify-center leading-[0] relative shrink-0 text-[#121212] text-[16px] w-full">
        <p className="leading-[24px]">8.EE.A.3a</p>
      </div>
    </div>
  );
}

function NumberOfQuestions11() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[141px]" data-name="Number of Questions">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap">
        <p className="leading-[normal]">4 Questions</p>
      </div>
    </div>
  );
}

function Component59() {
  return (
    <div className="bg-[#36c] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[177px]" data-name="90-100%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">24%</p>
      </div>
    </div>
  );
}

function Component43() {
  return (
    <div className="bg-[#2a692d] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[258px]" data-name="80-90%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[0px] text-center text-nowrap text-white tracking-[-0.2px]">
        <p>
          <span className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] text-[16px]">37</span>
          <span className="leading-[32px] text-[20px]">%</span>
        </p>
      </div>
    </div>
  );
}

function Component27() {
  return (
    <div className="basis-0 bg-[#5f1980] content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="60-79%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">23%</p>
      </div>
    </div>
  );
}

function Component11() {
  return (
    <div className="bg-[#d93c08] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[74px]" data-name="40-59%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">5%</p>
      </div>
    </div>
  );
}

function Below11() {
  return (
    <div className="basis-0 bg-[#b40808] content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Below 40%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">11%</p>
      </div>
    </div>
  );
}

function HorizontalBarClassPerformanceBand11() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-[834px]" data-name="Horizontal Bar: Class Performance Band">
      <NumberOfQuestions11 />
      <Component59 />
      <Component43 />
      <Component27 />
      <Component11 />
      <Below11 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[16px] items-start pl-[16px] pr-0 py-0 relative shrink-0 w-[1268px]">
      <Frame46 />
      <HorizontalBarClassPerformanceBand11 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col gap-[16px] grow items-start leading-[24px] min-h-px min-w-px relative shrink-0 text-[16px]">
      <p className="font-['Rubik:Regular',sans-serif] font-normal relative shrink-0 text-[#121212] w-[1249px]">Use square root and cube root symbols to represent solutions to equations of the form x2=p and x3=p, where p is a positive rationale number. Evaluate square roots of small perfect squares and cube roots of small perfect cubes. Know that square root of 2 is irrational.</p>
      <p className="font-['Rubik:Medium',sans-serif] font-medium h-[96px] relative shrink-0 text-black w-full">&nbsp;</p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="size-full">
        <div className="content-stretch flex gap-[16px] items-start px-[12px] py-0 relative w-full">
          <Frame48 />
        </div>
      </div>
    </div>
  );
}

function AccordionQuestionAndAnswerNew8() {
  return (
    <div className="content-stretch flex gap-[16px] h-[82px] items-start p-[16px] relative shrink-0 w-[1280px]" data-name="Accordion Question and Answer NEW">
      <Frame49 />
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <AccordionQuestionAndAnswerNew8 />
    </div>
  );
}

function ContainerQuestion8() {
  return (
    <div className="bg-white h-[140px] min-h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Container_Question">
      <div className="flex flex-col justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center min-h-[inherit] px-[16px] py-[24px] relative size-full">
          <Frame47 />
          <Frame80 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#707070] border-[0px_1px_1px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function ContainerStandardDescription2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-0 items-start opacity-0 relative shrink-0 w-full" data-name="Container_Standard_Description">
      <ContainerQuestion6 />
      <ContainerQuestion7 />
      <ContainerQuestion8 />
    </div>
  );
}

function DropdownStandardsReports2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-end relative shrink-0 w-[1312px]" data-name="Dropdown_Standards_Reports">
      <HorizontalBarStandardClassPerformance2 />
      <ContainerStandardDescription2 />
    </div>
  );
}

function IconChevronDown4() {
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

function Frame50() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[365px]">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#121212] text-[0px] tracking-[-0.2px] w-[min-content]">
        <span className="leading-[32px] text-[20px]">{`8.NS `}</span>
        <span className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] text-[16px]">Number System</span>
      </p>
    </div>
  );
}

function StandardClassPerformanceBand3() {
  return <div className="h-[32px] shrink-0 w-[712px]" data-name="Standard Class Performance Band618867830" />;
}

function Frame51() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex gap-[16px] items-start px-[12px] py-0 relative w-full">
          <Frame50 />
          <StandardClassPerformanceBand3 />
        </div>
      </div>
    </div>
  );
}

function Standard3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 w-[377px]" data-name="Standard">
      <Frame51 />
    </div>
  );
}

function NumberOfQuestions12() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[141px]" data-name="Number of Questions">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap">
        <p className="leading-[normal]">5 Questions</p>
      </div>
    </div>
  );
}

function Component60() {
  return (
    <div className="bg-[#36c] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[177px]" data-name="90-100%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">24%</p>
      </div>
    </div>
  );
}

function Component44() {
  return (
    <div className="bg-[#2a692d] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[258px]" data-name="80-90%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[0px] text-center text-nowrap text-white tracking-[-0.2px]">
        <p>
          <span className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] text-[16px]">37</span>
          <span className="leading-[32px] text-[20px]">%</span>
        </p>
      </div>
    </div>
  );
}

function Component28() {
  return (
    <div className="basis-0 bg-[#5f1980] content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="60-79%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">23%</p>
      </div>
    </div>
  );
}

function Component12() {
  return (
    <div className="bg-[#d93c08] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[74px]" data-name="40-59%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">5%</p>
      </div>
    </div>
  );
}

function Below12() {
  return (
    <div className="basis-0 bg-[#b40808] content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Below 40%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">11%</p>
      </div>
    </div>
  );
}

function HorizontalBarClassPerformanceBand12() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-start min-h-px min-w-px relative shrink-0" data-name="Horizontal Bar: Class Performance Band">
      <NumberOfQuestions12 />
      <Component60 />
      <Component44 />
      <Component28 />
      <Component12 />
      <Below12 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
      <IconChevronDown4 />
      <Standard3 />
      <HorizontalBarClassPerformanceBand12 />
    </div>
  );
}

function HorizontalBarStandardClassPerformance3() {
  return (
    <div className="bg-white h-[76px] relative shrink-0 w-full" data-name="Horizontal Bar_Standard Class Performance">
      <div aria-hidden="true" className="absolute border-[#343a6f] border-[0px_0px_1px] border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
      <div className="size-full">
        <div className="content-stretch flex items-start p-[16px] relative size-full">
          <Frame71 />
        </div>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[32px] items-start relative shrink-0 w-[404px]">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium h-[32px] justify-center leading-[0] relative shrink-0 text-[#121212] text-[16px] w-full">
        <p className="leading-[24px]">8.EE.A.2</p>
      </div>
    </div>
  );
}

function NumberOfQuestions13() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[141px]" data-name="Number of Questions">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap">
        <p className="leading-[normal]">5 Questions</p>
      </div>
    </div>
  );
}

function Component61() {
  return (
    <div className="bg-[#36c] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[177px]" data-name="90-100%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">24%</p>
      </div>
    </div>
  );
}

function Component45() {
  return (
    <div className="bg-[#2a692d] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[258px]" data-name="80-90%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[0px] text-center text-nowrap text-white tracking-[-0.2px]">
        <p>
          <span className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] text-[16px]">37</span>
          <span className="leading-[32px] text-[20px]">%</span>
        </p>
      </div>
    </div>
  );
}

function Component29() {
  return (
    <div className="basis-0 bg-[#5f1980] content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="60-79%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">23%</p>
      </div>
    </div>
  );
}

function Component13() {
  return (
    <div className="bg-[#d93c08] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[74px]" data-name="40-59%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">5%</p>
      </div>
    </div>
  );
}

function Below13() {
  return (
    <div className="basis-0 bg-[#b40808] content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Below 40%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">11%</p>
      </div>
    </div>
  );
}

function HorizontalBarClassPerformanceBand13() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-[834px]" data-name="Horizontal Bar: Class Performance Band">
      <NumberOfQuestions13 />
      <Component61 />
      <Component45 />
      <Component29 />
      <Component13 />
      <Below13 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[16px] items-start pl-[16px] pr-0 py-0 relative shrink-0 w-[1268px]">
      <Frame52 />
      <HorizontalBarClassPerformanceBand13 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col gap-[16px] grow items-start leading-[24px] min-h-px min-w-px relative shrink-0 text-[16px]">
      <p className="font-['Rubik:Regular',sans-serif] font-normal relative shrink-0 text-[#121212] w-[1249px]">Use square root and cube root symbols to represent solutions to equations of the form x2=p and x3=p, where p is a positive rationale number. Evaluate square roots of small perfect squares and cube roots of small perfect cubes. Know that square root of 2 is irrational.</p>
      <p className="font-['Rubik:Medium',sans-serif] font-medium h-[96px] relative shrink-0 text-black w-full">&nbsp;</p>
    </div>
  );
}

function Frame56() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="size-full">
        <div className="content-stretch flex gap-[16px] items-start px-[12px] py-0 relative w-full">
          <Frame55 />
        </div>
      </div>
    </div>
  );
}

function AccordionQuestionAndAnswerNew9() {
  return (
    <div className="content-stretch flex gap-[16px] h-[82px] items-start p-[16px] relative shrink-0 w-[1280px]" data-name="Accordion Question and Answer NEW">
      <Frame56 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <AccordionQuestionAndAnswerNew9 />
    </div>
  );
}

function ContainerQuestion9() {
  return (
    <div className="bg-white h-[140px] min-h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Container_Question">
      <div className="flex flex-col justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center min-h-[inherit] px-[16px] py-[24px] relative size-full">
          <Frame53 />
          <Frame81 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#707070] border-[0px_1px_1px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[32px] items-start relative shrink-0 w-[404px]">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium h-[32px] justify-center leading-[0] relative shrink-0 text-[#121212] text-[16px] w-full">
        <p className="leading-[24px]">8.EE.A.3</p>
      </div>
    </div>
  );
}

function NumberOfQuestions14() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[141px]" data-name="Number of Questions">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap">
        <p className="leading-[normal]">2 Questions</p>
      </div>
    </div>
  );
}

function Component62() {
  return (
    <div className="bg-[#36c] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[177px]" data-name="90-100%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">24%</p>
      </div>
    </div>
  );
}

function Component46() {
  return (
    <div className="bg-[#2a692d] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[258px]" data-name="80-90%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[0px] text-center text-nowrap text-white tracking-[-0.2px]">
        <p>
          <span className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] text-[16px]">37</span>
          <span className="leading-[32px] text-[20px]">%</span>
        </p>
      </div>
    </div>
  );
}

function Component30() {
  return (
    <div className="basis-0 bg-[#5f1980] content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="60-79%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">23%</p>
      </div>
    </div>
  );
}

function Component14() {
  return (
    <div className="bg-[#d93c08] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[74px]" data-name="40-59%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">5%</p>
      </div>
    </div>
  );
}

function Below14() {
  return (
    <div className="basis-0 bg-[#b40808] content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Below 40%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">11%</p>
      </div>
    </div>
  );
}

function HorizontalBarClassPerformanceBand14() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-[834px]" data-name="Horizontal Bar: Class Performance Band">
      <NumberOfQuestions14 />
      <Component62 />
      <Component46 />
      <Component30 />
      <Component14 />
      <Below14 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex gap-[16px] items-start pl-[16px] pr-0 py-0 relative shrink-0 w-[1268px]">
      <Frame58 />
      <HorizontalBarClassPerformanceBand14 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col gap-[16px] grow items-start leading-[24px] min-h-px min-w-px relative shrink-0 text-[16px]">
      <p className="font-['Rubik:Regular',sans-serif] font-normal relative shrink-0 text-[#121212] w-[1249px]">Use square root and cube root symbols to represent solutions to equations of the form x2=p and x3=p, where p is a positive rationale number. Evaluate square roots of small perfect squares and cube roots of small perfect cubes. Know that square root of 2 is irrational.</p>
      <p className="font-['Rubik:Medium',sans-serif] font-medium h-[96px] relative shrink-0 text-black w-full">&nbsp;</p>
    </div>
  );
}

function Frame61() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="size-full">
        <div className="content-stretch flex gap-[16px] items-start px-[12px] py-0 relative w-full">
          <Frame60 />
        </div>
      </div>
    </div>
  );
}

function AccordionQuestionAndAnswerNew10() {
  return (
    <div className="content-stretch flex gap-[16px] h-[82px] items-start p-[16px] relative shrink-0 w-[1280px]" data-name="Accordion Question and Answer NEW">
      <Frame61 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <AccordionQuestionAndAnswerNew10 />
    </div>
  );
}

function ContainerQuestion10() {
  return (
    <div className="bg-white h-[140px] min-h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Container_Question">
      <div className="flex flex-col justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center min-h-[inherit] px-[16px] py-[24px] relative size-full">
          <Frame59 />
          <Frame82 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#707070] border-[0px_1px_1px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[32px] items-start relative shrink-0 w-[404px]">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium h-[32px] justify-center leading-[0] relative shrink-0 text-[#121212] text-[16px] w-full">
        <p className="leading-[24px]">8.EE.A.3a</p>
      </div>
    </div>
  );
}

function NumberOfQuestions15() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[141px]" data-name="Number of Questions">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap">
        <p className="leading-[normal]">4 Questions</p>
      </div>
    </div>
  );
}

function Component63() {
  return (
    <div className="bg-[#36c] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[177px]" data-name="90-100%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">24%</p>
      </div>
    </div>
  );
}

function Component47() {
  return (
    <div className="bg-[#2a692d] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[258px]" data-name="80-90%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[0px] text-center text-nowrap text-white tracking-[-0.2px]">
        <p>
          <span className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] text-[16px]">37</span>
          <span className="leading-[32px] text-[20px]">%</span>
        </p>
      </div>
    </div>
  );
}

function Component31() {
  return (
    <div className="basis-0 bg-[#5f1980] content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="60-79%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">23%</p>
      </div>
    </div>
  );
}

function Component15() {
  return (
    <div className="bg-[#d93c08] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[74px]" data-name="40-59%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">5%</p>
      </div>
    </div>
  );
}

function Below15() {
  return (
    <div className="basis-0 bg-[#b40808] content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Below 40%">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">11%</p>
      </div>
    </div>
  );
}

function HorizontalBarClassPerformanceBand15() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-[834px]" data-name="Horizontal Bar: Class Performance Band">
      <NumberOfQuestions15 />
      <Component63 />
      <Component47 />
      <Component31 />
      <Component15 />
      <Below15 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex gap-[16px] items-start pl-[16px] pr-0 py-0 relative shrink-0 w-[1268px]">
      <Frame62 />
      <HorizontalBarClassPerformanceBand15 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col gap-[16px] grow items-start leading-[24px] min-h-px min-w-px relative shrink-0 text-[16px]">
      <p className="font-['Rubik:Regular',sans-serif] font-normal relative shrink-0 text-[#121212] w-[1249px]">Use square root and cube root symbols to represent solutions to equations of the form x2=p and x3=p, where p is a positive rationale number. Evaluate square roots of small perfect squares and cube roots of small perfect cubes. Know that square root of 2 is irrational.</p>
      <p className="font-['Rubik:Medium',sans-serif] font-medium h-[96px] relative shrink-0 text-black w-full">&nbsp;</p>
    </div>
  );
}

function Frame65() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="size-full">
        <div className="content-stretch flex gap-[16px] items-start px-[12px] py-0 relative w-full">
          <Frame64 />
        </div>
      </div>
    </div>
  );
}

function AccordionQuestionAndAnswerNew11() {
  return (
    <div className="content-stretch flex gap-[16px] h-[82px] items-start p-[16px] relative shrink-0 w-[1280px]" data-name="Accordion Question and Answer NEW">
      <Frame65 />
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <AccordionQuestionAndAnswerNew11 />
    </div>
  );
}

function ContainerQuestion11() {
  return (
    <div className="bg-white h-[140px] min-h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Container_Question">
      <div className="flex flex-col justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center min-h-[inherit] px-[16px] py-[24px] relative size-full">
          <Frame63 />
          <Frame83 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#707070] border-[0px_1px_1px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function ContainerStandardDescription3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-0 items-start opacity-0 relative shrink-0 w-full" data-name="Container_Standard_Description">
      <ContainerQuestion9 />
      <ContainerQuestion10 />
      <ContainerQuestion11 />
    </div>
  );
}

function DropdownStandardsReports3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-end relative shrink-0 w-[1312px]" data-name="Dropdown_Standards_Reports">
      <HorizontalBarStandardClassPerformance3 />
      <ContainerStandardDescription3 />
    </div>
  );
}

function ContentArea() {
  return (
    <div className="bg-white relative shrink-0 w-full z-[2]" data-name="Content Area">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start pb-[64px] pt-[16px] px-[64px] relative w-full">
          <FiltersMenuOpenLogic />
          <SubheaderActionBarReports />
          <StatsRow />
          <PerformanceBand />
          <SubheaderSection />
          <Frame54 />
          <SubheaderSection1 />
          <TabBar1 />
          <DropdownStandardsReports />
          <DropdownStandardsReports1 />
          <DropdownStandardsReports2 />
          <DropdownStandardsReports3 />
        </div>
      </div>
    </div>
  );
}

function BrandLogo1() {
  return <div className="h-[60px] shrink-0 w-[151px]" data-name="Brand / Logo" />;
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
    <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative shrink-0 w-[177px]" data-name="_Tab Base Dark">
      <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white">Safe Exam Browser</p>
    </div>
  );
}

function TabBaseDark7() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="_Tab Base Dark">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative w-full">
          <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-center text-nowrap text-white">Respondus Browser</p>
        </div>
      </div>
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
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[579px]" data-name="Tab Bar">
      <TabBaseDark5 />
      <TabBaseDark6 />
      <TabBaseDark7 />
      <TabBaseDark8 />
    </div>
  );
}

function Frame2() {
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
    <div className="bg-[#343a6f] relative shrink-0 w-full z-[1]" data-name="Layout / Footer">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[46px] items-start px-[60px] py-[20px] relative w-full">
          <Frame2 />
          <Frame />
        </div>
      </div>
    </div>
  );
}

export default function ClassSummaryScoreDistributionOpenLogic() {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-start relative size-full" data-name="Class Summary_Score Distribution_OpenLogic">
      <HeaderComponent />
      <ContentArea />
      <LayoutFooter />
    </div>
  );
}