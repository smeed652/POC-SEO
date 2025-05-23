import * as React from 'react';
import { SVGProps } from 'react';

const IconUser = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4ZM7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7ZM6.08296 20H17.917C17.441 17.1623 14.973 15 12 15C9.027 15 6.55904 17.1623 6.08296 20ZM4 21C4 16.5817 7.58172 13 12 13C16.4183 13 20 16.5817 20 21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21Z"
      fill="currentColor"
    />
  </svg>
);

export default IconUser;
