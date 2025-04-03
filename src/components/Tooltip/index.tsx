/** @author Ka Pui (August) Cheung */

import * as RadixTooltip from "@radix-ui/react-tooltip";
import { type ReactNode, useRef } from "react";

import styles from "./styles.module.css";

export interface TooltipProps {
  /** The content to display in the tooltip */
  content: ReactNode;
  /** The trigger element that will show the tooltip on hover */
  children: ReactNode;
  /** Optional CSS class for the tooltip content */
  className?: string;
  /** Tooltip side preference */
  side?: "top" | "right" | "bottom" | "left";
  /** Tooltip alignment preference */
  align?: "start" | "center" | "end";

  keepOpenOnActivate?: boolean;
}

export default function Tooltip({
  content,
  children,
  className = "",
  side = "top",
  align = "center",
  keepOpenOnActivate,
}: TooltipProps) {
  const triggerRef = useRef(null);

  return (
    <RadixTooltip.Root>
      <RadixTooltip.Trigger
        ref={triggerRef}
        asChild
        onClick={(event) => {
          if (keepOpenOnActivate) event.preventDefault();
        }}
      >
        {children}
      </RadixTooltip.Trigger>
      <RadixTooltip.Portal>
        <RadixTooltip.Content
          align={align}
          className={`${styles.tooltipContent} ${className}`}
          collisionPadding={8}
          side={side}
          sideOffset={5}
          onPointerDownOutside={(event) => {
            if (keepOpenOnActivate && event.target === triggerRef.current)
              event.preventDefault();
          }}
        >
          {content}
          <RadixTooltip.Arrow className={styles.tooltipArrow} />
        </RadixTooltip.Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  );
}

export function TooltipDisabledTarget({
  children,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      className={styles.tooltipDisabledTarget}
      role="button"
      tabIndex={0}
      {...props}
    >
      {children}
    </span>
  );
}
