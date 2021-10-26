import React, { useState, useEffect, useRef, useCallback } from 'react';
import Calibracao from '../components/Calibracao'
import ShowVideos from '../components/ShowVideos'
import Loading from '../components/Loading'
import Sucesso from '../components/Sucesso'
import styles from '../styles/Captura.module.css'


export default function Captura() {
    const reactPlayerRef = useRef();
    const images = [];
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = useState(null);
    const [isFullScreen, setsIsFullScreen] = useState(false);
    const [finalizado, setFinalizado] = useState(false);
    const [posicaoAtual, setPosicaoAtual] = useState(0);
    const [inicio, setIniciar] = useState(false)
    const [loading, setLoading] = useState(false)
    const [loadingMessage, setLoadingMessage] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        fetch(imageSrc)
            .then(r => r.blob()) // consume as a Blob
            .then(blob => {
                const url = URL.createObjectURL(blob);
                images.push({
                    image: url,
                    area: posicaoAtual,
                    timestamp: new Date().getTime()
                })
                console.log("",images)
            });
        

        
    }, [webcamRef, setImgSrc]);

    const mensagens_inicio = ["Preaparando o ambiente ...", "Carregando os videos ..."];
    const mensagens_final = ["Salvando imagens ...", "Enviando para o servidor ..."];

    return (
        <div className={styles.container2} >
            <div style={{ display: (!isFullScreen || !inicio) ? "flex" : "none" }}>
                <Calibracao
                    isFullScreen={isFullScreen}
                    capture={capture}
                    setsIsFullScreen={setsIsFullScreen}
                    webcamRef={webcamRef}
                    setIsPlaying={setIsPlaying}
                    imgSrc={imgSrc}
                    setIniciar={setIniciar}
                    setLoading={setLoading} />
            </div>

            <div className={styles.container3} style={{ display: (isFullScreen && inicio && !loading) && !finalizado ? "flex" : "none" }}>
                <ShowVideos
                    capture={capture}
                    inicio={inicio}
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                    posicaoAtual={posicaoAtual}
                    setPosicaoAtual={setPosicaoAtual}
                    setFinalizado={setFinalizado}
                    setLoadingMessage={setLoadingMessage}
                    setFinishLoad={setLoading} />
            </div>

            {
                finalizado ?
                    <Sucesso />
                    :
                    isFullScreen && inicio && loading &&
                    <Loading
                        messages={loadingMessage == 0 ? mensagens_inicio : mensagens_final} />

            }
        </div>

    );
}