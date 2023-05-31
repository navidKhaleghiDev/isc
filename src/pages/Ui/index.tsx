import { BaseButton } from '@ui/atoms/BaseButton';
import { Link } from 'react-router-dom';

import { Typography } from '@ui/atoms';
import { Navbar } from './Navbar';
import { Select } from '@ui/atoms/Select/Select';

function Divider() {
  return (
    <hr
      style={{
        width: '100%',
        background: 'gray',
        height: '4px',
      }}
    />
  );
}

/* eslint-disable jsx-a11y/anchor-is-valid */
export function UiPage() {
  return (
    <div className="font-on min-h-screen flex flex-col">
      <Navbar />
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
      <Divider />
      <Select />
    </div>
  );
}
