import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen bg-gradient-to-tr from-neutral-100 to-stone-600">
      <div>shadow</div>
      <Image className="m-auto pt-40 rotate-20" width="318" height="53" src={'/ToTheMoon.svg'} alt={'toTheMoon'} />
      <Image className="" src={'/facade.jpg'} alt={'facade'} width="1968" height="439" />
      <div>the second escalator</div>
      <div>astronaut</div>
      <div>shadow</div>
    </div>
  );
}
