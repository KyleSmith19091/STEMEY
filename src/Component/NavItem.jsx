import React from 'react';
import PropTypes from 'prop-types';

import { Link, useHistory } from "react-router-dom";

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Container,
    useDisclosure
} from "@chakra-ui/react";

import "../Style/Component/NavItem.css";

const NavItem = ({ name, content }) => {

    // Hacky stuff to move around js event system 👍
    const { isOpen, onOpen, onClose } = useDisclosure();
    const history = useHistory();
    const handleClick = (path) => {
        history.push(path);
    }

    return (
        <Container padding="4">
            <Menu isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
                <MenuButton as={Button} onClick={onOpen} colorScheme="transparent" sx={{ fontWeight: "normal", outline: "none", border: "1px solid white" }} _focus={{
                    transform: "scale(0.98)",
                    ringColor: "transparent"
                }} _hover={{ border: "2px solid white" }}>
                    {name}
                </MenuButton>
                <MenuList sx={{ padding: "1em", backgroundColor: "var(--primary-purple)", color: "white", outline: "none", border: "none", borderRadius: "1.5em" }}
                >
                    {content.map((item, idx) => {
                        return (
                            <MenuItem
                                _focus={{ backgroundColor: "var(--primary-purple-light)" }}
                                onClick={() => { handleClick(item.path); onClose(); }}
                                key={idx}
                                sx={{ borderRadius: "1em" }}
                            ><Link to={item.path}>{item.name}</Link></MenuItem>
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
