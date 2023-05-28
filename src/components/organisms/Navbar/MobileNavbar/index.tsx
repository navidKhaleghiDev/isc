/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { VerticalNavigation } from '../VerticalNavigation';

type PropsType = { openDrawer: any; setOpenDrawer: any };
export function MobileNavbar({ openDrawer, setOpenDrawer }: PropsType) {
  if (!openDrawer) {
    return null;
  }
  return (
    <div
      className={`w-full h-full absolute z-40  transform  ${
        openDrawer ? '-translate-x-full' : 'translate-x-0'
      } `}
    >
      <div
        className="bg-gray-800 opacity-50 inset-0 fixed w-full h-full"
        onClick={() => setOpenDrawer(!openDrawer)}
      />
      <div className="w-64 absolute left-0 z-40 top-0 bg-white shadow flex-col justify-between transition duration-150 ease-in-out h-full">
        <div className="flex flex-col justify-between h-full">
          <div className="px-6 pt-4 overflow-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <svg
                  aria-label="Home"
                  id="logo"
                  enableBackground="new 0 0 300 300"
                  height={43}
                  viewBox="0 0 300 300"
                  width={43}
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g>
                    <path
                      fill="#4c51bf"
                      d="m234.735 35.532c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm0 24c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm-62.529-14c0-2.502 2.028-4.53 4.53-4.53s4.53 2.028 4.53 4.53c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.027-4.53-4.529zm89.059 60c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.028-4.53-4.529c0-2.502 2.028-4.53 4.53-4.53s4.53 2.029 4.53 4.53zm-40.522-5.459-88-51.064c-1.242-.723-2.773-.723-4.016 0l-88 51.064c-1.232.715-1.992 2.033-1.992 3.459v104c0 1.404.736 2.705 1.938 3.428l88 52.936c.635.381 1.35.572 2.062.572s1.428-.191 2.062-.572l88-52.936c1.201-.723 1.938-2.023 1.938-3.428v-104c0-1.426-.76-2.744-1.992-3.459zm-90.008-42.98 80.085 46.47-52.95 31.289-23.135-13.607v-21.713c0-2.209-1.791-4-4-4s-4 1.791-4 4v21.713l-26.027 15.309c-1.223.719-1.973 2.029-1.973 3.447v29.795l-52 30.727v-94.688zm0 198.707-80.189-48.237 51.467-30.412 24.723 14.539v19.842c0 2.209 1.791 4 4 4s4-1.791 4-4v-19.842l26.027-15.307c1.223-.719 1.973-2.029 1.973-3.447v-31.667l52-30.728v94.729z"
                    />
                  </g>
                </svg>
                <p className="text-bold md:text2xl text-base pl-3 text-gray-800">
                  The North
                </p>
              </div>
              <div
                id="cross"
                className=" text-gray-800"
                onClick={() => setOpenDrawer(!openDrawer)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-x"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1={18} y1={6} x2={6} y2={18} />
                  <line x1={6} y1={6} x2={18} y2={18} />
                </svg>
              </div>
            </div>
            <VerticalNavigation />
          </div>
          <div className="w-full">
            <div className="flex justify-center mb-4 w-full px-6">
              <div className="relative w-full">
                <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-search"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="#A0AEC0"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx={10} cy={10} r={7} />
                    <line x1={21} y1={21} x2={15} y2={15} />
                  </svg>
                </div>
                <input
                  className="bg-gray-100 focus:outline-none rounded w-full text-sm text-gray-500 bg-gray-100 pl-10 py-2"
                  type="text"
                  placeholder="Search"
                />
              </div>
            </div>
            <div className="border-t border-gray-300">
              <div className="w-full flex items-center justify-between px-6 pt-1">
                <div className="flex items-center">
                  <img
                    alt="profile-pic"
                    src="https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png"
                    className="w-8 h-8 rounded-md"
                  />
                  <p className=" text-gray-800 text-base leading-4 ml-2">
                    Jane Doe
                  </p>
                </div>
                <ul className="flex">
                  <li className="cursor-pointer text-white pt-5 pb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-messages"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="#718096"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                      <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
                    </svg>
                  </li>
                  <li className="cursor-pointer text-white pt-5 pb-3 pl-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-bell"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="#718096"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                      <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
