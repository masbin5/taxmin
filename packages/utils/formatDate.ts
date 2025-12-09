export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat("id-ID").format(date);
