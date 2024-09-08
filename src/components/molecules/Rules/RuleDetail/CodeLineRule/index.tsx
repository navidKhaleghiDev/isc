import { Card, Typography } from '@ui/atoms';
import { SliceOrderCodeType } from '@src/helper/utils/ruleCodes';

/**
 * CodeLineRule Component
 *
 * This component renders a card displaying a code and its order.
 *
 * @component
 *
 * @param {Object} props - The props for the CodeLineRule component.
 * @param {SliceOrderCodeType} props.code - The code object containing order and code.
 *
 * @returns {JSX.Element | null} The rendered CodeLineRule component or null if order or code is missing.
 */

export function CodeLineRule({ code }: { code: SliceOrderCodeType }) {
  if (!code?.order || !code?.code) {
    return null;
  }
  return (
    <Card className="my-2 font-sans flex text-left p-2">
      <Typography type="span" size="body3" className="text-neutral-400">
        <Typography type="span" color="teal" size="h4" className="mr-2">
          {code.order && code.order.toLocaleUpperCase()}
        </Typography>
        {code?.code}
      </Typography>
    </Card>
  );
}
