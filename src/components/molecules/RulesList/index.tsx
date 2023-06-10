import { useState } from 'react';
import { Modal } from '../Modal';
import { RulesCard } from '../RulesCard';

export function RulesList() {
  const [openModal, setOpenModal] = useState(false);
  const handleOnClickAdd = (id: string) => {
    setOpenModal(true);
  };
  return (
    <div className="w-full mt-8">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
        <RulesCard key={item} onClickAdd={() => handleOnClickAdd(item)} />
      ))}
      <Modal open={openModal} setOpen={setOpenModal} />
    </div>
  );
}
