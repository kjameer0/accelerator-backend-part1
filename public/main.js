console.log("sent from server, runs in browser");
const button = document.getElementById("change");
button.addEventListener("click", async () => {
  const script = document.createElement("script");
  script.src = "http://localhost:3000/static/changeBackground.js";
  document.body.appendChild(script);
});
