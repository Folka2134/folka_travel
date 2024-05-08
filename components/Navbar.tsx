import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
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
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <SignedOut>
        <div className="lg:flexCenter hidden">
          {/* <SignInButton /> */}
          {/* <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
          /> */}
          <button className="rounded-full">
            <Link href="/sign-in">Login</Link>
          </button>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="lg:flexCenter hidden">
          {/* <SignOutButton />
          <Button
            type="button"
            title="Log out"
            icon="/user.svg"
            variant="btn_dark_green"
          /> */}
          <button className="rounded-full">
            <Link href="/sign-out">Logout</Link>
          </button>
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
