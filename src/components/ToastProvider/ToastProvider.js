import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const createToast = React.useCallback((variant, message) => {
    setToasts(prev => [...prev, {
      id: crypto.randomUUID(),
      variant: variant,
      message: message,
    }]);
  }, []);

  const closeToast = React.useCallback((id) => {
    setToasts(prev => [...prev.filter(t => t.id !== id)]);
  }, []);

  const closeAll = React.useCallback(() => {
    setToasts([]);
  }, []);

  return (
      <ToastContext.Provider value={{ toasts, createToast, closeToast, closeAll }}>
        {children}
      </ToastContext.Provider>
  );
}

export default ToastProvider;
