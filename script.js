const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";

//your JS code here. If required.

async function getData(callback) {
  const response = await fetch(apiUrl);
  const data = await response.json();
  callback(data.title);
}

document.getElementById("btn").addEventListener("click", async function() {
  getData((title) => {
    document.getElementById("output").innerHTML = title;
  });
});
