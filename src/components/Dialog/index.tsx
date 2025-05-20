/** @author Ka Pui (August) Cheung */

import * as RadixDialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import styles from "./styles.module.css";

export interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export function Dialog({
  isOpen,
  onClose,
  children,
  className = "",
}: DialogProps) {
  return (
    <RadixDialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className={styles.dialogOverlay} />
        <RadixDialog.Content className={`${styles.dialog} ${className}`}>
          {children}
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
}

interface DialogContentProps {
  className?: string;
  children: React.ReactNode;
}

export function DialogContent({
  className = "",
  children,
}: DialogContentProps) {
  return (
    <div className={`${styles.dialogContent} ${className}`}>{children}</div>
  );
}

interface DialogHeaderProps {
  className?: string;
  children: React.ReactNode;
  onClose?: () => void;
}

export function DialogHeader({
  className = "",
  children,
  onClose,
}: DialogHeaderProps) {
  return (
    <div className={`${styles.dialogHeader} ${className}`}>
      <RadixDialog.Title className={`${styles.dialogTitle} margin-bottom--0`}>
        {children}
      </RadixDialog.Title>
      {onClose && (
        <RadixDialog.Close asChild>
          <button
            aria-label="Close"
            className={`${styles.dialogCloseButton} clean-btn`}
            type="button"
            onClick={onClose}
          >
            <X size={18} />
          </button>
        </RadixDialog.Close>
      )}
    </div>
  );
}

interface DialogBodyProps {
  className?: string;
  children: React.ReactNode;
}

export function DialogBody({ className = "", children }: DialogBodyProps) {
  return (
    <RadixDialog.Description className={`${styles.dialogBody} ${className}`}>
      {children}
    </RadixDialog.Description>
  );
}

interface DialogFooterProps {
  className?: string;
  children: React.ReactNode;
}

export function DialogFooter({ className = "", children }: DialogFooterProps) {
  return (
    <div className={`${styles.dialogFooter} ${className} margin-top--md`}>
      {children}
    </div>
  );
}
