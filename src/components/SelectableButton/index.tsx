/** @author Ka Pui (August) Cheung */

import styles from "./styles.module.css";

export interface SelectableButtonProps {
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: (value: string, isChecked: boolean) => void;
  type: "radio" | "checkbox";
  disabled?: boolean;
}

/**
 * A selectable button that can be used as either a radio button or checkbox
 * Radio mode still allows for deselection (unlike native radio buttons)
 */
export default function SelectableButton({
  name,
  value,
  label,
  checked,
  onChange,
  type,
  disabled = false,
}: SelectableButtonProps) {
  function handleChange() {
    // For radio-like behavior, we toggle the checked state
    // This allows deselection which regular radio buttons don't support
    if (!disabled) onChange(value, !checked);
  }

  return (
    <label
      className={`${styles.selectableButtonLabel} ${disabled ? styles.disabled : ""}`}
    >
      <input
        checked={checked}
        className={styles.selectableButtonInput}
        data-control-type={type}
        disabled={disabled}
        name={name}
        type="checkbox"
        value={value}
        onChange={handleChange}
      />
      <span
        className={`${styles.customControl} ${type === "radio" ? styles.radio : styles.checkbox}`}
      ></span>
      <span className={styles.selectableButtonText}>{label}</span>
    </label>
  );
}
