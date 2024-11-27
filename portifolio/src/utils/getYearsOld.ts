export const getYearsOld = (): number => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const day = new Date().getDate();
  let YO = year - 2003; // Considera que a data de nascimento é 03/03/2003

  if (month < 3 || (month === 3 && day < 4)) {
    YO--;
  }

  return YO < 0 ? 0 : YO;
};
