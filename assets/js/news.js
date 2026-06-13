/**
 * Script para carregamento, conversão e renderização de notícias da Seleção Brasileira (RSS GE)
 * Utiliza o parser de RSS para JSON rss2json com fallback offline contextualizado
 */

$(document).ready(function() {
  const container = $('#news-container');
  if (!container.length) return;

  // Notícias de Fallback Offline de Alta Fidelidade (Contextualizadas para a Copa do Mundo 2026)
  const OFFLINE_NEWS = [
    {
      title: "Dorival Júnior define time titular para a estreia contra o Marrocos",
      pubDate: "2026-06-12 18:45:00",
      link: "https://ge.globo.com/futebol/selecao-brasileira/",
      thumbnail: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600&auto=format&fit=crop&q=80",
      description: "Em último treino tático realizado no MetLife Stadium, comissão técnica faz ajustes na linha defensiva e confirma a dupla de ataque titular da Seleção Canarinho para o confronto deste sábado."
    },
    {
      title: "Neymar exalta união do grupo e projeta: 'Estamos prontos para fazer história'",
      pubDate: "2026-06-11 14:20:00",
      link: "https://ge.globo.com/futebol/selecao-brasileira/",
      thumbnail: "https://images.unsplash.com/photo-1518063319789-7217e6706b04?w=600&auto=format&fit=crop&q=80",
      description: "Em entrevista coletiva oficial da FIFA, o camisa 10 da Seleção Brasileira destaca a mescla entre juventude e experiência no elenco e a forte preparação física realizada em solo americano."
    },
    {
      title: "Bastidores: Seleção faz primeiro treino sob calor de Nova York",
      pubDate: "2026-06-10 11:30:00",
      link: "https://ge.globo.com/futebol/selecao-brasileira/",
      thumbnail: "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?w=600&auto=format&fit=crop&q=80",
      description: "Com temperatura perto dos 30°C, jogadores realizaram atividades físicas intensas e treino em campo reduzido focado em transição rápida de bola e finalizações de média distância."
    },
    {
      title: "Torcida brasileira faz festa incrível na chegada do ônibus da delegação",
      pubDate: "2026-06-09 20:15:00",
      link: "https://ge.globo.com/futebol/selecao-brasileira/",
      thumbnail: "https://images.unsplash.com/photo-1510563800743-aed2364902ec?w=600&auto=format&fit=crop&q=80",
      description: "Centenas de torcedores vestidos de verde e amarelo recepcionaram os atletas no hotel de concentração. Jogadores retribuíram o carinho distribuindo autógrafos e tirando fotos."
    },
    {
      title: "Análise: Os pontos fortes e fracos do Marrocos, o primeiro adversário do Brasil",
      pubDate: "2026-06-08 09:00:00",
      link: "https://ge.globo.com/futebol/selecao-brasileira/",
      thumbnail: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=600&auto=format&fit=crop&q=80",
      description: "Nossa equipe tática destrincha o esquema tático da seleção africana, destacando a velocidade nas alas e a forte marcação no meio-campo que o Brasil precisará superar."
    },
    {
      title: "Preparador físico da Seleção garante: 'Grupo atinge o ápice de performance física'",
      pubDate: "2026-06-07 16:40:00",
      link: "https://ge.globo.com/futebol/selecao-brasileira/",
      thumbnail: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&auto=format&fit=crop&q=80",
      description: "Após bateria de exames e testes fisiológicos na Granja Comary e nos EUA, departamento médico aponta que todos os 26 convocados estão 100% livres de lesões e prontos para atuar."
    }
  ];

  // Formata a data do padrão RSS/JSON para o padrão BR
  function formatDateString(dateStr) {
    try {
      // Tenta converter substituindo espaço por T se necessário para ISO
      const normalizedStr = dateStr.replace(' ', 'T');
      const date = new Date(normalizedStr);
      
      if (isNaN(date.getTime())) {
        return dateStr; // Retorna original se falhar
      }
      
      const dia = String(date.getDate()).padStart(2, '0');
      const mes = String(date.getMonth() + 1).padStart(2, '0');
      const ano = date.getFullYear();
      const hora = String(date.getHours()).padStart(2, '0');
      const min = String(date.getMinutes()).padStart(2, '0');
      
      return `${dia}/${mes}/${ano} às ${hora}:${min}`;
    } catch (e) {
      return dateStr;
    }
  }

  // Limpa o HTML da descrição das notícias do RSS
  function cleanHTMLDescription(htmlStr, maxLength = 110) {
    if (!htmlStr) return "";
    // Remove tags HTML
    let cleanText = htmlStr.replace(/<[^>]*>/g, '').trim();
    // Decodifica entidades HTML comuns
    cleanText = cleanText
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"');

    if (cleanText.length > maxLength) {
      return cleanText.substring(0, maxLength) + "...";
    }
    return cleanText;
  }

  // Tenta extrair a primeira imagem de uma descrição caso a thumbnail venha vazia
  function extractImageFromDescription(htmlStr) {
    if (!htmlStr) return null;
    const match = htmlStr.match(/<img[^>]+src="([^">]+)"/i);
    return match ? match[1] : null;
  }

  // Renderiza a lista de notícias no container
  function renderNews(items) {
    container.empty();

    items.forEach(item => {
      // Tenta obter uma imagem válida
      let imageUrl = item.thumbnail || item.enclosure?.link;
      
      // Se não houver, tenta extrair da descrição HTML
      if (!imageUrl && item.description) {
        imageUrl = extractImageFromDescription(item.description);
      }
      
      // Se mesmo assim não houver, usa uma imagem padrão premium
      if (!imageUrl) {
        imageUrl = "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600&auto=format&fit=crop&q=80";
      }

      const formattedDate = formatDateString(item.pubDate);
      const cleanDesc = cleanHTMLDescription(item.description);

      const newsHtml = `
        <div class="news-card">
          <div class="news-image-wrap">
            <img class="news-image" src="${imageUrl}" alt="${item.title}" onerror="this.src='https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600&auto=format&fit=crop&q=80';">
          </div>
          
          <div class="news-content">
            <div class="news-meta">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
              <span>${formattedDate}</span>
            </div>
            
            <h3 class="news-title" title="${item.title}">${item.title}</h3>
            <p class="news-description">${cleanDesc}</p>
            
            <div class="news-footer">
              <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="news-link">
                Ler no GE
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      `;

      container.append(newsHtml);
    });

    // Se o GSAP estiver disponível, ativa animação de entrada com efeito stagger
    if (typeof gsap !== 'undefined') {
      gsap.from(".news-card", {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out"
      });
    }
  }

  // Busca notícias do RSS da Globo usando proxy do rss2json
  function fetchRSSNews() {
    const rssUrl = "https://ge.globo.com/rss/ge/futebol/selecao-brasileira/";
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erro na requisição RSS: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (data && data.status === 'ok' && data.items && data.items.length > 0) {
          // Limita a 6 notícias para manter o layout perfeito na grid (2 linhas de 3 cards)
          const items = data.items.slice(0, 6);
          renderNews(items);
        } else {
          throw new Error("Resposta do feed RSS vazia ou inválida");
        }
      })
      .catch(error => {
        console.warn("Não foi possível carregar as notícias em tempo real (provável bloqueio de rede ou offline). Carregando notícias locais de fallback.", error);
        renderNews(OFFLINE_NEWS);
      });
  }

  // Inicializa o carregamento das notícias
  fetchRSSNews();
});
