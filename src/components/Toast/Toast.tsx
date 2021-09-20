import * as React from 'react';
import { ToastContainer, ToastText, CloseToastButton } from './styles';
import { Dispatcher } from '../../types';

interface ToastProps {
  copied: boolean;
  setCopied: Dispatcher<boolean>;
}

const Toast: React.FC<ToastProps> = ({ copied, setCopied }) => {
  React.useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
  }, [copied, setCopied]);
  const closeToastHandler = (): void => {
    setCopied(false);
  };
  return (
    <ToastContainer showToast={copied ? 'translateX(0)' : 'translateX(100%)'}>
      <ToastText>Photo is copied to your clipboard!</ToastText>
      <CloseToastButton aria-label="close toast" onClick={closeToastHandler}>
        x
      </CloseToastButton>
    </ToastContainer>
  );
};

export default Toast;
