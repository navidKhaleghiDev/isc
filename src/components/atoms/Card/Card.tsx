import { cardStyles } from './styles';
import { ICard } from './types';

export function Card({ children, className, intent }: ICard) {
  return <div className={cardStyles({ intent, className })}>{children}</div>;
}
