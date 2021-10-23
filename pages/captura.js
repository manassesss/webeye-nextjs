import React, { useState, useEffect, useRef } from 'react';
import Calibracao from '../components/Calibracao'
import ShowVideos from '../components/ShowVideos'
import Loading from '../components/Loading'
import Sucesso from '../components/Sucesso'
import styles from '../styles/Captura.module.css'

export default function Captura() {
    const reactPlayerRef = useRef();
    const webcamRef = React.useRef(null);
    const [isFullScreen, setsIsFullScreen] = useState(false);
    const [finalizado, setFinalizado] = useState(false);
    const [posicaoAtual, setPosicaoAtual] = useState(0);
    const [inicio, setIniciar] = useState(false)
    const [loading, setLoading] = useState(false)
    const [loadingMessage, setLoadingMessage] = useState(0)

    const mensagens_inicio = ["Preaparando o ambiente ...", "Carregando os videos ..."];
    const mensagens_final = ["Salvando imagens ...", "Enviando para o servidor ..."];

    return (
        <div className={styles.container2} >
            {
                finalizado ?
                    <Sucesso />
                    :
                    (!isFullScreen || !inicio) ?
                        <Calibracao
                            isFullScreen={isFullScreen}
                            setsIsFullScreen={setsIsFullScreen}
                            webcamRef={webcamRef}
                            setIniciar={setIniciar}
                            setLoading={setLoading} />
                        :
                        loading ?
                            <Loading
                                messages={loadingMessage == 0 ? mensagens_inicio : mensagens_final} />
                            :
                            <ShowVideos
                                isFullScreen={isFullScreen}
                                posicaoAtual={posicaoAtual}
                                setPosicaoAtual={setPosicaoAtual}
                                setFinalizado={setFinalizado}
                                setLoadingMessage={setLoadingMessage}
                                setFinishLoad={setLoading} />
            }
        </div>

    );
}