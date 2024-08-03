import { Typography } from '@ui/atoms';
import { SliceOrderCodeType } from '@src/helper/utils/ruleCodes';
import { CodeLineSelect } from './CodeLineSelect';

type TCodeLIneProp = {
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
 * @param {boolean} disable - disables code line
 *
 *
 * @returns {JSX.Element} The rendered a section include rule code and action
 */

export function CodeLine({ code, onChangeOrder, id, disable }: TCodeLIneProp) {
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
      <Typography type="span" size="body5" className="text-neutral-900 ml-9">
        {code?.code}
      </Typography>
    </div>
  );
}
