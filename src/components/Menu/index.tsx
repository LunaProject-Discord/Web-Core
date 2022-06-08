import { ArrowRightOutlined } from '@mui/icons-material';
import { ListItemIcon, Menu as MuiMenu, MenuItem, styled, Typography } from '@mui/material';
import React, { ReactNode, useState } from 'react';

export const Menu = styled(MuiMenu)(({ theme }) => ({
    '& .MuiPaper-root': {
        border: `solid 1px ${theme.palette.divider}`,
        boxShadow: '0 .3rem .5rem rgb(0 0 0 / 15%)'
    }
}));

interface NestedMenuProps {
    icon?: ReactNode;
    label: string;
    children?: any;
}

export const NestedMenu = ({ icon, label, children }: NestedMenuProps) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const open = Boolean(anchorEl);

    const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget);
    const handleMouseLeave = () => setAnchorEl(null);

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <MenuItem onClick={(e) => setAnchorEl(e.currentTarget)}>
                <ListItemIcon>{icon}</ListItemIcon>
                {label}
                <ArrowRightOutlined fontSize="small" color="action" sx={{ marginLeft: 'auto' }} />
            </MenuItem>
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                open={open}
                autoFocus={false}
                disableAutoFocus
                disableEnforceFocus
                onClose={() => setAnchorEl(null)}
                sx={{
                    pointerEvents: 'none',
                    '& .MuiPaper-root': {
                        width: 270,
                        marginTop: -9
                    }
                }}
            >
                <div style={{ pointerEvents: 'auto' }}>
                    {children}
                </div>
            </Menu>
        </div>
    );
};

interface MenuItemShortcutKeyProps {
    label: string;
}

export const MenuItemShortcutKey = ({ label }: MenuItemShortcutKeyProps) => (
    <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Roboto', fontWeight: 500 }}>
        {label}
    </Typography>
);
