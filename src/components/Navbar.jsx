import {
    Flex,
    Avatar,
    Heading,
    Button,
    Text,
    Spacer,
    HStack,
    useToast,
    AvatarBadge,
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
                <Avatar name="Soeun" bg="pink.200" src="/img/peach.png">
                    <AvatarBadge width="1.3em" bg="teal.500">
                        <Text fontSize="xs" color="white">
                            3
                        </Text>
                    </AvatarBadge>
                </Avatar>
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
