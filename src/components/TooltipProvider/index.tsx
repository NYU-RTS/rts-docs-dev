/** @author Ka Pui (August) Cheung */

import * as RadixTooltip from "@radix-ui/react-tooltip";
import { type ReactNode } from "react";

export interface TooltipProviderProps {
  children: ReactNode;
  delayDuration?: number;
}

export default function TooltipProvider({
  children,
  delayDuration = 300,
}: TooltipProviderProps) {
  return (
    <RadixTooltip.Provider delayDuration={delayDuration}>
      {children}
    </RadixTooltip.Provider>
  );
}
