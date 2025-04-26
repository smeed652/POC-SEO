// Atom: ActionLink
export const ActionLink = ({ children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a className="text-blue-600 hover:underline text-sm cursor-pointer" {...props}>
    {children}
  </a>
);
