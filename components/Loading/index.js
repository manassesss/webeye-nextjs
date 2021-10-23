import {
    Stack,
    Spinner,
    Text,

} from '@chakra-ui/react';


export default function Loading({ text, ...props }) {

    return (
            <Stack
                direction="column"
                spacing={4}
                alignItems="center"
            >
                <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl" />

                <Text fontSize="xl">
                    {text}
                </Text>
            </Stack>
    );
}
