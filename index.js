const testNum = num => {
  return new Promise((resolve, reject) =>
      num > 10
        ? resolve(`${num} is greater than 10!`)
        : reject(`error! ${num} is not greater than 10`)
  );
};

const makeAllCaps = words => {
  return new Promise((resolve, reject) => {
    const upperCaseWords = words.map(word => {
      if (typeof word !== "string") {
        reject("get off my lawn with this non-string bs!!");
      }
      return word.toUpperCase();
    });
    resolve(upperCaseWords);
  });
};

const sortWords = words => {
  return new Promise((resolve, reject) => {
    resolve(words.sort());
  });
};
