import axios from "axios";

export const getAccomSiteData = (destId) => {
  return axios.post("/dest/accom", { destId: destId }).then((res) => {
    console.log("accom response: ", res);

    if (res.data.error !== null && res.data.error !== undefined) {
      console.log("get accom error: ", res.data.error);
      return null;
    }

    return res.data;
  });
};

export const getTransSiteData = (destId) => {
  return axios.post("/dest/transportation", { destId: destId }).then((res) => {
    console.log("transportation data: ", res);

    if (res.data.error !== null && res.data.error !== undefined) {
      console.log("get transportation error: ", res.data.error);
      return null;
    }

    return res.data;
  });
};

export const getRestSiteData = (destId) => {
  return axios.post("/dest/restaurant", { destId: destId }).then((res) => {
    console.log("restaurant response: ", res);

    if (res.data.error !== null && res.data.error !== undefined) {
      console.log("get restaurant error: ", res.data.error);
      return null;
    }

    return res.data;
  });
};

export const getActSiteData = (destId) => {
  return axios.post("/dest/activity", { destId: destId }).then((res) => {
    console.log("activity response: ", res);

    if (res.data.error !== null && res.data.error !== undefined) {
      console.log("get activity error: ", res.data.error);
      return null;
    }
    return res.data;
  });
};
