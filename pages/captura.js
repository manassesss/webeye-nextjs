import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import styles from '../styles/Captura.module.css'

export default function Captura() {
    const reactPlayerRef = useRef();
    const inputRef = useRef();
    const timestampsPrevState = useRef([]);

    const [timestamps, setTimestamps] = useState([]);

     useEffect(() => {
        if (timestampsPrevState.current.length < timestamps.length) {
            inputRef.current && inputRef.current.focus();
        }
    });


    return (
        <div className={styles.container}>

            <div className={styles.card} style={{ top: 0, left: 0 }}>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                    ref={reactPlayerRef}
                    width={"100%"}
                    height={"100%"}
                    config={{
                        youtube: {
                            playerVars: { controls: 0, showinfo: 0, disablekb: 1,autoplay:1 }
                        }
                    }}
                />

            </div>

            <h1>aaa {reactPlayerRef.current.getDuration() /30}</h1>
        </div>
    );
}