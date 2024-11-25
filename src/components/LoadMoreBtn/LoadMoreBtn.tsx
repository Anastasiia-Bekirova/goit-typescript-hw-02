import styles from './LoadMoreBtn.module.css'
import {OnLoadMoreProps} from '../App/App.types'


const LoadMoreBtn: React.FC<OnLoadMoreProps> = ({onClick}) => {
    return (
        <button className={styles.loadingBtn} type="button" onClick={onClick}>Load More</button>
    );
}

export default LoadMoreBtn;