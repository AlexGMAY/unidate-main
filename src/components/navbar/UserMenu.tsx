// "use client";

// import { signOutUser } from "@/app/actions/authActions";
// import {
//   Avatar,
//   Dropdown,
//   DropdownItem,
//   DropdownMenu,
//   DropdownSection,
//   DropdownTrigger,
// } from "@nextui-org/react";
// import Link from "next/link";
// import React from "react";

// type Props = {
//   userInfo: {
//     name: string | null;
//     image: string | null;
//   } | null;
// };

// export default function UserMenu({
//   userInfo,
// }: Props) {
//   return (
//     <Dropdown placement="bottom-end">
//       <DropdownTrigger>
//         <Avatar
//           isBordered
//           as="button"
//           className="transition-transform"
//           color="default"
//           name={userInfo?.name || "user avatar"}
//           size="sm"
//           src={
//             userInfo?.image || "/images/user.png"
//           }
//         />
//       </DropdownTrigger>
//       <DropdownMenu
//         variant="flat"
//         aria-label="User actions menu"
//       >
//         <DropdownSection showDivider>
//           <DropdownItem
//             isReadOnly
//             as="span"
//             className="h-14 flex flex-row"
//             aria-label="username"
//           >
//             Signed in as {userInfo?.name}
//           </DropdownItem>
//         </DropdownSection>
//         <DropdownItem
//           as={Link}
//           href="/members/edit"
//         >
//           Edit profile
//         </DropdownItem>
//         <DropdownItem
//           color="danger"
//           onClick={async () => signOutUser()}
//         >
//           Log out
//         </DropdownItem>
//       </DropdownMenu>
//     </Dropdown>
//   );
// }


"use client";

import { signOutUser } from "@/app/actions/authActions";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  User,
} from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { 
  FiSettings, 
  FiLogOut, 
  FiUser,
  FiEdit
} from "react-icons/fi";

type Props = {
  userInfo: {
    name: string | null;
    image: string | null;
    email?: string | null;
  } | null;
};

export default function UserMenu({ userInfo }: Props) {
  return (
    <Dropdown placement="bottom-end" className="min-w-[240px]">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform hover:scale-110 border-2 border-white/20 shadow-lg"
          color="default"
          name={userInfo?.name || "user avatar"}
          size="sm"
          src={userInfo?.image || "/images/user.png"}
          classNames={{
            base: "bg-gradient-to-br from-pink-500 to-rose-600",
            icon: "text-white/80",
          }}
        />
      </DropdownTrigger>
      <DropdownMenu
        variant="flat"
        aria-label="User actions menu"
        className="p-2"
        itemClasses={{
          base: "rounded-lg data-[hover=true]:bg-pink-50 data-[hover=true]:text-pink-700",
        }}
      >
        <DropdownSection showDivider className="pb-2">
          <DropdownItem
            isReadOnly
            as="span"
            className="h-16 flex flex-col items-start justify-center cursor-default"
            aria-label="User information"
          >
            <User
              name={userInfo?.name || "User"}
              description={userInfo?.email || "Member"}
              className="transition-transform"
              avatarProps={{
                src: userInfo?.image || "/images/user.png",
                size: "sm",
                className: "border-2 border-pink-200",
              }}
              classNames={{
                name: "text-slate-800 font-semibold",
                description: "text-slate-500 text-sm",
              }}
            />
          </DropdownItem>
        </DropdownSection>
        
        <DropdownSection>
          <DropdownItem
            as={Link}
            href="/members/edit"
            className="group h-12"
            startContent={<FiEdit className="text-lg text-pink-600 group-hover:text-pink-700" />}
          >
            <span className="text-slate-700 group-hover:text-pink-700">Edit Profile</span>
          </DropdownItem>
          
          {/* <DropdownItem
            as={Link}
            href="/settings"
            className="group h-12"
            startContent={<FiSettings className="text-lg text-slate-600 group-hover:text-pink-700" />}
          >
            <span className="text-slate-700 group-hover:text-pink-700">Settings</span>
          </DropdownItem>
          
          <DropdownItem
            as={Link}
            href="/profile"
            className="group h-12"
            startContent={<FiUser className="text-lg text-slate-600 group-hover:text-pink-700" />}
          >
            <span className="text-slate-700 group-hover:text-pink-700">View Profile</span>
          </DropdownItem> */}
        </DropdownSection>
        
        <DropdownSection>
          <DropdownItem
            color="danger"
            onClick={async () => signOutUser()}
            className="group h-12 text-danger hover:bg-danger-50 rounded-lg"
            startContent={<FiLogOut className="text-lg text-danger group-hover:text-danger-600" />}
          >
            <span className="text-danger group-hover:text-danger-600 font-medium">Log out</span>
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}