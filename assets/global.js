/* ============================================================
   BR Innovation & Technology — Global Shared JavaScript
   ============================================================ */

(function () {
  'use strict';

  // ── Navbar scroll effect ────────────────────────────────
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
  }

  // ── Mobile menu ─────────────────────────────────────────
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const navLinks  = document.querySelector('.nav-links');

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navLinks.classList.toggle('active');
      mobileBtn.setAttribute('aria-expanded', isOpen);
      const icon = mobileBtn.querySelector('i');
      if (icon) {
        icon.className = isOpen ? 'fas fa-times' : 'fas fa-bars';
      }
    });

    // Close menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileBtn.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
        mobileBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (navbar && !navbar.contains(e.target)) {
        navLinks.classList.remove('active');
        const icon = mobileBtn.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
        mobileBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ── Smooth anchor scroll ────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ── Chat Widget ─────────────────────────────────────────
  const isMobile = () => window.innerWidth <= 768;

  window.toggleChat = function () {
    const chatWidget = document.querySelector('.chat-widget');
    const chatBody   = document.getElementById('chat-body');
    const toggleIcon = document.getElementById('chat-toggle-icon');

    if (!chatWidget || !chatBody) return;

    if (isMobile()) {
      // Mobile: toggle fullscreen via class
      chatWidget.classList.toggle('mobile-open');
      const open = chatWidget.classList.contains('mobile-open');
      if (toggleIcon) toggleIcon.className = open ? 'fas fa-times' : 'fas fa-comments';
      document.body.style.overflow = open ? 'hidden' : '';
    } else {
      // Desktop: show/hide body
      const isHidden = chatBody.style.display === 'none' || !chatBody.style.display;
      chatBody.style.display = isHidden ? 'flex' : 'none';
      if (toggleIcon) {
        toggleIcon.className = isHidden ? 'fas fa-chevron-down' : 'fas fa-chevron-up';
      }
    }
  };

  // FAB button for mobile
  const fab = document.querySelector('.chat-toggle-fab');
  if (fab) {
    fab.addEventListener('click', () => {
      const chatWidget = document.querySelector('.chat-widget');
      if (chatWidget) {
        chatWidget.classList.add('mobile-open');
        const toggleIcon = document.getElementById('chat-toggle-icon');
        if (toggleIcon) toggleIcon.className = 'fas fa-times';
        document.body.style.overflow = 'hidden';
      }
    });
  }

  // ── Knowledge base for chatbot ─────────────────────────
  const knowledgeBase = {
    keywords: {
      about: {
        matches: ['about', 'company', 'who are you', 'startup', 'br innovation', 'brinno'],
        response: "BR Innovation & Technology is an AI educational robotics startup focused on building adaptive learning companions that support children's focus, emotions, and personalized learning experiences. We are based in Bangalore, India."
      },
      yani: {
        matches: ['yani', 'robot', 'ai companion', 'companion', 'product'],
        response: "YANI is our flagship adaptive AI companion — designed to support children through interactive learning, emotional engagement, and personalized educational experiences. YANI focuses on helping children develop better focus, emotional awareness, and love for learning."
      },
      services: {
        matches: ['services', 'solutions', 'products', 'offer', 'provide', 'do you'],
        response: "Our focus areas include:\n• Adaptive Learning Systems\n• Emotional Intelligence Support\n• Educational Robotics\n• AI Innovation & Development\n• STEM Learning Experiences\n\nVisit our Services page for more details!"
      },
      prototype: {
        matches: ['prototype', 'testing', 'development', 'stage', 'progress'],
        response: "We have successfully developed an early-stage YANI prototype and conducted testing with children and schools, achieving strong engagement and positive educational outcomes. We are actively improving the system."
      },
      founder: {
        matches: ['founder', 'leadership', 'team', 'bindu', 'ceo'],
        response: "BR Innovation & Technology was founded by Bindu R — a visionary entrepreneur with expertise in business management, marketing, and AI innovation. She is driving the company toward building accessible AI-powered learning systems for homes and schools across India."
      },
      contact: {
        matches: ['contact', 'email', 'phone', 'location', 'reach', 'address'],
        response: "You can reach us at:\n📧 contact@brinnoandtech.com\n📧 info@brinnoandtech.com\n📍 Bangalore, Karnataka, India\n🌐 brinnoandtech.com"
      },
      pricing: {
        matches: ['price', 'cost', 'pricing', 'how much', 'buy', 'purchase'],
        response: "For pricing and availability information, please reach out to us directly at contact@brinnoandtech.com. We'd love to discuss how YANI can support your school or family!"
      },
      hello: {
        matches: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening'],
        response: "Hello! 👋 I'm the YANI AI Assistant. I'm here to help you learn about BR Innovation & Technology and our AI educational robotics. What would you like to know?"
      },
      thanks: {
        matches: ['thank', 'thanks', 'appreciate', 'great', 'awesome', 'helpful'],
        response: "You're welcome! 😊 Feel free to ask anything else about BR Innovation & Technology or YANI. I'm happy to help!"
      }
    },
    defaultResponse: "Thank you for your message! 🤖 I'm not sure I have the exact answer, but I'd encourage you to contact us at contact@brinnoandtech.com or visit our Contact page for detailed inquiries. Is there anything else I can help with?"
  };

  function findBestMatch(input) {
    const lower = input.toLowerCase().trim();
    for (const key in knowledgeBase.keywords) {
      const entry = knowledgeBase.keywords[key];
      for (const match of entry.matches) {
        if (lower.includes(match)) return entry.response;
      }
    }
    return knowledgeBase.defaultResponse;
  }

  function addMessage(message, type) {
    const container = document.getElementById('chat-messages');
    if (!container) return;
    const div = document.createElement('div');
    div.className = `message ${type}`;
    div.textContent = message;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
  }

  function showTyping() {
    const container = document.getElementById('chat-messages');
    if (!container) return null;
    const div = document.createElement('div');
    div.className = 'message typing';
    div.id = 'typing-indicator';
    div.textContent = 'YANI is typing…';
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
    return div;
  }

  window.sendMessage = function () {
    const input = document.getElementById('chat-input');
    if (!input) return;
    const message = input.value.trim();
    if (!message) return;

    addMessage(message, 'sent');
    input.value = '';

    const typingEl = showTyping();
    const delay = 600 + Math.random() * 400;

    setTimeout(() => {
      if (typingEl) typingEl.remove();
      const response = findBestMatch(message);
      addMessage(response, 'received');
    }, delay);
  };

  window.handleKeyPress = function (event) {
    if (event.key === 'Enter') window.sendMessage();
  };

  // ── Marquee / Infinite scroll setup ────────────────────
  function setupMarquee() {
    const tracks = document.querySelectorAll('.scroll-track');
    tracks.forEach(track => {
      // Duplicate items for seamless loop if not already done
      const items = Array.from(track.children);
      if (items.length > 0 && !track.dataset.duplicated) {
        items.forEach(item => {
          const clone = item.cloneNode(true);
          clone.setAttribute('aria-hidden', 'true');
          track.appendChild(clone);
        });
        track.dataset.duplicated = 'true';
      }
    });
  }

  // ── Industries grid marquee (services page) ─────────────
  function setupIndustriesMarquee() {
    const grid = document.querySelector('.industries-grid');
    if (!grid) return;
    const items = Array.from(grid.children);
    if (items.length > 0 && !grid.dataset.duplicated) {
      items.forEach(item => {
        const clone = item.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        grid.appendChild(clone);
      });
      grid.dataset.duplicated = 'true';
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    setupMarquee();
    setupIndustriesMarquee();
  });

})();
