const getTime = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  console.log(`${hours}:${minutes}`);
  return `${hours}:${minutes}`;
};

export default getTime;
