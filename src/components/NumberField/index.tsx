import { AddOutlined, RemoveOutlined } from '@mui/icons-material';
import { IconButton, IconButtonProps, InputAdornment, TextField, TextFieldProps } from '@mui/material';
import React from 'react';

interface Props {
    incrementButtonProps?: IconButtonProps;
    decrementButtonProps?: IconButtonProps;
    textFieldProps?: TextFieldProps;
}

export const NumberField = ({ incrementButtonProps, decrementButtonProps, textFieldProps }: Props) => {
    const value: number | undefined = textFieldProps?.value as number;
    const minValue: number | undefined = textFieldProps?.inputProps?.min;
    const maxValue: number | undefined = textFieldProps?.inputProps?.max;

    return (
        <TextField
            {...textFieldProps}
            type="number"
            sx={{
                minWidth: 130,
                '& .MuiOutlinedInput-root': {
                    pr: .75
                },
                '& .MuiOutlinedInput-input::-webkit-inner-spin-button, & .MuiOutlinedInput-input::-webkit-outer-spin-button': {
                    margin: 0,
                    WebkitAppearance: 'none'
                },
                '& .MuiOutlinedInput-input': {
                    MozAppearance: 'textfield'
                }
            }}
            InputProps={{
                ...textFieldProps?.InputProps,
                endAdornment: <InputAdornment position="end">
                    <IconButton
                        {...incrementButtonProps}
                        disabled={value && maxValue ? value >= maxValue : false}
                        edge="start"
                        size="small"
                        color="default"
                        sx={{ ml: 0, mr: .5 }}
                    >
                        <AddOutlined />
                    </IconButton>
                    <IconButton
                        {...decrementButtonProps}
                        disabled={value && minValue ? value <= minValue : false}
                        edge="end"
                        size="small"
                        color="default"
                    >
                        <RemoveOutlined />
                    </IconButton>
                </InputAdornment>
            }}
        />
    );
};
