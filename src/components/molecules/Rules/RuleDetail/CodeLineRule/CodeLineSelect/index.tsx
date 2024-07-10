/**
 * CodeLineSelect Component
 *
 * This component renders a select & options for code action in rule list
 *
 * @component
 *
 * @returns {JSX.Element} The rendered a select & options.
 */

export function CodeLineSelect() {
  return (
    <select
      name="codeAction"
      id="code-action"
      className="bg-transparent text-teal-600 cursor-pointer font-bold"
    >
      <option value="alert">ALERT</option>
      <option value="drop">DROP</option>
      <option value="block">BLOCK</option>
      <option value="pass">PASS</option>
    </select>
  );
}
