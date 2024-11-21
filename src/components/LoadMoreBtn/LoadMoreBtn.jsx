import styles from './LoadMoreBtn.module.css'


const LoadMoreBtn = ({onClick}) => {
    return (
        <button className={styles.loadingBtn} type="button" onClick={onClick}>Load More</button>
    );
}

export default LoadMoreBtn;