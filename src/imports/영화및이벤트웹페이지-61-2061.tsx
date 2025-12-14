import svgPaths from "./svg-tw84lyun4y";
import imgImageWithFallback from "figma:asset/fb453698f72e2352ebd6346e0a6fcdc2a9d1097e.png";
import imgImageWithFallback1 from "figma:asset/e54ff586857a6f3e3e9d44d9c51301408f79c4f5.png";
import imgImageWithFallback2 from "figma:asset/17d555c3959c637a410d1f8fac1ef5885d44504c.png";
import imgImageWithFallback3 from "figma:asset/d2b8e97590e5d87fb2f4f717cc4eeae10ec3a194.png";
import imgImageWithFallback4 from "figma:asset/2e1de7b884691b28dcac177c6d401d7b948adc55.png";
import imgImageWithFallback5 from "figma:asset/a9303ab0aa4c5652774332510b58a6c2eb58f258.png";
import imgImageWithFallback6 from "figma:asset/65e4e736c77b714ba8cc5bc97e0f37ae6392c718.png";
import imgImageWithFallback7 from "figma:asset/7abae6004b038f2cc645a39dd8902c3d35f36150.png";

function ImageWithFallback() {
  return (
    <div className="absolute h-[600px] left-0 top-0 w-[1440px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container() {
  return <div className="absolute bg-gradient-to-r from-[#242a32] h-[600px] left-0 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(36,42,50,0.7)] w-[1440px]" data-name="Container" />;
}

function Container1() {
  return <div className="absolute bg-gradient-to-b from-[#242a32] h-[600px] left-0 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0)] w-[1440px]" data-name="Container" />;
}

function Container2() {
  return (
    <div className="absolute h-[600px] left-0 top-0 w-[1440px]" data-name="Container">
      <ImageWithFallback />
      <Container />
      <Container1 />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[496px]" data-name="Heading 1">
      <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[48px] left-0 text-[48px] text-nowrap text-white top-[-5px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        대양으로의 모험
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[24px] left-0 top-[64px] w-[496px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-0 text-[#4e5968] text-[16px] text-nowrap top-[-2.2px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        SF/액션
      </p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[58.5px] left-0 top-[112px] w-[496px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[29.25px] left-0 text-[18px] text-[rgba(255,255,255,0.9)] top-[-1.6px] w-[493px]" style={{ fontVariationSettings: "'wght' 400" }}>
        우주를 배경으로 한 스릴 넘치는 모험. 인류의 미래가 걸린 위대한 여정이 시작된다.
      </p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1c8f7580} fill="var(--fill-0, #FBB343)" id="Vector" stroke="var(--stroke-0, #FBB343)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#fbb343] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">8.5</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[49.125px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[24px] items-center relative w-[49.125px]">
        <Icon />
        <Text />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_61_2138)" id="Icon">
          <path d="M10 5V10L13.3333 11.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p14d24500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_61_2138">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-0 text-[16px] text-white top-[-2.2px] w-[43px]" style={{ fontVariationSettings: "'wght' 400" }}>
          148분
        </p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[70.438px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[24px] items-center relative w-[70.438px]">
        <Icon1 />
        <Text1 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex gap-[24px] h-[24px] items-center left-0 top-[194.5px] w-[496px]" data-name="Container">
      <Container3 />
      <Container4 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(78,89,104,0.5)] h-[49.6px] relative rounded-[10px] shrink-0 w-[129.6px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(78,89,104,0.3)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[49.6px] relative w-[129.6px]">
        <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-[32.8px] text-[16px] text-nowrap text-white top-[10.6px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
          상세정보
        </p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[49.6px] relative rounded-[10px] shrink-0 w-[129.6px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(78,89,104,0.5)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[49.6px] relative w-[129.6px]">
        <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-[32.8px] text-[16px] text-nowrap text-white top-[10.6px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
          예매하기
        </p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[49.6px] items-start left-0 top-[250.5px] w-[496px]" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[300.1px] left-[42px] top-[149.95px] w-[576px]" data-name="Container">
      <Heading />
      <Paragraph />
      <Paragraph1 />
      <Container5 />
      <Container6 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
            <path d="M7 13L1 7L7 1" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[rgba(36,42,50,0.9)] box-border content-stretch flex flex-col items-start left-[16px] pb-[0.8px] pt-[12.8px] px-[12.8px] rounded-[2.68435e+07px] size-[49.6px] top-[275.2px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(78,89,104,0.5)] border-solid inset-0 pointer-events-none rounded-[2.68435e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Icon2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
            <path d="M1 13L7 7L1 1" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[rgba(36,42,50,0.9)] box-border content-stretch flex flex-col items-start left-[1374.4px] pb-[0.8px] pt-[12.8px] px-[12.8px] rounded-[2.68435e+07px] size-[49.6px] top-[275.2px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(78,89,104,0.5)] border-solid inset-0 pointer-events-none rounded-[2.68435e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Icon3 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[600px] left-0 top-0 w-[1440px]" data-name="Container">
      <Container7 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function Button4() {
  return (
    <div className="basis-0 bg-[#4e5968] grow h-[4px] min-h-px min-w-px relative rounded-[2.68435e+07px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[4px] w-full" />
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[rgba(78,89,104,0.3)] relative rounded-[2.68435e+07px] shrink-0 size-[4px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[4px]" />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[4px] items-start left-[692px] top-[564px] w-[56px]" data-name="Container">
      <Button4 />
      {[...Array(2).keys()].map((_, i) => (
        <Button5 key={i} />
      ))}
    </div>
  );
}

function MovieSlider() {
  return (
    <div className="h-[600px] overflow-clip relative shrink-0 w-full" data-name="MovieSlider">
      <Container2 />
      <Container8 />
      <Container9 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-2.2px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        상영 중인 영화
      </p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[20px] left-0 text-[#4e5968] text-[14px] text-nowrap top-[-1.2px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        지금 극장에서 만나보세요
      </p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[48px] relative shrink-0 w-[163.85px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[48px] items-start relative w-[163.85px]">
        <Heading1 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="basis-0 bg-[rgba(78,89,104,0.5)] grow h-[27.4px] min-h-px min-w-px relative rounded-[16.4px] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[16.4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[27.4px] items-center justify-center px-[8.8px] py-[4.8px] relative w-full">
          <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[20px] relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
            최근 개봉
          </p>
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="basis-0 grow h-[27.4px] min-h-px min-w-px relative rounded-[16.4px] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[16.4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[27.4px] items-center justify-center px-[8.8px] py-[4.8px] relative w-full">
          <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
            개봉 예정
          </p>
        </div>
      </div>
    </div>
  );
}

function PrimitiveDiv() {
  return (
    <div className="bg-[rgba(78,89,104,0.2)] h-[36px] relative rounded-[16.4px] shrink-0 w-[164.65px]" data-name="Primitive.div">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(78,89,104,0.4)] border-solid inset-0 pointer-events-none rounded-[16.4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[36px] items-center justify-center p-[0.8px] relative w-[164.65px]">
        <PrimitiveButton />
        <PrimitiveButton1 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex h-[48px] items-center justify-between left-0 top-0 w-[1376px]" data-name="Container">
      <Container10 />
      <PrimitiveDiv />
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute h-[36px] left-[650.2px] rounded-[6.8px] top-[557.2px] w-[75.6px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(78,89,104,0.4)] border-solid inset-0 pointer-events-none rounded-[6.8px]" />
      <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[20px] left-[16.8px] text-[#4e5968] text-[14px] text-nowrap top-[6.8px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        더보기
      </p>
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="absolute h-[327.6px] left-0 top-0 w-[218.4px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute bg-[#4e5968] box-border content-stretch flex gap-[4px] h-[19.988px] items-center justify-center left-[8px] overflow-clip px-[8px] py-[2px] rounded-[6.8px] top-[8px] w-[41.225px]" data-name="Badge">
      <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[16px] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        12세
      </p>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[327.6px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <ImageWithFallback1 />
      <Badge />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-2.2px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        대양으로의 모험
      </p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[20px] left-0 text-[#4e5968] text-[14px] text-nowrap top-[-1.2px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        SF/액션
      </p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1cb7cc00} fill="var(--fill-0, #FBB343)" id="Vector" stroke="var(--stroke-0, #FBB343)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18.488px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[18.488px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#fbb343] text-[14px] text-nowrap top-[-1.2px] whitespace-pre">8.5</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[20px] relative shrink-0 w-[38.487px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center relative w-[38.487px]">
        <Icon4 />
        <Text2 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_61_2142)" id="Icon">
          <path d="M8 4V8L10.6667 9.33333" id="Vector" stroke="var(--stroke-0, #4E5968)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p39ee6532} id="Vector_2" stroke="var(--stroke-0, #4E5968)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_61_2142">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[20px] left-0 text-[#4e5968] text-[14px] top-[-1.2px] w-[38px]" style={{ fontVariationSettings: "'wght' 400" }}>
          148분
        </p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[20px] relative shrink-0 w-[57.138px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center relative w-[57.138px]">
        <Icon5 />
        <Text3 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[20px] items-center justify-between relative w-full">
          <Container13 />
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[116px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[116px] items-start pb-0 pt-[16px] px-[16px] relative w-full">
          <Heading2 />
          <Paragraph3 />
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function MovieCard() {
  return (
    <div className="absolute bg-[#1a1f26] h-[445.2px] left-0 rounded-[10px] top-0 w-[220px]" data-name="MovieCard">
      <div className="box-border content-stretch flex flex-col h-[445.2px] items-start overflow-clip p-[0.8px] relative rounded-[inherit] w-[220px]">
        <Container12 />
        <Container16 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(78,89,104,0.3)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="absolute h-[327.6px] left-0 top-0 w-[218.4px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute bg-[#4e5968] box-border content-stretch flex gap-[4px] h-[19.988px] items-center justify-center left-[8px] overflow-clip px-[8px] py-[2px] rounded-[6.8px] top-[8px] w-[40px]" data-name="Badge">
      <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[16px] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        전체
      </p>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[327.6px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <ImageWithFallback2 />
      <Badge1 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-2.2px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        베를린에서의 겨울
      </p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[20px] left-0 text-[#4e5968] text-[14px] text-nowrap top-[-1.2px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        로맨스/드라마
      </p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1cb7cc00} fill="var(--fill-0, #FBB343)" id="Vector" stroke="var(--stroke-0, #FBB343)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18.488px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[18.488px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#fbb343] text-[14px] text-nowrap top-[-1.2px] whitespace-pre">7.2</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[20px] relative shrink-0 w-[38.487px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center relative w-[38.487px]">
        <Icon6 />
        <Text4 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_61_2142)" id="Icon">
          <path d="M8 4V8L10.6667 9.33333" id="Vector" stroke="var(--stroke-0, #4E5968)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p39ee6532} id="Vector_2" stroke="var(--stroke-0, #4E5968)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_61_2142">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[20px] left-0 text-[#4e5968] text-[14px] top-[-1.2px] w-[38px]" style={{ fontVariationSettings: "'wght' 400" }}>
          120분
        </p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[20px] relative shrink-0 w-[57.138px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center relative w-[57.138px]">
        <Icon7 />
        <Text5 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[20px] items-center justify-between relative w-full">
          <Container18 />
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[116px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[116px] items-start pb-0 pt-[16px] px-[16px] relative w-full">
          <Heading4 />
          <Paragraph4 />
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function MovieCard1() {
  return (
    <div className="absolute bg-[#1a1f26] h-[445.2px] left-[236px] rounded-[10px] top-0 w-[220px]" data-name="MovieCard">
      <div className="box-border content-stretch flex flex-col h-[445.2px] items-start overflow-clip p-[0.8px] relative rounded-[inherit] w-[220px]">
        <Container17 />
        <Container21 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(78,89,104,0.3)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function ImageWithFallback3() {
  return (
    <div className="absolute h-[327.6px] left-0 top-0 w-[218.4px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute bg-[#4e5968] box-border content-stretch flex gap-[4px] h-[19.988px] items-center justify-center left-[8px] overflow-clip px-[8px] py-[2px] rounded-[6.8px] top-[8px] w-[41.225px]" data-name="Badge">
      <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[16px] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        15세
      </p>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[327.6px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <ImageWithFallback3 />
      <Badge2 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-2.2px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        더 블레이드
      </p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[20px] left-0 text-[#4e5968] text-[14px] text-nowrap top-[-1.2px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        액션/스릴러
      </p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pb3a1300} fill="var(--fill-0, #FBB343)" id="Vector" stroke="var(--stroke-0, #FBB343)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18.488px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[18.488px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#fbb343] text-[14px] text-nowrap top-[-1.2px] whitespace-pre">8.5</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[20px] relative shrink-0 w-[38.487px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center relative w-[38.487px]">
        <Icon8 />
        <Text6 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_61_2142)" id="Icon">
          <path d="M8 4V8L10.6667 9.33333" id="Vector" stroke="var(--stroke-0, #4E5968)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p39ee6532} id="Vector_2" stroke="var(--stroke-0, #4E5968)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_61_2142">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[20px] left-0 text-[#4e5968] text-[14px] top-[-1.2px] w-[38px]" style={{ fontVariationSettings: "'wght' 400" }}>
          115분
        </p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[20px] relative shrink-0 w-[57.138px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center relative w-[57.138px]">
        <Icon9 />
        <Text7 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <Container24 />
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[116px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[116px] items-start pb-0 pt-[16px] px-[16px] relative w-full">
          <Heading5 />
          <Paragraph5 />
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function MovieCard2() {
  return (
    <div className="absolute bg-[#1a1f26] h-[445.2px] left-[472px] rounded-[10px] top-0 w-[220px]" data-name="MovieCard">
      <div className="box-border content-stretch flex flex-col h-[445.2px] items-start overflow-clip p-[0.8px] relative rounded-[inherit] w-[220px]">
        <Container22 />
        <Container26 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(78,89,104,0.3)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function ImageWithFallback4() {
  return (
    <div className="absolute h-[327.6px] left-0 top-0 w-[218.4px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback3} />
    </div>
  );
}

function Badge3() {
  return (
    <div className="absolute bg-[#4e5968] box-border content-stretch flex gap-[4px] h-[19.988px] items-center justify-center left-[8px] overflow-clip px-[8px] py-[2px] rounded-[6.8px] top-[8px] w-[41.225px]" data-name="Badge">
      <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[16px] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        12세
      </p>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[327.6px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <ImageWithFallback4 />
      <Badge3 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-2.2px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        너 더 무비
      </p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[20px] left-0 text-[#4e5968] text-[14px] text-nowrap top-[-1.2px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        드라마
      </p>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pb3a1300} fill="var(--fill-0, #FBB343)" id="Vector" stroke="var(--stroke-0, #FBB343)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[7.713px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[7.713px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#fbb343] text-[14px] text-nowrap top-[-1.2px] whitespace-pre">9</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[20px] relative shrink-0 w-[27.712px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center relative w-[27.712px]">
        <Icon10 />
        <Text8 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_61_2142)" id="Icon">
          <path d="M8 4V8L10.6667 9.33333" id="Vector" stroke="var(--stroke-0, #4E5968)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p39ee6532} id="Vector_2" stroke="var(--stroke-0, #4E5968)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_61_2142">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[20px] left-0 text-[#4e5968] text-[14px] top-[-1.2px] w-[38px]" style={{ fontVariationSettings: "'wght' 400" }}>
          105분
        </p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[20px] relative shrink-0 w-[57.138px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center relative w-[57.138px]">
        <Icon11 />
        <Text9 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container28 />
      <Container29 />
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[116px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[116px] items-start pb-0 pt-[16px] px-[16px] relative w-full">
          <Heading6 />
          <Paragraph6 />
          <Container30 />
        </div>
      </div>
    </div>
  );
}

function MovieCard3() {
  return (
    <div className="absolute bg-[#1a1f26] h-[445.2px] left-[708px] rounded-[10px] top-0 w-[220px]" data-name="MovieCard">
      <div className="box-border content-stretch flex flex-col h-[445.2px] items-start overflow-clip p-[0.8px] relative rounded-[inherit] w-[220px]">
        <Container27 />
        <Container31 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(78,89,104,0.3)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function ImageWithFallback5() {
  return (
    <div className="absolute h-[327.6px] left-0 top-0 w-[218.4px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback4} />
    </div>
  );
}

function Badge4() {
  return (
    <div className="absolute bg-[#4e5968] box-border content-stretch flex gap-[4px] h-[19.988px] items-center justify-center left-[8px] overflow-clip px-[8px] py-[2px] rounded-[6.8px] top-[8px] w-[41.225px]" data-name="Badge">
      <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[16px] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        15세
      </p>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[327.6px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <ImageWithFallback5 />
      <Badge4 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-2.2px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        더 아이즈 오브 주드
      </p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[20px] left-0 text-[#4e5968] text-[14px] text-nowrap top-[-1.2px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        스릴러
      </p>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2c876580} fill="var(--fill-0, #FBB343)" id="Vector" stroke="var(--stroke-0, #FBB343)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[7.713px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[7.713px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#fbb343] text-[14px] text-nowrap top-[-1.2px] whitespace-pre">8</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[20px] relative shrink-0 w-[27.712px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center relative w-[27.712px]">
        <Icon12 />
        <Text10 />
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_61_2142)" id="Icon">
          <path d="M8 4V8L10.6667 9.33333" id="Vector" stroke="var(--stroke-0, #4E5968)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p39ee6532} id="Vector_2" stroke="var(--stroke-0, #4E5968)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_61_2142">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text11() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[20px] left-0 text-[#4e5968] text-[14px] top-[-1.2px] w-[38px]" style={{ fontVariationSettings: "'wght' 400" }}>
          135분
        </p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[20px] relative shrink-0 w-[57.138px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center relative w-[57.138px]">
        <Icon13 />
        <Text11 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[20px] items-center justify-between relative w-full">
          <Container33 />
          <Container34 />
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[116px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[116px] items-start pb-0 pt-[16px] px-[16px] relative w-full">
          <Heading7 />
          <Paragraph7 />
          <Container35 />
        </div>
      </div>
    </div>
  );
}

function MovieCard4() {
  return (
    <div className="absolute bg-[#1a1f26] h-[445.2px] left-[944px] rounded-[10px] top-0 w-[220px]" data-name="MovieCard">
      <div className="box-border content-stretch flex flex-col h-[445.2px] items-start overflow-clip p-[0.8px] relative rounded-[inherit] w-[220px]">
        <Container32 />
        <Container36 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(78,89,104,0.3)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute h-[461.2px] left-[48px] overflow-clip top-0 w-[1280px]" data-name="Container">
      <MovieCard />
      <MovieCard1 />
      <MovieCard2 />
      <MovieCard3 />
      <MovieCard4 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 12">
            <path d={svgPaths.p3a0d2780} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-[#242a32] box-border content-stretch flex flex-col items-start left-0 pb-[0.8px] pt-[10.8px] px-[10.8px] rounded-[2.68435e+07px] size-[41.6px] top-[209.8px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(78,89,104,0.5)] border-solid inset-0 pointer-events-none rounded-[2.68435e+07px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <Icon14 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 12">
            <path d={svgPaths.p324d0480} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute bg-[#242a32] box-border content-stretch flex flex-col items-start left-[1334.4px] pb-[0.8px] pt-[10.8px] px-[10.8px] rounded-[2.68435e+07px] size-[41.6px] top-[209.8px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(78,89,104,0.5)] border-solid inset-0 pointer-events-none rounded-[2.68435e+07px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <Icon15 />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute h-[461.2px] left-0 top-[72px] w-[1376px]" data-name="Container">
      <Container37 />
      <Button7 />
      <Button8 />
    </div>
  );
}

function Section() {
  return (
    <div className="h-[593.2px] relative shrink-0 w-full" data-name="Section">
      <Container11 />
      <Button6 />
      <Container38 />
    </div>
  );
}

function Container39() {
  return <div className="absolute h-[159.988px] left-[0.8px] opacity-0 top-[0.8px] w-[327.4px]" data-name="Container" />;
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p23b62300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M8.16667 3.5V24.5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M3.5 8.75H8.16667" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M3.5 14H24.5" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M3.5 19.25H8.16667" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M19.8333 3.5V24.5" id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M19.8333 8.75H24.5" id="Vector_7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M19.8333 19.25H24.5" id="Vector_8" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center left-[111.7px] rounded-[2.68435e+07px] size-[56px] top-0" data-name="Container">
      <Icon16 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="absolute h-[24px] left-0 top-[68px] w-[279.4px]" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-[139.89px] text-[16px] text-center text-nowrap text-white top-[-2.2px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        빠른 예매
      </p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute content-stretch flex h-[15.988px] items-start left-0 top-[96px] w-[279.4px]" data-name="Paragraph">
      <p className="basis-0 font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#4e5968] text-[12px] text-center" style={{ fontVariationSettings: "'wght' 400" }}>
        바로 예매하기
      </p>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute h-[111.988px] left-[24.8px] top-[24.8px] w-[279.4px]" data-name="Container">
      <Container40 />
      <Heading8 />
      <Paragraph8 />
    </div>
  );
}

function Container42() {
  return (
    <div className="[grid-area:1_/_1] h-[161.588px] relative rounded-[16.4px] shrink-0" data-name="Container">
      <div className="h-[161.588px] overflow-clip relative rounded-[inherit] w-full">
        <Container39 />
        <Container41 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(78,89,104,0.4)] border-solid inset-0 pointer-events-none rounded-[16.4px]" />
    </div>
  );
}

function Container43() {
  return <div className="absolute h-[159.988px] left-[0.8px] opacity-0 top-[0.8px] w-[327.4px]" data-name="Container" />;
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p3a419000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center left-[111.7px] rounded-[2.68435e+07px] size-[56px] top-0" data-name="Container">
      <Icon17 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="absolute h-[24px] left-0 top-[68px] w-[279.4px]" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-[139.7px] text-[16px] text-center text-nowrap text-white top-[-2.2px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        상영시간표
      </p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute content-stretch flex h-[15.988px] items-start left-0 top-[96px] w-[279.4px]" data-name="Paragraph">
      <p className="basis-0 font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#4e5968] text-[12px] text-center" style={{ fontVariationSettings: "'wght' 400" }}>
        시간 확인하기
      </p>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute h-[111.988px] left-[24.8px] top-[24.8px] w-[279.4px]" data-name="Container">
      <Container44 />
      <Heading9 />
      <Paragraph9 />
    </div>
  );
}

function Container46() {
  return (
    <div className="[grid-area:1_/_2] h-[161.588px] relative rounded-[16.4px] shrink-0" data-name="Container">
      <div className="h-[161.588px] overflow-clip relative rounded-[inherit] w-full">
        <Container43 />
        <Container45 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(78,89,104,0.4)] border-solid inset-0 pointer-events-none rounded-[16.4px]" />
    </div>
  );
}

function Container47() {
  return <div className="absolute h-[159.988px] left-[0.8px] opacity-0 top-[0.8px] w-[327.4px]" data-name="Container" />;
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p6b46140} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p2227e100} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center left-[111.7px] rounded-[2.68435e+07px] size-[56px] top-0" data-name="Container">
      <Icon18 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="absolute h-[24px] left-0 top-[68px] w-[279.4px]" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-[139.89px] text-[16px] text-center text-nowrap text-white top-[-2.2px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        극장 찾기
      </p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute content-stretch flex h-[15.988px] items-start left-0 top-[96px] w-[279.4px]" data-name="Paragraph">
      <p className="basis-0 font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#4e5968] text-[12px] text-center" style={{ fontVariationSettings: "'wght' 400" }}>
        가까운 극장
      </p>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute h-[111.988px] left-[24.8px] top-[24.8px] w-[279.4px]" data-name="Container">
      <Container48 />
      <Heading10 />
      <Paragraph10 />
    </div>
  );
}

function Container50() {
  return (
    <div className="[grid-area:1_/_3] h-[161.588px] relative rounded-[16.4px] shrink-0" data-name="Container">
      <div className="h-[161.588px] overflow-clip relative rounded-[inherit] w-full">
        <Container47 />
        <Container49 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(78,89,104,0.4)] border-solid inset-0 pointer-events-none rounded-[16.4px]" />
    </div>
  );
}

function Container51() {
  return <div className="absolute h-[159.988px] left-[0.8px] opacity-0 top-[0.8px] w-[327.4px]" data-name="Container" />;
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p176fab00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center left-[111.7px] rounded-[2.68435e+07px] size-[56px] top-0" data-name="Container">
      <Icon19 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="absolute h-[24px] left-0 top-[68px] w-[279.4px]" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-[140.2px] text-[16px] text-center text-nowrap text-white top-[-2.2px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        멤버십
      </p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute content-stretch flex h-[15.988px] items-start left-0 top-[96px] w-[279.4px]" data-name="Paragraph">
      <p className="basis-0 font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#4e5968] text-[12px] text-center" style={{ fontVariationSettings: "'wght' 400" }}>
        혜택 보기
      </p>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute h-[111.988px] left-[24.8px] top-[24.8px] w-[279.4px]" data-name="Container">
      <Container52 />
      <Heading11 />
      <Paragraph11 />
    </div>
  );
}

function Container54() {
  return (
    <div className="[grid-area:1_/_4] h-[161.588px] relative rounded-[16.4px] shrink-0" data-name="Container">
      <div className="h-[161.588px] overflow-clip relative rounded-[inherit] w-full">
        <Container51 />
        <Container53 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(78,89,104,0.4)] border-solid inset-0 pointer-events-none rounded-[16.4px]" />
    </div>
  );
}

function Section1() {
  return (
    <div className="gap-[20px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[161.588px] relative shrink-0 w-full" data-name="Section">
      <Container42 />
      <Container46 />
      <Container50 />
      <Container54 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-2.2px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        진행 중인 이벤트
      </p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[20px] left-0 text-[#4e5968] text-[14px] text-nowrap top-[-1.2px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        특별한 혜택을 놓치지 마세요
      </p>
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[48px] relative shrink-0 w-[182.775px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[48px] items-start relative w-[182.775px]">
        <Heading12 />
        <Paragraph12 />
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="h-[36px] relative rounded-[6.8px] shrink-0 w-[89.6px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(78,89,104,0.4)] border-solid inset-0 pointer-events-none rounded-[6.8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[16.8px] py-[8.8px] relative w-[89.6px]">
        <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#4e5968] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
          전체보기
        </p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container55 />
      <Button9 />
    </div>
  );
}

function ImageWithFallback6() {
  return (
    <div className="h-[249.588px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback5} />
    </div>
  );
}

function Container57() {
  return (
    <div className="bg-[#242a32] content-stretch flex flex-col h-[249.588px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <ImageWithFallback6 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="basis-0 grow h-[48px] min-h-px min-w-px relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[48px] overflow-clip relative rounded-[inherit] w-full">
        <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-0 text-[16px] text-white top-[-2.2px] w-[322px]" style={{ fontVariationSettings: "'wght' 400" }}>
          세계 최초 블록 버스터 오리지널 사운드 리버스
        </p>
      </div>
    </div>
  );
}

function Badge5() {
  return (
    <div className="bg-[#fbb343] h-[21.587px] relative rounded-[6.8px] shrink-0 w-[64.438px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[21.587px] items-center justify-center overflow-clip px-[8.8px] py-[2.8px] relative rounded-[inherit] w-[64.438px]">
        <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#242a32] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
          1차 판매
        </p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6.8px]" />
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex h-[48px] items-start justify-between relative w-full">
          <Heading13 />
          <Badge5 />
        </div>
      </div>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[20px] left-0 text-[#4e5968] text-[14px] text-nowrap top-[-1.2px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        1차 티켓 판매 - 오리지널 사운드트랙과 함께하는 특별 상영회
      </p>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[77.438px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.988px] items-start relative w-[77.438px]">
        <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#4e5968] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
          2025.08.19(화)
        </p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[8.413px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.988px] items-start relative w-[8.413px]">
        <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#4e5968] text-[12px]">~</p>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[77.438px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.988px] items-start relative w-[77.438px]">
        <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#4e5968] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
          2025.11.30(토)
        </p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[15.988px] items-center justify-between pl-0 pr-[0.012px] py-0 relative w-full">
          <Text12 />
          <Text13 />
          <Text14 />
        </div>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[143.988px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[143.988px] items-start pb-0 pt-[20px] px-[20px] relative w-full">
          <Container58 />
          <Paragraph13 />
          <Container59 />
        </div>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute bg-[rgba(78,89,104,0.2)] h-[395.188px] left-0 rounded-[16.4px] top-0 w-[445.325px]" data-name="Container">
      <div className="box-border content-stretch flex flex-col h-[395.188px] items-start overflow-clip p-[0.8px] relative rounded-[inherit] w-[445.325px]">
        <Container57 />
        <Container60 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(78,89,104,0.3)] border-solid inset-0 pointer-events-none rounded-[16.4px]" />
    </div>
  );
}

function ImageWithFallback7() {
  return (
    <div className="h-[249.6px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback6} />
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute bg-[#242a32] content-stretch flex flex-col h-[249.6px] items-start left-[0.8px] overflow-clip top-[0.8px] w-[443.738px]" data-name="Container">
      <ImageWithFallback7 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="h-[48px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-0 text-[16px] text-white top-[-2.2px] w-[397px]" style={{ fontVariationSettings: "'wght' 400" }}>
        겨울에 가족과 함께 영화 보고 조식은 모스트 이벤트 당첨 이벤트
      </p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[20px] left-0 text-[#4e5968] text-[14px] text-nowrap top-[-1.2px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        가족과 함께 영화를 관람하고 경품 추첨에 응모하세요
      </p>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[77.438px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.988px] items-start relative w-[77.438px]">
        <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#4e5968] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
          2025.02.01(토)
        </p>
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[8.413px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.988px] items-start relative w-[8.413px]">
        <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#4e5968] text-[12px]">~</p>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[77.438px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.988px] items-start relative w-[77.438px]">
        <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#4e5968] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
          2025.02.21(금)
        </p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[15.988px] items-center justify-between relative w-full">
          <Text15 />
          <Text16 />
          <Text17 />
        </div>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[143.988px] items-start left-[0.8px] pb-0 pt-[20px] px-[20px] top-[250.4px] w-[443.738px]" data-name="Container">
      <Heading14 />
      <Paragraph14 />
      <Container63 />
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute bg-[rgba(78,89,104,0.2)] h-[395.188px] left-[465.33px] rounded-[16.4px] top-0 w-[445.337px]" data-name="Container">
      <div className="h-[395.188px] overflow-clip relative rounded-[inherit] w-[445.337px]">
        <Container62 />
        <Container64 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(78,89,104,0.3)] border-solid inset-0 pointer-events-none rounded-[16.4px]" />
    </div>
  );
}

function ImageWithFallback8() {
  return (
    <div className="h-[249.6px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback7} />
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute bg-[#242a32] content-stretch flex flex-col h-[249.6px] items-start left-[0.8px] overflow-clip top-[0.8px] w-[443.738px]" data-name="Container">
      <ImageWithFallback8 />
    </div>
  );
}

function Heading15() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-2.2px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>{`<헤레티> 특별 증정 이벤트`}</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[20px] left-0 text-[#4e5968] text-[14px] text-nowrap top-[-1.2px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        영화 관람 후 한정판 굿즈를 받아가세요
      </p>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[77.438px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.988px] items-start relative w-[77.438px]">
        <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#4e5968] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
          2025.01.04(토)
        </p>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[8.413px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.988px] items-start relative w-[8.413px]">
        <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#4e5968] text-[12px]">~</p>
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[77.438px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.988px] items-start relative w-[77.438px]">
        <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#4e5968] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
          2025.01.10(금)
        </p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex h-[15.988px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text18 />
      <Text19 />
      <Text20 />
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[119.988px] items-start left-[0.8px] pb-0 pt-[20px] px-[20px] top-[250.4px] w-[443.738px]" data-name="Container">
      <Heading15 />
      <Paragraph15 />
      <Container67 />
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute bg-[rgba(78,89,104,0.2)] h-[395.188px] left-[930.66px] rounded-[16.4px] top-0 w-[445.337px]" data-name="Container">
      <div className="h-[395.188px] overflow-clip relative rounded-[inherit] w-[445.337px]">
        <Container66 />
        <Container68 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(78,89,104,0.3)] border-solid inset-0 pointer-events-none rounded-[16.4px]" />
    </div>
  );
}

function Container70() {
  return (
    <div className="h-[395.188px] relative shrink-0 w-full" data-name="Container">
      <Container61 />
      <Container65 />
      <Container69 />
    </div>
  );
}

function Section2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[467.188px] items-start relative shrink-0 w-full" data-name="Section">
      <Container56 />
      <Container70 />
    </div>
  );
}

function Container71() {
  return (
    <div className="h-[1477.97px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[80px] h-[1477.97px] items-start pb-0 pt-[48px] px-[32px] relative w-full">
          <Section />
          <Section1 />
          <Section2 />
        </div>
      </div>
    </div>
  );
}

function CinepalsLogo() {
  return (
    <div className="h-[32px] opacity-80 overflow-clip relative shrink-0 w-full" data-name="CinepalsLogo">
      <div className="absolute inset-[28.57%_18.18%_21.43%_2.27%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 16">
          <path d={svgPaths.p208b6680} fill="var(--fill-0, #242A32)" id="Vector" opacity="0.2" />
        </svg>
      </div>
      <div className="absolute inset-[24.29%_19.09%_25.72%_1.36%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 16">
          <path d={svgPaths.p208b6680} fill="var(--fill-0, #FBB343)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[29.29%_97.05%_60.71%_-0.23%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <path d={svgPaths.p300cc500} fill="var(--fill-0, #242A32)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[59.28%_97.05%_30.72%_-0.23%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <path d={svgPaths.p300cc500} fill="var(--fill-0, #242A32)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[29.29%_17.5%_60.71%_79.32%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <path d={svgPaths.p300cc500} fill="var(--fill-0, #242A32)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[59.29%_17.5%_30.72%_79.32%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <path d={svgPaths.p300cc500} fill="var(--fill-0, #242A32)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[31.43%_22.73%_32.86%_3.64%]" data-name="Vector">
        <div className="absolute inset-[-1%_-0.15%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75 12">
            <path d={svgPaths.p24d38500} id="Vector" opacity="0.15" stroke="var(--stroke-0, #242A32)" strokeWidth="0.228551" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[27.14%_79.55%_70%_20.45%]" data-name="Vector">
        <div className="absolute inset-[-37.5%_-0.34px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2">
            <path d="M0.342827 0.342827V1.25703" id="Vector" opacity="0.3" stroke="var(--stroke-0, #242A32)" strokeLinecap="round" strokeWidth="0.685653" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[32.86%_79.55%_64.28%_20.45%]" data-name="Vector">
        <div className="absolute inset-[-37.5%_-0.34px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2">
            <path d="M0.342827 0.342827V1.25703" id="Vector" opacity="0.3" stroke="var(--stroke-0, #242A32)" strokeLinecap="round" strokeWidth="0.685653" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[38.57%_79.55%_58.57%_20.45%]" data-name="Vector">
        <div className="absolute inset-[-37.5%_-0.34px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2">
            <path d="M0.342827 0.342827V1.25703" id="Vector" opacity="0.3" stroke="var(--stroke-0, #242A32)" strokeLinecap="round" strokeWidth="0.685653" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[44.29%_79.55%_52.86%_20.45%]" data-name="Vector">
        <div className="absolute inset-[-37.5%_-0.34px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2">
            <path d="M0.342827 0.342827V1.25703" id="Vector" opacity="0.3" stroke="var(--stroke-0, #242A32)" strokeLinecap="round" strokeWidth="0.685653" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[47.14%] left-[20.45%] right-[79.55%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-37.5%_-0.34px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2">
            <path d="M0.342827 0.342827V1.25703" id="Vector" opacity="0.3" stroke="var(--stroke-0, #242A32)" strokeLinecap="round" strokeWidth="0.685653" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[55.71%_79.55%_41.43%_20.45%]" data-name="Vector">
        <div className="absolute inset-[-37.5%_-0.34px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2">
            <path d="M0.342827 0.342827V1.25703" id="Vector" opacity="0.3" stroke="var(--stroke-0, #242A32)" strokeLinecap="round" strokeWidth="0.685653" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[61.43%_79.55%_35.72%_20.45%]" data-name="Vector">
        <div className="absolute inset-[-37.5%_-0.34px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2">
            <path d="M0.342827 0.342827V1.25703" id="Vector" opacity="0.3" stroke="var(--stroke-0, #242A32)" strokeLinecap="round" strokeWidth="0.685653" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[67.14%_79.55%_30%_20.45%]" data-name="Vector">
        <div className="absolute inset-[-37.5%_-0.34px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2">
            <path d="M0.342827 0.342827V1.25703" id="Vector" opacity="0.3" stroke="var(--stroke-0, #242A32)" strokeLinecap="round" strokeWidth="0.685653" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[32.86%_93.64%_61.43%_4.55%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <path d={svgPaths.p3271f80} fill="var(--fill-0, #242A32)" id="Vector" opacity="0.15" />
        </svg>
      </div>
      <div className="absolute inset-[60%_93.64%_34.29%_4.55%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <path d={svgPaths.p3271f80} fill="var(--fill-0, #242A32)" id="Vector" opacity="0.15" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold inset-[28.57%_26.05%_33.93%_24.23%] leading-[normal] not-italic text-[#242a32] text-[10.056px] text-center text-nowrap whitespace-pre">CINEPALS</p>
      <div className="absolute inset-[65.71%_34.09%_34.29%_34.09%]" data-name="Vector">
        <div className="absolute bottom-[-0.18px] left-0 right-0 top-[-0.18px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 1">
            <path d="M0 0.182841H31.997" id="Vector" opacity="0.2" stroke="var(--stroke-0, #242A32)" strokeWidth="0.365682" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[32px] items-start pl-0 pr-[336.763px] py-0 relative w-full">
          <CinepalsLogo />
        </div>
      </div>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[20px] left-0 text-[#4e5968] text-[14px] text-nowrap top-[-1.2px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        최고의 영화 경험을 제공하는 Cinepals
      </p>
    </div>
  );
}

function Icon20() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[0.3%] left-0 right-0 top-[0.3%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p34903f00} fill="var(--fill-0, #4E5968)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[20px]">
        <Icon20 />
      </div>
    </div>
  );
}

function Icon21() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[9.36%] left-0 right-0 top-[9.36%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 17">
          <path d={svgPaths.p186b65f0} fill="var(--fill-0, #4E5968)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[20px]">
        <Icon21 />
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path d={svgPaths.p4dbc400} fill="var(--fill-0, #4E5968)" id="Vector" />
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[20px]">
        <Icon22 />
      </div>
    </div>
  );
}

function Icon23() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[14.77%] left-0 right-0 top-[14.77%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 15">
          <path d={svgPaths.p1137d700} fill="var(--fill-0, #4E5968)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[20px]">
        <Icon23 />
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex gap-[12px] h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[172px] items-start left-0 top-0 w-[437.325px]" data-name="Container">
      <Container72 />
      <Paragraph16 />
      <Container73 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-2.2px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        서비스
      </p>
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute content-stretch flex h-[18.4px] items-start left-0 top-[0.8px] w-[60.925px]" data-name="Link">
      <p className="basis-0 font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4e5968] text-[14px]" style={{ fontVariationSettings: "'wght' 400" }}>
        영화 예매
      </p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link4 />
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute content-stretch flex h-[18.4px] items-start left-0 top-[0.8px] w-[74.925px]" data-name="Link">
      <p className="basis-0 font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4e5968] text-[14px]" style={{ fontVariationSettings: "'wght' 400" }}>
        상영 시간표
      </p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link5 />
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute content-stretch flex h-[18.4px] items-start left-0 top-[0.8px] w-[60.925px]" data-name="Link">
      <p className="basis-0 font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4e5968] text-[14px]" style={{ fontVariationSettings: "'wght' 400" }}>
        극장 찾기
      </p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link6 />
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute content-stretch flex h-[18.4px] items-start left-0 top-[0.8px] w-[42px]" data-name="Link">
      <p className="basis-0 font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4e5968] text-[14px]" style={{ fontVariationSettings: "'wght' 400" }}>
        이벤트
      </p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link7 />
    </div>
  );
}

function Link8() {
  return (
    <div className="absolute content-stretch flex h-[18.4px] items-start left-0 top-[0.8px] w-[42px]" data-name="Link">
      <p className="basis-0 font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4e5968] text-[14px]" style={{ fontVariationSettings: "'wght' 400" }}>
        멤버십
      </p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link8 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[132px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
      <ListItem4 />
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[172px] items-start left-[469.33px] top-0 w-[437.337px]" data-name="Container">
      <Heading3 />
      <List />
    </div>
  );
}

function Heading16() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-2.2px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        고객지원
      </p>
    </div>
  );
}

function Link9() {
  return (
    <div className="absolute content-stretch flex h-[18.4px] items-start left-0 top-[0.8px] w-[56px]" data-name="Link">
      <p className="basis-0 font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4e5968] text-[14px]" style={{ fontVariationSettings: "'wght' 400" }}>
        공지사항
      </p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link9 />
    </div>
  );
}

function Link10() {
  return (
    <div className="absolute content-stretch flex h-[18.4px] items-start left-0 top-[0.8px] w-[93.85px]" data-name="Link">
      <p className="basis-0 font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4e5968] text-[14px]" style={{ fontVariationSettings: "'wght' 400" }}>
        자주 묻는 질문
      </p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link10 />
    </div>
  );
}

function Link11() {
  return (
    <div className="absolute content-stretch flex h-[18.4px] items-start left-0 top-[0.8px] w-[51.413px]" data-name="Link">
      <p className="basis-0 font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4e5968] text-[14px]" style={{ fontVariationSettings: "'wght' 400" }}>
        1:1 문의
      </p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link11 />
    </div>
  );
}

function Link12() {
  return (
    <div className="absolute content-stretch flex h-[18.4px] items-start left-0 top-[0.8px] w-[74.925px]" data-name="Link">
      <p className="basis-0 font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4e5968] text-[14px]" style={{ fontVariationSettings: "'wght' 400" }}>
        분실물 센터
      </p>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link12 />
    </div>
  );
}

function Link13() {
  return (
    <div className="absolute content-stretch flex h-[18.4px] items-start left-0 top-[0.8px] w-[93.85px]" data-name="Link">
      <p className="basis-0 font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4e5968] text-[14px]" style={{ fontVariationSettings: "'wght' 400" }}>
        단체 관람 문의
      </p>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link13 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[132px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem5 />
      <ListItem6 />
      <ListItem7 />
      <ListItem8 />
      <ListItem9 />
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[172px] items-start left-[938.66px] top-0 w-[437.337px]" data-name="Container">
      <Heading16 />
      <List1 />
    </div>
  );
}

function Heading17() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-2.2px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        회사 정보
      </p>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[20px] left-0 text-[#4e5968] text-[14px] text-nowrap top-[-1.2px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        고객센터: 1544-0000
      </p>
    </div>
  );
}

function ListItem11() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[20px] left-0 text-[#4e5968] text-[14px] text-nowrap top-[-1.2px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        이메일: support@cinepals.com
      </p>
    </div>
  );
}

function ListItem12() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[20px] left-0 text-[#4e5968] text-[14px] text-nowrap top-[-1.2px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        운영시간: 09:00 - 22:00
      </p>
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[76px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem10 />
      <ListItem11 />
      <ListItem12 />
    </div>
  );
}

function Link14() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Link">
      <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[20px] left-0 text-[#4e5968] text-[14px] text-nowrap top-[-1.2px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        이용약관
      </p>
    </div>
  );
}

function Link15() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Link">
      <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[20px] left-0 text-[#4e5968] text-[14px] text-nowrap top-[-1.2px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        개인정보처리방침
      </p>
    </div>
  );
}

function Link16() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Link">
      <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[20px] left-0 text-[#4e5968] text-[14px] text-nowrap top-[-1.2px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        법적고지
      </p>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[76px] items-start relative shrink-0 w-full" data-name="Container">
      <Link14 />
      <Link15 />
      <Link16 />
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[208px] items-start left-0 top-[204px] w-[437.325px]" data-name="Container">
      <Heading17 />
      <List2 />
      <Container77 />
    </div>
  );
}

function Container79() {
  return (
    <div className="h-[412px] relative shrink-0 w-full" data-name="Container">
      <Container74 />
      <Container75 />
      <Container76 />
      <Container78 />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[39px] relative shrink-0 w-[413.363px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] h-[39px] leading-[19.5px] relative text-[#4e5968] text-[12px] text-nowrap w-[413.363px] whitespace-pre">
        <p className="absolute left-0 top-[-1.4px]" style={{ fontVariationSettings: "'wght' 400" }}>
          (주)시네팔스 | 대표이사: 홍길동 | 사업자등록번호: 123-45-67890
        </p>
        <p className="absolute left-0 top-[18.1px]" style={{ fontVariationSettings: "'wght' 400" }}>
          서울특별시 강남구 테헤란로 123 | 통신판매업신고번호: 2024-서울강남-0000
        </p>
      </div>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[31.975px] relative shrink-0 w-[171.55px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border font-['Arial:Regular',sans-serif] h-[31.975px] leading-[16px] not-italic relative text-[#4e5968] text-[12px] text-nowrap text-right w-[171.55px] whitespace-pre">
        <p className="absolute left-[172px] top-[-1px] translate-x-[-100%]">Copyright © 2025 Cinepals Inc.</p>
        <p className="absolute left-[172.3px] top-[14.99px] translate-x-[-100%]">ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex h-[39px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Paragraph17 />
      <Paragraph18 />
    </div>
  );
}

function Container81() {
  return (
    <div className="box-border content-stretch flex flex-col h-[63.8px] items-start pb-0 pt-[24.8px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px_0px_0px] border-[rgba(78,89,104,0.2)] border-solid inset-0 pointer-events-none" />
      <Container80 />
    </div>
  );
}

function Footer() {
  return (
    <div className="h-[635.8px] relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[0.8px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] h-[635.8px] items-start pb-0 pt-[64px] px-[32px] relative w-full">
          <Container79 />
          <Container81 />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-[#242a32] box-border content-stretch flex flex-col h-[2898.57px] items-start left-0 pb-0 pt-[88px] px-0 top-0 w-[1440px]" data-name="App">
      <MovieSlider />
      <Container71 />
      <Footer />
    </div>
  );
}

function CinepalsLogo1() {
  return (
    <div className="h-[56px] relative shrink-0 w-[176px]" data-name="CinepalsLogo">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[56px] overflow-clip relative rounded-[inherit] w-[176px]">
        <div className="absolute inset-[28.57%_18.18%_21.43%_2.27%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140 28">
            <path d={svgPaths.p100c400} fill="var(--fill-0, #242A32)" id="Vector" opacity="0.2" />
          </svg>
        </div>
        <div className="absolute inset-[24.29%_19.09%_25.71%_1.36%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140 28">
            <path d={svgPaths.p100c400} fill="var(--fill-0, #FBB343)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[29.29%_97.05%_60.71%_-0.23%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p1b868e00} fill="var(--fill-0, #242A32)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[59.29%_97.05%_30.71%_-0.23%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p1b868e00} fill="var(--fill-0, #242A32)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[29.29%_17.5%_60.71%_79.32%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p1b868e00} fill="var(--fill-0, #242A32)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[59.29%_17.5%_30.71%_79.32%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p1b868e00} fill="var(--fill-0, #242A32)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[31.43%_22.73%_32.86%_3.64%]" data-name="Vector">
          <div className="absolute inset-[-1%_-0.15%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 130 21">
              <path d={svgPaths.pb533280} id="Vector" opacity="0.15" stroke="var(--stroke-0, #242A32)" strokeWidth="0.4" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[27.14%_79.55%_70%_20.45%]" data-name="Vector">
          <div className="absolute inset-[-37.5%_-0.6px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 3">
              <path d="M0.6 0.6V2.2" id="Vector" opacity="0.3" stroke="var(--stroke-0, #242A32)" strokeLinecap="round" strokeWidth="1.2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[32.86%_79.55%_64.29%_20.45%]" data-name="Vector">
          <div className="absolute inset-[-37.5%_-0.6px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 3">
              <path d="M0.6 0.6V2.2" id="Vector" opacity="0.3" stroke="var(--stroke-0, #242A32)" strokeLinecap="round" strokeWidth="1.2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[38.57%_79.55%_58.57%_20.45%]" data-name="Vector">
          <div className="absolute inset-[-37.5%_-0.6px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 3">
              <path d="M0.6 0.6V2.2" id="Vector" opacity="0.3" stroke="var(--stroke-0, #242A32)" strokeLinecap="round" strokeWidth="1.2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[44.29%_79.55%_52.86%_20.45%]" data-name="Vector">
          <div className="absolute inset-[-37.5%_-0.6px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 3">
              <path d="M0.6 0.6V2.2" id="Vector" opacity="0.3" stroke="var(--stroke-0, #242A32)" strokeLinecap="round" strokeWidth="1.2" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[47.14%] left-[20.45%] right-[79.55%] top-1/2" data-name="Vector">
          <div className="absolute inset-[-37.5%_-0.6px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 3">
              <path d="M0.6 0.6V2.2" id="Vector" opacity="0.3" stroke="var(--stroke-0, #242A32)" strokeLinecap="round" strokeWidth="1.2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[55.71%_79.55%_41.43%_20.45%]" data-name="Vector">
          <div className="absolute inset-[-37.5%_-0.6px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 3">
              <path d="M0.6 0.6V2.2" id="Vector" opacity="0.3" stroke="var(--stroke-0, #242A32)" strokeLinecap="round" strokeWidth="1.2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[61.43%_79.55%_35.71%_20.45%]" data-name="Vector">
          <div className="absolute inset-[-37.5%_-0.6px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 3">
              <path d="M0.6 0.6V2.2" id="Vector" opacity="0.3" stroke="var(--stroke-0, #242A32)" strokeLinecap="round" strokeWidth="1.2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[67.14%_79.55%_30%_20.45%]" data-name="Vector">
          <div className="absolute inset-[-37.5%_-0.6px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 3">
              <path d="M0.6 0.6V2.2" id="Vector" opacity="0.3" stroke="var(--stroke-0, #242A32)" strokeLinecap="round" strokeWidth="1.2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[32.86%_93.64%_61.43%_4.55%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.p22c51b00} fill="var(--fill-0, #242A32)" id="Vector" opacity="0.15" />
          </svg>
        </div>
        <div className="absolute inset-[60%_93.64%_34.29%_4.55%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.p22c51b00} fill="var(--fill-0, #242A32)" id="Vector" opacity="0.15" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold inset-[28.57%_25.34%_33.93%_25.23%] leading-[normal] not-italic text-[#242a32] text-[17.6px] text-center text-nowrap whitespace-pre">CINEPALS</p>
        <div className="absolute inset-[65.71%_34.09%_34.29%_34.09%]" data-name="Vector">
          <div className="absolute bottom-[-0.32px] left-0 right-0 top-[-0.32px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 1">
              <path d="M0 0.32H56" id="Vector" opacity="0.2" stroke="var(--stroke-0, #242A32)" strokeWidth="0.64" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Link17() {
  return (
    <div className="h-[24px] relative shrink-0 w-[32px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[32px]">
        <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-2.2px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
          영화
        </p>
      </div>
    </div>
  );
}

function Link18() {
  return (
    <div className="h-[24px] relative shrink-0 w-[32px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[32px]">
        <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-2.2px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
          예매
        </p>
      </div>
    </div>
  );
}

function Link19() {
  return (
    <div className="h-[24px] relative shrink-0 w-[32px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[32px]">
        <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-2.2px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
          극장
        </p>
      </div>
    </div>
  );
}

function Link20() {
  return (
    <div className="h-[24px] relative shrink-0 w-[48px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[48px]">
        <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-2.2px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
          이벤트
        </p>
      </div>
    </div>
  );
}

function Link21() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-2.2px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
          커뮤니티
        </p>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="h-[24px] relative shrink-0 w-[336px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[32px] h-[24px] items-center relative w-[336px]">
        <Link17 />
        <Link18 />
        <Link19 />
        <Link20 />
        <Link21 />
      </div>
    </div>
  );
}

function Icon24() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[69.42%_12.5%_12.5%_69.42%]" data-name="Vector">
        <div className="absolute inset-[-23.04%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d="M4.45 4.45L0.833333 0.833333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_20.83%_20.83%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <path d={svgPaths.p32110270} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[36px]">
        <Icon24 />
      </div>
    </div>
  );
}

function Icon25() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[62.5%_20.83%_12.5%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 7">
            <path d={svgPaths.p6877e0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_33.33%_54.17%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
            <path d={svgPaths.p3ffa2780} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[36px]">
        <Icon25 />
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="basis-0 bg-[#fbb343] grow h-[36px] min-h-px min-w-px relative rounded-[6.8px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[16px] py-[8px] relative w-full">
          <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#242a32] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
            회원가입
          </p>
        </div>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="h-[36px] relative shrink-0 w-[184px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[36px] items-center relative w-[184px]">
        <Button10 />
        <Button11 />
        <Button12 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex h-[56px] items-center justify-between left-[32px] top-[16px] w-[1376px]" data-name="Header">
      <CinepalsLogo1 />
      <Navigation />
      <Container82 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="영화 및 이벤트 웹페이지">
      <App />
      <Header />
    </div>
  );
}