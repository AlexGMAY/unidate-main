import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
} from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { GiSelfLove } from "react-icons/gi";
import NavLink from "./NavLink";
import { auth } from "@/auth";
import UserMenu from "./UserMenu";
import { getUserInfoForNav } from "@/app/actions/userActions";
import FiltersWrapper from "./FiltersWrapper";

export default async function TopNavGlass() {
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
        className="bg-white/80 backdrop-blur-2xl border-b border-white/30 shadow-md relative before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/70 before:to-white/40 before:backdrop-blur-lg"
        classNames={{
          item: [
            "text-base",
            "text-slate-700",
            "font-medium",
            "tracking-wide",
            "transition-all",
            "duration-300",
            "hover:text-slate-900",
            "hover:bg-black/5",
            "rounded-xl",
            "px-4",
            "py-2",
            "mx-1",
            "data-[active=true]:text-pink-600",
            "data-[active=true]:font-semibold",
            "data-[active=true]:bg-gradient-to-r",
            "data-[active=true]:from-pink-50/70",
            "data-[active=true]:to-pink-100/40",
            "data-[active=true]:shadow-sm",
          ],
          wrapper: "px-6 relative z-10",
        }}
        height="76px"
      >
        <NavbarBrand as={Link} href="/" className="gap-3 transition-transform hover:scale-[1.02]">
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
        
        <NavbarContent justify="end" className="gap-3">
          {userInfo ? (
            <UserMenu userInfo={userInfo} />
          ) : (
            <>
              <Button
                as={Link}
                href="/login"
                variant="light"
                className="text-slate-700 bg-white/50 backdrop-blur-lg border border-white/40 hover:bg-white/70 hover:border-white/60 transition-all duration-300 font-medium shadow-sm rounded-xl px-5"
                size="md"
              >
                Login
              </Button>
              <Button
                as={Link}
                href="/register"
                className="bg-gradient-to-r from-pink-500 to-rose-500 text-white border-0 hover:from-pink-600 hover:to-rose-600 transition-all duration-300 font-medium shadow-md rounded-xl px-5 hover:shadow-lg"
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