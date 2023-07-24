import React from 'react';
import Button from '../Button';
import styles from './ToastPlayground.module.css';
import ToastShelf from "../ToastShelf";

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [toastMessage, setToastMessage] = React.useState('');
  const [selectedVariant, setSelectedVariant] = React.useState('notice');
  const [toasts, setToasts] = React.useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${selectedVariant}: ${toastMessage}`)

    setToasts(prev => [...prev, {
      id: crypto.randomUUID(),
      variant: selectedVariant,
      message: toastMessage,
    }])
  };

  const handleRemove = (id) => {
    setToasts(prev => [...prev.filter(t => t.id !== id)])
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts} toastRemoved={handleRemove}/>

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
