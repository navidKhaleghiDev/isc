type InputObjectType = { [key: string]: any };
type OutputObjectType = { id: string; label: string; value: any };
type Mapping = { id: string; label: string; value: string };

export function generateOptionsList(
  input: InputObjectType[] | null | undefined,
  mapping: Mapping
): OutputObjectType[] {
  if (!input) return [];

  return input
    .map((obj) => {
      if (
        Object.prototype.hasOwnProperty.call(obj, mapping.id) &&
        Object.prototype.hasOwnProperty.call(obj, mapping.label) &&
        Object.prototype.hasOwnProperty.call(obj, mapping.value)
      ) {
        return {
          id: obj[mapping.id].toString(),
          label: obj[mapping.label].toString(),
          value: obj[mapping.value],
        };
      }
      return null;
    })
    .filter((item): item is OutputObjectType => item !== null);
}
