import React, { useState, useEffect, useRef } from 'react';
import Webcam from "react-webcam";
import {
    Flex,
    Stack,
    Heading,
    Text,
    Button,
    useColorModeValue,
    useToast
} from '@chakra-ui/react';

export default function Calibracao({isFullScreen, setsIsFullScreen,webcamRef,setIniciar,setLoading}) {
    const toast = useToast()

    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
    };

    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
        },
        [webcamRef]
    );

    const _setFullScreem =  () => {
        let elem = document.documentElement;;
        
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
            setsIsFullScreen(true)
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
            setsIsFullScreen(true)
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
            setsIsFullScreen(true)
        }
    }

    const handleIniciar = async(event) => {

        if(!isFullScreen)
            toast({
                title: `Por favor habilite a tela cheia antes de iniciar!`,
                status: "error",
                isClosable: true,
            })
        else {
            setLoading(true)
            await setTimeout(() => {
                setIniciar(true)
                setLoading(false)
                console.log("error")
            }, 10000);
        }
    }

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            py={12}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack
                boxShadow={'2xl'}
                bg={useColorModeValue('white', 'gray.700')}
                rounded={'xl'}
                p={10}
                spacing={8}
                align={'center'}>

                <Stack align={'center'} spacing={2}>
                    <Heading
                        textTransform={'uppercase'}
                        fontSize={'3xl'}
                        color={useColorModeValue('gray.800', 'gray.200')}>
                        etapa de Calibração
                    </Heading>
                    <Text fontSize={'lg'} color={'gray.500'}>
                        Ajuste sua face no vídeo abaixo, habilite a tela cheia e então clique em iniciar para começar o processo de captura das imagens.
                    </Text>
                </Stack>

                <Webcam
                    audio={false}
                    height={500}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={600}
                    videoConstraints={videoConstraints}
                />

                <Stack spacing={4} direction={{ base: 'column', md: 'row' }} w={'full'}>
                    <Button
                        fontFamily={'heading'}
                        w={'full'}
                        onClick={_setFullScreem}
                        bgGradient="linear(to-r, blue.400,green.400)"
                        color={'white'}
                        _hover={{
                            bgGradient: 'linear(to-r, blue.400,green.400)',
                            boxShadow: 'xl',
                        }}>
                        Habilitar tela cheia 
                    </Button>

                    <Button
                        fontFamily={'heading'}
                        onClick={handleIniciar}
                        w={'full'}
                        bgGradient="linear(to-r, blue.400,green.400)"
                        color={'white'}
                        _hover={{
                            bgGradient: 'linear(to-r, blue.400,green.400)',
                            boxShadow: 'xl',
                        }}>
                        Iniciar
                    </Button>
                </Stack>
            </Stack>
        </Flex>
    );
}