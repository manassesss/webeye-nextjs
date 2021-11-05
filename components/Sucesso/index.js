import {
  Flex,
  Stack,
  Heading,
  Text,
  Input,
  Button,
  Icon,
  useColorModeValue,
  createIcon,
} from '@chakra-ui/react';

export default function Sucess() {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      py={12}
      >
      <Stack
        boxShadow={'2xl'}
        
        rounded={'xl'}
        p={10}
        spacing={8}
        align={'center'}>
        <Heading
          textTransform={'uppercase'}
          fontSize={'5xl'}
        >
          🎉
        </Heading>
        <Stack align={'center'} spacing={2}>
          <Heading
            textTransform={'uppercase'}
            fontSize={'3xl'}
            color={useColorModeValue('gray.800', 'gray.200')}>
            Concluído com Sucesso
          </Heading>
          <Text fontSize={'lg'} color={'gray.500'}>
            Obrigado por participar do experimento!
          </Text>
        </Stack>
        <Stack spacing={4} direction={{ base: 'column', md: 'row' }} w={'full'}>
          <Button
            as="a"
            href="/"
            bg={'blue.400'}
            rounded={'full'}
            color={'white'}
            flex={'1 0 auto'}
            _hover={{ bg: 'blue.500' }}
            _focus={{ bg: 'blue.500' }}>
            Voltar a tela inicial
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}

