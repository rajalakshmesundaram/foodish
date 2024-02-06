function fetchData() {
  return new Promise(function (resolve, reject) {
    fetch("https://foodish-api.com/api")
      .then((response) => {
        if (!response.ok) {
          reject("Error fetching data");
        }
        return response.json();
      })
      .then((data) => resolve(data.image))
      .catch((error) => reject(error));
  });
}

function fetchRandomFoodImage() {
  // Call the Promise and handle the result
  fetchData()
    .then((imageURL) => {
      const foodImageContainer = document.getElementById("foodImageContainer");
      foodImageContainer.innerHTML = `<img src="${imageURL}" alt="Random Food">`;
    })
    .catch((error) => {
      console.error("Error fetching random food image:", error);
    });
}
