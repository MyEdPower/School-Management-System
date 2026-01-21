import svgPaths from "./svg-lchy7mp8wf";
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
    <div className="capitalize content-stretch flex font-['Rubik:Regular',sans-serif] font-normal gap-[12px] items-start leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-nowrap" data-name="Breadcrumb">
      <p className="relative shrink-0">Reports</p>
      <p className="relative shrink-0">|</p>
      <p className="relative shrink-0">Student Performance on standards</p>
      <p className="relative shrink-0">|</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[40px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[40px] text-nowrap tracking-[-0.8px]">Student Performance on Standards</p>
    </div>
  );
}

function PageDetailsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Page Details Container">
      <Breadcrumb />
      <Frame4 />
    </div>
  );
}

function PageHeaderContainer() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[182px] items-center justify-center pb-[32px] pt-[64px] px-[64px] relative shrink-0 w-[1440px]" data-name="Page Header Container">
      <div aria-hidden="true" className="absolute border-[#d4d4d4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <PageDetailsContainer />
    </div>
  );
}

function Frame2() {
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
      <Frame2 />
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

function Frame5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[20px] text-black text-nowrap tracking-[-0.2px]">Report Filters</p>
      <Breadcrumb1 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-start min-h-px min-w-px relative shrink-0">
      <IconFilter />
      <Frame5 />
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

function Frame6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="content-stretch flex gap-[16px] items-start px-[12px] py-0 relative w-full">
        <Frame9 />
        <IconChevronDown />
      </div>
    </div>
  );
}

function FiltersMenuOpenLogic() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-start p-[16px] relative shrink-0 w-[1312px]" data-name="FiltersMenu_OpenLogic">
      <div aria-hidden="true" className="absolute border-[#343a6f] border-[0px_0px_0px_4px] border-solid inset-0 pointer-events-none" />
      <Frame6 />
    </div>
  );
}

function PageHeaderContainer1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Page Header Container">
      <div aria-hidden="true" className="absolute border-[#d4d4d4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[64px] py-[32px] relative w-full">
          <FiltersMenuOpenLogic />
        </div>
      </div>
    </div>
  );
}

function HeaderComponent() {
  return (
    <div className="bg-[#343a6f] content-stretch flex flex-col items-start pb-[16px] pt-0 px-0 shrink-0 sticky top-0 w-full z-[3]" data-name="Header Component">
      <HeaderPrimaryNavigationDefault />
      <PageHeaderContainer />
      <PageHeaderContainer1 />
    </div>
  );
}

function IconLeft() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2253_3002)" id="Icon Left">
          <g id="Shape">
            <path d={svgPaths.p38913800} fill="#707070" />
            <path d={svgPaths.p1d8cb100} fill="#707070" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2253_3002">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonConcept1() {
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
        <g clipPath="url(#clip0_2253_2986)" id="Icon Right">
          <path clipRule="evenodd" d={svgPaths.p26c8bb40} fill="var(--fill-0, #707070)" fillRule="evenodd" id="Shape" />
        </g>
        <defs>
          <clipPath id="clip0_2253_2986">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonConcept2() {
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
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-[276px]" data-name="Button Group">
      <ButtonConcept1 />
      <ButtonConcept2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-end relative shrink-0 w-[1312px]">
      <ButtonGroup />
    </div>
  );
}

function TabBase() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[12px] pt-0 px-[4px] relative shrink-0" data-name="_Tab Base">
      <div aria-hidden="true" className="absolute border-[#343a6f] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#343a6f] text-[16px] text-center text-nowrap">Results</p>
    </div>
  );
}

function TabBar1() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Tab Bar">
      <div aria-hidden="true" className="absolute border-[#d4d4d4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TabBase />
    </div>
  );
}

function Down() {
  return (
    <div className="absolute bottom-[16.66%] left-[8.33%] right-1/2 top-[29.17%]" data-name="Down">
      <div className="absolute inset-[-7.69%_-10%_-7.68%_-10%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 10">
          <g id="Down">
            <path d={svgPaths.p3bbbcf00} id="Vector 1" stroke="var(--stroke-0, #707070)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M4 9V0.666667" id="Vector 2" stroke="var(--stroke-0, #707070)" strokeLinecap="round" strokeWidth="1.33333" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Up() {
  return (
    <div className="absolute bottom-[29.17%] left-1/2 right-[8.34%] top-[16.66%]" data-name="Up">
      <div className="absolute inset-[-7.69%_-10%_-7.68%_-10%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 10">
          <g id="Up">
            <path d={svgPaths.p1fedd400} id="Vector 1" stroke="var(--stroke-0, #707070)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M4 1L4 9.33333" id="Vector 2" stroke="var(--stroke-0, #707070)" strokeLinecap="round" strokeWidth="1.33333" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[16.67%_8.34%_16.66%_8.33%]">
      <Down />
      <Up />
    </div>
  );
}

function IconSort() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="icon-sort">
      <Group />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[539px]" data-name="1">
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-nowrap">name</p>
      <IconSort />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[132px]" data-name="2">
      <p className="basis-0 capitalize font-['Rubik:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#707070] text-[14px]">Student ID</p>
    </div>
  );
}

function Down1() {
  return (
    <div className="absolute bottom-[16.66%] left-[8.33%] right-1/2 top-[29.17%]" data-name="Down">
      <div className="absolute inset-[-7.69%_-10%_-7.68%_-10%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 10">
          <g id="Down">
            <path d={svgPaths.p3bbbcf00} id="Vector 1" stroke="var(--stroke-0, #707070)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M4 9V0.666667" id="Vector 2" stroke="var(--stroke-0, #707070)" strokeLinecap="round" strokeWidth="1.33333" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Up1() {
  return (
    <div className="absolute bottom-[29.17%] left-1/2 right-[8.34%] top-[16.66%]" data-name="Up">
      <div className="absolute inset-[-7.69%_-10%_-7.68%_-10%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 10">
          <g id="Up">
            <path d={svgPaths.p1fedd400} id="Vector 1" stroke="var(--stroke-0, #707070)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M4 1L4 9.33333" id="Vector 2" stroke="var(--stroke-0, #707070)" strokeLinecap="round" strokeWidth="1.33333" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[16.67%_8.34%_16.66%_8.33%]">
      <Down1 />
      <Up1 />
    </div>
  );
}

function IconSort1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="icon-sort">
      <Group1 />
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-[100px]" data-name="3">
      <p className="basis-0 capitalize font-['Rubik:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#707070] text-[14px]">Status</p>
      <IconSort1 />
    </div>
  );
}

function Down2() {
  return (
    <div className="absolute bottom-[16.66%] left-[8.33%] right-1/2 top-[29.17%]" data-name="Down">
      <div className="absolute inset-[-7.69%_-10%_-7.68%_-10%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 10">
          <g id="Down">
            <path d={svgPaths.p3bbbcf00} id="Vector 1" stroke="var(--stroke-0, #707070)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M4 9V0.666667" id="Vector 2" stroke="var(--stroke-0, #707070)" strokeLinecap="round" strokeWidth="1.33333" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Up2() {
  return (
    <div className="absolute bottom-[29.17%] left-1/2 right-[8.34%] top-[16.66%]" data-name="Up">
      <div className="absolute inset-[-7.69%_-10%_-7.68%_-10%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 10">
          <g id="Up">
            <path d={svgPaths.p1fedd400} id="Vector 1" stroke="var(--stroke-0, #707070)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M4 1L4 9.33333" id="Vector 2" stroke="var(--stroke-0, #707070)" strokeLinecap="round" strokeWidth="1.33333" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[16.67%_8.34%_16.66%_8.33%]">
      <Down2 />
      <Up2 />
    </div>
  );
}

function IconSort2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="icon-sort">
      <Group2 />
    </div>
  );
}

function Component5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-[171px]" data-name="7">
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-nowrap">Assessment Date</p>
      <IconSort2 />
    </div>
  );
}

function Down3() {
  return (
    <div className="absolute bottom-[16.66%] left-[8.33%] right-1/2 top-[29.17%]" data-name="Down">
      <div className="absolute inset-[-7.69%_-10%_-7.68%_-10%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 10">
          <g id="Down">
            <path d={svgPaths.p3bbbcf00} id="Vector 1" stroke="var(--stroke-0, #707070)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M4 9V0.666667" id="Vector 2" stroke="var(--stroke-0, #707070)" strokeLinecap="round" strokeWidth="1.33333" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Up3() {
  return (
    <div className="absolute bottom-[29.17%] left-1/2 right-[8.34%] top-[16.66%]" data-name="Up">
      <div className="absolute inset-[-7.69%_-10%_-7.68%_-10%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 10">
          <g id="Up">
            <path d={svgPaths.p1fedd400} id="Vector 1" stroke="var(--stroke-0, #707070)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M4 1L4 9.33333" id="Vector 2" stroke="var(--stroke-0, #707070)" strokeLinecap="round" strokeWidth="1.33333" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[16.67%_8.34%_16.66%_8.33%]">
      <Down3 />
      <Up3 />
    </div>
  );
}

function IconSort3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="icon-sort">
      <Group3 />
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-[62px]" data-name="4">
      <p className="basis-0 capitalize font-['Rubik:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#707070] text-[14px]">Score</p>
      <IconSort3 />
    </div>
  );
}

function Component4() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="6">
      <p className="basis-0 capitalize font-['Rubik:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#707070] text-[14px] text-right">Actions</p>
    </div>
  );
}

function TableHeader() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="TableHeader">
      <div aria-hidden="true" className="absolute border-[#f7f7f7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[24px] items-center justify-center pb-[16px] pt-[32px] px-[8px] relative w-full">
          <Component />
          <Component1 />
          <Component2 />
          <Component5 />
          <Component3 />
          <Component4 />
        </div>
      </div>
    </div>
  );
}

function ComponentTableHeaderReportsDefault() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[1312px]" data-name="Component_TableHeader_Reports_Default">
      <TabBar1 />
      <TableHeader />
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

function Row() {
  return (
    <div className="content-stretch flex gap-[8px] h-[72px] items-center relative shrink-0 w-[370px]" data-name="row">
      <CheckboxBase />
      <p className="basis-0 font-['Rubik:Medium',sans-serif] font-medium grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px]">Select All</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[1312px]">
      <Row />
    </div>
  );
}

function Rectangle1() {
  return <div className="absolute bg-white border-2 border-[#707070] border-solid inset-[8.33%] rounded-[3px]" />;
}

function CheckboxBase1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="_Checkbox Base">
      <Rectangle1 />
    </div>
  );
}

function ComponentTextBoxAction() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[470px]" data-name="Component_TextBox_Action">
      <CheckboxBase1 />
      <p className="basis-0 font-['Rubik:Medium',sans-serif] font-medium grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px]">Boatneg, Glory</p>
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-w-[112px] relative rounded-[4px] shrink-0 w-[136px]" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">STU-2024-001</p>
    </div>
  );
}

function CompnentPerformanceBandResult() {
  return (
    <div className="bg-[#36c] content-stretch flex h-[28px] items-center justify-center overflow-clip px-[26px] py-0 relative rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[149px]" data-name="Compnent_PerformanceBand_Result">
      <div className="basis-0 flex flex-col font-['Rubik:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white">
        <p className="leading-[24px]">{`90-100% `}</p>
      </div>
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-w-[112px] relative rounded-[4px] shrink-0 w-[164px]" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">9:08am 07-Feb-2025</p>
    </div>
  );
}

function Column2() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-center text-nowrap">95</p>
    </div>
  );
}

function ColumnsContainer() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Columns container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[24px] py-0 relative w-full">
          <Column />
          <CompnentPerformanceBandResult />
          <Column1 />
          <Column2 />
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
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[107px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#343a6f] text-[14px] text-center w-full">View Report</p>
    </div>
  );
}

function Controls() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center px-[8px] py-[16px] relative shrink-0" data-name="Controls">
      <div aria-hidden="true" className="absolute border-[#f7f7f7] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Action />
    </div>
  );
}

function ComponentSectionStudentReportInfoRow() {
  return (
    <div className="bg-white h-[72px] relative shrink-0 w-full" data-name="Component_Section_StudentReport_InfoRow">
      <div className="content-stretch flex gap-[32px] items-center overflow-clip relative rounded-[inherit] size-full">
        <ComponentTextBoxAction />
        <Secondary />
        <Controls />
      </div>
      <div aria-hidden="true" className="absolute border-[#d4d4d4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Rectangle2() {
  return <div className="absolute bg-white border-2 border-[#707070] border-solid inset-[8.33%] rounded-[3px]" />;
}

function CheckboxBase2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="_Checkbox Base">
      <Rectangle2 />
    </div>
  );
}

function ComponentTextBoxAction1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[470px]" data-name="Component_TextBox_Action">
      <CheckboxBase2 />
      <p className="basis-0 font-['Rubik:Medium',sans-serif] font-medium grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px]">Cook, Jeremy</p>
    </div>
  );
}

function Column3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-w-[112px] relative rounded-[4px] shrink-0 w-[136px]" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">STU-2024-024</p>
    </div>
  );
}

function CompnentPerformanceBandResult1() {
  return (
    <div className="bg-[#a82e06] content-stretch flex h-[28px] items-center justify-center overflow-clip px-[26px] py-0 relative rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[149px]" data-name="Compnent_PerformanceBand_Result">
      <div className="basis-0 flex flex-col font-['Rubik:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white">
        <p className="leading-[24px]">{`40-59% `}</p>
      </div>
    </div>
  );
}

function Column4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-w-[112px] relative rounded-[4px] shrink-0 w-[164px]" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">9:08am 07-Feb-2025</p>
    </div>
  );
}

function Column5() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-center text-nowrap">41</p>
    </div>
  );
}

function ColumnsContainer1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Columns container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[24px] py-0 relative w-full">
          <Column3 />
          <CompnentPerformanceBandResult1 />
          <Column4 />
          <Column5 />
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

function Action1() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[107px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#343a6f] text-[14px] text-center w-full">View Report</p>
    </div>
  );
}

function Controls1() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center px-[8px] py-[16px] relative shrink-0" data-name="Controls">
      <div aria-hidden="true" className="absolute border-[#f7f7f7] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Action1 />
    </div>
  );
}

function ComponentSectionStudentReportInfoRow1() {
  return (
    <div className="bg-white h-[72px] relative shrink-0 w-full" data-name="Component_Section_StudentReport_InfoRow">
      <div className="content-stretch flex gap-[32px] items-center overflow-clip relative rounded-[inherit] size-full">
        <ComponentTextBoxAction1 />
        <Secondary1 />
        <Controls1 />
      </div>
      <div aria-hidden="true" className="absolute border-[#d4d4d4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Rectangle3() {
  return <div className="absolute bg-white border-2 border-[#707070] border-solid inset-[8.33%] rounded-[3px]" />;
}

function CheckboxBase3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="_Checkbox Base">
      <Rectangle3 />
    </div>
  );
}

function ComponentTextBoxAction2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[470px]" data-name="Component_TextBox_Action">
      <CheckboxBase3 />
      <p className="basis-0 font-['Rubik:Medium',sans-serif] font-medium grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px]">Decker, Jenna</p>
    </div>
  );
}

function Column6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-w-[112px] relative rounded-[4px] shrink-0 w-[136px]" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">STU-2024-036</p>
    </div>
  );
}

function CompnentPerformanceBandResult2() {
  return (
    <div className="bg-[#2a692d] content-stretch flex h-[28px] items-center justify-center overflow-clip px-[26px] py-0 relative rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[149px]" data-name="Compnent_PerformanceBand_Result">
      <div className="basis-0 flex flex-col font-['Rubik:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white">
        <p className="leading-[24px]">{`80-89% `}</p>
      </div>
    </div>
  );
}

function Column7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-w-[112px] relative rounded-[4px] shrink-0 w-[164px]" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">9:08am 07-Feb-2025</p>
    </div>
  );
}

function Column8() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-center text-nowrap">81</p>
    </div>
  );
}

function ColumnsContainer2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Columns container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[24px] py-0 relative w-full">
          <Column6 />
          <CompnentPerformanceBandResult2 />
          <Column7 />
          <Column8 />
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

function Action2() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[107px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#343a6f] text-[14px] text-center w-full">View Report</p>
    </div>
  );
}

function Controls2() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center px-[8px] py-[16px] relative shrink-0" data-name="Controls">
      <div aria-hidden="true" className="absolute border-[#f7f7f7] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Action2 />
    </div>
  );
}

function ComponentSectionStudentReportInfoRow2() {
  return (
    <div className="bg-white h-[72px] relative shrink-0 w-full" data-name="Component_Section_StudentReport_InfoRow">
      <div className="content-stretch flex gap-[32px] items-center overflow-clip relative rounded-[inherit] size-full">
        <ComponentTextBoxAction2 />
        <Secondary2 />
        <Controls2 />
      </div>
      <div aria-hidden="true" className="absolute border-[#d4d4d4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Rectangle4() {
  return <div className="absolute bg-white border-2 border-[#707070] border-solid inset-[8.33%] rounded-[3px]" />;
}

function CheckboxBase4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="_Checkbox Base">
      <Rectangle4 />
    </div>
  );
}

function ComponentTextBoxAction3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[470px]" data-name="Component_TextBox_Action">
      <CheckboxBase4 />
      <p className="basis-0 font-['Rubik:Medium',sans-serif] font-medium grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px]">Fitz, Adam</p>
    </div>
  );
}

function Column9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-w-[112px] relative rounded-[4px] shrink-0 w-[136px]" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">STU-2024-010</p>
    </div>
  );
}

function CompnentPerformanceBandResult3() {
  return (
    <div className="bg-[#b40808] content-stretch flex h-[28px] items-center justify-center overflow-clip px-[26px] py-0 relative rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[149px]" data-name="Compnent_PerformanceBand_Result">
      <div className="basis-0 flex flex-col font-['Rubik:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white">
        <p className="leading-[24px]">{`<40% `}</p>
      </div>
    </div>
  );
}

function Column10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-w-[112px] relative rounded-[4px] shrink-0 w-[164px]" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">9:08am 07-Feb-2025</p>
    </div>
  );
}

function Column11() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-center text-nowrap">39</p>
    </div>
  );
}

function ColumnsContainer3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Columns container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[24px] py-0 relative w-full">
          <Column9 />
          <CompnentPerformanceBandResult3 />
          <Column10 />
          <Column11 />
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

function Action3() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[107px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#343a6f] text-[14px] text-center w-full">View Report</p>
    </div>
  );
}

function Controls3() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center px-[8px] py-[16px] relative shrink-0" data-name="Controls">
      <div aria-hidden="true" className="absolute border-[#f7f7f7] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Action3 />
    </div>
  );
}

function ComponentSectionStudentReportInfoRow3() {
  return (
    <div className="bg-white h-[72px] relative shrink-0 w-full" data-name="Component_Section_StudentReport_InfoRow">
      <div className="content-stretch flex gap-[32px] items-center overflow-clip relative rounded-[inherit] size-full">
        <ComponentTextBoxAction3 />
        <Secondary3 />
        <Controls3 />
      </div>
      <div aria-hidden="true" className="absolute border-[#d4d4d4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Rectangle5() {
  return <div className="absolute bg-white border-2 border-[#707070] border-solid inset-[8.33%] rounded-[3px]" />;
}

function CheckboxBase5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="_Checkbox Base">
      <Rectangle5 />
    </div>
  );
}

function ComponentTextBoxAction4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[470px]" data-name="Component_TextBox_Action">
      <CheckboxBase5 />
      <p className="basis-0 font-['Rubik:Medium',sans-serif] font-medium grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px]">Graham, Reilly</p>
    </div>
  );
}

function Column12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-w-[112px] relative rounded-[4px] shrink-0 w-[136px]" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">STU-2024-025</p>
    </div>
  );
}

function CompnentPerformanceBandResult4() {
  return (
    <div className="bg-[#36c] content-stretch flex h-[28px] items-center justify-center overflow-clip px-[26px] py-0 relative rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[149px]" data-name="Compnent_PerformanceBand_Result">
      <div className="basis-0 flex flex-col font-['Rubik:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white">
        <p className="leading-[24px]">{`90-100% `}</p>
      </div>
    </div>
  );
}

function Column13() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-w-[112px] relative rounded-[4px] shrink-0 w-[164px]" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">9:08am 07-Feb-2025</p>
    </div>
  );
}

function Column14() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-center text-nowrap">62</p>
    </div>
  );
}

function ColumnsContainer4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Columns container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[24px] py-0 relative w-full">
          <Column12 />
          <CompnentPerformanceBandResult4 />
          <Column13 />
          <Column14 />
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

function Action4() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[107px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#343a6f] text-[14px] text-center w-full">View Report</p>
    </div>
  );
}

function Controls4() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center px-[8px] py-[16px] relative shrink-0" data-name="Controls">
      <div aria-hidden="true" className="absolute border-[#f7f7f7] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Action4 />
    </div>
  );
}

function ComponentSectionStudentReportInfoRow4() {
  return (
    <div className="bg-white h-[72px] relative shrink-0 w-full" data-name="Component_Section_StudentReport_InfoRow">
      <div className="content-stretch flex gap-[32px] items-center overflow-clip relative rounded-[inherit] size-full">
        <ComponentTextBoxAction4 />
        <Secondary4 />
        <Controls4 />
      </div>
      <div aria-hidden="true" className="absolute border-[#d4d4d4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ButtonConcept() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-end justify-center min-h-[40px] min-w-[40px] px-[16px] py-[12px] relative rounded-[100px] shrink-0" data-name="Button _Concept 3">
      <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[16px] text-center">Load More</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] h-[831px] items-center relative shrink-0 w-[1312px]">
      <ComponentTableHeaderReportsDefault />
      <Frame8 />
      <ComponentSectionStudentReportInfoRow />
      <ComponentSectionStudentReportInfoRow1 />
      <ComponentSectionStudentReportInfoRow2 />
      <ComponentSectionStudentReportInfoRow3 />
      <ComponentSectionStudentReportInfoRow4 />
      <ButtonConcept />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[1035px] items-center justify-center pb-[64px] pt-[8px] px-[64px] relative shrink-0 w-[1440px] z-[2]" data-name="Table">
      <Frame1 />
      <Frame7 />
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

function Frame3() {
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
    <div className="bg-[#343a6f] content-stretch flex flex-col h-[216px] items-start justify-between overflow-clip px-[60px] py-[20px] relative shrink-0 w-[1440px] z-[1]" data-name="Layout / Footer">
      <Frame3 />
      <Frame />
    </div>
  );
}

export default function StudentPerformanceOnStandardsOpenLogic() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] isolate items-start relative size-full" data-name="Student Performance on Standards Open Logic">
      <HeaderComponent />
      <Table />
      <LayoutFooter />
    </div>
  );
}