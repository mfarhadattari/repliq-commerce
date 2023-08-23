const generateTransitionId = (length) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let transitionId = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    const randomChar = characters[randomIndex];
    transitionId += randomChar;
  }

  return transitionId;
};

export default generateTransitionId;
