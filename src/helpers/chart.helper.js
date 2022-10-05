import { getDataSetfromMap, insertDataInMap } from ".";

const convertDataByGettingDynamicLabel = (data, labelKey, labelValue) => {
  if (!data || !data.length) {
    return [];
  }

  const labels = [];

  const map = new Map();

  data.forEach((val) => {
    labels.push(val[labelKey]);
    const counts = val[labelValue].find((d) => d) || {};
    insertDataInMap("SLS_COUNT", counts, map);
    insertDataInMap("FDM_COUNT", counts, map);
    insertDataInMap("MJF_COUNT", counts, map);
  });

  const datasets = getDataSetfromMap(map)

  return {
    labels,
    datasets,
  };
};

const convertDataForChartJS = (data, labels) => {
  if (!data || !JSON.stringify(data) === "{}") {
    return {};
  }

  const map = new Map();

  Object.keys(data).map((label) => {
    const counts = data[label].find((d) => d);
    insertDataInMap("SLS_COUNT", counts, map);
    insertDataInMap("FDM_COUNT", counts, map);
    insertDataInMap("MJF_COUNT", counts, map);
  });

  const datasets = getDataSetfromMap(map)

  return {
    labels,
    datasets,
  };
};

export {
  convertDataByGettingDynamicLabel,
  convertDataForChartJS
}