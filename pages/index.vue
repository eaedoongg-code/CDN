<template>
  <div class="notice-wrapper">
    <div class="notice-card">
      <a href="https://fireflyclient.com/" target="_blank" class="logo-link">
        <div class="logo-container">
          <img :src="imgLogo" alt="Firefly Logo" class="client-logo" />
        </div>
      </a>

      <div class="badge-container">
        <span class="badge">Vaga Disponível</span>
      </div>

      <h1>Firefly Client</h1>

      <div class="content-body">
        <p class="intro-text">
          Uma nova experiência para Minecraft, focada em 
          <span class="highlight">performance extrema</span>, 
          visual moderno e estabilidade total.
        </p>

        <div class="banner-container">
          <img :src="imgVagas" alt="Estamos Recrutando" class="promo-banner" />
        </div>

        <p class="footer-text">
          Desenvolvido com atenção aos mínimos detalhes, o Firefly Client 
          entrega fluidez, segurança e um design elegante em cada atualização.
        </p>

        <div class="systems-container">
          <img :src="imgSistemas" alt="OS Support" class="systems-img" />
        </div>

        <div class="official-links">
          <a href="https://discord.com/invite/firefly" target="_blank" class="link-item discord">
            <span class="icon">💬</span> Discord Oficial
          </a>
          <span class="separator">|</span>
          <a href="https://fireflyclient.com/" target="_blank" class="link-item site">
            <span class="icon">🌐</span> Website
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import imgLogo from './dsd.png';
import imgVagas from './vagas_abertas.png';
import imgSistemas from './sistemas.png';
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');

.notice-wrapper {
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  font-family: 'Inter', sans-serif;
  background-color: #020403;
  color: #ecfff4;
}

.notice-card {
  width: 100%;
  max-width: 540px;
  background: rgba(7, 17, 11, 0.45);
  border: 1px solid rgba(93, 255, 179, 0.15);
  border-radius: 32px;
  padding: 4rem 2.5rem;
  text-align: center;
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  box-shadow: 0 0 80px rgba(0, 0, 0, 0.6);
}

/* --- EFEITOS NAS IMAGENS --- */

.client-logo {
  width: 100px;
  filter: drop-shadow(0 0 10px rgba(0, 255, 149, 0.4));
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.logo-link:hover .client-logo {
  transform: scale(1.1) rotate(-3deg);
  filter: drop-shadow(0 0 25px rgba(0, 255, 149, 0.8));
}

.promo-banner {
  width: 100%;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.5s ease;
  cursor: pointer;
}

.promo-banner:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 255, 149, 0.1);
  filter: brightness(1.05);
}

.systems-img {
  max-width: 260px;
  width: 65%;
  transition: all 0.4s ease;
  opacity: 0.6;
  margin-bottom: 2rem;
}

.systems-img:hover {
  opacity: 1;
  transform: scale(1.03);
}

/* --- ESTILIZAÇÃO GERAL E LINKS --- */

.badge {
  display: inline-block;
  padding: 6px 16px;
  border-radius: 50px;
  border: 1px solid rgba(0, 255, 149, 0.4);
  background: rgba(0, 255, 149, 0.05);
  font-size: 11px;
  font-weight: 800;
  color: #5dffb3;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}

h1 {
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 2rem;
  color: #ffffff;
}

.highlight {
  color: #00ff95;
  font-weight: 700;
}

.intro-text { margin-bottom: 2.5rem; }
.banner-container { margin-bottom: 2.5rem; }
.footer-text { color: #a8e6c2; margin-bottom: 2rem; font-size: 0.95rem; }

.official-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: 1rem;
}

.link-item {
  color: #5dffb3;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 600;
  transition: 0.3s;
  opacity: 0.8;
}

.link-item:hover {
  opacity: 1;
  text-shadow: 0 0 10px rgba(93, 255, 179, 0.5);
}

.separator {
  color: rgba(255, 255, 255, 0.1);
}
</style>