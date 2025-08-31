(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const i="/mutua-site/logo-mutua.svg",c="/mutua-site/whatsapp.svg";window.onload=()=>{const a=document.querySelector("#topbar"),s=document.querySelector("#slider");a.innerHTML+=`
      <a href="/" target="_self">
        <img src="${i}" class="logo" alt="Logo Mútua" />
      </a>

      <div class="side-r">
        <nav class="navbar">
          <a class="nav-button" href="/sobre">Sobre Nós</a>
          <a class="nav-button" href="/terapias">Terapias</a>
          <a class="nav-button" href="/atividades">Atividades</a>
          <a class="nav-button" href="/materiais">Materiais</a>
          <a class="nav-button" href="/cursos">Cursos</a>
          <a class="nav-button" href="/blog">Blog</a>
        </nav>

        <a href="/" target="_self" class="whatsapp-button">
          <img src="${c}" class="whatsapp" alt="Fale Conosco" />
        </a>
      </div>
  `,s.innerHTML+=`
    <h1 class="slider-title">Tardes Brincantes,<br>
    desenvolvimento<br>
    divertido.</h1>
  `};
