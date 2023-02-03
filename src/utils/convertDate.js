import jMoment from "jalali-moment";

export const convertDateToJalali = (data, format='jYYYY/jMM/jDD') => {
  return jMoment(data).format(format);
};

export const convertDateToMiladi = (data) => {
  return jMoment(data, 'jD/jM/jYYYY').format("YYYY-M-D");
}