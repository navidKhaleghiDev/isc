// import { BaseIcon } from '@ui/atoms';
// import { DropdownProps, IOptionSelect } from '@ui/atoms/DropDown/type';

// export function StatusDropdown({
//   options,
//   isOpen,
//   toggleDropdown,
// }: DropdownProps) {
//   if (!isOpen) return null;

//   const statusStyle = (status: string) => {
//     switch (status) {
//       case 'expired':
//         return 'bg-red-100 text-red-500 text-xs sm:text-base';
//       case 'disable':
//         return 'bg-neutral-100 text-neutral-500 text-xs sm:text-base';
//       case 'active':
//         return 'bg-teal-200	 text-teal-500 text-xs sm:text-base';
//       default:
//         return 'bg-neutral-100 text-neutral-500 text-xs sm:text-base';
//     }
//   };
//   return (
//     <div className="absolute top-full left-2  z-50">
//       <div className="flex flex-col justify-center items-center mt-2.5 shadow-md rounded-lg sm:rounded-[1.25rem] w-40 h-[7.25rem] sm:w-64 sm:h-[13.75rem] bg-white">
//         {options.map((option) => (
//           <button
//             key={option.id}
//             className={`p-3 rounded-lg w-[8.75rem] h-6 sm:w-[12.1rem] sm:h-10 flex items-center ${statusStyle(
//               option.status
//             )}`}
//             type="button"
//             onClick={() => toggleDropdown(false)}
//           >
//             <BaseIcon icon={option.icon} className="ml-[1.1rem]" />
//             {option.label}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }
