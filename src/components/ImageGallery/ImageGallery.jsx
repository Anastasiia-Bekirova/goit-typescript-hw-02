import styles from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({items, openModal}) => {
    return (
        <ul className={styles.list}>
            { items.map(item => {
                return (<li key={item.id}>
                    <ImageCard item={item}
                        onOpenModal={openModal}
                    />
                </li>);
            }
                
                
            )}
            
        </ul>
    );
}

export default ImageGallery;