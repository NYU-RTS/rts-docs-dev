/** @author Ka Pui (August) Cheung */

import { useState } from "react";

import { Dialog, DialogBody, DialogContent, DialogHeader } from "../Dialog";
import Tooltip from "../Tooltip";
import styles from "./styles.module.css";

export interface InfoButtonProps {
  /** The content to display in the dialog. */
  content: React.ReactNode;
  /** Optional title for the dialog. */
  title?: string;
  /** Additional CSS class for the button. */
  className?: string;
  /** Additional CSS class for the dialog content. */
  dialogClassName?: string;
}

export default function InfoButton({
  content,
  title = "Details",
  className = "",
  dialogClassName = "",
}: InfoButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const sanitizedContent =
    typeof content === "string" ? (
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className={styles.infoContent}
      />
    ) : (
      content
    );

  return (
    <>
      <Tooltip content="Learn more">
        <button
          aria-expanded={isOpen}
          aria-haspopup="dialog"
          aria-label={`Information about ${title}`}
          className={`${styles.infoButton} ${className}`}
          type="button"
          onClick={handleOpen}
        >
          i
        </button>
      </Tooltip>

      <Dialog className={dialogClassName} isOpen={isOpen} onClose={handleClose}>
        <DialogContent>
          <DialogHeader onClose={handleClose}>{title}</DialogHeader>
          <DialogBody>{sanitizedContent}</DialogBody>
        </DialogContent>
      </Dialog>
    </>
  );
}
