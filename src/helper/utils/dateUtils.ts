const weekLabels = [
  'یکشنبه',
  'دوشنبه',
  'سه شنبه',
  'چهارشنبه',
  'پنج شنبه',
  'جمعه',
  'شنبه',
];

function getLabelOfWeek(day: number) {
  return weekLabels[day];
}

const persianOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

export const gregorianDateOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
  numberingSystem: 'latn', // Use 'latn' to specify Western Arabic numerals.
};

export const currentDate = new Date();
const today = new Date(currentDate);
const tomorrow = new Date(today.setDate(today.getDate() + 1));
const lastDayOfWeek = new Date(
  today.setDate(today.getDate() + (6 - today.getDay()))
);
const firstDayOfNextWeek = new Date(
  today.setDate(today.getDate() + 7 - today.getDay() + 1)
);
const daysUntilNextSaturday = 6 - currentDate.getDay() + 7; // Calculate the number of days until the next Saturday
const nextSaturday = new Date(
  today.setDate(today.getDate() + daysUntilNextSaturday)
);

export { tomorrow, firstDayOfNextWeek, lastDayOfWeek, nextSaturday };

export const firstDayOfNextMonth = new Date(
  today.getFullYear(),
  today.getMonth() + 1,
  1
);

export function getLocaleDateString(
  date: Date,
  locales?: Intl.LocalesArgument,
  options?: Intl.DateTimeFormatOptions
) {
  return date.toLocaleDateString(locales, options);
}

export function persianDateNumber(date?: string) {
  // ۱۴۰۲/۳/۲۴

  if (date) {
    return new Date(date).toLocaleDateString('fa-IR');
  }
  return today.toLocaleDateString('fa-IR');
}

export function gregorianDateNumber(date?: string) {
  // ۱۴۰۲/۳/۲۴

  if (date) {
    return new Date(date).toLocaleDateString('en');
  }
  return today.toLocaleDateString('en');
}

export function persianDateAndNumber(
  date?: string,
  option?: Intl.DateTimeFormatOptions
) {
  // ۲۴ خرداد ۱۴۰۲
  if (date) {
    return new Date(date).toLocaleDateString('fa-IR', {
      ...persianOptions,
      ...option,
    });
  }
  return today.toLocaleDateString('fa-IR', {
    ...persianOptions,
    ...option,
  });
}

export function persianDayLabel(date?: string) {
  // شنبه
  if (date) {
    return getLabelOfWeek(new Date(date).getDay());
  }
  return getLabelOfWeek(today.getDay());
}

export const getNextSaturday = (): Date => {
  const currentDayOfWeek = today.getDay();
  const daysUntilNextSaturday2 =
    currentDayOfWeek <= 6 ? 6 - currentDayOfWeek + 1 : 7; // Calculate the number of days until the next Saturday
  const nextSaturday2 = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + daysUntilNextSaturday2
  );
  return nextSaturday2;
};
