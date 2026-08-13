import Image from "next/image";

export default function BackgroundPattern() {
  return (
    <>
      {/* Top Left */}
      <Image
        src="/images/patterns/top-left.png"
        alt=""
        width={350}
        height={350}
        className="fixed top-0 left-0 opacity-10 pointer-events-none select-none z-0"
      />

      {/* Top Right */}
      <Image
        src="/images/patterns/top-right.png"
        alt=""
        width={350}
        height={350}
        className="fixed top-0 right-0 opacity-10 pointer-events-none select-none z-0"
      />

      {/* Bottom Left */}
      <Image
        src="/images/patterns/bottom-left.png"
        alt=""
        width={350}
        height={350}
        className="fixed bottom-0 left-0 opacity-10 pointer-events-none select-none z-0"
      />

      {/* Bottom Right */}
      <Image
        src="/images/patterns/bottom-right.png"
        alt=""
        width={350}
        height={350}
        className="fixed bottom-0 right-0 opacity-10 pointer-events-none select-none z-0"
      />
    </>
  );
}