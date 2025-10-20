document.getElementById("loginform").addEventListener("submit", async (e) => {
  e.preventDefault();

  const params = new URLSearchParams();
  params.append("username", document.getElementById("username").value);
  params.append("password", document.getElementById("password").value);

  const response = await fetch("http://localhost:8080/submit", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString()
  });

  const text = await response.text();
  console.log(text);
});