import {
    Box,
    Stack,
    Heading,
    Text,
    Container,
    Input,
    Button,
    SimpleGrid,
    useBreakpointValue,
    Icon,
    Radio, RadioGroup
} from '@chakra-ui/react';

import { useState } from 'react';

export default function Form() {

    return (
        <Box position={'relative'}>
            <Container
                as={SimpleGrid}
                maxW={'8xl'}
                columns={{ base: 1, md: 2 }}
                spacing={{ base: 10, lg: 20 }}
                py={{ base: 0, sm: 0, lg: 0 }}>
                <Stack spacing={{ base: 10, md: 20 }} justifyContent="center">
                    <Heading
                        lineHeight={1.1}
                        fontSize={{ base: '5xl', sm: '5xl', md: '7xl', lg: '8xl' }}>
                        WEB
                        <Text
                            as={'span'}
                            bgGradient="linear(to-r, blue.400,green.400)"
                            bgClip="text">
                            EYE
                        </Text>

                    </Heading>
                </Stack>
                <Stack
                    bg={'gray.50'}
                    rounded={'xl'}
                    p={{ base: 4, sm: 5, md: 8 }}
                    spacing={{ base: 8 }}
                    maxW={'90%'}>
                    <Stack spacing={4}>
                        <Heading
                            color={'gray.800'}
                            lineHeight={1.1}
                            fontSize={{ base: '3xl', sm: '3xl', md: '4xl' }}>
                            Formulário de Identificação

                        </Heading>
                        <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
                            É uma aplicação com o objetivo de ispum lorem ispum lorem ispum lorem
                            ispum lorem ispum lorem ispum lorem ispum lorem
                        </Text>
                    </Stack>
                    <Box as={'form'} mt={10}>
                        <Stack spacing={4}>
                            <Input
                                placeholder="Nome"
                                bg={'gray.100'}
                                border={0}
                                color={'gray.500'}
                                _placeholder={{
                                    color: 'gray.500',
                                }}
                            />
                            <Input
                                placeholder="Idade"
                                bg={'gray.100'}
                                border={0}
                                color={'gray.500'}
                                _placeholder={{
                                    color: 'gray.500',
                                }}
                            />

                            <Stack py={{ base: 1, sm: 1, lg: 1 }} spacing={3} alignItems="center" flexDirection="row">
                                <Text color={'gray.700'} fontSize={{ base: 'md', sm: 'lg' }} px={2} mt={2}>
                                Sexo:
                                </Text>
                                <RadioButtonGroup />
                            </Stack>    
                            <Input
                                placeholder="Observação"
                                bg={'gray.100'}
                                border={0}
                                color={'gray.500'}
                                _placeholder={{
                                    color: 'gray.500',
                                }}
                            />

                        </Stack>
                        <Button
                            fontFamily={'heading'}
                            mt={8}
                            as='a'
                            href='/captura'
                            w={'full'}
                            bgGradient="linear(to-r, blue.400,green.400)"
                            color={'white'}
                            _hover={{
                                bgGradient: 'linear(to-r, blue.400,green.400)',
                                boxShadow: 'xl',
                            }}>
                            Começar
                        </Button>
                    </Box>

                </Stack>
            </Container>
            <Blur
                position={'absolute'}
                top={-10}
                left={0}
                style={{ filter: 'blur(90px)' }}
            />
        </Box>
    );
}

function RadioButtonGroup() {
    const [value, setValue] = useState("1")
    return (
        <RadioGroup onChange={setValue} value={value}>
            <Stack direction="row">
                <Radio value="1">Masculino</Radio>
                <Radio value="2">Feminino</Radio>
            </Stack>
        </RadioGroup>
    )
}
export const Blur = (props) => {
    return (
        <Icon
            width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
            zIndex={-1}
            height="500px"
            viewBox="0 0 528 560"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <circle cx="71" cy="61" r="111" fill="#F56565" />
            <circle cx="244" cy="106" r="139" fill="#ED64A6" />
            <circle cy="291" r="139" fill="#ED64A6" />
            <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
            <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
            <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
            <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
        </Icon>
    );
};