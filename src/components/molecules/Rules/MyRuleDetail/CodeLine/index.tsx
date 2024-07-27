import { Typography } from '@ui/atoms';
import { SliceOrderCodeType } from '@src/helper/utils/ruleCodes';
import { CodeLineSelect } from './CodeLineSelect';

type PropsType = {
  code: SliceOrderCodeType;
  onChangeOrder: any;
  id: string;
  disable: boolean;
};

/**
 * CodeLine Component
 *
 * This component renders a section include rule code and action
 *
 * @component
 *
 * @param {PropsType} props - The props for the CodeLine component.
 * @param {string} code - Includes rule code
 * @param {*} onChangeOrder - handler change function for code action
 * @param {string} id - id for changed management
 *
 * @returns {JSX.Element} The rendered a section include rule code and action
 */

export function CodeLine({ code, onChangeOrder, id, disable }: PropsType) {
  if (!code?.order || !code?.code) {
    return null;
  }
  return (
    <div dir="ltr" className="flex">
      <CodeLineSelect
        value={code.order}
        onChange={onChangeOrder}
        id={id}
        disableSelect={disable}
      />
      <Typography type="span" size="body5" className="text-neutral-900 ml-6">
        {code?.code}
      </Typography>
    </div>
  );
}
