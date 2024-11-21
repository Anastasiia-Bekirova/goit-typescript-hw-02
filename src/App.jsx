import { useEffect, useState } from 'react'

import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import { fetchImages } from './unsplash-api';

import './App.css'


function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchedValue, setSearchedValue] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
    


const handleSubmit = (value) => {
  setSearchedValue(value);
  setImages([]);
  setPage(1);
};
  const handleClick = () => {
    setPage(page + 1);
  };

  const openModal = (images) => {
    if (!modalIsOpen) {
      setModalIsOpen(true);
      setModalImage(images);
    }
  };
    

  const closeModal = () => {
    setModalIsOpen(false);
    setModalImage(null);

  };

  
  useEffect(() => {
    const onSearch = async () => {
      if (!searchedValue) return;

      try {
        setLoading(true);
       
        const response = await fetchImages(searchedValue, page);
        if (images.length === 0) {
          setImages(response.data.results);
        } else {
          setImages(previousImages => [...previousImages, ...response.data.results])
        } setTotalPages(response.data.total_pages);
        
        
      } catch (error) { 
        setError(true);
      
      } finally {
        setLoading(false);
      }

    };
        

      onSearch();
  }, [searchedValue, page]);
  

  

  useEffect(() => {
    if (page > 1) {
      window.scrollBy({
       top: 920,
        behavior: 'smooth',
      });
   }
     
  }, [images]);


  return (
    <>
     <div>
        <SearchBar onSubmit={handleSubmit } />
        {images.length > 0 && <ImageGallery items={images} openModal={openModal}/>}
         { loading && <Loader />}
       {error && <ErrorMessage />}
        {images.length > 0 && page < totalPages && <LoadMoreBtn onClick={handleClick} />}
        {modalIsOpen && <ImageModal  closeModal={closeModal} modalImage={modalImage} modalIsOpen={modalIsOpen}/>}
    </div>
    </>
   
  )
  
}

export default App
