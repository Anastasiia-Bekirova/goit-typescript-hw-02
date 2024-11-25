

export type SearchBarProps = {
  onSubmit: (value: string) => void;
};

export type OnLoadMoreProps = {
    onClick: () => void;
};


export type LoaderProps = {
  color?: string;
  height?: string | number;
  width?: string | number;
  visible?: boolean;
};

export type ImageItem = {
  id: string;
  urls: {
      small: string;
      regular: string;
  };
    alt_description: string;
    user: {
    name: string;
  };
    likes: number;
};

export type FetchImagesResponse = {
  results: ImageItem[];
  total: number;
  total_pages: number;
};

 export type ImageCardProps = {
  item: ImageItem;
  onOpenModal: (item: ImageItem) => void;
 };
export type ImageGalleryProps = {
  items: ImageItem[];
  openModal: (item:  ModalImage) => void;
};

export type ModalImage = {
  urls: {
    regular: string;
  };
  alt_description: string;
  user: {
    name: string;
  };
  likes: number;
};

export type ImageModalProps = {
  modalIsOpen: boolean;
  closeModal: () => void;
  modalImage?: ModalImage | null;
};
