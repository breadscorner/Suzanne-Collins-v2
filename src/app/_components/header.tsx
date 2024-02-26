import Link from "next/link";
import Image from "next/image";
import { HOME_OG_IMAGE_URL } from "@/lib/constants";

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-12 mt-4">
      <Link href="/" className="hover:underline">
        <Image
          src={HOME_OG_IMAGE_URL}
          alt="Suzanne Collins"
          width={200}
          height={134}
        />
      </Link>
    </h2>
  );
};

export default Header;
