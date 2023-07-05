import { BaseButton } from '@ui/atoms/BaseButton';
import { Typography } from '@ui/atoms';
import { useForm } from 'react-hook-form';
import { BaseSelect } from '@ui/atoms/Inputs/BaseSelect';
import { Modal } from '@ui/molecules/Modal';
import { Divider } from '@ui/atoms/Divider';
import { NavbarHome } from '@ui/organisms/Navbar/NavbarHome';
import { useState } from 'react';
import { LoadingSvg } from '@ui/atoms/Svgs/LoadingSvg';

/* eslint-disable jsx-a11y/anchor-is-valid */
export function UiPage() {
  const { control } = useForm();
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="font-on min-h-screen flex flex-col">
      <NavbarHome />
      <Divider />
      <Typography size="h1">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و ...
      </Typography>
      <Typography size="h2">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و ...
      </Typography>
      <Typography size="h3">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و ...
      </Typography>
      <Typography size="h4">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و ...
      </Typography>
      <Typography size="h5">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و ...
      </Typography>
      <Typography size="h6">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و ...
      </Typography>
      <Typography size="body1">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و ...
      </Typography>
      <Typography size="body2">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و ...
      </Typography>
      <Typography size="body3">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و ...
      </Typography>
      <Typography size="body4">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و ...
      </Typography>
      <Typography size="caption">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و ...
      </Typography>
      <Divider />

      <BaseButton
        label="login"
        className="mt-6"
        endIcon="ic:outline-login"
        size="lg"
      />
      <BaseButton
        label="login"
        className="mt-6"
        endIcon="ic:outline-login"
        size="md"
      />
      <BaseButton
        label="login"
        className="mt-6"
        endIcon="ic:outline-login"
        size="sm"
      />

      <button
        type="button"
        disabled
        className="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-2 rounded border border-blue-700 bg-blue-700 px-3 py-2 text-sm font-medium text-white transition hover:border-blue-800 hover:bg-blue-800 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:pointer-events-none disabled:opacity-75"
      >
        <LoadingSvg />
        <span>Loading...</span>
      </button>
      <Divider />
      <BaseSelect
        control={control}
        id="sort-as"
        name="sortAs"
        placeholder="بنویسید"
      />
      <Divider />
      <BaseButton label="open modal" onClick={() => setOpenModal(!openModal)} />
      <Modal open={openModal} setOpen={setOpenModal} />
    </div>
  );
}
