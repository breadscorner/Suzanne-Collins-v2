import { CMS_NAME } from "@/lib/constants";
import Navbar from "./navbar";
// import Image from "next/image";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-4 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
        {CMS_NAME}
      </h1>
      {/* <Image src="/assets/suzanne-collins-black.jpg" alt="Suzanne Collins" width={200} height={200} /> */}
      <div className="text-center md:text-left text-lg mt-5 md:pl-8">
        <Navbar />
      </div>
    </section>
  );
}
