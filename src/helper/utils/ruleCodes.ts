const getCodeListPattern = /[alert|drop|block|pass|reject][\s\S]+?\)/gm;
// const getCodeListPattern =
//   /[alert|drop|block|pass].+?[alert|drop|block|pass]\)/gm;

const sliceOrderPattern = /^(alert|drop|block|pass|reject)/;

export type SliceOrderCodeType = {
  order: string;
  code: string;
};

export function splitCodesAsList(code: string): string[] | null {
  return code.match(getCodeListPattern);
}

export function splitOrderCode(singleCode: string): SliceOrderCodeType {
  const splitted = singleCode.split(sliceOrderPattern);
  return { order: splitted[1], code: splitted[2] };
}

export function getCodeList(data: string): SliceOrderCodeType[] | null {
  const list = data.match(getCodeListPattern);
  const newList: SliceOrderCodeType[] = [];
  list?.forEach((li) => {
    const { code, order } = splitOrderCode(li);
    if (code && order) {
      newList.push({ code, order });
    }
  });
  return newList;
}
