import svgPaths from "./svg-n93btfxe2q";
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

function Frame24() {
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
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-center text-nowrap text-white">Assessments</p>
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
      <Frame24 />
      <TabBar />
      <AccountInfoContainer />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="header">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#333] text-[32px] text-nowrap">Hello, Hunter</p>
    </div>
  );
}

function ParentContainer() {
  return (
    <div className="bg-white h-[104px] relative shrink-0 w-full" data-name="Parent Container">
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pb-[24px] pt-[32px] px-[64px] relative size-full">
          <Header />
        </div>
      </div>
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
        <g clipPath="url(#clip0_1_5457)" id="Icon Left">
          <g id="Shape">
            <path clipRule="evenodd" d={svgPaths.p299a9980} fill="#707070" fillRule="evenodd" />
            <path d={svgPaths.p1f22ed00} fill="#707070" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_5457">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonConcept() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center min-h-[40px] min-w-[40px] px-[16px] py-[12px] relative rounded-[100px] shrink-0" data-name="Button _Concept 2">
      <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <IconLeft />
      <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[16px] text-center">Create New Assessment</p>
    </div>
  );
}

function IconLeft1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_5448)" id="Icon Left">
          <g id="Shape">
            <path clipRule="evenodd" d={svgPaths.p36c4df70} fill="#707070" fillRule="evenodd" />
            <path d={svgPaths.p1dd8e900} fill="#707070" />
            <path d={svgPaths.p32a5d900} fill="#707070" />
            <path d={svgPaths.p296f7520} fill="#707070" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_5448">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonConcept2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center min-h-[40px] min-w-[40px] px-[16px] py-[12px] relative rounded-[100px] shrink-0" data-name="Button _Concept 2">
      <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <IconLeft1 />
      <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[16px] text-center">Create a Classroom</p>
    </div>
  );
}

function IconLeft2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_5415)" id="Icon Left">
          <g id="Shape">
            <path d={svgPaths.p6e27940} fill="#707070" />
            <path d={svgPaths.p37353180} fill="#707070" />
            <path d={svgPaths.p16f07300} fill="#707070" />
            <path clipRule="evenodd" d={svgPaths.p2dacaf00} fill="#707070" fillRule="evenodd" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_5415">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonConcept1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center min-h-[40px] min-w-[40px] px-[16px] py-[12px] relative rounded-[100px] shrink-0" data-name="Button _Concept 3">
      <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <IconLeft2 />
      <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[16px] text-center">Upload Resources</p>
    </div>
  );
}

function FilterRow() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Filter Row">
      <ButtonConcept />
      <ButtonConcept2 />
      <ButtonConcept1 />
    </div>
  );
}

function SortingControls() {
  return (
    <div className="content-stretch flex gap-[16px] h-[48px] items-center relative shrink-0 w-[1312px]" data-name="Sorting Controls">
      <FilterRow />
    </div>
  );
}

function Chart() {
  return (
    <div className="basis-0 grow min-h-px min-w-px overflow-clip relative shrink-0 w-full" data-name="Chart">
      <div className="absolute h-[101px] left-[calc(50%+49px)] top-[calc(50%-50.5px)] translate-x-[-50%] translate-y-[-50%] w-[100px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 101">
          <path d={svgPaths.p6cf3500} fill="var(--fill-0, #55822B)" id="Ellipse 288" />
        </svg>
      </div>
      <div className="absolute h-[132.262px] left-[calc(50%-51.01px)] top-[calc(50%-34.87px)] translate-x-[-50%] translate-y-[-50%] w-[99.974px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 99.9735 132.262">
          <path d={svgPaths.p34a9a700} fill="var(--fill-0, #343A6F)" id="Ellipse 287" />
        </svg>
      </div>
      <div className="absolute h-[101px] left-[calc(50%+1.45px)] top-[calc(50%+50.5px)] translate-x-[-50%] translate-y-[-50%] w-[195.106px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 195.106 101">
          <g id="Ellipse 286">
            <path d={svgPaths.p226e4dc0} fill="var(--fill-0, #5779C9)" />
            <path d={svgPaths.p226e4dc0} fill="var(--fill-1, black)" fillOpacity="0.2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-[#343a6f] h-[20px] rounded-[2px] shrink-0 w-[4px]" data-name="Subject Color" />
      <p className="-webkit-box font-['Rubik:Regular',sans-serif] font-normal leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-nowrap">Assigned</p>
    </div>
  );
}

function Notification() {
  return (
    <div className="relative shrink-0 w-full" data-name="Notification">
      <div aria-hidden="true" className="absolute border-[#f7f7f7] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[4px] relative w-full">
          <Frame2 />
          <p className="-webkit-box font-['Rubik:Regular',sans-serif] font-normal leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-nowrap">15</p>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="h-[20px] rounded-[2px] shrink-0 w-[4px]" data-name="Subject Color" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(87, 121, 201) 0%, rgb(87, 121, 201) 100%)" }} />
      <p className="-webkit-box font-['Rubik:Regular',sans-serif] font-normal leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-nowrap">In Progress</p>
    </div>
  );
}

function Notification1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Notification">
      <div aria-hidden="true" className="absolute border-[#f7f7f7] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[4px] relative w-full">
          <Frame3 />
          <p className="-webkit-box font-['Rubik:Regular',sans-serif] font-normal leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-nowrap">22</p>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-[#55822b] h-[20px] rounded-[2px] shrink-0 w-[4px]" data-name="Subject Color" />
      <p className="-webkit-box font-['Rubik:Regular',sans-serif] font-normal leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-nowrap">Completed</p>
    </div>
  );
}

function Notification2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Notification">
      <div aria-hidden="true" className="absolute border-[#f7f7f7] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[4px] relative w-full">
          <Frame4 />
          <p className="-webkit-box font-['Rubik:Regular',sans-serif] font-normal leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-nowrap">12</p>
        </div>
      </div>
    </div>
  );
}

function Stats() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Stats">
      <Notification />
      <Notification1 />
      <Notification2 />
    </div>
  );
}

function ChartCard() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start justify-center p-[24px] relative rounded-[8px] shrink-0 size-[416px]" data-name="Chart Card">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_3px_1px_rgba(0,0,0,0.15)]" />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[20px] text-nowrap tracking-[-0.2px] w-full">Assessment Overview</p>
      <Chart />
      <Stats />
    </div>
  );
}

function IconRight() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon Right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon Right">
          <path d={svgPaths.p339a49f0} fill="var(--fill-0, #8A8A8A)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function IconRight1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon Right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon Right">
          <path d={svgPaths.p12938870} fill="var(--fill-0, #8A8A8A)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function SceondaryInfo() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="sceondary info">
      <p className="capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#8a8a8a] text-[14px] text-nowrap">{`June 22nd – june 29th `}</p>
      <IconRight />
      <IconRight1 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] overflow-ellipsis overflow-hidden relative shrink-0 text-[#333] text-[20px] text-nowrap tracking-[-0.2px]">Assessment Overview</p>
      <SceondaryInfo />
    </div>
  );
}

function Saturday() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex gap-[4px] h-[312px] items-start justify-center p-[8px] relative shrink-0 w-[116.571px]" data-name="Saturday">
      <div aria-hidden="true" className="absolute border-[#f7f7f7] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#8a8a8a] text-[16px] text-nowrap">S</p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#333] text-[16px] text-nowrap">6/28</p>
    </div>
  );
}

function Sunday() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex gap-[4px] h-[312px] items-start justify-center p-[8px] relative shrink-0 w-[116.571px]" data-name="Sunday">
      <div aria-hidden="true" className="absolute border-[#f7f7f7] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#8a8a8a] text-[16px] text-nowrap">S</p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#333] text-[16px] text-nowrap">6/22</p>
    </div>
  );
}

function Monday() {
  return (
    <div className="content-stretch flex gap-[4px] h-[312px] items-start justify-center p-[8px] relative shrink-0 w-[116.571px]" data-name="Monday">
      <div aria-hidden="true" className="absolute border-[#f7f7f7] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#8a8a8a] text-[16px] text-nowrap">M</p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#333] text-[16px] text-nowrap">6/23</p>
    </div>
  );
}

function Tuesday() {
  return (
    <div className="content-stretch flex gap-[4px] h-[312px] items-start justify-center p-[8px] relative shrink-0 w-[116.571px]" data-name="Tuesday">
      <div aria-hidden="true" className="absolute border-[#f7f7f7] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#8a8a8a] text-[16px] text-nowrap">T</p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#333] text-[16px] text-nowrap">6/24</p>
    </div>
  );
}

function Wednesday() {
  return (
    <div className="content-stretch flex gap-[4px] h-[312px] items-start justify-center p-[8px] relative shrink-0 w-[116.571px]" data-name="Wednesday">
      <div aria-hidden="true" className="absolute border-[#f7f7f7] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#8a8a8a] text-[16px] text-nowrap">W</p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#333] text-[16px] text-nowrap">6/25</p>
    </div>
  );
}

function Thursday() {
  return (
    <div className="content-stretch flex gap-[4px] h-[312px] items-start justify-center p-[8px] relative shrink-0 w-[116.571px]" data-name="Thursday">
      <div aria-hidden="true" className="absolute border-[#f7f7f7] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#8a8a8a] text-[16px] text-nowrap">T</p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#333] text-[16px] text-nowrap">6/26</p>
    </div>
  );
}

function Friday() {
  return (
    <div className="content-stretch flex gap-[4px] h-[312px] items-start justify-center p-[8px] relative shrink-0 w-[116.571px]" data-name="Friday">
      <div aria-hidden="true" className="absolute border-[#f7f7f7] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#8a8a8a] text-[16px] text-nowrap">F</p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#333] text-[16px] text-nowrap">6/27</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-[#03b0e8] h-[20px] rounded-[2px] shrink-0 w-[4px]" data-name="Subject Color" />
      <p className="-webkit-box font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] overflow-ellipsis overflow-hidden relative shrink-0 text-[#333] text-[16px] text-nowrap">Algebra Study Sheet</p>
    </div>
  );
}

function GantAssessment() {
  return (
    <div className="absolute bg-[#d2f2fc] content-stretch flex items-center left-[123px] p-[8px] rounded-[4px] top-[46px] w-[570px]" data-name="Gant Assessment">
      <Frame5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-[#69a135] h-[20px] rounded-[2px] shrink-0 w-[4px]" data-name="Subject Color" />
      <p className="-webkit-box font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] overflow-ellipsis overflow-hidden relative shrink-0 text-[#333] text-[16px] text-nowrap">Albany Biology Demo</p>
    </div>
  );
}

function GantAssessment1() {
  return (
    <div className="absolute bg-[#fce1e5] content-stretch flex items-center left-[-224px] p-[8px] rounded-[4px] top-[208px] w-[586px]" data-name="Gant Assessment">
      <Frame6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-[#69a135] h-[20px] rounded-[2px] shrink-0 w-[4px]" data-name="Subject Color" />
      <p className="-webkit-box font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] overflow-ellipsis overflow-hidden relative shrink-0 text-[#333] text-[16px] text-nowrap">Albany Biology Demo</p>
    </div>
  );
}

function GantAssessment2() {
  return (
    <div className="absolute bg-[#ece3fc] content-stretch flex items-center left-[-224px] p-[8px] rounded-[4px] top-[262px] w-[401px]" data-name="Gant Assessment">
      <Frame7 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-[#9266e5] h-[20px] rounded-[2px] shrink-0 w-[4px]" data-name="Subject Color" />
      <p className="-webkit-box font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] overflow-ellipsis overflow-hidden relative shrink-0 text-[#333] text-[16px] text-nowrap">Wildomar Biology Demo</p>
    </div>
  );
}

function GantAssessment3() {
  return (
    <div className="absolute bg-[#ece3fc] content-stretch flex items-center left-[239px] p-[8px] rounded-[4px] top-[100px] w-[339px]" data-name="Gant Assessment">
      <Frame8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-[#eb8900] h-[20px] rounded-[2px] shrink-0 w-[4px]" data-name="Subject Color" />
      <p className="-webkit-box font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] overflow-ellipsis overflow-hidden relative shrink-0 text-[#333] text-[16px] text-nowrap">Rubic for Writing Narrative</p>
    </div>
  );
}

function GantAssessment4() {
  return (
    <div className="absolute bg-[#fcecd4] content-stretch flex items-center left-[358px] p-[8px] rounded-[4px] top-[154px] w-[335px]" data-name="Gant Assessment">
      <Frame9 />
    </div>
  );
}

function CalenderDate() {
  return (
    <div className="content-stretch flex h-[304px] items-center justify-center relative shrink-0 w-[816px]" data-name="calender date">
      <Saturday />
      <Sunday />
      <Monday />
      <Tuesday />
      <Wednesday />
      <Thursday />
      <Friday />
      <Saturday />
      <Sunday />
      <GantAssessment />
      <GantAssessment1 />
      <GantAssessment2 />
      <GantAssessment3 />
      <GantAssessment4 />
    </div>
  );
}

function ChartCard1() {
  return (
    <div className="bg-white h-[416px] relative rounded-[8px] shrink-0 w-[864px]" data-name="Chart Card">
      <div className="content-stretch flex flex-col gap-[16px] items-start justify-center overflow-clip p-[24px] relative rounded-[inherit] size-full">
        <Frame11 />
        <CalenderDate />
        <div className="absolute bg-gradient-to-l from-[#ffffff] h-[312px] right-0 to-[rgba(255,255,255,0)] top-[74px] w-[32px]" />
        <div className="absolute bg-gradient-to-l from-[rgba(255,255,255,0)] h-[312px] left-0 to-[#ffffff] top-[calc(50%+22px)] translate-y-[-50%] w-[32px]" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <ChartCard />
      <ChartCard1 />
    </div>
  );
}

function IconRight2() {
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

function ButtonConcept3() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center justify-center min-h-[40px] min-w-[40px] px-[16px] py-[12px] relative rounded-[100px] shrink-0" data-name="Button _Concept 2">
      <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[16px] text-center">Items Per Page:</p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-center text-nowrap">20</p>
      <IconRight2 />
    </div>
  );
}

function IconLeft3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon Left">
          <g id="Shape">
            <path clipRule="evenodd" d={svgPaths.p389d0f00} fill="white" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2976b680} fill="white" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p17980900} fill="white" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p90be000} fill="white" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ButtonConcept4() {
  return (
    <div className="bg-[#343a6f] content-stretch flex gap-[4px] items-center justify-center min-w-[40px] px-[16px] py-[12px] relative rounded-[100px] shrink-0" data-name="Button _Concept 2">
      <IconLeft3 />
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-center text-nowrap text-white">Grid</p>
    </div>
  );
}

function IconLeft4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon Left">
          <g id="Shape">
            <path d={svgPaths.p11926580} fill="#707070" />
            <path d={svgPaths.p357c8580} fill="#707070" />
            <path d={svgPaths.pe8b6800} fill="#707070" />
            <path d={svgPaths.p14a9d200} fill="#707070" />
            <path d={svgPaths.p3a8b400} fill="#707070" />
            <path d={svgPaths.p1211fa00} fill="#707070" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ButtonConcept5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center min-h-[40px] min-w-[40px] px-[16px] py-[12px] relative rounded-[100px] shrink-0" data-name="Button _Concept 3">
      <IconLeft4 />
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-center text-nowrap">List</p>
    </div>
  );
}

function ToggleViewMode() {
  return (
    <div className="bg-white content-stretch flex items-center relative rounded-[40px] shrink-0" data-name="Toggle / View Mode">
      <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[40px]" />
      <ButtonConcept4 />
      <ButtonConcept5 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-[1310px]">
      <ButtonConcept3 />
      <ToggleViewMode />
    </div>
  );
}

function Down() {
  return (
    <div className="absolute bottom-[16.67%] left-[8.33%] right-1/2 top-[29.16%]" data-name="Down">
      <div className="absolute inset-[-11.53%_-15%_-11.54%_-15%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.66667 10.6667">
          <g id="Down">
            <path d={svgPaths.p1a3dbd80} id="Vector 1" stroke="var(--stroke-0, #B3B3B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M4.33333 9.33333V1" id="Vector 2" stroke="var(--stroke-0, #B3B3B3)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Up() {
  return (
    <div className="absolute bottom-[29.17%] left-1/2 right-[8.33%] top-[16.67%]" data-name="Up">
      <div className="absolute inset-[-11.53%_-15%_-11.54%_-15%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.66667 10.6667">
          <g id="Up">
            <path d={svgPaths.p201e0f00} id="Vector 1" stroke="var(--stroke-0, #4D4D4D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p3369d600} id="Vector 2" stroke="var(--stroke-0, #4D4D4D)" strokeLinecap="round" strokeWidth="2" />
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

function IconRight3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon Right">
      <Group1 />
    </div>
  );
}

function TabBase5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[12px] pt-0 px-[4px] relative shrink-0" data-name="_Tab Base">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] opacity-40 relative shrink-0 text-[#343a6f] text-[16px] text-center text-nowrap">Assigned</p>
      <IconRight3 />
    </div>
  );
}

function Down1() {
  return (
    <div className="absolute inset-[35.41%_29.17%_-13.54%_8.33%]" data-name="Down">
      <div className="absolute inset-[-7.99%_-10%_-8.01%_-10%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14.5">
          <g id="Down">
            <path d={svgPaths.p8b9ae00} id="Vector 1" stroke="var(--stroke-0, #B3B3B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M4.33333 13.5V1" id="Vector 2" stroke="var(--stroke-0, #B3B3B3)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Up1() {
  return (
    <div className="absolute inset-[-7.3%_8.33%_29.17%_29.17%]" data-name="Up">
      <div className="absolute inset-[-7.99%_-10%_-8.01%_-10%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14.5">
          <g id="Up">
            <path d={svgPaths.p9ae1780} id="Vector 1" stroke="var(--stroke-0, #4D4D4D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M7.66667 1L7.66667 13.5" id="Vector 2" stroke="var(--stroke-0, #4D4D4D)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[-7.3%_8.33%_-13.54%_8.33%]">
      <Down1 />
      <Up1 />
    </div>
  );
}

function IconRight4() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon Right">
      <Group3 />
    </div>
  );
}

function TabBase6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[12px] pt-0 px-[4px] relative shrink-0" data-name="_Tab Base">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] opacity-40 relative shrink-0 text-[#343a6f] text-[16px] text-center text-nowrap">In Progress</p>
      <IconRight4 />
    </div>
  );
}

function Down2() {
  return (
    <div className="absolute inset-[35.41%_29.17%_-13.54%_8.33%]" data-name="Down">
      <div className="absolute inset-[-7.99%_-10%_-8.01%_-10%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14.5">
          <g id="Down">
            <path d={svgPaths.p8b9ae00} id="Vector 1" stroke="var(--stroke-0, #B3B3B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M4.33333 13.5V1" id="Vector 2" stroke="var(--stroke-0, #B3B3B3)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Up2() {
  return (
    <div className="absolute inset-[-7.3%_8.33%_29.17%_29.17%]" data-name="Up">
      <div className="absolute inset-[-7.99%_-10%_-8.01%_-10%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14.5">
          <g id="Up">
            <path d={svgPaths.p9ae1780} id="Vector 1" stroke="var(--stroke-0, #4D4D4D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M7.66667 1L7.66667 13.5" id="Vector 2" stroke="var(--stroke-0, #4D4D4D)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[-7.3%_8.33%_-13.54%_8.33%]">
      <Down2 />
      <Up2 />
    </div>
  );
}

function IconRight5() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon Right">
      <Group4 />
    </div>
  );
}

function TabBase7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[12px] pt-0 px-[4px] relative shrink-0" data-name="_Tab Base">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] opacity-40 relative shrink-0 text-[#343a6f] text-[16px] text-center text-nowrap">Completed</p>
      <IconRight5 />
    </div>
  );
}

function TabBarStatus() {
  return (
    <div className="content-stretch flex gap-[24px] items-start px-0 py-[24px] relative shrink-0 w-[1312px]" data-name="Tab Bar Status">
      <div aria-hidden="true" className="absolute border-[#d4d4d4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TabBase5 />
      <TabBase6 />
      <TabBase7 />
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

function Group5() {
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

function Group6() {
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

function Group7() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-[#03b0e8] bottom-0 right-0 size-[18px]" />
      <div className="absolute bg-[#03b0e8] left-0 size-[18px] top-0" />
      <Group />
      <Group2 />
      <Group5 />
      <Group6 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute left-1/2 rounded-[2px] size-[36px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <div aria-hidden="true" className="absolute border-2 border-[#03b0e8] border-solid inset-[-2px] pointer-events-none rounded-[4px]" />
      <Group7 />
    </div>
  );
}

function IconContainer() {
  return (
    <div className="absolute left-1/2 overflow-clip rounded-[2.5px] size-[50px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="icon container">
      <Frame17 />
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
      <p className="relative shrink-0 text-[#707070]">Grade 8</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[20px] text-nowrap tracking-[-0.2px] w-full">Math Assessment</p>
      <Actions />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <SubjectIcon />
      <Frame15 />
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
        <Frame16 />
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

function Frame18() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[20px] text-nowrap tracking-[-0.2px] w-full">Reading Assessment</p>
      <Actions2 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <SubjectIcon1 />
      <Frame18 />
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
    <div className="bg-white relative rounded-[8px] shrink-0 w-[416px]" data-name="Assessment Card">
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[24px] relative rounded-[inherit] w-full">
        <Frame19 />
        <Body1 />
        <ActionsContainer1 />
        <div className="absolute bg-[#eb8900] bottom-0 h-[8px] left-px right-[-1px]" data-name="Divider/Reading" />
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
          <path d={svgPaths.p32dc9180} id="Union" stroke="var(--stroke-0, #F2CC05)" strokeWidth="2" />
          <path d="M14 24H42" id="Vector 58" stroke="var(--stroke-0, #F2CC05)" strokeLinecap="round" strokeWidth="2" />
          <path d="M14 29H42" id="Vector 59" stroke="var(--stroke-0, #F2CC05)" strokeLinecap="round" strokeWidth="2" />
          <path d="M14 34H30" id="Vector 60" stroke="var(--stroke-0, #F2CC05)" strokeLinecap="round" strokeWidth="2" />
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
      <p className="relative shrink-0 text-[#707070]">Grade 5</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px] w-full">Other</p>
      <Actions4 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-[368px]">
      <SubjectIcon2 />
      <Frame20 />
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
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-right w-[48px]">20/30</p>
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
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[368px]" data-name="body">
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
    <div className="bg-white relative rounded-[8px] shrink-0" data-name="Assessment Card">
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[24px] relative rounded-[inherit]">
        <Frame21 />
        <Body2 />
        <ActionsContainer2 />
        <div className="absolute bg-[#f2cc05] bottom-0 h-[8px] left-px right-[-1px]" data-name="Divider/Other" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Group8() {
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
      <Group8 />
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

function Frame22() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px] w-full">Career/Tech Assessment</p>
      <Actions6 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <SubjectIcon3 />
      <Frame22 />
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
        <Frame23 />
        <Body3 />
        <ActionsContainer3 />
        <div className="absolute bg-[#7579b8] bottom-0 h-[8px] left-px right-[-1px]" data-name="Divider/Career/Tech" />
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
      <AssessmentCard1 />
      <AssessmentCard3 />
      <AssessmentCard1 />
    </div>
  );
}

function CardGridStatus() {
  return (
    <div className="content-stretch flex flex-col h-[504px] items-start relative shrink-0 w-[1313px]" data-name="Card Grid Status">
      <SectionGrid />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[588px] items-start relative shrink-0 w-[1312px]" data-name="Table">
      <TabBarStatus />
      <CardGridStatus />
    </div>
  );
}

function TableAssignedAssessments() {
  return (
    <div className="h-[806px] relative shrink-0 w-full" data-name="Table_Assigned Assessments">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center justify-center pb-[128px] pt-[40px] px-[64px] relative size-full">
          <Frame10 />
          <Table />
        </div>
      </div>
    </div>
  );
}

function HomeAssessmentStates() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] h-[1188px] items-start relative shrink-0 w-[1312px]" data-name="Home Assessment States">
      <Frame12 />
      <TableAssignedAssessments />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col h-[1222px] items-start relative shrink-0 w-full">
      <HomeAssessmentStates />
    </div>
  );
}

function SectionContainer() {
  return (
    <div className="h-[1472px] relative shrink-0 w-full z-[2]" data-name="Section Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center justify-center pb-[128px] pt-[40px] px-[64px] relative size-full">
          <SortingControls />
          <Frame14 />
        </div>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[60px] relative shrink-0 w-[151px]" data-name="Logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[106.67%] left-[-4.64%] max-w-none top-[-4.32%] w-[200.74%]" src={imgBrandLogo} />
      </div>
    </div>
  );
}

function TabBase8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative shrink-0" data-name="_Tab Base">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-center text-nowrap text-white">Contact</p>
    </div>
  );
}

function TabBase9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative shrink-0" data-name="_Tab Base">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-center text-nowrap text-white">Safe Exam Browser</p>
    </div>
  );
}

function TabBase10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative shrink-0" data-name="_Tab Base">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-center text-nowrap text-white">Respondus Browser</p>
    </div>
  );
}

function TabBase11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative shrink-0" data-name="_Tab Base">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-center text-nowrap text-white">Support</p>
    </div>
  );
}

function TabBar1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Tab Bar">
      <TabBase8 />
      <TabBase9 />
      <TabBase10 />
      <TabBase11 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Logo />
      <TabBar1 />
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
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-white w-full">Terms | Copyright © 2025</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#343a6f] content-stretch flex flex-col h-[200px] items-start justify-between overflow-clip px-[60px] py-[20px] relative shrink-0 w-[1440px] z-[1]" data-name="Footer">
      <Frame13 />
      <Frame />
    </div>
  );
}

export default function HomeDesktop() {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-start relative size-full" data-name="Home-desktop">
      <Frame1 />
      <SectionContainer />
      <Footer />
    </div>
  );
}