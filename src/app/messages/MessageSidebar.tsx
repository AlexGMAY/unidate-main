// "use client";

// import useMessageStore from "@/hooks/useMessageStore";
// import { Chip } from "@nextui-org/react";
// import clsx from "clsx";
// import {
//   usePathname,
//   useRouter,
//   useSearchParams,
// } from "next/navigation";
// import React, { useState } from "react";
// import { GoInbox } from "react-icons/go";
// import { MdOutlineOutbox } from "react-icons/md";

// export default function MessageSidebar() {
//   const searchParams = useSearchParams();
//   const pathname = usePathname();
//   const router = useRouter();
//   const [selected, setSelected] =
//     useState<string>(
//       searchParams.get("container") || "inbox"
//     );

//   const items = [
//     {
//       key: "inbox",
//       label: "Inbox",
//       icon: GoInbox,
//       chip: true,
//     },
//     {
//       key: "outbox",
//       label: "Outbox",
//       icon: MdOutlineOutbox,
//       chip: false,
//     },
//   ];

//   const handleSelect = (key: string) => {
//     setSelected(key);
//     const params = new URLSearchParams();
//     params.set("container", key);
//     router.replace(`${pathname}?${params}`);
//   };

//   const { unreadCount } = useMessageStore(
//     (state) => ({
//       unreadCount: state.unreadCount,
//     })
//   );

//   return (
//     <div className="flex flex-col shadow-md rounded-lg cursor-pointer">
//       {items.map(
//         ({ key, icon: Icon, label, chip }) => (
//           <div
//             key={key}
//             className={clsx(
//               "flex flex-row items-center rounded-t-lg gap-2 p-3",
//               {
//                 "text-default font-semibold":
//                   selected === key,
//                 "text-black hover:text-default/70":
//                   selected !== key,
//               }
//             )}
//             onClick={() => handleSelect(key)}
//           >
//             <Icon size={24} />
//             <div className="flex justify-between flex-grow">
//               <span>{label}</span>
//               {chip && <Chip>{unreadCount}</Chip>}
//             </div>
//           </div>
//         )
//       )}
//     </div>
//   );
// }

"use client";

import useMessageStore from "@/hooks/useMessageStore";
import { Chip } from "@nextui-org/react";
import clsx from "clsx";
import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import React, { useState } from "react";
import { GoInbox } from "react-icons/go";
import { MdOutlineOutbox } from "react-icons/md";

export default function MessageSidebar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [selected, setSelected] = useState<string>(
    searchParams.get("container") || "inbox"
  );

  const items = [
    {
      key: "inbox",
      label: "Inbox",
      icon: GoInbox,
      chip: true,
    },
    {
      key: "outbox",
      label: "Outbox",
      icon: MdOutlineOutbox,
      chip: false,
    },
  ];

  const handleSelect = (key: string) => {
    setSelected(key);
    const params = new URLSearchParams();
    params.set("container", key);
    router.replace(`${pathname}?${params}`);
  };

  const { unreadCount } = useMessageStore((state) => ({
    unreadCount: state.unreadCount,
  }));

  return (
    <div className="flex flex-col bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl overflow-hidden">
      {items.map(({ key, icon: Icon, label, chip }) => (
        <div
          key={key}
          className={clsx(
            "flex items-center gap-4 p-5 transition-all duration-200 cursor-pointer border-b border-white/20 last:border-b-0",
            {
              "bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-inner": 
                selected === key,
              "text-gray-700 hover:bg-gray-50/80 hover:text-gray-900": 
                selected !== key,
            }
          )}
          onClick={() => handleSelect(key)}
        >
          <Icon 
            size={22} 
            className={clsx("flex-shrink-0", {
              "text-white": selected === key,
              "text-gray-500": selected !== key,
            })} 
          />
          
          <div className="flex justify-between items-center flex-grow">
            <span className={clsx("font-medium text-sm", {
              "font-semibold": selected === key,
            })}>
              {label}
            </span>
            
            {chip && unreadCount > 0 && (
              <Chip 
                size="sm"
                variant="flat"
                classNames={{
                  base: clsx({
                    "bg-white/20 text-white border-white/30": selected === key,
                    "bg-pink-100 text-pink-700 border-pink-200": selected !== key,
                  }),
                  content: "font-semibold text-xs"
                }}
              >
                {unreadCount}
              </Chip>
            )}
          </div>

          {/* Selection indicator */}
          {selected === key && (
            <div className="w-1 h-6 bg-white rounded-full ml-1" />
          )}
        </div>
      ))}
    </div>
  );
}