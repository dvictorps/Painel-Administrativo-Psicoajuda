import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LogoutIcon from '@mui/icons-material/Logout';
import { AppBarStyled, ButtonStyled, ToolbarContent } from './styles';
import HomeIcon from '@mui/icons-material/Home';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import { IconStyled } from '../IconStyled';
import { useScreenSize } from '../../utils/useScreenSize';
import { BreakpointsEnum } from '../../enums/breakpoints';
import { useState } from 'react';


const drawerWidth = 240;

export const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft({ children }) {

    const windowSize = useScreenSize()

    function getSizeForMobile() {
        if (windowSize.innerWidth < BreakpointsEnum.md) return false
        if (windowSize.innerWidth > BreakpointsEnum.md) return true
    }

    const [open, setOpen] = useState(getSizeForMobile());

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const homeArray = [
        {
            label: "Dashboard",
            icon: <HomeIcon />,
            href: '/'
        },
        {
            label: "Registros",
            icon: <AppRegistrationIcon />,
            href: '/registros'
        },
        {
            label: "Painel",
            icon: <IconStyled name='MdDashboard' />,
            href: '/painel'
        },

    ]

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <AppBar position="fixed" open={open}>
                <Toolbar sx={{ backgroundColor: 'rgba(0,0,0,0.5)', boxShadow: 0 }}>
                    <AppBarStyled>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{ mr: 2, ...(open && { display: 'none' }) }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <ToolbarContent>
                            <ButtonStyled>
                                <IconButton href="/login">
                                    <LogoutIcon />
                                </IconButton>
                            </ButtonStyled>
                        </ToolbarContent>
                    </AppBarStyled>

                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader style={{ gap: '0.5rem' }}>
                    <SettingsSuggestIcon fontSize='large' />
                    <Typography variant="h5" fontFamily="Open Sans Light" >
                        Psicoajuda
                    </Typography>
                    <IconButton onClick={handleDrawerClose}>
                        <MenuIcon />
                    </IconButton>
                </DrawerHeader>

                <List>
                    {homeArray.map((array) => (
                        <ListItem key={array.label} disablePadding sx={{ fontFamily: 'Open Sans Light' }} >
                            <ListItemButton href={array.href}>
                                <ListItemIcon>
                                    {array.icon}
                                </ListItemIcon>
                                <ListItemText primary={array.label} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

            </Drawer>

            <Main open={open}>
                <DrawerHeader />
                {children}
            </Main>
        </Box>
    );
}