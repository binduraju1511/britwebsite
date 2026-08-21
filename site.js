const PAGE = document.body.dataset.page || 'home';
const IMAGE_PATH = 'assets/images/';
const SITE_URL = 'https://binduraju1511.github.io/britwebsite/';

const PAGE_META = {
  home: { name: 'Home', path: '', type: 'WebPage', description: 'Meet YANI, BR Innovation & Technology’s adaptive AI learning companion prototype for children ages 3–13, designed for learning, play and parent guidance.' },
  about: { name: 'About Us', path: 'about.html', type: 'AboutPage', description: 'Meet BR Innovation & Technology, the Bangalore team developing YANI, an adaptive AI learning companion prototype for children and families.' },
  features: { name: 'YANI Features', path: 'features.html', type: 'WebPage', description: 'Explore the learning, conversation, play, routine and family-safety capabilities being developed for the YANI adaptive AI companion prototype.' },
  parents: { name: 'YANI for Parents', path: 'parents.html', type: 'WebPage', description: 'See how YANI is being designed with parent guidance, routines, progress insights and family-first safeguards for children ages 3–13.' },
  kids: { name: 'YANI for Kids', path: 'kids.html', type: 'WebPage', description: 'Discover age-aware stories, quizzes, games and creative learning adventures being developed for children with the YANI companion prototype.' },
  gallery: { name: 'YANI Gallery', path: 'gallery.html', type: 'CollectionPage', description: 'See YANI learning, playing and growing with children through product visuals, family moments and behind-the-build prototype scenes.' },
  faq: { name: 'YANI Help and FAQ', path: 'faq.html', type: 'WebPage', description: 'Find clear answers about the YANI prototype, supported ages, learning, parent controls, privacy, setup and early-access availability.' },
  privacy: { name: 'Privacy', path: 'privacy.html', type: 'WebPage', description: 'Read how the BR Innovation & Technology website handles visitor information and how to contact the team about privacy or data requests.' },
  terms: { name: 'Terms of Use', path: 'terms.html', type: 'WebPage', description: 'Read the terms that apply when using the BR Innovation & Technology website and information about the YANI prototype.' }
};

const FAQS = [
  ['What is Yani?', 'Yani is an AI companion that learns, teaches, plays, and grows with your child—making every day an adventure.'],
  ['How does Yani respond to emotions?', 'Yani notices how your child feels and responds with kind words, fun activities, or quiet time when they need it.'],
  ['Which ages is Yani designed for?', 'Yani is designed for children ages 3–13, with experiences tailored to different stages of growth.'],
  ['What languages will Yani support?', 'Yani will support multiple languages. Initial language availability and future expansions will be announced.'],
  ['How does Yani personalize learning?', 'Yani listens, learns, and adapts to your child’s interests, pace, and progress to create meaningful experiences.'],
  ['How is children’s privacy handled?', 'Your child’s privacy is our priority. Privacy-minded design and strong parent controls keep families in charge.'],
  ['Can parents manage Yani?', 'Yes! Parents can manage settings, screen time, profiles, and content preferences through the parent app.'],
  ['How can I join Yani?', 'Use any “Join the waitlist” button to open the registration form.'],
  ['Does Yani need internet?', 'Yani works best with an internet connection for updates and new content, while selected core features work offline.'],
  ['What is included in the box?', 'Yani, a charging cable, and a quick-start guide. Additional details will be announced.']
];

const ASSISTANT_KNOWLEDGE = [
  { matches: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'], response: 'Hello! I’m the YANI Product Guide. I can help you learn about BR Innovation & Technology, YANI’s capabilities, family features, early access and ways to contact our team.' },
  { matches: ['contact', 'email', 'phone', 'location', 'address', 'reach', 'social'], response: 'You can reach BR Innovation & Technology at +91 7975515056, contact@brinnoandtech.com or info@brinnoandtech.com. We are based in Bangalore, Karnataka, India.' },
  { matches: ['price', 'pricing', 'cost', 'buy', 'purchase', 'waitlist', 'join', 'available'], response: 'YANI is currently in development and prototype testing, so final pricing and availability have not been announced. You can use any “Join the waitlist” button for progress updates and future testing opportunities.' },
  { matches: ['parent', 'privacy', 'safe', 'safety', 'control'], response: 'YANI’s prototype is being developed with family-first safeguards in mind. Parent controls, protected pairing, child-aware experiences and privacy choices are part of the current testing and validation work—not finished product claims.' },
  { matches: ['feature', 'capabilit', 'what can', 'solution', 'service', 'offer'], response: 'The YANI prototype is exploring adaptive learning, natural conversations, stories and games, daily routines, emotion-aware support and parent controls. These capabilities are still being developed and validated through supervised testing.' },
  { matches: ['learn', 'school', 'education', 'quiz', 'story'], response: 'YANI’s learning experience is being designed around age-aware conversations, stories, quizzes and guided activities. The team is testing how well the prototype can adapt to a child’s pace and interests with parent guidance.' },
  { matches: ['founder', 'bindu', 'leadership', 'who leads'], response: 'BR Innovation & Technology is led by founder and partner Bindu R, who is guiding YANI toward accessible learning experiences for homes and schools across India.' },
  { matches: ['br innovation', 'company', 'about br', 'who are you', 'startup'], response: 'BR Innovation & Technology is a Bangalore-based AI educational robotics company founded in 2025. We are developing YANI, our flagship prototype, through an iterative testing and validation process.' },
  { matches: ['what is yani', 'about yani', 'yani', 'robot', 'companion', 'product'], response: 'YANI is BR Innovation & Technology’s flagship adaptive AI companion prototype for children ages 3–13. It is currently in development and supervised testing. We’re designing it to support age-aware learning, natural conversation and emotional engagement—with parent guidance and safety checks shaping every stage.' }
];

function assistantIcon() {
  return '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M6 7h20a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H15l-7 5 1-5H6a3 3 0 0 1-3-3V10a3 3 0 0 1 3-3Z"/><path d="M9 16h.1M16 16h.1M23 16h.1"/></svg>';
}

function addAssistant() {
  document.body.insertAdjacentHTML('beforeend', `<button class="assistant-fab" type="button" data-assistant-open aria-controls="yani-assistant" aria-expanded="false"><span class="assistant-fab-avatar"><img decoding="async" src="${IMAGE_PATH}yani-happy.webp" alt=""></span><span><small>Need help?</small><strong>Talk to YANI</strong></span>${assistantIcon()}</button><aside class="yani-assistant" id="yani-assistant" role="dialog" aria-labelledby="assistant-title" hidden><header class="assistant-header"><div class="assistant-avatar"><img decoding="async" src="${IMAGE_PATH}yani-happy.webp" alt="YANI"></div><div><h2 id="assistant-title">YANI Product Guide</h2><p><span></span> BR Innovation virtual assistant</p></div><button type="button" class="assistant-close" aria-label="Close YANI assistant">×</button></header><div class="assistant-messages" id="assistant-messages" aria-live="polite"><div class="assistant-message bot"><span class="assistant-message-avatar"><img decoding="async" src="${IMAGE_PATH}yani-happy.webp" alt=""></span><div class="assistant-message-body"><strong>YANI</strong><p>Hi! I’m YANI’s virtual product guide.</p><small>Ask me about our company, the prototype, learning features, safety or early access.</small></div></div></div><div class="assistant-quick" aria-label="Suggested questions"><button type="button">What is YANI?</button><button type="button">What can YANI do?</button><button type="button">Is YANI safe?</button><button type="button">Contact the team</button></div><form class="assistant-form" autocomplete="off"><label class="sr-only" for="assistant-input">Ask YANI a question</label><input id="assistant-input" type="text" autocomplete="off" maxlength="240" placeholder="Message YANI…"><button type="submit" aria-label="Send message">${assistantIcon()}</button></form><p class="assistant-disclaimer">Virtual guide • YANI is currently in prototype testing</p></aside>`);
}

function assistantReply(input) {
  const value = input.toLowerCase().trim();
  const match = ASSISTANT_KNOWLEDGE.find(item => item.matches.some(keyword => value.includes(keyword)));
  return match?.response || 'I can help with BR Innovation & Technology, YANI’s features, learning, family safety, early access and contact details. Try one of the suggested questions, or email contact@brinnoandtech.com for a detailed inquiry.';
}

function setupNavigation() {
  const button = document.querySelector('.menu-btn');
  const navigation = document.querySelector('.nav-links');
  if (!button || !navigation) return;
  const close = () => {
    navigation.classList.remove('open');
    document.body.classList.remove('menu-open');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Open menu');
  };
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-controls', 'nav-links');
  button.addEventListener('click', () => {
    const open = !navigation.classList.contains('open');
    navigation.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && navigation.classList.contains('open')) {
      close();
      button.focus();
    }
  });
}

function setupFaq() {
  document.querySelectorAll('.faq-q').forEach(question => question.addEventListener('click', () => {
    const item = question.closest('.faq-item');
    item.classList.toggle('open');
    question.setAttribute('aria-expanded', String(item.classList.contains('open')));
  }));
  let category = 'all';
  const search = document.getElementById('faq-search');
  const empty = document.getElementById('faq-empty');
  const apply = () => {
    const term = (search?.value || '').trim().toLowerCase();
    let visible = 0;
    document.querySelectorAll('.faq-item').forEach(item => {
      const hidden = (category !== 'all' && item.dataset.cat !== category) || (term && !item.dataset.text.includes(term));
      item.classList.toggle('hide', hidden);
      if (!hidden) visible += 1;
    });
    if (empty) empty.hidden = visible !== 0;
  };
  search?.addEventListener('input', apply);
  document.querySelectorAll('.faq-tab').forEach(tab => tab.addEventListener('click', () => {
    category = tab.dataset.faq;
    document.querySelectorAll('.faq-tab').forEach(item => {
      item.classList.remove('active');
      item.setAttribute('aria-pressed', 'false');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-pressed', 'true');
    apply();
  }));
}

function setupGallery() {
  document.querySelectorAll('.gallery-filter').forEach(filter => filter.addEventListener('click', () => {
    const category = filter.dataset.gallery;
    document.querySelectorAll('.gallery-filter').forEach(item => {
      item.classList.remove('active');
      item.setAttribute('aria-pressed', 'false');
    });
    filter.classList.add('active');
    filter.setAttribute('aria-pressed', 'true');
    document.querySelectorAll('.gallery-story').forEach(item => item.classList.toggle('is-hidden', category !== 'all' && !item.dataset.cats.split(' ').includes(category)));
  }));
  const track = document.querySelector('.gallery-lab-track');
  document.querySelector('.gallery-lab-prev')?.addEventListener('click', () => track.scrollBy({ left: -track.clientWidth * 0.68, behavior: 'smooth' }));
  document.querySelector('.gallery-lab-next')?.addEventListener('click', () => track.scrollBy({ left: track.clientWidth * 0.68, behavior: 'smooth' }));
  const prototypeVideos = document.querySelectorAll('.gallery-prototype-video');
  prototypeVideos.forEach(video => video.addEventListener('play', () => {
    prototypeVideos.forEach(other => {
      if (other !== video) other.pause();
    });
  }));
}

function setupAssistant() {
  const panel = document.getElementById('yani-assistant');
  const messages = document.getElementById('assistant-messages');
  const input = document.getElementById('assistant-input');
  const form = document.querySelector('.assistant-form');
  const closeButton = document.querySelector('.assistant-close');
  const launchers = document.querySelectorAll('[data-assistant-open]');
  const setOpen = open => {
    panel.hidden = !open;
    launchers.forEach(button => button.setAttribute('aria-expanded', String(open)));
    document.body.classList.toggle('assistant-open', open);
    if (open) setTimeout(() => input.focus(), 60);
  };
  launchers.forEach(button => button.addEventListener('click', () => setOpen(true)));
  closeButton.addEventListener('click', () => setOpen(false));
  const addAvatar = item => {
    const avatar = document.createElement('span');
    avatar.className = 'assistant-message-avatar';
    const image = document.createElement('img');
    image.src = `${IMAGE_PATH}yani-happy.webp`;
    image.alt = '';
    image.decoding = 'async';
    avatar.appendChild(image);
    item.appendChild(avatar);
  };
  const addMessage = (copy, type) => {
    const item = document.createElement('div');
    item.className = `assistant-message ${type}`;
    const bot = type.split(' ').includes('bot');
    if (bot) addAvatar(item);
    const body = document.createElement('div');
    body.className = 'assistant-message-body';
    if (bot) {
      const author = document.createElement('strong');
      author.textContent = 'YANI';
      body.appendChild(author);
    }
    const text = document.createElement('p');
    text.textContent = copy;
    body.appendChild(text);
    item.appendChild(body);
    messages.appendChild(item);
    messages.scrollTop = messages.scrollHeight;
    return item;
  };
  const addTyping = () => {
    const item = document.createElement('div');
    item.className = 'assistant-message bot typing';
    item.setAttribute('role', 'status');
    item.setAttribute('aria-label', 'YANI is typing');
    addAvatar(item);
    const body = document.createElement('div');
    body.className = 'assistant-message-body';
    const author = document.createElement('strong');
    author.textContent = 'YANI';
    const status = document.createElement('div');
    status.className = 'typing-status';
    status.innerHTML = '<span class="typing-label">Typing</span><span class="typing-dots" aria-hidden="true"><i></i><i></i><i></i></span>';
    body.append(author, status);
    item.appendChild(body);
    messages.appendChild(item);
    messages.scrollTop = messages.scrollHeight;
    return item;
  };
  const send = question => {
    const value = question.trim().slice(0, 240);
    if (!value) return;
    addMessage(value, 'user');
    input.value = '';
    const typing = addTyping();
    setTimeout(() => {
      typing.remove();
      addMessage(assistantReply(value), 'bot');
    }, 780);
  };
  form.addEventListener('submit', event => {
    event.preventDefault();
    send(input.value);
  });
  document.querySelectorAll('.assistant-quick button').forEach(button => button.addEventListener('click', () => send(button.textContent)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !panel.hidden) {
      setOpen(false);
      document.querySelector('.assistant-fab').focus();
    }
  });
}

function addStructuredData() {
  const meta = PAGE_META[PAGE];
  if (!meta) return;
  const organization = {
    '@type': 'Organization', '@id': `${SITE_URL}#organization`, name: 'BR Innovation & Technology', url: SITE_URL,
    logo: { '@type': 'ImageObject', url: `${SITE_URL}${IMAGE_PATH}new_logo.png`, width: 1254, height: 1254 },
    description: 'A Bangalore-based AI educational robotics company developing YANI, an adaptive learning companion prototype for children and families.',
    foundingDate: '2025', telephone: '+91 7975515056', email: 'contact@brinnoandtech.com',
    address: { '@type': 'PostalAddress', addressLocality: 'Bangalore', addressRegion: 'Karnataka', addressCountry: 'IN' },
    sameAs: ['https://www.linkedin.com/company/br-innovation-and-technology/', 'https://www.instagram.com/brinnovationandtechnology/']
  };
  const website = { '@type': 'WebSite', '@id': `${SITE_URL}#website`, url: SITE_URL, name: 'BR Innovation & Technology', publisher: { '@id': `${SITE_URL}#organization` }, inLanguage: 'en-IN' };
  const url = `${SITE_URL}${meta.path}`;
  const graph = [organization, website, { '@type': meta.type, '@id': `${url}#webpage`, url, name: meta.name, description: meta.description, isPartOf: { '@id': `${SITE_URL}#website` }, about: { '@id': `${SITE_URL}#organization` }, inLanguage: 'en-IN' }];
  if (PAGE === 'features') graph.push({ '@type': 'Product', '@id': `${url}#yani`, name: 'YANI', url, description: 'An adaptive AI learning companion prototype for children ages 3–13, currently in development and supervised testing.', brand: { '@id': `${SITE_URL}#organization` }, category: 'Educational robot prototype', audience: { '@type': 'PeopleAudience', suggestedMinAge: 3, suggestedMaxAge: 13 }, additionalProperty: { '@type': 'PropertyValue', name: 'Development status', value: 'Prototype testing' } });
  if (PAGE === 'faq') graph.push({ '@type': 'FAQPage', '@id': `${url}#faq`, mainEntity: FAQS.map(item => ({ '@type': 'Question', name: item[0], acceptedAnswer: { '@type': 'Answer', text: item[1] } })) });
  if (PAGE !== 'home') graph.push({ '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`, itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL }, { '@type': 'ListItem', position: 2, name: meta.name, item: url }] });
  const script = document.createElement('script');
  script.id = 'structured-data';
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
  document.head.appendChild(script);
}

function optimizeMedia() {
  document.querySelectorAll('main img').forEach((image, index) => {
    if (!image.hasAttribute('loading')) image.loading = index === 0 ? 'eager' : 'lazy';
    image.decoding = 'async';
    if (index === 0) image.fetchPriority = 'high';
  });
  document.querySelectorAll('video').forEach(video => {
    video.preload = 'metadata';
    video.playsInline = true;
  });
}

addAssistant();
setupNavigation();
setupFaq();
setupGallery();
setupAssistant();
addStructuredData();
optimizeMedia();
