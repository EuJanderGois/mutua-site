import "./styles/reset.css";
import "./styles/root.css";
import mutuaLogo from "/logo-mutua.svg";
import whatsapp from "/whatsapp.svg"

window.onload = () => {
  const topbar = document.querySelector<HTMLDivElement>("#topbar")!;
  const slider = document.querySelector<HTMLDivElement>("#slider")!;

  topbar.innerHTML += `
      <a href="/" target="_self">
        <img src="${mutuaLogo}" class="logo" alt="Logo Mútua" />
      </a>

      <div class="side-r">
        <div class="navbar">
          <a class="nav-button" href="/sobre">Sobre Nós</a>
          <a class="nav-button" href="/terapias">Terapias</a>
          <a class="nav-button" href="/atividades">Atividades</a>
          <a class="nav-button" href="/materiais">Materiais</a>
          <a class="nav-button" href="/cursos">Cursos</a>
          <a class="nav-button" href="/blog">Blog</a>
        </div>

        <a href="/" target="_self" class="whatsapp-button">
          <img src="${whatsapp}" class="whatsapp" alt="Fale Conosco" />
        </a>
      </div>
  `;

  slider.innerHTML += `
    <h1 class="slider-title">Tardes Brincantes,<br>
    desenvolvimento<br>
    divertido.</h1>
  `;
}
