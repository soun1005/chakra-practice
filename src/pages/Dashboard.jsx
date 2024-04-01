import { Heading, Text, Container, Box, SimpleGrid } from "@chakra-ui/react";

export default function Dashboard() {
    // const boxStyles = {
    //     ":hover": {
    //         color: "pink",
    //         fontWeight: "600",
    //     },
    // };

    return (
        <SimpleGrid p="10" columns={4} spacing={10} minChildWidth="250px">
            <Box bg="white" h="200px" border="1px solid"></Box>
            <Box bg="white" h="200px" border="1px solid"></Box>
            <Box bg="white" h="200px" border="1px solid"></Box>
            <Box bg="white" h="200px" border="1px solid"></Box>

            <Box bg="white" h="200px" border="1px solid"></Box>
            <Box bg="white" h="200px" border="1px solid"></Box>
            <Box bg="white" h="200px" border="1px solid"></Box>
            <Box bg="white" h="200px" border="1px solid"></Box>

            <Box bg="white" h="200px" border="1px solid"></Box>
            <Box bg="white" h="200px" border="1px solid"></Box>
            <Box bg="white" h="200px" border="1px solid"></Box>
            <Box bg="white" h="200px" border="1px solid"></Box>
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
