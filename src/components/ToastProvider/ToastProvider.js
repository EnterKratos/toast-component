import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const createToast = (variant, message) => {
    setToasts(prev => [...prev, {
      id: crypto.randomUUID(),
      variant: variant,
      message: message,
    }]);
  };

  const closeToast = (id) => {
    setToasts(prev => [...prev.filter(t => t.id !== id)])
  };

  return (
      <ToastContext.Provider value={{ toasts, createToast, closeToast }}>
        {children}
      </ToastContext.Provider>
  );
}

export default ToastProvider;
