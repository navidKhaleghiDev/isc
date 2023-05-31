import { RulesCard } from '../RulesCard';

export function RulesList() {
  return (
    <div className="w-full mt-8">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
        <RulesCard key={item} />
      ))}
    </div>
  );
}
