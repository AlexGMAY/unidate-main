import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { GiSelfLove } from "react-icons/gi";
import NavLink from "./NavLink";
import { auth } from "@/auth";
import UserMenu from "./UserMenu";
import { getUserInfoForNav } from "@/app/actions/userActions";
import FiltersWrapper from "./FiltersWrapper";

export default async function TopNav() {
  const session = await auth();
  const userInfo = session?.user && (await getUserInfoForNav());

  const memberLinks = [
    { href: "/members", label: "Matches" },
    { href: "/lists", label: "Lists" },
    { href: "/messages", label: "Messages" },
  ];

  const adminLinks = [
    {
      href: "/admin/moderation",
      label: "Photo Moderation",
    },
  ];

  const links = session?.user.role === "ADMIN" ? adminLinks : memberLinks;
  
  return (
    <>
      <Navbar
        maxWidth="full"
        className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 shadow-lg"
        classNames={{
          item: [
            "text-md",
            "text-white/90",
            "uppercase",
            "tracking-wide",
            "transition-all",
            "duration-300",
            "hover:text-white",
            "data-[active=true]:text-white",
            "data-[active=true]:font-semibold",
            "data-[active=true]:border-b-2",
            "data-[active=true]:border-white",
          ],
          wrapper: "px-4 sm:px-6",
        }}
        height="70px"
      >
        <NavbarBrand as={Link} href="/" className="gap-2">
          <div className="flex items-center space-x-3 group">
              <div className="flex items-center justify-center bg-gradient-to-r from-pink-500 to-rose-600 p-3 rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-2xl group-hover:shadow-pink-500/25">
                <GiSelfLove size={28} className="text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 text-transparent bg-clip-text">
                  UniDate
                </span>
                <p className="text-xs text-rose-300 font-medium">Find Your Perfect Match</p>
              </div>
            </div>
        </NavbarBrand>
        
        <NavbarContent justify="center" className="gap-6">
          {session && links.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
            />
          ))}
        </NavbarContent>
        
        <NavbarContent justify="end" className="gap-2">
          {userInfo ? (
            <UserMenu userInfo={userInfo} />
          ) : (
            <>
              <Button
                as={Link}
                href="/login"
                variant="flat"
                className="text-white bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
                size="md"
              >
                Login
              </Button>
              <Button
                as={Link}
                href="/register"
                className="bg-white text-pink-600 font-medium hover:bg-pink-50 transition-all shadow-md"
                size="md"
              >
                Register
              </Button>
            </>
          )}
        </NavbarContent>
      </Navbar>
      <FiltersWrapper />
    </>
  );
}