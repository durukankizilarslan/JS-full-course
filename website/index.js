let username;

document.getElementById("my-submit").onclick = function () {
  username = document.getElementById("my-text").value;
  console.log(username);
  document.getElementById("title-hello").textContent = `Hello ${username}`;
};
