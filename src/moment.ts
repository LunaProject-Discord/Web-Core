import { default as momentDate } from 'moment';
import { tz } from 'moment-timezone';

export interface MomentFormatOptions {
    pattern?: string;
    timezone?: string;
}

export const moment = (date: Date | string, timezone: string | undefined = undefined): momentDate.Moment => {
    return (timezone ? tz(date, timezone) : momentDate(date));
};

export const format = (date: Date | string, { pattern, timezone }: MomentFormatOptions = {}): string => {
    return moment(date, timezone).format(pattern ?? 'YYYY/MM/DD HH:mm');
};

export const formatDate = (date: Date | string, { pattern, timezone }: MomentFormatOptions = {}): string => {
    return moment(date, timezone).format(pattern ?? 'YYYY/MM/DD');
};

export const formatTime = (date: Date | string, { pattern, timezone }: MomentFormatOptions = {}): string => {
    return moment(date, timezone).format(pattern ?? 'HH:mm');
};
