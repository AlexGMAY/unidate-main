// import {
//   Button,
//   Navbar,
//   NavbarBrand,
//   NavbarContent,
// } from "@nextui-org/react";
// import Link from "next/link";
// import React from "react";
// import { GiSelfLove } from "react-icons/gi";
// import NavLink from "./NavLink";
// import { auth } from "@/auth";
// import UserMenu from "./UserMenu";
// import { getUserInfoForNav } from "@/app/actions/userActions";
// import FiltersWrapper from "./FiltersWrapper";

// export default async function TopNav() {
//   const session = await auth();
//   const userInfo =
//     session?.user && (await getUserInfoForNav());

//   const memberLinks = [
//     { href: "/members", label: "Matches" },
//     { href: "/lists", label: "Lists" },
//     { href: "/messages", label: "Messages" },
//   ];

//   const adminLinks = [
//     {
//       href: "/admin/moderation",
//       label: "Photo Moderation",
//     },
//   ];

//   const links =
//     session?.user.role === "ADMIN"
//       ? adminLinks
//       : memberLinks;
//   return (
//     <>
//       <Navbar
//         maxWidth="full"
//         className="bg-gradient-to-r from-pink-400 via-red-400 to-pink-600"
//         classNames={{
//           item: [
//             "text-xl",
//             "text-white",
//             "uppercase",
//             "data-[active=true]:text-yellow-200",
//           ],
//         }}
//       >
//         <NavbarBrand as={Link} href="/">
//           <GiSelfLove
//             size={40}
//             className="text-gray-200"
//           />
//           <div className="font-bold text-3xl flex">
//             <span className="text-gray-200">
//               UniDate
//             </span>
//           </div>
//         </NavbarBrand>
//         <NavbarContent justify="center">
//           {session &&
//             links.map((item) => (
//               <NavLink
//                 key={item.href}
//                 href={item.href}
//                 label={item.label}
//               />
//             ))}
//         </NavbarContent>
//         <NavbarContent justify="end">
//           {userInfo ? (
//             <UserMenu userInfo={userInfo} />
//           ) : (
//             <>
//               <Button
//                 as={Link}
//                 href="/login"
//                 variant="bordered"
//                 className="text-white"
//               >
//                 Login
//               </Button>
//               <Button
//                 as={Link}
//                 href="/register"
//                 variant="bordered"
//                 className="text-white"
//               >
//                 Register
//               </Button>
//             </>
//           )}
//         </NavbarContent>
//       </Navbar>
//       <FiltersWrapper />
//     </>
//   );
// }




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
          <div className="flex items-center justify-center bg-white/10 p-2 rounded-full transition-transform hover:scale-105">
            <GiSelfLove size={32} className="text-white" />
          </div>
          <div className="font-bold text-2xl md:text-3xl flex">
            <span className="text-white bg-clip-text bg-gradient-to-r from-white to-pink-100">
              UniDate
            </span>
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