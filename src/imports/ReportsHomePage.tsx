import svgPaths from "./svg-m4ku2sj0b0";
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

function Frame8() {
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
      <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-solid border-white inset-0 pointer-events-none" />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-center text-nowrap text-white">Reports</p>
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
      <Frame8 />
      <TabBar />
      <AccountInfoContainer />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="header">
      <HeaderPrimaryNavigationDefault />
    </div>
  );
}

function Breadcrumb() {
  return (
    <div className="capitalize content-stretch flex font-['Rubik:Regular',sans-serif] font-normal gap-[12px] items-start leading-[16px] relative shrink-0 text-[#707070] text-[14px] text-nowrap w-full" data-name="Breadcrumb">
      <p className="relative shrink-0">Home</p>
      <p className="relative shrink-0">|</p>
      <p className="relative shrink-0">Reports</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <p className="basis-0 font-['Rubik:Medium',sans-serif] font-medium grow leading-[40px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[40px] text-nowrap tracking-[-0.8px]">Reports</p>
    </div>
  );
}

function PageDetailsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Page Details Container">
      <Breadcrumb />
      <Frame6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <PageDetailsContainer />
    </div>
  );
}

function SubHeaderNavigationReports() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[124px] items-start pb-[32px] pt-[24px] px-[64px] relative shrink-0 w-[1440px]" data-name="SubHeader_Navigation_Reports">
      <div aria-hidden="true" className="absolute border-[#d4d4d4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame7 />
    </div>
  );
}

function SubHeader() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="sub-header">
      <SubHeaderNavigationReports />
    </div>
  );
}

function IconSetIconInfo() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-set/icon-info">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-set/icon-info">
          <g id="Shape">
            <path d={svgPaths.p2bfbab40} fill="#121212" />
            <path d={svgPaths.p20c8ee00} fill="#121212" />
            <path clipRule="evenodd" d={svgPaths.p32386b80} fill="#121212" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function HeaderCharts() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[214px]" data-name="Header_Charts">
      <p className="basis-0 font-['Rubik:Medium',sans-serif] font-medium grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px]">Completion Status</p>
      <IconSetIconInfo />
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

function Frame1() {
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
          <Frame1 />
          <p className="-webkit-box font-['Rubik:Regular',sans-serif] font-normal leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-nowrap">15</p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
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
          <Frame2 />
          <p className="-webkit-box font-['Rubik:Regular',sans-serif] font-normal leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-nowrap">22</p>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
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
          <Frame3 />
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

function ChartCardDonut() {
  return (
    <div className="basis-0 bg-white grow h-[416px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="ChartCard_Donut">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_3px_1px_rgba(0,0,0,0.15)]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center p-[24px] relative size-full">
          <HeaderCharts />
          <Chart />
          <Stats />
        </div>
      </div>
    </div>
  );
}

function IconSetIconInfo1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-set/icon-info">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-set/icon-info">
          <g id="Shape">
            <path d={svgPaths.p2bfbab40} fill="#121212" />
            <path d={svgPaths.p20c8ee00} fill="#121212" />
            <path clipRule="evenodd" d={svgPaths.p32386b80} fill="#121212" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function HeaderCharts1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[134px]" data-name="Header_Charts">
      <p className="basis-0 font-['Rubik:Medium',sans-serif] font-medium grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px]">Test Cycle</p>
      <IconSetIconInfo1 />
    </div>
  );
}

function YAxisLeft() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal h-full items-end justify-between leading-[normal] not-italic px-[4px] py-0 relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] text-nowrap" data-name="yAxisLeft">
      <p className="relative shrink-0">20</p>
      <p className="relative shrink-0">16</p>
      <p className="relative shrink-0">12</p>
      <p className="relative shrink-0">8</p>
      <p className="relative shrink-0">4</p>
      <p className="relative shrink-0">0</p>
    </div>
  );
}

function XLines() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-between px-px py-[6px]" data-name="xLines">
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0.3%_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 332.004 1">
            <line id="Line" stroke="var(--stroke-0, #00001A)" strokeDasharray="2" strokeOpacity="0.15" x2="333" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0.3%_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 332.004 1">
            <line id="Line" stroke="var(--stroke-0, #00001A)" strokeDasharray="2" strokeOpacity="0.15" x2="333" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0.3%_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 332.004 1">
            <line id="Line" stroke="var(--stroke-0, #00001A)" strokeDasharray="2" strokeOpacity="0.15" x2="333" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0.3%_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 332.004 1">
            <line id="Line" stroke="var(--stroke-0, #00001A)" strokeDasharray="2" strokeOpacity="0.15" x2="333" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0.3%_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 332.004 1">
            <line id="Line" stroke="var(--stroke-0, #00001A)" strokeDasharray="2" strokeOpacity="0.15" x2="333" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 333 1">
            <line id="Line" stroke="var(--stroke-0, #00001A)" strokeOpacity="0.3" x2="333" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function YLines() {
  return (
    <div className="absolute content-stretch flex inset-0 items-start justify-between px-px py-[6px]" data-name="yLines">
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[270deg]">
          <div className="h-full relative w-[196px]" data-name="Line">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 196 1">
                <line id="Line" stroke="var(--stroke-0, #00001A)" strokeDasharray="2" strokeOpacity="0.15" x2="196" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[270deg]">
          <div className="h-full relative w-[196px]" data-name="Line">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 196 1">
                <line id="Line" stroke="var(--stroke-0, #00001A)" strokeDasharray="2" strokeOpacity="0.15" x2="196" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[270deg]">
          <div className="h-full relative w-[196px]" data-name="Line">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 196 1">
                <line id="Line" stroke="var(--stroke-0, #00001A)" strokeDasharray="2" strokeOpacity="0.15" x2="196" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[270deg]">
          <div className="h-full relative w-[196px]" data-name="Line">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 196 1">
                <line id="Line" stroke="var(--stroke-0, #00001A)" strokeDasharray="2" strokeOpacity="0.15" x2="196" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[270deg]">
          <div className="h-full relative w-[196px]" data-name="Line">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 196 1">
                <line id="Line" stroke="var(--stroke-0, #00001A)" strokeDasharray="2" strokeOpacity="0.15" x2="196" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[270deg]">
          <div className="h-full relative w-[196px]" data-name="Line">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 196 1">
                <line id="Line" stroke="var(--stroke-0, #00001A)" strokeDasharray="2" strokeOpacity="0.15" x2="196" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[270deg]">
          <div className="h-full relative w-[196px]" data-name="Line">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 196 1">
                <line id="Line" stroke="var(--stroke-0, #00001A)" strokeDasharray="2" strokeOpacity="0.15" x2="196" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[270deg]">
          <div className="h-full relative w-[196px]" data-name="Line">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 196 1">
                <line id="Line" stroke="var(--stroke-0, #00001A)" strokeDasharray="2" strokeOpacity="0.15" x2="196" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BasicNode() {
  return (
    <div className="absolute inset-[60%_92.67%_39.66%_7.14%]" data-name="basicNode">
      <div className="absolute left-[-8px] size-[16px] top-[-8px]" data-name="ripple">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" fill="var(--fill-0, #343A6F)" id="ripple" opacity="0.25" r="8" />
        </svg>
      </div>
      <div className="absolute left-[-4px] size-[8px] top-[-4px]" data-name="EllipseFill">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #343A6F)" id="EllipseFill" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
    </div>
  );
}

function BasicNode1() {
  return (
    <div className="absolute inset-[20%_78.39%_79.66%_21.43%]" data-name="basicNode">
      <div className="absolute left-[-8px] size-[16px] top-[-8px]" data-name="ripple">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" fill="var(--fill-0, #343A6F)" id="ripple" opacity="0.25" r="8" />
        </svg>
      </div>
      <div className="absolute left-[-4px] size-[8px] top-[-4px]" data-name="EllipseFill">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #343A6F)" id="EllipseFill" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
    </div>
  );
}

function BasicNode2() {
  return (
    <div className="absolute inset-[55%_64.1%_44.66%_35.71%]" data-name="basicNode">
      <div className="absolute left-[-8px] size-[16px] top-[-8px]" data-name="ripple">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" fill="var(--fill-0, #343A6F)" id="ripple" opacity="0.25" r="8" />
        </svg>
      </div>
      <div className="absolute left-[-4px] size-[8px] top-[-4px]" data-name="EllipseFill">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #343A6F)" id="EllipseFill" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
    </div>
  );
}

function BasicNode3() {
  return (
    <div className="absolute bottom-[49.66%] left-1/2 right-[49.82%] top-1/2" data-name="basicNode">
      <div className="absolute left-[-8px] size-[16px] top-[-8px]" data-name="ripple">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" fill="var(--fill-0, #343A6F)" id="ripple" opacity="0.25" r="8" />
        </svg>
      </div>
      <div className="absolute left-[-4px] size-[8px] top-[-4px]" data-name="EllipseFill">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #343A6F)" id="EllipseFill" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
    </div>
  );
}

function BasicNode4() {
  return (
    <div className="absolute bottom-[49.66%] left-[64.29%] right-[35.53%] top-1/2" data-name="basicNode">
      <div className="absolute left-[-8px] size-[16px] top-[-8px]" data-name="ripple">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" fill="var(--fill-0, #343A6F)" id="ripple" opacity="0.25" r="8" />
        </svg>
      </div>
      <div className="absolute left-[-4px] size-[8px] top-[-4px]" data-name="EllipseFill">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #343A6F)" id="EllipseFill" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
    </div>
  );
}

function BasicNode5() {
  return (
    <div className="absolute inset-[85%_21.25%_14.66%_78.57%]" data-name="basicNode">
      <div className="absolute left-[-8px] size-[16px] top-[-8px]" data-name="ripple">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" fill="var(--fill-0, #343A6F)" id="ripple" opacity="0.25" r="8" />
        </svg>
      </div>
      <div className="absolute left-[-4px] size-[8px] top-[-4px]" data-name="EllipseFill">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #343A6F)" id="EllipseFill" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
    </div>
  );
}

function BasicNode6() {
  return (
    <div className="absolute bottom-[24.66%] left-[92.86%] right-[6.96%] top-3/4" data-name="basicNode">
      <div className="absolute left-[-8px] size-[16px] top-[-8px]" data-name="ripple">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" fill="var(--fill-0, #343A6F)" id="ripple" opacity="0.25" r="8" />
        </svg>
      </div>
      <div className="absolute left-[-4px] size-[8px] top-[-4px]" data-name="EllipseFill">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #343A6F)" id="EllipseFill" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
    </div>
  );
}

function LineNodes2() {
  return (
    <div className="absolute contents inset-[20%_6.96%_14.66%_7.14%]" data-name="LineNodes2">
      <BasicNode />
      <BasicNode1 />
      <BasicNode2 />
      <BasicNode3 />
      <BasicNode4 />
      <BasicNode5 />
      <BasicNode6 />
    </div>
  );
}

function LineGroup2() {
  return (
    <div className="absolute contents inset-[20%_6.96%_14.66%_7.14%]" data-name="LineGroup2">
      <div className="absolute inset-[20%_7.14%_15%_7.14%]" data-name="singleLineArea2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 287.143 126.1">
          <path d={svgPaths.p27aabd80} fill="url(#paint0_linear_1_7663)" id="singleLineArea2" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7663" x1="143.571" x2="143.571" y1="0" y2="126.1">
              <stop stopColor="#343A6F" />
              <stop offset="1" stopColor="#343A6F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[20%_7.14%_15%_7.14%]" data-name="singleLine2">
        <div className="absolute inset-[-7.53%_-6.37%_-21.81%_-6.43%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 323.901 163.1">
            <g filter="url(#filter0_ddd_1_7632)" id="singleLine2">
              <path d={svgPaths.p1c565640} stroke="var(--stroke-0, #343A6F)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="163.1" id="filter0_ddd_1_7632" width="323.901" x="5.06639e-07" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="3" />
                <feGaussianBlur stdDeviation="1.5" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.233436 0 0 0 0 0.766174 0 0 0 0 0.873954 0 0 0 0.4 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_7632" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="6" />
                <feGaussianBlur stdDeviation="4.5" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.233436 0 0 0 0 0.766174 0 0 0 0 0.873954 0 0 0 0.4 0" />
                <feBlend in2="effect1_dropShadow_1_7632" mode="normal" result="effect2_dropShadow_1_7632" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="9" />
                <feGaussianBlur stdDeviation="9" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.233436 0 0 0 0 0.766174 0 0 0 0 0.873954 0 0 0 0.4 0" />
                <feBlend in2="effect2_dropShadow_1_7632" mode="normal" result="effect3_dropShadow_1_7632" />
                <feBlend in="SourceGraphic" in2="effect3_dropShadow_1_7632" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <LineNodes2 />
    </div>
  );
}

function BasicNode7() {
  return (
    <div className="absolute inset-[60%_92.67%_39.66%_7.14%]" data-name="basicNode">
      <div className="absolute left-[-8px] size-[16px] top-[-8px]" data-name="ripple">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" fill="var(--fill-0, #69A135)" id="ripple" opacity="0.25" r="8" />
        </svg>
      </div>
      <div className="absolute left-[-4px] size-[8px] top-[-4px]" data-name="EllipseFill">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #69A135)" id="EllipseFill" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
    </div>
  );
}

function BasicNode8() {
  return (
    <div className="absolute inset-[30%_78.39%_69.66%_21.43%]" data-name="basicNode">
      <div className="absolute left-[-8px] size-[16px] top-[-8px]" data-name="ripple">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" fill="var(--fill-0, #69A135)" id="ripple" opacity="0.25" r="8" />
        </svg>
      </div>
      <div className="absolute left-[-4px] size-[8px] top-[-4px]" data-name="EllipseFill">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #69A135)" id="EllipseFill" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
    </div>
  );
}

function BasicNode9() {
  return (
    <div className="absolute inset-[60%_64.1%_39.66%_35.71%]" data-name="basicNode">
      <div className="absolute left-[-8px] size-[16px] top-[-8px]" data-name="ripple">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" fill="var(--fill-0, #69A135)" id="ripple" opacity="0.25" r="8" />
        </svg>
      </div>
      <div className="absolute left-[-4px] size-[8px] top-[-4px]" data-name="EllipseFill">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #69A135)" id="EllipseFill" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
    </div>
  );
}

function BasicNode10() {
  return (
    <div className="absolute bottom-[29.66%] left-1/2 right-[49.82%] top-[70%]" data-name="basicNode">
      <div className="absolute left-[-8px] size-[16px] top-[-8px]" data-name="ripple">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" fill="var(--fill-0, #69A135)" id="ripple" opacity="0.25" r="8" />
        </svg>
      </div>
      <div className="absolute left-[-4px] size-[8px] top-[-4px]" data-name="EllipseFill">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #69A135)" id="EllipseFill" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
    </div>
  );
}

function BasicNode11() {
  return (
    <div className="absolute inset-[55%_35.53%_44.66%_64.29%]" data-name="basicNode">
      <div className="absolute left-[-8px] size-[16px] top-[-8px]" data-name="ripple">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" fill="var(--fill-0, #69A135)" id="ripple" opacity="0.25" r="8" />
        </svg>
      </div>
      <div className="absolute left-[-4px] size-[8px] top-[-4px]" data-name="EllipseFill">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #69A135)" id="EllipseFill" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
    </div>
  );
}

function BasicNode12() {
  return (
    <div className="absolute inset-[85%_21.25%_14.66%_78.57%]" data-name="basicNode">
      <div className="absolute left-[-8px] size-[16px] top-[-8px]" data-name="ripple">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" fill="var(--fill-0, #69A135)" id="ripple" opacity="0.25" r="8" />
        </svg>
      </div>
      <div className="absolute left-[-4px] size-[8px] top-[-4px]" data-name="EllipseFill">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #69A135)" id="EllipseFill" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
    </div>
  );
}

function BasicNode13() {
  return (
    <div className="absolute bottom-[24.66%] left-[92.86%] right-[6.96%] top-3/4" data-name="basicNode">
      <div className="absolute left-[-8px] size-[16px] top-[-8px]" data-name="ripple">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" fill="var(--fill-0, #69A135)" id="ripple" opacity="0.25" r="8" />
        </svg>
      </div>
      <div className="absolute left-[-4px] size-[8px] top-[-4px]" data-name="EllipseFill">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #69A135)" id="EllipseFill" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
    </div>
  );
}

function LineNodes1() {
  return (
    <div className="absolute contents inset-[30%_6.96%_14.66%_7.14%]" data-name="LineNodes1">
      <BasicNode7 />
      <BasicNode8 />
      <BasicNode9 />
      <BasicNode10 />
      <BasicNode11 />
      <BasicNode12 />
      <BasicNode13 />
    </div>
  );
}

function LineGroup1() {
  return (
    <div className="absolute contents inset-[30%_6.96%_14.66%_7.14%]" data-name="LineGroup1">
      <div className="absolute inset-[30%_7.14%_15%_7.14%]" data-name="singleLineArea1">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 287.143 106.7">
          <path d={svgPaths.p82f3400} fill="url(#paint0_linear_1_7665)" id="singleLineArea1" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7665" x1="143.571" x2="143.571" y1="0" y2="106.7">
              <stop stopColor="#69A135" />
              <stop offset="1" stopColor="#69A135" stopOpacity="0.05" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[30%_7.14%_15%_7.14%]" data-name="singleLine1">
        <div className="absolute inset-[-8.9%_-6.37%_-25.77%_-6.43%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 323.882 143.7">
            <g filter="url(#filter0_ddd_1_7625)" id="singleLine1">
              <path d={svgPaths.p3e80cf60} stroke="var(--stroke-0, #69A135)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="143.7" id="filter0_ddd_1_7625" width="323.882" x="-8.64267e-07" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="3" />
                <feGaussianBlur stdDeviation="1.5" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.572549 0 0 0 0 0.541176 0 0 0 0.4 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_7625" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="6" />
                <feGaussianBlur stdDeviation="4.5" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.572549 0 0 0 0 0.541176 0 0 0 0.4 0" />
                <feBlend in2="effect1_dropShadow_1_7625" mode="normal" result="effect2_dropShadow_1_7625" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="9" />
                <feGaussianBlur stdDeviation="9" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.572549 0 0 0 0 0.541176 0 0 0 0.4 0" />
                <feBlend in2="effect2_dropShadow_1_7625" mode="normal" result="effect3_dropShadow_1_7625" />
                <feBlend in="SourceGraphic" in2="effect3_dropShadow_1_7625" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <LineNodes1 />
    </div>
  );
}

function BasicNode14() {
  return (
    <div className="absolute inset-[80%_92.67%_19.66%_7.14%]" data-name="basicNode">
      <div className="absolute left-[-8px] size-[16px] top-[-8px]" data-name="ripple">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" fill="var(--fill-0, #4661A1)" id="ripple" opacity="0.25" r="8" />
        </svg>
      </div>
      <div className="absolute left-[-4px] size-[8px] top-[-4px]" data-name="EllipseFill">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #4661A1)" id="EllipseFill" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
    </div>
  );
}

function BasicNode15() {
  return (
    <div className="absolute inset-[60%_78.39%_39.66%_21.43%]" data-name="basicNode">
      <div className="absolute left-[-8px] size-[16px] top-[-8px]" data-name="ripple">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" fill="var(--fill-0, #4661A1)" id="ripple" opacity="0.25" r="8" />
        </svg>
      </div>
      <div className="absolute left-[-4px] size-[8px] top-[-4px]" data-name="EllipseFill">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #4661A1)" id="EllipseFill" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
    </div>
  );
}

function BasicNode16() {
  return (
    <div className="absolute bottom-[24.66%] left-[35.71%] right-[64.1%] top-3/4" data-name="basicNode">
      <div className="absolute left-[-8px] size-[16px] top-[-8px]" data-name="ripple">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" fill="var(--fill-0, #4661A1)" id="ripple" opacity="0.25" r="8" />
        </svg>
      </div>
      <div className="absolute left-[-4px] size-[8px] top-[-4px]" data-name="EllipseFill">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #4661A1)" id="EllipseFill" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
    </div>
  );
}

function BasicNode17() {
  return (
    <div className="absolute bottom-[24.66%] left-1/2 right-[49.82%] top-3/4" data-name="basicNode">
      <div className="absolute left-[-8px] size-[16px] top-[-8px]" data-name="ripple">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" fill="var(--fill-0, #4661A1)" id="ripple" opacity="0.25" r="8" />
        </svg>
      </div>
      <div className="absolute left-[-4px] size-[8px] top-[-4px]" data-name="EllipseFill">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #4661A1)" id="EllipseFill" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
    </div>
  );
}

function BasicNode18() {
  return (
    <div className="absolute bottom-[24.66%] left-[64.29%] right-[35.53%] top-3/4" data-name="basicNode">
      <div className="absolute left-[-8px] size-[16px] top-[-8px]" data-name="ripple">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" fill="var(--fill-0, #4661A1)" id="ripple" opacity="0.25" r="8" />
        </svg>
      </div>
      <div className="absolute left-[-4px] size-[8px] top-[-4px]" data-name="EllipseFill">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #4661A1)" id="EllipseFill" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
    </div>
  );
}

function BasicNode19() {
  return (
    <div className="absolute inset-[85%_21.25%_14.66%_78.57%]" data-name="basicNode">
      <div className="absolute left-[-8px] size-[16px] top-[-8px]" data-name="ripple">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" fill="var(--fill-0, #4661A1)" id="ripple" opacity="0.25" r="8" />
        </svg>
      </div>
      <div className="absolute left-[-4px] size-[8px] top-[-4px]" data-name="EllipseFill">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #4661A1)" id="EllipseFill" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
    </div>
  );
}

function BasicNode20() {
  return (
    <div className="absolute bottom-[24.66%] left-[92.86%] right-[6.96%] top-3/4" data-name="basicNode">
      <div className="absolute left-[-8px] size-[16px] top-[-8px]" data-name="ripple">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" fill="var(--fill-0, #4661A1)" id="ripple" opacity="0.25" r="8" />
        </svg>
      </div>
      <div className="absolute left-[-4px] size-[8px] top-[-4px]" data-name="EllipseFill">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #4661A1)" id="EllipseFill" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
    </div>
  );
}

function LineNodes() {
  return (
    <div className="absolute contents inset-[60%_6.96%_14.66%_7.14%]" data-name="LineNodes0">
      <BasicNode14 />
      <BasicNode15 />
      <BasicNode16 />
      <BasicNode17 />
      <BasicNode18 />
      <BasicNode19 />
      <BasicNode20 />
    </div>
  );
}

function LineGroup() {
  return (
    <div className="absolute contents inset-[60%_6.96%_0_7.14%]" data-name="LineGroup0">
      <div className="absolute inset-[60%_7.14%_0_7.14%]" data-name="singleLineArea0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 287.143 77.6">
          <path d={svgPaths.p28b88400} fill="url(#paint0_linear_1_7657)" id="singleLineArea0" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7657" x1="143.571" x2="143.571" y1="0" y2="77.6">
              <stop stopColor="#4661A1" />
              <stop offset="1" stopColor="#4661A1" stopOpacity="0.05" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[60%_7.14%_15%_7.14%]" data-name="singleLine0">
        <div className="absolute inset-[-19.59%_-6.37%_-56.7%_-6.41%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 323.838 85.5">
            <g filter="url(#filter0_ddd_1_7651)" id="singleLine0">
              <path d={svgPaths.p2b8c4e00} stroke="var(--stroke-0, #4661A1)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="85.5" id="filter0_ddd_1_7651" width="323.838" x="-2.98023e-07" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="3" />
                <feGaussianBlur stdDeviation="1.5" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.537451 0 0 0 0 0.474902 0 0 0 0 1 0 0 0 0.4 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_7651" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="6" />
                <feGaussianBlur stdDeviation="4.5" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.537451 0 0 0 0 0.474902 0 0 0 0 1 0 0 0 0.4 0" />
                <feBlend in2="effect1_dropShadow_1_7651" mode="normal" result="effect2_dropShadow_1_7651" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="9" />
                <feGaussianBlur stdDeviation="9" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.537451 0 0 0 0 0.474902 0 0 0 0 1 0 0 0 0.4 0" />
                <feBlend in2="effect2_dropShadow_1_7651" mode="normal" result="effect3_dropShadow_1_7651" />
                <feBlend in="SourceGraphic" in2="effect3_dropShadow_1_7651" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <LineNodes />
    </div>
  );
}

function LineArea() {
  return (
    <div className="absolute inset-[7px_0]" data-name="LineArea">
      <LineGroup2 />
      <LineGroup1 />
      <LineGroup />
    </div>
  );
}

function GraphiGrid() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Graphi&Grid">
      <XLines />
      <YLines />
      <LineArea />
    </div>
  );
}

function MainChart() {
  return (
    <div className="basis-0 content-stretch flex grow items-center mb-[-2px] min-h-px min-w-px relative shrink-0 w-full" data-name="MainChart">
      <YAxisLeft />
      <GraphiGrid />
    </div>
  );
}

function XLabelBox() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end min-h-px min-w-px relative shrink-0" data-name="xLabelBox">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] text-center w-full">Jan</p>
    </div>
  );
}

function XLabelBox1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end min-h-px min-w-px relative shrink-0" data-name="xLabelBox">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] text-center w-full">Feb</p>
    </div>
  );
}

function XLabelBox2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end min-h-px min-w-px relative shrink-0" data-name="xLabelBox">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] text-center w-full">Mar</p>
    </div>
  );
}

function XLabelBox3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end min-h-px min-w-px relative shrink-0" data-name="xLabelBox">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] text-center w-full">April</p>
    </div>
  );
}

function XLabelBox4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end min-h-px min-w-px relative shrink-0" data-name="xLabelBox">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] text-center w-full">May</p>
    </div>
  );
}

function XLabelBox5() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end min-h-px min-w-px relative shrink-0" data-name="xLabelBox">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] text-center w-full">Oct</p>
    </div>
  );
}

function XLabelBox6() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end min-h-px min-w-px relative shrink-0" data-name="xLabelBox">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] text-center w-full">Nov</p>
    </div>
  );
}

function XAxis() {
  return (
    <div className="mb-[-2px] relative shrink-0 w-full" data-name="xAxis">
      <div className="size-full">
        <div className="content-stretch flex items-start pb-[8px] pl-[23px] pr-0 pt-0 relative w-full">
          <XLabelBox />
          <XLabelBox1 />
          <XLabelBox2 />
          <XLabelBox3 />
          <XLabelBox4 />
          <XLabelBox5 />
          <XLabelBox6 />
        </div>
      </div>
    </div>
  );
}

function ChartAxis() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px pb-[2px] pt-0 px-0 relative shrink-0 w-full" data-name="Chart&Axis">
      <MainChart />
      <XAxis />
    </div>
  );
}

function BasicNode21() {
  return (
    <div className="absolute left-[8px] size-px top-[8px]" data-name="basicNode">
      <div className="absolute inset-[-800%_-700%_-700%_-800%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="basicNode">
            <circle cx="8" cy="8" fill="var(--fill-0, #343A6F)" id="ripple" opacity="0.25" r="8" />
            <circle cx="8" cy="8" fill="var(--fill-0, #343A6F)" id="EllipseFill" r="3.5" stroke="var(--stroke-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LegendNode() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="LegendNode">
      <div className="absolute bg-[#343a6f] h-[2px] left-0 top-[7px] w-[16px]" data-name="Line" />
      <BasicNode21 />
    </div>
  );
}

function Legend() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip p-[4px] relative shrink-0" data-name="Legend">
      <LegendNode />
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.7)] text-nowrap">Assigned</p>
    </div>
  );
}

function BasicNode22() {
  return (
    <div className="absolute left-[8px] size-px top-[8px]" data-name="basicNode">
      <div className="absolute inset-[-800%_-700%_-700%_-800%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="basicNode">
            <circle cx="8" cy="8" fill="var(--fill-0, #69A135)" id="ripple" opacity="0.25" r="8" />
            <circle cx="8" cy="8" fill="var(--fill-0, #69A135)" id="EllipseFill" r="3.5" stroke="var(--stroke-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LegendNode1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="LegendNode">
      <div className="absolute bg-[#69a135] h-[2px] left-0 top-[7px] w-[16px]" data-name="Line" />
      <BasicNode22 />
    </div>
  );
}

function Legend1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip p-[4px] relative shrink-0" data-name="Legend">
      <LegendNode1 />
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.7)] text-nowrap">Completed</p>
    </div>
  );
}

function BasicNode23() {
  return (
    <div className="absolute left-[8px] size-px top-[8px]" data-name="basicNode">
      <div className="absolute inset-[-800%_-700%_-700%_-800%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="basicNode">
            <circle cx="8" cy="8" fill="var(--fill-0, #4661A1)" id="ripple" opacity="0.25" r="8" />
            <circle cx="8" cy="8" fill="var(--fill-0, #4661A1)" id="EllipseFill" r="3.5" stroke="var(--stroke-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LegendNode2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="LegendNode">
      <div className="absolute bg-[#4661a1] h-[2px] left-0 top-[7px] w-[16px]" data-name="Line" />
      <BasicNode23 />
    </div>
  );
}

function Legend2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip p-[4px] relative shrink-0" data-name="Legend">
      <LegendNode2 />
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.7)] text-nowrap">In Progress</p>
    </div>
  );
}

function LineLegends() {
  return (
    <div className="content-center flex flex-wrap gap-[0px_8px] items-center justify-center overflow-clip px-[8px] py-0 relative shrink-0" data-name="LineLegends">
      <Legend />
      <Legend1 />
      <Legend2 />
    </div>
  );
}

function Legends() {
  return (
    <div className="content-start flex flex-wrap items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Legends">
      <LineLegends />
    </div>
  );
}

function BarLineChart() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[309px] items-start pb-[16px] pt-[32px] px-[16px] relative shrink-0 w-[390px]" data-name="BarLineChart">
      <ChartAxis />
      <Legends />
    </div>
  );
}

function ChartCardOther() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start justify-center p-[24px] relative rounded-[8px] shrink-0 size-[416px]" data-name="ChartCard_Other">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_3px_1px_rgba(0,0,0,0.15)]" />
      <HeaderCharts1 />
      <BarLineChart />
    </div>
  );
}

function IconSetIconInfo2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-set/icon-info">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-set/icon-info">
          <g id="Shape">
            <path d={svgPaths.p2bfbab40} fill="#121212" />
            <path d={svgPaths.p20c8ee00} fill="#121212" />
            <path clipRule="evenodd" d={svgPaths.p32386b80} fill="#121212" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function HeaderCharts2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[160px]" data-name="Header_Charts">
      <p className="basis-0 font-['Rubik:Medium',sans-serif] font-medium grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px]">By Subject</p>
      <IconSetIconInfo2 />
    </div>
  );
}

function YAxisLeft1() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal h-full items-end justify-between leading-[normal] not-italic px-[4px] py-0 relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] text-nowrap" data-name="yAxisLeft">
      <p className="relative shrink-0">30</p>
      <p className="relative shrink-0">25</p>
      <p className="relative shrink-0">20</p>
      <p className="relative shrink-0">15</p>
      <p className="relative shrink-0">10</p>
      <p className="relative shrink-0">5</p>
      <p className="relative shrink-0">0</p>
    </div>
  );
}

function XLines1() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-between px-px py-[6px]" data-name="xLines">
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 332 1">
            <line id="Line" stroke="var(--stroke-0, #00001A)" strokeDasharray="2" strokeOpacity="0.15" x2="332" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 332 1">
            <line id="Line" stroke="var(--stroke-0, #00001A)" strokeDasharray="2" strokeOpacity="0.15" x2="332" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 332 1">
            <line id="Line" stroke="var(--stroke-0, #00001A)" strokeDasharray="2" strokeOpacity="0.15" x2="332" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 332 1">
            <line id="Line" stroke="var(--stroke-0, #00001A)" strokeDasharray="2" strokeOpacity="0.15" x2="332" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 332 1">
            <line id="Line" stroke="var(--stroke-0, #00001A)" strokeDasharray="2" strokeOpacity="0.15" x2="332" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 332 1">
            <line id="Line" stroke="var(--stroke-0, #00001A)" strokeDasharray="2" strokeOpacity="0.15" x2="332" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 332 1">
            <line id="Line" stroke="var(--stroke-0, #00001A)" strokeOpacity="0.3" x2="332" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function YLines1() {
  return (
    <div className="absolute content-stretch flex inset-0 items-start justify-between px-px py-[6px]" data-name="yLines">
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[270deg]">
          <div className="h-full relative w-[192px]" data-name="Line">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 192 1">
                <line id="Line" stroke="var(--stroke-0, #00001A)" strokeDasharray="2" strokeOpacity="0.15" x2="192" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[270deg]">
          <div className="h-full relative w-[192px]" data-name="Line">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 192 1">
                <line id="Line" stroke="var(--stroke-0, #00001A)" strokeDasharray="2" strokeOpacity="0.15" x2="192" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[270deg]">
          <div className="h-full relative w-[192px]" data-name="Line">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 192 1">
                <line id="Line" stroke="var(--stroke-0, #00001A)" strokeDasharray="2" strokeOpacity="0.15" x2="192" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[270deg]">
          <div className="h-full relative w-[192px]" data-name="Line">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 192 1">
                <line id="Line" stroke="var(--stroke-0, #00001A)" strokeDasharray="2" strokeOpacity="0.15" x2="192" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[270deg]">
          <div className="h-full relative w-[192px]" data-name="Line">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 192 1">
                <line id="Line" stroke="var(--stroke-0, #00001A)" strokeDasharray="2" strokeOpacity="0.15" x2="192" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[270deg]">
          <div className="h-full relative w-[192px]" data-name="Line">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 192 1">
                <line id="Line" stroke="var(--stroke-0, #00001A)" strokeDasharray="2" strokeOpacity="0.15" x2="192" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SingleBar() {
  return (
    <div className="absolute inset-[40%_0_0_0]" data-name="SingleBar">
      <div className="absolute bg-[#343a6f] inset-[0_0_-0.4px_0] opacity-80" data-name="BarStrip" />
    </div>
  );
}

function SingleBar1() {
  return (
    <div className="absolute inset-[26.67%_0_60%_0]" data-name="SingleBar">
      <div className="absolute bg-[#55822b] inset-[0_0_0.13px_0] opacity-80" data-name="BarStrip" />
    </div>
  );
}

function SingleBar2() {
  return (
    <div className="absolute inset-[10%_0_73.33%_0]" data-name="SingleBar">
      <div className="absolute bg-[#4661a1] inset-[0_0_-0.33px_0] opacity-80" data-name="BarStrip" />
    </div>
  );
}

function DataLabel() {
  return (
    <div className="absolute inset-[41.36%_41.51%_54.58%_41.51%]" data-name="DataLabel">
      <div className="absolute capitalize flex flex-col font-['Rubik:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-0.5px)] text-[14px] text-center text-nowrap text-white top-[51.29px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[16px]">18</p>
      </div>
    </div>
  );
}

function DataLabel1() {
  return (
    <div className="absolute inset-[28.02%_44.6%_67.91%_44.6%]" data-name="DataLabel">
      <div className="absolute capitalize flex flex-col font-['Rubik:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%+0.5px)] text-[14px] text-center text-nowrap text-white top-[7.96px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[16px]">4</p>
      </div>
    </div>
  );
}

function DataLabel2() {
  return (
    <div className="absolute inset-[11.36%_44.6%_84.58%_44.6%]" data-name="DataLabel">
      <p className="absolute capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] left-[calc(50%-3.73px)] text-[14px] text-nowrap text-white top-0">5</p>
    </div>
  );
}

function BarBlock() {
  return (
    <div className="h-full relative shrink-0 w-[32px]" data-name="BarBlock">
      <SingleBar />
      <SingleBar1 />
      <SingleBar2 />
      <DataLabel />
      <DataLabel1 />
      <DataLabel2 />
    </div>
  );
}

function BarGroup() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="BarGroup">
      <div className="size-full">
        <div className="content-stretch flex items-start px-[22px] py-0 relative size-full">
          <BarBlock />
        </div>
      </div>
    </div>
  );
}

function SingleBar3() {
  return (
    <div className="absolute inset-[83.33%_0_0_0]" data-name="SingleBar">
      <div className="absolute bg-[#343a6f] inset-[0_0_-0.33px_0] opacity-80" data-name="BarStrip" />
    </div>
  );
}

function SingleBar4() {
  return (
    <div className="absolute inset-[73.33%_0_16.67%_0]" data-name="SingleBar">
      <div className="absolute bg-[#55822b] inset-[0_0_0.6px_0] opacity-80" data-name="BarStrip" />
    </div>
  );
}

function SingleBar5() {
  return (
    <div className="absolute inset-[53.33%_0_26.67%_0]" data-name="SingleBar">
      <div className="absolute bg-[#4661a1] inset-[0_0_0.2px_0] opacity-80" data-name="BarStrip" />
    </div>
  );
}

function DataLabel3() {
  return (
    <div className="absolute inset-[84.69%_44.6%_11.24%_44.6%]" data-name="DataLabel">
      <div className="absolute capitalize flex flex-col font-['Rubik:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-0.3px)] text-[14px] text-center text-nowrap text-white top-[11.62px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[16px]">6</p>
      </div>
    </div>
  );
}

function DataLabel4() {
  return (
    <div className="absolute inset-[74.69%_44.6%_21.24%_44.6%]" data-name="DataLabel">
      <p className="absolute capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] left-[calc(50%-3.73px)] text-[14px] text-nowrap text-white top-0">3</p>
    </div>
  );
}

function DataLabel5() {
  return (
    <div className="absolute inset-[54.69%_44.6%_41.24%_44.6%]" data-name="DataLabel">
      <p className="absolute capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] left-[calc(50%-3.73px)] text-[14px] text-nowrap text-white top-0">5</p>
    </div>
  );
}

function BarBlock1() {
  return (
    <div className="h-full relative shrink-0 w-[32px]" data-name="BarBlock">
      <SingleBar3 />
      <SingleBar4 />
      <SingleBar5 />
      <DataLabel3 />
      <DataLabel4 />
      <DataLabel5 />
    </div>
  );
}

function BarGroup1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="BarGroup">
      <div className="size-full">
        <div className="content-stretch flex items-start px-[22px] py-0 relative size-full">
          <BarBlock1 />
        </div>
      </div>
    </div>
  );
}

function SingleBar6() {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-1/2" data-name="SingleBar">
      <div className="absolute bg-[#343a6f] inset-0 opacity-80" data-name="BarStrip" />
    </div>
  );
}

function SingleBar7() {
  return (
    <div className="absolute bottom-1/2 left-0 right-0 top-[20%]" data-name="SingleBar">
      <div className="absolute bg-[#55822b] inset-[0_0_0.8px_0] opacity-80" data-name="BarStrip" />
    </div>
  );
}

function SingleBar8() {
  return (
    <div className="absolute inset-[10%_0_80%_0]" data-name="SingleBar">
      <div className="absolute bg-[#4661a1] inset-[0_0_0.6px_0] opacity-80" data-name="BarStrip" />
    </div>
  );
}

function DataLabel6() {
  return (
    <div className="absolute inset-[51.36%_41.51%_44.58%_41.51%]" data-name="DataLabel">
      <div className="absolute capitalize flex flex-col font-['Rubik:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%+0.9px)] text-[14px] text-center text-nowrap text-white top-[27.29px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[16px]">15</p>
      </div>
    </div>
  );
}

function DataLabel7() {
  return (
    <div className="absolute inset-[21.36%_44.6%_74.58%_44.6%]" data-name="DataLabel">
      <p className="absolute capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] left-[calc(50%-3.6px)] text-[14px] text-nowrap text-white top-[11.29px]">9</p>
    </div>
  );
}

function DataLabel8() {
  return (
    <div className="absolute inset-[11.36%_44.6%_84.58%_44.6%]" data-name="DataLabel">
      <p className="absolute capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] left-[calc(50%-3.73px)] text-[14px] text-nowrap text-white top-0">3</p>
    </div>
  );
}

function BarBlock2() {
  return (
    <div className="h-full relative shrink-0 w-[32px]" data-name="BarBlock">
      <SingleBar6 />
      <SingleBar7 />
      <SingleBar8 />
      <DataLabel6 />
      <DataLabel7 />
      <DataLabel8 />
    </div>
  );
}

function BarGroup2() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="BarGroup">
      <div className="size-full">
        <div className="content-stretch flex items-start px-[22px] py-0 relative size-full">
          <BarBlock2 />
        </div>
      </div>
    </div>
  );
}

function SingleBar9() {
  return (
    <div className="absolute inset-[73.33%_0_0_0]" data-name="SingleBar">
      <div className="absolute bg-[#343a6f] inset-[0_0_0.27px_0] opacity-80" data-name="BarStrip" />
    </div>
  );
}

function SingleBar10() {
  return (
    <div className="absolute inset-[53.33%_0_26.67%_0]" data-name="SingleBar">
      <div className="absolute bg-[#55822b] inset-[0_0_0.2px_0] opacity-80" data-name="BarStrip" />
    </div>
  );
}

function SingleBar11() {
  return (
    <div className="absolute inset-[43.98%_0.4px_46.6%_-0.4px]" data-name="SingleBar">
      <div className="absolute bg-[#4661a1] inset-[0_0_0.33px_0] opacity-80" data-name="BarStrip" />
    </div>
  );
}

function DataLabel9() {
  return (
    <div className="absolute inset-[74.69%_44.6%_21.24%_44.6%]" data-name="DataLabel">
      <p className="absolute capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] left-[calc(50%-5.4px)] text-[14px] text-nowrap text-white top-[3.62px]">8</p>
    </div>
  );
}

function DataLabel10() {
  return (
    <div className="absolute inset-[54.69%_44.6%_41.24%_44.6%]" data-name="DataLabel">
      <p className="absolute capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] left-[calc(50%-5.4px)] text-[14px] text-nowrap text-white top-[6.62px]">6</p>
    </div>
  );
}

function DataLabel11() {
  return <div className="absolute inset-[48.02%_44.6%_47.91%_44.6%]" data-name="DataLabel" />;
}

function BarBlock3() {
  return (
    <div className="h-full relative shrink-0 w-[32px]" data-name="BarBlock">
      <SingleBar9 />
      <SingleBar10 />
      <SingleBar11 />
      <DataLabel9 />
      <DataLabel10 />
      <DataLabel11 />
      <p className="absolute capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] left-[calc(50%-5.4px)] text-[14px] text-nowrap text-white top-[84px]">2</p>
    </div>
  );
}

function BarGroup3() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="BarGroup">
      <div className="size-full">
        <div className="content-stretch flex items-start px-[22px] py-0 relative size-full">
          <BarBlock3 />
        </div>
      </div>
    </div>
  );
}

function SingleBar12() {
  return (
    <div className="absolute inset-[63.33%_0_0_0]" data-name="SingleBar">
      <div className="absolute bg-[#343a6f] inset-[0_0_-0.13px_0] opacity-80" data-name="BarStrip" />
    </div>
  );
}

function SingleBar13() {
  return (
    <div className="absolute inset-[36.67%_0]" data-name="SingleBar">
      <div className="absolute bg-[#55822b] inset-[0_0_0.27px_0] opacity-80" data-name="BarStrip" />
    </div>
  );
}

function SingleBar14() {
  return (
    <div className="absolute bg-white inset-[23.33%_0_63.33%_0]" data-name="SingleBar">
      <div className="absolute bg-[#4661a1] inset-[0_0_0.13px_0] opacity-80" data-name="BarStrip" />
    </div>
  );
}

function DataLabel12() {
  return (
    <div className="absolute inset-[64.69%_42.28%_31.24%_42.28%]" data-name="DataLabel">
      <p className="absolute capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] left-[calc(50%-7.2px)] text-[14px] text-nowrap text-white top-[-0.38px]">11</p>
    </div>
  );
}

function DataLabel13() {
  return <div className="absolute inset-[38.02%_44.6%_57.91%_44.6%]" data-name="DataLabel" />;
}

function DataLabel14() {
  return (
    <div className="absolute inset-[24.69%_44.6%_71.24%_44.6%]" data-name="DataLabel">
      <p className="absolute capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] left-[calc(50%-5.2px)] text-[14px] text-nowrap text-white top-[-0.38px]">4</p>
    </div>
  );
}

function BarBlock4() {
  return (
    <div className="h-full relative shrink-0 w-[32px]" data-name="BarBlock">
      <SingleBar12 />
      <SingleBar13 />
      <SingleBar14 />
      <DataLabel12 />
      <DataLabel13 />
      <p className="absolute capitalize font-['Rubik:Regular',sans-serif] font-normal leading-[16px] left-[calc(50%-5.2px)] text-[14px] text-nowrap text-white top-[76px]">8</p>
      <DataLabel14 />
    </div>
  );
}

function BarGroup4() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="BarGroup">
      <div className="size-full">
        <div className="content-stretch flex items-start px-[22px] py-0 relative size-full">
          <BarBlock4 />
        </div>
      </div>
    </div>
  );
}

function BarArea() {
  return (
    <div className="absolute content-stretch flex inset-[6px_0_7px_0] items-start" data-name="BarArea">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,26,0.3)] border-solid inset-[0_0_-1px_0] pointer-events-none" />
      <BarGroup />
      <BarGroup1 />
      <BarGroup2 />
      <BarGroup3 />
      <BarGroup4 />
    </div>
  );
}

function GraphiGrid1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Graphi&Grid">
      <XLines1 />
      <YLines1 />
      <BarArea />
    </div>
  );
}

function MainChart1() {
  return (
    <div className="basis-0 content-stretch flex grow items-center mb-[-2px] min-h-px min-w-px relative shrink-0 w-full" data-name="MainChart">
      <YAxisLeft1 />
      <GraphiGrid1 />
    </div>
  );
}

function XLabelBox7() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end min-h-px min-w-px relative shrink-0" data-name="xLabelBox">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] text-center w-full">Math</p>
    </div>
  );
}

function XLabelBox8() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end min-h-px min-w-px relative shrink-0" data-name="xLabelBox">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] text-center w-full">Science</p>
    </div>
  );
}

function XLabelBox9() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end min-h-px min-w-px relative shrink-0" data-name="xLabelBox">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] text-center w-full">Reading</p>
    </div>
  );
}

function XLabelBox10() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end min-h-px min-w-px relative shrink-0" data-name="xLabelBox">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] text-center w-full">Career/Tech</p>
    </div>
  );
}

function XLabelBox11() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end min-h-px min-w-px relative shrink-0" data-name="xLabelBox">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] text-center w-full">History</p>
    </div>
  );
}

function XAxis1() {
  return (
    <div className="mb-[-2px] relative shrink-0 w-full" data-name="xAxis">
      <div className="size-full">
        <div className="content-stretch flex items-start pb-[8px] pl-[24px] pr-0 pt-0 relative w-full">
          <XLabelBox7 />
          <XLabelBox8 />
          <XLabelBox9 />
          <XLabelBox10 />
          <XLabelBox11 />
        </div>
      </div>
    </div>
  );
}

function ChartAxis1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px pb-[2px] pt-0 px-0 relative shrink-0 w-full" data-name="Chart&Axis">
      <MainChart1 />
      <XAxis1 />
    </div>
  );
}

function BasicNode24() {
  return (
    <div className="absolute left-[6px] size-px top-[6px]" data-name="basicNode">
      <div className="absolute bg-[#343a6f] border border-solid border-white left-[-6px] size-[16px] top-[-6.5px]" data-name="SquareFill" />
    </div>
  );
}

function LegendNode3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="LegendNode">
      <BasicNode24 />
    </div>
  );
}

function Legend3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip p-[4px] relative shrink-0" data-name="Legend">
      <LegendNode3 />
      <div className="flex flex-col font-['Rubik:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.7)] text-nowrap">
        <p className="leading-[24px]">Assigned</p>
      </div>
    </div>
  );
}

function BasicNode25() {
  return (
    <div className="absolute left-[6px] size-px top-[6px]" data-name="basicNode">
      <div className="absolute bg-[#55822b] border border-solid border-white left-[-6px] size-[16px] top-[-6px]" data-name="SquareFill" />
    </div>
  );
}

function LegendNode4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="LegendNode">
      <BasicNode25 />
    </div>
  );
}

function Legend4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative shrink-0" data-name="Legend">
      <LegendNode4 />
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.7)] text-nowrap">Completed</p>
    </div>
  );
}

function BasicNode26() {
  return (
    <div className="absolute left-[6px] size-px top-[6px]" data-name="basicNode">
      <div className="absolute bg-[#4661a1] border border-solid border-white left-[-6px] size-[16px] top-[-6px]" data-name="SquareFill" />
    </div>
  );
}

function LegendNode5() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="LegendNode">
      <BasicNode26 />
    </div>
  );
}

function Legend5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip p-[4px] relative shrink-0" data-name="Legend">
      <LegendNode5 />
      <div className="flex flex-col font-['Rubik:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.7)] text-nowrap">
        <p className="leading-[24px]">In Progress</p>
      </div>
    </div>
  );
}

function FillLegends() {
  return (
    <div className="content-center flex flex-wrap gap-[0px_8px] items-center justify-center overflow-clip px-[8px] py-0 relative shrink-0" data-name="FillLegends">
      <Legend3 />
      <Legend4 />
      <Legend5 />
    </div>
  );
}

function Legends1() {
  return (
    <div className="content-start flex flex-wrap items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Legends">
      <FillLegends />
    </div>
  );
}

function BarLineChart1() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[320px] items-start pb-[16px] pt-[32px] px-[16px] relative shrink-0 w-[390px]" data-name="BarLineChart">
      <ChartAxis1 />
      <Legends1 />
    </div>
  );
}

function ChartCardBarLine() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start justify-center p-[24px] relative rounded-[8px] shrink-0 size-[416px]" data-name="Chart Card_BarLine">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_3px_1px_rgba(0,0,0,0.15)]" />
      <HeaderCharts2 />
      <BarLineChart1 />
    </div>
  );
}

function Charts() {
  return (
    <div className="relative shrink-0 w-full" data-name="charts">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[32px] items-center px-[64px] py-0 relative w-full">
          <ChartCardDonut />
          <ChartCardOther />
          <ChartCardBarLine />
        </div>
      </div>
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

function ButtonConcept1() {
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

function ButtonConcept() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center justify-center min-h-[40px] min-w-[40px] px-[16px] py-[12px] relative rounded-[100px] shrink-0" data-name="Button _Concept 2">
      <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="basis-0 font-['Rubik:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#121212] text-[16px] text-center">Items Per Page:</p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-center text-nowrap">12</p>
      <IconRight1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center justify-end min-h-px min-w-px relative shrink-0">
      <ButtonConcept1 />
      <ButtonConcept />
    </div>
  );
}

function FilterRow() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Filter_Row">
      <SearchContainer />
      <Frame4 />
    </div>
  );
}

function IconSetIconEye() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-set/icon-eye">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-set/icon-eye">
          <g id="Shape">
            <path clipRule="evenodd" d={svgPaths.p279efa80} fill="#707070" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p9502780} fill="#707070" fillRule="evenodd" />
            <path d={svgPaths.p245f7900} fill="#707070" />
            <path d={svgPaths.p367a3980} fill="#707070" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Actions">
      <p className="basis-0 capitalize font-['Rubik:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#707070] text-[14px]">14-Nov-2018</p>
      <IconSetIconEye />
    </div>
  );
}

function ReportCardDescription() {
  return (
    <div className="[grid-area:1_/_1] bg-[#f7f7f7] place-self-stretch relative rounded-[8px] shrink-0" data-name="ReportCard_Description">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
          <p className="-webkit-box font-['Rubik:Medium',sans-serif] font-medium leading-[32px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px] w-full">Performance Band Report</p>
          <div className="-webkit-box font-['Rubik:Regular',sans-serif] font-normal leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] w-full">
            <p className="mb-0">Displays individual student achievement, class performance and standards assessed on a selected assessment. Reports can be printed for individual students or the entire class. Include a scroll bar if the description exceeds max height.</p>
            <p>&nbsp;</p>
          </div>
          <Actions />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function IconSetIconEye1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-set/icon-eye">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-set/icon-eye">
          <g id="Shape">
            <path clipRule="evenodd" d={svgPaths.p279efa80} fill="#707070" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p9502780} fill="#707070" fillRule="evenodd" />
            <path d={svgPaths.p245f7900} fill="#707070" />
            <path d={svgPaths.p367a3980} fill="#707070" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Actions1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Actions">
      <p className="basis-0 capitalize font-['Rubik:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#707070] text-[14px]">14-Nov-2018</p>
      <IconSetIconEye1 />
    </div>
  );
}

function ReportCardDescription1() {
  return (
    <div className="[grid-area:1_/_2] bg-[#f7f7f7] place-self-stretch relative rounded-[8px] shrink-0" data-name="ReportCard_Description">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
          <p className="-webkit-box font-['Rubik:Medium',sans-serif] font-medium leading-[32px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px] w-full">Performance Band Report</p>
          <div className="-webkit-box font-['Rubik:Regular',sans-serif] font-normal leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] w-full">
            <p className="mb-0">Displays individual student achievement, class performance and standards assessed on a selected assessment. Reports can be printed for individual students or the entire class. Include a scroll bar if the description exceeds max height.</p>
            <p>&nbsp;</p>
          </div>
          <Actions1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function IconSetIconEye2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-set/icon-eye">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-set/icon-eye">
          <g id="Shape">
            <path clipRule="evenodd" d={svgPaths.p279efa80} fill="#707070" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p9502780} fill="#707070" fillRule="evenodd" />
            <path d={svgPaths.p245f7900} fill="#707070" />
            <path d={svgPaths.p367a3980} fill="#707070" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Actions2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Actions">
      <p className="basis-0 capitalize font-['Rubik:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#707070] text-[14px]">14-Nov-2018</p>
      <IconSetIconEye2 />
    </div>
  );
}

function ReportCardDescription2() {
  return (
    <div className="[grid-area:1_/_3] bg-[#f7f7f7] place-self-stretch relative rounded-[8px] shrink-0" data-name="ReportCard_Description">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
          <p className="-webkit-box font-['Rubik:Medium',sans-serif] font-medium leading-[32px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px] w-full">Performance Band Report</p>
          <div className="-webkit-box font-['Rubik:Regular',sans-serif] font-normal leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] w-full">
            <p className="mb-0">Displays individual student achievement, class performance and standards assessed on a selected assessment. Reports can be printed for individual students or the entire class. Include a scroll bar if the description exceeds max height.</p>
            <p>&nbsp;</p>
          </div>
          <Actions2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function IconSetIconEye3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-set/icon-eye">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-set/icon-eye">
          <g id="Shape">
            <path clipRule="evenodd" d={svgPaths.p279efa80} fill="#707070" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p9502780} fill="#707070" fillRule="evenodd" />
            <path d={svgPaths.p245f7900} fill="#707070" />
            <path d={svgPaths.p367a3980} fill="#707070" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Actions3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Actions">
      <p className="basis-0 capitalize font-['Rubik:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#707070] text-[14px]">14-Nov-2018</p>
      <IconSetIconEye3 />
    </div>
  );
}

function ReportCardDescription3() {
  return (
    <div className="[grid-area:2_/_1] bg-[#f7f7f7] place-self-stretch relative rounded-[8px] shrink-0" data-name="ReportCard_Description">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
          <p className="-webkit-box font-['Rubik:Medium',sans-serif] font-medium leading-[32px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px] w-full">Performance Band Report</p>
          <div className="-webkit-box font-['Rubik:Regular',sans-serif] font-normal leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] w-full">
            <p className="mb-0">Displays individual student achievement, class performance and standards assessed on a selected assessment. Reports can be printed for individual students or the entire class. Include a scroll bar if the description exceeds max height.</p>
            <p>&nbsp;</p>
          </div>
          <Actions3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function IconSetIconEye4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-set/icon-eye">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-set/icon-eye">
          <g id="Shape">
            <path clipRule="evenodd" d={svgPaths.p279efa80} fill="#707070" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p9502780} fill="#707070" fillRule="evenodd" />
            <path d={svgPaths.p245f7900} fill="#707070" />
            <path d={svgPaths.p367a3980} fill="#707070" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Actions4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Actions">
      <p className="basis-0 capitalize font-['Rubik:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#707070] text-[14px]">14-Nov-2018</p>
      <IconSetIconEye4 />
    </div>
  );
}

function ReportCardDescription4() {
  return (
    <div className="[grid-area:2_/_2] bg-[#f7f7f7] place-self-stretch relative rounded-[8px] shrink-0" data-name="ReportCard_Description">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
          <p className="-webkit-box font-['Rubik:Medium',sans-serif] font-medium leading-[32px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px] w-full">Performance Band Report</p>
          <div className="-webkit-box font-['Rubik:Regular',sans-serif] font-normal leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] w-full">
            <p className="mb-0">Displays individual student achievement, class performance and standards assessed on a selected assessment. Reports can be printed for individual students or the entire class. Include a scroll bar if the description exceeds max height.</p>
            <p>&nbsp;</p>
          </div>
          <Actions4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function IconSetIconEye5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-set/icon-eye">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-set/icon-eye">
          <g id="Shape">
            <path clipRule="evenodd" d={svgPaths.p279efa80} fill="#707070" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p9502780} fill="#707070" fillRule="evenodd" />
            <path d={svgPaths.p245f7900} fill="#707070" />
            <path d={svgPaths.p367a3980} fill="#707070" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Actions5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Actions">
      <p className="basis-0 capitalize font-['Rubik:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#707070] text-[14px]">14-Nov-2018</p>
      <IconSetIconEye5 />
    </div>
  );
}

function ReportCardDescription5() {
  return (
    <div className="[grid-area:2_/_3] bg-[#f7f7f7] place-self-stretch relative rounded-[8px] shrink-0" data-name="ReportCard_Description">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
          <p className="-webkit-box font-['Rubik:Medium',sans-serif] font-medium leading-[32px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px] w-full">Performance Band Report</p>
          <div className="-webkit-box font-['Rubik:Regular',sans-serif] font-normal leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] w-full">
            <p className="mb-0">Displays individual student achievement, class performance and standards assessed on a selected assessment. Reports can be printed for individual students or the entire class. Include a scroll bar if the description exceeds max height.</p>
            <p>&nbsp;</p>
          </div>
          <Actions5 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function IconSetIconEye6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-set/icon-eye">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-set/icon-eye">
          <g id="Shape">
            <path clipRule="evenodd" d={svgPaths.p279efa80} fill="#707070" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p9502780} fill="#707070" fillRule="evenodd" />
            <path d={svgPaths.p245f7900} fill="#707070" />
            <path d={svgPaths.p367a3980} fill="#707070" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Actions6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Actions">
      <p className="basis-0 capitalize font-['Rubik:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#707070] text-[14px]">14-Nov-2018</p>
      <IconSetIconEye6 />
    </div>
  );
}

function ReportCardDescription6() {
  return (
    <div className="[grid-area:3_/_1] bg-[#f7f7f7] place-self-stretch relative rounded-[8px] shrink-0" data-name="ReportCard_Description">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
          <p className="-webkit-box font-['Rubik:Medium',sans-serif] font-medium leading-[32px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px] w-full">Performance Band Report</p>
          <div className="-webkit-box font-['Rubik:Regular',sans-serif] font-normal leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] w-full">
            <p className="mb-0">Displays individual student achievement, class performance and standards assessed on a selected assessment. Reports can be printed for individual students or the entire class. Include a scroll bar if the description exceeds max height.</p>
            <p>&nbsp;</p>
          </div>
          <Actions6 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function IconSetIconEye7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-set/icon-eye">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-set/icon-eye">
          <g id="Shape">
            <path clipRule="evenodd" d={svgPaths.p279efa80} fill="#707070" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p9502780} fill="#707070" fillRule="evenodd" />
            <path d={svgPaths.p245f7900} fill="#707070" />
            <path d={svgPaths.p367a3980} fill="#707070" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Actions7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Actions">
      <p className="basis-0 capitalize font-['Rubik:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#707070] text-[14px]">14-Nov-2018</p>
      <IconSetIconEye7 />
    </div>
  );
}

function ReportCardDescription7() {
  return (
    <div className="[grid-area:3_/_2] bg-[#f7f7f7] place-self-stretch relative rounded-[8px] shrink-0" data-name="ReportCard_Description">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
          <p className="-webkit-box font-['Rubik:Medium',sans-serif] font-medium leading-[32px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px] w-full">Performance Band Report</p>
          <div className="-webkit-box font-['Rubik:Regular',sans-serif] font-normal leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] w-full">
            <p className="mb-0">Displays individual student achievement, class performance and standards assessed on a selected assessment. Reports can be printed for individual students or the entire class. Include a scroll bar if the description exceeds max height.</p>
            <p>&nbsp;</p>
          </div>
          <Actions7 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function IconSetIconEye8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-set/icon-eye">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-set/icon-eye">
          <g id="Shape">
            <path clipRule="evenodd" d={svgPaths.p279efa80} fill="#707070" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p9502780} fill="#707070" fillRule="evenodd" />
            <path d={svgPaths.p245f7900} fill="#707070" />
            <path d={svgPaths.p367a3980} fill="#707070" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Actions8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Actions">
      <p className="basis-0 capitalize font-['Rubik:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#707070] text-[14px]">14-Nov-2018</p>
      <IconSetIconEye8 />
    </div>
  );
}

function ReportCardDescription8() {
  return (
    <div className="[grid-area:3_/_3] bg-[#f7f7f7] place-self-stretch relative rounded-[8px] shrink-0" data-name="ReportCard_Description">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
          <p className="-webkit-box font-['Rubik:Medium',sans-serif] font-medium leading-[32px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px] w-full">Performance Band Report</p>
          <div className="-webkit-box font-['Rubik:Regular',sans-serif] font-normal leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] w-full">
            <p className="mb-0">Displays individual student achievement, class performance and standards assessed on a selected assessment. Reports can be printed for individual students or the entire class. Include a scroll bar if the description exceeds max height.</p>
            <p>&nbsp;</p>
          </div>
          <Actions8 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function IconSetIconEye9() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-set/icon-eye">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-set/icon-eye">
          <g id="Shape">
            <path clipRule="evenodd" d={svgPaths.p279efa80} fill="#707070" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p9502780} fill="#707070" fillRule="evenodd" />
            <path d={svgPaths.p245f7900} fill="#707070" />
            <path d={svgPaths.p367a3980} fill="#707070" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Actions9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Actions">
      <p className="basis-0 capitalize font-['Rubik:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#707070] text-[14px]">14-Nov-2018</p>
      <IconSetIconEye9 />
    </div>
  );
}

function ReportCardDescription9() {
  return (
    <div className="[grid-area:4_/_1] bg-[#f7f7f7] place-self-stretch relative rounded-[8px] shrink-0" data-name="ReportCard_Description">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
          <p className="-webkit-box font-['Rubik:Medium',sans-serif] font-medium leading-[32px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px] w-full">Performance Band Report</p>
          <div className="-webkit-box font-['Rubik:Regular',sans-serif] font-normal leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] w-full">
            <p className="mb-0">Displays individual student achievement, class performance and standards assessed on a selected assessment. Reports can be printed for individual students or the entire class. Include a scroll bar if the description exceeds max height.</p>
            <p>&nbsp;</p>
          </div>
          <Actions9 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function IconSetIconEye10() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-set/icon-eye">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-set/icon-eye">
          <g id="Shape">
            <path clipRule="evenodd" d={svgPaths.p279efa80} fill="#707070" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p9502780} fill="#707070" fillRule="evenodd" />
            <path d={svgPaths.p245f7900} fill="#707070" />
            <path d={svgPaths.p367a3980} fill="#707070" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Actions10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Actions">
      <p className="basis-0 capitalize font-['Rubik:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#707070] text-[14px]">14-Nov-2018</p>
      <IconSetIconEye10 />
    </div>
  );
}

function ReportCardDescription10() {
  return (
    <div className="[grid-area:4_/_2] bg-[#f7f7f7] place-self-stretch relative rounded-[8px] shrink-0" data-name="ReportCard_Description">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
          <p className="-webkit-box font-['Rubik:Medium',sans-serif] font-medium leading-[32px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px] w-full">Performance Band Report</p>
          <div className="-webkit-box font-['Rubik:Regular',sans-serif] font-normal leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] w-full">
            <p className="mb-0">Displays individual student achievement, class performance and standards assessed on a selected assessment. Reports can be printed for individual students or the entire class. Include a scroll bar if the description exceeds max height.</p>
            <p>&nbsp;</p>
          </div>
          <Actions10 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function IconSetIconEye11() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-set/icon-eye">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-set/icon-eye">
          <g id="Shape">
            <path clipRule="evenodd" d={svgPaths.p279efa80} fill="#707070" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p9502780} fill="#707070" fillRule="evenodd" />
            <path d={svgPaths.p245f7900} fill="#707070" />
            <path d={svgPaths.p367a3980} fill="#707070" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Actions11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Actions">
      <p className="basis-0 capitalize font-['Rubik:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#707070] text-[14px]">14-Nov-2018</p>
      <IconSetIconEye11 />
    </div>
  );
}

function ReportCardDescription11() {
  return (
    <div className="[grid-area:4_/_3] bg-[#f7f7f7] place-self-stretch relative rounded-[8px] shrink-0" data-name="ReportCard_Description">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
          <p className="-webkit-box font-['Rubik:Medium',sans-serif] font-medium leading-[32px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px] w-full">Performance Band Report</p>
          <div className="-webkit-box font-['Rubik:Regular',sans-serif] font-normal leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] w-full">
            <p className="mb-0">Displays individual student achievement, class performance and standards assessed on a selected assessment. Reports can be printed for individual students or the entire class. Include a scroll bar if the description exceeds max height.</p>
            <p>&nbsp;</p>
          </div>
          <Actions11 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function IconSetIconEye12() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-set/icon-eye">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-set/icon-eye">
          <g id="Shape">
            <path clipRule="evenodd" d={svgPaths.p279efa80} fill="#707070" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p9502780} fill="#707070" fillRule="evenodd" />
            <path d={svgPaths.p245f7900} fill="#707070" />
            <path d={svgPaths.p367a3980} fill="#707070" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Actions12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Actions">
      <p className="basis-0 capitalize font-['Rubik:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#707070] text-[14px]">14-Nov-2018</p>
      <IconSetIconEye12 />
    </div>
  );
}

function ReportCardDescription12() {
  return (
    <div className="[grid-area:5_/_1] bg-[#f7f7f7] place-self-stretch relative rounded-[8px] shrink-0" data-name="ReportCard_Description">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
          <p className="-webkit-box font-['Rubik:Medium',sans-serif] font-medium leading-[32px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px] w-full">Performance Band Report</p>
          <div className="-webkit-box font-['Rubik:Regular',sans-serif] font-normal leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] w-full">
            <p className="mb-0">Displays individual student achievement, class performance and standards assessed on a selected assessment. Reports can be printed for individual students or the entire class. Include a scroll bar if the description exceeds max height.</p>
            <p>&nbsp;</p>
          </div>
          <Actions12 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function IconSetIconEye13() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-set/icon-eye">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-set/icon-eye">
          <g id="Shape">
            <path clipRule="evenodd" d={svgPaths.p279efa80} fill="#707070" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p9502780} fill="#707070" fillRule="evenodd" />
            <path d={svgPaths.p245f7900} fill="#707070" />
            <path d={svgPaths.p367a3980} fill="#707070" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Actions13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Actions">
      <p className="basis-0 capitalize font-['Rubik:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#707070] text-[14px]">14-Nov-2018</p>
      <IconSetIconEye13 />
    </div>
  );
}

function ReportCardDescription13() {
  return (
    <div className="[grid-area:5_/_2] bg-[#f7f7f7] place-self-stretch relative rounded-[8px] shrink-0" data-name="ReportCard_Description">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
          <p className="-webkit-box font-['Rubik:Medium',sans-serif] font-medium leading-[32px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px] w-full">Performance Band Report</p>
          <div className="-webkit-box font-['Rubik:Regular',sans-serif] font-normal leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] w-full">
            <p className="mb-0">Displays individual student achievement, class performance and standards assessed on a selected assessment. Reports can be printed for individual students or the entire class. Include a scroll bar if the description exceeds max height.</p>
            <p>&nbsp;</p>
          </div>
          <Actions13 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function IconSetIconEye14() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-set/icon-eye">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-set/icon-eye">
          <g id="Shape">
            <path clipRule="evenodd" d={svgPaths.p279efa80} fill="#707070" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p9502780} fill="#707070" fillRule="evenodd" />
            <path d={svgPaths.p245f7900} fill="#707070" />
            <path d={svgPaths.p367a3980} fill="#707070" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Actions14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Actions">
      <p className="basis-0 capitalize font-['Rubik:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#707070] text-[14px]">14-Nov-2018</p>
      <IconSetIconEye14 />
    </div>
  );
}

function ReportCardDescription14() {
  return (
    <div className="[grid-area:5_/_3] bg-[#f7f7f7] place-self-stretch relative rounded-[8px] shrink-0" data-name="ReportCard_Description">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
          <p className="-webkit-box font-['Rubik:Medium',sans-serif] font-medium leading-[32px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[20px] tracking-[-0.2px] w-full">Performance Band Report</p>
          <div className="-webkit-box font-['Rubik:Regular',sans-serif] font-normal leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] w-full">
            <p className="mb-0">Displays individual student achievement, class performance and standards assessed on a selected assessment. Reports can be printed for individual students or the entire class. Include a scroll bar if the description exceeds max height.</p>
            <p>&nbsp;</p>
          </div>
          <Actions14 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function SectionGrid() {
  return (
    <div className="gap-[32px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(5,_minmax(0px,_1fr))] h-[1463px] relative shrink-0 w-[1312px]" data-name="Section Grid">
      <ReportCardDescription />
      <ReportCardDescription1 />
      <ReportCardDescription2 />
      <ReportCardDescription3 />
      <ReportCardDescription4 />
      <ReportCardDescription5 />
      <ReportCardDescription6 />
      <ReportCardDescription7 />
      <ReportCardDescription8 />
      <ReportCardDescription9 />
      <ReportCardDescription10 />
      <ReportCardDescription11 />
      <ReportCardDescription12 />
      <ReportCardDescription13 />
      <ReportCardDescription14 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="basis-0 content-stretch flex grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0 w-full">
      <SectionGrid />
    </div>
  );
}

function Content() {
  return (
    <div className="h-[1230px] relative shrink-0 w-full" data-name="content">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start px-[64px] py-0 relative size-full">
          <FilterRow />
          <Frame9 />
        </div>
      </div>
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

function Frame5() {
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
    <div className="bg-[#343a6f] h-[160px] relative shrink-0 w-full" data-name="Layout / Footer">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between px-[60px] py-[20px] relative size-full">
          <Frame5 />
          <Frame />
        </div>
      </div>
    </div>
  );
}

export default function ReportsHomePage() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start relative size-full" data-name="Reports_HomePage">
      <Header />
      <SubHeader />
      <Charts />
      <Content />
      <LayoutFooter />
    </div>
  );
}