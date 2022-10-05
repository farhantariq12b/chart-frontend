const insertDataInMap = (key, countObject, map) => {
  const checkEntry = map.get(key);
  if (Array.isArray(checkEntry) && checkEntry.length) {
    checkEntry.push(countObject[key]);
    map.set(key, checkEntry);
  } else {
    map.set(key, [countObject[key]]);
  }
};

const getDataSetfromMap = (map) => {
  const datasets = [];
  map.forEach((value, key) => {
    switch (key) {
      case "SLS_COUNT":
        datasets.push({
          label: "SLS",
          data: value,
          backgroundColor: "rgb(224, 201, 47)",
        });
        return;
      case "FDM_COUNT":
        datasets.push({
          label: "FDM",
          data: value,
          backgroundColor: "rgb(26, 29, 176)",
        });
        return;
      case "MJF_COUNT":
        datasets.push({
          label: "MJF",
          data: value,
          backgroundColor: "rgb(53, 162, 235)",
        });
        return;
      default:
        return;
    }
  });
  return datasets;
}

export { insertDataInMap, getDataSetfromMap };
