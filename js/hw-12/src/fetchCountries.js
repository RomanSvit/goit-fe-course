export default function getCountry(url, value, onDataReady) {

  fetch(url + value)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Error fetching data");
    })
    .then(data => {
      onDataReady(data);

    })
    .catch(error => {
      console.log(error);
    });

}
