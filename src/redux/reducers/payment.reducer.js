const initialState = {
  data: [],
  loading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SAMPLE_STATE":
      return {
        ...state,
        ...payload
      };

    default:
      return state;
  }
};
