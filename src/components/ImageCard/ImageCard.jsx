import styles from './ImageCard.module.css';

const ImageCard = ({ item , onOpenModal}) => {
    return (
        <div>
            <img
                className={styles.itemImg}
                src={item.urls.small}
                alt={item.alt_description}
                onClick={() => onOpenModal(item)} />
           
        </div>
    );
}
export default ImageCard;