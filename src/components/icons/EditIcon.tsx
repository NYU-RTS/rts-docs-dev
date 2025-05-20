/** @author Ka Pui (August) Cheung */

import { type IconProps } from "./types";

export default function EditIcon({
  className,
  size = 24,
  ...props
}: IconProps) {
  return (
    <svg
      className={className}
      fill="currentColor"
      height={size}
      stroke="currentColor"
      viewBox="0 0 40 40"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"></path>
      </g>
    </svg>
  );
}
