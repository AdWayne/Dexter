document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
      if (storedUser.email === email && storedUser.password === password) {
        console.log("Қош келдіңіз!");
        window.location.href = "Dexter.html";
      } else {
        console.log("Қате email немесе пароль!");
        alert("Қате email немесе пароль!");
      }
    } else {
      console.log("Ондай адам базада жоқ.");
      alert("Өтінем тіркеліңіз.");
    }
  });