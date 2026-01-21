import svgPaths from "./svg-l4oqjiw2or";
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
      <p className="relative shrink-0">Boatneg, Glory</p>
    </div>
  );
}

function Frame1() {
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
      <Frame1 />
    </div>
  );
}

function PageHeaderContainer() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[176px] items-center justify-center pb-[32px] pt-[64px] px-[64px] relative shrink-0 w-[1440px]" data-name="Page Header Container">
      <div aria-hidden="true" className="absolute border-[#d4d4d4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <PageDetailsContainer />
    </div>
  );
}

function HeaderComponent() {
  return (
    <div className="content-stretch flex flex-col h-[268px] items-start shrink-0 sticky top-0 w-full z-[5]" data-name="Header Component">
      <HeaderPrimaryNavigationDefault />
      <PageHeaderContainer />
    </div>
  );
}

function Frame() {
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
      <Frame />
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
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[20px] text-black text-nowrap tracking-[-0.2px]">Report Filters</p>
      <Breadcrumb1 />
    </div>
  );
}

function Frame55() {
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
          <Frame55 />
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

function PageHeaderContainer1() {
  return (
    <div className="bg-white relative shrink-0 w-full z-[4]" data-name="Page Header Container">
      <div aria-hidden="true" className="absolute border-[#d4d4d4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[64px] py-[16px] relative w-full">
          <FiltersMenuOpenLogic />
        </div>
      </div>
    </div>
  );
}

function StudentDetail() {
  return (
    <div className="content-stretch flex h-[41px] items-center relative rounded-[4px] shrink-0 w-full" data-name="Student Detail">
      <p className="basis-0 font-['Rubik:Medium',sans-serif] font-medium grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[20px] text-white tracking-[-0.2px]">Boateng, Glory</p>
    </div>
  );
}

function Detail() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[249px]" data-name="Detail">
      <div aria-hidden="true" className="absolute border-[#d4d4d4] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#f7f7f7] text-[14px] w-full">Student Name</p>
      <StudentDetail />
    </div>
  );
}

function StudentDetail1() {
  return (
    <div className="content-stretch flex h-[41px] items-center relative rounded-[4px] shrink-0 w-full" data-name="Student Detail">
      <p className="basis-0 font-['Rubik:Medium',sans-serif] font-medium grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[20px] text-white tracking-[-0.2px]">STU-2024-001</p>
    </div>
  );
}

function Detail1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[238px]" data-name="Detail">
      <div aria-hidden="true" className="absolute border-[#d4d4d4] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#f7f7f7] text-[14px] w-full">Student ID</p>
      <StudentDetail1 />
    </div>
  );
}

function StudentDetail2() {
  return (
    <div className="content-stretch flex h-[41px] items-center relative rounded-[4px] shrink-0 w-full" data-name="Student Detail">
      <p className="basis-0 font-['Rubik:Medium',sans-serif] font-medium grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[20px] text-white tracking-[-0.2px]">Grade 8</p>
    </div>
  );
}

function Detail2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[216px]" data-name="Detail">
      <div aria-hidden="true" className="absolute border-[#d4d4d4] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#f7f7f7] text-[14px] w-full">Grade</p>
      <StudentDetail2 />
    </div>
  );
}

function StudentDetail3() {
  return (
    <div className="content-stretch flex h-[41px] items-center relative rounded-[4px] shrink-0 w-full" data-name="Student Detail">
      <p className="basis-0 font-['Rubik:Medium',sans-serif] font-medium grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[20px] text-white tracking-[-0.2px]">Kumar, Shabana</p>
    </div>
  );
}

function Detail3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[216px]" data-name="Detail">
      <div aria-hidden="true" className="absolute border-[#d4d4d4] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#f7f7f7] text-[14px] w-full">Teacher</p>
      <StudentDetail3 />
    </div>
  );
}

function StudentDetail4() {
  return (
    <div className="content-stretch flex h-[41px] items-center relative rounded-[4px] shrink-0 w-full" data-name="Student Detail">
      <p className="basis-0 font-['Rubik:Medium',sans-serif] font-medium grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[20px] text-white tracking-[-0.2px]">Middle School 1</p>
    </div>
  );
}

function Detail4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[220px]" data-name="Detail">
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#f7f7f7] text-[14px] w-full">School</p>
      <StudentDetail4 />
    </div>
  );
}

function StudentDetailsHeader() {
  return (
    <div className="bg-[#343a6f] content-center flex flex-wrap gap-[12px_24px] h-[161px] items-center px-[24px] py-[48px] relative rounded-[8px] shrink-0 w-[1307px]" data-name="Student Details Header">
      <Detail />
      <Detail1 />
      <Detail2 />
      <Detail3 />
      <Detail4 />
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
        <g clipPath="url(#clip0_2140_3588)" id="Icon Left">
          <g id="Shape">
            <path d={svgPaths.p38913800} fill="#707070" />
            <path d={svgPaths.p1d8cb100} fill="#707070" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2140_3588">
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
        <g clipPath="url(#clip0_2140_3593)" id="Icon Right">
          <path clipRule="evenodd" d={svgPaths.p26c8bb40} fill="var(--fill-0, #707070)" fillRule="evenodd" id="Shape" />
        </g>
        <defs>
          <clipPath id="clip0_2140_3593">
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
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-[514px]" data-name="Button Group">
      <ButtonConcept />
      <ButtonConcept2 />
      <ButtonConcept1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center justify-end relative shrink-0 w-[514px]">
      <ButtonGroup />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[10px] h-[76px] items-center px-0 py-[12px] relative shrink-0 w-[1316px]">
      <div className="absolute bg-white h-[64px] left-0 rounded-[8px] top-1/2 translate-y-[-50%] w-[1316px]" data-name="Section Header / Block" />
      <Text />
      <Frame3 />
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section Header">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start pl-0 pr-[10px] py-0 relative w-full">
          <Frame2 />
        </div>
      </div>
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

function Text1() {
  return (
    <div className="content-stretch flex flex-col h-[87px] items-start justify-center relative shrink-0 w-[546px]" data-name="Text">
      <CompnentPerformanceBandResult />
    </div>
  );
}

function IconCalendar() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="icon-calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="icon-calendar">
          <path clipRule="evenodd" d={svgPaths.pcc7ba00} fill="var(--fill-0, #343A6F)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function CalendarDate() {
  return (
    <div className="content-stretch flex gap-[8px] items-start pb-[8px] pt-0 px-0 relative shrink-0 w-full" data-name="Calendar date">
      <div aria-hidden="true" className="absolute border-[#343a6f] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <IconCalendar />
      <p className="basis-0 font-['Rubik:Medium',sans-serif] font-medium grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[#343a6f] text-[20px] text-right tracking-[-0.2px]">Date Tested</p>
    </div>
  );
}

function TimeContainer() {
  return (
    <div className="content-stretch flex flex-col h-[87px] items-start justify-center px-[16px] py-0 relative shrink-0 w-[243px]" data-name="Time Container">
      <div aria-hidden="true" className="absolute border-[#343a6f] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <CalendarDate />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#343a6f] text-[20px] text-nowrap text-right tracking-[-0.2px] w-full">05-Mar-2024</p>
    </div>
  );
}

function IconBell() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="icon-bell">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="icon-bell">
          <g id="Shape">
            <path clipRule="evenodd" d={svgPaths.p2c180180} fill="#343A6F" fillRule="evenodd" />
            <path d={svgPaths.p253ade00} fill="#343A6F" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TestDuration() {
  return (
    <div className="content-stretch flex gap-[8px] items-start pb-[8px] pt-0 px-0 relative shrink-0 w-full" data-name="Test Duration">
      <div aria-hidden="true" className="absolute border-[#343a6f] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <IconBell />
      <p className="basis-0 font-['Rubik:Medium',sans-serif] font-medium grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[#343a6f] text-[20px] text-right tracking-[-0.2px]">Test Duration</p>
    </div>
  );
}

function TimeContainer1() {
  return (
    <div className="content-stretch flex flex-col h-[87px] items-start justify-center px-[16px] py-0 relative shrink-0 w-[232px]" data-name="Time Container">
      <div aria-hidden="true" className="absolute border-[#343a6f] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <TestDuration />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#343a6f] text-[20px] text-nowrap text-right tracking-[-0.2px] w-full">60 Minutes</p>
    </div>
  );
}

function IconClock() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="icon-clock">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="icon-clock">
          <g id="Shape">
            <path d={svgPaths.p3c102880} fill="#343A6F" />
            <path clipRule="evenodd" d={svgPaths.p13ca3780} fill="#343A6F" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function StudentTime() {
  return (
    <div className="content-stretch flex gap-[8px] items-start pb-[8px] pt-0 px-0 relative shrink-0 w-full" data-name="Student Time">
      <div aria-hidden="true" className="absolute border-[#343a6f] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <IconClock />
      <p className="basis-0 font-['Rubik:Medium',sans-serif] font-medium grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[#343a6f] text-[20px] text-right tracking-[-0.2px]">Student Time</p>
    </div>
  );
}

function TimeContainer2() {
  return (
    <div className="content-stretch flex flex-col h-[87px] items-start justify-center px-[16px] py-0 relative shrink-0 w-[216px]" data-name="Time Container">
      <StudentTime />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#343a6f] text-[20px] text-nowrap text-right tracking-[-0.2px] w-full">{`47  Minutes`}</p>
    </div>
  );
}

function Actions1() {
  return <div className="content-stretch flex items-start shrink-0 w-full" data-name="Actions" />;
}

function Text2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Text">
      <Actions1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Text1 />
      <TimeContainer />
      <TimeContainer1 />
      <TimeContainer2 />
      <Text2 />
    </div>
  );
}

function TimeHeader() {
  return (
    <div className="bg-[#c4c8e1] content-stretch flex items-start overflow-clip p-[24px] relative rounded-[8px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.1),0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0 w-[1307px]" data-name="Time Header">
      <Frame5 />
    </div>
  );
}

function AdvancedIndicator() {
  return <div className="bg-[#36c] rounded-[100px] shrink-0 size-[24px]" data-name="Advanced Indicator" />;
}

function Frame53() {
  return (
    <div className="basis-0 content-center flex flex-wrap gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="flex h-[24.741px] items-center justify-center relative shrink-0 w-[72.141px]" style={{ "--transform-inner-width": "49.8125", "--transform-inner-height": "24" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.592deg]">
          <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative text-[#121212] text-[16px] w-[71.897px]">
            <p className="leading-[24px]">90-100</p>
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
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[204px]" data-name="Performance Selection">
      <AdvancedIndicator />
      <Frame53 />
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

function Frame56() {
  return (
    <div className="basis-0 content-center flex flex-wrap gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="flex h-[24.745px] items-center justify-center relative shrink-0 w-[72.53px]" style={{ "--transform-inner-width": "45.359375", "--transform-inner-height": "24" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.592deg]">
          <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative text-[#121212] text-[16px] w-[72.285px]">
            <p className="leading-[24px]">{`80-89 `}</p>
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
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[208px]" data-name="Performance Selection">
      <AdvancedIndicator1 />
      <Frame56 />
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

function Frame57() {
  return (
    <div className="basis-0 content-center flex flex-wrap gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="flex h-[24.745px] items-center justify-center relative shrink-0 w-[72.53px]" style={{ "--transform-inner-width": "40.921875", "--transform-inner-height": "24" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.592deg]">
          <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative text-[#121212] text-[16px] w-[72.285px]">
            <p className="leading-[24px]">60-79</p>
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
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[208px]" data-name="Performance Selection">
      <AdvancedIndicator2 />
      <Frame57 />
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

function Frame58() {
  return (
    <div className="basis-0 content-center flex flex-wrap gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="flex h-[24.745px] items-center justify-center relative shrink-0 w-[72.53px]" style={{ "--transform-inner-width": "45.359375", "--transform-inner-height": "24" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.592deg]">
          <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] relative text-[#121212] text-[16px] w-[72.285px]">
            <p className="leading-[24px]">{`40-59 `}</p>
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
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[212px]" data-name="Performance Selection">
      <AdvancedIndicator3 />
      <Frame58 />
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

function Frame59() {
  return (
    <div className="basis-0 content-center flex flex-wrap gap-[8px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="flex h-[25.519px] items-center justify-center relative shrink-0 w-[147.438px]" style={{ "--transform-inner-width": "65.8125", "--transform-inner-height": "24" } as React.CSSProperties}>
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
      <Frame59 />
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
    <div className="content-center flex flex-wrap gap-[36px] items-center justify-center overflow-clip px-0 py-[24px] relative shrink-0 w-[1312px]" data-name="Performance Band">
      <ComponentContainerProficiencyIndicator />
      <ComponentContainerProficiencyIndicator1 />
      <ComponentContainerProficiencyIndicator2 />
      <ComponentContainerProficiencyIndicator3 />
      <ComponentContainerProficiencyIndicator4 />
    </div>
  );
}

function PerformanceBand1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Performance Band">
      <PerformanceBand />
    </div>
  );
}

function Frame54() {
  return (
    <div className="bg-[#343a6f] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-center justify-center px-[8px] py-[24px] relative w-full">
          <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[32px] text-center text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-white w-[min-content]">
            <p className="leading-[40px]">34/40</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScoreBox() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[162px] items-center min-w-[360px] relative shadow-[0px_16px_16px_-8px_rgba(12,12,13,0.1),0px_4px_4px_-4px_rgba(12,12,13,0.05)] shrink-0 w-[360px]" data-name="Score Box">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#121212] text-[20px] text-center tracking-[-0.2px] w-full">Standard Score</p>
      <Frame54 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="bg-[#343a6f] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-center justify-center px-[8px] py-[24px] relative w-full">
          <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[32px] text-center text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-white w-[min-content]">
            <p className="leading-[40px]">80%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScoreBox1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[162px] items-center min-w-[360px] relative shadow-[0px_16px_16px_-8px_rgba(12,12,13,0.1),0px_4px_4px_-4px_rgba(12,12,13,0.05)] shrink-0 w-[360px]" data-name="Score Box">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#121212] text-[20px] text-center tracking-[-0.2px] w-full">Percentage Score</p>
      <Frame60 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="bg-[#343a6f] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-center justify-center px-[8px] py-[24px] relative w-full">
          <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[32px] text-center text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-white w-[min-content]">
            <p className="leading-[40px]">31/40</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScoreBox2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[162px] items-center min-w-[360px] relative shadow-[0px_16px_16px_-8px_rgba(12,12,13,0.1),0px_4px_4px_-4px_rgba(12,12,13,0.05)] shrink-0 w-[360px]" data-name="Score Box">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#121212] text-[20px] text-center tracking-[-0.2px] w-full">Class Average</p>
      <Frame61 />
    </div>
  );
}

function StudentPerformanceScore() {
  return <div className="absolute h-[69px] left-[442px] top-[70px] w-[360px]" data-name="Student Performance Score" />;
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[72px] items-center justify-center relative shrink-0 w-[1248px]">
      <ScoreBox />
      <ScoreBox1 />
      <ScoreBox2 />
      <StudentPerformanceScore />
    </div>
  );
}

function GraphSecondary() {
  return (
    <div className="bg-white h-[224px] relative rounded-[8px] shrink-0 w-full" data-name="Graph / Secondary 1">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pb-[24px] pt-[16px] px-[24px] relative size-full">
          <Frame41 />
        </div>
      </div>
    </div>
  );
}

function SectionHeader1() {
  return <div className="h-[62px] rounded-[8px] shrink-0 w-[1312px]" data-name="Section Header" />;
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] h-[813px] items-start relative shrink-0 w-full">
      <StudentDetailsHeader />
      <SectionHeader />
      <TimeHeader />
      <PerformanceBand1 />
      <GraphSecondary />
      <SectionHeader1 />
    </div>
  );
}

function ContentArea() {
  return (
    <div className="bg-white h-[889px] relative shrink-0 w-full" data-name="Content Area">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[64px] relative size-full">
          <Frame50 />
        </div>
      </div>
    </div>
  );
}

function PageReportContainer() {
  return (
    <div className="content-stretch flex flex-col h-[889px] items-start relative shrink-0 w-full" data-name="Page Report Container">
      <ContentArea />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col h-[889px] items-start relative shrink-0 w-full z-[3]">
      <PageReportContainer />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col h-[54px] items-start justify-center relative shrink-0 w-[227px]" data-name="Text">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] overflow-ellipsis overflow-hidden relative shrink-0 text-[20px] text-nowrap text-white tracking-[-0.2px] w-[335px]">Standards Assessed</p>
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

function Text4() {
  return (
    <div className="basis-0 grow h-[54px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pl-0 pr-[24px] py-0 relative size-full">
          <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-right text-white w-full">Click on standard to review performance by question</p>
        </div>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[22px] items-center relative shrink-0 w-[1286px]">
      <Text3 />
      <IconInfo />
      <Text4 />
    </div>
  );
}

function HeaderMeasuredOutcomes() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[24px] py-[12px] relative rounded-[8px] shrink-0 w-[1310px]" data-name="Header Measured Outcomes">
      <div className="absolute bg-[#343a6f] h-[64px] left-0 rounded-[8px] top-1/2 translate-y-[-50%] w-[1310px]" data-name="Section Header / Block" />
      <Frame45 />
    </div>
  );
}

function SubheaderSection() {
  return (
    <div className="content-stretch flex h-[78px] items-start overflow-clip pl-0 pr-[10px] py-0 relative rounded-[8px] shrink-0 w-[1312px]" data-name="Subheader_Section">
      <HeaderMeasuredOutcomes />
    </div>
  );
}

function PageHeaderContainer2() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[96px] items-center justify-center px-[64px] py-[16px] relative shrink-0 w-[1435px] z-[2]" data-name="Page Header Container">
      <SubheaderSection />
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
    <div className="absolute bottom-[29.16%] left-1/2 right-[8.33%] top-[16.67%]" data-name="Up">
      <div className="absolute inset-[-7.7%_-10%]">
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
      <Down />
      <Up />
    </div>
  );
}

function IconSort() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="icon-sort">
      <Group3 />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[1302px]" data-name="1">
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-nowrap">Standard</p>
      <IconSort />
    </div>
  );
}

function WireframeTableHeader() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center pb-[16px] pt-[32px] px-[8px] relative rounded-[4px] shrink-0 w-[1312px]" data-name="Wireframe/Table Header">
      <div aria-hidden="true" className="absolute border-[#f7f7f7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Component />
    </div>
  );
}

function ComponentTableHeaderReportsDefault() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1312px]" data-name="Component_TableHeader_Reports_Default">
      <WireframeTableHeader />
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
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[530px]">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px] w-full">8.EE Expressions and Equations</p>
    </div>
  );
}

function Column() {
  return (
    <div className="bg-[#36c] content-stretch flex items-center justify-center min-w-[112px] relative shrink-0 w-[342px]" data-name="Column">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] min-w-[48px] relative shrink-0 text-[20px] text-center text-white tracking-[-0.2px] w-[223px]">4</p>
    </div>
  );
}

function Column1() {
  return (
    <div className="basis-0 bg-[#f41f1f] content-stretch flex grow items-center justify-center min-h-px min-w-[112px] relative shrink-0" data-name="Column">
      <p className="basis-0 font-['Rubik:Medium',sans-serif] font-medium grow leading-[32px] min-h-px min-w-[48px] relative shrink-0 text-[20px] text-center text-white tracking-[-0.2px]">1</p>
    </div>
  );
}

function Column2() {
  return (
    <div className="bg-[#707070] content-stretch flex items-center justify-center min-w-[65px] relative shrink-0 w-[65px]" data-name="Column">
      <p className="basis-0 font-['Rubik:Medium',sans-serif] font-medium grow leading-[32px] min-h-px min-w-[48px] relative shrink-0 text-[20px] text-center text-white tracking-[-0.2px]">0</p>
    </div>
  );
}

function Column3() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center min-w-[112px] relative shrink-0 w-[112px]" data-name="Column">
      <p className="basis-0 font-['Rubik:Medium',sans-serif] font-medium grow leading-[32px] min-h-px min-w-[48px] relative shrink-0 text-[#121212] text-[20px] text-center tracking-[-0.2px]">80%</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[672px]">
      <Column />
      <Column1 />
      <Column2 />
      <Column3 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[16px] items-start px-[12px] py-0 relative shrink-0 w-[1268px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <IconChevronDown1 />
        </div>
      </div>
      <Frame8 />
      <Frame32 />
    </div>
  );
}

function QuestionsAssessed() {
  return <div className="bg-[#36c] rounded-[2px] shrink-0 size-[16px]" data-name="Questions Assessed" />;
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-[133px]">
      <QuestionsAssessed />
      <div className="capitalize flex flex-col font-['Rubik:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[14px] text-black w-[105px]">
        <p className="leading-[16px]">Correct</p>
      </div>
    </div>
  );
}

function QuestionsAssessed1() {
  return <div className="bg-[#f41f1f] rounded-[2px] shrink-0 size-[16px]" data-name="Questions Assessed" />;
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[111px]">
      <QuestionsAssessed1 />
      <div className="capitalize flex flex-col font-['Rubik:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[14px] text-black w-[105px]">
        <p className="leading-[16px]">Incorrect</p>
      </div>
    </div>
  );
}

function QuestionsAssessed2() {
  return <div className="rounded-[2px] shrink-0 size-[16px]" data-name="Questions Assessed" style={{ backgroundImage: "linear-gradient(90deg, rgb(138, 138, 138) 0%, rgb(138, 138, 138) 100%), linear-gradient(90deg, rgb(198, 40, 40) 0%, rgb(198, 40, 40) 100%)" }} />;
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[136px]">
      <QuestionsAssessed2 />
      <div className="basis-0 capitalize flex flex-col font-['Rubik:Regular',sans-serif] font-normal grow h-[16px] justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[14px] text-black">
        <p className="leading-[16px]">Not Attempted</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-[138px]">
      <div className="capitalize flex flex-col font-['Rubik:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[14px] text-black text-right w-[106px]">
        <p className="leading-[16px]">% Correct</p>
      </div>
    </div>
  );
}

function ScoreLegend() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Score Legend">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[40px] items-center justify-end px-[24px] py-0 relative w-full">
          <Frame20 />
          <Frame21 />
          <Frame22 />
          <Frame23 />
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex h-[24px] items-center px-0 py-[8px] relative shrink-0 w-[1272px]">
      <ScoreLegend />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end px-0 py-[8px] relative shrink-0">
      <Frame9 />
      <Frame24 />
    </div>
  );
}

function Info() {
  return (
    <div className="absolute content-stretch flex h-[96px] items-center justify-between left-0 pb-0 pt-[8px] px-[8px] rounded-[4px] top-[22px] w-[1312px]" data-name="Info">
      <div aria-hidden="true" className="absolute border border-[#8a8a8a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Frame30 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Medium',sans-serif] font-medium h-[96px] leading-[32px] relative shrink-0 text-[20px] text-black tracking-[-0.2px] w-full">8.EE. Expressions and Equations: Questions Assessed</p>
      <p className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[24px] left-[0.03px] text-[#121212] text-[16px] top-[31px] w-[1195px]">Use square root and cube root symbols to represent solutions to equations of the form x2=p and x3=p, where p is a positive rationale number. Evaluate square roots of small perfect squares and cube roots of small perfect cubes. Know that square root of 2 is irrational.</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="size-full">
        <div className="content-stretch flex gap-[16px] items-start px-[12px] py-0 relative w-full">
          <Frame10 />
        </div>
      </div>
    </div>
  );
}

function AccordionQuestionAndAnswerNew() {
  return (
    <div className="content-stretch flex gap-[16px] h-[128px] items-start p-[16px] relative shrink-0 w-[1280px]" data-name="Accordion Question and Answer NEW">
      <Frame11 />
    </div>
  );
}

function QuestionStatus() {
  return (
    <div className="basis-0 bg-[#36c] grow h-[22px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Question Status">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[26px] py-0 relative size-full">
          <div className="capitalize flex flex-col font-['Rubik:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-nowrap text-white">
            <p className="leading-[16px]">Q1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuestionStatus1() {
  return (
    <div className="basis-0 bg-[#36c] grow h-[22px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Question Status">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[26px] py-0 relative size-full">
          <div className="capitalize flex flex-col font-['Rubik:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-nowrap text-white">
            <p className="leading-[16px]">Q2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuestionStatus2() {
  return (
    <div className="basis-0 bg-[#f41f1f] grow h-[22px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Question Status">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[26px] py-0 relative size-full">
          <div className="basis-0 capitalize flex flex-col font-['Rubik:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[14px] text-center text-white">
            <p className="leading-[16px]">Q3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuestionStatus3() {
  return (
    <div className="basis-0 bg-[#36c] grow h-[22px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Question Status">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[26px] py-0 relative size-full">
          <div className="capitalize flex flex-col font-['Rubik:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-nowrap text-white">
            <p className="leading-[16px]">Q4</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuestionStatus4() {
  return (
    <div className="basis-0 bg-[#36c] grow h-[22px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Question Status">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[26px] py-0 relative size-full">
          <div className="capitalize flex flex-col font-['Rubik:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-nowrap text-white">
            <p className="leading-[16px]">Q5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuestionTabBar() {
  return (
    <div className="h-[43px] relative shrink-0 w-full" data-name="Question Tab Bar">
      <div className="flex flex-row items-center size-full">
        <div className="content-center flex flex-wrap gap-[8px] items-center px-[24px] py-0 relative size-full">
          <QuestionStatus />
          <QuestionStatus1 />
          <QuestionStatus2 />
          <QuestionStatus3 />
          <QuestionStatus4 />
        </div>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[128px] items-start relative shrink-0">
      <AccordionQuestionAndAnswerNew />
      <QuestionTabBar />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[314px] items-start relative shrink-0 w-full">
      <Frame46 />
    </div>
  );
}

function ContainerQuestion() {
  return (
    <div className="absolute bg-white h-[398px] left-0 min-h-[40px] rounded-[4px] top-[126px] w-[1312px]" data-name="Container_Question">
      <div className="content-stretch flex flex-col items-start justify-center min-h-[inherit] overflow-clip pb-[24px] pt-[32px] px-[16px] relative rounded-[inherit] size-full">
        <Frame62 />
      </div>
      <div aria-hidden="true" className="absolute border-[#707070] border-[0px_1px_1px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function DropdownStandardsQuestions() {
  return (
    <div className="content-stretch flex gap-[8px] h-[524px] items-center overflow-clip relative shrink-0 w-[1312px]" data-name="Dropdown_Standards Questions">
      <Info />
      <ContainerQuestion />
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

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[530px]">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px] w-full">8.F Functions</p>
    </div>
  );
}

function Column4() {
  return (
    <div className="bg-[#36c] content-stretch flex items-center justify-center min-w-[112px] relative shrink-0 w-[342px]" data-name="Column">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] min-w-[48px] relative shrink-0 text-[20px] text-center text-white tracking-[-0.2px] w-[223px]">4</p>
    </div>
  );
}

function Column5() {
  return (
    <div className="basis-0 bg-[#f41f1f] content-stretch flex grow items-center justify-center min-h-px min-w-[112px] relative shrink-0" data-name="Column">
      <p className="basis-0 font-['Rubik:Medium',sans-serif] font-medium grow leading-[32px] min-h-px min-w-[48px] relative shrink-0 text-[20px] text-center text-white tracking-[-0.2px]">1</p>
    </div>
  );
}

function Column6() {
  return (
    <div className="bg-[#707070] content-stretch flex items-center justify-center min-w-[65px] relative shrink-0 w-[65px]" data-name="Column">
      <p className="basis-0 font-['Rubik:Medium',sans-serif] font-medium grow leading-[32px] min-h-px min-w-[48px] relative shrink-0 text-[20px] text-center text-white tracking-[-0.2px]">0</p>
    </div>
  );
}

function Column7() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center min-w-[112px] relative shrink-0 w-[112px]" data-name="Column">
      <p className="basis-0 font-['Rubik:Medium',sans-serif] font-medium grow leading-[32px] min-h-px min-w-[48px] relative shrink-0 text-[#121212] text-[20px] text-center tracking-[-0.2px]">80%</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[672px]">
      <Column4 />
      <Column5 />
      <Column6 />
      <Column7 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[16px] items-start px-[12px] py-0 relative shrink-0 w-[1268px]">
      <IconChevronDown2 />
      <Frame12 />
      <Frame33 />
    </div>
  );
}

function QuestionsAssessed3() {
  return <div className="bg-[#36c] rounded-[2px] shrink-0 size-[16px]" data-name="Questions Assessed" />;
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-[133px]">
      <QuestionsAssessed3 />
      <div className="capitalize flex flex-col font-['Rubik:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[14px] text-black w-[105px]">
        <p className="leading-[16px]">Correct</p>
      </div>
    </div>
  );
}

function QuestionsAssessed4() {
  return <div className="bg-[#f41f1f] rounded-[2px] shrink-0 size-[16px]" data-name="Questions Assessed" />;
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[111px]">
      <QuestionsAssessed4 />
      <div className="capitalize flex flex-col font-['Rubik:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[14px] text-black w-[105px]">
        <p className="leading-[16px]">Incorrect</p>
      </div>
    </div>
  );
}

function QuestionsAssessed5() {
  return <div className="rounded-[2px] shrink-0 size-[16px]" data-name="Questions Assessed" style={{ backgroundImage: "linear-gradient(90deg, rgb(138, 138, 138) 0%, rgb(138, 138, 138) 100%), linear-gradient(90deg, rgb(198, 40, 40) 0%, rgb(198, 40, 40) 100%)" }} />;
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[136px]">
      <QuestionsAssessed5 />
      <div className="basis-0 capitalize flex flex-col font-['Rubik:Regular',sans-serif] font-normal grow h-[16px] justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[14px] text-black">
        <p className="leading-[16px]">Not Attempted</p>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-[138px]">
      <div className="capitalize flex flex-col font-['Rubik:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[14px] text-black text-right w-[106px]">
        <p className="leading-[16px]">% Correct</p>
      </div>
    </div>
  );
}

function ScoreLegend1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Score Legend">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[40px] items-center justify-end px-[24px] py-0 relative w-full">
          <Frame25 />
          <Frame26 />
          <Frame27 />
          <Frame28 />
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex h-[24px] items-center px-0 py-[8px] relative shrink-0 w-full">
      <ScoreLegend1 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 w-[1272px]">
      <Frame13 />
      <Frame29 />
    </div>
  );
}

function ContentFrame() {
  return (
    <div className="absolute content-stretch flex h-[96px] items-center justify-between left-0 p-[8px] rounded-[4px] top-0 w-[1312px]" data-name="Content Frame">
      <div aria-hidden="true" className="absolute border border-[#8a8a8a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Frame31 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Medium',sans-serif] font-medium h-[96px] leading-[32px] relative shrink-0 text-[20px] text-black tracking-[-0.2px] w-full">{`8.F Functions:  Questions Assessed`}</p>
      <p className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[24px] left-[0.03px] text-[#121212] text-[16px] top-[31px] w-[1195px]">Use square root and cube root symbols to represent solutions to equations of the form x2=p and x3=p, where p is a positive rationale number. Evaluate square roots of small perfect squares and cube roots of small perfect cubes. Know that square root of 2 is irrational.</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="size-full">
        <div className="content-stretch flex gap-[16px] items-start px-[12px] py-0 relative w-full">
          <Frame14 />
        </div>
      </div>
    </div>
  );
}

function AccordionQuestionAndAnswerNew1() {
  return (
    <div className="content-stretch flex gap-[16px] h-[105px] items-start p-[16px] relative shrink-0 w-[1280px]" data-name="Accordion Question and Answer NEW">
      <Frame15 />
    </div>
  );
}

function QuestionStatus5() {
  return (
    <div className="basis-0 bg-[#36c] grow h-[22px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Question Status">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[26px] py-0 relative size-full">
          <div className="capitalize flex flex-col font-['Rubik:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-nowrap text-white">
            <p className="leading-[16px]">Q1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuestionStatus6() {
  return (
    <div className="basis-0 bg-[#36c] grow h-[22px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Question Status">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[26px] py-0 relative size-full">
          <div className="capitalize flex flex-col font-['Rubik:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-nowrap text-white">
            <p className="leading-[16px]">Q2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuestionStatus7() {
  return (
    <div className="basis-0 bg-[#f41f1f] grow h-[22px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Question Status">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[26px] py-0 relative size-full">
          <div className="basis-0 capitalize flex flex-col font-['Rubik:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[14px] text-center text-white">
            <p className="leading-[16px]">Q3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuestionStatus8() {
  return (
    <div className="basis-0 bg-[#36c] grow h-[22px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Question Status">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[26px] py-0 relative size-full">
          <div className="capitalize flex flex-col font-['Rubik:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-nowrap text-white">
            <p className="leading-[16px]">Q4</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuestionStatus9() {
  return (
    <div className="basis-0 bg-[#36c] grow h-[22px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Question Status">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[26px] py-0 relative size-full">
          <div className="capitalize flex flex-col font-['Rubik:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-nowrap text-white">
            <p className="leading-[16px]">Q5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuestionTabBar1() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center px-[24px] py-0 relative shrink-0 w-[1312px]" data-name="Question Tab Bar">
      <QuestionStatus5 />
      <QuestionStatus6 />
      <QuestionStatus7 />
      <QuestionStatus8 />
      <QuestionStatus9 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <AccordionQuestionAndAnswerNew1 />
      <QuestionTabBar1 />
    </div>
  );
}

function DropdownQuestionDescription() {
  return (
    <div className="absolute bg-white h-0 left-0 opacity-0 rounded-[4px] top-[104px] w-[1312px]" data-name="Dropdown_Question Description">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <Frame47 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#707070] border-[0px_1px_1px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function DropdownStandardsQuestions1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Dropdown_Standards Questions">
      <ContentFrame />
      <DropdownQuestionDescription />
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

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[530px]">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px] w-full">8.G Geometry</p>
    </div>
  );
}

function Column8() {
  return (
    <div className="bg-[#36c] content-stretch flex items-center justify-center min-w-[112px] relative shrink-0 w-[342px]" data-name="Column">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] min-w-[48px] relative shrink-0 text-[20px] text-center text-white tracking-[-0.2px] w-[223px]">9</p>
    </div>
  );
}

function Column9() {
  return (
    <div className="basis-0 bg-[#f41f1f] content-stretch flex grow items-center justify-center min-h-px min-w-[112px] relative shrink-0" data-name="Column">
      <p className="basis-0 font-['Rubik:Medium',sans-serif] font-medium grow leading-[32px] min-h-px min-w-[48px] relative shrink-0 text-[20px] text-center text-white tracking-[-0.2px]">2</p>
    </div>
  );
}

function Column10() {
  return (
    <div className="bg-[#707070] content-stretch flex items-center justify-center min-w-[65px] relative shrink-0 w-[65px]" data-name="Column">
      <p className="basis-0 font-['Rubik:Medium',sans-serif] font-medium grow leading-[32px] min-h-px min-w-[48px] relative shrink-0 text-[20px] text-center text-white tracking-[-0.2px]">1</p>
    </div>
  );
}

function Column11() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center min-w-[112px] relative shrink-0 w-[112px]" data-name="Column">
      <p className="basis-0 font-['Rubik:Medium',sans-serif] font-medium grow leading-[32px] min-h-px min-w-[48px] relative shrink-0 text-[#121212] text-[20px] text-center tracking-[-0.2px]">75%</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[672px]">
      <Column8 />
      <Column9 />
      <Column10 />
      <Column11 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[16px] items-start px-[12px] py-0 relative shrink-0 w-[1268px]">
      <IconChevronDown3 />
      <Frame16 />
      <Frame34 />
    </div>
  );
}

function QuestionsAssessed6() {
  return <div className="bg-[#36c] rounded-[2px] shrink-0 size-[16px]" data-name="Questions Assessed" />;
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-[133px]">
      <QuestionsAssessed6 />
      <div className="capitalize flex flex-col font-['Rubik:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[14px] text-black w-[105px]">
        <p className="leading-[16px]">Correct</p>
      </div>
    </div>
  );
}

function QuestionsAssessed7() {
  return <div className="bg-[#f41f1f] rounded-[2px] shrink-0 size-[16px]" data-name="Questions Assessed" />;
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[111px]">
      <QuestionsAssessed7 />
      <div className="capitalize flex flex-col font-['Rubik:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[14px] text-black w-[105px]">
        <p className="leading-[16px]">Incorrect</p>
      </div>
    </div>
  );
}

function QuestionsAssessed8() {
  return <div className="rounded-[2px] shrink-0 size-[16px]" data-name="Questions Assessed" style={{ backgroundImage: "linear-gradient(90deg, rgb(138, 138, 138) 0%, rgb(138, 138, 138) 100%), linear-gradient(90deg, rgb(198, 40, 40) 0%, rgb(198, 40, 40) 100%)" }} />;
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[136px]">
      <QuestionsAssessed8 />
      <div className="basis-0 capitalize flex flex-col font-['Rubik:Regular',sans-serif] font-normal grow h-[16px] justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[14px] text-black">
        <p className="leading-[16px]">Not Attempted</p>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-[138px]">
      <div className="capitalize flex flex-col font-['Rubik:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[14px] text-black text-right w-[106px]">
        <p className="leading-[16px]">% Correct</p>
      </div>
    </div>
  );
}

function ScoreLegend2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Score Legend">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[40px] items-center justify-end px-[24px] py-0 relative w-full">
          <Frame35 />
          <Frame36 />
          <Frame39 />
          <Frame42 />
        </div>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex h-[24px] items-center px-0 py-[8px] relative shrink-0 w-full">
      <ScoreLegend2 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 w-[1272px]">
      <Frame17 />
      <Frame43 />
    </div>
  );
}

function ContentFrame1() {
  return (
    <div className="absolute content-stretch flex h-[96px] items-center justify-between left-0 p-[8px] rounded-[4px] top-0 w-[1312px]" data-name="Content Frame">
      <div aria-hidden="true" className="absolute border border-[#8a8a8a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Frame44 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Medium',sans-serif] font-medium h-[96px] leading-[32px] relative shrink-0 text-[20px] text-black tracking-[-0.2px] w-full">8.G Geometry</p>
      <p className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[24px] left-[0.03px] text-[#121212] text-[16px] top-[31px] w-[1195px]">Use square root and cube root symbols to represent solutions to equations of the form x2=p and x3=p, where p is a positive rationale number. Evaluate square roots of small perfect squares and cube roots of small perfect cubes. Know that square root of 2 is irrational.</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="size-full">
        <div className="content-stretch flex gap-[16px] items-start px-[12px] py-0 relative w-full">
          <Frame18 />
        </div>
      </div>
    </div>
  );
}

function AccordionQuestionAndAnswerNew2() {
  return (
    <div className="content-stretch flex gap-[16px] h-[105px] items-start p-[16px] relative shrink-0 w-[1280px]" data-name="Accordion Question and Answer NEW">
      <Frame19 />
    </div>
  );
}

function QuestionStatus10() {
  return (
    <div className="basis-0 bg-[#36c] grow h-[22px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Question Status">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[26px] py-0 relative size-full">
          <div className="capitalize flex flex-col font-['Rubik:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-nowrap text-white">
            <p className="leading-[16px]">Q1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuestionStatus11() {
  return (
    <div className="basis-0 bg-[#36c] grow h-[22px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Question Status">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[26px] py-0 relative size-full">
          <div className="capitalize flex flex-col font-['Rubik:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-nowrap text-white">
            <p className="leading-[16px]">Q2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuestionStatus12() {
  return (
    <div className="basis-0 bg-[#f41f1f] grow h-[22px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Question Status">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[26px] py-0 relative size-full">
          <div className="basis-0 capitalize flex flex-col font-['Rubik:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[14px] text-center text-white">
            <p className="leading-[16px]">Q3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuestionStatus13() {
  return (
    <div className="basis-0 bg-[#36c] grow h-[22px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Question Status">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[26px] py-0 relative size-full">
          <div className="capitalize flex flex-col font-['Rubik:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-nowrap text-white">
            <p className="leading-[16px]">Q4</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuestionStatus14() {
  return (
    <div className="basis-0 bg-[#36c] grow h-[22px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Question Status">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[26px] py-0 relative size-full">
          <div className="capitalize flex flex-col font-['Rubik:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-nowrap text-white">
            <p className="leading-[16px]">Q5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuestionTabBar2() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center px-[24px] py-0 relative shrink-0 w-[1312px]" data-name="Question Tab Bar">
      <QuestionStatus10 />
      <QuestionStatus11 />
      <QuestionStatus12 />
      <QuestionStatus13 />
      <QuestionStatus14 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <AccordionQuestionAndAnswerNew2 />
      <QuestionTabBar2 />
    </div>
  );
}

function DropdownQuestionDescription1() {
  return (
    <div className="absolute bg-white h-0 left-0 opacity-0 rounded-[4px] top-[104px] w-[1312px]" data-name="Dropdown_Question Description">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <Frame48 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#707070] border-[0px_1px_1px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function DropdownStandardsQuestions2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[96px] items-center relative shrink-0 w-full" data-name="Dropdown_Standards Questions">
      <ContentFrame1 />
      <DropdownQuestionDescription1 />
    </div>
  );
}

function StandardsAssessedContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[1312px]" data-name="Standards Assessed Container">
      <DropdownStandardsQuestions />
      <DropdownStandardsQuestions1 />
      <DropdownStandardsQuestions2 />
    </div>
  );
}

function ContentArea1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Content Area">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[64px] py-[24px] relative w-full">
          <ComponentTableHeaderReportsDefault />
          <StandardsAssessedContainer />
        </div>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start justify-center relative shrink-0 w-[49px]" data-name="Text">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#fafafa] text-[20px] text-nowrap tracking-[-0.2px]">DOK</p>
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

function Frame4() {
  return <div className="bg-[#343a6f] content-stretch flex items-center justify-end px-[16px] py-0 rounded-[8px] shrink-0 w-[1072px]" />;
}

function IconChevronDown4() {
  return (
    <div className="relative size-[24px]" data-name="icon-chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-chevron-down">
          <path d={svgPaths.p14d42000} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-center flex flex-wrap gap-[3px] items-center relative shrink-0 w-[1151px]">
      <Frame4 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <IconChevronDown4 />
        </div>
      </div>
    </div>
  );
}

function Dok() {
  return (
    <div className="basis-0 grow h-[54px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="DOK">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[27px] items-center px-[24px] py-[12px] relative size-full">
          <div className="absolute bg-[#343a6f] h-[64px] left-0 rounded-[8px] top-1/2 translate-y-[-50%] w-[1316px]" data-name="Section Header / Block" />
          <Text5 />
          <IconInfo1 />
          <Frame49 />
        </div>
      </div>
    </div>
  );
}

function SectionHeader2() {
  return (
    <div className="content-stretch flex h-[62px] items-center justify-between overflow-clip pl-0 pr-[10px] py-0 relative rounded-[8px] shrink-0 w-[1312px]" data-name="Section Header">
      <Dok />
    </div>
  );
}

function Info1() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 p-[8px] rounded-[4px] top-0 w-[1312px]" data-name="Info">
      <SectionHeader2 />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Group">
      <p className="[grid-area:1_/_1] font-['Inter:Bold',sans-serif] font-bold h-[13.752px] leading-[normal] ml-0 mt-0 not-italic relative text-[13px] text-black w-[286.649px]">DOK Level Performance</p>
      <div className="[grid-area:1_/_1] h-[11.174px] ml-0 mt-[1.68px] relative w-[922.592px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="[grid-area:1_/_1] h-[284.672px] ml-0 mt-0 relative w-[931.399px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 931.4 284.672">
        <g id="Group">
          <path d={svgPaths.p319589f2} fill="var(--fill-0, #CCCCCC)" id="Vector" />
          <path d={svgPaths.p325e80f0} fill="var(--fill-0, #CCCCCC)" id="Vector_2" />
          <path d={svgPaths.p1cc04c00} fill="var(--fill-0, #CCCCCC)" id="Vector_3" />
          <path d={svgPaths.p24ae300} fill="var(--fill-0, #CCCCCC)" id="Vector_4" />
          <path d={svgPaths.p18cc72f1} fill="var(--fill-0, #CCCCCC)" id="Vector_5" />
          <path d={svgPaths.p3d48ba80} fill="var(--fill-0, #EBEBEB)" id="Vector_6" />
          <path d={svgPaths.p12f50580} fill="var(--fill-0, #EBEBEB)" id="Vector_7" />
          <path d={svgPaths.p58fc000} fill="var(--fill-0, #EBEBEB)" id="Vector_8" />
          <path d={svgPaths.p2c35f400} fill="var(--fill-0, #EBEBEB)" id="Vector_9" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="[grid-area:1_/_1] h-[269.114px] ml-[6.38%] mt-[5.26%] relative w-[812.577px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 812.577 269.114">
        <g id="Group">
          <path d={svgPaths.p2976fb00} fill="var(--fill-0, #3366CC)" id="Vector" />
          <path d={svgPaths.pa360e00} fill="var(--fill-0, #3366CC)" id="Vector_2" />
          <path d={svgPaths.p10f51b00} fill="var(--fill-0, #3366CC)" id="Vector_3" />
          <path d={svgPaths.p30324b40} fill="var(--fill-0, #C62828)" id="Vector_4" />
          <path d={svgPaths.p11c9f100} fill="var(--fill-0, #C62828)" id="Vector_5" />
          <path d={svgPaths.p8d73200} fill="var(--fill-0, #C62828)" id="Vector_6" />
          <path d={svgPaths.p22064600} fill="var(--fill-0, #8A8A8A)" id="Vector_7" />
          <path d={svgPaths.pa6aea00} fill="var(--fill-0, #8A8A8A)" id="Vector_8" />
          <path d={svgPaths.p18134100} fill="var(--fill-0, #FF9900)" id="Vector_9" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="[grid-area:1_/_1] h-[1.153px] ml-0 mt-[99.6%] relative w-[931.399px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 931.4 1.15252">
        <g id="Group">
          <path d={svgPaths.p18cc72f1} fill="var(--fill-0, #333333)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[7.42%] mt-[2.87%] place-items-start relative" data-name="Group">
      <Group1 />
      <Group2 />
      <Group4 />
    </div>
  );
}

function Group6() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[21.84%] mt-[94.22%] place-items-start relative" data-name="Group">
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal h-[18.44px] leading-[normal] ml-[36.41px] mt-0 not-italic relative text-[#222] text-[13px] text-center translate-x-[-50%] w-[72.825px]">DOK 1</p>
    </div>
  );
}

function Group7() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[56.5%] mt-[94.22%] place-items-start relative" data-name="Group">
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal h-[18.44px] leading-[normal] ml-[38.33px] mt-0 not-italic relative text-[#222] text-[13px] text-center translate-x-[-50%] w-[76.658px]">DOK 2</p>
    </div>
  );
}

function Group8() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[91.37%] mt-[94.22%] place-items-start relative" data-name="Group">
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal h-[18.44px] leading-[normal] ml-[38.33px] mt-0 not-italic relative text-[#222] text-[13px] text-center translate-x-[-50%] w-[76.658px]">DOK 3</p>
    </div>
  );
}

function Group9() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[1.87%] mt-[88.81%] place-items-start relative" data-name="Group">
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal h-[18.44px] leading-[normal] ml-[33.04px] mt-0 not-italic relative text-[#444] text-[13px] text-right translate-x-[-100%] w-[33.041px]">0</p>
    </div>
  );
}

function Group10() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[1.87%] mt-[66.61%] place-items-start relative" data-name="Group">
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal h-[18.44px] leading-[normal] ml-[33.04px] mt-0 not-italic relative text-[#444] text-[13px] text-right translate-x-[-100%] w-[33.043px]">5</p>
    </div>
  );
}

function Group11() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[44.4%] place-items-start relative" data-name="Group">
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal h-[18.44px] leading-[normal] ml-[49.69px] mt-0 not-italic relative text-[#444] text-[13px] text-right translate-x-[-100%] w-[49.687px]">10</p>
    </div>
  );
}

function Group12() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[22.2%] place-items-start relative" data-name="Group">
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal h-[18.44px] leading-[normal] ml-[49.69px] mt-0 not-italic relative text-[#444] text-[13px] text-right translate-x-[-100%] w-[49.689px]">15</p>
    </div>
  );
}

function Group13() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[2.14%] mt-0 place-items-start relative" data-name="Group">
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal h-[17.669px] leading-[normal] ml-0 mt-0 not-italic relative text-[#444] text-[13px] w-[66.591px]">20</p>
    </div>
  );
}

function Group14() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-0 place-items-start relative" data-name="Group">
      <Group6 />
      <Group7 />
      <Group8 />
      <Group9 />
      <Group10 />
      <Group11 />
      <Group12 />
      <Group13 />
    </div>
  );
}

function Group15() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Group">
      <div className="[grid-area:1_/_1] h-[284.672px] ml-[74.6px] mt-[9.16px] relative w-[931.399px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <Group5 />
      <Group14 />
    </div>
  );
}

function Group16() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[29.81%] mt-0 place-items-start relative" data-name="Group">
      <p className="[grid-area:1_/_1] font-['Rubik:Regular',sans-serif] font-normal h-[13.752px] leading-[normal] ml-0 mt-0 relative text-[#222] text-[11px] w-[115.218px]">Correct</p>
    </div>
  );
}

function Group17() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-0 place-items-start relative" data-name="Group">
      <div className="[grid-area:1_/_1] h-[11.174px] ml-0 mt-[1.68px] relative w-[170.923px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <Group16 />
      <div className="[grid-area:1_/_1] h-[11.174px] ml-0 mt-[1.68px] relative w-[42.731px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.7307 11.1736">
          <path d={svgPaths.p3f8df300} fill="var(--fill-0, #3366CC)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group18() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[26.37%] mt-0 place-items-start relative" data-name="Group">
      <p className="[grid-area:1_/_1] font-['Rubik:Regular',sans-serif] font-normal h-[13.752px] leading-[normal] ml-0 mt-0 relative text-[#222] text-[11px] w-[142.278px]">Incorrect</p>
    </div>
  );
}

function Group19() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-[27.82%] place-items-start relative" data-name="Group">
      <div className="[grid-area:1_/_1] h-[11.174px] ml-0 mt-[1.68px] relative w-[170.923px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <Group18 />
      <div className="[grid-area:1_/_1] h-[11.174px] ml-0 mt-[1.68px] relative w-[42.731px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.7307 11.1736">
          <path d={svgPaths.p3f8df300} fill="var(--fill-0, #DC3912)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group20() {
  return (
    <div className="[grid-area:1_/_1] font-['Rubik:Regular',sans-serif] font-normal grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[normal] ml-[26.75%] mt-0 place-items-start relative text-[#222] text-[11px]" data-name="Group">
      <p className="[grid-area:1_/_1] h-[13.177px] ml-0 mt-0 relative w-[79.1px]">Not</p>
      <p className="[grid-area:1_/_1] h-[14.375px] ml-0 mt-[14.38px] relative w-[141.547px]">Attempted</p>
    </div>
  );
}

function Group21() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-[55.68%] place-items-start relative" data-name="Group">
      <div className="[grid-area:1_/_1] h-[25.785px] ml-0 mt-[1.66px] relative w-[170.923px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <Group20 />
      <div className="[grid-area:1_/_1] h-[11.174px] ml-0 mt-[1.66px] relative w-[42.731px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.7307 11.1736">
          <path d={svgPaths.p3f8df300} fill="var(--fill-0, #8A8A8A)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group22() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Group">
      <div className="[grid-area:1_/_1] h-[61.884px] ml-0 mt-[1.68px] relative w-[170.923px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <Group17 />
      <Group19 />
      <Group21 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-start flex flex-wrap gap-[29px_32px] h-[419px] items-start leading-[0] relative shrink-0 w-[1242px]">
      <Group />
      <Group15 />
      <Group22 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="basis-0 content-stretch flex gap-[42px] grow h-[433px] items-center min-h-px min-w-px overflow-clip relative shrink-0">
      <div className="h-[297px] relative shrink-0 w-[29px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <Frame37 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex items-center px-0 py-[64px] relative shrink-0 w-full">
      <Frame40 />
    </div>
  );
}

function ContainerBarGraph() {
  return (
    <div className="absolute bg-white h-[513px] left-[-1px] min-h-[40px] rounded-[4px] top-[71px] w-[1312px]" data-name="Container_Bar Graph">
      <div className="content-stretch flex flex-col items-start justify-center min-h-[inherit] overflow-clip px-[16px] py-[24px] relative rounded-[inherit] size-full">
        <Frame38 />
      </div>
      <div aria-hidden="true" className="absolute border-[#707070] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function DropdownDok() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 top-0 w-[1307px]" data-name="Dropdown_DOK">
      <Info1 />
      <ContainerBarGraph />
    </div>
  );
}

function DokContainerDetail() {
  return (
    <div className="h-[66px] relative shrink-0 w-[1307px]" data-name="DOK Container Detail">
      <DropdownDok />
    </div>
  );
}

function DokContainer() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[116px] items-center justify-center px-[64px] py-[16px] relative shrink-0" data-name="DOK Container">
      <DokContainerDetail />
    </div>
  );
}

function PageHeaderContainer3() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[96px] items-center justify-center px-[64px] py-[16px] relative shrink-0 w-[1435px]" data-name="Page Header Container">
      <DokContainer />
    </div>
  );
}

function DokContainer1() {
  return (
    <div className="bg-white h-[116px] relative shrink-0 w-full" data-name="DOK Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[64px] py-[16px] relative size-full">
          <PageHeaderContainer3 />
        </div>
      </div>
    </div>
  );
}

function PageStandardsAssessedContainer() {
  return (
    <div className="content-stretch flex flex-col h-[1243px] items-start relative shrink-0 w-full" data-name="Page Standards Assessed Container">
      <ContentArea1 />
      <DokContainer1 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col h-[1730px] items-start relative shrink-0 w-[1435px] z-[1]">
      <PageStandardsAssessedContainer />
    </div>
  );
}

export default function ReportStudentPerformanceStandardsOpenLogic() {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-start relative size-full" data-name="Report_StudentPerformanceStandards_OpenLogic">
      <HeaderComponent />
      <PageHeaderContainer1 />
      <Frame51 />
      <PageHeaderContainer2 />
      <Frame52 />
    </div>
  );
}