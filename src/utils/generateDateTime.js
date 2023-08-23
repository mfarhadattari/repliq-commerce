import moment from "moment/moment";

const generateDateTime = () => {
  const dataTime = moment().format("MM-DD-YYYY, HH:mm:ss");
  return dataTime;
};

export default generateDateTime;
