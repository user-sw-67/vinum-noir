document.addEventListener('DOMContentLoaded', () => {
  const wines = [
    {
      id: 1,
      category: 'red',
      title: 'Château Margaux Grand Vin 2018',
      region: 'Бордо, Франция',
      rating: 'RP 97',
      ratingTooltip: '97/100 баллов по шкале Роберта Паркера — выдающийся коллекционный винтаж',
      notes: 'Черная смородина, трюфель, благородный кедр и шелковистые танины.',
      tannin: 85,
      acidity: 65,
      temp: '16–18 °C',
      decant: '90 минут',
      aging: 'до 2045 г.',
      aromas: ['Черная смородина', 'Белый трюфель', 'Кедр', 'Фиалка', 'Графит'],
      pairing: 'Филе-миньон прожарки Medium Rare, каре ягненка с розмарином или выдержанный Конте.',
      oldPrice: '24 000 ₽',
      price: '18 000 ₽'
    },
    {
      id: 2,
      category: 'red',
      title: 'Barolo Riserva Borgogno 2017',
      region: 'Пьемонт, Италия',
      rating: 'WS 95',
      ratingTooltip: '95/100 Wine Spectator — эталонное Неббиоло из исторического поместья',
      notes: 'Сушеная вишня, лепестки роз, кожа и долгий пряный финиш.',
      tannin: 92,
      acidity: 78,
      temp: '17–18 °C',
      decant: '120 минут',
      aging: 'до 2040 г.',
      aromas: ['Увядшая роза', 'Дикая вишня', 'Трюфель', 'Табак', 'Лакрица'],
      pairing: 'Ризотто с белыми грибами, томленые телячьи щечки и пармезан 36 месяцев.',
      oldPrice: '16 800 ₽',
      price: '12 600 ₽'
    },
    {
      id: 3,
      category: 'white',
      title: 'Chablis Grand Cru Les Clos 2020',
      region: 'Бургундия, Франция',
      rating: 'RP 94',
      ratingTooltip: '94/100 Robert Parker — вершина терруара Шабли с устричной минеральностью',
      notes: 'Белый персик, морская минеральность, кремень и сливочный акцент.',
      tannin: 15,
      acidity: 88,
      temp: '10–12 °C',
      decant: '30 минут',
      aging: 'до 2034 г.',
      aromas: ['Белый персик', 'Морской бриз', 'Кремень', 'Цветы акации', 'Сливочное масло'],
      pairing: 'Королевские устрицы, морские гребешки на гриле и козий сыр Сент-Мор.',
      oldPrice: '14 400 ₽',
      price: '10 800 ₽'
    },
    {
      id: 4,
      category: 'sparkling',
      title: 'Champagne Billecart-Salmon Brut Rosé',
      region: 'Шампань, Франция',
      rating: 'WS 94',
      ratingTooltip: '94/100 Wine Spectator — культовое розе с тончайшим перляжем',
      notes: 'Дикая земляника, цедра цитрусовых и тончайший перляж.',
      tannin: 20,
      acidity: 85,
      temp: '8–9 °C',
      decant: 'Без декантации',
      aging: 'до 2030 г.',
      aromas: ['Лесная земляника', 'Красный апельсин', 'Миндальная бриошь', 'Белые цветы'],
      pairing: 'Тартар из дикого лосося, карпаччо из лангустинов или свежие ягоды.',
      oldPrice: '15 200 ₽',
      price: '11 400 ₽'
    },
    {
      id: 5,
      category: 'white',
      title: 'Cloudy Bay Sauvignon Blanc Reserve',
      region: 'Мальборо, Новая Зеландия',
      rating: 'RP 93',
      ratingTooltip: '93/100 Robert Parker — кюве с выдержкой во французских барриках',
      notes: 'Маракуйя, лист черной смородины, лайм и дубовая выдержка.',
      tannin: 10,
      acidity: 90,
      temp: '9–11 °C',
      decant: '15 минут',
      aging: 'до 2029 г.',
      aromas: ['Маракуйя', 'Цедра лайма', 'Лист смородины', 'Ваниль'],
      pairing: 'Севиче из сибаса, спаржа на гриле и мягкие козьи сыры.',
      oldPrice: '7 600 ₽',
      price: '5 700 ₽'
    },
    {
      id: 6,
      category: 'sparkling',
      title: 'Franciacorta Alma Gran Cuvée Bellavista',
      region: 'Ломбардия, Италия',
      rating: 'WS 92',
      ratingTooltip: '92/100 Wine Spectator — классический метод шампанизации в сердце Италии',
      notes: 'Печеное яблоко, бриошь, миндаль и освежающая структура.',
      tannin: 15,
      acidity: 82,
      temp: '8–10 °C',
      decant: 'Без декантации',
      aging: 'до 2029 г.',
      aromas: ['Печеное яблоко', 'Свежая бриошь', 'Белый миндаль', 'Груша дюшес'],
      pairing: 'Крудо из дорадо, прошутто крудо 24 мес. и легкие антипасти.',
      oldPrice: '8 400 ₽',
      price: '6 300 ₽'
    }
  ];

  const catalogGrid = document.getElementById('catalog-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  function renderCatalog(filter = 'all') {
    const filtered = filter === 'all' ? wines : wines.filter(w => w.category === filter);

    catalogGrid.innerHTML = filtered.map(wine => `
      <article class="wine-card">
        <div>
          <div class="wine-card__top">
            <span class="wine-card__region">${wine.region}</span>
            <span class="wine-card__rating" data-tooltip="${wine.ratingTooltip}">${wine.rating}</span>
          </div>
          <h3 class="wine-card__title">${wine.title}</h3>
          <p class="wine-card__notes">${wine.notes}</p>
          <div class="taste-profile">
            <div class="taste-bar" data-tooltip="Насыщенность тела и бархатистость танинов: ${wine.tannin}%">
              <span>Плотность</span>
              <div class="taste-bar__track">
                <div class="taste-bar__fill" style="width: ${wine.tannin}%"></div>
              </div>
            </div>
            <div class="taste-bar" data-tooltip="Природная кислотность и минеральная свежесть: ${wine.acidity}%">
              <span>Свежесть</span>
              <div class="taste-bar__track">
                <div class="taste-bar__fill" style="width: ${wine.acidity}%"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="wine-card__footer">
          <div class="wine-card__price-row">
            <span class="wine-card__old-price">Розница: ${wine.oldPrice}</span>
            <span class="wine-card__price">${wine.price} <small>по карте</small></span>
          </div>
          <div class="wine-card__actions">
            <button type="button" class="wine-card__btn wine-card__btn--ghost" data-wine-detail="${wine.id}">
              Паспорт вина
            </button>
            <button type="button" class="wine-card__btn" data-select-wine="${wine.title}">
              В резерв -25%
            </button>
          </div>
        </div>
      </article>
    `).join('');
  }

  renderCatalog();

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      renderCatalog(btn.dataset.filter);
    });
  });

  const selectedWineBanner = document.getElementById('selected-wine-banner');
  const selectedWineName = document.getElementById('selected-wine-name');
  const ctaSection = document.getElementById('club-cta');

  function selectWineForCta(wineTitle) {
    closeAllModals();
    selectedWineName.textContent = wineTitle;
    selectedWineBanner.hidden = false;
    ctaSection.scrollIntoView({ behavior: 'smooth' });
  }

  catalogGrid.addEventListener('click', (e) => {
    const reserveBtn = e.target.closest('[data-select-wine]');
    if (reserveBtn) {
      selectWineForCta(reserveBtn.dataset.selectWine);
      return;
    }

    const detailBtn = e.target.closest('[data-wine-detail]');
    if (detailBtn) {
      const wineId = Number(detailBtn.dataset.wineDetail);
      const wine = wines.find(w => w.id === wineId);
      if (wine) openWineDetailModal(wine);
    }
  });

  function openWineDetailModal(wine) {
    document.getElementById('detail-wine-region').textContent = wine.region;
    document.getElementById('detail-wine-rating').textContent = wine.rating;
    document.getElementById('detail-wine-title').textContent = wine.title;
    document.getElementById('detail-wine-notes').textContent = wine.notes;
    document.getElementById('detail-wine-temp').textContent = wine.temp;
    document.getElementById('detail-wine-decant').textContent = wine.decant;
    document.getElementById('detail-wine-aging').textContent = wine.aging;
    document.getElementById('detail-wine-pairing').textContent = wine.pairing;
    document.getElementById('detail-wine-oldprice').textContent = `Розница: ${wine.oldPrice}`;
    document.getElementById('detail-wine-price').textContent = `${wine.price} по карте клуба`;

    const aromasBox = document.getElementById('detail-wine-aromas');
    aromasBox.innerHTML = wine.aromas.map(a => `<span class="aroma-tag">${a}</span>`).join('');

    const reserveBtn = document.getElementById('detail-reserve-btn');
    reserveBtn.onclick = () => selectWineForCta(wine.title);

    openModalById('modal-wine-detail');
  }

  const ritualProfiles = {
    bordeaux: {
      baseTemp: 17,
      baseDecant: 45,
      glassName: 'Bordeaux Grand Cru',
      bowlPath: 'M55 40 H165 L175 115 C175 155 145 175 110 175 C75 175 45 155 45 115 Z',
      fillPath: 'M48 118 C48 152 76 172 110 172 C144 172 172 152 172 118 Z',
      youngColor: '#8a1c36',
      agedColor: '#691e14'
    },
    burgundy: {
      baseTemp: 15,
      baseDecant: 25,
      glassName: 'Burgundy Balloon',
      bowlPath: 'M62 45 H158 L184 115 C184 160 148 175 110 175 C72 175 36 160 36 115 Z',
      fillPath: 'M40 122 C42 156 74 172 110 172 C146 172 178 156 180 122 Z',
      youngColor: '#a4133c',
      agedColor: '#7a2822'
    },
    white_grand: {
      baseTemp: 11,
      baseDecant: 20,
      glassName: 'Montrachet White',
      bowlPath: 'M65 50 H155 L166 115 C166 150 140 175 110 175 C80 175 54 150 54 115 Z',
      fillPath: 'M57 120 C58 148 82 172 110 172 C138 172 162 148 163 120 Z',
      youngColor: '#e9d885',
      agedColor: '#d4a237'
    },
    champagne: {
      baseTemp: 9,
      baseDecant: 0,
      glassName: 'Tulip Millésime',
      bowlPath: 'M82 40 H138 L148 110 C148 148 130 175 110 175 C90 175 72 148 72 110 Z',
      fillPath: 'M75 108 C76 144 92 172 110 172 C128 172 144 144 145 108 Z',
      youngColor: '#f3df99',
      agedColor: '#deb252'
    }
  };

  let currentRitualStyle = 'bordeaux';
  const styleBtns = document.querySelectorAll('.ritual-style-btn');
  const vintageRange = document.getElementById('vintage-age');
  const vintageAgeVal = document.getElementById('vintage-age-val');
  const ritualTemp = document.getElementById('ritual-temp');
  const ritualDecant = document.getElementById('ritual-decant');
  const ritualGlass = document.getElementById('ritual-glass');
  const ritualStatus = document.getElementById('ritual-status');
  const ritualAdvice = document.getElementById('ritual-advice');
  const svgBowl = document.getElementById('svg-glass-bowl');
  const svgFill = document.getElementById('svg-wine-fill');

  function updateRitualLab() {
    const age = Number(vintageRange.value);
    const year = 2026 - age;
    const profile = ritualProfiles[currentRitualStyle];

    vintageAgeVal.textContent = `${age} лет (${year} г.)`;
    svgBowl.setAttribute('d', profile.bowlPath);
    svgFill.setAttribute('d', profile.fillPath);
    svgFill.setAttribute('fill', age > 12 ? profile.agedColor : profile.youngColor);

    const temp = age > 10 ? profile.baseTemp + 1 : profile.baseTemp;
    let decant = profile.baseDecant;

    if (currentRitualStyle === 'champagne') {
      decant = age >= 12 ? 15 : 0;
    } else if (age <= 5) {
      decant = profile.baseDecant + 30;
    } else if (age >= 18) {
      decant = Math.max(15, profile.baseDecant - 20);
    } else {
      decant = profile.baseDecant + 15;
    }

    ritualTemp.textContent = `${temp} °C`;
    ritualDecant.textContent = decant === 0 ? 'В бокале' : `${decant} мин`;
    ritualGlass.textContent = profile.glassName;

    if (age <= 5) {
      ritualStatus.textContent = 'Молодой экспрессивный винтаж';
      ritualAdvice.textContent = 'Молодым танинам нужен активный контакт с кислородом: используйте широкий декантер для раскрытия первичных ягодных и цветочных нот.';
    } else if (age <= 16) {
      ritualStatus.textContent = 'Пик благородной зрелости';
      ritualAdvice.textContent = 'Баланс кислотности и третичных ароматов (трюфель, специи, тосты) находится на пике. Рекомендуется бережная аэрация перед подачей.';
    } else {
      ritualStatus.textContent = 'Коллекционный раритет';
      ritualAdvice.textContent = 'Деликатная структура старого винтажа: снимите вино с осадка при свече непосредственно перед подачей и не оставляйте надолго в широком декантере.';
    }
  }

  styleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      styleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentRitualStyle = btn.dataset.style;
      updateRitualLab();
    });
  });

  vintageRange.addEventListener('input', updateRitualLab);
  updateRitualLab();

  const tooltipEl = document.getElementById('smart-tooltip');
  let activeTooltipTarget = null;

  function showTooltip(target) {
    const text = target.getAttribute('data-tooltip');
    if (!text) return;

    const vw = document.documentElement.clientWidth;
    tooltipEl.style.maxWidth = `${Math.min(260, vw - 20)}px`;
    tooltipEl.textContent = text;
    tooltipEl.classList.add('visible');
    tooltipEl.setAttribute('aria-hidden', 'false');

    const rect = target.getBoundingClientRect();
    const tipRect = tooltipEl.getBoundingClientRect();
    const margin = 10;

    let top = rect.top - tipRect.height - 8;
    if (top < margin) {
      top = rect.bottom + 8;
    }

    let left = rect.left + (rect.width / 2) - (tipRect.width / 2);
    left = Math.max(margin, Math.min(left, vw - tipRect.width - margin));

    tooltipEl.style.top = `${top}px`;
    tooltipEl.style.left = `${left}px`;
  }

  function hideTooltip() {
    tooltipEl.classList.remove('visible');
    tooltipEl.setAttribute('aria-hidden', 'true');
    activeTooltipTarget = null;
  }

  document.addEventListener('mouseover', (e) => {
    const target = e.target.closest('[data-tooltip]');
    if (target) {
      activeTooltipTarget = target;
      showTooltip(target);
    }
  });

  document.addEventListener('mouseout', (e) => {
    const target = e.target.closest('[data-tooltip]');
    if (target && target === activeTooltipTarget) {
      hideTooltip();
    }
  });

  document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-tooltip]');
    if (target) {
      showTooltip(target);
    } else {
      hideTooltip();
    }
  });

  window.addEventListener('scroll', hideTooltip, { passive: true });
  window.addEventListener('resize', hideTooltip, { passive: true });

  const navDropdown = document.getElementById('nav-dropdown');
  const navDropdownToggle = navDropdown.querySelector('.nav__dropdown-toggle');

  navDropdownToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = navDropdown.classList.toggle('open');
    navDropdownToggle.setAttribute('aria-expanded', String(isOpen));
  });

  const customSelects = document.querySelectorAll('[data-custom-select]');

  customSelects.forEach(selectBox => {
    const trigger = selectBox.querySelector('.custom-select__trigger');
    const valueSpan = selectBox.querySelector('.custom-select__value');
    const hiddenInput = selectBox.querySelector('input[type="hidden"]');
    const options = selectBox.querySelectorAll('.custom-select__option');

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      customSelects.forEach(other => {
        if (other !== selectBox) other.classList.remove('open');
      });
      const isOpen = selectBox.classList.toggle('open');
      trigger.setAttribute('aria-expanded', String(isOpen));
    });

    options.forEach(opt => {
      opt.addEventListener('click', () => {
        options.forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
        const mainLabel = opt.querySelector('span').textContent;
        valueSpan.textContent = mainLabel;
        hiddenInput.value = opt.dataset.value;
        selectBox.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
      });
    });
  });

  document.addEventListener('click', () => {
    navDropdown.classList.remove('open');
    navDropdownToggle.setAttribute('aria-expanded', 'false');
    customSelects.forEach(s => s.classList.remove('open'));
  });

  const quizSteps = [
    {
      question: '1. Для какого повода подбираем вино?',
      options: [
        { title: 'Особый ужин', sub: 'Гастрономическое сопровождение', tag: 'dinner' },
        { title: 'Романтический вечер', sub: 'Тонкое и чувственное настроение', tag: 'romance' },
        { title: 'Статусный подарок', sub: 'Редкий винтаж в коллекцию', tag: 'gift' },
        { title: 'Вечер с друзьями', sub: 'Яркое и питкое настроение', tag: 'party' }
      ]
    },
    {
      question: '2. Какие ноты во вкусе вам ближе?',
      options: [
        { title: 'Спелые темные ягоды и дуб', sub: 'Бархатистое, глубокое послевкусие', tag: 'bold_red' },
        { title: 'Цитрусы, персик и минералы', sub: 'Хрустящая свежесть и легкость', tag: 'crisp_white' },
        { title: 'Ягодный мусс и бриошь', sub: 'Игристые пузырьки и утонченность', tag: 'sparkling' },
        { title: 'Пряности, трюфель и вишня', sub: 'Сложные выдержанные вина', tag: 'aged' }
      ]
    },
    {
      question: '3. Какую кухню планируете к подаче?',
      options: [
        { title: 'Стейк, утка или каре ягненка', sub: 'Мясная классика', tag: 'meat' },
        { title: 'Устрицы, гребешки или рыба', sub: 'Морепродукты', tag: 'seafood' },
        { title: 'Выдержанные сыры и антипасти', sub: 'Винная тарелка', tag: 'cheese' },
        { title: 'Без гастрономии (соло)', sub: 'Самодостаточный букет', tag: 'solo' }
      ]
    }
  ];

  const quizRecommendations = {
    bold_red: {
      title: 'Château Margaux Grand Vin 2018',
      desc: 'Идеальное попадание 98%: благородное Бордо с нотами черной смородины, кедра и долгим бархатным послевкусием.'
    },
    crisp_white: {
      title: 'Chablis Grand Cru Les Clos 2020',
      desc: 'Совпадение 97%: эталонное бургундское Шардоне с морской минеральностью, нотами белого персика и сливочной текстурой.'
    },
    sparkling: {
      title: 'Champagne Billecart-Salmon Brut Rosé',
      desc: 'Совпадение 99%: легендарное розовое шампанское с ароматом лесной земляники и утонченным перляжем.'
    },
    aged: {
      title: 'Barolo Riserva Borgogno 2017',
      desc: 'Совпадение 96%: аристократичный Пьемонт с тонами трюфеля, вишни и лепестков увядшей розы.'
    }
  };

  let currentStep = 0;
  let chosenProfile = 'bold_red';

  const quizContainer = document.getElementById('quiz-container');
  const progressBar = document.getElementById('quiz-progress-bar');
  const stepIndicator = document.getElementById('quiz-step-indicator');

  function renderQuizStep() {
    if (currentStep < quizSteps.length) {
      const stepData = quizSteps[currentStep];
      progressBar.style.width = `${((currentStep + 1) / quizSteps.length) * 100}%`;
      stepIndicator.textContent = `Шаг ${currentStep + 1} из ${quizSteps.length}`;

      quizContainer.innerHTML = `
        <div class="quiz-step">
          <h3 class="quiz-step__question">${stepData.question}</h3>
          <div class="quiz-options">
            ${stepData.options.map(opt => `
              <button type="button" class="quiz-option-btn" data-tag="${opt.tag}">
                <strong>${opt.title}</strong>
                <span>${opt.sub}</span>
              </button>
            `).join('')}
          </div>
        </div>
      `;
    } else {
      const rec = quizRecommendations[chosenProfile] || quizRecommendations.bold_red;
      stepIndicator.textContent = 'Подбор завершен!';
      quizContainer.innerHTML = `
        <div class="quiz-result">
          <span class="quiz-result__match">Персональная рекомендация сомелье</span>
          <h3 class="quiz-result__title">${rec.title}</h3>
          <p class="quiz-result__desc">${rec.desc}</p>
          <div class="quiz-result__actions">
            <button type="button" class="btn btn--primary" id="apply-quiz-wine" data-wine="${rec.title}">
              Забрать со скидкой 25% в клубе
            </button>
            <button type="button" class="btn btn--ghost" id="reset-quiz">
              Пройти заново
            </button>
          </div>
        </div>
      `;
    }
  }

  quizContainer.addEventListener('click', (e) => {
    const optionBtn = e.target.closest('.quiz-option-btn');
    if (optionBtn) {
      if (currentStep === 1) chosenProfile = optionBtn.dataset.tag;
      currentStep++;
      renderQuizStep();
    }

    const applyBtn = e.target.closest('#apply-quiz-wine');
    if (applyBtn) selectWineForCta(applyBtn.dataset.wine);

    if (e.target.closest('#reset-quiz')) {
      currentStep = 0;
      renderQuizStep();
    }
  });

  renderQuizStep();

  const burgerBtn = document.getElementById('burger-btn');
  const navMenu = document.getElementById('nav-menu');

  function closeMobileMenu() {
    burgerBtn.classList.remove('active');
    burgerBtn.setAttribute('aria-expanded', 'false');
    navMenu.classList.remove('open');
    document.body.classList.remove('no-scroll');
  }

  burgerBtn.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    burgerBtn.classList.toggle('active', isOpen);
    burgerBtn.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('no-scroll', isOpen);
  });

  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 960 && navMenu.classList.contains('open')) {
      closeMobileMenu();
    }
  });

  const modals = document.querySelectorAll('.modal');

  function openModalById(id) {
    closeMobileMenu();
    modals.forEach(m => {
      m.classList.remove('open');
      m.setAttribute('aria-hidden', 'true');
    });
    const targetModal = document.getElementById(id);
    if (targetModal) {
      targetModal.classList.add('open');
      targetModal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('no-scroll');
    }
  }

  function closeAllModals() {
    modals.forEach(m => {
      m.classList.remove('open');
      m.setAttribute('aria-hidden', 'true');
    });
    document.body.classList.remove('no-scroll');
  }

  document.querySelectorAll('[data-open-modal]').forEach(btn => {
    btn.addEventListener('click', () => openModalById(btn.dataset.openModal));
  });

  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', closeAllModals);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllModals();
  });

  /* Счетчик гостей */
  let guests = 2;
  const guestCountEl = document.getElementById('guest-count');
  document.getElementById('guest-minus').addEventListener('click', () => {
    if (guests > 1) {
      guests--;
      guestCountEl.textContent = `${guests} ${guests === 1 ? 'персона' : guests < 5 ? 'персоны' : 'персон'}`;
    }
  });
  document.getElementById('guest-plus').addEventListener('click', () => {
    if (guests < 8) {
      guests++;
      guestCountEl.textContent = `${guests} ${guests < 5 ? 'персоны' : 'персон'}`;
    }
  });

  /* ==========================================================================
     7. МАСКА ТЕЛЕФОНА, ТАРИФЫ И ОТПРАВКА ФОРМ
     ========================================================================== */
  const tierCards = document.querySelectorAll('.tier-card');
  tierCards.forEach(card => {
    card.addEventListener('click', () => {
      tierCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    });
  });

  const phoneInputs = document.querySelectorAll('input[type="tel"]');
  phoneInputs.forEach(input => {
    input.addEventListener('input', (e) => {
      let digits = e.target.value.replace(/\D/g, '');
      if (!digits) {
        e.target.value = '';
        return;
      }
      if (digits[0] === '8' || digits[0] === '7') {
        digits = '7' + digits.slice(1);
      } else {
        digits = '7' + digits;
      }
      digits = digits.slice(0, 11);

      let formatted = '+7';
      if (digits.length > 1) formatted += ' (' + digits.slice(1, 4);
      if (digits.length >= 5) formatted += ') ' + digits.slice(4, 7);
      if (digits.length >= 8) formatted += '-' + digits.slice(7, 9);
      if (digits.length >= 10) formatted += '-' + digits.slice(9, 11);

      e.target.value = formatted;
    });
  });

  const mainForm = document.getElementById('main-cta-form');
  const formSuccess = document.getElementById('form-success');

  mainForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('user-name');
    const phoneInput = document.getElementById('user-phone');
    let valid = true;

    if (nameInput.value.trim().length < 2) {
      nameInput.parentElement.classList.add('invalid');
      valid = false;
    } else {
      nameInput.parentElement.classList.remove('invalid');
    }

    if (phoneInput.value.replace(/\D/g, '').length < 11) {
      phoneInput.parentElement.classList.add('invalid');
      valid = false;
    } else {
      phoneInput.parentElement.classList.remove('invalid');
    }

    if (valid) {
      formSuccess.hidden = false;
      mainForm.reset();
    }
  });

  const modalClubForm = document.getElementById('modal-club-form');
  const modalClubSuccess = document.getElementById('modal-club-success');
  modalClubForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const mName = document.getElementById('modal-name');
    const mPhone = document.getElementById('modal-phone');
    if (mName.value.trim().length >= 2 && mPhone.value.replace(/\D/g, '').length === 11) {
      modalClubSuccess.hidden = false;
      modalClubForm.reset();
      setTimeout(closeAllModals, 2400);
    }
  });

  const modalTastingForm = document.getElementById('modal-tasting-form');
  const modalTastingSuccess = document.getElementById('modal-tasting-success');
  modalTastingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const tPhone = document.getElementById('tasting-phone');
    if (tPhone.value.replace(/\D/g, '').length === 11) {
      modalTastingSuccess.hidden = false;
      modalTastingForm.reset();
      setTimeout(closeAllModals, 2400);
    }
  });

  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach(el => revealObserver.observe(el));

  const counters = document.querySelectorAll('.stat-item__num');
  const counterObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10);
        let current = 0;
        const step = Math.max(1, Math.ceil(target / 40));

        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            el.textContent = target;
            clearInterval(timer);
          } else {
            el.textContent = current;
          }
        }, 25);

        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => counterObserver.observe(c));
});