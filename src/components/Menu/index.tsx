import { ArrowRightOutlined } from '@mui/icons-material';
import { ListItemIcon, Menu as MuiMenu, MenuItem, styled, Theme, Typography } from '@mui/material';
import { SystemStyleObject } from '@mui/system';
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
    children?: ReactNode;
    sx?: SystemStyleObject<Theme> | ((theme: Theme) => SystemStyleObject<Theme>);
}

export const NestedMenu = ({ icon, label, children, sx }: NestedMenuProps) => {
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
                open={open}
                onClose={() => setAnchorEl(null)}
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                autoFocus={false}
                disableAutoFocus
                disableEnforceFocus
                sx={{
                    pointerEvents: 'none',
                    '& .MuiPaper-root': {
                        ...sx,
                        width: 270,
                        marginTop: '-9px'
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
