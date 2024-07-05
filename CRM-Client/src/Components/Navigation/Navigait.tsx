import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import {LinksPage} from "./Arr/muLinksPage";
import {LinksFunction} from "./Arr/muLinksFunction"


import s from './Navigation.module.css'
import { Link } from 'react-router-dom';
import { colors } from '@mui/material';



export default function Navigate() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

const styleNav = {
    width: 250,
    padding: 2,
}

    const DrawerList = (
        <Box sx={styleNav} className={s.DrawerListBox} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                <h2>Страници</h2>
                {LinksPage.map((text,index) => (
                    <ListItem key={text.name} disablePadding>
                        <Link to={text.to}>
                            <ListItemButton>
                                <ListItemIcon>
                                    {text.icon}
                                </ListItemIcon>
                            <ListItemText primary={text.name} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <h2>Действия</h2>
            <List>
                {LinksFunction.map((text, index) => (
                    <ListItem key={text.name} disablePadding>
                        <Link to={text.to}>
                        <ListItemButton>
                            <ListItemIcon>
                                {text.icon}
                            </ListItemIcon>
                            <ListItemText primary={text.name} />
                        </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>

            {/*<AccordionUsage/>*/}
        </Box>
    );

    return (
        <div className={s.NavigateBloc}>
        <div className={s.Navigate}>
            <Button onClick={toggleDrawer(true)}>Открыть навигацию</Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
        </div>
    );
}

