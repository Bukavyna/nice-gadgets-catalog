import { useTranslation } from 'react-i18next';
import type { ReactNode } from 'react';
import { Component } from 'react';

import styles from './ErrorBoundary.module.scss';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

const ErrorFallback = () => {
  const { t } = useTranslation();

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className={styles.errorFallback}>
      <h2 className={styles.errorFallbackTitle}>{t('errors.unknown')}</h2>
      <button className={styles.errorFallbackButton} onClick={handleReload}>
        {t('errors.reloadPage')}
      </button>
    </div>
  );
};

export class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }

    return this.props.children;
  }
}
