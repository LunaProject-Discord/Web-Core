import { Box, Drawer, styled, Toolbar } from '@mui/material';

export const DRAWER_WIDTH = 280;

export const DrawerContainer = styled('nav')(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        width: DRAWER_WIDTH,
        flexShrink: 0
    }
}));

export const PermanentDrawer = styled(Drawer)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up('md')]: {
        display: 'block'
    },
    '& .MuiDrawer-paper': {
        width: DRAWER_WIDTH,
        left: 'auto',
        boxSizing: 'border-box',
        ...(theme.palette.mode === 'dark' && {
            backgroundImage: 'none'
        })
    }
}));

export const TemporaryDrawer = styled(Drawer)(({ theme }) => ({
    display: 'block',
    [theme.breakpoints.up('md')]: {
        display: 'none'
    },
    '& .MuiDrawer-modal': {
        zIndex: `${theme.zIndex.drawer + 1} !important`
    },
    '& .MuiDrawer-paper': {
        width: DRAWER_WIDTH,
        left: 'auto',
        boxSizing: 'border-box',
        ...(theme.palette.mode === 'dark' && {
            backgroundImage: 'none'
        })
    }
}));

export const DrawerToolbar = styled(Toolbar)(({ theme }) => ({
    borderBottom: `solid 1px ${theme.palette.divider}`,
    background: theme.palette.background.default,
    color: theme.palette.mode === 'dark' ? theme.palette.grey[500] : theme.palette.grey[800]
}));

export const DrawerContent = styled(Box)({
    overflow: 'auto',
    overflowX: 'hidden',
    overscrollBehavior: 'contain'
});
