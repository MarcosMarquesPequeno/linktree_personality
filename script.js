function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de profile sorrindo, usando óculos escuto e jaqueta preta, barba e fundo azul e roxo"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto deprofile sorrindo, usando óculos e camisa preta, barba e fundo amarelo"
    )
  }
}
