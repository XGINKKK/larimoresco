import './style.css'

// WhatsApp Number (você pode substituir pelo número real da Larissa)
const WHATSAPP_NUMBER = '5547999999999'
const WHATSAPP_MESSAGE = encodeURIComponent('Olá Lari! Vi seu site e quero agendar uma consulta')

// Render da Landing Page
document.querySelector('#app').innerHTML = `
  <!-- Navigation -->
  <nav class="nav" id="nav">
    <div class="container nav-container">
      <a href="#" class="logo">Larissa Moresco</a>
      <ul class="nav-menu" id="nav-menu">
        <li><a href="#sobre" class="nav-link">Sobre</a></li>
        <li><a href="#como-funciona" class="nav-link">Como Funciona</a></li>
        <li><a href="#planos" class="nav-link">Planos</a></li>
        <li><a href="#faq" class="nav-link">FAQ</a></li>
        <li><a href="https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}" class="nav-link" target="_blank">Contato</a></li>
      </ul>
      <div class="menu-toggle" id="menu-toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>

  <!-- Mobile Menu -->
  <div class="mobile-menu" id="mobile-menu">
    <ul class="nav-menu">
      <li><a href="#sobre" class="nav-link mobile-link">Sobre</a></li>
      <li><a href="#como-funciona" class="nav-link mobile-link">Como Funciona</a></li>
      <li><a href="#planos" class="nav-link mobile-link">Planos</a></li>
      <li><a href="#faq" class="nav-link mobile-link">FAQ</a></li>
      <li><a href="https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}" class="nav-link" target="_blank">Contato</a></li>
    </ul>
  </div>

  <!-- Hero Section -->
  <section class="hero" id="home">
    <div class="container">
      <div class="hero-content fade-in">
        <div class="hero-text">
          <h1>Transforme sua relação com a comida (e com você)</h1>
          <p>Nutrição clínica e esportiva de verdade. Sem dietas malucas, sem sofrimento. Só resultados reais.</p>
          <div class="hero-buttons">
            <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}" class="btn btn-primary btn-lg pulse" target="_blank">
              <svg class="btn-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Quero Começar Minha Transformação
            </a>
            <a href="#como-funciona" class="btn btn-secondary btn-lg">Ver Como Funciona</a>
          </div>
          <div class="badge hero-badge">CRN10 10005 | 2.670+ pessoas acompanhando</div>
        </div>
        <div class="hero-image">
          <div class="hero-image-wrapper">
            <img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&h=800&fit=crop" alt="Larissa Moresco - Nutricionista" loading="eager">
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Social Proof Section -->
  <section class="section social-proof fade-in">
    <div class="container">
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-number" data-count="2670">0</div>
          <div class="stat-label">Pessoas confiam no meu trabalho</div>
        </div>
        <div class="stat-card">
          <div class="stat-number" data-count="35">0</div>
          <div class="stat-label">Cursos especializados</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">UNIVALI</div>
          <div class="stat-label">Formação pela UNIVALI</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">PÓS</div>
          <div class="stat-label">Pós-graduanda</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Problems Section -->
  <section class="section problems fade-in" id="problemas">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Você se identifica?</h2>
      </div>
      <div class="grid grid-2 problem-grid">
        <div class="card problem-card">
          <span class="problem-emoji">😞</span>
          <p class="problem-text">Já tentou várias dietas e nada funciona?</p>
        </div>
        <div class="card problem-card">
          <span class="problem-emoji">😫</span>
          <p class="problem-text">Cansou de passar fome e ter efeito sanfona?</p>
        </div>
        <div class="card problem-card">
          <span class="problem-emoji">💪</span>
          <p class="problem-text">Quer ganhar massa mas não sabe como comer?</p>
        </div>
        <div class="card problem-card">
          <span class="problem-emoji">🏃</span>
          <p class="problem-text">Treina mas não vê resultado porque a alimentação não acompanha?</p>
        </div>
        <div class="card problem-card">
          <span class="problem-emoji">😰</span>
          <p class="problem-text">Tem rotina corrida e acha impossível comer bem?</p>
        </div>
        <div class="card problem-card">
          <span class="problem-emoji">❤️</span>
          <p class="problem-text">Quer ter saúde mas sem neuras com comida?</p>
        </div>
      </div>
      <div style="text-align: center; margin-top: 32px;">
        <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}" class="btn btn-primary btn-lg" target="_blank">
          Eu te ajudo com isso! Vem conversar
        </a>
      </div>
    </div>
  </section>

  <!-- Solution Section -->
  <section class="section solution fade-in">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Meu jeito de trabalhar: LEVE, REAL e que FUNCIONA</h2>
      </div>
      <div class="grid grid-3">
        <div class="card solution-card">
          <div class="card-icon">🎯</div>
          <h3 class="card-title">Individualizado de Verdade</h3>
          <p class="card-text">Não existe receita de bolo. Seu plano é feito para VOCÊ, sua rotina, seus gostos, seu corpo.</p>
        </div>
        <div class="card solution-card">
          <div class="card-icon">💬</div>
          <h3 class="card-title">Acompanhamento de Perto</h3>
          <p class="card-text">Você não fica sozinho(a). WhatsApp liberado, app com materiais, cupons de desconto. Tô junto!</p>
        </div>
        <div class="card solution-card">
          <div class="card-icon">🌱</div>
          <h3 class="card-title">Processo Leve</h3>
          <p class="card-text">Nada de terrorismo nutricional. Aqui você aprende a comer bem, se sentir bem e ter resultados duradouros.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section class="section about fade-in" id="sobre">
    <div class="container">
      <div class="about-content">
        <div class="about-image">
          <div class="about-image-wrapper">
            <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=800&fit=crop" alt="Sobre Larissa Moresco" loading="lazy">
          </div>
        </div>
        <div class="about-text">
          <h2>Oi, eu sou a Lari! 👋</h2>
          <p>Deixa eu te contar: eu ODEIO aquelas dietas malucas que prometem milagre. Sabe por quê? Porque não funcionam.</p>
          <p>O que funciona de verdade é você entender seu corpo, criar uma rotina que cabe na SUA vida, e ter alguém te apoiando no processo.</p>
          <p>É isso que eu faço: ajudo pessoas reais, com rotinas reais, a terem o corpo e a saúde que querem. Sem sofrimento, sem neura.</p>
          <p><strong>Formada pela UNIVALI, pós-graduanda em Nutrição Clínica e Esportiva, mais de 35 cursos na área</strong> e MUITA vontade de te ver alcançar seus objetivos!</p>
          <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}" class="btn btn-primary" target="_blank">Bora começar?</a>
        </div>
      </div>
    </div>
  </section>

  <!-- How it Works Section -->
  <section class="section timeline fade-in" id="como-funciona">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Como vai ser nosso trabalho juntos?</h2>
      </div>
      <div class="timeline-item">
        <div class="timeline-icon">📋</div>
        <div class="timeline-content">
          <h3>PRÉ-CONSULTA</h3>
          <p>Antes mesmo da primeira consulta, você recebe um questionário completo. Assim eu já te conheço melhor e aproveitamos cada minuto juntos!</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-icon">🩺</div>
        <div class="timeline-content">
          <h3>PRIMEIRA CONSULTA (Presencial ou Online)</h3>
          <p>Vamos conversar sobre seu histórico, sua rotina, seus objetivos. Faço avaliação física completa (peso, medidas, dobras cutâneas) e já saímos com um plano personalizado.</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-icon">📱</div>
        <div class="timeline-content">
          <h3>ACOMPANHAMENTO CONTÍNUO</h3>
          <p>Pelo app você recebe: seu plano alimentar, materiais extras, dicas exclusivas, cupons de desconto. E meu WhatsApp tá sempre aberto!</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-icon">🔄</div>
        <div class="timeline-content">
          <h3>CONSULTAS DE RETORNO</h3>
          <p>A cada 30 dias a gente se encontra, avalia resultados, ajusta o que precisa, celebra conquistas!</p>
        </div>
      </div>
      <div style="text-align: center; margin-top: 32px; padding: 24px; background: rgba(232, 180, 184, 0.1); border-radius: 20px;">
        <p style="font-size: 18px; font-weight: 500; color: var(--accent);">Tudo isso pensado para VOCÊ conseguir seguir no seu dia a dia</p>
      </div>
    </div>
  </section>

  <!-- Pricing Section -->
  <section class="section pricing fade-in" id="planos">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Escolha seu plano e vamos juntos nessa!</h2>
      </div>
      <div class="grid grid-3 pricing-grid">
        <div class="card pricing-card">
          <div class="pricing-header">
            <h3 class="pricing-plan">MENSAL</h3>
            <p class="pricing-description">Pra você conhecer o trabalho</p>
          </div>
          <div class="pricing-body">
            <ul class="pricing-features">
              <li>1 consulta completa</li>
              <li>Plano alimentar personalizado</li>
              <li>Acompanhamento pelo app</li>
              <li>Suporte por WhatsApp</li>
              <li>Materiais extras</li>
              <li>Descontos em marcas parceiras</li>
            </ul>
            <a href="https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Tenho interesse no plano MENSAL" class="btn btn-primary" target="_blank">Começar Agora</a>
          </div>
        </div>

        <div class="card pricing-card featured">
          <div class="pricing-header">
            <h3 class="pricing-plan">TRIMESTRAL</h3>
            <p class="pricing-description">Resultados consistentes</p>
          </div>
          <div class="pricing-body">
            <ul class="pricing-features">
              <li>3 consultas mensais</li>
              <li>Tudo do plano mensal +</li>
              <li>Acompanhamento mais próximo</li>
              <li>Ajustes constantes</li>
              <li>Melhor custo-benefício</li>
            </ul>
            <a href="https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Tenho interesse no plano TRIMESTRAL" class="btn btn-primary" target="_blank">Quero Este!</a>
          </div>
        </div>

        <div class="card pricing-card">
          <div class="pricing-header">
            <h3 class="pricing-plan">SEMESTRAL 💎</h3>
            <p class="pricing-description">Transformação real</p>
          </div>
          <div class="pricing-body">
            <ul class="pricing-features">
              <li>6 consultas mensais</li>
              <li>Transformação completa</li>
              <li>Acompanhamento VIP</li>
              <li>Maior desconto</li>
              <li>Resultados duradouros</li>
            </ul>
            <a href="https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Tenho interesse no plano SEMESTRAL" class="btn btn-primary" target="_blank">Quero Transformar!</a>
          </div>
        </div>
      </div>
      <p class="pricing-note">💰 Parcelo em até 3x no cartão | 💬 Dúvidas? Chama no WhatsApp!</p>
    </div>
  </section>

  <!-- Benefits Section -->
  <section class="section benefits fade-in">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">O que tá incluso em TODOS os planos?</h2>
      </div>
      <div class="grid grid-2 benefits-grid">
        <div class="benefit-item">
          <span class="benefit-check">✓</span>
          <span class="benefit-text">Consulta completa e personalizada</span>
        </div>
        <div class="benefit-item">
          <span class="benefit-check">✓</span>
          <span class="benefit-text">Plano alimentar feito sob medida pra você</span>
        </div>
        <div class="benefit-item">
          <span class="benefit-check">✓</span>
          <span class="benefit-text">Avaliação física completa (bioimpedância/adipômetro)</span>
        </div>
        <div class="benefit-item">
          <span class="benefit-check">✓</span>
          <span class="benefit-text">Acompanhamento pelo aplicativo</span>
        </div>
        <div class="benefit-item">
          <span class="benefit-check">✓</span>
          <span class="benefit-text">Materiais educativos exclusivos</span>
        </div>
        <div class="benefit-item">
          <span class="benefit-check">✓</span>
          <span class="benefit-text">WhatsApp liberado para dúvidas</span>
        </div>
        <div class="benefit-item">
          <span class="benefit-check">✓</span>
          <span class="benefit-text">Ajustes online entre consultas</span>
        </div>
        <div class="benefit-item">
          <span class="benefit-check">✓</span>
          <span class="benefit-text">Cupons de desconto em marcas parceiras</span>
        </div>
        <div class="benefit-item">
          <span class="benefit-check">✓</span>
          <span class="benefit-text">Orientações para sua rotina específica</span>
        </div>
        <div class="benefit-item">
          <span class="benefit-check">✓</span>
          <span class="benefit-text">Suporte emocional (porque eu sei que não é só comida!)</span>
        </div>
      </div>
      <div class="benefits-highlight">
        Você não fica sozinho(a) em nenhum momento do processo!
      </div>
    </div>
  </section>

  <!-- FAQ Section -->
  <section class="section faq fade-in" id="faq">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Dúvidas? Eu respondo!</h2>
      </div>
      <div class="faq-list">
        <div class="faq-item">
          <button class="faq-question">
            <span>Como são as consultas?</span>
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-answer">
            <div class="faq-answer-content">
              Podem ser presenciais ou online! A primeira eu recomendo presencial para fazer a avaliação física completa, mas a gente adapta à sua necessidade.
            </div>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question">
            <span>E se eu não conseguir seguir o plano?</span>
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-answer">
            <div class="faq-answer-content">
              Relaxa! O plano é feito pra caber na SUA rotina. E se precisar ajustar, a gente ajusta! Tô aqui pra isso.
            </div>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question">
            <span>Funciona pra mim que treino?</span>
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-answer">
            <div class="faq-answer-content">
              COM CERTEZA! Trabalho muito com nutrição esportiva. Seja treino de academia, corrida, crossfit... vamos alinhar sua alimentação com seu treino.
            </div>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question">
            <span>E se eu tiver restrições alimentares?</span>
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-answer">
            <div class="faq-answer-content">
              Sem problemas! Atendo pessoas com alergias, intolerâncias, vegetarianos/veganos. Tudo é adaptado.
            </div>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question">
            <span>Quanto tempo até ver resultados?</span>
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-answer">
            <div class="faq-answer-content">
              Depende do seu objetivo, mas geralmente nas primeiras 2-4 semanas você já sente diferença! O importante é que sejam resultados DURÁVEIS.
            </div>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question">
            <span>Preciso comprar suplementos?</span>
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-answer">
            <div class="faq-answer-content">
              Só se for necessário e benéfico pra você. Não trabalho com venda de produto, ok? Meu foco é sua saúde.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="section cta fade-in">
    <div class="container">
      <h2>Pronto pra começar sua transformação?</h2>
      <p>Olha, eu sei que dar o primeiro passo pode ser difícil. Mas te garanto: você não vai se arrepender.</p>
      <p>Centenas de pessoas já mudaram de vida com acompanhamento nutricional de verdade. A próxima pode ser você!</p>
      <p><strong>Vamos marcar sua primeira consulta?</strong></p>
      <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}" class="btn btn-primary btn-lg pulse" target="_blank">
        <svg class="btn-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        Sim! Quero Agendar Agora
      </a>
      <p class="cta-note">Respondo pessoalmente. Vou adorar te conhecer!</p>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <h3>Larissa Moresco</h3>
          <p>Nutrição que transforma</p>
          <p style="margin-top: 16px;">CRN10 10005<br>Nutrição Clínica e Esportiva<br>Penha/SC</p>
        </div>
        <div class="footer-links">
          <h4>Links Rápidos</h4>
          <ul>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#como-funciona">Como Funciona</a></li>
            <li><a href="#planos">Planos</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div class="footer-links">
          <h4>Contato</h4>
          <ul>
            <li><a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank">WhatsApp</a></li>
            <li><a href="https://www.instagram.com/nutrilarissamoresco" target="_blank">Instagram</a></li>
            <li><a href="https://linktr.ee/nutrilarissamoresco" target="_blank">Linktree</a></li>
          </ul>
          <div class="footer-social">
            <a href="https://www.instagram.com/nutrilarissamoresco" class="social-icon" target="_blank" aria-label="Instagram">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://wa.me/${WHATSAPP_NUMBER}" class="social-icon" target="_blank" aria-label="WhatsApp">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} Larissa Moresco - Nutricionista. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>

  <!-- Scroll to Top Button -->
  <button class="scroll-top" id="scroll-top" aria-label="Voltar ao topo">
    <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M18 15l-6-6-6 6"/></svg>
  </button>
`

// ========================================
// JAVASCRIPT INTERACTIVITY
// ========================================

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle')
const mobileMenu = document.getElementById('mobile-menu')
const mobileLinks = document.querySelectorAll('.mobile-link')

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active')
  mobileMenu.classList.toggle('active')
})

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active')
    mobileMenu.classList.remove('active')
  })
})

// Sticky Navigation
const nav = document.getElementById('nav')
let lastScroll = 0

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 100) {
    nav.classList.add('scrolled')
  } else {
    nav.classList.remove('scrolled')
  }

  lastScroll = currentScroll
})

// Scroll Reveal Animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
    }
  })
}, observerOptions)

document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el)
})

// Counter Animation
function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-count'))
  const duration = 2000
  const increment = target / (duration / 16)
  let current = 0

  const updateCounter = () => {
    current += increment
    if (current < target) {
      element.textContent = Math.floor(current)
      requestAnimationFrame(updateCounter)
    } else {
      element.textContent = target
    }
  }

  updateCounter()
}

// Animate counters when visible
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.target.getAttribute('data-count')) {
      animateCounter(entry.target)
      counterObserver.unobserve(entry.target)
    }
  })
}, { threshold: 0.5 })

document.querySelectorAll('.stat-number[data-count]').forEach(el => {
  counterObserver.observe(el)
})

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item')

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question')

  question.addEventListener('click', () => {
    const isActive = item.classList.contains('active')

    // Close all items
    faqItems.forEach(faq => faq.classList.remove('active'))

    // Open clicked item if it wasn't active
    if (!isActive) {
      item.classList.add('active')
    }
  })
})

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scroll-top')

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 500) {
    scrollTopBtn.classList.add('visible')
  } else {
    scrollTopBtn.classList.remove('visible')
  }
})

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href')
    if (href !== '#' && href !== '') {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        const offsetTop = target.offsetTop - 80
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        })
      }
    }
  })
})

// Initial animation trigger
setTimeout(() => {
  document.querySelector('.hero .fade-in').classList.add('visible')
}, 100)
