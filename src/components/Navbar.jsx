import {
    Flex,
    Box,
    Heading,
    Button,
    Text,
    Spacer,
    HStack,
    useToast,
} from "@chakra-ui/react";
import { UnlockIcon } from "@chakra-ui/icons";

const Navbar = () => {
    const toast = useToast();

    const showToast = () => {
        toast({
            title: "Logged out",
            description: "Successfully logged out",
            duration: 2000,
            isClosable: true,
            status: "success",
            position: "top",
            icon: <UnlockIcon />,
        });
    };

    return (
        <Flex as="nav" p="10px" alignItems="center" mb="40px">
            <Heading as="h1">Soeun & Chakra</Heading>
            <Spacer />
            <HStack spacing="20px">
                <Box bg="gray.200" p="10px">
                    M
                </Box>
                <Text>thdms1005@gmail.com</Text>
                <Button colorScheme="pink" onClick={showToast}>
                    Logout
                </Button>
            </HStack>
        </Flex>
        // <Flex bg="gray.200" justify="space-between" wrap="wrap" gap="2">
        //     <Box w="150px" h="50px" bg="pink">
        //         1
        //     </Box>
        //     <Box w="150px" h="50px" bg="yellow">
        //         2
        //     </Box>
        //     <Box w="150px" h="50px" bg="green" flexGrow="1">
        //         3
        //     </Box>
        //     <Box w="150px" h="50px" bg="blue" flexGrow="2">
        //         4
        //     </Box>
        // </Flex>
    );
};

export default Navbar;
