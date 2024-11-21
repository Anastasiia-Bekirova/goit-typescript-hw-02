import styles from './SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';
const notify = () => toast('Here is your toast.');
const SearchBar = ({ onSubmit }) => {
   
    const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
        const topic = form.elements.topic.value;
        
        if(form.elements.topic.value.trim() === "") {
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