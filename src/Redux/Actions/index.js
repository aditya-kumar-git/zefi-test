export let authTokenAction = (data) => {
    return {
      type: "AUTHTOKEN",
      payload: data,
    };
  };