import './ModalWindow.scss';

type ModalWindowProps = {
  onClose: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const ModalWindow: React.FC<ModalWindowProps> = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-body">
        <div className="modal-content">
          <div className="modal-info">
            <p className="modal-info_item">The form is submitted! Thank you!</p>
          </div>
          <div className="modal-button">
            <button onClick={onClose} className="button-close" type="button">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalWindow;
