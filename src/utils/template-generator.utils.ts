export const templateIdGenerator = async (
  categoryName: string,
): Promise<string> => {
  const time = new Date().getTime().toString();

  let firstAndLastChar: string = '';

  const splitCategory = categoryName.split(' ');
  if (splitCategory.length > 1) {
    firstAndLastChar = categoryName
      .split(' ')
      .map((val, ind) => {
        const splitWords = val.split('');
        return splitWords[0];
      })
      .map((val, ind) => {
        return val.toUpperCase();
      })
      .join('')
      .concat(time.slice(-6));
    return firstAndLastChar;
  } else {
    firstAndLastChar = categoryName
      .split('')
      .map((val, ind, arr) => {
        if (ind === 0 || ind === arr.length - 1) return val.toUpperCase();
      })
      .join('')
      .concat(time.slice(-6));
    return firstAndLastChar;
  }

  /* const firstAndLastChar : string = await categoryName
      .split("")
      .map((val, ind, arr) => {
        if (ind === 0 || ind === arr.length - 1) return val.toUpperCase();
      })
      .join("")
      .concat(time.slice(-6));
  
    return firstAndLastChar; */
};
