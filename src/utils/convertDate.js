import jMoment from "jalali-moment";

export const convertDateToJalali = (data) => {
  return jMoment(data).format("jYYYY/jMM/jDD");
};
