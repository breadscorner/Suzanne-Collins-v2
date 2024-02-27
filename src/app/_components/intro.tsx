import Navbar from "./navbar";
import { HOME_OG_IMAGE_URL } from "@/lib/constants";

export function Intro() {
  return (
    <section className="flex flex-row items-center justify-between mt-4 mb-2 md:mb-12">
      <div>
        <a href="/">
          <img
            className="w-[150px] md:w-[300px] h-auto"
            src={HOME_OG_IMAGE_URL}
            alt="Suzanne Collins"
          />
        </a>
      </div>
      <div className="text-center md:text-left text-md md:mt-0 md:pl-8">
        <Navbar />
      </div>
    </section>
  );
}