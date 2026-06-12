/**
 * Script para gerenciamento e renderização de Jogos e Resultados da Seleção Brasileira
 * Integra com a API Football-Data com fallback local robusto de alta fidelidade
 */

$(document).ready(function() {
  const container = $('#matches-container');
  if (!container.length) return;

  // Lista oficial e real de jogos para a Copa do Mundo 2026 e partidas recentes
  const OFFLINE_MATCHES = [
    {
      id: 1,
      tournament: "Copa do Mundo 2026 - Fase de Grupos",
      status: "scheduled", // scheduled, live, finished
      statusText: "Amanhã",
      utcDate: "2026-06-13T22:00:00Z", // 19:00 Horário de Brasília
      formattedDate: "13/06/2026 - 19:00",
      homeTeam: {
        name: "Brasil",
        flagUrl: "https://flagcdn.com/w80/br.png",
        emoji: "🇧🇷"
      },
      awayTeam: {
        name: "Marrocos",
        flagUrl: "https://flagcdn.com/w80/ma.png",
        emoji: "🇲🇦"
      },
      score: { home: null, away: null },
      venue: "MetLife Stadium",
      location: "East Rutherford, NJ, EUA"
    },
    {
      id: 2,
      tournament: "Copa do Mundo 2026 - Fase de Grupos",
      status: "scheduled",
      statusText: "Próximo",
      utcDate: "2026-06-20T00:30:00Z", // 19 de junho às 21:30 Horário de Brasília
      formattedDate: "19/06/2026 - 21:30",
      homeTeam: {
        name: "Brasil",
        flagUrl: "https://flagcdn.com/w80/br.png",
        emoji: "🇧🇷"
      },
      awayTeam: {
        name: "Haiti",
        flagUrl: "https://flagcdn.com/w80/ht.png",
        emoji: "🇭🇹"
      },
      score: { home: null, away: null },
      venue: "Lincoln Financial Field",
      location: "Filadélfia, PA, EUA"
    },
    {
      id: 3,
      tournament: "Copa do Mundo 2026 - Fase de Grupos",
      status: "scheduled",
      statusText: "Agendado",
      utcDate: "2026-06-24T22:00:00Z", // 19:00 Horário de Brasília
      formattedDate: "24/06/2026 - 19:00",
      homeTeam: {
        name: "Escócia",
        flagUrl: "https://flagcdn.com/w80/gb-sct.png",
        emoji: "🏴󠁧󠁢󠁳󠁣󠁴󠁿"
      },
      awayTeam: {
        name: "Brasil",
        flagUrl: "https://flagcdn.com/w80/br.png",
        emoji: "🇧🇷"
      },
      score: { home: null, away: null },
      venue: "Hard Rock Stadium",
      location: "Miami, FL, EUA"
    },
    {
      id: 4,
      tournament: "Eliminatórias Copa 2026 - Rodada 18",
      status: "finished",
      statusText: "Encerrado",
      utcDate: "2025-09-09T20:00:00Z",
      formattedDate: "09/09/2025",
      homeTeam: {
        name: "Bolívia",
        flagUrl: "https://flagcdn.com/w80/bo.png",
        emoji: "🇧🇴"
      },
      awayTeam: {
        name: "Brasil",
        flagUrl: "https://flagcdn.com/w80/br.png",
        emoji: "🇧🇷"
      },
      score: { home: 1, away: 0 },
      venue: "Estádio Municipal de El Alto",
      location: "El Alto, Bolívia"
    },
    {
      id: 5,
      tournament: "Eliminatórias Copa 2026 - Rodada 12",
      status: "finished",
      statusText: "Encerrado",
      utcDate: "2024-11-19T21:45:00Z",
      formattedDate: "19/11/2024",
      homeTeam: {
        name: "Brasil",
        flagUrl: "https://flagcdn.com/w80/br.png",
        emoji: "🇧🇷"
      },
      awayTeam: {
        name: "Uruguai",
        flagUrl: "https://flagcdn.com/w80/uy.png",
        emoji: "🇺🇾"
      },
      score: { home: 1, away: 1 },
      venue: "Arena Fonte Nova",
      location: "Salvador, Brasil"
    },
    {
      id: 6,
      tournament: "Eliminatórias Copa 2026 - Rodada 11",
      status: "finished",
      statusText: "Encerrado",
      utcDate: "2024-11-14T21:00:00Z",
      formattedDate: "14/11/2024",
      homeTeam: {
        name: "Venezuela",
        flagUrl: "https://flagcdn.com/w80/ve.png",
        emoji: "🇻🇪"
      },
      awayTeam: {
        name: "Brasil",
        flagUrl: "https://flagcdn.com/w80/br.png",
        emoji: "🇧🇷"
      },
      score: { home: 1, away: 1 },
      venue: "Estádio Monumental de Maturín",
      location: "Maturín, Venezuela"
    }
  ];

  // Renderiza a lista de partidas no container
  function renderMatches(matches) {
    container.empty();

    matches.forEach(match => {
      const isFinished = match.status === 'finished';
      const isLive = match.status === 'live';
      
      let statusClass = 'status-scheduled';
      if (isFinished) statusClass = 'status-finished';
      if (isLive) statusClass = 'status-live';

      const scoreHtml = isFinished || isLive
        ? `<div class="match-score">
             <span>${match.score.home}</span>
             <span class="score-divider">-</span>
             <span>${match.score.away}</span>
           </div>`
        : `<div class="match-vs">VS</div>`;

      const cardHtml = `
        <div class="match-card" data-match-id="${match.id}">
          <div class="match-header">
            <span class="match-tournament">${match.tournament}</span>
            <span class="match-status ${statusClass}">${match.statusText}</span>
          </div>
          
          <div class="match-teams">
            <div class="match-team">
              <div class="team-flag-wrap">
                <img class="team-flag" src="${match.homeTeam.flagUrl}" alt="${match.homeTeam.name}" onerror="this.style.display='none'; $(this).next().show();">
                <span class="flag-fallback" style="display:none;">${match.homeTeam.emoji}</span>
              </div>
              <span class="team-name" title="${match.homeTeam.name}">${match.homeTeam.name}</span>
            </div>
            
            <div class="match-score-wrap">
              ${scoreHtml}
            </div>
            
            <div class="match-team">
              <div class="team-flag-wrap">
                <img class="team-flag" src="${match.awayTeam.flagUrl}" alt="${match.awayTeam.name}" onerror="this.style.display='none'; $(this).next().show();">
                <span class="flag-fallback" style="display:none;">${match.awayTeam.emoji}</span>
              </div>
              <span class="team-name" title="${match.awayTeam.name}">${match.awayTeam.name}</span>
            </div>
          </div>
          
          <div class="match-details">
            <div class="detail-item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
              <span>${match.formattedDate}</span>
            </div>
            <div class="detail-item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <span>${match.venue}, ${match.location}</span>
            </div>
          </div>
        </div>
      `;

      container.append(cardHtml);
    });

    // Se a biblioteca GSAP estiver disponível, ativa a animação de entrada com stagger
    if (typeof gsap !== 'undefined') {
      gsap.from(".match-card", {
        opacity: 0,
        y: 40,
        stagger: 0.12,
        duration: 0.8,
        ease: "power2.out"
      });
    }
  }

  // Tenta carregar os dados reais da API do Football-Data
  function loadAPIData() {
    // Definimos headers padrão de requisição
    const headers = {};
    
    // Se houver uma chave de API configurada globalmente ou no localStorage
    const apiToken = window.FOOTBALL_DATA_TOKEN || localStorage.getItem('football_data_token');
    if (apiToken) {
      headers['X-Auth-Token'] = apiToken;
    }

    // Usamos o endpoint de partidas
    // Nota: Como o navegador local pode falhar por CORS, implementamos fallback robusto
    fetch('https://api.football-data.org/v4/matches', {
      method: 'GET',
      headers: headers
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (!data || !data.matches) {
        throw new Error("Formato de dados inválido da API");
      }

      // Filtra partidas onde o Brasil participa
      const brazilMatches = data.matches.filter(m => {
        const homeName = (m.homeTeam && m.homeTeam.name) || '';
        const awayName = (m.awayTeam && m.awayTeam.name) || '';
        return homeName.toLowerCase().includes('brazil') || awayName.toLowerCase().includes('brazil') ||
               homeName.toLowerCase().includes('brasil') || awayName.toLowerCase().includes('brasil');
      });

      if (brazilMatches.length === 0) {
        // Se a API não retornou partidas do Brasil ativas no momento, usamos fallback local
        console.log("Nenhuma partida ativa do Brasil retornada pela API. Utilizando dados offline estruturados.");
        renderMatches(OFFLINE_MATCHES);
      } else {
        // Mapeia os dados da API para o formato do nosso componente
        const mappedMatches = brazilMatches.map((m, idx) => {
          const statusMap = {
            'FINISHED': 'finished',
            'TIMED': 'scheduled',
            'SCHEDULED': 'scheduled',
            'LIVE': 'live',
            'IN_PLAY': 'live',
            'PAUSED': 'live'
          };
          
          const statusTextMap = {
            'finished': 'Encerrado',
            'scheduled': 'Agendado',
            'live': 'Ao Vivo'
          };

          const status = statusMap[m.status] || 'scheduled';
          const matchDate = new Date(m.utcDate);
          
          return {
            id: m.id || idx,
            tournament: m.competition ? m.competition.name : "Partida Internacional",
            status: status,
            statusText: statusTextMap[status] || "Agendado",
            utcDate: m.utcDate,
            formattedDate: matchDate.toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
            homeTeam: {
              name: m.homeTeam.shortName || m.homeTeam.name,
              flagUrl: m.homeTeam.crest || `https://flagcdn.com/w80/${m.homeTeam.tla ? m.homeTeam.tla.toLowerCase() : 'flag'}.png`,
              emoji: "⚽"
            },
            awayTeam: {
              name: m.awayTeam.shortName || m.awayTeam.name,
              flagUrl: m.awayTeam.crest || `https://flagcdn.com/w80/${m.awayTeam.tla ? m.awayTeam.tla.toLowerCase() : 'flag'}.png`,
              emoji: "⚽"
            },
            score: {
              home: m.score && m.score.fullTime ? m.score.fullTime.home : null,
              away: m.score && m.score.fullTime ? m.score.fullTime.away : null
            },
            venue: m.venue || "Estádio a definir",
            location: m.competition ? m.competition.area.name : "Internacional"
          };
        });

        // Ordena as partidas do Brasil colocando as mais recentes/próximas primeiro
        mappedMatches.sort((a, b) => new Date(a.utcDate) - new Date(b.utcDate));
        
        renderMatches(mappedMatches);
      }
    })
    .catch(error => {
      // Captura erros de rede/CORS e carrega a lista de fallback imediatamente
      console.warn("Falha ao conectar com a API externa (motivo provável: CORS ou chave ausente). Carregando fallback offline da Copa do Mundo 2026.", error);
      renderMatches(OFFLINE_MATCHES);
    });
  }

  // Inicializa o carregamento
  loadAPIData();
});
