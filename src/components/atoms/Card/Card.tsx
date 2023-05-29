import { cardStyles } from './styles';
import { ICard } from './types';

export function Card({
  children,
  className,
  rounded,
  borderColor,
  border,
  type,
}: ICard) {
  return (
    <div
      className={cardStyles({ type, className, rounded, borderColor, border })}
    >
      {children}
    </div>
  );
}
