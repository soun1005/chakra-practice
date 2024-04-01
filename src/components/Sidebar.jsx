import { CalendarIcon, EditIcon, SunIcon } from "@chakra-ui/icons";
import { List, ListItem, ListIcon } from "@chakra-ui/react";

import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <List color="white" fontSize="1.2em" spacing={4}>
            <ListItem>
                <NavLink to="/">
                    <ListIcon as={CalendarIcon} />
                    Dashboard
                </NavLink>
            </ListItem>
            <ListItem>
                <ListIcon as={EditIcon} />
                <NavLink to="/create">New Task</NavLink>
            </ListItem>
            <ListItem>
                <ListIcon as={SunIcon} />
                <NavLink to="/profile">Profile</NavLink>
            </ListItem>
        </List>
    );
}

export default Sidebar;
