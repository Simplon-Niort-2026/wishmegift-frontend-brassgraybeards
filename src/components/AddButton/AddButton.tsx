import styles from "./AddGiftButtonStyles.module.css";

interface AddButtonProps {
  // Action to implement
  // Action need to receive an arrowed function (and may receive parameters)
  action: React.MouseEventHandler<HTMLElement>;
}

export default function AddButton(props: AddButtonProps) {
  return (
    <button
      className={[styles.button, styles.circle].join(" ")}
      type="button"
      onClick={props.action}
    >
      <div className={styles.plus}>
        <svg viewBox="0 0 24 24">
          <line x1="12" y1="-6" x2="12" y2="30" strokeWidth="4" />
          <line x1="-6" y1="12" x2="30" y2="12" strokeWidth="4" />
        </svg>
      </div>
    </button>
  );
}
