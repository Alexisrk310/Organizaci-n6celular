let formulario = document.getElementById("formulario");
let password = 123456712;

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputContraseña = document.querySelector(".input_contraseña").value;
  if (password == inputContraseña) {
    alert("Contraseña correcta");
    const anchor = document.querySelector("a");
    anchor.click();
  } else {
    alert("contraseña incorrecta, verifique su contraseña");
  }
});
