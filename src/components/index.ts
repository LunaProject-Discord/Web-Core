import { CSSProperties, ReactNode } from 'react';

export interface BaseProps {
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
}

export * from './Menu';
export * from './Select';

export * from './Drawer';
