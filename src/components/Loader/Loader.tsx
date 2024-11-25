import styles from './Loader.module.css'
import { ProgressBar } from 'react-loader-spinner';
import { LoaderProps } from '../App/App.types';


const Loader: React.FC<LoaderProps> = ({
  color = "#008080",
  height = "80",
  width = "80",
  visible = true,
}) => {
  return (
    <ProgressBar
      visible={visible}
      height={height}
      width={width}
      barColor={color}
      ariaLabel="progress-bar-loading"
      borderColor="#9acd32"
    />
  );
};
export default Loader;