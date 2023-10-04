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

const options: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
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
  options?: Intl.DateTimeFormatOptions | undefined
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

export function persianDateAndNumber(date?: string) {
  // ۲۴ خرداد ۱۴۰۲
  if (date) {
    return new Date(date).toLocaleDateString('fa-IR', options);
  }
  return today.toLocaleDateString('fa-IR', options);
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
