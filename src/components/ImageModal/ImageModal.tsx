import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import styles from './ImageModal.module.css'
import { ImageModalProps } from '../App/App.types';
 Modal.setAppElement('#root'); 

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
const ImageModal: React.FC<ImageModalProps> = ({ modalIsOpen, closeModal, modalImage}) => {
    return (<Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal image"
        ariaHideApp={false}
        className={styles.modal}
        overlayClassName={styles.overlay}
        
    >
       
      {modalImage && <div onClick={closeModal}>
            <img src={modalImage.urls.regular} alt={modalImage.alt_description}
            />
            <div >
                <p className={styles.text}>Author: {modalImage.user.name}</p>
                <p className={styles.text}>Description: {modalImage.alt_description}</p>
                <p className={styles.text}>Likes: {modalImage.likes}</p>
                </div>
        </div>}
       
    </Modal>);
 }

    

      export default ImageModal

