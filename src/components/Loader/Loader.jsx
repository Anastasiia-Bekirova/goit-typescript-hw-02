import styles from './Loader.module.css'
import { ProgressBar } from 'react-loader-spinner';


const Loader = () => {
    return (
        <ProgressBar
  visible={true}
  height="80"
  width="80"
  color="#008080"
  ariaLabel="progress-bar-loading"
  wrapperStyle={{}}
 wrapperClass=""
 borderColor="#9acd32"
        />
    );
}
export default Loader;