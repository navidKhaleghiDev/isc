// interface DropdownProps {
//   options: { id: string; label: string }[];
//   isOpen: boolean;
//   toggleDropdown: (isOpen: boolean) => void;
// }

// export default StatusDropdown;

// export function StatusDropdown({
//   options,
//   isOpen,
//   toggleDropdown,
// }: DropdownProps) {
//   if (!isOpen) return null;

//   return (
//     <div className="absolute top-full left-2 mt-2.5 border border-white rounded-[1.25rem] w-64 h-[13.75rem] shadow-lg z-50 bg-teal-300">
//       {options.map((option) => (
//         <div
//           key={option.id}
//           className="p-3 hover:bg-red-100 cursor-pointer rounded-lg w-[12.1rem] h-10 bg-yellow-100 flex items-center"
//           onClick={() => toggleDropdown(false)}
//         >
//           {option.label}
//         </div>
//       ))}
//     </div>
//   );
// }
