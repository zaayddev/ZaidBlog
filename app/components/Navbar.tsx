import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";
import Logo from "../../public/Logo.svg";

export default function Navbar() {
  return (
    <nav className="w-full relative flex items-center justify-between max-w-2xl mx-auto px-4 py-5">
      <Link href="/" className="font-bold text-3xl flex items-center">
        <Image src={Logo} alt="Logo" priority className="w-14 h-14 mr-2" />
        <span>Zaid<span className="text-primary">Blog</span></span>
      </Link>
      <ModeToggle />
    </nav>
  );
}
