import React, { useState, useEffect, useRef,useCallback } from 'react';
import ReactPlayer from 'react-player';
import styles from '../../styles/Captura.module.css'

export default function ShowVideos({isPlaying,inicio, setIsPlaying,posicaoAtual,setPosicaoAtual,setFinishLoad,setLoadingMessage,setFinalizado}) {
    const reactPlayerRef = useRef();
    const coordenadas = [[0, 500], [0, 500], [0, 1000], [283, 0], [283, 500], [283, 1000], [565, 0], [565, 500], [560, 1000]];
    const [coordenada, setCoordenada] = useState([0, 0])
    
    const _setCoordenadas = () => {
        setCoordenada([coordenadas[posicaoAtual][0], coordenadas[posicaoAtual][1]])
        if (posicaoAtual < 8)
            setPosicaoAtual(posicaoAtual + 1)
    }

    const handleProgress = async  (progresso) => {
       // console.log("progressoAcumulado=",progresso.playedSeconds,"posicaoAtual=",posicaoAtual,"vetor=",coordenadas[posicaoAtual])
        if(posicaoAtual == 8 && progresso.playedSeconds >= 30*10){        
            setIsPlaying(false);
            setFinishLoad(true)
            setLoadingMessage(1);
            await setTimeout(() => {           
                setFinishLoad(false)
                setFinalizado(true)
            }, 5000);
        }else if (progresso.playedSeconds / 30 > posicaoAtual+1) {
           _setCoordenadas()
        }
    }

    return (
        <div className={styles.container} >
            <div className={styles.card} style={{ top: coordenada[0], left: coordenada[1] }}>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                    ref={reactPlayerRef}
                    playing={isPlaying}
                    onProgress={handleProgress}
                    width={"100%"}
                    height={"100%"}
                    config={{
                        youtube: {
                            playerVars: { controls: 0, showinfo: 0, disablekb: 1, autoplay: 0 }
                        }
                    }}
                />
            </div>

        </div>
    );
}