import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';
import VisuallyHidden from '../VisuallyHidden';
import {ToastContext} from "../ToastProvider";
import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({id, variant, onClose = () => {}, children}) {
  const IconTag = ICONS_BY_VARIANT[variant];
  const variantStyle = styles[variant];

  const { closeToast } = React.useContext(ToastContext);

  const handleClose = e => {
    e.preventDefault();
    closeToast(id);
    onClose();
  }

  return (
    <div className={`${styles.toast} ${variantStyle}`}>
      <div className={styles.iconContainer}>
        <IconTag size={24} />
      </div>
      <p className={styles.content}>
        {children}
      </p>
      <button className={styles.closeButton}>
        <X size={24} onClick={handleClose} />
        <VisuallyHidden>Dismiss</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
