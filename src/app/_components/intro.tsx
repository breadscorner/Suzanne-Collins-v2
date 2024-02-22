import { CMS_NAME } from "@/lib/constants";
import Navbar from "./navbar";
import Image from "next/image";
import { HOME_OG_IMAGE_URL } from "@/lib/constants";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-4 mb-16 md:mb-12">
      <div>
        <a href="/">
          <Image
            src={HOME_OG_IMAGE_URL}
            alt="Suzanne Collins"
            width={300}
            height={200}
          />
        </a>
      </div>
      <div className="text-center md:text-left text-lg mt-5 md:pl-8">
        <Navbar />
      </div>
    </section>
  );
}
