import {
  Dispatch,
  MutableRefObject,
  RefObject,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

export function useClickOutside(props: {
  ref: MutableRefObject<HTMLDivElement | null>;
  setValue: Dispatch<SetStateAction<boolean>>;
  value: boolean;
}) {
  const { ref, setValue, value } = props;
  // const [open, setOpen] = useState(false);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event?.target as Node)) {
        setValue(!value);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, setValue, value]);
  // return { open, setOpen };
}

// const useOutsideAlerter = (ref: RefObject<HTMLDivElement>) => {
//     const [isShowComponent, setIsShowComponent] = useState<boolean>(true);

//     useEffect(() => {
//       function handleClickOutside(event: MouseEvent) {
//         if (ref?.current && !ref?.current.contains(event?.target as Node)) {
//           setIsShowComponent(false);
//         }
//       }
//       // Bind the event listener
//       document.addEventListener('click', handleClickOutside);
//       return () => {
//         // Unbind the event listener on clean up
//         document.removeEventListener('click', handleClickOutside);
//       };
//     }, [ref]);

//     return { isShowComponent, setIsShowComponent };
//   };

//   export default useOutsideAlerter;
