export const logger = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
  console.log("type: ", action.type);
  console.log("payload: ", action.payload);
  console.log("store: ", store.getState());

  next(action);

  console.log("store: ", store.getState());
};
