import axios from "axios";

export const getReport = async (setReportData) => {
  const response = await axios.get(
    "https://api.jsonbin.io/b/6107fbe9f14b8b153e05e714"
  );
  setReportData(response);
};

export const getPublicInformationTrackState = (data) => {
  return data.personal.publicInfo.courtAndInsolvencies.length > 0
    ? false
    : true;
};
