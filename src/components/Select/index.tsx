import { Select as MuiSelect, SelectProps, useTheme } from '@mui/material';
import React from 'react';

export const Select = <T, >({ MenuProps, ...props }: SelectProps<T>) => {
    const { palette: { divider } } = useTheme();

    return (
        <MuiSelect
            {...props}
            MenuProps={{
                ...MenuProps,
                sx: {
                    ...MenuProps?.sx,
                    '& .MuiPaper-root': {
                        border: `solid 1px ${divider}`,
                        boxShadow: '0 .3rem .5rem rgb(0 0 0 / 15%)'
                    }
                }
            }}
        />
    );
};
