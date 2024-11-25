import { FormEvent } from 'react';
import styles from './SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';
import { SearchBarProps} from '../App/App.types';



const notify = () => toast('Here is your toast.');
const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
   
    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
        const form = evt.target as HTMLFormElement;
        const topic = (form.elements.namedItem('topic') as HTMLInputElement).value;
        
        if(topic.trim() === "") {
			toast.error('You have to enter some text!');

			return;
        } else {
            onSubmit(topic);
    form.reset();
        }
        
    
  };
   
    return (
        <header className={styles.header}>
  <form className={styles.form} onSubmit={handleSubmit}>
    <input
        className={styles.input}
        type="text"
        name="topic"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
    />
        <button className={styles.btn} type="submit">🔍</button>
        <Toaster position="top-center"/>
  </form>
</header>

    );
}

export default SearchBar;