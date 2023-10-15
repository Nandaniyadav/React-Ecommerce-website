const ProducRecuder = (state, action) => {
  //   if (action.type === "SET_LOADING") {
  //     return {
  //       ...state,
  //       isLoding: true,
  //     };
  //   }
  //   if (action.type === "API_ERROR")
  //     return {
  //       state,
  //       isLoding: false,
  //       isError: true,
  //     };           // use of Switch Method

  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_API_DATA":
      const featureData = action.payload.filter((curentElement) => {
        return curentElement.featured === true;
      });
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureData,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
export default ProducRecuder;
