const users = [
  { name: "Arjun", password: "Arjun@123" },
  { name: "Sneha", password: "Sneha#456" },
  { name: "Rahul", password: "Rahul$789" },
  { name: "Priya", password: "Priya@321" },
  { name: "Kiran", password: "Kiran#654" },
  { name: "Anjali", password: "Anjali$987" },
  { name: "Vikram", password: "Vikram@147" },
  { name: "Neha", password: "Neha#258" },
  { name: "Suresh", password: "Suresh$369" },
  { name: "Pooja", password: "Pooja@159" }
  
];

const loginBtn = document.getElementById("loginBtn");
const message = document.getElementById("message");

loginBtn.addEventListener("click", () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const isValid = users.some(
    user => user.name === username && user.password === password
  );

  if (isValid) {
    window.location.href = "index.html";
  } else {
    message.textContent = "Invalid credentials";
    message.style.color = "red";
  }
});

