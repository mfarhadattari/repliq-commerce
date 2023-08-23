const formatDateTime = (timeDate) => {
  const data = timeDate.split(",")[0];
  const time = timeDate.split(",")[1];
  return { data, time };
};

export default formatDateTime;
