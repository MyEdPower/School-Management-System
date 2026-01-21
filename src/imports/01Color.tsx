import svgPaths from "./svg-jqn4uuzmay";
import imgLogo from "figma:asset/9ab59f47957b436f3532fe8fda05e18d75720f61.png";

function Frame() {
  return (
    <div className="absolute bg-[#343a6f] content-stretch flex items-center justify-between left-1/2 px-[64px] py-[16px] top-0 translate-x-[-50%] w-[1440px]">
      <div className="h-[60px] relative shrink-0 w-[151px]" data-name="Logo">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[106.67%] left-[-4.64%] max-w-none top-[-4.32%] w-[200.74%]" src={imgLogo} />
        </div>
      </div>
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-nowrap text-white">01 | Color</p>
    </div>
  );
}

function Description() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">History Primary</p>
      <p className="relative shrink-0 text-[#707070] w-full">#EC5E74</p>
    </div>
  );
}

function Swatch() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#ec5e74] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description />
    </div>
  );
}

function Description1() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">History Background</p>
      <p className="relative shrink-0 text-[#707070] w-full">#FCE1E5</p>
    </div>
  );
}

function Swatch1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#fce1e5] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description1 />
    </div>
  );
}

function Description2() {
  return (
    <div className="content-stretch flex flex-col font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="font-['Rubik:Medium',sans-serif] relative shrink-0 text-[#121212] w-full">History Gradient</p>
      <p className="font-['Rubik:Medium','Noto_Sans:Medium',sans-serif] relative shrink-0 text-[#707070] w-full">#FCE1E5 → #FFFFFF</p>
    </div>
  );
}

function Swatch2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-gradient-to-b from-[#fce1e5] h-[120px] rounded-[16px] to-[#ffffff] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description2 />
    </div>
  );
}

function Description3() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">Math Primary</p>
      <p className="relative shrink-0 text-[#707070] w-full">#03B0E8</p>
    </div>
  );
}

function Swatch3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#03b0e8] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description3 />
    </div>
  );
}

function Description4() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">Math Background</p>
      <p className="relative shrink-0 text-[#707070] w-full">#D2F2FC</p>
    </div>
  );
}

function Swatch4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#d2f2fc] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description4 />
    </div>
  );
}

function Description5() {
  return (
    <div className="content-stretch flex flex-col font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="font-['Rubik:Medium',sans-serif] relative shrink-0 text-[#121212] w-full">Math Gradient</p>
      <p className="font-['Rubik:Medium','Noto_Sans:Medium',sans-serif] relative shrink-0 text-[#707070] w-full">#D2F2FC → #FFFFFF</p>
    </div>
  );
}

function Swatch5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-gradient-to-b from-[#d2f2fc] h-[120px] rounded-[16px] to-[#ffffff] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description5 />
    </div>
  );
}

function Description6() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">Reading Primary</p>
      <p className="relative shrink-0 text-[#707070] w-full">#EB8900</p>
    </div>
  );
}

function Swatch6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#eb8900] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description6 />
    </div>
  );
}

function Description7() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">Reading Background</p>
      <p className="relative shrink-0 text-[#707070] w-full">#FCECD4</p>
    </div>
  );
}

function Swatch7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#fcecd4] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description7 />
    </div>
  );
}

function Description8() {
  return (
    <div className="content-stretch flex flex-col font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="font-['Rubik:Medium',sans-serif] relative shrink-0 text-[#121212] w-full">Reading Gradient</p>
      <p className="font-['Rubik:Medium','Noto_Sans:Medium',sans-serif] relative shrink-0 text-[#707070] w-full">#FCECD4 → #FFFFFF</p>
    </div>
  );
}

function Swatch8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-gradient-to-b from-[#fcecd4] h-[120px] rounded-[16px] to-[#ffffff] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description8 />
    </div>
  );
}

function Description9() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">Science Primary</p>
      <p className="relative shrink-0 text-[#707070] w-full">#9266E5</p>
    </div>
  );
}

function Swatch9() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#9266e5] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description9 />
    </div>
  );
}

function Description10() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">Sciencet Background</p>
      <p className="relative shrink-0 text-[#707070] w-full">#ECE3FC</p>
    </div>
  );
}

function Swatch10() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#ece3fc] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description10 />
    </div>
  );
}

function Description11() {
  return (
    <div className="content-stretch flex flex-col font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="font-['Rubik:Medium',sans-serif] relative shrink-0 text-[#121212] w-full">Science Gradient</p>
      <p className="font-['Rubik:Medium','Noto_Sans:Medium',sans-serif] relative shrink-0 text-[#707070] w-full">#ECE3FC → #FFFFFF</p>
    </div>
  );
}

function Swatch11() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-gradient-to-b from-[#ece3fc] h-[120px] rounded-[16px] to-[#ffffff] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description11 />
    </div>
  );
}

function Description12() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">Career Tech Primary</p>
      <p className="relative shrink-0 text-[#707070] w-full">#7579B8</p>
    </div>
  );
}

function Swatch12() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#7579b8] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description12 />
    </div>
  );
}

function Description13() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">Career Tech Background</p>
      <p className="relative shrink-0 text-[#707070] w-full">#DFE1F5</p>
    </div>
  );
}

function Swatch13() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#dfe1f5] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description13 />
    </div>
  );
}

function Description14() {
  return (
    <div className="content-stretch flex flex-col font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="font-['Rubik:Medium',sans-serif] relative shrink-0 text-[#121212] w-full">Career Tech Gradient</p>
      <p className="font-['Rubik:Medium','Noto_Sans:Medium',sans-serif] relative shrink-0 text-[#707070] w-full">#DFE1F5 → #FFFFFF</p>
    </div>
  );
}

function Swatch14() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-gradient-to-b from-[#dfe1f5] h-[120px] rounded-[16px] to-[#ffffff] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description14 />
    </div>
  );
}

function Description15() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[#707070] text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 w-full">Other Primary</p>
      <p className="relative shrink-0 w-full">#F2CC05</p>
    </div>
  );
}

function Swatch15() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#f2cc05] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description15 />
    </div>
  );
}

function Description16() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">Other Background</p>
      <p className="relative shrink-0 text-[#707070] w-full">#FCF5CC</p>
    </div>
  );
}

function Swatch16() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#fcf5cc] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description16 />
    </div>
  );
}

function Description17() {
  return (
    <div className="content-stretch flex flex-col font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="font-['Rubik:Medium',sans-serif] relative shrink-0 text-[#121212] w-full">Other Gradient</p>
      <p className="font-['Rubik:Medium','Noto_Sans:Medium',sans-serif] relative shrink-0 text-[#707070] w-full">#FCF5CC → #FFFFFF</p>
    </div>
  );
}

function Swatch17() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-gradient-to-b from-[#fcf5cc] h-[120px] rounded-[16px] to-[#ffffff] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description17 />
    </div>
  );
}

function SwatchRow() {
  return (
    <div className="content-center flex flex-wrap gap-[32px] items-center relative shrink-0 w-full" data-name="Swatch Row">
      <Swatch />
      <Swatch1 />
      <Swatch2 />
      <Swatch3 />
      <Swatch4 />
      <Swatch5 />
      <Swatch6 />
      <Swatch7 />
      <Swatch8 />
      <Swatch9 />
      <Swatch10 />
      <Swatch11 />
      <Swatch12 />
      <Swatch13 />
      <Swatch14 />
      <Swatch15 />
      <Swatch16 />
      <Swatch17 />
    </div>
  );
}

function SwatchCategory() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[28px] items-start left-[64px] top-[1038px] w-[1312px]" data-name="Swatch Category">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[40px] relative shrink-0 text-[#707070] text-[32px] w-full">Subjects</p>
      <SwatchRow />
    </div>
  );
}

function Description18() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">{` 90-100`}</p>
      <p className="relative shrink-0 text-[#707070] w-full">#1565C0</p>
    </div>
  );
}

function Swatch18() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#1565c0] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description18 />
    </div>
  );
}

function Description19() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">{` 80-89`}</p>
      <p className="relative shrink-0 text-[#2a692d] w-full">#388E3C</p>
    </div>
  );
}

function Swatch19() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#2a692d] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description19 />
    </div>
  );
}

function Description20() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">{` 60-79`}</p>
      <p className="relative shrink-0 text-[#707070] w-full">#5F1980</p>
    </div>
  );
}

function Swatch20() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#5f1980] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description20 />
    </div>
  );
}

function Description21() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">40-59</p>
      <p className="relative shrink-0 text-[#707070] w-full">#F64C13</p>
    </div>
  );
}

function Swatch21() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#d93c08] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description21 />
    </div>
  );
}

function Description22() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">{` <40`}</p>
      <p className="relative shrink-0 text-[#707070] w-full">#F41F1F</p>
    </div>
  );
}

function Swatch22() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#b40808] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description22 />
    </div>
  );
}

function SwatchRow1() {
  return (
    <div className="content-center flex flex-wrap gap-[32px] items-center relative shrink-0 w-full" data-name="Swatch Row">
      <Swatch18 />
      <Swatch19 />
      <Swatch20 />
      <Swatch21 />
      <Swatch22 />
    </div>
  );
}

function SwatchCategory1() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-[1312px]" data-name="Swatch Category">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[40px] relative shrink-0 text-[#707070] text-[32px] w-full">{`Performance Band `}</p>
      <SwatchRow1 />
    </div>
  );
}

function SwatchRow2() {
  return (
    <div className="bg-white content-center flex flex-wrap gap-[32px] items-center relative shrink-0 w-full" data-name="Swatch Row">
      <SwatchCategory1 />
    </div>
  );
}

function Description23() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">Primary</p>
      <p className="relative shrink-0 text-[#707070] w-full">#121212</p>
    </div>
  );
}

function Swatch23() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#121212] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description23 />
    </div>
  );
}

function Description24() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">Secondary</p>
      <p className="relative shrink-0 text-[#707070] w-full">#8A8A8A</p>
    </div>
  );
}

function Swatch24() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#707070] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description24 />
    </div>
  );
}

function Description25() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">Divider</p>
      <p className="relative shrink-0 text-[#707070] w-full">#D4D4D4</p>
    </div>
  );
}

function Swatch25() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#d4d4d4] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description25 />
    </div>
  );
}

function Description26() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">Background</p>
      <p className="relative shrink-0 text-[#707070] w-full">#F7F7F7</p>
    </div>
  );
}

function Swatch26() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#f7f7f7] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description26 />
    </div>
  );
}

function Description27() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">White</p>
      <p className="relative shrink-0 text-[#707070] w-full">#FFFFFF</p>
    </div>
  );
}

function Swatch27() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-white h-[120px] relative rounded-[16px] w-full" data-name="Swatch">
            <div aria-hidden="true" className="absolute border border-[#121212] border-solid inset-0 pointer-events-none rounded-[16px]" />
          </div>
        </div>
      </div>
      <Description27 />
    </div>
  );
}

function SwatchRow3() {
  return (
    <div className="content-center flex flex-wrap gap-[32px] items-center relative shrink-0 w-full" data-name="Swatch Row">
      <Swatch23 />
      <Swatch24 />
      <Swatch25 />
      <Swatch26 />
      <Swatch27 />
    </div>
  );
}

function SwatchCategory2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[28px] items-start left-[64px] top-[476px] w-[1312px]" data-name="Swatch Category">
      <SwatchRow2 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[40px] relative shrink-0 text-[#707070] text-[32px] w-full">Neutral</p>
      <SwatchRow3 />
    </div>
  );
}

function Description28() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">Primary</p>
      <p className="relative shrink-0 text-[#707070] w-full">#343A6F</p>
    </div>
  );
}

function Swatch28() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#343a6f] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description28 />
    </div>
  );
}

function Description29() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">Secondary</p>
      <p className="relative shrink-0 text-[#707070] w-full">#C4C8E1</p>
    </div>
  );
}

function Swatch29() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#c4c8e1] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description29 />
    </div>
  );
}

function Swatch30() {
  return <div className="h-[48px] shrink-0 w-[192px]" data-name="Swatch" />;
}

function SwatchRow4() {
  return (
    <div className="content-center flex flex-wrap gap-[32px] items-center relative shrink-0 w-full" data-name="Swatch Row">
      <Swatch28 />
      <Swatch29 />
      <Swatch30 />
    </div>
  );
}

function SwatchCategory3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[28px] items-start left-[64px] top-[180px]" data-name="Swatch Category">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[40px] relative shrink-0 text-[#707070] text-[32px] w-full">{`Primary `}</p>
      <SwatchRow4 />
    </div>
  );
}

function Description30() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">Primary / Assigned</p>
      <p className="relative shrink-0 text-[#707070] w-full">#343A6F</p>
    </div>
  );
}

function Swatch31() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#343a6f] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description30 />
    </div>
  );
}

function Description31() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">In Progress</p>
      <p className="relative shrink-0 text-[#707070] w-full">#5779C9</p>
    </div>
  );
}

function Swatch32() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="h-[120px] rounded-[16px] w-full" data-name="Swatch" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(87, 121, 201) 0%, rgb(87, 121, 201) 100%)" }} />
        </div>
      </div>
      <Description31 />
    </div>
  );
}

function Description32() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">Completed</p>
      <p className="relative shrink-0 text-[#707070] w-full">#55822B</p>
    </div>
  );
}

function Swatch33() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#55822b] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description32 />
    </div>
  );
}

function Description33() {
  return (
    <div className="content-stretch flex flex-col font-['Rubik:Medium',sans-serif] font-medium items-start leading-[24px] relative shrink-0 text-[16px] w-full" data-name="Description">
      <p className="relative shrink-0 text-[#121212] w-full">Error/Warning</p>
      <p className="relative shrink-0 text-[#707070] w-full">#C62828</p>
    </div>
  );
}

function Swatch34() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[192px]" data-name="Swatch">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <div className="bg-[#c62828] h-[120px] rounded-[16px] w-full" data-name="Swatch" />
        </div>
      </div>
      <Description33 />
    </div>
  );
}

function SwatchRow5() {
  return (
    <div className="content-center flex flex-wrap gap-[32px] items-center relative shrink-0 w-full" data-name="Swatch Row">
      <Swatch31 />
      <Swatch32 />
      <Swatch33 />
      <Swatch34 />
    </div>
  );
}

function SwatchCategory4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[28px] items-start left-[64px] top-[1766px] w-[1312px]" data-name="Swatch Category">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[40px] relative shrink-0 text-[#707070] text-[32px] w-full">Status Indicators</p>
      <SwatchRow5 />
    </div>
  );
}

function SwatchCategory5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[64px] top-[180px] w-[1312px]" data-name="Swatch Category">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[40px] relative shrink-0 text-[#707070] text-[32px] w-full">{`Primary `}</p>
    </div>
  );
}

function NumberContainer() {
  return (
    <div className="bg-[#381fd1] content-stretch flex h-[20px] items-center justify-center min-h-[20px] min-w-[20px] overflow-clip p-[6px] relative rounded-bl-[4px] rounded-tl-[4px] shrink-0" data-name="Number Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#fcfcfc] text-[12px] text-center text-nowrap">
        <p className="leading-[normal]">#1</p>
      </div>
    </div>
  );
}

function StatusIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Status Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Status Icon">
          <path d={svgPaths.p1cca5100} id="Vector" stroke="var(--stroke-0, #381FD1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Badge() {
  return (
    <div className="[grid-area:1_/_1] bg-[#fcfcfc] h-[24px] min-h-[24px] min-w-[24px] ml-0 mt-0 relative rounded-[6px]" data-name="Badge">
      <div className="content-stretch flex gap-[4px] h-full items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip pl-[2px] pr-[4px] py-0 relative rounded-[inherit]">
        <NumberContainer />
        <StatusIcon />
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#381fd1] text-[12px] text-center text-nowrap">
          <p className="leading-[normal]">Written</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#fcfcfc] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_0px_2px_1px_rgba(0,0,0,0.06),0px_2px_8px_1px_rgba(0,0,0,0.08)]" />
    </div>
  );
}

function AltText() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Alt-Text">
      <Badge />
    </div>
  );
}

function LogoId() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[52px] top-[4px]" data-name="Logo (ID: 10015:86743)">
      <AltText />
    </div>
  );
}

function StarkAnnotationsId() {
  return (
    <div className="absolute h-[1967px] left-0 top-0 w-[1440px]" data-name="Stark Annotations (ID: 10015:86705)">
      <LogoId />
    </div>
  );
}

export default function Component01Color() {
  return (
    <div className="bg-white relative size-full" data-name="01 | Color">
      <Frame />
      <SwatchCategory />
      <SwatchCategory2 />
      <SwatchCategory3 />
      <SwatchCategory4 />
      <SwatchCategory5 />
      <StarkAnnotationsId />
    </div>
  );
}