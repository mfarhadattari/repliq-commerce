const formatDateTime = (timeDate) => {
  const date = timeDate?.split(",")[0];
  const time = timeDate?.split(",")[1];
  return { date, time };
};

export default formatDateTime;
