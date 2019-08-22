import React,{useState} from 'react'
import ModalVideo from 'react-modal-video'


function Video (){

    const [open, isOpen] = useState(false);

    
    const openModal = e => {
        e.preventDefault();
        isOpen(true);
    }

    return(
        <div>
        <ModalVideo channel='youtube' isOpen={open} videoId='L61p2uyiMSo' onClose={() => isOpen(false) } />
        <button onClick={openModal}>Open</button>
      </div>
    )   
}
export default Video;