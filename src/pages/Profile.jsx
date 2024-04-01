import {
    Tab,
    TabList,
    TabPanels,
    Tabs,
    TabPanel,
    List,
    ListItem,
    ListIcon,
} from "@chakra-ui/react";
import {
    MoonIcon,
    SunIcon,
    StarIcon,
    CheckCircleIcon,
    WarningIcon,
} from "@chakra-ui/icons";

export default function Profile() {
    return (
        <Tabs mt="40px" p="20px" colorScheme="blue" variant="enclosed">
            <TabList>
                <Tab _selected={{ color: "white", bg: "blue.200" }}>
                    Account Info
                </Tab>
                <Tab _selected={{ color: "white", bg: "blue.200" }}>
                    Task History
                </Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                    <List spacing={4}>
                        <ListItem>
                            <ListIcon as={MoonIcon} />
                            Email: dododo@gmail.com
                        </ListItem>
                        <ListItem>
                            <ListIcon as={SunIcon} />
                            Neque porro quisquam est qui dolorem ipsum quia
                            dolor sit amet
                        </ListItem>
                        <ListItem>
                            <ListIcon as={StarIcon} />
                            Neque porro quisquam est qui
                        </ListItem>
                    </List>
                </TabPanel>
                {/* 2nd tab panel */}
                <TabPanel>
                    <List spacing={4}>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color="teal.400" />
                            Lorem ipsum dolor sit amet consectetur.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color="teal.400" />
                            Lorem ipsum dolor sit amet consectetur.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={WarningIcon} color="red.400" />
                            Lorem ipsum dolor sit amet consectetur.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color="teal.400" />
                            Lorem ipsum dolor sit amet consectetur.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={WarningIcon} color="red.400" />
                            Lorem ipsum dolor sit amet consectetur.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color="teal.400" />
                            Lorem ipsum dolor sit amet consectetur.
                        </ListItem>
                    </List>
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}
