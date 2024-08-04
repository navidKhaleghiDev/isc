import { PropsWithChildren } from 'react';

/**
 * Component that provides a template for displaying rules.
 *
 * @component
 * @param {React.ReactNode} props.children - The child nodes to be displayed in component.
 * @returns {JSX.Element} A div container with the given children.
 */

export function RulesCodeTemplate(props: PropsWithChildren): JSX.Element {
  return (
    <div className="flex flex-col w-full h-full md:px-16">
      {props?.children}
    </div>
  );
}
