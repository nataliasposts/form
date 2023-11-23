import { ReactNode, createContext, useState, useMemo, useCallback } from 'react';

export interface ModalContextType {
  showModal: (content: ReactNode) => void;
  hideModal: () => void;
}

export const ModalContext = createContext<ModalContextType | null>(null);

interface ModalProviderProps {
  children: ReactNode;
}

const GlobalModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);

  const showModal = useCallback((content: ReactNode) => {
    setModalContent(content);
  }, []);

  const hideModal = useCallback(() => {
    setModalContent(null);
  }, []);

  const modalContextValue = useMemo(
    () => ({
      showModal,
      hideModal
    }),
    [showModal, hideModal]
  );

  return (
    <ModalContext.Provider value={modalContextValue}>
      {modalContent && <div>{modalContent}</div>}
      {children}
    </ModalContext.Provider>
  );
};
export default GlobalModalProvider;
