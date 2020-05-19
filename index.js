fetch("https://type.fit/api/quotes")
  .then(async (response) => {
    // The API call was successful!
    let data = await response.json();
    let selection = parseInt(Math.random() * data.length);
    document.getElementById("text").innerHTML = data[selection].text;
    document.getElementById("author").innerHTML = "- " + data[selection].author;
  })
  .catch(function (err) {
    // There was an error
    console.warn("Something went wrong.", err);
  });

const addTask = () => {
  let item = document.getElementById("task").value;
  if (item) {
    let li = document.createElement("li");
    li.innerHTML = item;
    li.classList.add("list-item");
    document.getElementById("list").appendChild(li);
    document.getElementById("task").value = "";
    li.addEventListener("click", () => {
      li.classList.add("hide");
      setTimeout(() => {
        li.parentNode.removeChild(li);
      }, 500);
    });
  }
};

document.getElementById("submitted").addEventListener("click", addTask);
