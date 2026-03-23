import svgPaths from "./svg-3uqbt9dwns";
import imgTechnicalPrecisionAbstract from "figma:asset/f80e8635a2b3dc46e681c29fdc8d8ce271222f07.png";
import imgImage from "figma:asset/f84ad6d75c01f5865641dba32416e817dee06ff5.png";
import imgCybersecurityHardware from "figma:asset/71e5bd67bd95103e9904261d649c92eebead9597.png";
import imgServerRoom from "figma:asset/7360735637200bb2b32bb427064850cad50ac3ff.png";
import imgCodeOnScreen from "figma:asset/5c3547ffe220b4c7ff95726e5c96388cf719079a.png";

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Newsreader:Extra_Light',sans-serif] h-[120px] justify-center leading-[60px] not-italic relative shrink-0 text-[#1e1b17] text-[60px] tracking-[-1.5px] w-[665.64px]">
        <p className="mb-0">The Pillars of Engineering</p>
        <p>Rigor</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[56px] justify-center leading-[28px] relative shrink-0 text-[18px] text-[rgba(30,27,23,0.6)] w-[757.84px]">
        <p className="mb-0">We move beyond generic digital transformation. We re-engineer organizational DNA through</p>
        <p>precise structuralism.</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="max-w-[768px] relative shrink-0 w-[757.84px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start max-w-[inherit] relative w-full">
        <Heading1 />
        <Container2 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(15,118,110,0.4)] tracking-[4px] uppercase w-[238.89px]">
          <p className="leading-[15px]">{`Section 01 // Capabilities`}</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex items-end justify-between pb-[49px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#d1c9c0] border-b border-solid inset-0 pointer-events-none" />
      <Container1 />
      <Container3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-[0.01px] top-[41px]" data-name="Container">
      <div className="h-[27px] relative shrink-0 w-[16.5px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 27">
          <path d={svgPaths.pf251c40} fill="var(--fill-0, #0F766E)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-[0.01px] top-[121px]" data-name="Heading 3">
      <div className="flex flex-col font-['Newsreader:Extra_Light',sans-serif] h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1b17] text-[30px] w-[261.66px]">
        <p className="leading-[36px]">Software Consulting</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-[0.01px] top-[181px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[104px] justify-center leading-[26px] relative shrink-0 text-[16px] text-[rgba(30,27,23,0.7)] w-[315.42px]">
        <p className="mb-0">Bespoke architecture, headless CMS</p>
        <p className="mb-0">ecosystems, and deep systems integration</p>
        <p className="mb-0">designed for extreme scale and technical</p>
        <p>durability.</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <div className="bg-[#0f766e] h-px shrink-0 w-[16px]" data-name="Horizontal Divider" />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(30,27,23,0.4)] tracking-[2px] uppercase w-[161.09px]">
        <p className="leading-[15px]">Legacy Modernization</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <div className="bg-[#0f766e] h-px shrink-0 w-[16px]" data-name="Horizontal Divider" />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(30,27,23,0.4)] tracking-[2px] uppercase w-[135.19px]">
        <p className="leading-[15px]">API-First Strategy</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <div className="bg-[#0f766e] h-px shrink-0 w-[16px]" data-name="Horizontal Divider" />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(30,27,23,0.4)] tracking-[2px] uppercase w-[122.31px]">
        <p className="leading-[15px]">Enterprise JS/TS</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.5px] items-start left-0 right-[0.01px] top-[325px]" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
    </div>
  );
}

function Pillar() {
  return (
    <div className="col-1 h-[402px] justify-self-stretch relative row-1 shrink-0" data-name="Pillar 1">
      <div aria-hidden="true" className="absolute border-[#d1c9c0] border-solid border-t inset-0 pointer-events-none" />
      <Container5 />
      <Heading2 />
      <Container6 />
      <List />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[41px]" data-name="Container">
      <div className="h-[24px] relative shrink-0 w-[30px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 24">
          <path d={svgPaths.p1cd6da20} fill="var(--fill-0, #0F766E)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[121px]" data-name="Heading 3">
      <div className="flex flex-col font-['Newsreader:Extra_Light',sans-serif] h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1b17] text-[30px] w-[244.92px]">
        <p className="leading-[36px]">DevOps Excellence</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[181px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[78px] justify-center leading-[26px] relative shrink-0 text-[16px] text-[rgba(30,27,23,0.7)] w-[350.89px]">
        <p className="mb-0">Eliminating rework through radical QA alignment</p>
        <p className="mb-0">and automated governance. We build pipelines</p>
        <p>that enforce quality by default.</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <div className="bg-[#0f766e] h-px shrink-0 w-[16px]" data-name="Horizontal Divider" />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(30,27,23,0.4)] tracking-[2px] uppercase w-[118.78px]">
        <p className="leading-[15px]">CI/CD Hardening</p>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <div className="bg-[#0f766e] h-px shrink-0 w-[16px]" data-name="Horizontal Divider" />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(30,27,23,0.4)] tracking-[2px] uppercase w-[201.77px]">
        <p className="leading-[15px]">Zero-Trust Infrastructure</p>
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <div className="bg-[#0f766e] h-px shrink-0 w-[16px]" data-name="Horizontal Divider" />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(30,27,23,0.4)] tracking-[2px] uppercase w-[116.7px]">
        <p className="leading-[15px]">SRE Governance</p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.5px] items-start left-0 right-0 top-[299px]" data-name="List">
      <Item3 />
      <Item4 />
      <Item5 />
    </div>
  );
}

function Pillar1() {
  return (
    <div className="col-2 h-[402px] justify-self-stretch relative row-1 shrink-0" data-name="Pillar 2">
      <div aria-hidden="true" className="absolute border-[#d1c9c0] border-solid border-t inset-0 pointer-events-none" />
      <Container7 />
      <Heading3 />
      <Container8 />
      <List1 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-[0.01px] top-[41px]" data-name="Container">
      <div className="h-[28.5px] relative shrink-0 w-[30px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 28.5">
          <path d={svgPaths.p2e551f40} fill="var(--fill-0, #0F766E)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-[0.01px] top-[121px]" data-name="Heading 3">
      <div className="flex flex-col font-['Newsreader:Extra_Light',sans-serif] h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1b17] text-[30px] w-[235.28px]">
        <p className="leading-[36px]">Strategic Advisory</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-[0.01px] top-[181px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[78px] justify-center leading-[26px] relative shrink-0 text-[16px] text-[rgba(30,27,23,0.7)] w-[352.75px]">
        <p className="mb-0">High-level alignment between technical</p>
        <p className="mb-0">roadmaps and business outcomes. We translate</p>
        <p>engineering debt into strategic opportunity.</p>
      </div>
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <div className="bg-[#0f766e] h-px shrink-0 w-[16px]" data-name="Horizontal Divider" />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(30,27,23,0.4)] tracking-[2px] uppercase w-[120.2px]">
        <p className="leading-[15px]">CTO as a Service</p>
      </div>
    </div>
  );
}

function Item7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <div className="bg-[#0f766e] h-px shrink-0 w-[16px]" data-name="Horizontal Divider" />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(30,27,23,0.4)] tracking-[2px] uppercase w-[175.13px]">
        <p className="leading-[15px]">AI Implementation Audit</p>
      </div>
    </div>
  );
}

function Item8() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <div className="bg-[#0f766e] h-px shrink-0 w-[16px]" data-name="Horizontal Divider" />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(30,27,23,0.4)] tracking-[2px] uppercase w-[162.88px]">
        <p className="leading-[15px]">Delivery Health Check</p>
      </div>
    </div>
  );
}

function List2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.5px] items-start left-0 right-[0.01px] top-[299px]" data-name="List">
      <Item6 />
      <Item7 />
      <Item8 />
    </div>
  );
}

function Pillar2() {
  return (
    <div className="col-3 h-[402px] justify-self-stretch relative row-1 shrink-0" data-name="Pillar 3">
      <div aria-hidden="true" className="absolute border-[#d1c9c0] border-solid border-t inset-0 pointer-events-none" />
      <Container9 />
      <Heading4 />
      <Container10 />
      <List2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="gap-x-[48px] gap-y-[48px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_402px] relative shrink-0 w-full" data-name="Container">
      <Pillar />
      <Pillar1 />
      <Pillar2 />
    </div>
  );
}

function Container() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[96px] items-start max-w-[inherit] px-[48px] relative w-full">
        <HorizontalBorder />
        <Container4 />
      </div>
    </div>
  );
}

function SectionCorePillars() {
  return (
    <div className="absolute bg-[#faf4ed] content-stretch flex flex-col items-start left-0 py-[128px] right-0 top-[1198.5px]" data-name="Section - Core Pillars">
      <Container />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#ebe3da] content-stretch flex items-start px-[16px] py-[6px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f766e] text-[11px] tracking-[2.75px] uppercase w-[178.83px]">
        <p className="leading-[16.5px]">Strategic Alignment</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Newsreader:Extra_Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1b17] text-[128px] tracking-[-6.4px] w-full">
        <p className="leading-[128px] mb-0">Radical</p>
        <p className="leading-[128px] mb-0">Change for</p>
        <p className="mb-0">
          <span className="leading-[128px]">{`the `}</span>
          <span className="font-['Newsreader:Extra_Light_Italic',sans-serif] leading-[128px] not-italic text-[#0f766e]">Post-AI</span>
        </p>
        <p className="leading-[128px]">Organization.</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[672px] pt-[8px] relative shrink-0 w-[672px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[96px] justify-center leading-[32px] relative shrink-0 text-[24px] text-[rgba(30,27,23,0.7)] w-[639.17px]">
        <p className="mb-0">We empower developers and align teams—from product to</p>
        <p className="mb-0">DevOps—to eliminate costly rework using the GitHub Spec</p>
        <p>Kit methodology.</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#0f766e] content-stretch flex flex-col items-center justify-center pb-[21.5px] pt-[20.5px] px-[40px] relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white tracking-[2.4px] uppercase w-[231.97px]">
        <p className="leading-[16px]">Start the Transformation</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[41px] py-[21px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1c9c0] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#1e1b17] text-[12px] text-center tracking-[2.4px] uppercase w-[154.48px]">
        <p className="leading-[16px]">Our Methodology</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[24px] items-start pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Container12() {
  return (
    <div className="col-[1/span_8] content-stretch flex flex-col gap-[32px] items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <Background />
      <Heading />
      <Container13 />
      <Container14 />
    </div>
  );
}

function TechnicalPrecisionAbstract() {
  return (
    <div className="h-[469.33px] opacity-90 relative shrink-0 w-full" data-name="Technical precision abstract">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-full left-[-16.67%] max-w-none top-0 w-[133.33%]" src={imgTechnicalPrecisionAbstract} />
        </div>
        <div className="absolute bg-white inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-[#f5ede4] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[2px] shadow-[-40px_40px_80px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Background+Shadow">
      <TechnicalPrecisionAbstract />
    </div>
  );
}

function BackgroundVerticalBorder() {
  return (
    <div className="absolute bg-[#fff8f2] bottom-[-40px] content-stretch flex flex-col items-start left-[-40px] max-w-[320px] pl-[46px] pr-[60.03px] py-[40px]" data-name="Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#0f766e] border-l-6 border-solid inset-0 pointer-events-none" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" data-name="Overlay+Shadow" />
      <div className="flex flex-col font-['Newsreader:Extra_Light_Italic',sans-serif] h-[75px] justify-center leading-[37.5px] not-italic relative shrink-0 text-[#0f766e] text-[30px] w-[213.97px]">
        <p className="mb-0">{`"The architect must`}</p>
        <p>{`be the builder."`}</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="col-[9/span_4] content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <BackgroundShadow />
      <BackgroundVerticalBorder />
    </div>
  );
}

function Container11() {
  return (
    <div className="gap-x-[64px] gap-y-[64px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_814.50px] max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container15 />
    </div>
  );
}

function HeaderHeroSection() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip pb-[160px] pt-[224px] px-[48px] right-0 top-0" data-name="Header - Hero Section">
      <div className="absolute inset-0 opacity-20" data-name="Gradient" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1280 1198.5\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(90.51 0 0 84.747 640 599.25)\\'><stop stop-color=\\'rgba(209,201,192,1)\\' offset=\\'0.011785\\'/><stop stop-color=\\'rgba(209,201,192,0)\\' offset=\\'0.011785\\'/></radialGradient></defs></svg>')" }} />
      <Container11 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#ccfbf1] text-[10px] tracking-[3px] uppercase w-[215.44px]">
        <p className="leading-[15px]">Proprietary Methodology</p>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[47px]" data-name="Heading 2">
      <div className="flex flex-col font-['Newsreader:Extra_Light',sans-serif] h-[144px] justify-center leading-[72px] not-italic relative shrink-0 text-[72px] text-white tracking-[-1.8px] w-[537.11px]">
        <p className="mb-0">Introducing Spec</p>
        <p>Kit.</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 opacity-80 pb-[0.75px] right-0 top-[222.25px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[130px] justify-center leading-[32.5px] relative shrink-0 text-[#ccfbf1] text-[20px] w-[544.28px]">
        <p className="mb-0">Software delivery fails when specs are detached from code.</p>
        <p className="mb-0">Our Spec Kit methodology turns documentation into</p>
        <p className="mb-0">executable requirements, ensuring that every line of code</p>
        <p>serves a business intent.</p>
      </div>
    </div>
  );
}

function ParagraphVerticalBorder() {
  return (
    <div className="content-stretch flex flex-col gap-[7.5px] items-start pl-[25px] relative shrink-0" data-name="Paragraph+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Newsreader:Extra_Light',sans-serif] h-[48px] justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-white w-[95.84px]">
        <p className="leading-[48px]">94%</p>
      </div>
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] relative shrink-0 text-[9px] text-[rgba(255,255,255,0.5)] tracking-[1.8px] uppercase w-[121.84px]">
        <p className="leading-[13.5px]">Rework Reduction</p>
      </div>
    </div>
  );
}

function ParagraphVerticalBorder1() {
  return (
    <div className="content-stretch flex flex-col gap-[7.5px] items-start pl-[25px] relative shrink-0" data-name="Paragraph+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Newsreader:Extra_Light',sans-serif] h-[48px] justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-white w-[94.47px]">
        <p className="leading-[48px]">3.2x</p>
      </div>
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] relative shrink-0 text-[9px] text-[rgba(255,255,255,0.5)] tracking-[1.8px] uppercase w-[120.14px]">
        <p className="leading-[13.5px]">Velocity Increase</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex gap-[48px] items-center left-0 right-0 top-[401px]" data-name="Container">
      <ParagraphVerticalBorder />
      <ParagraphVerticalBorder1 />
    </div>
  );
}

function Container17() {
  return (
    <div className="col-[1/span_6] h-[470.5px] justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <Container18 />
      <Heading5 />
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[41px] right-[41px] top-[41px]" data-name="Container">
      <div className="h-[22.5px] relative shrink-0 w-[25px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 22.5">
          <path d={svgPaths.p3cba1c80} fill="var(--fill-0, white)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[41px] right-[41px] top-[109px]" data-name="Heading 4">
      <div className="flex flex-col font-['Newsreader:Extra_Light',sans-serif] h-[64px] justify-center leading-[32px] not-italic relative shrink-0 text-[24px] text-white w-[148.42px]">
        <p className="mb-0">Automated QA</p>
        <p>Mapping</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[41px] pb-[0.875px] right-[41px] top-[188.13px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[91px] justify-center leading-[22.75px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] w-[160.14px]">
        <p className="mb-0">Every spec automatically</p>
        <p className="mb-0">generates test suites,</p>
        <p className="mb-0">closing the gap between</p>
        <p>intent and reality.</p>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(255,255,255,0.05)] col-1 h-[321px] justify-self-stretch relative row-1 shrink-0" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <Container22 />
      <Heading6 />
      <Container23 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[41px] right-[41px] top-[41px]" data-name="Container">
      <div className="h-[28.125px] relative shrink-0 w-[25px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 28.125">
          <path d={svgPaths.p609b510} fill="var(--fill-0, white)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[41px] right-[41px] top-[109px]" data-name="Heading 4">
      <div className="flex flex-col font-['Newsreader:Extra_Light',sans-serif] h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white w-[162.52px]">
        <p className="leading-[32px]">Branch Integrity</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[41px] pb-[0.875px] right-[41px] top-[156.13px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[91px] justify-center leading-[22.75px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] w-[169.81px]">
        <p className="mb-0">Structural guardrails that</p>
        <p className="mb-0">prevent configuration drift</p>
        <p className="mb-0">across multi-repo</p>
        <p>environments.</p>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur1() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(255,255,255,0.05)] col-2 h-[321px] justify-self-stretch relative row-1 shrink-0" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <Container24 />
      <Heading7 />
      <Container25 />
    </div>
  );
}

function CybersecurityHardware() {
  return (
    <div className="max-w-[560px] opacity-50 relative shrink-0 size-[128px]" data-name="Cybersecurity hardware">
      <div aria-hidden="true" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none">
        <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgCybersecurityHardware} />
        </div>
        <div className="absolute bg-clip-padding bg-white border-0 border-[transparent] border-solid inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Newsreader:Extra_Light',sans-serif] h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white w-[283.91px]">
        <p className="leading-[32px]">Seamless GitHub Integration</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[9.2px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[69px] justify-center leading-[22.75px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] w-[302.83px]">
        <p className="mb-0">Native integration into your existing CI/CD flow.</p>
        <p className="mb-0">No new tools to learn—just better results from</p>
        <p>tools you already have.</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 size-[9.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
        <g id="Container">
          <path d={svgPaths.pce77c00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex gap-[12px] items-center pb-[5px] relative shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[10px] text-white tracking-[2px] uppercase w-[160.41px]">
        <p className="leading-[15px]">Download Whitepaper</p>
      </div>
      <Container28 />
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[14.8px] items-start relative">
        <Heading8 />
        <Container27 />
        <Link />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="col-[1/span_2] h-[247.25px] justify-self-stretch relative row-2 shrink-0" data-name="Background+Border" style={{ backgroundImage: "linear-gradient(156.178deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[40px] items-center p-[41px] relative size-full">
          <CybersecurityHardware />
          <Container26 />
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="col-[7/span_6] gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__321px_247.25px] justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <OverlayBorderOverlayBlur />
      <OverlayBorderOverlayBlur1 />
      <BackgroundBorder />
    </div>
  );
}

function Container16() {
  return (
    <div className="gap-x-[64px] gap-y-[64px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_592.25px] relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <Container21 />
    </div>
  );
}

function TheGitHubSpecKitBrandSection() {
  return (
    <div className="absolute bg-[#0f766e] content-stretch flex flex-col items-start left-0 overflow-clip px-[48px] py-[128px] right-0 top-[2201.5px]" data-name="The GitHub Spec Kit: Brand Section">
      <div className="absolute bg-size-[24px_22px] bg-top-left inset-0 opacity-10" data-name="Image" style={{ backgroundImage: `url('${imgImage}')` }} />
      <Container16 />
    </div>
  );
}

function ParagraphHorizontalBorder() {
  return (
    <div className="content-stretch flex items-baseline justify-between pb-[33px] relative shrink-0 w-full" data-name="Paragraph+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(209,201,192,0.5)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Newsreader:Extra_Light',sans-serif] h-[48px] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1b17] text-[48px] tracking-[-1.2px] w-[358.94px]">
        <p className="leading-[48px]">Technical Insights</p>
      </div>
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#0f766e] text-[10px] tracking-[3px] uppercase w-[145.77px]">
        <p className="leading-[15px]">{`All Articles // 08`}</p>
      </div>
    </div>
  );
}

function ServerRoom() {
  return (
    <div className="h-[310.5px] relative shrink-0 w-full" data-name="Server room">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[177.78%] left-0 max-w-none top-[-38.89%] w-full" src={imgServerRoom} />
        </div>
        <div className="absolute bg-white inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute bg-[#0f766e] content-stretch flex flex-col items-start left-[24px] px-[12px] py-[6px] top-[24px]" data-name="Background">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] relative shrink-0 text-[9px] text-white tracking-[0.9px] uppercase w-[70.22px]">
        <p className="leading-[13.5px]">Engineering</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute aspect-video bg-[#f5ede4] content-stretch flex flex-col items-start justify-center left-0 overflow-clip right-0 top-0" data-name="Background">
      <ServerRoom />
      <Background2 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[350.5px]" data-name="Heading 3">
      <div className="flex flex-col font-['Newsreader:Extra_Light',sans-serif] h-[90px] justify-center leading-[45px] not-italic relative shrink-0 text-[#1e1b17] text-[36px] w-[502.41px]">
        <p className="mb-0">High-Quality Software Delivery:</p>
        <p>Beyond the Sprint.</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[463.75px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[88px] justify-center leading-[29.25px] relative shrink-0 text-[18px] text-[rgba(30,27,23,0.6)] w-[526.58px]">
        <p className="mb-0">Why traditional agile metrics are failing your engineering culture</p>
        <p className="mb-0">and how to shift towards structural quality metrics that drive</p>
        <p>revenue.</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#857f79] text-[10px] tracking-[2px] uppercase w-[121.73px]">
        <p className="leading-[15px]">Read Time: 12 Min</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#857f79] text-[10px] tracking-[2px] uppercase w-[62.75px]">
        <p className="leading-[15px]">May 2024</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex gap-[24px] items-center left-0 right-0 top-[584.25px]" data-name="Container">
      <Container33 />
      <div className="bg-[#d1c9c0] rounded-[9999px] shrink-0 size-[4px]" data-name="Background" />
      <Container34 />
    </div>
  );
}

function Article() {
  return (
    <div className="col-1 h-[599.25px] justify-self-stretch relative row-1 shrink-0" data-name="Article">
      <Background1 />
      <Heading9 />
      <Container31 />
      <Container32 />
    </div>
  );
}

function CodeOnScreen() {
  return (
    <div className="h-[310.5px] relative shrink-0 w-full" data-name="Code on screen">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[177.78%] left-0 max-w-none top-[-38.89%] w-full" src={imgCodeOnScreen} />
        </div>
        <div className="absolute bg-white inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="absolute bg-[#0f766e] content-stretch flex flex-col items-start left-[24px] px-[12px] py-[6px] top-[24px]" data-name="Background">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] relative shrink-0 text-[9px] text-white tracking-[0.9px] uppercase w-[41.52px]">
        <p className="leading-[13.5px]">DevOps</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute aspect-video bg-[#f5ede4] content-stretch flex flex-col items-start justify-center left-0 overflow-clip right-0 top-0" data-name="Background">
      <CodeOnScreen />
      <Background4 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[350.5px]" data-name="Heading 3">
      <div className="flex flex-col font-['Newsreader:Extra_Light',sans-serif] h-[90px] justify-center leading-[45px] not-italic relative shrink-0 text-[#1e1b17] text-[36px] w-[550.45px]">
        <p className="mb-0">DevOps for Modern Teams: Radical</p>
        <p>Automation.</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[463.75px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[88px] justify-center leading-[29.25px] relative shrink-0 text-[18px] text-[rgba(30,27,23,0.6)] w-[524.17px]">
        <p className="mb-0">Implementing zero-touch deployments in complex legacy</p>
        <p className="mb-0">environments. A guide to navigating the friction between speed</p>
        <p>and safety.</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#857f79] text-[10px] tracking-[2px] uppercase w-[124.19px]">
        <p className="leading-[15px]">Read Time: 09 Min</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#857f79] text-[10px] tracking-[2px] uppercase w-[69.63px]">
        <p className="leading-[15px]">June 2024</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex gap-[24px] items-center left-0 right-0 top-[584.25px]" data-name="Container">
      <Container37 />
      <div className="bg-[#d1c9c0] rounded-[9999px] shrink-0 size-[4px]" data-name="Background" />
      <Container38 />
    </div>
  );
}

function Article1() {
  return (
    <div className="col-2 h-[599.25px] justify-self-stretch relative row-1 shrink-0" data-name="Article">
      <Background3 />
      <Heading10 />
      <Container35 />
      <Container36 />
    </div>
  );
}

function Container30() {
  return (
    <div className="gap-x-[80px] gap-y-[80px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_599.25px] relative shrink-0 w-full" data-name="Container">
      <Article />
      <Article1 />
    </div>
  );
}

function Container29() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[80px] items-start max-w-[inherit] px-[48px] relative w-full">
        <ParagraphHorizontalBorder />
        <Container30 />
      </div>
    </div>
  );
}

function InsightsSection() {
  return (
    <div className="absolute bg-[#fff8f2] content-stretch flex flex-col items-start left-0 py-[128px] right-0 top-[3049.75px]" data-name="Insights Section">
      <Container29 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Newsreader:Extra_Light',sans-serif] justify-center leading-[72px] not-italic relative shrink-0 text-[#1e1b17] text-[72px] tracking-[-3.6px] w-full">
        <p className="mb-0">Ready for Radical</p>
        <p>Change?</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[32.5px] relative shrink-0 text-[20px] text-[rgba(30,27,23,0.6)] w-full">
        <p className="mb-0">Contact us to schedule a Strategic Alignment workshop.</p>
        <p className="mb-0">No sales pitches—just technical experts auditing your</p>
        <p>delivery pipeline.</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[25px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 25">
        <g id="Container">
          <path d={svgPaths.p682b940} fill="var(--fill-0, #0F766E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#fff8f2] content-stretch flex items-center justify-center p-px relative shrink-0 size-[64px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#d1c9c0] border-solid inset-0 pointer-events-none" />
      <Container44 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#0f766e] text-[10px] tracking-[3px] uppercase w-[87.48px]">
        <p className="leading-[15px]">Office Hub</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Newsreader:Extra_Light',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1b17] text-[18px] w-[271.42px]">
        <p className="leading-[28px]">42 Engineering Plaza, London EC2A</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative self-stretch shrink-0 w-[271.42px]" data-name="Container">
      <Heading12 />
      <Container46 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder1 />
      <Container45 />
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[20px] relative shrink-0 w-[25px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 20">
        <g id="Container">
          <path d={svgPaths.p2b19980} fill="var(--fill-0, #0F766E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#fff8f2] content-stretch flex items-center justify-center p-px relative shrink-0 size-[64px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#d1c9c0] border-solid inset-0 pointer-events-none" />
      <Container48 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#0f766e] text-[10px] tracking-[3px] uppercase w-[92.23px]">
        <p className="leading-[15px]">Direct Line</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Newsreader:Extra_Light',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1b17] text-[18px] w-[174.53px]">
        <p className="leading-[28px]">hello@ahasw.consulting</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative self-stretch shrink-0 w-[174.53px]" data-name="Container">
      <Heading13 />
      <Container50 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder2 />
      <Container49 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start pt-[25px] relative shrink-0 w-full" data-name="Container">
      <Container43 />
      <Container47 />
    </div>
  );
}

function Container40() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[39px] items-start justify-self-stretch pb-[52px] relative row-1 self-start shrink-0" data-name="Container">
      <Heading11 />
      <Container41 />
      <Container42 />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(15,118,110,0.6)] tracking-[2px] uppercase w-full">
        <p className="leading-[15px]">Full Name</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <div className="flex flex-col font-['Newsreader:Extra_Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[18px] w-full">
          <p className="leading-[normal]">John Doe</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="relative shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[15px] pt-[13px] px-[12px] relative w-full">
          <Container53 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#d1c9c0] border-b-2 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container52() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[12px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Label />
      <Input />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(15,118,110,0.6)] tracking-[2px] uppercase w-full">
        <p className="leading-[15px]">Company</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <div className="flex flex-col font-['Newsreader:Extra_Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[18px] w-full">
          <p className="leading-[normal]">Acme Engineering</p>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[15px] pt-[13px] px-[12px] relative w-full">
          <Container55 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#d1c9c0] border-b-2 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container54() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[12px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Label1 />
      <Input1 />
    </div>
  );
}

function Container51() {
  return (
    <div className="gap-x-[40px] gap-y-[40px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_73px] relative shrink-0 w-full" data-name="Container">
      <Container52 />
      <Container54 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(15,118,110,0.6)] tracking-[2px] uppercase w-full">
        <p className="leading-[15px]">Primary Challenge</p>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[27px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        <g id="SVG">
          <path d={svgPaths.p2fccf000} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.025" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill() {
  return (
    <div className="absolute content-stretch flex flex-col h-[46px] items-start justify-center left-0 overflow-clip pb-[10.5px] pl-[411px] pr-[8px] pt-[8.5px] top-0 w-[446px]" data-name="image fill">
      <Svg />
    </div>
  );
}

function Container57() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[12px] overflow-clip right-[40px] top-[calc(50%-1px)]" data-name="Container">
      <div className="flex flex-col font-['Newsreader:Extra_Light',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1b17] text-[18px] w-[146.5px]">
        <p className="leading-[28px]">Eliminating Rework</p>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="h-[46px] relative shrink-0 w-full" data-name="Options">
      <div aria-hidden="true" className="absolute border-[#d1c9c0] border-b-2 border-solid inset-0 pointer-events-none" />
      <ImageFill />
      <Container57 />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Label2 />
      <Options />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(15,118,110,0.6)] tracking-[2px] uppercase w-full">
        <p className="leading-[15px]">Brief Context</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Newsreader:Extra_Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[18px] w-full">
          <p className="leading-[28px]">Tell us about your current stack...</p>
        </div>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="relative shrink-0 w-full" data-name="Textarea">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[66px] pt-[8px] px-[12px] relative w-full">
          <Container59 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#d1c9c0] border-b-2 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Label3 />
      <Textarea />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#0f766e] content-stretch flex items-center justify-center py-[24px] relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] relative shrink-0 text-[11px] text-center text-white tracking-[3.3px] uppercase w-[200.5px]">
        <p className="leading-[16.5px]">Initiate Consultation</p>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="relative shrink-0 w-full" data-name="Form">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[40px] items-start relative w-full">
        <Container51 />
        <Container56 />
        <Container58 />
        <Button2 />
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-[#fff8f2] col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(209,201,192,0.5)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[65px] pt-[49px] px-[49px] relative w-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_0.5px_0] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
        <Form />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[96px] gap-y-[96px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_573.50px] max-w-[inherit] px-[48px] relative w-full">
        <Container40 />
        <BackgroundBorder3 />
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="absolute bg-[#f5ede4] content-stretch flex flex-col items-start left-0 py-[129px] right-0 top-[4066px]" data-name="Contact Section">
      <div aria-hidden="true" className="absolute border-[rgba(209,201,192,0.3)] border-b border-solid border-t inset-0 pointer-events-none" />
      <Container39 />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Newsreader:Extra_Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1b17] text-[30px] w-full">
        <p className="leading-[36px]">AHA Software</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[320px] pb-[0.875px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[22.75px] relative shrink-0 text-[14px] text-[rgba(30,27,23,0.6)] tracking-[0.35px] w-full">
        <p className="mb-0">Architectural alignment for the</p>
        <p className="mb-0">modern enterprise. We build the</p>
        <p className="mb-0">systems that build the future with</p>
        <p>precision structuralism.</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[31.125px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Container62 />
      <Container63 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#005c55] text-[14px] tracking-[0.35px] uppercase w-full">
        <p className="leading-[20px]">Capabilities</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1e1b17] text-[14px] tracking-[0.35px] uppercase w-full">
        <p className="leading-[20px]">Software Consulting</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1e1b17] text-[14px] tracking-[0.35px] uppercase w-full">
        <p className="leading-[20px]">DevOps Architecture</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1e1b17] text-[14px] tracking-[0.35px] uppercase w-full">
        <p className="leading-[20px]">Strategic Advisory</p>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Nav">
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function Container64() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch pb-[23px] relative row-1 self-start shrink-0" data-name="Container">
      <Heading14 />
      <Nav />
    </div>
  );
}

function Heading15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#005c55] text-[14px] tracking-[0.35px] uppercase w-full">
        <p className="leading-[20px]">Navigation</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1e1b17] text-[14px] tracking-[0.35px] uppercase w-full">
        <p className="leading-[20px]">Editorial</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1e1b17] text-[14px] tracking-[0.35px] uppercase w-full">
        <p className="leading-[20px]">Insights</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1e1b17] text-[14px] tracking-[0.35px] uppercase w-full">
        <p className="leading-[20px]">Sitemap</p>
      </div>
    </div>
  );
}

function Nav1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Nav">
      <Link4 />
      <Link5 />
      <Link6 />
    </div>
  );
}

function Container65() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch pb-[23px] relative row-1 self-start shrink-0" data-name="Container">
      <Heading15 />
      <Nav1 />
    </div>
  );
}

function Heading16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#005c55] text-[14px] tracking-[0.35px] uppercase w-full">
        <p className="leading-[20px]">Connect</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1e1b17] text-[14px] tracking-[0.35px] uppercase w-full">
        <p className="leading-[20px]">Newsletter</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1e1b17] text-[14px] tracking-[0.35px] uppercase w-full">
        <p className="leading-[20px]">Privacy Policy</p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#005c55] text-[14px] tracking-[0.35px] uppercase w-full">
        <p className="leading-[20px]">Security Architecture</p>
      </div>
    </div>
  );
}

function Nav2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Nav">
      <Link7 />
      <Link8 />
      <Link9 />
    </div>
  );
}

function Container66() {
  return (
    <div className="col-4 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch pb-[23px] relative row-1 self-start shrink-0" data-name="Container">
      <Heading16 />
      <Nav2 />
    </div>
  );
}

function Container60() {
  return (
    <div className="max-w-[1440px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[48px] gap-y-[48px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[_159px] max-w-[inherit] px-[48px] py-[80px] relative w-full">
        <Container61 />
        <Container64 />
        <Container65 />
        <Container66 />
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(30,27,23,0.4)] tracking-[2px] uppercase w-full">
          <p className="leading-[15px]">© 2024 AHA Editorial Software. Designed for the Digital Curator. Precision Structuralism in Digital Engineering.</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(209,201,192,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[64px] pt-[41px] px-[48px] relative w-full">
        <Container67 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#f5ede4] content-stretch flex flex-col items-start left-0 pt-px right-0 top-[4897.5px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[rgba(209,201,192,0.3)] border-solid border-t inset-0 pointer-events-none" />
      <Container60 />
      <HorizontalBorder1 />
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Newsreader:Extra_Light',sans-serif] h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1b17] text-[24px] tracking-[-1.2px] w-[142.72px]">
        <p className="leading-[32px]">AHA Software</p>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[6px] relative shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#005c55] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Newsreader:Extra_Light_Italic',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#005c55] text-[18px] tracking-[-0.45px] w-[50.73px]">
        <p className="leading-[28px]">Services</p>
      </div>
    </div>
  );
}

function LinkMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] pl-[40px] relative shrink-0" data-name="Link:margin">
      <div className="flex flex-col font-['Newsreader:Extra_Light_Italic',sans-serif] h-[28px] justify-center leading-[0] not-italic opacity-80 relative shrink-0 text-[#1e1b17] text-[18px] tracking-[-0.45px] w-[48.31px]">
        <p className="leading-[28px]">Insights</p>
      </div>
    </div>
  );
}

function LinkMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] pl-[40px] relative shrink-0" data-name="Link:margin">
      <div className="flex flex-col font-['Newsreader:Extra_Light_Italic',sans-serif] h-[28px] justify-center leading-[0] not-italic opacity-80 relative shrink-0 text-[#1e1b17] text-[18px] tracking-[-0.45px] w-[43.13px]">
        <p className="leading-[28px]">Events</p>
      </div>
    </div>
  );
}

function LinkMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] pl-[40px] relative shrink-0" data-name="Link:margin">
      <div className="flex flex-col font-['Newsreader:Extra_Light_Italic',sans-serif] h-[28px] justify-center leading-[0] not-italic opacity-80 relative shrink-0 text-[#1e1b17] text-[18px] tracking-[-0.45px] w-[50.98px]">
        <p className="leading-[28px]">Contact</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Link10 />
      <LinkMargin />
      <LinkMargin1 />
      <LinkMargin2 />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#0f766e] content-stretch flex flex-col items-center justify-center px-[32px] py-[10px] relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[0.35px] w-[103.86px]">
        <p className="leading-[20px]">Work Together</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="max-w-[1440px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] pl-[48px] pr-[48.01px] py-[24px] relative w-full">
          <Container69 />
          <Container70 />
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function TopNavigationBar() {
  return (
    <div className="absolute backdrop-blur-[8px] bg-[rgba(255,248,242,0.8)] content-stretch flex flex-col items-start left-0 pb-px top-0 w-[1280px]" data-name="Top Navigation Bar">
      <div aria-hidden="true" className="absolute border-[rgba(209,201,192,0.1)] border-b border-solid inset-0 pointer-events-none shadow-[0px_20px_40px_0px_rgba(30,27,23,0.05)]" />
      <Container68 />
    </div>
  );
}

export default function ConsultingHomepageRefinedStyle() {
  return (
    <div className="bg-[#fff8f2] relative size-full" data-name="Consulting Homepage - Refined Style">
      <SectionCorePillars />
      <HeaderHeroSection />
      <TheGitHubSpecKitBrandSection />
      <InsightsSection />
      <ContactSection />
      <Footer />
      <TopNavigationBar />
    </div>
  );
}