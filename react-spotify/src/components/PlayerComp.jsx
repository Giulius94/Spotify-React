import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { plusOneBrano, prendiSrcDaBrano } from '../slice/currentSrc';

export default function PlayerComp() {

  const canzoneAttuale = useSelector(state => state.currentSrc.currentSrc)
  const numeroBranoAttuale = useSelector(state => state.currentSrc.listaBrani)
  console.log(numeroBranoAttuale)


  const dispatch = useDispatch()

  const handlerNextTrack = () => {
    dispatch(plusOneBrano(1))
    dispatch(prendiSrcDaBrano())

  }

  const handlePreviousTrack = () => {
    dispatch(plusOneBrano(0))
    dispatch(prendiSrcDaBrano())

  }

 
   const [currentIndex, setCurrentIndex] = useState(0);

  const handleChangeTitle = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % numeroBranoAttuale.length);
  }

  return (
   <Container fluid className="fixed-bottom bg-container pt-1 d-flex">
   <div className='col-md-2 offset-md-2 text-white text-center'>
      <p className='mb-0'>{numeroBranoAttuale && numeroBranoAttuale[currentIndex].title_short}</p>
      <img src={numeroBranoAttuale[currentIndex].album.cover_small} alt="cover"/>
        </div>
      <div className="col-12 col-md-6 mainPage mt-2">
        <AudioPlayer
          src={canzoneAttuale}
          onPlay={e => console.log("onPlay")}
          onClickNext={() => {handlerNextTrack(); handleChangeTitle();}}
          onClickPrevious={() => handlePreviousTrack()}
          showSkipControls
        // other props here
        />
      </div>

    </Container>
  )
}
