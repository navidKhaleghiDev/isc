/* eslint-disable no-nested-ternary */
import { BaseButton, Card, Typography } from '@ui/atoms';
import { Link } from 'react-router-dom';
import { ROUTES_PATH } from '@src/routes/routesConstants';
import numberOne from '@iconify-icons/ph/number-one';
import numberTwo from '@iconify-icons/ph/number-two';
import numberThree from '@iconify-icons/ph/number-three';

export function AiButtonsCard() {
  return (
    <Card color="neutral" className="grid grid-cols-1 col-start-2 text-center">
      <Typography color="teal" size="h5" className="my-1">
        سرویس هوش مصنوعی
      </Typography>
      <div className="grid grid-cols-3 gap-3">
        <Link to={ROUTES_PATH.myProductAiListener}>
          <BaseButton
            fullWidth
            label="آنالیز کننده"
            size="lg"
            startIcon={numberOne}
          />
        </Link>
        <Link to={ROUTES_PATH.myProductAiLearner}>
          <BaseButton
            fullWidth
            label="یادگیری داده"
            size="lg"
            startIcon={numberTwo}
          />
        </Link>
        <Link to={ROUTES_PATH.myProductAiDetector}>
          <BaseButton
            fullWidth
            label="تشخیص حمله"
            size="lg"
            startIcon={numberThree}
          />
        </Link>
      </div>
    </Card>
  );
}
