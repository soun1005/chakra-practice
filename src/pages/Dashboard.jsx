import {
    Heading,
    Text,
    Divider,
    Flex,
    Box,
    SimpleGrid,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    HStack,
    Button,
    Avatar,
} from "@chakra-ui/react";
import { useLoaderData } from "react-router";
import { ViewIcon, EditIcon } from "@chakra-ui/icons";

export default function Dashboard() {
    const tasks = useLoaderData();
    // const boxStyles = {
    //     ":hover": {
    //         color: "pink",
    //         fontWeight: "600",
    //     },
    // };

    return (
        <SimpleGrid columns={4} spacing={10} minChildWidth="300px">
            {tasks &&
                tasks.map((task) => (
                    <Card
                        key={task.id}
                        borderTop="8px"
                        borderColor="pink.400"
                        bg="white"
                    >
                        <CardHeader>
                            <Flex gap={5}>
                                <Avatar src={task.img} />
                                <Box>
                                    <Heading as="h3" size="sm">
                                        {task.title}
                                    </Heading>
                                    <Text>by {task.author}</Text>
                                </Box>
                            </Flex>
                        </CardHeader>
                        <CardBody color="gray.500">
                            <Text>{task.description}</Text>
                        </CardBody>

                        <Divider borderColor="gray.200" />

                        <CardFooter>
                            <HStack>
                                <Button variant="ghost" leftIcon={<ViewIcon />}>
                                    Watch
                                </Button>
                                <Button variant="ghost" leftIcon={<EditIcon />}>
                                    Comment
                                </Button>
                            </HStack>
                        </CardFooter>
                    </Card>
                ))}
        </SimpleGrid>
        // <Container as="section">
        //     <Heading my="30px" p="10px">
        //         Chakra UI
        //     </Heading>
        //     <Text ml="30px">
        //         Lorem Ipsum is simply dummy text of the printing and typesetting
        //         industry. Lorem Ipsum has been the industry's standard dummy
        //         text ever since the 1500s, when an unknown printer took a galley
        //         of type and scrambled it to make a type specimen book.
        //     </Text>
        //     <Text ml="30px" color="pink.500" fontWeight="bold">
        //         Lorem Ipsum is simply dummy text of the printing and typesetting
        //         industry. Lorem Ipsum has been the industry's standard dummy
        //         text ever since the 1500s, when an unknown printer took a galley
        //         of type and scrambled it to make a type specimen book.
        //     </Text>

        //     <Box my="30px" p="20px" bg="orange">
        //         <Text color="white">
        //             Lorem Ipsum is simply dummy text of the printing and
        //             typesetting industry. Lorem Ipsum has been the industry's
        //             standard dummy text ever since the 1500s, when an unknown
        //             printer took a galley of type and scrambled it to make a
        //             type specimen book.
        //         </Text>
        //     </Box>

        //     <Box sx={boxStyles}>Hello</Box>
        // </Container>
    );
}

export const tasksLoader = async () => {
    const res = await fetch("http://localhost:3000/tasks");

    return res.json();
};
