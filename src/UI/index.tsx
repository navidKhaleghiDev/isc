import { BaseIcon } from '@ui/atoms';
import Pencil from '@iconify-icons/ph/pencil-simple';
import Check from '@iconify-icons/ph/check';

export default function BaseIconTest() {
  return (
    <>
      <BaseIcon icon={Pencil} color="redLight" size="md" />
      <BaseIcon icon={Check} color="neutral" size="responsive" />
    </>
  );
}
