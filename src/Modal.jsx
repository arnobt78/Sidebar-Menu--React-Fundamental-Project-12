/**
 * Modal overlay: visibility is driven by isModalOpen from context.
 * show-modal class is used in CSS for visibility/opacity; without it the overlay is hidden.
 */
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <div className={isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}>
      <div className='modal-container'>
        <h3>modal content</h3>
        <button className='close-modal-btn' onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};
export default Modal;
