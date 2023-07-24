/* eslint-disable react/no-array-index-key */
import { BaseButton, Card, Typography } from '@ui/atoms';
import { SliceOrderCodeType } from '@src/helper/utils/ruleCodes';
import { CodeLineRule } from '@ui/molecules/RuleDetail/CodeLineRule';

type ReturnArrayDifferenceType = {
  removedList: SliceOrderCodeType[];
  addedList: SliceOrderCodeType[];
  changedList: SliceOrderCodeType[];
};

const getArrayDifference = (
  oldPolicies?: SliceOrderCodeType[],
  newPolicies?: SliceOrderCodeType[]
): ReturnArrayDifferenceType => {
  if (!oldPolicies || !newPolicies) {
    return {
      removedList: [],
      addedList: [],
      changedList: [],
    };
  }
  let removedList: SliceOrderCodeType[] = [];
  let addedList: SliceOrderCodeType[] = [];
  const changedList: SliceOrderCodeType[] = [];

  if (oldPolicies.length < newPolicies.length) {
    // added policy
    addedList = newPolicies.filter(
      (newPolicy) =>
        !oldPolicies.some((oldPolicy) => oldPolicy.id === newPolicy.id)
    );
  } else if (oldPolicies.length > newPolicies.length) {
    // removed policy
    removedList = oldPolicies.filter(
      (oldPolicy) =>
        !newPolicies.some((newPolicy) => oldPolicy.id === newPolicy.id)
    );
  }

  newPolicies.forEach((_, index) => {
    if (oldPolicies[index]?.code !== newPolicies[index]?.code) {
      changedList.push(newPolicies[index]);
    }
  });

  return {
    removedList,
    addedList,
    changedList: [...changedList, ...removedList],
  };
};

type PropsType = {
  myRuleCodeList: SliceOrderCodeType[];
  ruleCodeList: SliceOrderCodeType[];
  onAddHandler: (additional: SliceOrderCodeType[]) => void;
  isSetAdditional: boolean;
};

export function AdditionalList({
  myRuleCodeList,
  ruleCodeList,
  onAddHandler,
  isSetAdditional,
}: PropsType) {
  console.log({
    myRuleCodeList,
    ruleCodeList,
  });

  if (isSetAdditional) {
    return null;
  }
  const { removedList, addedList, changedList } = getArrayDifference(
    myRuleCodeList,
    ruleCodeList
  );

  console.log({ removedList, addedList, changedList });

  const handleOnClickAddAdditionalPolicies = () => {
    onAddHandler(ruleCodeList);
  };

  return changedList?.length > 0 ? (
    <div className="mt-5">
      <Card
        className="p-4 max-h-[24rem] overflow-y-auto"
        color="neutral"
        border
        borderColor="teal"
      >
        <div className="flex items-center justify-between">
          <Typography size="body2" color="yellow">
            سیاست های زیر به این قانون اضافه شده است.
          </Typography>
          <BaseButton
            label="اضافه کن"
            size="sm"
            type="secondary"
            onClick={handleOnClickAddAdditionalPolicies}
          />
        </div>
        {changedList.map((code: SliceOrderCodeType, index: number) => {
          return <CodeLineRule key={`${index}_${code.order}`} code={code} />;
        })}
      </Card>
    </div>
  ) : null;
}

const myRuleCodeList = [
  {
    code: ' tcp any any -> $HOME_NET any (msg:"ping detected … text"; sid:1000003; rev:1;classtype:icmp-event;)',
    order: 'drop',
    id: 0,
  },
  {
    code: ' tcp any any -> $HOME_NET any (msg:"ping detected test"; sid:1000004; rev:1;classtype:icmp-event;)',
    order: 'drop',
    id: 1,
  },
  {
    code: ' tcp any any -> $HOME_NET any (msg:"ping detected … text"; sid:1000005; rev:1;classtype:icmp-event;)',
    order: 'drop',
    id: 2,
  },
];

const ruleCodeList = [
  {
    code: ' tcp any any -> $HOME_NET any (msg:"ping detected test"; sid:1000004; rev:1;classtype:icmp-event;)',
    order: 'drop',
    id: 0,
  },
  {
    code: ' tcp any any -> $HOME_NET any (msg:"ping detected … text"; sid:1000005; rev:1;classtype:icmp-event;)',
    order: 'drop',
    id: 1,
  },
];
