import React from 'react';
import Button from '../Button';
import styles from './ToastPlayground.module.css';
import ToastShelf from "../ToastShelf";
import {ToastContext} from "../ToastProvider";

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];
const DEFAULT_VARIANT = 'notice';

function ToastPlayground() {
  const [toastMessage, setToastMessage] = React.useState('');
  const [selectedVariant, setSelectedVariant] = React.useState(DEFAULT_VARIANT);
  const { toasts, createToast, closeToast } = React.useContext(ToastContext);

  const resetForm = () => {
    setSelectedVariant(DEFAULT_VARIANT);
    setToastMessage('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${selectedVariant}: ${toastMessage}`)

    createToast(selectedVariant, toastMessage);
    resetForm();
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts}/>

      <form onSubmit={handleSubmit}>
        <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={toastMessage}
              onChange={(e) => setToastMessage(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map(variant => (
              <label
                key={variant}
                htmlFor={`variant-${variant}`}
              >
                <input
                  id={`variant-${variant}`}
                  type="radio"
                  name="variant"
                  value={variant}
                  checked={selectedVariant === variant}
                  onChange={e => setSelectedVariant(e.target.value)}
                />
                {variant}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
