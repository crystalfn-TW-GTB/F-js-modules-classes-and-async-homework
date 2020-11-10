const getURL = (ADDRESS, port, path) => {
  return `${ADDRESS}:${port}${path}`;
};

export default getURL;
