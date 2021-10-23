import React, { useState, useEffect, useRef } from 'react';
import Calibracao from '../components/Calibracao'
import ShowVideos from '../components/ShowVideos'
import Loading from '../components/Loading'
import styles from '../styles/Captura.module.css'

export default function Captura() {
    const reactPlayerRef = useRef();
    const webcamRef = React.useRef(null);
    const [isFullScreen, setsIsFullScreen] = useState(false);
    const [posicaoAtual, setPosicaoAtual] = useState(0);
    const [inicio, setIniciar] = useState(false)
    const [loading, setLoading] = useState(false)

    return (
        <div className={styles.container2} >
            {
                (!isFullScreen || !inicio) ?
                    <Calibracao
                        isFullScreen={isFullScreen}
                        setsIsFullScreen={setsIsFullScreen}
                        webcamRef={webcamRef}
                        setIniciar={setIniciar}
                        setLoading={setLoading}/>
                    :
                loading ?
                        <Loading 
                            text={"Aguarde um instante..."}/>
                    :
                        <ShowVideos
                            isFullScreen={isFullScreen}
                            posicaoAtual={posicaoAtual}
                            setPosicaoAtual={setPosicaoAtual}
                            setFinishLoad={setLoading} />
            }
        </div>

    );
}