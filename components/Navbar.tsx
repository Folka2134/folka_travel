import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image
          className="rounded-xl"
          src="/folka_travel-logo.png"
          alt="logo"
          width={200}
          height={50}
        />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 flexCenter cursor-pointer pb-1.5 text-gray-50 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <SignedOut>
        <div className="lg:flexCenter hidden">
          <Link href="/sign-in">
            <button className="rounded-full bg-black px-8 py-2 text-white transition-all hover:bg-[#01AA51] hover:font-bold active:scale-[0.95]">
              Login
            </button>
          </Link>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="lg:flexCenter hidden">
          <UserButton afterSignOutUrl="/" />
        </div>
      </SignedIn>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
