const apps = [
  {
    id: "6788188857",
    category: { ko: "라이프스타일", en: "Lifestyle" },
    name: { ko: "자기 전 30분", en: "Before Bed 30" },
    label: { ko: "취침 타이머", en: "Bedtime timer" },
    description: { ko: "잠들기 전 화면 시간을 정리하는 작은 취침 타이머.", en: "A small bedtime timer for closing out your last 30 minutes." },
    link: "https://apps.apple.com/kr/app/%EC%9E%90%EA%B8%B0-%EC%A0%84-30%EB%B6%84-%EC%B7%A8%EC%B9%A8-%ED%83%80%EC%9D%B4%EB%A8%B8/id6788188857?uo=4"
  },
  {
    id: "6787325055",
    category: { ko: "사진·영상", en: "Photo & Video" },
    name: { ko: "PetSticker", en: "PetSticker" },
    label: { ko: "반려동물 사진 편집", en: "Pet photo editor" },
    description: { ko: "반려동물 사진을 귀여운 스티커로 만드는 편집 앱.", en: "Turn your favorite pet photos into playful stickers." },
    link: "https://apps.apple.com/kr/app/petsticker-pet-photo-edit/id6787325055?uo=4"
  },
  {
    id: "6787322255",
    category: { ko: "음식·음료", en: "Food & Drink" },
    name: { ko: "BarCart", en: "BarCart" },
    label: { ko: "술 컬렉션", en: "Drink collection" },
    description: { ko: "사진과 상태로 좋아하는 술을 기록하는 개인 컬렉션.", en: "Track the drinks you love by photo, status, and memory." },
    link: "https://apps.apple.com/kr/app/barcart-%EC%88%A0-%EC%BB%AC%EB%A0%89%EC%85%98/id6787322255?uo=4"
  },
  {
    id: "6786163616",
    category: { ko: "사진·영상", en: "Photo & Video" },
    name: { ko: "FanCut", en: "FanCut" },
    label: { ko: "사진 스티커", en: "Photo sticker maker" },
    description: { ko: "사진 배경을 지우고 투명 PNG 스티커를 만드는 앱.", en: "Remove backgrounds and turn photos into clean PNG stickers." },
    link: "https://apps.apple.com/kr/app/fancut-%EC%82%AC%EC%A7%84-%EC%8A%A4%ED%8B%B0%EC%BB%A4/id6786163616?uo=4"
  },
  {
    id: "6785823041",
    category: { ko: "생산성", en: "Productivity" },
    name: { ko: "Loopin", en: "Loopin" },
    label: { ko: "루틴 트래커", en: "Routine tracker" },
    description: { ko: "매일 반복하는 루틴과 습관을 가볍게 기록하는 트래커.", en: "A gentle tracker for the routines and habits you repeat every day." },
    link: "https://apps.apple.com/kr/app/loopin-%EB%A3%A8%ED%8B%B4-%ED%8A%B8%EB%9E%98%EC%BB%A4/id6785823041?uo=4"
  },
  {
    id: "6785042023",
    category: { ko: "그래픽·디자인", en: "Graphics & Design" },
    name: { ko: "DesignSense", en: "DesignSense" },
    label: { ko: "디자인 눈썰미 게임", en: "Design eye game" },
    description: { ko: "중심, 간격, 정렬 같은 1~3px의 차이를 맞혀보는 게임.", en: "Test your eye for the tiny differences designers notice." },
    link: "https://apps.apple.com/kr/app/designsense-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%84%BC%EC%8A%A4/id6785042023?uo=4"
  },
  {
    id: "6780751303",
    category: { ko: "라이프스타일", en: "Lifestyle" },
    name: { ko: "DayBlocks", en: "DayBlocks" },
    label: { ko: "데일리 플래너", en: "Daily planner" },
    description: { ko: "계획하고, 실행하고, 돌아보는 PDS 기반 하루 플래너.", en: "Plan, do, and see your day with a time-blocked planner." },
    link: "https://apps.apple.com/kr/app/dayblocks-daily-planner/id6780751303?uo=4"
  },
  {
    id: "6780402763",
    category: { ko: "사진·영상", en: "Photo & Video" },
    name: { ko: "베이비 스티커", en: "Baby Sticker" },
    label: { ko: "아기 사진 꾸미기", en: "Baby photo editor" },
    description: { ko: "아기 사진으로 귀엽고 사랑스러운 스티커를 만드는 앱.", en: "Make sweet, shareable stickers from your baby's photos." },
    link: "https://apps.apple.com/kr/app/%EB%B2%A0%EC%9D%B4%EB%B9%84-%EC%8A%A4%ED%8B%B0%EC%BB%A4-%EC%95%84%EA%B8%B0-%EC%82%AC%EC%A7%84-%EA%BE%B8%EB%AF%B8%EA%B8%B0/id6780402763?uo=4"
  },
  {
    id: "6775886200",
    category: { ko: "라이프스타일", en: "Lifestyle" },
    name: { ko: "마지막 통화", en: "Last Call" },
    label: { ko: "연락 기록", en: "Call reminder" },
    description: { ko: "소중한 사람에게 다시 연락할 순간을 가볍게 기억하는 앱.", en: "A quiet reminder to reconnect with the people you care about." },
    link: "https://apps.apple.com/kr/app/%EB%A7%88%EC%A7%80%EB%A7%89-%ED%86%B5%ED%99%94/id6775886200?uo=4"
  },
  {
    id: "6772423427",
    category: { ko: "라이프스타일", en: "Lifestyle" },
    name: { ko: "잔잔", en: "Janjan" },
    label: { ko: "혼술 공간 추천", en: "Solo drink spots" },
    description: { ko: "혼자 조용히 한 잔하고 싶은 날, 나에게 맞는 공간을 찾는 앱.", en: "Find a calm place for a drink when you want some time alone." },
    link: "https://apps.apple.com/kr/app/%EC%9E%94%EC%9E%94-%ED%98%BC%EC%88%A0%EB%9F%AC%EB%A5%BC-%EC%9C%84%ED%95%9C-%EC%95%B1/id6772423427?uo=4"
  },
  {
    id: "6756998433",
    category: { ko: "생산성", en: "Productivity" },
    name: { ko: "TapPaste", en: "TapPaste" },
    label: { ko: "클립보드 매니저", en: "Clipboard manager" },
    description: { ko: "자주 쓰는 문구를 저장하고 어디서든 빠르게 붙여넣는 앱.", en: "Save your frequently used text and paste it wherever you need it." },
    link: "https://apps.apple.com/kr/app/tappaste/id6756998433?uo=4"
  },
  {
    id: "6740836985",
    category: { ko: "라이프스타일", en: "Lifestyle" },
    name: { ko: "리데이", en: "ReDay" },
    label: { ko: "커플 디데이", en: "Couple date tracker" },
    description: { ko: "다시 만난 날과 둘만의 기념일을 오래 기억하는 앱.", en: "Keep the dates and milestones that make your relationship yours." },
    link: "https://apps.apple.com/kr/app/%EB%A6%AC%EB%8D%B0%EC%9D%B4-%EC%BB%A4%ED%94%8C-%EB%94%94%EB%8D%B0%EC%9D%B4/id6740836985?uo=4"
  }
];

const copy = {
  ko: {
    navApps: "앱", navAbout: "소개", navContact: "연락처", viewApps: "앱 둘러보기",
    heroTitle: "DayBlocks로 계획하고,<br>실행하고, 돌아보는 하루", heroDescription: "DayBlocks는 하루를 계획하고, 실행하고, 돌아보는 PDS 기반 플래너입니다.",
    exploreApps: "앱 컬렉션 보기 ↘", appStorePage: "App Store 개발자 페이지", heroNote: "Sangwoo Byeon이 만들고 운영합니다.",
    featureKicker: "오늘의 작은 약속", featureTitle: "자기 전 30분", featureDescription: "잠들기 전 화면 시간을 정리하는 작은 취침 타이머.",
    collectionKicker: "THE COLLECTION", collectionTitle: "앱 컬렉션", collectionDescription: "매일의 흐름을 정리하고, 좋아하는 순간을 남기고, 관계와 취향을 오래 기억하기 위한 앱들입니다.",
    searchPlaceholder: "앱 검색", emptyState: "검색 결과가 없습니다.", aboutKicker: "ABOUT BOOGIOS_STUDIO", aboutTitle: "작게 만들고,<br><em>오래 쓰는</em> 앱.",
    aboutText: "BOOGIOS_STUDIO는 일상에서 자주 마주치는 작은 불편과 마음을 관찰하고, 오래 곁에 둘 수 있는 iOS 앱으로 만듭니다. 복잡하게 채우기보다 필요한 만큼만 선명하게 만드는 것을 좋아합니다.",
    contactKicker: "SAY HELLO", contactTitle: "앱에 대해 궁금한 점이 있나요?", contactText: "앱 사용 문의나 협업 제안은 편하게 연락해주세요.",
    footerText: "작은 일상을 위한 독립 앱 스튜디오", privacy: "개인정보처리방침", terms: "서비스 약관", all: "전체", appStore: "App Store에서 보기"
  },
  en: {
    navApps: "Apps", navAbout: "About", navContact: "Contact", viewApps: "Explore apps",
    heroTitle: "Plan, do, and see<br>your day with DayBlocks.", heroDescription: "DayBlocks is a PDS-based daily planner for planning, doing, and seeing your day.",
    exploreApps: "Explore the collection ↘", appStorePage: "App Store developer page", heroNote: "Made and run by Sangwoo Byeon.",
    featureKicker: "A small promise for today", featureTitle: "Before Bed 30", featureDescription: "A gentle bedtime timer for closing out your screen time.",
    collectionKicker: "THE COLLECTION", collectionTitle: "The app collection", collectionDescription: "Apps for shaping your day, keeping your favorite moments, and remembering the people and tastes that matter.",
    searchPlaceholder: "Search apps", emptyState: "No apps found.", aboutKicker: "ABOUT BOOGIOS_STUDIO", aboutTitle: "Small to make,<br><em>lasting to use</em>.",
    aboutText: "BOOGIOS_STUDIO makes iOS apps from the small frictions and feelings we notice in everyday life. We prefer clear, focused tools that can stay close for a long time.",
    contactKicker: "SAY HELLO", contactTitle: "Have a question about an app?", contactText: "For support, feedback, or collaboration, feel free to get in touch.",
    footerText: "An independent app studio for everyday moments", privacy: "Privacy policy", terms: "Terms of service", all: "All", appStore: "View on the App Store"
  }
};

let language = "ko";
let activeCategory = "all";
let searchTerm = "";

const grid = document.querySelector("#app-grid");
const filters = document.querySelector("#filters");
const emptyState = document.querySelector("#empty-state");
const searchInput = document.querySelector("#app-search");

function categories() {
  return ["all", ...new Set(apps.map((app) => app.category[language]))];
}

function appMatches(app) {
  const query = searchTerm.trim().toLowerCase();
  const categoryMatches = activeCategory === "all" || app.category[language] === activeCategory;
  if (!query) return categoryMatches;
  const searchable = [app.name[language], app.label[language], app.description[language], app.category[language]].join(" ").toLowerCase();
  return categoryMatches && searchable.includes(query);
}

function renderFilters() {
  filters.innerHTML = categories().map((category) => {
    const label = category === "all" ? copy[language].all : category;
    const active = activeCategory === category ? " is-active" : "";
    return `<button class="filter-button${active}" type="button" data-category="${category}">${label}</button>`;
  }).join("");
  filters.querySelectorAll("[data-category]").forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      renderFilters();
      renderApps();
    });
  });
}

function renderApps() {
  const visibleApps = apps.filter(appMatches);
  grid.innerHTML = visibleApps.map((app) => `
    <article class="app-card">
      <div class="card-top">
        <span class="category">${app.category[language]}</span>
        <a class="card-arrow" href="${app.link}" target="_blank" rel="noreferrer" aria-label="${app.name[language]} App Store">↗</a>
      </div>
      <div class="app-main">
        <img class="app-icon" src="assets/icons/${app.id}.jpg" alt="${app.name[language]} app icon" loading="lazy" />
        <div><h3 class="app-name">${app.name[language]}</h3><p class="app-label">${app.label[language]}</p></div>
      </div>
      <p class="app-description">${app.description[language]}</p>
      <a class="store-link" href="${app.link}" target="_blank" rel="noreferrer"><span>${copy[language].appStore}</span><span>↗</span></a>
    </article>
  `).join("");
  emptyState.hidden = visibleApps.length > 0;
}

function setLanguage(nextLanguage) {
  language = nextLanguage;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-language]").forEach((button) => button.classList.toggle("is-active", button.dataset.language === language));
  document.querySelectorAll("[data-i18n]").forEach((element) => { element.innerHTML = copy[language][element.dataset.i18n]; });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => { element.placeholder = copy[language][element.dataset.i18nPlaceholder]; });
  activeCategory = "all";
  renderFilters();
  renderApps();
}

document.querySelectorAll("[data-language]").forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.language)));
searchInput.addEventListener("input", (event) => { searchTerm = event.target.value; renderApps(); });
document.querySelector("#year").textContent = new Date().getFullYear();
setLanguage(language);
