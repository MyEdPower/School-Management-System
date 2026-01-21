import svgPaths from "./svg-vlyyhaywlu";
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

function Frame() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[40px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[40px] text-nowrap tracking-[-0.8px] w-[715px]">Item Distribution Report</p>
      <IconChevronDown />
    </div>
  );
}

function PageDetailsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Page Details Container">
      <Breadcrumb />
      <Frame />
    </div>
  );
}

function Frame1() {
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
      <Frame1 />
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

function Frame2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[323px]">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[20px] text-nowrap tracking-[-0.2px] w-[343px]">Students Responses by Question</p>
    </div>
  );
}

function SubHeaderContainer() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center relative rounded-[8px] shrink-0 w-full" data-name="SubHeader_Container">
      <Frame2 />
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-nowrap w-[min-content]">View question results by clicking on question number. Click on each student to view individual student reports.</p>
    </div>
  );
}

function TabBase() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[12px] pt-0 px-[4px] relative shrink-0" data-name="_Tab Base">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#707070] text-[16px] text-center text-nowrap">Overview</p>
    </div>
  );
}

function TabBase1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[12px] pt-0 px-[4px] relative shrink-0" data-name="_Tab Base">
      <div aria-hidden="true" className="absolute border-[#343a6f] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#343a6f] text-[16px] text-center text-nowrap">By Question</p>
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

function Column() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[175px]" data-name="column 1">
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-nowrap">Student Name</p>
      <IconSort />
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

function Column1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[64px]" data-name="Column 3">
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-nowrap">% correct</p>
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

function Column2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-[87px]" data-name="Column 4">
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-nowrap">scale</p>
      <IconSort2 />
    </div>
  );
}

function Action() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[104px] shrink-0 w-[41px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[104px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#343a6f] text-[14px] text-center w-full">Q1</p>
    </div>
  );
}

function Action1() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[104px] shrink-0 w-[43px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[104px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#343a6f] text-[14px] text-center w-full">Q2</p>
    </div>
  );
}

function Action2() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[104px] shrink-0 w-[43px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[104px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#343a6f] text-[14px] text-center w-full">Q3</p>
    </div>
  );
}

function Action3() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[104px] shrink-0 w-[44px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[104px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#343a6f] text-[14px] text-center w-full">Q4</p>
    </div>
  );
}

function Action4() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[104px] shrink-0 w-[43px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[104px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#343a6f] text-[14px] text-center w-full">Q5</p>
    </div>
  );
}

function Action5() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[104px] shrink-0 w-[43px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[104px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#343a6f] text-[14px] text-center w-full">Q6</p>
    </div>
  );
}

function Action6() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[104px] shrink-0 w-[42px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[104px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#343a6f] text-[14px] text-center w-full">Q7</p>
    </div>
  );
}

function Action7() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[104px] shrink-0 w-[44px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[104px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#343a6f] text-[14px] text-center w-full">Q8</p>
    </div>
  );
}

function Action8() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[104px] shrink-0 w-[43px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[104px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#343a6f] text-[14px] text-center w-full">Q9</p>
    </div>
  );
}

function Action9() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[104px] shrink-0 w-[50px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[104px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#343a6f] text-[14px] text-center w-full">Q10</p>
    </div>
  );
}

function Action10() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[104px] shrink-0 w-[48px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[104px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#343a6f] text-[14px] text-center w-full">Q11</p>
    </div>
  );
}

function Action11() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[104px] shrink-0 w-[50px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[104px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#343a6f] text-[14px] text-center w-full">Q12</p>
    </div>
  );
}

function TableHeaderByQuestion() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Table Header_By Question">
      <div aria-hidden="true" className="absolute border-[#d4d4d4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center pb-[16px] pt-[32px] px-[8px] relative w-full">
          <Column />
          <Column1 />
          <Column2 />
          <Action />
          <Action1 />
          <Action2 />
          <Action3 />
          <Action4 />
          <Action5 />
          <Action6 />
          <Action7 />
          <Action8 />
          <Action9 />
          <Action10 />
          <Action11 />
        </div>
      </div>
    </div>
  );
}

function Name() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Name">
      <p className="basis-0 font-['Rubik:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[16px]">Boatneg, Glory</p>
    </div>
  );
}

function StudentName() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Student Name">
      <Name />
    </div>
  );
}

function StandardId() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Standard ID">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">STU-2024-001</p>
    </div>
  );
}

function RowHeaderReportsStudentId() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[190px]" data-name="RowHeader_Reports_Student_ID">
      <StudentName />
      <StandardId />
    </div>
  );
}

function Date() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[64px]" data-name="Date">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-nowrap w-[63px]">75%</p>
    </div>
  );
}

function AdvancedIndicator() {
  return <div className="bg-[#5f1980] rounded-[100px] shrink-0 size-[24px]" data-name="Advanced Indicator" />;
}

function Container() {
  return (
    <div className="content-stretch flex items-center relative rounded-[100px] shrink-0 size-[24px]" data-name="Container">
      <AdvancedIndicator />
    </div>
  );
}

function ProficiencyIndicatorCircle() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[72px]" data-name="Proficiency Indicator Circle">
      <Container />
    </div>
  );
}

function IconCheck() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon-check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon-check">
          <path clipRule="evenodd" d={svgPaths.p23f23200} fill="var(--fill-0, #121212)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function CorrectAnswerBox() {
  return (
    <div className="bg-[rgba(56,142,60,0.3)] content-stretch flex gap-[4px] h-[24px] items-center justify-center relative rounded-[8px] shrink-0 w-[44px]" data-name="Correct answer box">
      <IconCheck />
    </div>
  );
}

function CorrectAnswerBox1() {
  return (
    <div className="bg-[rgba(198,40,40,0.3)] content-stretch flex gap-[4px] items-center justify-center relative rounded-[8px] shrink-0 w-[44px]" data-name="Correct answer box">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-center text-nowrap w-[42px]">A</p>
    </div>
  );
}

function CorrectAnswerBox2() {
  return (
    <div className="bg-[rgba(198,40,40,0.3)] content-stretch flex gap-[4px] items-center justify-center relative rounded-[8px] shrink-0 w-[42px]" data-name="Correct answer box">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-center text-nowrap w-[42px]">C</p>
    </div>
  );
}

function CorrectAnswerBox3() {
  return (
    <div className="bg-[rgba(198,40,40,0.3)] content-stretch flex gap-[4px] items-center justify-center relative rounded-[8px] shrink-0 w-[44px]" data-name="Correct answer box">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-center text-nowrap w-[42px]">B</p>
    </div>
  );
}

function Table() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table">
      <div aria-hidden="true" className="absolute border-[#d4d4d4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[8px] py-[20px] relative w-full">
          <RowHeaderReportsStudentId />
          <Date />
          <ProficiencyIndicatorCircle />
          <CorrectAnswerBox />
          <CorrectAnswerBox />
          <CorrectAnswerBox1 />
          <CorrectAnswerBox />
          <CorrectAnswerBox />
          <CorrectAnswerBox />
          <CorrectAnswerBox />
          <CorrectAnswerBox />
          <CorrectAnswerBox />
          <CorrectAnswerBox1 />
          <CorrectAnswerBox2 />
          <CorrectAnswerBox3 />
        </div>
      </div>
    </div>
  );
}

function Name1() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Name">
      <p className="basis-0 font-['Rubik:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[16px]">Cash, Penny</p>
    </div>
  );
}

function StudentName1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Student Name">
      <Name1 />
    </div>
  );
}

function StandardId1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Standard ID">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">STU-2024-002</p>
    </div>
  );
}

function RowHeaderReportsStudentId1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[190px]" data-name="RowHeader_Reports_Student_ID">
      <StudentName1 />
      <StandardId1 />
    </div>
  );
}

function Date1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[64px]" data-name="Date">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-nowrap w-[63px]">67%</p>
    </div>
  );
}

function AdvancedIndicator1() {
  return <div className="bg-[#5f1980] rounded-[100px] shrink-0 size-[24px]" data-name="Advanced Indicator" />;
}

function Container1() {
  return (
    <div className="content-stretch flex items-center relative rounded-[100px] shrink-0 size-[24px]" data-name="Container">
      <AdvancedIndicator1 />
    </div>
  );
}

function ProficiencyIndicatorCircle1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[72px]" data-name="Proficiency Indicator Circle">
      <Container1 />
    </div>
  );
}

function IconCheck1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon-check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon-check">
          <path clipRule="evenodd" d={svgPaths.p23f23200} fill="var(--fill-0, #121212)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function CorrectAnswerBox4() {
  return (
    <div className="bg-[rgba(56,142,60,0.3)] content-stretch flex gap-[4px] h-[24px] items-center justify-center relative rounded-[8px] shrink-0 w-[44px]" data-name="Correct answer box">
      <IconCheck1 />
    </div>
  );
}

function CorrectAnswerBox5() {
  return (
    <div className="bg-[rgba(198,40,40,0.3)] content-stretch flex gap-[4px] items-center justify-center relative rounded-[8px] shrink-0 w-[44px]" data-name="Correct answer box">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-center text-nowrap w-[42px]">A</p>
    </div>
  );
}

function CorrectAnswerBox6() {
  return (
    <div className="bg-[rgba(198,40,40,0.3)] content-stretch flex gap-[4px] items-center justify-center relative rounded-[8px] shrink-0 w-[42px]" data-name="Correct answer box">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-center text-nowrap w-[42px]">C</p>
    </div>
  );
}

function Table1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table">
      <div aria-hidden="true" className="absolute border-[#d4d4d4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[8px] py-[24px] relative w-full">
          <RowHeaderReportsStudentId1 />
          <Date1 />
          <ProficiencyIndicatorCircle1 />
          <CorrectAnswerBox4 />
          <CorrectAnswerBox4 />
          <CorrectAnswerBox5 />
          <CorrectAnswerBox6 />
          <CorrectAnswerBox4 />
          <CorrectAnswerBox4 />
          <CorrectAnswerBox4 />
          <CorrectAnswerBox4 />
          <CorrectAnswerBox4 />
          <CorrectAnswerBox6 />
          <CorrectAnswerBox4 />
          <CorrectAnswerBox6 />
        </div>
      </div>
    </div>
  );
}

function Name2() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Name">
      <p className="basis-0 font-['Rubik:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[16px]">Fischer, Gilbert</p>
    </div>
  );
}

function StudentName2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Student Name">
      <Name2 />
    </div>
  );
}

function StandardId2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Standard ID">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">STU-2024-008</p>
    </div>
  );
}

function RowHeaderReportsStudentId2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[190px]" data-name="RowHeader_Reports_Student_ID">
      <StudentName2 />
      <StandardId2 />
    </div>
  );
}

function Date2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[64px]" data-name="Date">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-nowrap w-[63px]">75%</p>
    </div>
  );
}

function AdvancedIndicator2() {
  return <div className="bg-[#5f1980] rounded-[100px] shrink-0 size-[24px]" data-name="Advanced Indicator" />;
}

function Container2() {
  return (
    <div className="content-stretch flex items-center relative rounded-[100px] shrink-0 size-[24px]" data-name="Container">
      <AdvancedIndicator2 />
    </div>
  );
}

function ProficiencyIndicatorCircle2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[72px]" data-name="Proficiency Indicator Circle">
      <Container2 />
    </div>
  );
}

function IconCheck2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon-check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon-check">
          <path clipRule="evenodd" d={svgPaths.p23f23200} fill="var(--fill-0, #121212)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function CorrectAnswerBox7() {
  return (
    <div className="bg-[rgba(56,142,60,0.3)] content-stretch flex gap-[4px] h-[24px] items-center justify-center relative rounded-[8px] shrink-0 w-[44px]" data-name="Correct answer box">
      <IconCheck2 />
    </div>
  );
}

function CorrectAnswerBox8() {
  return (
    <div className="bg-[rgba(198,40,40,0.3)] content-stretch flex gap-[4px] items-center justify-center relative rounded-[8px] shrink-0 w-[44px]" data-name="Correct answer box">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-center text-nowrap w-[42px]">A</p>
    </div>
  );
}

function CorrectAnswerBox9() {
  return (
    <div className="bg-[rgba(198,40,40,0.3)] content-stretch flex gap-[4px] items-center justify-center relative rounded-[8px] shrink-0 w-[42px]" data-name="Correct answer box">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-center text-nowrap w-[42px]">C</p>
    </div>
  );
}

function Table2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table">
      <div aria-hidden="true" className="absolute border-[#d4d4d4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[8px] py-[24px] relative w-full">
          <RowHeaderReportsStudentId2 />
          <Date2 />
          <ProficiencyIndicatorCircle2 />
          <CorrectAnswerBox7 />
          <CorrectAnswerBox7 />
          <CorrectAnswerBox8 />
          <CorrectAnswerBox7 />
          <CorrectAnswerBox7 />
          <CorrectAnswerBox7 />
          <CorrectAnswerBox7 />
          <CorrectAnswerBox7 />
          <CorrectAnswerBox9 />
          <CorrectAnswerBox7 />
          <CorrectAnswerBox9 />
          <CorrectAnswerBox7 />
        </div>
      </div>
    </div>
  );
}

function Name3() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Name">
      <p className="basis-0 font-['Rubik:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[16px]">Griffin, Jean</p>
    </div>
  );
}

function StudentName3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Student Name">
      <Name3 />
    </div>
  );
}

function StandardId3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Standard ID">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">STU-2024-014</p>
    </div>
  );
}

function RowHeaderReportsStudentId3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[190px]" data-name="RowHeader_Reports_Student_ID">
      <StudentName3 />
      <StandardId3 />
    </div>
  );
}

function Date3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[64px]" data-name="Date">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-nowrap w-[63px]">41%</p>
    </div>
  );
}

function AdvancedIndicator3() {
  return <div className="bg-[#d93c08] rounded-[100px] shrink-0 size-[24px]" data-name="Advanced Indicator" />;
}

function Container3() {
  return (
    <div className="content-stretch flex items-center relative rounded-[100px] shrink-0 size-[24px]" data-name="Container">
      <AdvancedIndicator3 />
    </div>
  );
}

function ProficiencyIndicatorCircle3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[72px]" data-name="Proficiency Indicator Circle">
      <Container3 />
    </div>
  );
}

function CorrectAnswerBox10() {
  return (
    <div className="bg-[rgba(198,40,40,0.3)] content-stretch flex gap-[4px] items-center justify-center relative rounded-[8px] shrink-0 w-[42px]" data-name="Correct answer box">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-center text-nowrap w-[42px]">C</p>
    </div>
  );
}

function IconCheck3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon-check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon-check">
          <path clipRule="evenodd" d={svgPaths.p23f23200} fill="var(--fill-0, #121212)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function CorrectAnswerBox11() {
  return (
    <div className="bg-[rgba(56,142,60,0.3)] content-stretch flex gap-[4px] h-[24px] items-center justify-center relative rounded-[8px] shrink-0 w-[44px]" data-name="Correct answer box">
      <IconCheck3 />
    </div>
  );
}

function CorrectAnswerBox12() {
  return (
    <div className="bg-[rgba(198,40,40,0.3)] content-stretch flex gap-[4px] items-center justify-center relative rounded-[8px] shrink-0 w-[44px]" data-name="Correct answer box">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-center text-nowrap w-[42px]">A</p>
    </div>
  );
}

function CorrectAnswerBox13() {
  return (
    <div className="bg-[rgba(198,40,40,0.3)] content-stretch flex gap-[4px] items-center justify-center relative rounded-[8px] shrink-0 w-[44px]" data-name="Correct answer box">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-center text-nowrap w-[42px]">D</p>
    </div>
  );
}

function Table3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table">
      <div aria-hidden="true" className="absolute border-[#d4d4d4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[8px] py-[24px] relative w-full">
          <RowHeaderReportsStudentId3 />
          <Date3 />
          <ProficiencyIndicatorCircle3 />
          <CorrectAnswerBox10 />
          <CorrectAnswerBox11 />
          <CorrectAnswerBox12 />
          <CorrectAnswerBox10 />
          <CorrectAnswerBox11 />
          <CorrectAnswerBox13 />
          <CorrectAnswerBox11 />
          <CorrectAnswerBox11 />
          <CorrectAnswerBox12 />
          <CorrectAnswerBox10 />
          <CorrectAnswerBox11 />
          <CorrectAnswerBox13 />
        </div>
      </div>
    </div>
  );
}

function Name4() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Name">
      <p className="basis-0 font-['Rubik:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[16px]">Hardy, Holly</p>
    </div>
  );
}

function StudentName4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Student Name">
      <Name4 />
    </div>
  );
}

function StandardId4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Standard ID">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">STU-2024-021</p>
    </div>
  );
}

function RowHeaderReportsStudentId4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[190px]" data-name="RowHeader_Reports_Student_ID">
      <StudentName4 />
      <StandardId4 />
    </div>
  );
}

function Date4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[64px]" data-name="Date">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-nowrap w-[63px]">
        <p className="mb-0 overflow-ellipsis overflow-hidden">83%</p>
        <p className="overflow-ellipsis overflow-hidden">&nbsp;</p>
      </div>
    </div>
  );
}

function AdvancedIndicator4() {
  return <div className="bg-[#2a692d] rounded-[100px] shrink-0 size-[24px]" data-name="Advanced Indicator" />;
}

function Container4() {
  return (
    <div className="content-stretch flex items-center relative rounded-[100px] shrink-0 size-[24px]" data-name="Container">
      <AdvancedIndicator4 />
    </div>
  );
}

function ProficiencyIndicatorCircle4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[72px]" data-name="Proficiency Indicator Circle">
      <Container4 />
    </div>
  );
}

function IconCheck4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon-check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon-check">
          <path clipRule="evenodd" d={svgPaths.p23f23200} fill="var(--fill-0, #121212)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function CorrectAnswerBox14() {
  return (
    <div className="bg-[rgba(56,142,60,0.3)] content-stretch flex gap-[4px] h-[24px] items-center justify-center relative rounded-[8px] shrink-0 w-[44px]" data-name="Correct answer box">
      <IconCheck4 />
    </div>
  );
}

function CorrectAnswerBox15() {
  return (
    <div className="bg-[rgba(198,40,40,0.3)] content-stretch flex gap-[4px] items-center justify-center relative rounded-[8px] shrink-0 w-[42px]" data-name="Correct answer box">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-center text-nowrap w-[42px]">C</p>
    </div>
  );
}

function CorrectAnswerBox16() {
  return (
    <div className="bg-[rgba(198,40,40,0.3)] content-stretch flex gap-[4px] items-center justify-center relative rounded-[8px] shrink-0 w-[44px]" data-name="Correct answer box">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-center text-nowrap w-[42px]">B</p>
    </div>
  );
}

function Table4() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table">
      <div aria-hidden="true" className="absolute border-[#d4d4d4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[8px] py-[24px] relative w-full">
          <RowHeaderReportsStudentId4 />
          <Date4 />
          <ProficiencyIndicatorCircle4 />
          <CorrectAnswerBox14 />
          <CorrectAnswerBox14 />
          <CorrectAnswerBox14 />
          <CorrectAnswerBox14 />
          <CorrectAnswerBox14 />
          <CorrectAnswerBox14 />
          <CorrectAnswerBox14 />
          <CorrectAnswerBox14 />
          <CorrectAnswerBox14 />
          <CorrectAnswerBox15 />
          <CorrectAnswerBox16 />
          <CorrectAnswerBox14 />
        </div>
      </div>
    </div>
  );
}

function TableItemDistributionReport() {
  return (
    <div className="content-stretch flex flex-col h-[588px] items-start overflow-clip relative shrink-0 w-full" data-name="Table_ItemDistribution_Report">
      <TabBar1 />
      <TableHeaderByQuestion />
      <Table />
      <Table1 />
      <Table2 />
      <Table3 />
      <Table4 />
    </div>
  );
}

function TableContainer() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Table Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-center justify-center pb-[128px] pt-[40px] px-[64px] relative w-full">
          <SubHeaderContainer />
          <TableItemDistributionReport />
        </div>
      </div>
    </div>
  );
}

export default function ClassSummayItemDistributionLockedLogicBYQuestion() {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-start relative size-full" data-name="Class Summay - Item Distribution Locked Logic bY Question">
      <HeaderComponent />
      <TableContainer />
    </div>
  );
}