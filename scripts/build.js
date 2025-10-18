const fs = require('fs');
const path = require('path');

class SiteBuilder {
  constructor() {
    this.contentDir = path.join(__dirname, '../content');
    this.outputDir = path.join(__dirname, '../JYACS-web-main');
  }

  readContent(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(content);
    } catch (error) {
      console.error(`读取文件失败: ${filePath}`, error.message);
      return null;
    }
  }

  readGlobalConfig() {
    const navigation = this.readContent(path.join(this.contentDir, 'global/navigation.json'));
    const settings = this.readContent(path.join(this.contentDir, 'global/settings.json'));
    return { navigation, settings };
  }

  renderRichText(richText) {
    if (!richText || !richText.children) return '';
    return richText.children.map(node => {
      if (node.type === 'p') {
        const text = node.children.map(child => child.text || '').join('');
        return `<p>${text}</p>`;
      }
      return '';
    }).join('');
  }

  generateHTML(pageData, globalConfig) {
    const nav = this.generateNavigation(globalConfig.navigation);
    const hero = pageData.hero ? this.generateHero(pageData.hero) : '';
    const blocks = pageData.blocks ? pageData.blocks.map(b => this.generateBlock(b)).join('\n') : '';
    const footer = this.generateFooter(globalConfig.navigation);

    return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${pageData.title} | ${globalConfig.settings.siteTitle}</title>
    <meta name="description" content="${pageData.description || ''}">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/bookshop.css">
    <script src="/assets/js/main.js" defer></script>
    <link href="https://fonts.bunny.net/css2?family=Lato:wght@400;700" rel="stylesheet">
</head>
<body>
    ${nav}
    <main id="main">
        ${hero}
        ${blocks}
    </main>
    ${footer}
</body>
</html>`;
  }

  generateNavigation(nav) {
    const menuItems = nav.menuItems.map(item => 
      `<li class="c-navigation__navlist__item"><a class="c-navigation__navlist__item__link" href="${item.url}">${item.text}</a></li>`
    ).join('');

    return `<header class="c-header">
  <nav class="c-navigation c-navigation--close c-navigation--secondary0" aria-label="Main menu" id="main-menu">
    <div class="c-navigation__contents">
      <div class="c-navigation__logo-block">
        <a class="c-navigation__logo-link" href="/" aria-label="Home">
          <img src="${nav.logo}" alt="Logo" class="c-image" width="346" height="99">
        </a>
        <button class="c-navigation__burger-menu" id="main-menu-toggle" aria-label="Menu">
          <div class="c-navigation__burger-menu__burger"></div>
        </button>
      </div>
      <div class="c-navigation__navlist--wrapper c-navigation__navlist--wrapper-desktop">
        <div class="c-navigation__navlist--overflow">
          <ul class="c-navigation__navlist">${menuItems}</ul>
        </div>
      </div>
    </div>
  </nav>
</header>`;
  }

  generateHero(hero) {
    const desc = this.renderRichText(hero.description);
    return `<section class="c-hero component component--secondary0">
  ${hero.image ? `<img src="${hero.image}" alt="${hero.heading}" class="c-image">` : ''}
  <div class="c-hero__content">
    <div class="component__heading c-hero__heading">
      <header class="c-heading">
        <h1 class="c-heading__primary_heading">${hero.heading}</h1>
        ${hero.eyebrow ? `<h2 class="c-heading__eyebrow_heading">${hero.eyebrow}</h2>` : ''}
      </header>
      ${desc ? `<div class="c-text-block">${desc}</div>` : ''}
    </div>
    ${hero.button && hero.button.text ? `<div class="c-hero__content__button">
      <a href="${hero.button.url}" class="c-button c-button--primary">${hero.button.text}</a>
    </div>` : ''}
  </div>
</section>`;
  }

  generateBlock(block) {
    switch (block._template) {
      case 'leftRightBlock': return this.generateLeftRightBlock(block);
      case 'priceList': return this.generatePriceList(block);
      case 'cardGrid': return this.generateCardGrid(block);
      case 'testimonial': return this.generateTestimonial(block);
      case 'form': return this.generateForm(block);
      default: return '';
    }
  }

  generateLeftRightBlock(block) {
    const desc = this.renderRichText(block.description);
    return `<section class="c-left-right-block--simple">
  <div class="c-left-right-block component c-left-right-block--${block.imageAlignment || 'left'}">
    <div class="c-left-right-block__content">
      <header class="c-heading">
        <h2 class="c-heading__primary_heading">${block.heading}</h2>
      </header>
      ${desc ? `<div class="c-text-block">${desc}</div>` : ''}
    </div>
    ${block.image ? `<div class="c-left-right-block__media"><img src="${block.image}" alt="${block.heading}" class="c-image"></div>` : ''}
  </div>
</section>`;
  }

  generateTestimonial(block) {
    return `<section class="c-left-right-block--testimonial">
  <div class="c-left-right-block component c-left-right-block--${block.imageAlignment || 'right'}">
    <div class="c-left-right-block__content">
      <header class="c-heading">
        <h2 class="c-heading__primary_heading">&ldquo;${block.quote}&rdquo;</h2>
      </header>
      <div class="c-text-block"><p>${block.authorName}</p></div>
    </div>
    ${block.image ? `<div class="c-left-right-block__media"><img src="${block.image}" alt="${block.authorName}" class="c-image"></div>` : ''}
  </div>
</section>`;
  }

  generatePriceList(block) {
    const desc = this.renderRichText(block.description);
    const lists = block.lists.map(list => `
      <h4 class="c-price-list__lists__list__heading">${list.heading}</h4>
      <ul class="c-price-list__lists__list">
        ${list.items.map(item => `<li class="c-price-list__lists__list__item">
          <p class="c-price-list__lists__list__item__label">${item.label}</p>
          <span class="c-price-list__lists__list__item__seperator"></span>
          <p class="c-price-list__lists__list__item__detail">${item.price}</p>
        </li>`).join('')}
      </ul>
    `).join('');

    return `<section id="services" class="c-price-list component component--primary">
  <div class="component__heading c-price-list__heading">
    <header class="c-heading"><h2 class="c-heading__primary_heading">${block.heading}</h2></header>
    ${desc ? `<div class="c-text-block">${desc}</div>` : ''}
  </div>
  <div class="c-price-list__lists">${lists}</div>
</section>`;
  }

  generateCardGrid(block) {
    const desc = this.renderRichText(block.description);
    const cards = block.cards.map(card => {
      const cardDesc = this.renderRichText(card.description);
      return `<div class="c-card component c-card--image component--primary">
        ${card.image ? `<div class="c-card__imagery"><img src="${card.image}" alt="${card.heading}" class="c-image"></div>` : ''}
        <div class="c-card__content-wrapper">
          <header class="c-heading"><h4 class="c-heading__primary_heading">${card.heading}</h4></header>
          <div class="c-card__content"><div class="c-text-block">${cardDesc}</div></div>
        </div>
      </div>`;
    }).join('');

    return `<section class="c-card-grid component component--secondary0">
  <div class="component__heading c-card-grid__heading">
    <header class="c-heading"><h2 class="c-heading__primary_heading">${block.heading}</h2></header>
    ${desc ? `<div class="c-text-block">${desc}</div>` : ''}
  </div>
  <div class="c-card-grid__grid">${cards}</div>
</section>`;
  }

  generateForm(block) {
    const desc = this.renderRichText(block.description);
    const fields = block.fields.map(field => {
      const id = `field-${Math.random().toString(36).substr(2, 9)}`;
      if (field.type === 'textarea') {
        return `<div class="c-text-area-input">
          <label for="${id}">${field.label}${field.required ? ' *' : ''}</label>
          <textarea id="${id}" name="${field.label}" placeholder="${field.placeholder || ''}" ${field.required ? 'required' : ''}></textarea>
        </div>`;
      }
      return `<div class="c-${field.type}-input">
        <label for="${id}">${field.label}${field.required ? ' *' : ''}</label>
        <input type="${field.type}" id="${id}" name="${field.label}" placeholder="${field.placeholder || ''}" ${field.required ? 'required' : ''}>
      </div>`;
    }).join('');

    return `<section id="${block.formId || 'form'}" class="c-form component component--primary">
  <div class="component__heading c-form__heading">
    <header class="c-heading"><h2 class="c-heading__primary_heading">${block.heading}</h2></header>
    ${desc ? `<div class="c-text-block">${desc}</div>` : ''}
  </div>
  <div class="c-form__form">
    <form class="c-form-builder" method="post">
      ${fields}
      <div class="c-form-builder__submit-button">
        <button class="c-button c-button--primary">${block.submitText || 'Submit'}</button>
      </div>
    </form>
  </div>
</section>`;
  }

  generateFooter(nav) {
    const menuItems = nav.menuItems.map(item => 
      `<li class="c-footer__navlist__item"><a class="c-footer__navlist__item__link" href="${item.url}">${item.text}</a></li>`
    ).join('');

    return `<footer class="c-footer">
  <a class="c-footer__logo-link" href="/"><img src="${nav.logo}" alt="Logo" class="c-image"></a>
  <div class="c-footer__navlist--wrapper">
    <ul class="c-footer__navlist">${menuItems}</ul>
  </div>
  <div class="c-footer__content"><p>&copy; ${new Date().getFullYear()} JYACS</p></div>
</footer>`;
  }

  build() {
    console.log('🚀 开始构建...\n');
    const globalConfig = this.readGlobalConfig();
    const pages = [
      { name: 'index', path: '' },
      { name: 'booking', path: 'booking' },
      { name: 'contact', path: 'contact' }
    ];
    
    pages.forEach(page => {
      const contentPath = path.join(this.contentDir, 'pages', `${page.name}.json`);
      const pageData = this.readContent(contentPath);
      if (!pageData) return;
      
      const html = this.generateHTML(pageData, globalConfig);
      const outputPath = page.path === '' 
        ? path.join(this.outputDir, 'index.html')
        : path.join(this.outputDir, page.path, 'index.html');
      
      fs.mkdirSync(path.dirname(outputPath), { recursive: true });
      fs.writeFileSync(outputPath, html, 'utf-8');
      console.log(`✅ ${page.name}`);
    });
    
    console.log('\n🎉 完成！');
  }
}

if (require.main === module) {
  new SiteBuilder().build();
}

module.exports = SiteBuilder;
