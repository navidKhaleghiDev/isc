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
