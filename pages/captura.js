import React, { useState, useEffect, useRef } from 'react';
import Calibracao  from '../components/Calibracao'
import ShowVideos  from '../components/ShowVideos'

export default function Captura() {
    const reactPlayerRef = useRef();
    const webcamRef = React.useRef(null);
    const [isFullScreen, setsIsFullScreen] = useState(false);
    const [posicaoAtual, setPosicaoAtual] = useState(0);
    const [inicio, setIniciar] = useState(false)
    const [loading, setLoading] = useState(false)

    return (
        <>
       {
        (!isFullScreen || !inicio) ?
            <Calibracao 
                isFullScreen={isFullScreen}  
                setsIsFullScreen={setsIsFullScreen} 
                webcamRef={webcamRef} 
                setIniciar={setIniciar} />
        :
            <ShowVideos 
                isFullScreen={isFullScreen} 
                posicaoAtual={posicaoAtual} 
                setPosicaoAtual={setPosicaoAtual} 
                setFinishLoad={setLoading}  /> 
        }
        </>
    );
}