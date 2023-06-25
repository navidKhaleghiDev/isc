export function Tooltip() {
  return (
    <div className="container mx-auto py-12">
      <div className="-mx-4 flex flex-wrap justify-center">
        <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
          <div className="mb-14">
            <div className="group relative inline-block">
              <button className="bg-primary inline-flex rounded py-2 px-[18px] text-base font-semibold text-white">
                Tooltip on top
              </button>
              <div className="absolute bottom-full left-1/2 z-20 mb-3 -translate-x-1/2 whitespace-nowrap rounded bg-black py-[6px] px-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-100">
                <span className="absolute bottom-[-3px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-black" />
                Tooltip Text
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
          <div className="mb-14">
            <div className="group relative inline-block">
              <button className="bg-primary inline-flex rounded py-2 px-[18px] text-base font-semibold text-white">
                Tooltip on right
              </button>
              <div className="absolute left-full top-1/2 z-20 ml-3 -translate-y-1/2 whitespace-nowrap rounded bg-black py-[6px] px-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-100">
                <span className="absolute left-[-3px] top-1/2 -z-10 h-2 w-2 -translate-y-1/2 rotate-45 rounded-sm bg-black" />
                Tooltip Text
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
          <div className="mb-14">
            <div className="group relative inline-block">
              <button className="bg-primary inline-flex rounded py-2 px-[18px] text-base font-semibold text-white">
                Tooltip on bottom
              </button>
              <div className="absolute top-full left-1/2 z-20 mt-3 -translate-x-1/2 whitespace-nowrap rounded bg-black py-[6px] px-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-100">
                <span className="absolute top-[-3px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-black" />
                Tooltip Text
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
          <div className="mb-14 text-right sm:text-left">
            <div className="group relative inline-block">
              <button className="bg-primary inline-flex rounded py-2 px-[18px] text-base font-semibold text-white">
                Tooltip on left
              </button>
              <div className="absolute right-full top-1/2 z-20 mr-3 -translate-y-1/2 whitespace-nowrap rounded bg-black py-[6px] px-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-100">
                <span className="absolute right-[-3px] top-1/2 -z-10 h-2 w-2 -translate-y-1/2 rotate-45 rounded-sm bg-black" />
                Tooltip Text
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
