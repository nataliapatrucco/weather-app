const getLocalTime = (time) => {
  const localTime = new Date(time * 1000).toString().slice(0, 15);
  return localTime;
};

export { getLocalTime as default };
