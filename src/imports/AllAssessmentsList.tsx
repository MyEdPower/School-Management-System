import svgPaths from "./svg-2v038wduse";
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

function Frame6() {
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
      <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-solid border-white inset-0 pointer-events-none" />
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
      <Frame6 />
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
    <div className="content-stretch flex flex-col items-start shrink-0 sticky top-0 w-full z-[3]">
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
    <div className="content-stretch flex gap-[480px] items-center min-w-[1312px] relative shrink-0 w-full" data-name="Filter_Row">
      <SearchContainer />
      <Frame2 />
    </div>
  );
}

function Down() {
  return (
    <div className="absolute bottom-[16.67%] left-[8.33%] right-1/2 top-[29.17%]" data-name="Down">
      <div className="absolute inset-[-7.69%_-10%]">
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
    <div className="absolute bottom-[29.17%] left-1/2 right-[8.33%] top-[16.67%]" data-name="Up">
      <div className="absolute inset-[-7.69%_-10%_-7.7%_-10%]">
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
    <div className="absolute contents inset-[16.67%_8.33%]">
      <Down />
      <Up />
    </div>
  );
}

function IconSort() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="icon-sort">
      <Group1 />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[360px]" data-name="1">
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-nowrap">class name</p>
      <IconSort />
    </div>
  );
}

function Down1() {
  return (
    <div className="absolute bottom-[16.67%] left-[8.33%] right-1/2 top-[29.17%]" data-name="Down">
      <div className="absolute inset-[-7.69%_-10%]">
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
    <div className="absolute bottom-[29.17%] left-1/2 right-[8.33%] top-[16.67%]" data-name="Up">
      <div className="absolute inset-[-7.69%_-10%_-7.7%_-10%]">
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
    <div className="absolute contents inset-[16.67%_8.33%]">
      <Down1 />
      <Up1 />
    </div>
  );
}

function IconSort1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="icon-sort">
      <Group3 />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[172px]" data-name="2">
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-nowrap">Student Progress</p>
      <IconSort1 />
    </div>
  );
}

function Down2() {
  return (
    <div className="absolute bottom-[16.67%] left-[8.33%] right-1/2 top-[29.17%]" data-name="Down">
      <div className="absolute inset-[-7.69%_-10%]">
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
    <div className="absolute bottom-[29.17%] left-1/2 right-[8.33%] top-[16.67%]" data-name="Up">
      <div className="absolute inset-[-7.69%_-10%_-7.7%_-10%]">
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

function Group4() {
  return (
    <div className="absolute contents inset-[16.67%_8.33%]">
      <Down2 />
      <Up2 />
    </div>
  );
}

function IconSort2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="icon-sort">
      <Group4 />
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[112px]" data-name="3">
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-nowrap">Course(s)</p>
      <IconSort2 />
    </div>
  );
}

function Down3() {
  return (
    <div className="absolute bottom-[16.67%] left-[8.33%] right-1/2 top-[29.17%]" data-name="Down">
      <div className="absolute inset-[-7.69%_-10%]">
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
    <div className="absolute bottom-[29.17%] left-1/2 right-[8.33%] top-[16.67%]" data-name="Up">
      <div className="absolute inset-[-7.69%_-10%_-7.7%_-10%]">
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

function Group5() {
  return (
    <div className="absolute contents inset-[16.67%_8.33%]">
      <Down3 />
      <Up3 />
    </div>
  );
}

function IconSort3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="icon-sort">
      <Group5 />
    </div>
  );
}

function Component5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[118px]" data-name="7">
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-nowrap">Battery</p>
      <IconSort3 />
    </div>
  );
}

function Down4() {
  return (
    <div className="absolute bottom-[16.67%] left-[8.33%] right-1/2 top-[29.17%]" data-name="Down">
      <div className="absolute inset-[-7.69%_-10%]">
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

function Up4() {
  return (
    <div className="absolute bottom-[29.17%] left-1/2 right-[8.33%] top-[16.67%]" data-name="Up">
      <div className="absolute inset-[-7.69%_-10%_-7.7%_-10%]">
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

function Group6() {
  return (
    <div className="absolute contents inset-[16.67%_8.33%]">
      <Down4 />
      <Up4 />
    </div>
  );
}

function IconSort4() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="icon-sort">
      <Group6 />
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[112px]" data-name="4">
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-nowrap">Due Date</p>
      <IconSort4 />
    </div>
  );
}

function Down5() {
  return (
    <div className="absolute bottom-[16.67%] left-[8.33%] right-1/2 top-[29.17%]" data-name="Down">
      <div className="absolute inset-[-7.69%_-10%]">
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

function Up5() {
  return (
    <div className="absolute bottom-[29.17%] left-1/2 right-[8.33%] top-[16.67%]" data-name="Up">
      <div className="absolute inset-[-7.69%_-10%_-7.7%_-10%]">
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

function Group7() {
  return (
    <div className="absolute contents inset-[16.67%_8.33%]">
      <Down5 />
      <Up5 />
    </div>
  );
}

function IconSort5() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="icon-sort">
      <Group7 />
    </div>
  );
}

function Component6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[104px]" data-name="8">
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-nowrap">Author</p>
      <IconSort5 />
    </div>
  );
}

function Component4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[107px]" data-name="6">
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-nowrap">Controls</p>
    </div>
  );
}

function WireframeTableHeader() {
  return (
    <div className="content-stretch flex gap-[24px] items-center pb-[16px] pt-[32px] px-[8px] relative rounded-[4px] shrink-0 w-[1312px]" data-name="Wireframe/Table Header">
      <div aria-hidden="true" className="absolute border-[#f7f7f7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Component />
      <Component1 />
      <Component2 />
      <Component5 />
      <Component3 />
      <Component6 />
      <Component4 />
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

function Group8() {
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

function Group12() {
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

function Group14() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-[#03b0e8] bottom-0 right-0 size-[18px]" />
      <div className="absolute bg-[#03b0e8] left-0 size-[18px] top-0" />
      <Group />
      <Group2 />
      <Group8 />
      <Group12 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute left-1/2 rounded-[2px] size-[36px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <div aria-hidden="true" className="absolute border-2 border-[#03b0e8] border-solid inset-[-2px] pointer-events-none rounded-[4px]" />
      <Group14 />
    </div>
  );
}

function IconContainer() {
  return (
    <div className="absolute left-1/2 overflow-clip rounded-[2.5px] size-[50px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="icon container">
      <Frame4 />
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

function PrimaryContainer() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-0 py-[8px] relative shrink-0" data-name="Primary Container">
      <div aria-hidden="true" className="absolute border-[#f7f7f7] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <SubjectIcon />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px] w-[296px]">Math Assessment</p>
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

function Column() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">4/30</p>
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
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">Battery Group 2</p>
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
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">Ryan Hobbs</p>
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
    <div className="bg-white h-[72px] relative shrink-0 w-[1312px]" data-name="Assessment Table Row">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <PrimaryContainer />
        <Secondary />
        <Controls />
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

function SubjectIcon1() {
  return (
    <div className="overflow-clip relative rounded-[8px] shrink-0 size-[56px]" data-name="Subject Icon">
      <IconContainer1 />
    </div>
  );
}

function PrimaryContainer1() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-0 py-[8px] relative shrink-0" data-name="Primary Container">
      <div aria-hidden="true" className="absolute border-[#f7f7f7] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <SubjectIcon1 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px] w-[296px]">Science Assessment</p>
    </div>
  );
}

function ProgressBarLinear1() {
  return (
    <div className="bg-[#c4c8e1] h-[8px] overflow-clip relative rounded-[32px] shrink-0 w-[120px]" data-name="Progress Bar / Linear">
      <div className="absolute bg-[#343a6f] h-[8px] left-0 rounded-[100px] top-0 w-[72px]" />
    </div>
  );
}

function Column5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">20/30</p>
      <ProgressBarLinear1 />
    </div>
  );
}

function Column6() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">Grade 5</p>
    </div>
  );
}

function Column7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">Battery Group 4</p>
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
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">Jon Brundage</p>
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
    <div className="bg-white h-[72px] relative shrink-0 w-[1312px]" data-name="Assessment Table Row">
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
    <div className="bg-white relative shrink-0 w-[1312px]" data-name="Assessment Table Row">
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

function Group13() {
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

function SubjectIcon3() {
  return (
    <div className="overflow-clip relative rounded-[8px] shrink-0 size-[56px]" data-name="Subject Icon">
      <Group13 />
    </div>
  );
}

function PrimaryContainer3() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-0 py-[8px] relative shrink-0" data-name="Primary Container">
      <div aria-hidden="true" className="absolute border-[#f7f7f7] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <SubjectIcon3 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px] w-[296px]">History Assessment</p>
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

function Column15() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] w-[48px]">28/32</p>
      <ProgressBarLinear3 />
    </div>
  );
}

function Column16() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">Grade 10</p>
    </div>
  );
}

function Column17() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">Battery Group 1</p>
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
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">Sumin Chou</p>
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
    <div className="bg-white h-[72px] relative shrink-0 w-[1312px]" data-name="Assessment Table Row">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <PrimaryContainer3 />
        <Secondary3 />
        <Controls3 />
      </div>
      <div aria-hidden="true" className="absolute border-[#d4d4d4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Group9() {
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

function Group10() {
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

function Group11() {
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

function Group15() {
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

function Group16() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-[#03b0e8] bottom-0 right-0 size-[18px]" />
      <div className="absolute bg-[#03b0e8] left-0 size-[18px] top-0" />
      <Group9 />
      <Group10 />
      <Group11 />
      <Group15 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute left-1/2 rounded-[2px] size-[36px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <div aria-hidden="true" className="absolute border-2 border-[#03b0e8] border-solid inset-[-2px] pointer-events-none rounded-[4px]" />
      <Group16 />
    </div>
  );
}

function IconContainer2() {
  return (
    <div className="absolute left-1/2 overflow-clip rounded-[2.5px] size-[50px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="icon container">
      <Frame5 />
    </div>
  );
}

function SubjectIcon4() {
  return (
    <div className="overflow-clip relative rounded-[8px] shrink-0 size-[56px]" data-name="Subject Icon">
      <IconContainer2 />
    </div>
  );
}

function PrimaryContainer4() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-0 py-[8px] relative shrink-0" data-name="Primary Container">
      <div aria-hidden="true" className="absolute border-[#f7f7f7] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <SubjectIcon4 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px] w-[296px]">Math Assessment</p>
    </div>
  );
}

function Column20() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-w-[112px] relative rounded-[4px] shrink-0 w-[172px]" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">-</p>
    </div>
  );
}

function Column21() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">Grade 10</p>
    </div>
  );
}

function Column22() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">Battery Group 2</p>
    </div>
  );
}

function Column23() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">-</p>
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
    <div className="bg-white h-[72px] relative shrink-0 w-[1312px]" data-name="Assessment Table Row">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <PrimaryContainer4 />
        <Secondary4 />
        <Controls4 />
      </div>
      <div aria-hidden="true" className="absolute border-[#d4d4d4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function IconContainer3() {
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

function SubjectIcon5() {
  return (
    <div className="overflow-clip relative rounded-[8px] shrink-0 size-[56px]" data-name="Subject Icon">
      <IconContainer3 />
    </div>
  );
}

function PrimaryContainer5() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-0 py-[8px] relative shrink-0" data-name="Primary Container">
      <div aria-hidden="true" className="absolute border-[#f7f7f7] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <SubjectIcon5 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px] w-[296px]">Science Assessment</p>
    </div>
  );
}

function Column25() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-w-[112px] relative rounded-[4px] shrink-0 w-[172px]" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">-</p>
    </div>
  );
}

function Column26() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">Grade 5</p>
    </div>
  );
}

function Column27() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">Battery Group 4</p>
    </div>
  );
}

function Column28() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">-</p>
    </div>
  );
}

function Column29() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">Jon Brundage</p>
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
    <div className="bg-white h-[72px] relative shrink-0 w-[1312px]" data-name="Assessment Table Row">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <PrimaryContainer5 />
        <Secondary5 />
        <Controls5 />
      </div>
      <div aria-hidden="true" className="absolute border-[#d4d4d4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SubjectIcon6() {
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

function PrimaryContainer6() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-0 py-[8px] relative shrink-0" data-name="Primary Container">
      <div aria-hidden="true" className="absolute border-[#f7f7f7] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <SubjectIcon6 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px] w-[296px]">Reading Assessment</p>
    </div>
  );
}

function Column30() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-w-[112px] relative rounded-[4px] shrink-0 w-[172px]" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">-</p>
    </div>
  );
}

function Column31() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">Grade 9</p>
    </div>
  );
}

function Column32() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">Battery Group 3</p>
    </div>
  );
}

function Column33() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">-</p>
    </div>
  );
}

function Column34() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">Rebecca Ojala</p>
    </div>
  );
}

function ColumnsContainer6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Columns container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[24px] py-0 relative w-full">
          <Column30 />
          <Column31 />
          <Column32 />
          <Column33 />
          <Column34 />
        </div>
      </div>
    </div>
  );
}

function Secondary6() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px overflow-x-auto overflow-y-clip px-0 py-[12px] relative shrink-0" data-name="Secondary">
      <ColumnsContainer6 />
    </div>
  );
}

function Action18() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[71px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#343a6f] text-[14px] text-nowrap">Assign</p>
    </div>
  );
}

function Action19() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[52px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#343a6f] text-[14px] text-nowrap">Edit</p>
    </div>
  );
}

function Action20() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[81px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#343a6f] text-[14px] text-nowrap">Favorite</p>
    </div>
  );
}

function Controls6() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center px-[8px] py-[16px] relative shrink-0" data-name="Controls">
      <div aria-hidden="true" className="absolute border-[#f7f7f7] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Action18 />
      <Action19 />
      <Action20 />
    </div>
  );
}

function AssessmentTableRow6() {
  return (
    <div className="bg-white relative shrink-0 w-[1312px]" data-name="Assessment Table Row">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] w-full">
        <PrimaryContainer6 />
        <Secondary6 />
        <div className="flex flex-row items-center self-stretch">
          <Controls6 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#d4d4d4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Group17() {
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

function SubjectIcon7() {
  return (
    <div className="overflow-clip relative rounded-[8px] shrink-0 size-[56px]" data-name="Subject Icon">
      <Group17 />
    </div>
  );
}

function PrimaryContainer7() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-0 py-[8px] relative shrink-0" data-name="Primary Container">
      <div aria-hidden="true" className="absolute border-[#f7f7f7] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <SubjectIcon7 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px] w-[296px]">History Assessment</p>
    </div>
  );
}

function Column35() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-w-[112px] relative rounded-[4px] shrink-0 w-[172px]" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] w-[48px]">-</p>
    </div>
  );
}

function Column36() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">Grade 10</p>
    </div>
  );
}

function Column37() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">Battery Group 1</p>
    </div>
  );
}

function Column38() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">-</p>
    </div>
  );
}

function Column39() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-[112px] relative rounded-[4px] shrink-0" data-name="Column">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] min-w-[48px] relative shrink-0 text-[#121212] text-[16px] text-nowrap">Sumin Chou</p>
    </div>
  );
}

function ColumnsContainer7() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Columns container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[24px] py-0 relative w-full">
          <Column35 />
          <Column36 />
          <Column37 />
          <Column38 />
          <Column39 />
        </div>
      </div>
    </div>
  );
}

function Secondary7() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px overflow-x-auto overflow-y-clip px-0 py-[12px] relative shrink-0" data-name="Secondary">
      <ColumnsContainer7 />
    </div>
  );
}

function Action21() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[71px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#343a6f] text-[14px] text-nowrap">Assign</p>
    </div>
  );
}

function Action22() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[52px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#343a6f] text-[14px] text-nowrap">Edit</p>
    </div>
  );
}

function Action23() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[24px] shrink-0 w-[81px]" data-name="Action">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#343a6f] text-[14px] text-nowrap">Favorite</p>
    </div>
  );
}

function Controls7() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center px-[8px] py-[16px] relative shrink-0" data-name="Controls">
      <div aria-hidden="true" className="absolute border-[#f7f7f7] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Action21 />
      <Action22 />
      <Action23 />
    </div>
  );
}

function AssessmentTableRow7() {
  return (
    <div className="bg-white h-[72px] relative shrink-0 w-[1312px]" data-name="Assessment Table Row">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <PrimaryContainer7 />
        <Secondary7 />
        <Controls7 />
      </div>
      <div aria-hidden="true" className="absolute border-[#d4d4d4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableGrid() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Table Grid">
      <WireframeTableHeader />
      <AssessmentTableRow />
      <AssessmentTableRow1 />
      {[...Array(2).keys()].map((_, i) => (
        <AssessmentTableRow2 key={i} />
      ))}
      <AssessmentTableRow3 />
      <AssessmentTableRow1 />
      <AssessmentTableRow4 />
      <AssessmentTableRow5 />
      <AssessmentTableRow6 />
      <AssessmentTableRow6 />
      <AssessmentTableRow4 />
      <AssessmentTableRow6 />
      <AssessmentTableRow7 />
      <AssessmentTableRow5 />
      <AssessmentTableRow4 />
      <AssessmentTableRow5 />
      <AssessmentTableRow6 />
      <AssessmentTableRow6 />
      <AssessmentTableRow7 />
      <AssessmentTableRow5 />
    </div>
  );
}

function SectionContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center justify-center pb-[128px] pt-[40px] px-[64px] relative shrink-0 w-[1440px] z-[2]" data-name="Section Container">
      <FilterRow1 />
      <TableGrid />
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

export default function AllAssessmentsList() {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-start relative size-full" data-name="All Assessments - List">
      <Frame1 />
      <SectionContainer />
      <LayoutFooter />
    </div>
  );
}