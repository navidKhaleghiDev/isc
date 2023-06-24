import { BaseButton } from '@ui/atoms/BaseButton';
import { Link } from 'react-router-dom';

import { Typography } from '@ui/atoms';
import { NavbarHome } from '@ui/organisms/Navbar/NavbarHome';
import { ROUTES_PATH } from '@src/routes/routesConstants';

/* eslint-disable jsx-a11y/anchor-is-valid */
export function HomePage() {
  return (
    <div className="font-on min-h-screen flex flex-col items-center">
      <NavbarHome />
      <div className="max-w-screen-sm flex flex-col justify-center items-center flex-1">
        <Typography className="text-justify" size="body2">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </Typography>

        <Link to={ROUTES_PATH.login}>
          <BaseButton
            label="login"
            className="mt-6 w-64"
            endIcon="ic:outline-login"
            size="lg"
          />
        </Link>
      </div>
    </div>
  );
}
