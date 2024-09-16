import { borderSize } from './styles';

type RadiusParamsType = {
  size: 'Small' | 'Medium' | 'Large';
};

const sizeMap = {
  Small: 5,
  Medium: 10,
  Large: 20,
};

export function Radius({ size }: RadiusParamsType) {
  const roundedSizeClass = borderSize({ size });

  return (
    <div className="w-[16.875rem]">
      <div className="flex items-center justify-between before:content-[''] before:block before:bg-sky-600 before:h-[2px] before:w-full before:order-[2] mb-16">
        <span className="order-1 bg-white px-2">{size}</span>
        <span className="order-3 bg-white px-2">{sizeMap[size]}</span>
      </div>
      <div className={`w-full h-[6.25rem] bg-teal-400 ${roundedSizeClass}`}>
        Border Radius
      </div>
    </div>
  );
}
