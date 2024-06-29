import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import MobileNavbar from "../MobileNavbar";
import Searchbar from "../SearchBar";

const Navbar = () => {
  return (
    <div className="sticky top-6 z-50 mx-4 my-6 flex items-center justify-between rounded-xl bg-white sm:mx-6 md:mx-12 lg:relative xl:mx-64">
      <nav className="flex w-full items-center justify-between">
        <div className="flex flex-col">
          <Link href="/">
            <Image
              className="rounded-xl"
              src="/folka_travel-logo.png"
              alt="logo"
              width={200}
              height={50}
            />
          </Link>

          <Searchbar />
        </div>

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
      </nav>
      <MobileNavbar />
    </div>
  );
};

export default Navbar;
