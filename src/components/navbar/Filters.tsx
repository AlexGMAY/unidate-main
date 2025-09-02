// import React from "react";
// import {
//   Button,
//   Select,
//   SelectItem,
//   Slider,
//   Spinner,
//   Switch,
// } from "@nextui-org/react";
// import { useFilters } from "@/hooks/useFilters";

// export default function Filters() {
//   const {
//     orderByList,
//     genderList,
//     selectAge,
//     selectGender,
//     selectOrder,
//     selectWithPhoto,
//     filters,
//     totalCount,
//     isPending,
//   } = useFilters();

//   const { gender, ageRange, orderBy } = filters;

//   return (
//     <div className="shadow-md py-2">
//       <div className="flex flex-row justify-around items-center">
//         <div className="flex gap-2 items-center">
//           <div className="text-default font-semibold text-xl">
//             Results:{" "}
//             {isPending ? (
//               <Spinner
//                 size="sm"
//                 color="default"
//               />
//             ) : (
//               totalCount
//             )}
//           </div>
//         </div>

//         <div className="flex gap-2 items-center">
//           <div>Gender:</div>
//           {genderList.map(
//             ({ icon: Icon, value }) => (
//               <Button
//                 key={value}
//                 size="sm"
//                 isIconOnly
//                 color="default"
//                 variant={
//                   gender.includes(value)
//                     ? "solid"
//                     : "light"
//                 }
//                 onClick={() =>
//                   selectGender(value)
//                 }
//               >
//                 <Icon size={24} />
//               </Button>
//             )
//           )}
//         </div>
//         <div className="flex flex-row items-center gap-2 w-1/4">
//           <Slider
//             label="Age range"
//             size="sm"
//             minValue={18}
//             maxValue={100}
//             defaultValue={ageRange}
//             aria-label="Age range slider"
//             color="foreground"
//             onChangeEnd={(value) =>
//               selectAge(value as number[])
//             }
//           />
//         </div>
//         <div className="flex flex-col items-center">
//           <p className="text-sm">With photo</p>
//           <Switch
//             color="default"
//             defaultSelected
//             size="sm"
//             onChange={(checked) =>
//               selectWithPhoto(checked)
//             }
//           />
//         </div>
//         <div className="w-1/4">
//           <Select
//             size="sm"
//             fullWidth
//             label="Order by"
//             variant="bordered"
//             color="default"
//             aria-label="Order by selector"
//             selectedKeys={new Set([orderBy])}
//             onSelectionChange={selectOrder}
//           >
//             {orderByList.map((item) => (
//               <SelectItem
//                 key={item.value}
//                 value={item.value}
//               >
//                 {item.label}
//               </SelectItem>
//             ))}
//           </Select>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";
import {
  Button,
  Select,
  SelectItem,
  Slider,
  Spinner,
  Switch,
  Tooltip,
  Chip,
} from "@nextui-org/react";
import { useFilters } from "@/hooks/useFilters";

export default function Filters() {
  const {
    orderByList,
    genderList,
    selectAge,
    selectGender,
    selectOrder,
    selectWithPhoto,
    filters,
    totalCount,
    isPending,
  } = useFilters();

  const { gender, ageRange, orderBy } = filters;

  return (
    <div className="bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm py-4 px-6">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
        {/* Results Count */}
        <div className="flex items-center">
          <div className="text-slate-800 font-semibold text-lg flex items-center gap-2">
            <span>Results:</span>
            {isPending ? (
              <Spinner size="sm" color="default" />
            ) : (
              <Chip 
                color="default" 
                variant="flat"
                className="bg-pink-100 text-pink-700 font-bold"
              >
                {totalCount}
              </Chip>
            )}
          </div>
        </div>

        {/* Gender Filter */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-slate-700">Gender:</span>
          <div className="flex gap-1">
            {genderList.map(({ icon: Icon, value }) => (
              <Tooltip key={value} content={value.charAt(0).toUpperCase() + value.slice(1)}>
                <Button
                  size="sm"
                  isIconOnly
                  className={`min-w-10 h-10 transition-all ${
                    gender.includes(value)
                      ? "bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-md"
                      : "bg-white/80 text-slate-600 border border-slate-200 hover:bg-slate-50"
                  }`}
                  onClick={() => selectGender(value)}
                >
                  <Icon size={20} />
                </Button>
              </Tooltip>
            ))}
          </div>
        </div>

        {/* Age Range Slider */}
        <div className="flex flex-col items-center gap-2 w-full lg:w-1/4">
          <div className="flex justify-between w-full">
            <span className="text-sm font-medium text-slate-700">Age: {ageRange[0]} - {ageRange[1]}</span>
          </div>
          <Slider
            size="sm"
            minValue={18}
            maxValue={100}
            defaultValue={ageRange}
            aria-label="Age range slider"
            color="foreground"
            className="w-full"
            classNames={{
              track: "bg-slate-200",
              filler: "bg-gradient-to-r from-pink-500 to-rose-600",
              thumb: "bg-gradient-to-r from-pink-500 to-rose-600",
            }}
            onChangeEnd={(value) => selectAge(value as number[])}
          />
        </div>

        {/* With Photo Switch */}
        <div className="flex flex-col items-center">
          <span className="text-sm font-medium text-slate-700 mb-1">Photos only</span>
          <Switch
            color="default"
            defaultSelected
            size="sm"
            classNames={{
              wrapper: "bg-slate-200 group-data-[selected=true]:bg-gradient-to-r from-pink-500 to-rose-600",
              thumb: "bg-white",
            }}
            onChange={(checked) => selectWithPhoto(checked)}
          />
        </div>

        {/* Order By Select */}
        <div className="w-full lg:w-1/5">
          <Select
            size="sm"
            label="Sort by"
            variant="bordered"
            aria-label="Order by selector"
            selectedKeys={new Set([orderBy])}
            onSelectionChange={selectOrder}
            classNames={{
              trigger: "bg-white/80 border-slate-200 h-10",
              label: "text-slate-700",
              value: "text-slate-800",
            }}
          >
            {orderByList.map((item) => (
              <SelectItem
                key={item.value}
                value={item.value}
                className="text-slate-800"
              >
                {item.label}
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>
    </div>
  );
}
