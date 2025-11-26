import { parse, format, compareAsc, differenceInMonths } from 'date-fns';

export interface DateDifference {
  years: number;
  months: number;
}

const parseMonthYear = (dateString: string): Date | null => {
  const trimmed = dateString.trim();

  if (trimmed.toLowerCase() === 'present') {
    return new Date();
  }

  try {
    return parse(trimmed, 'MMMM yyyy', new Date());
  } catch {
    return null;
  }
};

const formatDate = (date: Date, isPresent: boolean = false): string => {
  if (isPresent) {
    return 'Present';
  }

  return format(date, 'MMMM yyyy');
};

export const consolidateDateRanges = (dateRanges: string[]): string => {
  if (dateRanges.length === 0) {
    return '';
  }

  const allDates: Date[] = [];
  let hasPresent = false;

  for (const range of dateRanges) {
    const parts = range.split('-').map(part => part.trim());

    for (const part of parts) {
      if (part.toLowerCase() === 'present') {
        hasPresent = true;
        continue;
      }

      const date = parseMonthYear(part);
      if (date) {
        allDates.push(date);
      }
    }
  }

  if (allDates.length === 0) {
    return hasPresent ? 'Present' : '';
  }

  allDates.sort(compareAsc);

  const earliestDate = allDates[0];
  const latestDate = hasPresent ? new Date() : allDates[allDates.length - 1];

  const formattedStart = formatDate(earliestDate);
  const formattedEnd = formatDate(latestDate, hasPresent);

  return `${formattedStart} - ${formattedEnd}`;
};

// NOTE may not need this
export const calculateYearDifference = (dateRange: string): DateDifference => {
  const parts = dateRange.split('-').map(part => part.trim());

  if (parts.length !== 2) {
    return { years: 0, months: 0 };
  }

  const startDate = parseMonthYear(parts[0]);
  const endDate = parseMonthYear(parts[1]);

  if (!startDate || !endDate) {
    return { years: 0, months: 0 };
  }

  const totalMonths = differenceInMonths(endDate, startDate);
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return { years, months };
};
