import svgPaths from "./svg-9zf9ltz9z";
import imgImageWithFallback from "figma:asset/fb453698f72e2352ebd6346e0a6fcdc2a9d1097e.png";
import imgImageWithFallback1 from "figma:asset/e54ff586857a6f3e3e9d44d9c51301408f79c4f5.png";
import imgImageWithFallback2 from "figma:asset/17d555c3959c637a410d1f8fac1ef5885d44504c.png";
import imgImageWithFallback3 from "figma:asset/d2b8e97590e5d87fb2f4f717cc4eeae10ec3a194.png";
import imgImageWithFallback4 from "figma:asset/2e1de7b884691b28dcac177c6d401d7b948adc55.png";
import imgImageWithFallback5 from "figma:asset/a9303ab0aa4c5652774332510b58a6c2eb58f258.png";
import imgImageWithFallback6 from "figma:asset/65e4e736c77b714ba8cc5bc97e0f37ae6392c718.png";
import imgImageWithFallback7 from "figma:asset/7abae6004b038f2cc645a39dd8902c3d35f36150.png";
import imgImageWithFallback8 from "figma:asset/d04c703f125b001a647e206bb25dc08932f5fa1a.png";

function Container() {
  return <div className="absolute h-[88.892px] left-0 top-0 w-[1362.73px]" data-name="Container" />;
}

function Heading1() {
  return (
    <div className="h-[23.991px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-2.09px] whitespace-pre">상영 중인 영화</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4e5968] text-[14px]">지금 극장에서 만나보세요</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[47.983px] relative shrink-0 w-[163.849px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.991px] h-[47.983px] items-start relative w-[163.849px]">
        <Heading1 />
        <Paragraph />
      </div>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="basis-0 bg-[rgba(78,89,104,0.5)] grow h-[27.173px] min-h-px min-w-px relative rounded-[16.4px] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[16.4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[27.173px] items-center justify-center px-[8.909px] py-[4.909px] relative w-full">
          <p className="font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">최근 개봉</p>
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="basis-0 grow h-[27.173px] min-h-px min-w-px relative rounded-[16.4px] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[16.4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[27.173px] items-center justify-center px-[8.909px] py-[4.909px] relative w-full">
          <p className="font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">개봉 예정</p>
        </div>
      </div>
    </div>
  );
}

function PrimitiveDiv() {
  return (
    <div className="bg-[rgba(78,89,104,0.2)] h-[35.994px] relative rounded-[16.4px] shrink-0 w-[165.284px]" data-name="Primitive.div">
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(78,89,104,0.4)] border-solid inset-0 pointer-events-none rounded-[16.4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[35.994px] items-center justify-center p-[0.909px] relative w-[165.284px]">
        <PrimitiveButton />
        <PrimitiveButton1 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex h-[47.983px] items-center justify-between left-0 top-0 w-[1298.75px]" data-name="Container">
      <Container1 />
      <PrimitiveDiv />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[35.994px] left-[611.46px] rounded-[6.8px] top-[557.02px] w-[75.81px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(78,89,104,0.4)] border-solid inset-0 pointer-events-none rounded-[6.8px]" />
      <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-[16.9px] text-[#4e5968] text-[14px] text-nowrap top-[6px] whitespace-pre">더보기</p>
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="absolute h-[327.273px] left-0 top-0 w-[218.182px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute bg-[#4e5968] box-border content-stretch flex gap-[4px] h-[19.972px] items-center justify-center left-[8px] overflow-clip px-[8px] py-[2px] rounded-[6.8px] top-[8px] w-[41.222px]" data-name="Badge">
      <p className="font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">12세</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[327.273px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <ImageWithFallback />
      <Badge />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[23.991px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-2.09px] whitespace-pre">대양으로의 모험</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4e5968] text-[14px]">SF/액션</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_47_2114)" id="Icon">
          <path d={svgPaths.p354f6d00} fill="var(--fill-0, #FBB343)" id="Vector" stroke="var(--stroke-0, #FBB343)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
        <defs>
          <clipPath id="clip0_47_2114">
            <rect fill="white" height="15.9943" width="15.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18.494px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[18.494px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#fbb343] text-[14px] text-nowrap whitespace-pre">8.5</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[38.48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.991px] h-[20px] items-center relative w-[38.48px]">
        <Icon />
        <Text />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_47_2194)" id="Icon">
          <path d={svgPaths.p1ffb2e00} id="Vector" stroke="var(--stroke-0, #4E5968)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p2e209400} id="Vector_2" stroke="var(--stroke-0, #4E5968)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
        <defs>
          <clipPath id="clip0_47_2194">
            <rect fill="white" height="15.9943" width="15.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4e5968] text-[14px] top-[-2px] w-[38px]">148분</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[57.131px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.991px] h-[20px] items-center relative w-[57.131px]">
        <Icon1 />
        <Text1 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[115.966px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[7.997px] h-[115.966px] items-start pb-0 pt-[15.994px] px-[15.994px] relative w-full">
          <Heading2 />
          <Paragraph1 />
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function MovieCard() {
  return (
    <div className="absolute bg-[#1a1f26] h-[445.057px] left-0 rounded-[10px] top-0 w-[220px]" data-name="MovieCard">
      <div className="box-border content-stretch flex flex-col h-[445.057px] items-start overflow-clip p-[0.909px] relative rounded-[inherit] w-[220px]">
        <Container3 />
        <Container7 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(78,89,104,0.3)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="absolute h-[327.273px] left-0 top-0 w-[218.182px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute bg-[#4e5968] box-border content-stretch flex gap-[4px] h-[19.972px] items-center justify-center left-[8px] overflow-clip px-[8px] py-[2px] rounded-[6.8px] top-[8px] w-[40px]" data-name="Badge">
      <p className="font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">전체</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[327.273px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <ImageWithFallback1 />
      <Badge1 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[23.991px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-2.09px] whitespace-pre">베를린에서의 겨울</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4e5968] text-[14px]">로맨스/드라마</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_47_2114)" id="Icon">
          <path d={svgPaths.p354f6d00} fill="var(--fill-0, #FBB343)" id="Vector" stroke="var(--stroke-0, #FBB343)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
        <defs>
          <clipPath id="clip0_47_2114">
            <rect fill="white" height="15.9943" width="15.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18.494px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[18.494px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#fbb343] text-[14px] text-nowrap whitespace-pre">7.2</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[38.48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.991px] h-[20px] items-center relative w-[38.48px]">
        <Icon2 />
        <Text2 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_47_2194)" id="Icon">
          <path d={svgPaths.p1ffb2e00} id="Vector" stroke="var(--stroke-0, #4E5968)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p2e209400} id="Vector_2" stroke="var(--stroke-0, #4E5968)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
        <defs>
          <clipPath id="clip0_47_2194">
            <rect fill="white" height="15.9943" width="15.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[37.145px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[37.145px]">
        <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4e5968] text-[14px] top-[-2px] w-[38px]">120분</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[57.131px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.991px] h-[20px] items-center relative w-[57.131px]">
        <Icon3 />
        <Text3 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[115.966px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[7.997px] h-[115.966px] items-start pb-0 pt-[15.994px] px-[15.994px] relative w-full">
          <Heading4 />
          <Paragraph2 />
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function MovieCard1() {
  return (
    <div className="absolute bg-[#1a1f26] h-[445.057px] left-[235.99px] rounded-[10px] top-0 w-[220px]" data-name="MovieCard">
      <div className="box-border content-stretch flex flex-col h-[445.057px] items-start overflow-clip p-[0.909px] relative rounded-[inherit] w-[220px]">
        <Container8 />
        <Container12 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(78,89,104,0.3)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="absolute h-[327.273px] left-0 top-0 w-[218.182px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute bg-[#4e5968] box-border content-stretch flex gap-[4px] h-[19.972px] items-center justify-center left-[8px] overflow-clip px-[8px] py-[2px] rounded-[6.8px] top-[8px] w-[41.222px]" data-name="Badge">
      <p className="font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">15세</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[327.273px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <ImageWithFallback2 />
      <Badge2 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[23.991px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-2.09px] whitespace-pre">더 블레이드</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4e5968] text-[14px]">액션/스릴러</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_47_2149)" id="Icon">
          <path d={svgPaths.p68a5740} fill="var(--fill-0, #FBB343)" id="Vector" stroke="var(--stroke-0, #FBB343)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
        <defs>
          <clipPath id="clip0_47_2149">
            <rect fill="white" height="15.9943" width="15.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18.494px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[18.494px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#fbb343] text-[14px] text-nowrap whitespace-pre">8.5</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[20px] relative shrink-0 w-[38.48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.991px] h-[20px] items-center relative w-[38.48px]">
        <Icon4 />
        <Text4 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_47_2194)" id="Icon">
          <path d={svgPaths.p1ffb2e00} id="Vector" stroke="var(--stroke-0, #4E5968)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p2e209400} id="Vector_2" stroke="var(--stroke-0, #4E5968)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
        <defs>
          <clipPath id="clip0_47_2194">
            <rect fill="white" height="15.9943" width="15.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[37.145px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[37.145px]">
        <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4e5968] text-[14px] top-[-2px] w-[38px]">115분</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[20px] relative shrink-0 w-[57.131px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.991px] h-[20px] items-center relative w-[57.131px]">
        <Icon5 />
        <Text5 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[115.966px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[7.997px] h-[115.966px] items-start pb-0 pt-[15.994px] px-[15.994px] relative w-full">
          <Heading5 />
          <Paragraph3 />
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function MovieCard2() {
  return (
    <div className="absolute bg-[#1a1f26] h-[445.057px] left-[471.99px] rounded-[10px] top-0 w-[220px]" data-name="MovieCard">
      <div className="box-border content-stretch flex flex-col h-[445.057px] items-start overflow-clip p-[0.909px] relative rounded-[inherit] w-[220px]">
        <Container13 />
        <Container17 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(78,89,104,0.3)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function ImageWithFallback3() {
  return (
    <div className="absolute h-[327.273px] left-0 top-0 w-[218.182px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback3} />
    </div>
  );
}

function Badge3() {
  return (
    <div className="absolute bg-[#4e5968] box-border content-stretch flex gap-[4px] h-[19.972px] items-center justify-center left-[8px] overflow-clip px-[8px] py-[2px] rounded-[6.8px] top-[8px] w-[41.222px]" data-name="Badge">
      <p className="font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">12세</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[327.273px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <ImageWithFallback3 />
      <Badge3 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[23.991px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-2.09px] whitespace-pre">너 더 무비</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4e5968] text-[14px]">드라마</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_47_2149)" id="Icon">
          <path d={svgPaths.p68a5740} fill="var(--fill-0, #FBB343)" id="Vector" stroke="var(--stroke-0, #FBB343)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
        <defs>
          <clipPath id="clip0_47_2149">
            <rect fill="white" height="15.9943" width="15.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[7.713px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[7.713px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#fbb343] text-[14px] text-nowrap whitespace-pre">9</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[20px] relative shrink-0 w-[27.699px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.991px] h-[20px] items-center relative w-[27.699px]">
        <Icon6 />
        <Text6 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_47_2194)" id="Icon">
          <path d={svgPaths.p1ffb2e00} id="Vector" stroke="var(--stroke-0, #4E5968)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p2e209400} id="Vector_2" stroke="var(--stroke-0, #4E5968)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
        <defs>
          <clipPath id="clip0_47_2194">
            <rect fill="white" height="15.9943" width="15.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[37.145px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[37.145px]">
        <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4e5968] text-[14px] top-[-2px] w-[38px]">105분</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[20px] relative shrink-0 w-[57.131px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.992px] h-[20px] items-center relative w-[57.131px]">
        <Icon7 />
        <Text7 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[20px] items-center justify-between relative w-full">
          <Container19 />
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[115.966px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[7.997px] h-[115.966px] items-start pb-0 pt-[15.994px] px-[15.994px] relative w-full">
          <Heading6 />
          <Paragraph4 />
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function MovieCard3() {
  return (
    <div className="absolute bg-[#1a1f26] h-[445.057px] left-[707.98px] rounded-[10px] top-0 w-[220px]" data-name="MovieCard">
      <div className="box-border content-stretch flex flex-col h-[445.057px] items-start overflow-clip p-[0.909px] relative rounded-[inherit] w-[220px]">
        <Container18 />
        <Container22 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(78,89,104,0.3)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function ImageWithFallback4() {
  return (
    <div className="absolute h-[327.273px] left-0 top-0 w-[218.182px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback4} />
    </div>
  );
}

function Badge4() {
  return (
    <div className="absolute bg-[#4e5968] box-border content-stretch flex gap-[4px] h-[19.972px] items-center justify-center left-[8px] overflow-clip px-[8px] py-[2px] rounded-[6.8px] top-[8px] w-[41.222px]" data-name="Badge">
      <p className="font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">15세</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[327.273px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <ImageWithFallback4 />
      <Badge4 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[23.991px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-2.09px] whitespace-pre">더 아이즈 오브 주드</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4e5968] text-[14px]">스릴러</p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_47_2149)" id="Icon">
          <path d={svgPaths.p68a5740} fill="var(--fill-0, #FBB343)" id="Vector" stroke="var(--stroke-0, #FBB343)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
        <defs>
          <clipPath id="clip0_47_2149">
            <rect fill="white" height="15.9943" width="15.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[7.713px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[7.713px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#fbb343] text-[14px] text-nowrap whitespace-pre">8</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[20px] relative shrink-0 w-[27.699px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.992px] h-[20px] items-center relative w-[27.699px]">
        <Icon8 />
        <Text8 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_47_2194)" id="Icon">
          <path d={svgPaths.p1ffb2e00} id="Vector" stroke="var(--stroke-0, #4E5968)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p2e209400} id="Vector_2" stroke="var(--stroke-0, #4E5968)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
        <defs>
          <clipPath id="clip0_47_2194">
            <rect fill="white" height="15.9943" width="15.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[37.145px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[37.145px]">
        <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4e5968] text-[14px] top-[-2px] w-[38px]">135분</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[20px] relative shrink-0 w-[57.131px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.992px] h-[20px] items-center relative w-[57.131px]">
        <Icon9 />
        <Text9 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container24 />
      <Container25 />
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[115.966px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[7.997px] h-[115.966px] items-start pb-0 pt-[15.994px] px-[15.994px] relative w-full">
          <Heading7 />
          <Paragraph5 />
          <Container26 />
        </div>
      </div>
    </div>
  );
}

function MovieCard4() {
  return (
    <div className="absolute bg-[#1a1f26] h-[445.057px] left-[943.98px] rounded-[10px] top-0 w-[220px]" data-name="MovieCard">
      <div className="box-border content-stretch flex flex-col h-[445.057px] items-start overflow-clip p-[0.909px] relative rounded-[inherit] w-[220px]">
        <Container23 />
        <Container27 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(78,89,104,0.3)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute h-[461.051px] left-0 overflow-clip top-0 w-[1298.75px]" data-name="Container">
      <MovieCard />
      <MovieCard1 />
      <MovieCard2 />
      <MovieCard3 />
      <MovieCard4 />
    </div>
  );
}

function Icon10() {
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

function Button1() {
  return (
    <div className="absolute bg-[rgba(36,42,50,0.9)] box-border content-stretch flex flex-col items-start left-[-50px] opacity-0 pb-[0.909px] pt-[12.898px] px-[12.898px] rounded-[3.0504e+07px] size-[45.795px] top-[207.63px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(78,89,104,0.3)] border-solid inset-0 pointer-events-none rounded-[3.0504e+07px]" />
      <Icon10 />
    </div>
  );
}

function Icon11() {
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

function Button2() {
  return (
    <div className="absolute bg-[rgba(36,42,50,0.9)] box-border content-stretch flex flex-col items-start left-[1302.95px] opacity-0 pb-[0.909px] pt-[12.898px] px-[12.898px] rounded-[3.0504e+07px] size-[45.795px] top-[207.63px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(78,89,104,0.3)] border-solid inset-0 pointer-events-none rounded-[3.0504e+07px]" />
      <Icon11 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute h-[461.051px] left-0 top-[71.97px] w-[1298.75px]" data-name="Container">
      <Container28 />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Section() {
  return (
    <div className="h-[593.011px] relative shrink-0 w-full" data-name="Section">
      <Container2 />
      <Button />
      <Container29 />
    </div>
  );
}

function Container30() {
  return <div className="absolute h-[159.943px] left-[0.91px] opacity-0 top-[0.91px] w-[307.869px]" data-name="Container" />;
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[27.997px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p2e018f80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3331" />
          <path d="M8.16584 3.49964V24.4975" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3331" />
          <path d="M3.49964 8.74911H8.16584" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3331" />
          <path d="M3.49964 13.9986H24.4975" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3331" />
          <path d="M3.49964 19.248H8.16584" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3331" />
          <path d="M19.8313 3.49964V24.4975" id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3331" />
          <path d="M19.8313 8.74911H24.4975" id="Vector_7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3331" />
          <path d="M19.8313 19.248H24.4975" id="Vector_8" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3331" />
        </g>
      </svg>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] box-border content-stretch flex items-center justify-center left-[101.95px] pl-0 pr-[0.014px] py-0 rounded-[3.0504e+07px] size-[55.994px] top-0" data-name="Container">
      <Icon12 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="absolute h-[23.991px] left-0 top-[67.98px] w-[259.886px]" data-name="Heading 3">
      <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-[130.13px] text-[16px] text-center text-nowrap text-white top-[-2.09px] translate-x-[-50%] whitespace-pre">빠른 예매</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute content-stretch flex h-[15.994px] items-start left-0 top-[95.97px] w-[259.886px]" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#4e5968] text-[12px] text-center">바로 예매하기</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute h-[111.96px] left-[24.9px] top-[24.9px] w-[259.886px]" data-name="Container">
      <Container31 />
      <Heading8 />
      <Paragraph6 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute h-[161.761px] left-0 rounded-[16.4px] top-0 w-[309.688px]" data-name="Container">
      <div className="h-[161.761px] overflow-clip relative rounded-[inherit] w-[309.688px]">
        <Container30 />
        <Container32 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(78,89,104,0.4)] border-solid inset-0 pointer-events-none rounded-[16.4px]" />
    </div>
  );
}

function Container34() {
  return <div className="absolute h-[159.943px] left-[0.91px] opacity-0 top-[0.91px] w-[307.869px]" data-name="Container" />;
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[27.997px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p16b75600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3331" />
        </g>
      </svg>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] box-border content-stretch flex items-center justify-center left-[101.95px] pl-0 pr-[0.014px] py-0 rounded-[3.0504e+07px] size-[55.994px] top-0" data-name="Container">
      <Icon13 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="absolute h-[23.991px] left-0 top-[67.98px] w-[259.886px]" data-name="Heading 3">
      <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-[129.94px] text-[16px] text-center text-nowrap text-white top-[-2.09px] translate-x-[-50%] whitespace-pre">상영시간표</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute content-stretch flex h-[15.994px] items-start left-0 top-[95.97px] w-[259.886px]" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#4e5968] text-[12px] text-center">시간 확인하기</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute h-[111.96px] left-[24.9px] top-[24.9px] w-[259.886px]" data-name="Container">
      <Container35 />
      <Heading9 />
      <Paragraph7 />
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute h-[161.761px] left-[329.69px] rounded-[16.4px] top-0 w-[309.688px]" data-name="Container">
      <div className="h-[161.761px] overflow-clip relative rounded-[inherit] w-[309.688px]">
        <Container34 />
        <Container36 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(78,89,104,0.4)] border-solid inset-0 pointer-events-none rounded-[16.4px]" />
    </div>
  );
}

function Container38() {
  return <div className="absolute h-[159.943px] left-[0.91px] opacity-0 top-[0.91px] w-[307.869px]" data-name="Container" />;
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[27.997px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p2965a900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3331" />
          <path d={svgPaths.p32005d80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3331" />
        </g>
      </svg>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] box-border content-stretch flex items-center justify-center left-[101.95px] pl-0 pr-[0.014px] py-0 rounded-[3.0504e+07px] size-[55.994px] top-0" data-name="Container">
      <Icon14 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="absolute h-[23.991px] left-0 top-[67.98px] w-[259.886px]" data-name="Heading 3">
      <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-[130.13px] text-[16px] text-center text-nowrap text-white top-[-2.09px] translate-x-[-50%] whitespace-pre">극장 찾기</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute content-stretch flex h-[15.994px] items-start left-0 top-[95.97px] w-[259.886px]" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#4e5968] text-[12px] text-center">가까운 극장</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute h-[111.96px] left-[24.9px] top-[24.9px] w-[259.886px]" data-name="Container">
      <Container39 />
      <Heading10 />
      <Paragraph8 />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute h-[161.761px] left-[659.37px] rounded-[16.4px] top-0 w-[309.688px]" data-name="Container">
      <div className="h-[161.761px] overflow-clip relative rounded-[inherit] w-[309.688px]">
        <Container38 />
        <Container40 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(78,89,104,0.4)] border-solid inset-0 pointer-events-none rounded-[16.4px]" />
    </div>
  );
}

function Container42() {
  return <div className="absolute h-[159.943px] left-[0.91px] opacity-0 top-[0.91px] w-[307.869px]" data-name="Container" />;
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[27.997px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p311f4c00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3331" />
        </g>
      </svg>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] box-border content-stretch flex items-center justify-center left-[101.95px] pl-0 pr-[0.014px] py-0 rounded-[3.0504e+07px] size-[55.994px] top-0" data-name="Container">
      <Icon15 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="absolute h-[23.991px] left-0 top-[67.98px] w-[259.886px]" data-name="Heading 3">
      <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-[130.44px] text-[16px] text-center text-nowrap text-white top-[-2.09px] translate-x-[-50%] whitespace-pre">멤버십</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute content-stretch flex h-[15.994px] items-start left-0 top-[95.97px] w-[259.886px]" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#4e5968] text-[12px] text-center">혜택 보기</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute h-[111.96px] left-[24.9px] top-[24.9px] w-[259.886px]" data-name="Container">
      <Container43 />
      <Heading11 />
      <Paragraph9 />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute h-[161.761px] left-[989.06px] rounded-[16.4px] top-0 w-[309.688px]" data-name="Container">
      <div className="h-[161.761px] overflow-clip relative rounded-[inherit] w-[309.688px]">
        <Container42 />
        <Container44 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(78,89,104,0.4)] border-solid inset-0 pointer-events-none rounded-[16.4px]" />
    </div>
  );
}

function Section1() {
  return (
    <div className="h-[161.761px] relative shrink-0 w-full" data-name="Section">
      <Container33 />
      <Container37 />
      <Container41 />
      <Container45 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="h-[23.991px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-2.09px] whitespace-pre">진행 중인 이벤트</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4e5968] text-[14px]">특별한 혜택을 놓치지 마세요</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[47.983px] relative shrink-0 w-[182.77px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.991px] h-[47.983px] items-start relative w-[182.77px]">
        <Heading12 />
        <Paragraph10 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[35.994px] relative rounded-[6.8px] shrink-0 w-[89.815px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(78,89,104,0.4)] border-solid inset-0 pointer-events-none rounded-[6.8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[35.994px] items-center justify-center px-[16.909px] py-[8.909px] relative w-[89.815px]">
        <p className="font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4e5968] text-[14px] text-nowrap whitespace-pre">전체보기</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[47.983px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[47.983px] items-center justify-between relative w-full">
          <Container46 />
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function ImageWithFallback5() {
  return (
    <div className="h-[234.986px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback5} />
    </div>
  );
}

function Container48() {
  return (
    <div className="bg-[#242a32] content-stretch flex flex-col h-[234.986px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <ImageWithFallback5 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="basis-0 grow h-[47.983px] min-h-px min-w-px relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[47.983px] overflow-clip relative rounded-[inherit] w-full">
        <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-white top-[-2.09px] w-[285px]">세계 최초 블록 버스터 오리지널 사운드 리버스</p>
      </div>
    </div>
  );
}

function Badge5() {
  return (
    <div className="bg-[#fbb343] h-[21.79px] relative rounded-[6.8px] shrink-0 w-[64.645px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[21.79px] items-center justify-center overflow-clip px-[8.909px] py-[2.909px] relative rounded-[inherit] w-[64.645px]">
        <p className="font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#242a32] text-[12px] text-nowrap whitespace-pre">1차 판매</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6.8px]" />
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[47.983px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex h-[47.983px] items-start justify-between relative w-full">
          <Heading13 />
          <Badge5 />
        </div>
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[40px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4e5968] text-[14px] top-[-2px] w-[375px]">1차 티켓 판매 - 오리지널 사운드트랙과 함께하는 특별 상영회</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[15.994px] relative shrink-0 w-[77.443px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.994px] items-start relative w-[77.443px]">
        <p className="font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4e5968] text-[12px] text-nowrap whitespace-pre">2025.08.19(화)</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[15.994px] relative shrink-0 w-[8.409px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.994px] items-start relative w-[8.409px]">
        <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#4e5968] text-[12px]">~</p>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[15.994px] relative shrink-0 w-[77.443px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.994px] items-start relative w-[77.443px]">
        <p className="font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4e5968] text-[12px] text-nowrap whitespace-pre">2025.11.30(토)</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[15.994px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[15.994px] items-center justify-between relative w-full">
          <Text10 />
          <Text11 />
          <Text12 />
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[163.963px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[7.997px] h-[163.963px] items-start pb-0 pt-[20px] px-[20px] relative w-full">
          <Container49 />
          <Paragraph11 />
          <Container50 />
        </div>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute bg-[rgba(78,89,104,0.2)] h-[400.767px] left-0 rounded-[16.4px] top-0 w-[419.574px]" data-name="Container">
      <div className="box-border content-stretch flex flex-col h-[400.767px] items-start overflow-clip p-[0.909px] relative rounded-[inherit] w-[419.574px]">
        <Container48 />
        <Container51 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(78,89,104,0.3)] border-solid inset-0 pointer-events-none rounded-[16.4px]" />
    </div>
  );
}

function ImageWithFallback6() {
  return (
    <div className="h-[234.986px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback6} />
    </div>
  );
}

function Container53() {
  return (
    <div className="bg-[#242a32] content-stretch flex flex-col h-[234.986px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <ImageWithFallback6 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="h-[47.983px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-white top-[-2.09px] w-[376px]">겨울에 가족과 함께 영화 보고 조식은 모스트 이벤트 당첨 이벤트</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="content-stretch flex h-[20px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4e5968] text-[14px]">가족과 함께 영화를 관람하고 경품 추첨에 응모하세요</p>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[15.994px] relative shrink-0 w-[77.443px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.994px] items-start relative w-[77.443px]">
        <p className="font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4e5968] text-[12px] text-nowrap whitespace-pre">2025.02.01(토)</p>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[15.994px] relative shrink-0 w-[8.409px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.994px] items-start relative w-[8.409px]">
        <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#4e5968] text-[12px]">~</p>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[15.994px] relative shrink-0 w-[77.443px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.994px] items-start relative w-[77.443px]">
        <p className="font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4e5968] text-[12px] text-nowrap whitespace-pre">2025.02.21(금)</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[15.994px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[15.994px] items-center justify-between pl-0 pr-[0.014px] py-0 relative w-full">
          <Text13 />
          <Text14 />
          <Text15 />
        </div>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[143.963px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[7.997px] h-[143.963px] items-start pb-0 pt-[20px] px-[20px] relative w-full">
          <Heading14 />
          <Paragraph12 />
          <Container54 />
        </div>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute bg-[rgba(78,89,104,0.2)] h-[400.767px] left-[439.57px] rounded-[16.4px] top-0 w-[419.588px]" data-name="Container">
      <div className="box-border content-stretch flex flex-col h-[400.767px] items-start overflow-clip p-[0.909px] relative rounded-[inherit] w-[419.588px]">
        <Container53 />
        <Container55 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(78,89,104,0.3)] border-solid inset-0 pointer-events-none rounded-[16.4px]" />
    </div>
  );
}

function ImageWithFallback7() {
  return (
    <div className="h-[234.986px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback7} />
    </div>
  );
}

function Container57() {
  return (
    <div className="bg-[#242a32] content-stretch flex flex-col h-[234.986px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <ImageWithFallback7 />
    </div>
  );
}

function Heading15() {
  return (
    <div className="h-[23.991px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-2.09px] whitespace-pre">{`<헤레티> 특별 증정 이벤트`}</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="content-stretch flex h-[20px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4e5968] text-[14px]">영화 관람 후 한정판 굿즈를 받아가세요</p>
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[15.994px] relative shrink-0 w-[77.443px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.994px] items-start relative w-[77.443px]">
        <p className="font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4e5968] text-[12px] text-nowrap whitespace-pre">2025.01.04(토)</p>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[15.994px] relative shrink-0 w-[8.409px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.994px] items-start relative w-[8.409px]">
        <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#4e5968] text-[12px]">~</p>
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[15.994px] relative shrink-0 w-[77.443px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.994px] items-start relative w-[77.443px]">
        <p className="font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4e5968] text-[12px] text-nowrap whitespace-pre">2025.01.10(금)</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[15.994px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[15.994px] items-center justify-between relative w-full">
          <Text16 />
          <Text17 />
          <Text18 />
        </div>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[119.972px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[7.997px] h-[119.972px] items-start pb-0 pt-[20px] px-[20px] relative w-full">
          <Heading15 />
          <Paragraph13 />
          <Container58 />
        </div>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute bg-[rgba(78,89,104,0.2)] h-[400.767px] left-[879.16px] rounded-[16.4px] top-0 w-[419.574px]" data-name="Container">
      <div className="box-border content-stretch flex flex-col h-[400.767px] items-start overflow-clip p-[0.909px] relative rounded-[inherit] w-[419.574px]">
        <Container57 />
        <Container59 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(78,89,104,0.3)] border-solid inset-0 pointer-events-none rounded-[16.4px]" />
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[400.767px] relative shrink-0 w-full" data-name="Container">
      <Container52 />
      <Container56 />
      <Container60 />
    </div>
  );
}

function Section2() {
  return (
    <div className="content-stretch flex flex-col gap-[23.991px] h-[472.741px] items-start relative shrink-0 w-full" data-name="Section">
      <Container47 />
      <Container61 />
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[80px] h-[1483.51px] items-start left-0 pb-0 pt-[47.997px] px-[31.989px] top-[688.89px] w-[1362.73px]" data-name="Container">
      <Section />
      <Section1 />
      <Section2 />
    </div>
  );
}

function CinepalsLogo() {
  return (
    <div className="h-[31.989px] opacity-80 overflow-clip relative shrink-0 w-full" data-name="CinepalsLogo">
      <div className="absolute inset-[28.57%_18.18%_21.43%_2.27%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 16">
          <path d={svgPaths.p5ac1400} fill="var(--fill-0, #242A32)" id="Vector" opacity="0.2" />
        </svg>
      </div>
      <div className="absolute inset-[24.29%_19.09%_25.72%_1.36%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 16">
          <path d={svgPaths.p5ac1400} fill="var(--fill-0, #FBB343)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[29.29%_97.05%_60.71%_-0.23%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <path d={svgPaths.p2b501570} fill="var(--fill-0, #242A32)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[59.28%_97.05%_30.72%_-0.23%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <path d={svgPaths.p2b501570} fill="var(--fill-0, #242A32)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[29.29%_17.5%_60.71%_79.32%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <path d={svgPaths.p2b501570} fill="var(--fill-0, #242A32)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[59.28%_17.5%_30.72%_79.32%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <path d={svgPaths.p2b501570} fill="var(--fill-0, #242A32)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[31.43%_22.73%_32.86%_3.64%]" data-name="Vector">
        <div className="absolute inset-[-1%_-0.15%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75 12">
            <path d={svgPaths.p2cbb2800} id="Vector" opacity="0.15" stroke="var(--stroke-0, #242A32)" strokeWidth="0.228467" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[27.15%_79.55%_70%_20.45%]" data-name="Vector">
        <div className="absolute inset-[-37.5%_-0.34px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2">
            <path d="M0.342701 0.342701V1.25657" id="Vector" opacity="0.3" stroke="var(--stroke-0, #242A32)" strokeLinecap="round" strokeWidth="0.685402" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[32.86%_79.55%_64.28%_20.45%]" data-name="Vector">
        <div className="absolute inset-[-37.5%_-0.34px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2">
            <path d="M0.342701 0.342701V1.25657" id="Vector" opacity="0.3" stroke="var(--stroke-0, #242A32)" strokeLinecap="round" strokeWidth="0.685402" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[38.57%_79.55%_58.57%_20.45%]" data-name="Vector">
        <div className="absolute inset-[-37.5%_-0.34px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2">
            <path d="M0.342701 0.342701V1.25657" id="Vector" opacity="0.3" stroke="var(--stroke-0, #242A32)" strokeLinecap="round" strokeWidth="0.685402" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[44.29%_79.55%_52.86%_20.45%]" data-name="Vector">
        <div className="absolute inset-[-37.5%_-0.34px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2">
            <path d="M0.342701 0.342701V1.25657" id="Vector" opacity="0.3" stroke="var(--stroke-0, #242A32)" strokeLinecap="round" strokeWidth="0.685402" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[47.14%] left-[20.45%] right-[79.55%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-37.5%_-0.34px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2">
            <path d="M0.342701 0.342701V1.25657" id="Vector" opacity="0.3" stroke="var(--stroke-0, #242A32)" strokeLinecap="round" strokeWidth="0.685402" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[55.71%_79.55%_41.43%_20.45%]" data-name="Vector">
        <div className="absolute inset-[-37.5%_-0.34px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2">
            <path d="M0.342701 0.342701V1.25657" id="Vector" opacity="0.3" stroke="var(--stroke-0, #242A32)" strokeLinecap="round" strokeWidth="0.685402" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[61.43%_79.55%_35.72%_20.45%]" data-name="Vector">
        <div className="absolute inset-[-37.5%_-0.34px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2">
            <path d="M0.342701 0.342701V1.25657" id="Vector" opacity="0.3" stroke="var(--stroke-0, #242A32)" strokeLinecap="round" strokeWidth="0.685402" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[67.14%_79.55%_30%_20.45%]" data-name="Vector">
        <div className="absolute inset-[-37.5%_-0.34px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2">
            <path d="M0.342701 0.342701V1.25657" id="Vector" opacity="0.3" stroke="var(--stroke-0, #242A32)" strokeLinecap="round" strokeWidth="0.685402" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[32.86%_93.64%_61.43%_4.55%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <path d={svgPaths.p242a6200} fill="var(--fill-0, #242A32)" id="Vector" opacity="0.15" />
        </svg>
      </div>
      <div className="absolute inset-[60%_93.64%_34.29%_4.55%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <path d={svgPaths.p242a6200} fill="var(--fill-0, #242A32)" id="Vector" opacity="0.15" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold inset-[28.57%_26.03%_33.91%_24.23%] leading-[normal] not-italic text-[#242a32] text-[10.053px] text-center text-nowrap whitespace-pre">CINEPALS</p>
      <div className="absolute inset-[65.71%_34.09%_34.29%_34.09%]" data-name="Vector">
        <div className="absolute bottom-[-0.18px] left-0 right-0 top-[-0.18px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 1">
            <path d="M0 0.182774H31.9855" id="Vector" opacity="0.2" stroke="var(--stroke-0, #242A32)" strokeWidth="0.365548" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="h-[31.989px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[31.989px] items-start pl-0 pr-[311.065px] py-0 relative w-full">
          <CinepalsLogo />
        </div>
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4e5968] text-[14px]">최고의 영화 경험을 제공하는 Cinepals</p>
    </div>
  );
}

function Icon16() {
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
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[20px] top-0" data-name="Link">
      <Icon16 />
    </div>
  );
}

function Icon17() {
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
    <div className="absolute content-stretch flex flex-col items-start left-[31.99px] size-[20px] top-0" data-name="Link">
      <Icon17 />
    </div>
  );
}

function Icon18() {
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
    <div className="absolute content-stretch flex flex-col items-start left-[63.98px] size-[20px] top-0" data-name="Link">
      <Icon18 />
    </div>
  );
}

function Icon19() {
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
    <div className="absolute content-stretch flex flex-col items-start left-[95.97px] size-[20px] top-0" data-name="Link">
      <Icon19 />
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.994px] h-[171.974px] items-start left-0 top-0 w-[411.591px]" data-name="Container">
      <Container63 />
      <Paragraph14 />
      <Container64 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[23.991px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-2.09px] whitespace-pre">서비스</p>
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute content-stretch flex h-[19.091px] items-start left-0 top-0 w-[60.923px]" data-name="Link">
      <p className="basis-0 font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4e5968] text-[14px]">영화 예매</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[411.591px]" data-name="List Item">
      <Link4 />
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute content-stretch flex h-[19.091px] items-start left-0 top-0 w-[74.929px]" data-name="Link">
      <p className="basis-0 font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4e5968] text-[14px]">상영 시간표</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="absolute h-[20px] left-0 top-[28px] w-[411.591px]" data-name="List Item">
      <Link5 />
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute content-stretch flex h-[19.091px] items-start left-0 top-0 w-[60.923px]" data-name="Link">
      <p className="basis-0 font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4e5968] text-[14px]">극장 찾기</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="absolute h-[20px] left-0 top-[55.99px] w-[411.591px]" data-name="List Item">
      <Link6 />
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute content-stretch flex h-[19.091px] items-start left-0 top-0 w-[42.003px]" data-name="Link">
      <p className="basis-0 font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4e5968] text-[14px]">이벤트</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="absolute h-[20px] left-0 top-[83.99px] w-[411.591px]" data-name="List Item">
      <Link7 />
    </div>
  );
}

function Link8() {
  return (
    <div className="absolute content-stretch flex h-[19.091px] items-start left-0 top-0 w-[42.003px]" data-name="Link">
      <p className="basis-0 font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4e5968] text-[14px]">멤버십</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="absolute h-[20px] left-0 top-[111.99px] w-[411.591px]" data-name="List Item">
      <Link8 />
    </div>
  );
}

function List() {
  return (
    <div className="h-[131.989px] relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
      <ListItem4 />
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.994px] h-[171.974px] items-start left-[443.58px] top-0 w-[411.591px]" data-name="Container">
      <Heading3 />
      <List />
    </div>
  );
}

function Heading16() {
  return (
    <div className="h-[23.991px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-2.09px] whitespace-pre">고객지원</p>
    </div>
  );
}

function Link9() {
  return (
    <div className="absolute content-stretch flex h-[19.091px] items-start left-0 top-0 w-[56.009px]" data-name="Link">
      <p className="basis-0 font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4e5968] text-[14px]">공지사항</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[411.591px]" data-name="List Item">
      <Link9 />
    </div>
  );
}

function Link10() {
  return (
    <div className="absolute content-stretch flex h-[19.091px] items-start left-0 top-0 w-[93.849px]" data-name="Link">
      <p className="basis-0 font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4e5968] text-[14px]">자주 묻는 질문</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="absolute h-[20px] left-0 top-[28px] w-[411.591px]" data-name="List Item">
      <Link10 />
    </div>
  );
}

function Link11() {
  return (
    <div className="absolute content-stretch flex h-[19.091px] items-start left-0 top-0 w-[51.406px]" data-name="Link">
      <p className="basis-0 font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4e5968] text-[14px]">1:1 문의</p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="absolute h-[20px] left-0 top-[55.99px] w-[411.591px]" data-name="List Item">
      <Link11 />
    </div>
  );
}

function Link12() {
  return (
    <div className="absolute content-stretch flex h-[19.091px] items-start left-0 top-0 w-[74.929px]" data-name="Link">
      <p className="basis-0 font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4e5968] text-[14px]">분실물 센터</p>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="absolute h-[20px] left-0 top-[83.99px] w-[411.591px]" data-name="List Item">
      <Link12 />
    </div>
  );
}

function Link13() {
  return (
    <div className="absolute content-stretch flex h-[19.091px] items-start left-0 top-0 w-[93.849px]" data-name="Link">
      <p className="basis-0 font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4e5968] text-[14px]">단체 관람 문의</p>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="absolute h-[20px] left-0 top-[111.99px] w-[411.591px]" data-name="List Item">
      <Link13 />
    </div>
  );
}

function List1() {
  return (
    <div className="h-[131.989px] relative shrink-0 w-full" data-name="List">
      <ListItem5 />
      <ListItem6 />
      <ListItem7 />
      <ListItem8 />
      <ListItem9 />
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.994px] h-[171.974px] items-start left-[887.16px] top-0 w-[411.591px]" data-name="Container">
      <Heading16 />
      <List1 />
    </div>
  );
}

function Heading17() {
  return (
    <div className="h-[23.991px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-2.09px] whitespace-pre">회사 정보</p>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="basis-0 font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4e5968] text-[14px]">고객센터: 1544-0000</p>
    </div>
  );
}

function ListItem11() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="basis-0 font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4e5968] text-[14px]">이메일: support@cinepals.com</p>
    </div>
  );
}

function ListItem12() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="basis-0 font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4e5968] text-[14px]">운영시간: 09:00 - 22:00</p>
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[7.997px] h-[75.994px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem10 />
      <ListItem11 />
      <ListItem12 />
    </div>
  );
}

function Link14() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Link">
      <p className="basis-0 font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4e5968] text-[14px]">이용약관</p>
    </div>
  );
}

function Link15() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Link">
      <p className="basis-0 font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4e5968] text-[14px]">개인정보처리방침</p>
    </div>
  );
}

function Link16() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Link">
      <p className="basis-0 font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4e5968] text-[14px]">법적고지</p>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col gap-[7.997px] h-[75.994px] items-start relative shrink-0 w-full" data-name="Container">
      <Link14 />
      <Link15 />
      <Link16 />
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.994px] h-[207.969px] items-start left-0 top-[203.96px] w-[411.591px]" data-name="Container">
      <Heading17 />
      <List2 />
      <Container68 />
    </div>
  );
}

function Container70() {
  return (
    <div className="h-[411.932px] relative shrink-0 w-full" data-name="Container">
      <Container65 />
      <Container66 />
      <Container67 />
      <Container69 />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[39.006px] relative shrink-0 w-[413.366px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal h-[39.006px] leading-[19.5px] relative text-[#4e5968] text-[12px] text-nowrap w-[413.366px] whitespace-pre">
        <p className="absolute left-0 top-[-1.18px]">(주)시네팔스 | 대표이사: 홍길동 | 사업자등록번호: 123-45-67890</p>
        <p className="absolute left-0 top-[18.32px]">서울특별시 강남구 테헤란로 123 | 통신판매업신고번호: 2024-서울강남-0000</p>
      </div>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[31.989px] relative shrink-0 w-[171.548px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border font-['Arimo:Regular',sans-serif] font-normal h-[31.989px] leading-[16px] relative text-[#4e5968] text-[12px] text-nowrap text-right w-[171.548px] whitespace-pre">
        <p className="absolute left-[172px] top-[-1px] translate-x-[-100%]">Copyright © 2025 Cinepals Inc.</p>
        <p className="absolute left-[172.3px] top-[14.99px] translate-x-[-100%]">ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="h-[39.006px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex h-[39.006px] items-start justify-between relative w-full">
          <Paragraph15 />
          <Paragraph16 />
        </div>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="box-border content-stretch flex flex-col h-[63.906px] items-start pb-0 pt-[24.901px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.909px_0px_0px] border-[rgba(78,89,104,0.2)] border-solid inset-0 pointer-events-none" />
      <Container71 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[31.989px] h-[635.81px] items-start left-0 pb-0 pt-[63.991px] px-[31.989px] top-[2269.3px] w-[1362.73px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[0.909px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <Container70 />
      <Container72 />
    </div>
  );
}

function ImageWithFallback8() {
  return (
    <div className="absolute h-[600px] left-0 top-0 w-[1362.73px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback8} />
    </div>
  );
}

function Container73() {
  return <div className="absolute bg-gradient-to-r from-[#242a32] h-[600px] left-0 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(36,42,50,0.7)] w-[1362.73px]" data-name="Container" />;
}

function Container74() {
  return <div className="absolute bg-gradient-to-b from-[#242a32] h-[600px] left-0 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0)] w-[1362.73px]" data-name="Container" />;
}

function Container75() {
  return (
    <div className="absolute h-[600px] left-0 top-0 w-[1362.73px]" data-name="Container">
      <ImageWithFallback8 />
      <Container73 />
      <Container74 />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[47.997px] left-0 top-0 w-[495.994px]" data-name="Heading 1">
      <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[48px] left-0 text-[48px] text-nowrap text-white top-[-5.18px] whitespace-pre">더 블레이드</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="absolute h-[23.991px] left-0 top-[63.99px] w-[495.994px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#4e5968] text-[16px] text-nowrap top-[-2.09px] whitespace-pre">액션/스릴러</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="absolute h-[58.466px] left-0 top-[111.97px] w-[495.994px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[29.25px] left-0 text-[18px] text-[rgba(255,255,255,0.9)] top-[-2.18px] w-[482px]">복수를 위해 칼을 든 전사의 이야기. 피할 수 없는 운명과 마주한다.</p>
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1cb8a680} fill="var(--fill-0, #FBB343)" id="Vector" stroke="var(--stroke-0, #FBB343)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[23.991px] relative shrink-0 w-[21.136px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[23.991px] relative w-[21.136px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#fbb343] text-[16px] text-nowrap top-[-2.09px] whitespace-pre">8.5</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="h-[23.991px] relative shrink-0 w-[49.134px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7.997px] h-[23.991px] items-center relative w-[49.134px]">
        <Icon20 />
        <Text19 />
      </div>
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_47_2131)" id="Icon">
          <path d="M10 5V10L13.3333 11.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p14d24500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_47_2131">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[23.991px] relative shrink-0 w-[42.457px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[23.991px] relative w-[42.457px]">
        <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-white top-[-2.09px] w-[43px]">115분</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[23.991px] relative shrink-0 w-[70.455px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7.997px] h-[23.991px] items-center relative w-[70.455px]">
        <Icon21 />
        <Text20 />
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute content-stretch flex gap-[23.991px] h-[23.991px] items-center left-0 top-[194.43px] w-[495.994px]" data-name="Container">
      <Container76 />
      <Container77 />
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[rgba(78,89,104,0.5)] h-[49.787px] relative rounded-[10px] shrink-0 w-[129.801px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(78,89,104,0.3)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[49.787px] relative w-[129.801px]">
        <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-[32.9px] text-[16px] text-nowrap text-white top-[10.81px] whitespace-pre">상세정보</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[49.787px] relative rounded-[10px] shrink-0 w-[129.801px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(78,89,104,0.5)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[49.787px] relative w-[129.801px]">
        <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-[32.9px] text-[16px] text-nowrap text-white top-[10.81px] whitespace-pre">예매하기</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute content-stretch flex gap-[15.994px] h-[49.787px] items-start left-0 top-[250.41px] w-[495.994px]" data-name="Container">
      <Button4 />
      <Button5 />
    </div>
  );
}

function Container80() {
  return (
    <div className="absolute h-[300.199px] left-[41.99px] top-[149.9px] w-[575.994px]" data-name="Container">
      <Heading />
      <Paragraph17 />
      <Paragraph18 />
      <Container78 />
      <Container79 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="h-[23.991px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
            <path d={svgPaths.p28c4f380} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99929" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-[rgba(36,42,50,0.8)] box-border content-stretch flex flex-col items-start left-[-50px] pb-[0.909px] pt-[12.898px] px-[12.898px] rounded-[3.0504e+07px] size-[49.787px] top-[275.11px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(78,89,104,0.3)] border-solid inset-0 pointer-events-none rounded-[3.0504e+07px]" />
      <Icon22 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="h-[23.991px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
            <path d={svgPaths.p30d0bd80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99929" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-[rgba(36,42,50,0.8)] box-border content-stretch flex flex-col items-start left-[1362.94px] pb-[0.909px] pt-[12.898px] px-[12.898px] rounded-[3.0504e+07px] size-[49.787px] top-[275.11px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(78,89,104,0.3)] border-solid inset-0 pointer-events-none rounded-[3.0504e+07px]" />
      <Icon23 />
    </div>
  );
}

function Container81() {
  return (
    <div className="absolute h-[600px] left-0 top-0 w-[1362.73px]" data-name="Container">
      <Container80 />
      <Button6 />
      <Button7 />
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[rgba(78,89,104,0.3)] relative rounded-[3.0504e+07px] shrink-0 size-[3.991px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[3.991px]" />
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#4e5968] h-[3.991px] relative rounded-[3.0504e+07px] shrink-0 w-[31.989px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[3.991px] w-[31.989px]" />
    </div>
  );
}

function Container82() {
  return (
    <div className="absolute content-stretch flex gap-[7.997px] h-[3.991px] items-start left-[653.38px] top-[564.02px] w-[55.966px]" data-name="Container">
      {[...Array(2).keys()].map((_, i) => (
        <Button8 key={i} />
      ))}
      <Button9 />
    </div>
  );
}

function MovieSlider() {
  return (
    <div className="absolute h-[600px] left-0 overflow-clip top-[88.89px] w-[1362.73px]" data-name="MovieSlider">
      <Container75 />
      <Container81 />
      <Container82 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-[#242a32] h-[2905.11px] left-0 top-0 w-[1362.73px]" data-name="App">
      <Container />
      <Container62 />
      <Footer />
      <MovieSlider />
    </div>
  );
}

function Icon24() {
  return (
    <div className="h-[23.991px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 8">
            <path d={svgPaths.p20bd4d48} id="Vector" stroke="var(--stroke-0, #242A32)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99929" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ScrollToTop() {
  return (
    <div className="absolute bg-[#fbb343] box-border content-stretch flex flex-col items-start left-[1282.77px] pb-0 pt-[11.989px] px-[11.989px] rounded-[3.0504e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[47.969px] top-[1140.95px]" data-name="ScrollToTop">
      <Icon24 />
    </div>
  );
}

function CinepalsLogo1() {
  return (
    <div className="h-[55.994px] relative shrink-0 w-[175.98px]" data-name="CinepalsLogo">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[55.994px] overflow-clip relative rounded-[inherit] w-[175.98px]">
        <div className="absolute inset-[28.57%_18.18%_21.43%_2.27%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140 28">
            <path d={svgPaths.p1c4ec400} fill="var(--fill-0, #242A32)" id="Vector" opacity="0.2" />
          </svg>
        </div>
        <div className="absolute inset-[24.29%_19.09%_25.71%_1.36%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140 28">
            <path d={svgPaths.p1c4ec400} fill="var(--fill-0, #FBB343)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[29.29%_97.05%_60.71%_-0.23%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.pb0cd900} fill="var(--fill-0, #242A32)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[59.29%_97.05%_30.71%_-0.23%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.pb0cd900} fill="var(--fill-0, #242A32)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[29.29%_17.5%_60.71%_79.32%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.pb0cd900} fill="var(--fill-0, #242A32)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[59.29%_17.5%_30.71%_79.32%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.pb0cd900} fill="var(--fill-0, #242A32)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[31.43%_22.73%_32.86%_3.64%]" data-name="Vector">
          <div className="absolute inset-[-1%_-0.15%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 130 21">
              <path d={svgPaths.p23cf8480} id="Vector" opacity="0.15" stroke="var(--stroke-0, #242A32)" strokeWidth="0.399955" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[27.14%_79.55%_70%_20.45%]" data-name="Vector">
          <div className="absolute inset-[-37.5%_-0.6px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 3">
              <path d="M0.599932 0.599932V2.19975" id="Vector" opacity="0.3" stroke="var(--stroke-0, #242A32)" strokeLinecap="round" strokeWidth="1.19986" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[32.86%_79.55%_64.29%_20.45%]" data-name="Vector">
          <div className="absolute inset-[-37.5%_-0.6px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 3">
              <path d="M0.599932 0.599932V2.19975" id="Vector" opacity="0.3" stroke="var(--stroke-0, #242A32)" strokeLinecap="round" strokeWidth="1.19986" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[38.57%_79.55%_58.57%_20.45%]" data-name="Vector">
          <div className="absolute inset-[-37.5%_-0.6px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 3">
              <path d="M0.599932 0.599932V2.19975" id="Vector" opacity="0.3" stroke="var(--stroke-0, #242A32)" strokeLinecap="round" strokeWidth="1.19986" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[44.29%_79.55%_52.86%_20.45%]" data-name="Vector">
          <div className="absolute inset-[-37.5%_-0.6px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 3">
              <path d="M0.599932 0.599932V2.19975" id="Vector" opacity="0.3" stroke="var(--stroke-0, #242A32)" strokeLinecap="round" strokeWidth="1.19986" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[47.14%] left-[20.45%] right-[79.55%] top-1/2" data-name="Vector">
          <div className="absolute inset-[-37.5%_-0.6px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 3">
              <path d="M0.599932 0.599932V2.19975" id="Vector" opacity="0.3" stroke="var(--stroke-0, #242A32)" strokeLinecap="round" strokeWidth="1.19986" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[55.71%_79.55%_41.43%_20.45%]" data-name="Vector">
          <div className="absolute inset-[-37.5%_-0.6px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 3">
              <path d="M0.599932 0.599932V2.19975" id="Vector" opacity="0.3" stroke="var(--stroke-0, #242A32)" strokeLinecap="round" strokeWidth="1.19986" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[61.43%_79.55%_35.71%_20.45%]" data-name="Vector">
          <div className="absolute inset-[-37.5%_-0.6px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 3">
              <path d="M0.599932 0.599932V2.19975" id="Vector" opacity="0.3" stroke="var(--stroke-0, #242A32)" strokeLinecap="round" strokeWidth="1.19986" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[67.14%_79.55%_30%_20.45%]" data-name="Vector">
          <div className="absolute inset-[-37.5%_-0.6px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 3">
              <path d="M0.599932 0.599932V2.19975" id="Vector" opacity="0.3" stroke="var(--stroke-0, #242A32)" strokeLinecap="round" strokeWidth="1.19986" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[32.86%_93.64%_61.43%_4.55%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.p3977c400} fill="var(--fill-0, #242A32)" id="Vector" opacity="0.15" />
          </svg>
        </div>
        <div className="absolute inset-[60%_93.64%_34.29%_4.55%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.p3977c400} fill="var(--fill-0, #242A32)" id="Vector" opacity="0.15" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold inset-[28.57%_25.34%_33.92%_25.23%] leading-[normal] not-italic text-[#242a32] text-[17.598px] text-center text-nowrap whitespace-pre">CINEPALS</p>
        <div className="absolute inset-[65.71%_34.09%_34.29%_34.09%]" data-name="Vector">
          <div className="absolute bottom-[-0.32px] left-0 right-0 top-[-0.32px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 1">
              <path d="M0 0.319964H55.9936" id="Vector" opacity="0.2" stroke="var(--stroke-0, #242A32)" strokeWidth="0.639928" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Link17() {
  return (
    <div className="absolute h-[23.991px] left-0 top-0 w-[32.003px]" data-name="Link">
      <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-2.09px] whitespace-pre">영화</p>
    </div>
  );
}

function Link18() {
  return (
    <div className="absolute h-[23.991px] left-[63.99px] top-0 w-[32.003px]" data-name="Link">
      <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-2.09px] whitespace-pre">예매</p>
    </div>
  );
}

function Link19() {
  return (
    <div className="absolute h-[23.991px] left-[127.98px] top-0 w-[32.003px]" data-name="Link">
      <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-2.09px] whitespace-pre">극장</p>
    </div>
  );
}

function Link20() {
  return (
    <div className="absolute h-[23.991px] left-[191.97px] top-0 w-[48.011px]" data-name="Link">
      <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-2.09px] whitespace-pre">이벤트</p>
    </div>
  );
}

function Link21() {
  return (
    <div className="absolute h-[23.991px] left-[271.97px] top-0 w-[64.006px]" data-name="Link">
      <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-2.09px] whitespace-pre">커뮤니티</p>
    </div>
  );
}

function Navigation() {
  return (
    <div className="h-[23.991px] relative shrink-0 w-[335.98px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[23.991px] relative w-[335.98px]">
        <Link17 />
        <Link18 />
        <Link19 />
        <Link20 />
        <Link21 />
      </div>
    </div>
  );
}

function Icon25() {
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
    <div className="relative shrink-0 size-[35.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[7.997px] px-[7.997px] relative size-[35.994px]">
        <Icon25 />
      </div>
    </div>
  );
}

function Icon26() {
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
    <div className="relative shrink-0 size-[35.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[7.997px] px-[7.997px] relative size-[35.994px]">
        <Icon26 />
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-[#fbb343] h-[35.994px] relative rounded-[6.8px] shrink-0 w-[87.997px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[35.994px] items-center justify-center px-[16px] py-[8px] relative w-[87.997px]">
        <p className="font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#242a32] text-[14px] text-nowrap whitespace-pre">회원가입</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="h-[35.994px] relative shrink-0 w-[183.963px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[11.989px] h-[35.994px] items-center relative w-[183.963px]">
        <Button10 />
        <Button11 />
        <Button12 />
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="h-[55.994px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[55.994px] items-center justify-between pl-0 pr-[0.014px] py-0 relative w-full">
          <CinepalsLogo1 />
          <Navigation />
          <Container83 />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[rgba(36,42,50,0.95)] box-border content-stretch flex flex-col h-[88.892px] items-start left-0 pb-[0.909px] pt-[15.994px] px-[31.989px] top-0 w-[1362.73px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.909px] border-[rgba(78,89,104,0.3)] border-solid inset-0 pointer-events-none" />
      <Container84 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="영화 및 이벤트 웹페이지">
      <App />
      <ScrollToTop />
      <Header />
    </div>
  );
}