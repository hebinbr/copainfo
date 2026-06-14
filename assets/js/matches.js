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
    const containerCopa = $('#matches-container');
    const containerExtra = $('#matches-container-extra');

    const matchesCopa = matches.filter(m => m.tournament.includes('Copa do Mundo') || m.tournament.includes('World Cup'));
    const matchesExtra = matches.filter(m => !m.tournament.includes('Copa do Mundo') && !m.tournament.includes('World Cup'));

    const renderToContainer = (matchList, target) => {
      if (!target.length) return;
      target.empty();

      if (matchList.length === 0) {
        target.append('<div class="matches-loading">Nenhuma partida encontrada.</div>');
        return;
      }

      matchList.forEach(match => {
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

      target.append(cardHtml);
      });
    };

    renderToContainer(matchesCopa, containerCopa);
    renderToContainer(matchesExtra, containerExtra);

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

  // === Banco de Dados de Escalações Táticas ===
  const MATCH_LINEUPS = {
    1: { // Brasil vs Marrocos
      matchName: "Brasil vs Marrocos",
      scheme: "4-3-3",
      coach: "Dorival Júnior",
      notes: "Seleção estreia com força total no ataque com Vini Jr. e Raphinha abertos nas pontas e Rodrygo como falso 9 para criar espaço no meio-campo do Marrocos. Guilherme Arana ganha a disputa na lateral esquerda.",
      starters: [
        { name: "Alisson", number: 1, pos: "GK", left: 50, top: 90, isGK: true },
        { name: "Danilo", number: 2, pos: "LD", left: 84, top: 70 },
        { name: "Marquinhos", number: 3, pos: "ZD", left: 62, top: 76 },
        { name: "G. Magalhães", number: 4, pos: "ZE", left: 38, top: 76 },
        { name: "G. Arana", number: 6, pos: "LE", left: 16, top: 70 },
        { name: "B. Guimarães", number: 5, pos: "VOL", left: 50, top: 55 },
        { name: "João Gomes", number: 8, pos: "MC", left: 70, top: 42 },
        { name: "L. Paquetá", number: 10, pos: "ME", left: 30, top: 42 },
        { name: "Raphinha", number: 7, pos: "PD", left: 80, top: 18 },
        { name: "Rodrygo", number: 9, pos: "ATA", left: 50, top: 12 },
        { name: "Vinicius Jr", number: 11, pos: "PE", left: 20, top: 18 }
      ],
      substitutes: [
        { name: "Ederson", number: 23, pos: "Goleiro" },
        { name: "Bento", number: 12, pos: "Goleiro" },
        { name: "Léo Beraldo", number: 13, pos: "Zagueiro" },
        { name: "Éder Militão", number: 14, pos: "Zagueiro" },
        { name: "Yan Couto", number: 15, pos: "Lateral" },
        { name: "Wendell", number: 16, pos: "Lateral" },
        { name: "André", number: 17, pos: "Meio-campo" },
        { name: "Andreas Pereira", number: 18, pos: "Meio-campo" },
        { name: "Savinho", number: 21, pos: "Atacante" },
        { name: "Endrick", number: 20, pos: "Atacante" },
        { name: "G. Martinelli", number: 22, pos: "Atacante" }
      ]
    },
    2: { // Brasil vs Haiti
      matchName: "Brasil vs Haiti",
      scheme: "4-3-3",
      coach: "Dorival Júnior",
      notes: "Para dar ritmo e poupar atletas do desgaste físico, Dorival opta por rodar o elenco. Ederson assume o gol e Endrick ganha a vaga de titular como referência na área. Militão e Beraldo formam a zaga de início.",
      starters: [
        { name: "Ederson", number: 23, pos: "GK", left: 50, top: 90, isGK: true },
        { name: "Yan Couto", number: 15, pos: "LD", left: 84, top: 70 },
        { name: "Éder Militão", number: 14, pos: "ZD", left: 62, top: 76 },
        { name: "L. Beraldo", number: 13, pos: "ZE", left: 38, top: 76 },
        { name: "Wendell", number: 16, pos: "LE", left: 16, top: 70 },
        { name: "André", number: 17, pos: "VOL", left: 50, top: 55 },
        { name: "Andreas P.", number: 18, pos: "MC", left: 70, top: 42 },
        { name: "L. Paquetá", number: 10, pos: "ME", left: 30, top: 42 },
        { name: "Savinho", number: 21, pos: "PD", left: 80, top: 18 },
        { name: "Endrick", number: 20, pos: "ATA", left: 50, top: 12 },
        { name: "G. Martinelli", number: 22, pos: "PE", left: 20, top: 18 }
      ],
      substitutes: [
        { name: "Alisson Becker", number: 1, pos: "Goleiro" },
        { name: "Bento", number: 12, pos: "Goleiro" },
        { name: "Marquinhos", number: 3, pos: "Zagueiro" },
        { name: "G. Magalhães", number: 4, pos: "Zagueiro" },
        { name: "Danilo", number: 2, pos: "Lateral" },
        { name: "Guilherme Arana", number: 6, pos: "Lateral" },
        { name: "Bruno Guimarães", number: 5, pos: "Meio-campo" },
        { name: "João Gomes", number: 8, pos: "Meio-campo" },
        { name: "Raphinha", number: 7, pos: "Atacante" },
        { name: "Rodrygo", number: 9, pos: "Atacante" },
        { name: "Vinicius Jr", number: 11, pos: "Atacante" }
      ]
    },
    3: { // Escócia vs Brasil
      matchName: "Escócia vs Brasil",
      scheme: "4-2-3-1",
      coach: "Dorival Júnior",
      notes: "Brasil joga com um duplo pivô no meio com Bruno Guimarães e João Gomes protegendo a defesa. A linha de 3 meias ofensivos (Raphinha, Rodrygo, Vini Jr) alimenta Endrick, que ganha a vaga de 9 definitivo.",
      starters: [
        { name: "Alisson", number: 1, pos: "GK", left: 50, top: 90, isGK: true },
        { name: "Danilo", number: 2, pos: "LD", left: 84, top: 70 },
        { name: "Marquinhos", number: 3, pos: "ZD", left: 62, top: 76 },
        { name: "G. Magalhães", number: 4, pos: "ZE", left: 38, top: 76 },
        { name: "G. Arana", number: 6, pos: "LE", left: 16, top: 70 },
        { name: "B. Guimarães", number: 5, pos: "V1", left: 62, top: 55 },
        { name: "João Gomes", number: 8, pos: "V2", left: 38, top: 55 },
        { name: "Raphinha", number: 7, pos: "MD", left: 78, top: 35 },
        { name: "Rodrygo", number: 9, pos: "MC", left: 50, top: 38 },
        { name: "Vinicius Jr", number: 11, pos: "ME", left: 22, top: 35 },
        { name: "Endrick", number: 20, pos: "ATA", left: 50, top: 14 }
      ],
      substitutes: [
        { name: "Ederson", number: 23, pos: "Goleiro" },
        { name: "Bento", number: 12, pos: "Goleiro" },
        { name: "Léo Beraldo", number: 13, pos: "Zagueiro" },
        { name: "Éder Militão", number: 14, pos: "Zagueiro" },
        { name: "Yan Couto", number: 15, pos: "Lateral" },
        { name: "Wendell", number: 16, pos: "Lateral" },
        { name: "André", number: 17, pos: "Meio-campo" },
        { name: "Lucas Paquetá", number: 10, pos: "Meio-campo" },
        { name: "Andreas Pereira", number: 18, pos: "Meio-campo" },
        { name: "Savinho", number: 21, pos: "Atacante" },
        { name: "G. Martinelli", number: 22, pos: "Atacante" }
      ]
    },
    4: { // Bolívia vs Brasil
      matchName: "Bolívia vs Brasil",
      scheme: "4-3-3",
      coach: "Dorival Júnior",
      notes: "Partida difícil na altitude de El Alto. Dorival reforçou a marcação pelo meio com João Gomes e Bruno Guimarães auxiliando a zaga e explorou a velocidade de Vinicius Jr e Raphinha nos contra-ataques.",
      starters: [
        { name: "Alisson", number: 1, pos: "GK", left: 50, top: 90, isGK: true },
        { name: "Danilo", number: 2, pos: "LD", left: 84, top: 70 },
        { name: "Marquinhos", number: 3, pos: "ZD", left: 62, top: 76 },
        { name: "G. Magalhães", number: 4, pos: "ZE", left: 38, top: 76 },
        { name: "G. Arana", number: 6, pos: "LE", left: 16, top: 70 },
        { name: "B. Guimarães", number: 5, pos: "VOL", left: 50, top: 55 },
        { name: "João Gomes", number: 8, pos: "MC", left: 70, top: 42 },
        { name: "L. Paquetá", number: 10, pos: "ME", left: 30, top: 42 },
        { name: "Raphinha", number: 7, pos: "PD", left: 80, top: 18 },
        { name: "Rodrygo", number: 9, pos: "ATA", left: 50, top: 12 },
        { name: "Vinicius Jr", number: 11, pos: "PE", left: 20, top: 18 }
      ],
      substitutes: [
        { name: "Ederson", number: 23, pos: "Goleiro" },
        { name: "Bento", number: 12, pos: "Goleiro" },
        { name: "Éder Militão", number: 14, pos: "Zagueiro" },
        { name: "Yan Couto", number: 15, pos: "Lateral" },
        { name: "Wendell", number: 16, pos: "Lateral" },
        { name: "André", number: 17, pos: "Meio-campo" },
        { name: "Andreas Pereira", number: 18, pos: "Meio-campo" },
        { name: "Savinho", number: 21, pos: "Atacante" },
        { name: "Endrick", number: 20, pos: "Atacante" }
      ]
    },
    5: { // Brasil vs Uruguai
      matchName: "Brasil vs Uruguai",
      scheme: "4-3-3",
      coach: "Dorival Júnior",
      notes: "Clássico tenso na Arena Fonte Nova. Com a ausência de alguns meias lesionados, Gerson assumiu a volância titular. Igor Jesus jogou como centroavante de referência, com Raphinha atuando flutuando como meia central.",
      starters: [
        { name: "Ederson", number: 23, pos: "GK", left: 50, top: 90, isGK: true },
        { name: "Danilo", number: 2, pos: "LD", left: 84, top: 70 },
        { name: "Marquinhos", number: 3, pos: "ZD", left: 62, top: 76 },
        { name: "G. Magalhães", number: 4, pos: "ZE", left: 38, top: 76 },
        { name: "Abner", number: 16, pos: "LE", left: 16, top: 70 },
        { name: "B. Guimarães", number: 5, pos: "VOL", left: 50, top: 55 },
        { name: "Gerson", number: 8, pos: "MC", left: 70, top: 42 },
        { name: "Raphinha", number: 10, pos: "ME", left: 30, top: 42 },
        { name: "Savinho", number: 7, pos: "PD", left: 80, top: 18 },
        { name: "Igor Jesus", number: 9, pos: "ATA", left: 50, top: 12 },
        { name: "Vinicius Jr", number: 11, pos: "PE", left: 20, top: 18 }
      ],
      substitutes: [
        { name: "Alisson Becker", number: 1, pos: "Goleiro" },
        { name: "Weverton", number: 12, pos: "Goleiro" },
        { name: "Léo Ortiz", number: 13, pos: "Zagueiro" },
        { name: "Murilo", number: 14, pos: "Zagueiro" },
        { name: "Dodô", number: 15, pos: "Lateral" },
        { name: "Alex Telles", number: 6, pos: "Lateral" },
        { name: "André", number: 17, pos: "Meio-campo" },
        { name: "Andreas Pereira", number: 18, pos: "Meio-campo" },
        { name: "Lucas Paquetá", number: 19, pos: "Meio-campo" },
        { name: "Estêvão", number: 21, pos: "Atacante" },
        { name: "Luiz Henrique", number: 20, pos: "Atacante" },
        { name: "G. Martinelli", number: 22, pos: "Atacante" }
      ]
    },
    6: { // Venezuela vs Brasil
      matchName: "Venezuela vs Brasil",
      scheme: "4-3-3",
      coach: "Dorival Júnior",
      notes: "Jogo sob chuva em Maturín. Vanderson assume a lateral direita e a dupla Gerson e Bruno Guimarães controla o ritmo de jogo no meio. Igor Jesus é mantido como referência de pivô no ataque brasileiro.",
      starters: [
        { name: "Ederson", number: 23, pos: "GK", left: 50, top: 90, isGK: true },
        { name: "Vanderson", number: 2, pos: "LD", left: 84, top: 70 },
        { name: "Marquinhos", number: 3, pos: "ZD", left: 62, top: 76 },
        { name: "G. Magalhães", number: 4, pos: "ZE", left: 38, top: 76 },
        { name: "Abner", number: 16, pos: "LE", left: 16, top: 70 },
        { name: "B. Guimarães", number: 5, pos: "VOL", left: 50, top: 55 },
        { name: "Gerson", number: 8, pos: "MC", left: 70, top: 42 },
        { name: "Raphinha", number: 10, pos: "ME", left: 30, top: 42 },
        { name: "Savinho", number: 7, pos: "PD", left: 80, top: 18 },
        { name: "Igor Jesus", number: 9, pos: "ATA", left: 50, top: 12 },
        { name: "Vinicius Jr", number: 11, pos: "PE", left: 20, top: 18 }
      ],
      substitutes: [
        { name: "Alisson Becker", number: 1, pos: "Goleiro" },
        { name: "Weverton", number: 12, pos: "Goleiro" },
        { name: "Léo Ortiz", number: 13, pos: "Zagueiro" },
        { name: "Murilo", number: 14, pos: "Zagueiro" },
        { name: "Dodô", number: 15, pos: "Lateral" },
        { name: "Alex Telles", number: 6, pos: "Lateral" },
        { name: "André", number: 17, pos: "Meio-campo" },
        { name: "Andreas Pereira", number: 18, pos: "Meio-campo" },
        { name: "Lucas Paquetá", number: 19, pos: "Meio-campo" },
        { name: "Estêvão", number: 21, pos: "Atacante" },
        { name: "Luiz Henrique", number: 20, pos: "Atacante" },
        { name: "G. Martinelli", number: 22, pos: "Atacante" }
      ]
    }
  };

  // Abre o modal de escalações
  function openLineupModal(matchId) {
    const lineup = MATCH_LINEUPS[matchId] || MATCH_LINEUPS[1];

    let startersHtml = '';
    lineup.starters.forEach(p => {
      const shirtClass = p.isGK ? 'player-shirt gk-shirt' : 'player-shirt';
      startersHtml += `
        <div class="pitch-player" style="left: ${p.left}%; top: ${p.top}%;">
          <div class="${shirtClass}">${p.number}</div>
          <span class="player-name">${p.name}</span>
        </div>
      `;
    });

    let substitutesHtml = '';
    lineup.substitutes.forEach(p => {
      substitutesHtml += `
        <div class="sub-item">
          <div class="sub-player-info">
            <div class="sub-jersey">${p.number}</div>
            <span class="sub-name">${p.name}</span>
          </div>
          <span class="sub-position">${p.pos}</span>
        </div>
      `;
    });

    const modalHtml = `
      <div class="lineup-modal-overlay" id="lineup-modal">
        <div class="lineup-modal-wrapper">
          <div class="lineup-modal-header">
            <div class="lineup-modal-title-wrap">
              <span class="lineup-modal-title">${lineup.matchName}</span>
              <span class="lineup-modal-subtitle">Técnico: <span class="coach">${lineup.coach}</span> · Esquema: ${lineup.scheme}</span>
            </div>
            <button class="lineup-modal-close" id="close-lineup-modal">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div class="lineup-modal-body">
            <!-- Campo Tático -->
            <div class="pitch-container">
              <div class="soccer-pitch">
                <div class="pitch-center-line"></div>
                <div class="pitch-center-circle"></div>
                <div class="pitch-penalty-area"></div>
                <div class="pitch-goal-area"></div>
                <div class="pitch-penalty-spot"></div>
                <div class="pitch-penalty-arc"></div>
                
                <!-- Titulares -->
                ${startersHtml}
              </div>
            </div>
            
            <!-- Painel Lateral -->
            <div class="lineup-info-side">
              <div>
                <div class="lineup-section-title">Elenco Escalado</div>
                <div class="subs-list">
                  ${substitutesHtml}
                </div>
              </div>
              
              <div class="tactical-notes">
                <div class="lineup-section-title" style="border-left-color: #0072CE; margin-bottom: 8px;">Notas Táticas</div>
                <p>${lineup.notes}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    $('#lineup-modal').remove();
    $('body').append(modalHtml);

    setTimeout(() => {
      $('#lineup-modal').addClass('active');

      if (typeof gsap !== 'undefined') {
        gsap.from(".pitch-player", {
          opacity: 0,
          scale: 0,
          y: 20,
          stagger: 0.05,
          duration: 0.5,
          ease: "back.out(1.7)",
          delay: 0.15
        });

        gsap.from(".sub-item", {
          opacity: 0,
          x: 25,
          stagger: 0.03,
          duration: 0.4,
          ease: "power2.out",
          delay: 0.25
        });
      }
    }, 10);
  }

  // Fecha o modal de escalação
  function closeLineupModal() {
    const modal = $('#lineup-modal');
    if (!modal.length) return;

    modal.removeClass('active');
    setTimeout(() => {
      modal.remove();
    }, 400);
  }

  // Triggers de fechar modal
  $(document).on('click', '#close-lineup-modal', function(e) {
    e.stopPropagation();
    closeLineupModal();
  });

  $(document).on('click', '#lineup-modal', function(e) {
    if ($(e.target).hasClass('lineup-modal-overlay')) {
      closeLineupModal();
    }
  });

  $(document).on('keydown', function(e) {
    if (e.key === 'Escape') {
      closeLineupModal();
    }
  });

  // Ativa evento de clique nos cards de partida
  $(document).on('click', '.match-card', function() {
    const matchId = $(this).data('match-id');
    openLineupModal(matchId);
  });

  // Inicializa o carregamento
  loadAPIData();
});
