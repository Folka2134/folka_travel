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
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

import menu from "@/public/menu.svg";

const MobileNavbar = () => {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Image
            src={menu}
            alt="menu"
            width={32}
            height={32}
            className="mr-4 inline-block cursor-pointer lg:hidden"
          />
        </SheetTrigger>
        <SheetClose asChild>
          <SheetContent className="flex max-w-[200px] flex-col">
            <SheetHeader className="">
              <SheetDescription className="mt-16 flex h-full flex-col gap-12">
                <ul className="flex flex-col">
                  {NAV_LINKS.map((link) => (
                    <SheetClose asChild key={link.key}>
                      <Link
                        href={link.href}
                        className="regular-24 flexCenter cursor-pointer py-6 text-gray-50 transition-all hover:font-bold"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </ul>
                <SignedOut>
                  <div className="flexCenter">
                    <SheetClose asChild>
                      <Link href="/sign-in">
                        <button className="rounded-full bg-black px-8 py-2 text-white transition-all hover:bg-[#01AA51] hover:font-bold active:scale-[0.95]">
                          Login
                        </button>
                      </Link>
                    </SheetClose>
                  </div>
                </SignedOut>
                <SignedIn>
                  <div className="flexCenter">
                    <UserButton afterSignOutUrl="/" />
                  </div>
                </SignedIn>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </SheetClose>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;
