import React from 'react';
import Button from '../Button';
import Toast from "../Toast";
import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [toastMessage, setToastMessage] = React.useState('');
  const [selected, setSelected] = React.useState('notice');
  const [displayToast, setDisplayToast] = React.useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(`${selected}: ${toastMessage}`)
    setDisplayToast(true)
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {displayToast && (
          <Toast variant={selected} onClose={() => setDisplayToast(false)}>
            {toastMessage}
          </Toast>
        )
      }

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
                  checked={selected === variant}
                  onChange={e => setSelected(e.target.value)}
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
            <Button onClick={handleClick}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
