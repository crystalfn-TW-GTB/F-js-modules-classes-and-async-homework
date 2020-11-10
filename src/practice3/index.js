// const getPoetryWithPromise = () => {
//   return fetch("https://v1.jinrishici.com/all.json")
//     .then((response) => {
//       if (response.ok) {
//         return response.json();
//       }
//       throw new Error("Network response was not ok.");
//     })
//     .then((data) => {
//       const { origin, author, content } = data;
//       return [origin, author, content];
//     })
//     .catch((error) => {
//       throw new Error(
//         "There has been a problem with your fetch operation: ",
//         error.message
//       );
//     });
// };

async function getPoetryWithAsync() {
  const response = await fetch("https://v1.jinrishici.com/all.json");

  if (response.ok) {
    const { origin, author, content } = await response.json();
    return [origin, author, content];
  }

  throw new Error("There are something error.");
}

// export default getPoetryWithPromise;
export default getPoetryWithAsync;
