const { default: Axios } = require("axios")
var KEY = "AIzaSyBHbfi4UpUO42TGI0moBHvN5fjNEc6YM28"

export let authTokenAction = (data) => {
  return {
    type: "AUTHTOKEN",
    payload: data,
  };
};
export let metaDataAction = (data) => {
  return {
    type: "METADATA",
    payload: data,
  };
};

export let defaultSearchAction = () => {
  return async (dispatch) => {
    try {
      var output = await Axios({
        url: "https://www.googleapis.com/youtube/v3/search",
        params: { q: "mkbhd", part: "snippet", maxResults: 10, key: KEY },
      })

      dispatch({
        type: "SEARCH",
        payload: output.data.items,
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export let querySearchAction = (query) => {
  return async (dispatch) => {
    try {
      var output = await Axios({
        url: "https://www.googleapis.com/youtube/v3/search",
        params: { q: query, part: "snippet", maxResults: 10, key: KEY },
      })


      dispatch({
        type: "SEARCH",
        payload: output.data.items,
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export let emptySearchAction = () => {
  return {
    type: "SEARCH",
    payload: [],
  };
};