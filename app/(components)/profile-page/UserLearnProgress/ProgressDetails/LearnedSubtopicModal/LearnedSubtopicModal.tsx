"use client";
import { useEffect, useRef } from "react";
import styles from "./learned-subtopic-modal.module.css";

type LearnedSubtopicModalProps = {
  open: boolean;
  onClose: () => void;
  topicName: string;
  subtopicName: string;
  learnedAt: Date;
  comment: string | null;
};

const dateFormatter = new Intl.DateTimeFormat("cz", {
  dateStyle: "long",
  timeStyle: "short",
});

export default function LearnedSubtopicModal({
  open,
  onClose,
  topicName,
  subtopicName,
  learnedAt,
  comment,
}: LearnedSubtopicModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  const handleClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      onClose={onClose}
      onClick={handleClick}
    >
      <div className={styles.content}>
        <header className={styles.header}>
          <div>
            <p className={styles.label}>{topicName}</p>
            <h2 className={styles.title}>{subtopicName}</h2>
          </div>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close"
          >
            <svg viewBox="0 0 16 16" width="16" height="16">
              <path
                d="M4 4l8 8M12 4l-8 8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </header>

        <div className={styles.meta}>
          <span className={styles.metaIcon} aria-hidden="true">
            <svg viewBox="0 0 16 16" width="14" height="14">
              <circle
                cx="8"
                cy="8"
                r="6.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M8 4.5V8l2.5 1.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span>Learned on {dateFormatter.format(learnedAt)}</span>
        </div>

        <section className={styles.commentBlock}>
          <p className={styles.commentLabel}>Personal note</p>
          {comment ? (
            <p className={styles.commentText}>{comment}</p>
          ) : (
            <p className={styles.commentEmpty}>
              No comment was added for this subtopic.
            </p>
          )}
        </section>
      </div>
    </dialog>
  );
}
