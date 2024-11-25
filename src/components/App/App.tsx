import { useEffect, useState } from 'react'

import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import { fetchImages } from '../../unsplash-api';
import { ImageItem, ModalImage, FetchImagesResponse } from './App.types';

import './App.module.css'


function App() {
  const [images, setImages] = useState < ImageItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [searchedValue, setSearchedValue] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<ModalImage | null>(null);
    


const handleSubmit = (value: string ) => {
  setSearchedValue(value);
  setImages([]);
  setPage(1);
};
  const handleClick = () => {
    setPage(page + 1);
  };

  const openModal = (images: ModalImage) => {
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
       
        const response: FetchImagesResponse = await fetchImages(searchedValue, page);
        if (images.length === 0) {
          setImages(response.results);
        } else {
          setImages(previousImages => [...previousImages, ...response.results])
        } setTotalPages(response.total_pages);
        
        
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
        {images.length > 0 && page < (totalPages || 0) && <LoadMoreBtn onClick={handleClick} />}
        {modalIsOpen && <ImageModal  closeModal={closeModal} modalImage={modalImage} modalIsOpen={modalIsOpen}/>}
    </div>
    </>
   
  )
  
}

export default App
