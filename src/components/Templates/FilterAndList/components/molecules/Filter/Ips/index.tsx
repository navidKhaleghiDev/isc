import { useState } from 'react';
import { BaseButton, Card, BaseInput, Typography } from '@ui/atoms';
import { useForm } from 'react-hook-form';
import { IconButton } from '@ui/atoms/BaseButton';

export function FilterIps() {
  const [openIps, setOpenIps] = useState<'internal' | 'external' | null>(null);
  const { control } = useForm();
  return (
    <>
      <div className="flex w-full justify-center items-center my-6">
        <BaseButton
          label="آی پی های مجاز خارجی"
          size="lg"
          type={openIps === 'external' ? 'default' : 'shadow'}
          onClick={() => setOpenIps('external')}
          className="mx-2"
        />
        <BaseButton
          label="آی پی های مجاز داخلی"
          size="lg"
          type={openIps === 'internal' ? 'default' : 'shadow'}
          onClick={() => setOpenIps('internal')}
          className="mx-2"
        />
      </div>
      <div>
        {openIps && (
          <>
            <Card color="neutral" className="pt-5 px-3">
              <div className="grid grid-cols-4 gap-x-3">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((item) => (
                  <BaseInput
                    size="xs"
                    key={item}
                    name="name"
                    placeholder="بنویسید"
                    id="id"
                    control={control}
                    className=""
                  />
                ))}
              </div>
            </Card>
            <div className="flex mt-2">
              <IconButton
                icon="fe:check"
                color="teal"
                className="mx-2"
                onClick={() => setOpenIps(null)}
              />
              <IconButton
                icon="fe:close"
                color="red"
                className="mx-2"
                onClick={() => setOpenIps(null)}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}
