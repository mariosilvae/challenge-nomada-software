const reducer = (state, action) => {
  switch (action.type) {
    case "GET_ACTOR":
      return { actor: action.payload };

    default:
      return state;
  }
};

export default reducer;
