import Link from "@docusaurus/Link";

import EditIcon from "../icons/EditIcon";
import classes from "./styles.module.css";

export interface DocumentFooterProps {
  editHref: string;
  lastUpdatedContent: React.ReactNode;
}

export default function DocumentFooter({
  editHref,
  lastUpdatedContent,
}: DocumentFooterProps) {
  return (
    <footer className="theme-doc-footer docusaurus-mt-lg">
      <div className="row margin-top--sm theme-doc-footer-edit-meta-row">
        <div className="col">
          <Link
            className="theme-edit-this-page"
            href={editHref}
            rel="noopener noreferrer"
            target="_blank"
          >
            <EditIcon aria-hidden="true" className={classes.iconEdit} />
            Edit this page
          </Link>
        </div>
        <div className={`col ${classes.lastUpdated}`}>{lastUpdatedContent}</div>
      </div>
    </footer>
  );
}
