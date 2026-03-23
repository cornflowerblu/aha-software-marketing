import svgPaths from "./svg-g4m6nvvd5w";
import imgStrategicVisual from "figma:asset/f80e8635a2b3dc46e681c29fdc8d8ce271222f07.png";
import imgImplementingGitHubSpecKit from "figma:asset/e75a62d4330ddbcbde10910639911f3f7734b696.png";
import imgRadicalChangeAtScale from "figma:asset/cf77bcbd8892f136b0725ba770fbcdd4cd7034ec.png";
import imgEliminatingRework from "figma:asset/5c3547ffe220b4c7ff95726e5c96388cf719079a.png";
import imgExpert from "figma:asset/b32fec4db286efde0a2a62ae715519fe5a68da44.png";
import imgExpert1 from "figma:asset/7079a412ebd8e2859ad0963d32cd6f795f522551.png";
import imgExpert2 from "figma:asset/36374c154f923921301011da447b0f390623ae89.png";
import imgRecordingPreview from "figma:asset/223aa092cbaf374775f88ecfa7cc564b35f3c5ea.png";

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Thin',sans-serif] font-thin justify-center leading-[0] relative shrink-0 text-[#7f4025] text-[12px] tracking-[2.4px] uppercase w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[16px]">Strategic Alignment Hub</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Fraunces:Thin_Italic',sans-serif] font-thin italic justify-center leading-[0] relative shrink-0 text-[#1e1b17] text-[96px] tracking-[-4.8px] w-full" style={{ fontVariationSettings: "'SOFT' 100, 'WONK' 1" }}>
        <p className="mb-0">
          <span className="leading-[96px]">{`Master the Art `}</span>
          <span className="font-['Fraunces:Thin_Italic',sans-serif] font-thin italic leading-[96px] text-[#0f766e]" style={{ fontVariationSettings: "'SOFT' 100, 'WONK' 1" }}>
            of
          </span>
        </p>
        <p className="leading-[96px] mb-0">Radical</p>
        <p className="leading-[96px] mb-0">Organizational</p>
        <p className="leading-[96px]">Change.</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[576px] opacity-90 pt-[16px] relative shrink-0 w-[576px]" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Thin',sans-serif] font-thin h-[98px] justify-center leading-[32.5px] relative shrink-0 text-[#3e4947] text-[20px] w-[565.97px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="mb-0">Gain exclusive access to a library of instructional videos,</p>
        <p className="mb-0">event recordings, speaking engagements, and premium posts</p>
        <p>that deep-dive into the GitHub Spec Kit methodology.</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[40px] py-[20px] relative rounded-[6px] shrink-0" data-name="Button" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 92, 85) 0%, rgb(15, 118, 110) 100%)" }}>
      <div className="flex flex-col font-['DM_Sans:Thin',sans-serif] font-thin h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white w-[175.38px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">View Full Access Plans</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#eee7e0] content-stretch flex flex-col items-center justify-center px-[40px] py-[20px] relative rounded-[6px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['DM_Sans:Thin',sans-serif] font-thin h-[24px] justify-center leading-[0] relative shrink-0 text-[#1e1b17] text-[16px] text-center w-[135.86px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Our Methodology</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[16px] items-start pt-[24px] relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="col-[1/span_7] content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <Container2 />
      <Heading />
      <Container3 />
      <Container4 />
    </div>
  );
}

function StrategicVisual() {
  return (
    <div className="h-[581.67px] mix-blend-multiply opacity-80 relative shrink-0 w-full" data-name="Strategic Visual">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-full left-[-12.5%] max-w-none top-0 w-[125%]" src={imgStrategicVisual} />
        </div>
        <div className="absolute bg-white inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-[#faf2eb] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[4px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="Background+Shadow">
      <StrategicVisual />
      <div className="absolute inset-[0_-0.01px_0_0]" data-name="Gradient" style={{ backgroundImage: "linear-gradient(51.34deg, rgba(0, 92, 85, 0.2) 0%, rgba(0, 92, 85, 0) 100%)" }} />
    </div>
  );
}

function BackgroundVerticalBorder() {
  return (
    <div className="absolute bg-[#fff8f2] bottom-[-24px] content-stretch flex flex-col gap-[16.5px] items-start left-[-24px] max-w-[320px] pl-[36px] pr-[50.72px] py-[32px]" data-name="Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#005c55] border-l-4 border-solid inset-0 pointer-events-none" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_-0.5px_0] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" data-name="Overlay+Shadow" />
      <div className="flex flex-col font-['Fraunces:Thin_Italic',sans-serif] font-thin h-[60px] italic justify-center leading-[30px] relative shrink-0 text-[#005c55] text-[24px] w-[233.28px]" style={{ fontVariationSettings: "'SOFT' 100, 'WONK' 1" }}>
        <p className="mb-0">{`"The architect must be`}</p>
        <p>{`the builder."`}</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Thin',sans-serif] font-thin h-[16px] justify-center leading-[0] opacity-60 relative shrink-0 text-[#1e1b17] text-[12px] tracking-[1.2px] uppercase w-[195.42px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[16px]">— Principal, AHA Software</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="col-[8/span_5] content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <BackgroundShadow />
      <BackgroundVerticalBorder />
    </div>
  );
}

function Container() {
  return (
    <div className="gap-x-[48px] gap-y-[48px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_673.50px] relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container5 />
    </div>
  );
}

function HeroValuePropSection() {
  return (
    <div className="max-w-[1440px] relative shrink-0 w-full" data-name="Hero / Value Prop Section">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] px-[48px] relative w-full">
        <div className="absolute inset-0 opacity-10" data-name="Gradient" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1280 673.5\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(90.51 0 0 47.624 640 336.75)\\'><stop stop-color=\\'rgba(189,201,198,1)\\' offset=\\'0.017678\\'/><stop stop-color=\\'rgba(189,201,198,0)\\' offset=\\'0.017678\\'/></radialGradient></defs></svg>')" }} />
        <Container />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Fraunces:Thin',sans-serif] font-thin h-[48px] justify-center leading-[0] relative shrink-0 text-[#1e1b17] text-[48px] tracking-[-1.2px] w-[459.5px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        <p className="leading-[48px]">The Knowledge Base</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Thin',sans-serif] font-thin h-[56px] justify-center leading-[28px] relative shrink-0 text-[#3e4947] text-[18px] w-[629.52px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="mb-0">A glimpse into the deep-dive instructional content and strategic recordings</p>
        <p>shared exclusively with our community.</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[672px] relative shrink-0 w-[629.52px]" data-name="Container">
      <Heading1 />
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p1a406200} fill="var(--fill-0, #005C55)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[15.99px] items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Thin',sans-serif] font-thin h-[20px] justify-center leading-[0] relative shrink-0 text-[#005c55] text-[14px] tracking-[1.4px] uppercase w-[184.33px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20px]">{`Section 02 // Library`}</p>
      </div>
      <Container11 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Container10 />
    </div>
  );
}

function ImplementingGitHubSpecKit() {
  return (
    <div className="blur-[2px] opacity-60 relative size-full" data-name="Implementing GitHub Spec Kit">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[195.57%] left-[-5%] max-w-none top-[-47.78%] w-[110%]" src={imgImplementingGitHubSpecKit} />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Container">
          <path d={svgPaths.p1cfdbb00} fill="var(--fill-0, #005C55)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex inset-[0_0_0.02px_0] items-center justify-center" data-name="Container">
      <Container14 />
    </div>
  );
}

function Background() {
  return (
    <div className="aspect-video bg-[#eee7e0] overflow-clip relative shrink-0 w-full z-[2]" data-name="Background">
      <div className="absolute flex inset-[-10.5px_-18.66px_-10.48px_-18.67px] items-center justify-center">
        <div className="flex-none h-[230.98px] w-[410.66px]">
          <ImplementingGitHubSpecKit />
        </div>
      </div>
      <Container13 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Thin',sans-serif] font-thin justify-center leading-[0] relative shrink-0 text-[#7f4025] text-[12px] tracking-[1.2px] uppercase w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[16px]">Video Tutorial</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Fraunces:Thin',sans-serif] font-thin justify-center leading-[32px] relative shrink-0 text-[#1e1b17] text-[24px] w-full" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        <p className="mb-0">Implementing the</p>
        <p className="mb-0">GitHub Spec Kit for</p>
        <p>Product Teams</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pt-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Thin',sans-serif] font-thin justify-center leading-[24px] relative shrink-0 text-[#3e4947] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="mb-0">A step-by-step guide to bridging the</p>
        <p>gap between product requirements…</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Thin',sans-serif] font-thin h-[16px] justify-center leading-[0] relative shrink-0 text-[#005c55] text-[12px] tracking-[1.2px] uppercase w-[110.89px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[16px]">Watch Module</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 size-[9.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
        <g id="Container">
          <path d={svgPaths.pce77c00} fill="var(--fill-0, #005C55)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pt-[12px] relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[40px] relative w-full">
        <Container16 />
        <Heading2 />
        <Container17 />
        <Container18 />
      </div>
    </div>
  );
}

function VideoTutorial() {
  return (
    <div className="bg-white col-1 content-stretch flex flex-col isolate items-start justify-self-stretch overflow-clip relative rounded-[8px] row-1 self-start shrink-0" data-name="Video Tutorial">
      <Background />
      <Container15 />
    </div>
  );
}

function RadicalChangeAtScale() {
  return (
    <div className="blur-[2px] opacity-60 relative size-full" data-name="Radical Change at Scale">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[195.57%] left-[-5%] max-w-none top-[-47.78%] w-[110%]" src={imgRadicalChangeAtScale} />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Container">
          <path d={svgPaths.p102afcc0} fill="var(--fill-0, #005C55)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex inset-[0_0_0.02px_0] items-center justify-center" data-name="Container">
      <Container22 />
    </div>
  );
}

function Background1() {
  return (
    <div className="aspect-video bg-[#eee7e0] overflow-clip relative shrink-0 w-full z-[2]" data-name="Background">
      <div className="absolute flex inset-[-10.5px_-18.66px_-10.48px_-18.67px] items-center justify-center">
        <div className="flex-none h-[230.98px] w-[410.66px]">
          <RadicalChangeAtScale />
        </div>
      </div>
      <Container21 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Thin',sans-serif] font-thin justify-center leading-[0] relative shrink-0 text-[#7f4025] text-[12px] tracking-[1.2px] uppercase w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[16px]">Event Recording</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Fraunces:Thin',sans-serif] font-thin justify-center leading-[32px] relative shrink-0 text-[#1e1b17] text-[24px] w-full" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        <p className="mb-0">Radical Change at Scale</p>
        <p>- DevConf 2024</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pt-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Thin',sans-serif] font-thin justify-center leading-[24px] relative shrink-0 text-[#3e4947] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="mb-0">Keynote presentation on transforming</p>
        <p>enterprise engineering culture throug…</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Thin',sans-serif] font-thin h-[16px] justify-center leading-[0] relative shrink-0 text-[#005c55] text-[12px] tracking-[1.2px] uppercase w-[96.02px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[16px]">Full Session</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 size-[9.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
        <g id="Container">
          <path d={svgPaths.pce77c00} fill="var(--fill-0, #005C55)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[7.99px] items-center pt-[12px] relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[40px] relative w-full">
        <Container24 />
        <Heading3 />
        <Container25 />
        <Container26 />
      </div>
    </div>
  );
}

function SpeakingEngagement() {
  return (
    <div className="bg-white col-2 content-stretch flex flex-col isolate items-start justify-self-stretch overflow-clip pb-[32px] relative rounded-[8px] row-1 self-start shrink-0" data-name="Speaking Engagement">
      <Background1 />
      <Container23 />
    </div>
  );
}

function EliminatingRework() {
  return (
    <div className="blur-[2px] opacity-60 relative size-full" data-name="Eliminating Rework">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[195.56%] left-[-5%] max-w-none top-[-47.78%] w-[110%]" src={imgEliminatingRework} />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Container">
          <path d={svgPaths.p384d6400} fill="var(--fill-0, #005C55)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex inset-[0_-0.01px_0_0] items-center justify-center" data-name="Container">
      <Container30 />
    </div>
  );
}

function Background2() {
  return (
    <div className="aspect-video bg-[#eee7e0] overflow-clip relative shrink-0 w-full z-[2]" data-name="Background">
      <div className="absolute flex inset-[-10.5px_-18.68px_-10.5px_-18.67px] items-center justify-center">
        <div className="flex-none h-[231px] w-[410.68px]">
          <EliminatingRework />
        </div>
      </div>
      <Container29 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Thin',sans-serif] font-thin justify-center leading-[0] relative shrink-0 text-[#7f4025] text-[12px] tracking-[1.2px] uppercase w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[16px]">Strategic Insight</p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Fraunces:Thin',sans-serif] font-thin justify-center leading-[32px] relative shrink-0 text-[#1e1b17] text-[24px] w-full" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        <p className="mb-0">Eliminating Rework:</p>
        <p>The DevOps Perspective</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pt-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Thin',sans-serif] font-thin justify-center leading-[24px] relative shrink-0 text-[#3e4947] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="mb-0">How automated governance in your</p>
        <p>CI/CD pipeline ensures architectural…</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Thin',sans-serif] font-thin h-[16px] justify-center leading-[0] relative shrink-0 text-[#005c55] text-[12px] tracking-[1.2px] uppercase w-[98.05px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[16px]">Read Article</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0 size-[9.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
        <g id="Container">
          <path d={svgPaths.pce77c00} fill="var(--fill-0, #005C55)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex gap-[7.99px] items-center pt-[12px] relative shrink-0 w-full" data-name="Container">
      <Container35 />
      <Container36 />
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[40px] relative w-full">
        <Container32 />
        <Heading4 />
        <Container33 />
        <Container34 />
      </div>
    </div>
  );
}

function PremiumBlogPost() {
  return (
    <div className="bg-white col-3 content-stretch flex flex-col isolate items-start justify-self-stretch overflow-clip pb-[31.98px] relative rounded-[8px] row-1 self-start shrink-0" data-name="Premium Blog Post">
      <Background2 />
      <Container31 />
    </div>
  );
}

function Container12() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_521.98px] relative shrink-0 w-full" data-name="Container">
      <VideoTutorial />
      <SpeakingEngagement />
      <PremiumBlogPost />
    </div>
  );
}

function Container6() {
  return (
    <div className="max-w-[1440px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[80px] items-start max-w-[inherit] px-[48px] relative w-full">
        <Container7 />
        <Container12 />
      </div>
    </div>
  );
}

function SectionTheKnowledgeBaseSection() {
  return (
    <div className="bg-[#faf2eb] content-stretch flex flex-col items-start py-[128px] relative shrink-0 w-full" data-name="Section - The Knowledge Base section">
      <Container6 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Fraunces:Thin_Italic',sans-serif] font-thin h-[48px] italic justify-center leading-[0] relative shrink-0 text-[#1e1b17] text-[48px] text-center w-[615.88px]" style={{ fontVariationSettings: "'SOFT' 100, 'WONK' 1" }}>
        <p className="leading-[48px]">Choose your level of access.</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[576px] relative shrink-0 w-[576px]" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Thin',sans-serif] font-thin h-[24px] justify-center leading-[0] relative shrink-0 text-[#3e4947] text-[16px] text-center w-[507.27px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Master the methodologies that drive organizational engineering rigor.</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <Container38 />
    </div>
  );
}

function Margin() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative">
        <div className="flex flex-col font-['DM_Sans:Thin',sans-serif] font-thin h-[16px] justify-center leading-[0] relative shrink-0 text-[#6e7977] text-[12px] tracking-[1.2px] uppercase w-[72.84px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[16px]">Standard</p>
        </div>
      </div>
    </div>
  );
}

function Heading3Margin() {
  return (
    <div className="relative shrink-0" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative">
        <div className="flex flex-col font-['Fraunces:Thin',sans-serif] font-thin h-[40px] justify-center leading-[0] relative shrink-0 text-[#1e1b17] text-[36px] w-[209.23px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
          <p className="leading-[40px]">Community</p>
        </div>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex font-thin gap-[4px] items-baseline leading-[0] relative shrink-0" data-name="Paragraph">
      <div className="flex flex-col font-['Fraunces:Thin',sans-serif] h-[40px] justify-center relative shrink-0 text-[#1e1b17] text-[36px] w-[46.89px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        <p className="leading-[40px]">$0</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Thin',sans-serif] h-[24px] justify-center opacity-60 relative shrink-0 text-[#3e4947] text-[16px] w-[62.45px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">/ forever</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[40px] relative">
        <Paragraph />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[10.021px] relative shrink-0 w-[13.583px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5833 10.0208">
        <g id="Container">
          <path d={svgPaths.p127da640} fill="var(--fill-0, #005C55)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Thin',sans-serif] font-thin h-[24px] justify-center leading-[0] relative shrink-0 text-[#3e4947] text-[16px] w-[211.02px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Monthly Strategy Newsletter</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <Container40 />
      <Container41 />
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[10.021px] relative shrink-0 w-[13.583px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5833 10.0208">
        <g id="Container">
          <path d={svgPaths.p127da640} fill="var(--fill-0, #005C55)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Thin',sans-serif] font-thin h-[24px] justify-center leading-[0] relative shrink-0 text-[#3e4947] text-[16px] w-[255.83px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">{`Public Case Studies & Frameworks`}</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <Container42 />
      <Container43 />
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[10.021px] relative shrink-0 w-[13.583px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5833 10.0208">
        <g id="Container">
          <path d={svgPaths.p127da640} fill="var(--fill-0, #005C55)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Thin',sans-serif] font-thin h-[24px] justify-center leading-[0] relative shrink-0 text-[#3e4947] text-[16px] w-[206.11px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Community Discord Access</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <Container44 />
      <Container45 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pb-[38px] relative shrink-0 w-[281.413px]" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
    </div>
  );
}

function ListMargin() {
  return (
    <div className="relative shrink-0" data-name="List:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[48px] relative">
        <List />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#005c55] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[2px] py-[18px] relative w-full">
        <div className="flex flex-col font-['DM_Sans:Thin',sans-serif] font-thin h-[24px] justify-center leading-[0] relative shrink-0 text-[#005c55] text-[16px] text-center w-[158.88px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[24px]">Join the Community</p>
        </div>
      </div>
    </div>
  );
}

function CommunityTier() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0" data-name="Community Tier">
      <div aria-hidden="true" className="absolute border border-[rgba(189,201,198,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[49px] relative w-full">
        <Margin />
        <Heading3Margin />
        <Margin1 />
        <ListMargin />
        <Button2 />
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['DM_Sans:Thin',sans-serif] font-thin h-[16px] justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] tracking-[1.2px] uppercase w-[173.42px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[16px]">Strategic Partnership</p>
      </div>
    </div>
  );
}

function Heading3Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0" data-name="Heading 3:margin">
      <div className="flex flex-col font-['Fraunces:Thin',sans-serif] font-thin h-[40px] justify-center leading-[0] relative shrink-0 text-[36px] text-white w-[195.88px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        <p className="leading-[40px]">Full Access</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex font-thin gap-[4px] items-baseline leading-[0] relative shrink-0" data-name="Paragraph">
      <div className="flex flex-col font-['Fraunces:Thin',sans-serif] h-[40px] justify-center relative shrink-0 text-[36px] text-white w-[68.56px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        <p className="leading-[40px]">$49</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Thin',sans-serif] h-[24px] justify-center relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] w-[58.89px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">/ month</p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[40px] relative shrink-0" data-name="Margin">
      <Paragraph1 />
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[18.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 17.5">
        <g id="Container">
          <path d={svgPaths.p16151b00} fill="var(--fill-0, #C5E6E1)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Thin',sans-serif] font-thin h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-white w-[195.09px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Instructional Video Library</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <Container46 />
      <Container47 />
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[18.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 17.5">
        <g id="Container">
          <path d={svgPaths.p16151b00} fill="var(--fill-0, #C5E6E1)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Thin',sans-serif] font-thin h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-white w-[237.45px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">{`All Speaking & Event Recordings`}</p>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <Container48 />
      <Container49 />
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[18.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 17.5">
        <g id="Container">
          <path d={svgPaths.p16151b00} fill="var(--fill-0, #C5E6E1)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Thin',sans-serif] font-thin h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-white w-[266.8px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Premium Blog Technical Deep-Dives</p>
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <Container50 />
      <Container51 />
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[18.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 17.5">
        <g id="Container">
          <path d={svgPaths.p16151b00} fill="var(--fill-0, #C5E6E1)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Thin',sans-serif] font-thin h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-white w-[286.8px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">{`Exclusive Q&A with Senior Consultants`}</p>
      </div>
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <Container52 />
      <Container53 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[317.133px]" data-name="List">
      <Item3 />
      <Item4 />
      <Item5 />
      <Item6 />
    </div>
  );
}

function ListMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[48px] relative shrink-0" data-name="List:margin">
      <List1 />
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute bg-[#7f4025] content-stretch flex flex-col items-start px-[24px] py-[8px] right-0 top-0" data-name="Background">
      <div className="flex flex-col font-['DM_Sans:Thin',sans-serif] font-thin h-[16px] justify-center leading-[0] relative shrink-0 text-[12px] text-white tracking-[1.2px] uppercase w-[107.5px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[16px]">Most Coveted</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#7f4025] content-stretch flex flex-col items-center justify-center py-[16px] relative rounded-[6px] shrink-0 w-full" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[6px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <div className="flex flex-col font-['DM_Sans:Thin',sans-serif] font-thin h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white w-[178.42px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Upgrade to Full Access</p>
      </div>
    </div>
  );
}

function FullAccessTier() {
  return (
    <div className="col-2 justify-self-stretch relative rounded-[8px] row-1 self-start shadow-[0px_40px_80px_0px_rgba(0,92,85,0.15)] shrink-0" data-name="Full Access Tier" style={{ backgroundImage: "linear-gradient(135.895deg, rgb(0, 92, 85) 0%, rgb(15, 118, 110) 100%)" }}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[48px] relative w-full">
          <Margin2 />
          <Heading3Margin1 />
          <Margin3 />
          <ListMargin1 />
          <Background3 />
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="gap-x-[48px] gap-y-[48px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_520px] max-w-[1024px] relative shrink-0 w-[1024px]" data-name="Container">
      <CommunityTier />
      <FullAccessTier />
    </div>
  );
}

function SectionPricingCards() {
  return (
    <div className="max-w-[1440px] relative shrink-0 w-full" data-name="Section - Pricing Cards">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[inherit] px-[48px] relative w-full">
          <Container37 />
          <Container39 />
        </div>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] relative shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Fraunces:Thin_Italic',sans-serif] font-thin h-[36px] italic justify-center leading-[0] relative shrink-0 text-[#1e1b17] text-[30px] w-[248.73px]" style={{ fontVariationSettings: "'SOFT' 100, 'WONK' 1" }}>
        <p className="leading-[36px]">From the Archive</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#bdc9c6] flex-[1_0_0] h-px min-h-px min-w-px opacity-30" data-name="Horizontal Divider" />
      <Heading6 />
      <div className="bg-[#bdc9c6] flex-[1_0_0] h-px min-h-px min-w-px opacity-30" data-name="Horizontal Divider" />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Fraunces:Thin',sans-serif] font-thin justify-center leading-[0] relative shrink-0 text-[#1e1b17] text-[30px] w-full" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        <p className="leading-[36px]">The Curator Series</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Thin',sans-serif] font-thin justify-center leading-[26px] relative shrink-0 text-[#3e4947] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="mb-0">Access our legacy of symposiums</p>
        <p className="mb-0">and unedited workshop sessions</p>
        <p className="mb-0">focused on the architecture of</p>
        <p>modern enterprise software.</p>
      </div>
    </div>
  );
}

function Expert() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Expert">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgExpert} />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#c5e6e1] mr-[-16px] relative rounded-[12px] shrink-0 size-[48px]" data-name="Background+Border">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <Expert />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#fff8f2] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Expert1() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Expert">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgExpert1} />
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#c5e6e1] relative rounded-[12px] shrink-0 size-[48px]" data-name="Background+Border">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <Expert1 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#fff8f2] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-16px] relative shrink-0 size-[48px]" data-name="Margin">
      <BackgroundBorder1 />
    </div>
  );
}

function Expert2() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Expert">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgExpert2} />
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#c5e6e1] relative rounded-[12px] shrink-0 size-[48px]" data-name="Background+Border">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <Expert2 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#fff8f2] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-16px] relative shrink-0 size-[48px]" data-name="Margin">
      <BackgroundBorder2 />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex items-start pr-[16px] relative shrink-0" data-name="Container">
      <BackgroundBorder />
      <Margin4 />
      <Margin5 />
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Thin',sans-serif] font-thin h-[16px] justify-center leading-[0] relative shrink-0 text-[#6e7977] text-[12px] tracking-[1.2px] uppercase w-[151.91px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[16px]">25+ Expert Sessions</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex gap-[16px] items-center pt-[8px] relative shrink-0 w-full" data-name="Container">
      <Container58 />
      <Container59 />
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#faf2eb] col-[1/span_4] justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[40px] relative w-full">
        <Heading7 />
        <Container56 />
        <Container57 />
      </div>
    </div>
  );
}

function RecordingPreview() {
  return (
    <div className="h-[208.5px] relative shrink-0 w-full" data-name="Recording Preview">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[177.78%] left-0 max-w-none top-[-38.89%] w-full" src={imgRadicalChangeAtScale} />
        </div>
        <div className="absolute bg-white inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="relative shrink-0 size-[50px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="Container">
          <path d={svgPaths.p9b8800} fill="var(--fill-0, #FFF8F2)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="absolute bg-[rgba(0,92,85,0.2)] content-stretch flex inset-0 items-center justify-center opacity-0" data-name="Overlay">
      <Container62 />
    </div>
  );
}

function Background6() {
  return (
    <div className="absolute bg-[#fff8f2] bottom-[16px] content-stretch flex flex-col items-start left-[16px] px-[12px] py-[4px]" data-name="Background">
      <div className="flex flex-col font-['DM_Sans:Thin',sans-serif] font-thin h-[15px] justify-center leading-[0] relative shrink-0 text-[#1e1b17] text-[10px] tracking-[0.5px] uppercase w-[27.59px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[15px]">58:12</p>
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="absolute aspect-video bg-[#f4ede6] content-stretch flex flex-col items-start justify-center left-0 overflow-clip right-0 rounded-[4px] top-0" data-name="Background">
      <RecordingPreview />
      <Overlay />
      <Background6 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[224.5px]" data-name="Heading 4">
      <div className="flex flex-col font-['Fraunces:Thin',sans-serif] font-thin h-[28px] justify-center leading-[0] relative shrink-0 text-[#1e1b17] text-[20px] w-[363.27px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        <p className="leading-[28px]">Strategic Alignment Workshop 2023</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[256.5px]" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Thin_Italic',sans-serif] font-thin h-[20px] italic justify-center leading-[0] relative shrink-0 text-[#3e4947] text-[14px] w-[202.08px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20px]">Full Access Archive • Nov 2023</p>
      </div>
    </div>
  );
}

function Recording() {
  return (
    <div className="col-1 h-[304.5px] justify-self-stretch relative row-1 shrink-0" data-name="Recording 1">
      <Background5 />
      <Heading8 />
      <Container63 />
    </div>
  );
}

function RecordingPreview1() {
  return (
    <div className="h-[208.5px] relative shrink-0 w-full" data-name="Recording Preview">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[177.78%] left-0 max-w-none top-[-38.89%] w-full" src={imgRecordingPreview} />
        </div>
        <div className="absolute bg-white inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="relative shrink-0 size-[50px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="Container">
          <path d={svgPaths.p9b8800} fill="var(--fill-0, #FFF8F2)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="absolute bg-[rgba(0,92,85,0.2)] content-stretch flex inset-0 items-center justify-center opacity-0" data-name="Overlay">
      <Container64 />
    </div>
  );
}

function Background8() {
  return (
    <div className="absolute bg-[#fff8f2] bottom-[16px] content-stretch flex flex-col items-start left-[16px] px-[12px] py-[4px]" data-name="Background">
      <div className="flex flex-col font-['DM_Sans:Thin',sans-serif] font-thin h-[15px] justify-center leading-[0] relative shrink-0 text-[#1e1b17] text-[10px] tracking-[0.5px] uppercase w-[30.75px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[15px]">42:05</p>
      </div>
    </div>
  );
}

function Background7() {
  return (
    <div className="absolute aspect-video bg-[#f4ede6] content-stretch flex flex-col items-start justify-center left-0 overflow-clip right-0 rounded-[4px] top-0" data-name="Background">
      <RecordingPreview1 />
      <Overlay1 />
      <Background8 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[224.5px]" data-name="Heading 4">
      <div className="flex flex-col font-['Fraunces:Thin',sans-serif] font-thin h-[56px] justify-center leading-[28px] relative shrink-0 text-[#1e1b17] text-[20px] w-[252.03px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        <p className="mb-0">Masterclass: Spec-Driven</p>
        <p>Development</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[284.5px]" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Thin_Italic',sans-serif] font-thin h-[20px] italic justify-center leading-[0] relative shrink-0 text-[#3e4947] text-[14px] w-[199.48px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20px]">Full Access Archive • Jan 2024</p>
      </div>
    </div>
  );
}

function Recording1() {
  return (
    <div className="col-2 h-[304.5px] justify-self-stretch relative row-1 shrink-0" data-name="Recording 2">
      <Background7 />
      <Heading9 />
      <Container65 />
    </div>
  );
}

function Container61() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_304.50px] relative shrink-0 w-full" data-name="Container">
      <Recording />
      <Recording1 />
    </div>
  );
}

function Container60() {
  return (
    <div className="col-[5/span_8] content-stretch flex flex-col items-start justify-self-stretch pb-[19.5px] relative row-1 self-start shrink-0" data-name="Container">
      <Container61 />
    </div>
  );
}

function Container55() {
  return (
    <div className="gap-x-[48px] gap-y-[48px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_324px] relative shrink-0 w-full" data-name="Container">
      <Background4 />
      <Container60 />
    </div>
  );
}

function ArchiveSection() {
  return (
    <div className="max-w-[1440px] relative shrink-0 w-full" data-name="Archive Section">
      <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[inherit] px-[48px] relative w-full">
        <Container54 />
        <Container55 />
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-col gap-[128px] items-start pt-[128px] relative shrink-0 w-full" data-name="Main">
      <HeroValuePropSection />
      <SectionTheKnowledgeBaseSection />
      <SectionPricingCards />
      <ArchiveSection />
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Fraunces:Thin',sans-serif] font-thin justify-center leading-[0] relative shrink-0 text-[#1e1b17] text-[30px] tracking-[-1.5px] w-full" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        <p className="leading-[36px]">AHA Software</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Thin',sans-serif] font-thin justify-center leading-[22.75px] relative shrink-0 text-[#3e4947] text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="mb-0">Architectural alignment for the modern</p>
        <p className="mb-0">enterprise. We build the systems that</p>
        <p className="mb-0">build the future with consulting and</p>
        <p>educational precision.</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Container68 />
      <Container69 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['DM_Sans:Thin',sans-serif] font-thin justify-center leading-[0] relative shrink-0 text-[#005c55] text-[14px] tracking-[0.35px] uppercase w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20px]">Network</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['DM_Sans:Thin',sans-serif] font-thin justify-center leading-[0] relative shrink-0 text-[#1e1b17] text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20px]">Sitemap</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['DM_Sans:Thin',sans-serif] font-thin justify-center leading-[0] relative shrink-0 text-[#1e1b17] text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20px]">Newsletter</p>
      </div>
    </div>
  );
}

function LinkMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="Link:margin">
      <Link1 />
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['DM_Sans:Thin',sans-serif] font-thin justify-center leading-[0] relative shrink-0 text-[#1e1b17] text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20px]">Contact</p>
      </div>
    </div>
  );
}

function LinkMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="Link:margin">
      <Link2 />
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Nav">
      <Link />
      <LinkMargin />
      <LinkMargin1 />
    </div>
  );
}

function Container70() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch pb-[31px] relative row-1 self-start shrink-0" data-name="Container">
      <Heading10 />
      <Nav />
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['DM_Sans:Thin',sans-serif] font-thin justify-center leading-[0] relative shrink-0 text-[#005c55] text-[14px] tracking-[0.35px] uppercase w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20px]">Legal</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['DM_Sans:Thin',sans-serif] font-thin justify-center leading-[0] relative shrink-0 text-[#1e1b17] text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20px]">Privacy Policy</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['DM_Sans:Thin',sans-serif] font-thin justify-center leading-[0] relative shrink-0 text-[#1e1b17] text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20px]">Terms of Service</p>
      </div>
    </div>
  );
}

function LinkMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="Link:margin">
      <Link4 />
    </div>
  );
}

function Nav1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Nav">
      <Link3 />
      <LinkMargin2 />
    </div>
  );
}

function Container71() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch pb-[63px] relative row-1 self-start shrink-0" data-name="Container">
      <Heading11 />
      <Nav1 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['DM_Sans:Thin',sans-serif] font-thin justify-center leading-[0] relative shrink-0 text-[#005c55] text-[14px] tracking-[0.35px] uppercase w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20px]">Statement</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Thin',sans-serif] font-thin justify-center leading-[22.75px] relative shrink-0 text-[#3e4947] text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="mb-0">© 2024 AHA Software. Designed for the</p>
        <p>Leaders of Change.</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="col-4 content-stretch flex flex-col gap-[15.375px] items-start justify-self-stretch pb-[69.5px] relative row-1 self-start shrink-0" data-name="Container">
      <Heading12 />
      <Container73 />
    </div>
  );
}

function Container66() {
  return (
    <div className="max-w-[1440px] relative shrink-0 w-full" data-name="Container">
      <div className="gap-x-[48px] gap-y-[48px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[_151px] max-w-[inherit] px-[48px] py-[80px] relative w-full">
        <Container67 />
        <Container70 />
        <Container71 />
        <Container72 />
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="opacity-50 relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['DM_Sans:Thin',sans-serif] font-thin h-[16px] justify-center leading-[0] relative shrink-0 text-[#1e1b17] text-[12px] w-[187.2px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[16px]">© 2024 AHA Software Consulting.</p>
        </div>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-40 relative self-stretch shrink-0" data-name="Container">
      <div className="relative shrink-0 size-[20px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.pf778600} fill="var(--fill-0, #1E1B17)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-40 relative self-stretch shrink-0" data-name="Container">
      <div className="relative shrink-0 size-[20px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p1167b760} fill="var(--fill-0, #1E1B17)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-40 relative self-stretch shrink-0" data-name="Container">
      <div className="relative shrink-0 size-[17px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
          <path d={svgPaths.p26742100} fill="var(--fill-0, #1E1B17)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="h-[20px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] h-full items-start relative">
        <Container76 />
        <Container77 />
        <Container78 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="max-w-[1440px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(189,201,198,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between max-w-[inherit] pb-[32px] pt-[33px] px-[48px] relative w-full">
          <Container74 />
          <Container75 />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#f5ede4] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Footer">
      <Container66 />
      <HorizontalBorder />
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Fraunces:Thin',sans-serif] font-thin h-[32px] justify-center leading-[0] relative shrink-0 text-[#1e1b17] text-[24px] tracking-[-1.2px] w-[156.09px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        <p className="leading-[32px]">AHA Software</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 pb-[4px] relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Fraunces:Thin_Italic',sans-serif] font-thin h-[28px] italic justify-center leading-[0] relative shrink-0 text-[#1e1b17] text-[18px] tracking-[-0.45px] w-[62.33px]" style={{ fontVariationSettings: "'SOFT' 100, 'WONK' 1" }}>
        <p className="leading-[28px]">Services</p>
      </div>
    </div>
  );
}

function LinkMargin3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4.5px] pl-[40px] relative shrink-0" data-name="Link:margin">
      <div className="flex flex-col font-['Fraunces:Thin_Italic',sans-serif] font-thin h-[28px] italic justify-center leading-[0] opacity-80 relative shrink-0 text-[#1e1b17] text-[18px] tracking-[-0.45px] w-[60.53px]" style={{ fontVariationSettings: "'SOFT' 100, 'WONK' 1" }}>
        <p className="leading-[28px]">Insights</p>
      </div>
    </div>
  );
}

function LinkMargin4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4.5px] pl-[40px] relative shrink-0" data-name="Link:margin">
      <div className="flex flex-col font-['Fraunces:Thin_Italic',sans-serif] font-thin h-[28px] italic justify-center leading-[0] opacity-80 relative shrink-0 text-[#1e1b17] text-[18px] tracking-[-0.45px] w-[50.3px]" style={{ fontVariationSettings: "'SOFT' 100, 'WONK' 1" }}>
        <p className="leading-[28px]">Events</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[6px] relative shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#005c55] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Fraunces:Thin_Italic',sans-serif] font-thin h-[28px] italic justify-center leading-[0] relative shrink-0 text-[#005c55] text-[18px] tracking-[-0.45px] w-[82.47px]" style={{ fontVariationSettings: "'SOFT' 100, 'WONK' 1" }}>
        <p className="leading-[28px]">Full Access</p>
      </div>
    </div>
  );
}

function LinkMargin5() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[40px] relative shrink-0" data-name="Link:margin">
      <Link6 />
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Link5 />
      <LinkMargin3 />
      <LinkMargin4 />
      <LinkMargin5 />
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center mr-[-0.01px] opacity-70 relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['DM_Sans:Thin',sans-serif] font-thin h-[20px] justify-center leading-[0] relative shrink-0 text-[#1e1b17] text-[14px] text-center tracking-[1.4px] uppercase w-[47.88px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20px]">Login</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[24px] py-[10px] relative rounded-[6px] shrink-0" data-name="Button" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 92, 85) 0%, rgb(15, 118, 110) 100%)" }}>
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[6px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <div className="flex flex-col font-['DM_Sans:Thin',sans-serif] font-thin h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[0.35px] w-[104.16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20px]">Work Together</p>
      </div>
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-0.01px] pl-[24px] relative shrink-0" data-name="Button:margin">
      <Button5 />
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex items-center pr-[0.01px] relative shrink-0" data-name="Container">
      <Button4 />
      <ButtonMargin />
    </div>
  );
}

function Container79() {
  return (
    <div className="max-w-[1440px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between max-w-[inherit] px-[48px] py-[24px] relative w-full">
          <Container80 />
          <Container81 />
          <Container82 />
        </div>
      </div>
    </div>
  );
}

function TopNavBar() {
  return (
    <div className="absolute backdrop-blur-[8px] bg-[rgba(255,248,242,0.8)] content-stretch flex flex-col items-start left-0 shadow-[0px_20px_40px_0px_rgba(30,27,23,0.05)] top-0 w-[1280px]" data-name="TopNavBar">
      <Container79 />
    </div>
  );
}

export default function AhaPremiumHubConsultingFocus() {
  return (
    <div className="bg-[#fff8f2] content-stretch flex flex-col gap-[128px] items-start relative size-full" data-name="AHA Premium Hub - Consulting Focus">
      <Main />
      <Footer />
      <TopNavBar />
    </div>
  );
}