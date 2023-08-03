import {
  AccordionButton,
  IAccordionButton,
  accordionButtonData,
} from '@ui/atoms/AccordionButton';
import { useState } from 'react';

export function SupportPage() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div className="p-16">
      {accordionButtonData.map((item: IAccordionButton) => (
        <AccordionButton
          key={item.id}
          open={open}
          setOpen={setOpen}
          item={item}
        />
      ))}
    </div>
  );
}
