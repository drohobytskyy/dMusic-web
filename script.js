// dMusik shared JS
// - Sets footer year
// - Option A i18n (EN/PT) for index + privacy pages

document.addEventListener("DOMContentLoaded", function () {
  // Year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // i18n
  var STORAGE_KEY = "dmusic_lang";
  var supported = ["en", "pt"];

  var I18N = {
    en: {
      // Common / nav
      "brand.iconAlt": "dMusik app icon",
      "nav.home": "Home",
      "nav.features": "Features",
      "nav.screens": "Screenshots",
      "nav.privacy": "Privacy",
      "nav.contact": "Contact",

      // Index hero
      "hero.titleHtml": 'Your <span class="gradient-text">music discovery</span> companion.',
      "hero.lead":
        "Discover your next favorite song in seconds. Search millions of tracks, explore new artists, and listen to high-quality 30-second previews powered by Apple’s public iTunes Search API.",
      "hero.meta1": "Built for iOS • SwiftUI",
      "hero.meta2": "Background audio • Mini player",
      "hero.badge1": "Instant search",
      "hero.badge2": "30-second previews",
      "hero.badge3": "Favorites & playlists",
      "hero.cta": "Get the iOS app",
      "hero.note": "Plays short preview clips only. Not a full streaming service.",
      "hero.cardLabel": "Now Playing · dMusik",

      // Features
      "features.title": "Features",
      "features.sub":
        "Everything you need to explore music quickly, save what you love, and keep listening with a smooth iOS-native experience.",
      "features.c1.title": "Instant music discovery",
      "features.c1.body":
        "Type a song, artist, or album and get fast results from Apple’s music catalog using the official iTunes Search API.",
      "features.c2.title": "High-quality previews",
      "features.c2.body":
        "Listen to 30-second preview clips with a sleek mini-player, background audio, and smooth controls like play, pause, next, previous, shuffle and repeat.",
      "features.c3.title": "Favorites & playlists",
      "features.c3.body":
        "Save the tracks you love and build playlists for every mood, synced securely with your account on iOS via Supabase.",

      // Screens
      "screens.title": "Screenshots",
      "screens.sub":
        "A clean, dark interface that feels right at home on iOS. Built with SwiftUI, tuned for both small and large screens.",
      "screens.cap1": "Now Playing",
      "screens.cap2": "Favorites",
      "screens.cap3": "Settings & account",
      "screens.nowPlayingAlt": "dMusik Now Playing screenshot",
      "screens.playerAlt": "dMusik Player screen",
      "screens.favsAlt": "dMusik Favorites screen",
      "screens.settingsAlt": "dMusik Settings screen",

      // Privacy teaser
      "privacyTeaser.title": "Privacy at the core",
      "privacyTeaser.bodyHtml":
        'dMusik is built with a privacy-first mindset. We only collect what we need to provide the core experience, and nothing more. Read the full <a href="privacy.html">Privacy Policy</a> for details.',

      // Contact
      "contact.title": "Get in touch",
      "contact.body":
        "Want access to the iOS TestFlight, partnership info, feedback, or to contribute? Drop a message and we’ll get back to you.",
      "contact.emailLabel": "Email:",
      "contact.note1":
        "dMusik is not a full music streaming service. It uses Apple’s public iTunes Search API and only plays short preview clips provided by Apple.",
      "contact.note2":
        "The iOS app also includes in-app account deletion so you can remove your data at any time.",

      // Footer
      "footer.rights": "All rights reserved.",
      "footer.privacy": "Privacy",
      "footer.madeWith": "Made with SwiftUI & Supabase",

      // Head (optional)
      "_head.title": "dMusik — Your Music Discovery Companion",
      "_head.desc":
        "Discover your next favorite song with dMusik. Search millions of tracks, listen to 30-second previews, save favorites, and build playlists with a beautiful iOS player.",

      // Privacy page HTML (injected)
      "_privacy.html": function () {
        return `
          <h1>Privacy Policy</h1>
          <p class="tagline">
            Last updated: <span id="privacy-updated">2025-01-01</span><br />
            We care about your privacy and are committed to being transparent about how dMusik handles your data.
          </p>

          <h2>1. Who we are</h2>
          <p>
            dMusik is a personal music discovery app for iOS that lets you search for songs using Apple’s public
            iTunes Search API, listen to short preview clips, and save favourites and playlists.
            You can contact us at <a href="mailto:hello.dmusik@icloud.com">hello.dmusik@icloud.com</a>.
          </p>

          <h2>2. What this policy covers</h2>
          <p>This policy explains how we handle personal data in:</p>
          <ul>
            <li>the dMusik website (this site), and</li>
            <li>the dMusik iOS app.</li>
          </ul>

          <h2>3. Website</h2>
          <p>This website is informational only. We do not:</p>
          <ul>
            <li>use cookies,</li>
            <li>run analytics scripts, or</li>
            <li>embed third-party trackers.</li>
          </ul>
          <p>
            If you contact us by email, the contents of your message will be stored in our email provider for as long
            as reasonably necessary to respond and keep a basic record of communication.
          </p>

          <h2>4. Data in the iOS app</h2>
          <p>
            To provide features like favourites and playlists, the dMusik app may store the following information in a
            secure backend (Supabase):
          </p>
          <ul>
            <li>Your email address (for authentication and login).</li>
            <li>A basic profile identifier.</li>
            <li>The tracks you mark as favourites.</li>
            <li>The playlists you create and the tracks inside them.</li>
          </ul>
          <p>We do not collect your contacts, precise location, photos, or other unrelated personal data.</p>

          <h2>5. Music search & previews</h2>
          <p>
            When you search for music inside the app, your query is sent from your device to Apple’s public iTunes Search API
            to retrieve metadata (such as song name, artist, album artwork) and preview URLs.
          </p>
          <p>dMusik:</p>
          <ul>
            <li>does not use these searches to create profiles across apps or websites,</li>
            <li>only plays short preview clips provided by Apple, and</li>
            <li>is not affiliated with Apple Music or iTunes.</li>
          </ul>

          <h2>6. Legal basis & purpose</h2>
          <p>We process your data only as needed to:</p>
          <ul>
            <li>create and manage your account,</li>
            <li>sync favourites and playlists across your sessions, and</li>
            <li>secure the service (for example, prevent abuse or unauthorised access).</li>
          </ul>

          <h2>7. Data retention & deletion</h2>
          <p>
            We keep your account data for as long as your dMusik account remains active.
            You can delete your account at any time directly from the app. When you delete your account:
          </p>
          <ul>
            <li>your account and associated favourites/playlists are deleted from our Supabase backend, and</li>
            <li>you are signed out of the app.</li>
          </ul>
          <p>
            Some minimal technical logs (for example, server logs) may be retained for a limited period for security,
            troubleshooting, and legal compliance, but they are not used to build user profiles.
          </p>

          <h2>8. Children</h2>
          <p>
            dMusik is not directed at children under the age of 13. If you believe a child has created an account
            without appropriate consent, please contact us so we can remove the account.
          </p>

          <h2>9. Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we do, we will update the “Last updated” date at the top
            of this page. Significant changes may also be highlighted in the app or on the website.
          </p>

          <h2>10. Contact</h2>
          <p>
            If you have any questions about this Privacy Policy or how dMusik handles your data,
            please email <a href="mailto:hello.dmusik@icloud.com">hello.dmusik@icloud.com</a>.
          </p>
        `;
      },
    },

    pt: {
      // Common / nav
      "brand.iconAlt": "Ícone da app dMusik",
      "nav.home": "Início",
      "nav.features": "Funcionalidades",
      "nav.screens": "Capturas",
      "nav.privacy": "Privacidade",
      "nav.contact": "Contacto",

      // Index hero
      "hero.titleHtml": 'O teu companheiro de <span class="gradient-text">descoberta musical</span>.',
      "hero.lead":
        "Descobre a tua próxima música favorita em segundos. Pesquisa milhões de faixas, explora novos artistas e ouve prévias de alta qualidade de 30 segundos através da API pública de Pesquisa do iTunes da Apple.",
      "hero.meta1": "Feito para iOS • SwiftUI",
      "hero.meta2": "Áudio em background • Mini player",
      "hero.badge1": "Pesquisa instantânea",
      "hero.badge2": "Prévias de 30 segundos",
      "hero.badge3": "Favoritos e playlists",
      "hero.cta": "Obter a app iOS",
      "hero.note": "Reproduz apenas clipes de prévia. Não é um serviço de streaming completo.",
      "hero.cardLabel": "A tocar · dMusik",

      // Features
      "features.title": "Funcionalidades",
      "features.sub":
        "Tudo o que precisas para explorar música rapidamente, guardar o que gostas e continuar a ouvir com uma experiência nativa no iOS.",
      "features.c1.title": "Descoberta instantânea",
      "features.c1.body":
        "Escreve uma música, artista ou álbum e obtém resultados rápidos do catálogo da Apple através da API oficial de Pesquisa do iTunes.",
      "features.c2.title": "Prévias com qualidade",
      "features.c2.body":
        "Ouve clipes de 30 segundos com mini-player, áudio em background e controlos suaves como play, pause, seguinte, anterior, aleatório e repetir.",
      "features.c3.title": "Favoritos e playlists",
      "features.c3.body":
        "Guarda as faixas que adoras e cria playlists para cada mood, com sincronização segura na tua conta iOS via Supabase.",

      // Screens
      "screens.title": "Capturas de ecrã",
      "screens.sub":
        "Uma interface limpa e escura, perfeita para iOS. Construída com SwiftUI e afinada para ecrãs pequenos e grandes.",
      "screens.cap1": "A tocar",
      "screens.cap2": "Favoritos",
      "screens.cap3": "Definições e conta",
      "screens.nowPlayingAlt": "Captura do ecrã “A tocar” do dMusik",
      "screens.playerAlt": "Ecrã do player do dMusik",
      "screens.favsAlt": "Ecrã de favoritos do dMusik",
      "screens.settingsAlt": "Ecrã de definições do dMusik",

      // Privacy teaser
      "privacyTeaser.title": "Privacidade em primeiro lugar",
      "privacyTeaser.bodyHtml":
        'O dMusik foi construído com foco na privacidade. Só tratamos o que é necessário para a experiência principal — nada mais. Lê a <a href="privacy.html">Política de Privacidade</a> completa para detalhes.',

      // Contact
      "contact.title": "Fala connosco",
      "contact.body":
        "Queres acesso ao iOS TestFlight, parcerias, feedback ou contribuir? Envia uma mensagem e respondemos assim que possível.",
      "contact.emailLabel": "Email:",
      "contact.note1":
        "O dMusik não é um serviço de streaming completo. Usa a API pública de Pesquisa do iTunes da Apple e reproduz apenas clipes de prévia fornecidos pela Apple.",
      "contact.note2":
        "A app iOS também inclui eliminação de conta dentro da app para poderes remover os teus dados quando quiseres.",

      // Footer
      "footer.rights": "Todos os direitos reservados.",
      "footer.privacy": "Privacidade",
      "footer.madeWith": "Feito com SwiftUI & Supabase",

      // Head (optional)
      "_head.title": "dMusik — O teu companheiro de descoberta musical",
      "_head.desc":
        "Descobre a tua próxima música favorita com o dMusik. Pesquisa milhões de faixas, ouve prévias de 30 segundos, guarda favoritos e cria playlists com um player iOS bonito.",

      // Privacy page HTML (injected)
      "_privacy.html": function () {
        return `
          <h1>Política de Privacidade</h1>
          <p class="tagline">
            Última atualização: <span id="privacy-updated">2025-01-01</span><br />
            A tua privacidade é importante. Somos transparentes sobre como o dMusik trata os teus dados.
          </p>

          <h2>1. Quem somos</h2>
          <p>
            O dMusik é uma app pessoal de descoberta musical para iOS que permite pesquisar músicas usando a API pública de Pesquisa do iTunes da Apple,
            ouvir clipes de prévia e guardar favoritos e playlists.
            Podes contactar-nos em <a href="mailto:hello.dmusik@icloud.com">hello.dmusik@icloud.com</a>.
          </p>

          <h2>2. O que esta política cobre</h2>
          <p>Esta política explica como tratamos dados pessoais em:</p>
          <ul>
            <li>o website do dMusik (este site), e</li>
            <li>a app iOS do dMusik.</li>
          </ul>

          <h2>3. Website</h2>
          <p>Este website é apenas informativo. Nós não:</p>
          <ul>
            <li>usamos cookies,</li>
            <li>executamos scripts de analytics, nem</li>
            <li>incorporamos trackers de terceiros.</li>
          </ul>
          <p>
            Se nos contactares por email, o conteúdo da mensagem ficará guardado no nosso fornecedor de email pelo tempo
            razoavelmente necessário para responder e manter um registo básico da comunicação.
          </p>

          <h2>4. Dados na app iOS</h2>
          <p>
            Para disponibilizar funcionalidades como favoritos e playlists, a app dMusik pode guardar a seguinte informação num backend seguro (Supabase):
          </p>
          <ul>
            <li>O teu endereço de email (autenticação e login).</li>
            <li>Um identificador básico de perfil.</li>
            <li>As faixas que marcas como favoritas.</li>
            <li>As playlists que crias e as faixas dentro delas.</li>
          </ul>
          <p>Não recolhemos contactos, localização precisa, fotos ou outros dados pessoais não relacionados.</p>

          <h2>5. Pesquisa e prévias de música</h2>
          <p>
            Quando pesquisas música na app, a tua pesquisa é enviada do teu dispositivo para a API pública de Pesquisa do iTunes da Apple
            para obter metadados (nome da música, artista, capa do álbum) e URLs de prévia.
          </p>
          <p>O dMusik:</p>
          <ul>
            <li>não usa estas pesquisas para criar perfis entre apps ou websites,</li>
            <li>reproduz apenas clipes de prévia fornecidos pela Apple, e</li>
            <li>não é afiliado ao Apple Music ou iTunes.</li>
          </ul>

          <h2>6. Base legal e finalidade</h2>
          <p>Tratamos dados apenas quando necessário para:</p>
          <ul>
            <li>criar e gerir a tua conta,</li>
            <li>sincronizar favoritos e playlists, e</li>
            <li>proteger o serviço (ex.: prevenção de abuso e acessos não autorizados).</li>
          </ul>

          <h2>7. Retenção e eliminação de dados</h2>
          <p>
            Mantemos os dados da conta enquanto a tua conta dMusik estiver ativa.
            Podes eliminar a tua conta a qualquer momento diretamente na app. Ao eliminar a conta:
          </p>
          <ul>
            <li>a tua conta e os favoritos/playlists associados são removidos do nosso backend Supabase, e</li>
            <li>serás automaticamente desconectado da app.</li>
          </ul>
          <p>
            Alguns registos técnicos mínimos (ex.: logs do servidor) podem ser mantidos por um período limitado para segurança,
            troubleshooting e conformidade legal, mas não são usados para criar perfis de utilizador.
          </p>

          <h2>8. Crianças</h2>
          <p>
            O dMusik não é direcionado a menores de 13 anos. Se acreditas que uma criança criou uma conta sem consentimento apropriado,
            contacta-nos para removermos a conta.
          </p>

          <h2>9. Alterações a esta política</h2>
          <p>
            Podemos atualizar esta Política de Privacidade ocasionalmente. Quando o fizermos, atualizamos a data de “Última atualização” no topo desta página.
            Alterações significativas também podem ser destacadas na app ou no website.
          </p>

          <h2>10. Contacto</h2>
          <p>
            Se tiveres dúvidas sobre esta Política de Privacidade ou sobre como o dMusik trata os teus dados,
            envia um email para <a href="mailto:hello.dmusik@icloud.com">hello.dmusik@icloud.com</a>.
          </p>
        `;
      },
    },
  };

  function detectDefaultLang() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved && supported.indexOf(saved) !== -1) return saved;
    var nav = (navigator.language || "en").toLowerCase();
    if (nav.indexOf("pt") === 0) return "pt";
    return "en";
  }

  function setMeta(name, content) {
    var el = document.querySelector('meta[name="' + name + '"]');
    if (el) el.setAttribute("content", content);
  }

  function setMetaProp(prop, content) {
    var el = document.querySelector('meta[property="' + prop + '"]');
    if (el) el.setAttribute("content", content);
  }

  function applyText(lang) {
    // textContent
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var val = I18N[lang] && I18N[lang][key];
      if (typeof val === "string") el.textContent = val;
    });

    // innerHTML (for strings with markup/links)
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      var val = I18N[lang] && I18N[lang][key];
      if (typeof val === "string") el.innerHTML = val;
    });

    // alt attributes
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-alt");
      var val = I18N[lang] && I18N[lang][key];
      if (typeof val === "string") el.setAttribute("alt", val);
    });
    
    // Swap assets by language using {lang}
    document.querySelectorAll('[data-i18n-src-base]').forEach(function (el) {
      var tpl = el.getAttribute('data-i18n-src-base');
        if (tpl) {
          el.setAttribute('src', tpl.replace('{lang}', lang));
        }
    });

    // Head title/description + social
    if (I18N[lang]["_head.title"]) {
      document.title = I18N[lang]["_head.title"];
      setMetaProp("og:title", I18N[lang]["_head.title"]);
      setMeta("twitter:title", I18N[lang]["_head.title"]);
    }
    if (I18N[lang]["_head.desc"]) {
      setMeta("description", I18N[lang]["_head.desc"]);
      setMetaProp("og:description", I18N[lang]["_head.desc"]);
      setMeta("twitter:description", I18N[lang]["_head.desc"]);
    }

    // Privacy page injection
    var privacy = document.getElementById("privacyContent");
    if (privacy && typeof I18N[lang]["_privacy.html"] === "function") {
      privacy.innerHTML = I18N[lang]["_privacy.html"]();
    }
  }

  function setLang(lang) {
    if (supported.indexOf(lang) === -1) lang = "en";

    document.documentElement.lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);

    var btnEN = document.getElementById("langEN");
    var btnPT = document.getElementById("langPT");
    if (btnEN) btnEN.setAttribute("aria-pressed", String(lang === "en"));
    if (btnPT) btnPT.setAttribute("aria-pressed", String(lang === "pt"));

    applyText(lang);
  }

  // Init
  setLang(detectDefaultLang());

  // Bind buttons (if present)
  var langEN = document.getElementById("langEN");
  var langPT = document.getElementById("langPT");
  if (langEN) langEN.addEventListener("click", function () { setLang("en"); });
  if (langPT) langPT.addEventListener("click", function () { setLang("pt"); });
});
