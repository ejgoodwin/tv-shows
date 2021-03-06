import React, { useEffect, useState, useRef } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const Gallery = ({ images }) => {
    const modalRef = useRef()
    const [modalImage, setmodalImage] = useState();
    const [modalImageIndex, setmodalImageIndex] = useState();
    const [modalOpen, setmodalOpen] = useState(false);

    const openModal = (e, image, index) => {
        e.preventDefault();
        setmodalImage(image);
        setmodalImageIndex(index);
        setmodalOpen(true);
    }

    const closeModalButton = () => setmodalOpen(false);

    const closeModalBackground = (e) => e.target === modalRef.current && setmodalOpen(false);

    const nextImage = () => {
        if (modalImageIndex < images.length-1) {
            setmodalImage(images[modalImageIndex+1].resolutions.original.url);
            setmodalImageIndex(modalImageIndex+1);
        }
    }

    const prevImage = () => {
        if (modalImageIndex > 0) {
            setmodalImage(images[modalImageIndex-1].resolutions.original.url);
            setmodalImageIndex(modalImageIndex-1);
        }
    }

    useEffect(() => {
        modalRef.current.addEventListener('click', closeModalBackground);
        return () => {
            modalRef.current && modalRef.current.removeEventListener('click', closeModalBackground);
        }
    }, [])

    return (
        <React.Fragment>
            <ul className="gallery">
                {images.map((image, index) => (
                    <li className="gallery__item" key={image.id} >
                        <a 
                            className="gallery__link" 
                            href=""
                            onClick={(e) => openModal(e, image.resolutions.original.url, index)}
                            style={{ backgroundImage: `url(${image.resolutions.medium ? image.resolutions.medium.url : image.resolutions.original.url})` }}>
                        </a>
                    </li>
                ))}
            </ul>
            <div className={`gallery__modal ${modalOpen ? 'gallery__modal--open' : 'gallery__modal--closed'}`} ref={modalRef}>
                <img className="gallery__modal-image" src={modalImage} alt="" />
                <span className="gallery__modal-close">
                    <IconButton onClick={closeModalButton} variant="text" color="primary">
                        <CloseIcon fontSize="large" />
                    </IconButton>
                 </span>
                 <span className="gallery__modal-prev">
                    <IconButton onClick={prevImage} variant="text" color="primary" disabled={modalImageIndex < 1}>
                        <NavigateBeforeIcon sx={{ fontSize: 50}} />
                    </IconButton>
                 </span>
                 <span className="gallery__modal-next">
                    <IconButton onClick={nextImage} variant="text" color="primary" disabled={modalImageIndex === images.length-1}>
                        <NavigateNextIcon sx={{ fontSize: 50}} />
                    </IconButton>
                 </span>
            </div>
        </React.Fragment>
    );
}

export default Gallery;