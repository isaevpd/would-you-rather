
const logger = store => next => action => {
  console.group();
  console.log('Action is', action);
  const returnValue = next(action);
  console.log('The new state: ', store.getState());
  console.groupEnd();
  return returnValue;
};

export default logger;
