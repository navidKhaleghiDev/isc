import { BaseButton, BaseInput } from '@ui/atoms';
import { FieldValues, useForm } from 'react-hook-form';
import { regexPattern } from '@ui/atoms/Inputs';
import { IconButton } from '@ui/atoms/BaseButton';
import { API_RULES_ASSIGN_OWNER } from '@src/services/client/rules';
import { toast } from 'react-toastify';
import { delay } from '@src/helper/utils';

type PropsType = {
  onCloseModal: () => void;
  onSuccessAdd: (serial: string) => void;
};

interface IUpdateIpValues extends FieldValues {
  serial: string;
}

export function UpdateSerialDevice({ onCloseModal, onSuccessAdd }: PropsType) {
  const { control, handleSubmit } = useForm<IUpdateIpValues>({
    mode: 'onChange',
  });

  const handelSubmitForm = async (dataForm: IUpdateIpValues) => {
    await API_RULES_ASSIGN_OWNER({ serial: dataForm.serial })
      .then(async () => {
        delay(2000).then(() => {
          onSuccessAdd(dataForm.serial);
        });
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="modal-close cursor-pointer z-50 w-full flex justify-end">
        <IconButton
          icon="iconamoon:close-bold"
          onClick={onCloseModal}
          classNameIcon="h-8 w-8 text-teal-600"
        />
      </div>
      <form
        onSubmit={handleSubmit(handelSubmitForm)}
        className="flex flex-col items-center justify-center w-64 mt-3"
      >
        <BaseInput
          size="sm"
          name="serial"
          placeholder="شماره سریال"
          id="serial"
          control={control}
          rules={{
            pattern: regexPattern.uuid4,
            required: regexPattern.required,
          }}
          fullWidth
        />
        <BaseButton
          label="ارسال شماره سریال"
          size="lg"
          className="mt-4"
          submit
        />
      </form>
    </div>
  );
}
