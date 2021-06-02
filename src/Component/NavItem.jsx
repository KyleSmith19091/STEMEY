import React from 'react';
import PropTypes from 'prop-types';

import { Link as RouterLink, useHistory } from "react-router-dom";

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Container,
} from "@chakra-ui/react";

import "../Style/Component/NavItem.css";

const NavItem = ({ name, content }) => {
    const history = useHistory();

    const handleClick = (path) => {
        history.push(path);
    }

    return (
        <Container padding="4">
            <Menu>
                <MenuButton as={Button} colorScheme="transparent" sx={{ fontWeight: "normal", outline: "none" }} _focus={{
                    transform: "scale(0.98)",
                    ringColor: "transparent"
                }} _hover={{ fontWeight: "bold" }}>
                    {name}
                </MenuButton>
                <MenuList>
                    {content.map((item) => {
                        return (
                            <MenuItem onClick={() => handleClick(item.path)}><RouterLink to={item.path}>{item.name}</RouterLink></MenuItem>
                        );
                    })}
                </MenuList>
            </Menu>
        </Container>
    );
}

NavItem.propTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.array.isRequired
}

export default NavItem;
