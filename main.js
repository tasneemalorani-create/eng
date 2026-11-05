(function () {
  var t = {
    en: {
      brand: "Tasneem",
      eyebrow: "A new website",
      hello: "Welcome to",
      name: "Tasneem",
      lede: "Named for a spring that never runs dry — this is a quiet place for ideas, work, and things worth sharing. It's just getting started.",
      cta1: "Chat on WhatsApp",
      cta2: "GitHub",
      c1t: "About",
      c1p: "Who Tasneem is, what matters most, and the story behind the site.",
      c2t: "Work",
      c2p: "Projects, experiments, and notes — added here as they take shape.",
      c3t: "Contact",
      c3p: "Want to collaborate or just say hi? Message on WhatsApp.",
      foot: "© {y} Tasneem · Made with care",
      toggle: "العربية",
      title: "Welcome · Tasneem"
    },
    ar: {
      brand: "تسنيم",
      eyebrow: "موقع جديد",
      hello: "أهلاً بكم في",
      name: "تسنيم",
      lede: "اسمٌ مستوحى من عينٍ لا ينضب ماؤها — هنا مساحة هادئة للأفكار والأعمال وكل ما يستحق المشاركة. والبداية الآن.",
      cta1: "راسلنا على واتساب",
      cta2: "GitHub",
      c1t: "نبذة",
      c1p: "تعرّف على تسنيم، وعلى ما يهمّ حقاً، والقصة وراء هذا الموقع.",
      c2t: "الأعمال",
      c2p: "مشاريع وتجارب وملاحظات — تُضاف هنا تباعاً.",
      c3t: "تواصل",
      c3p: "ترغب في التعاون أو إلقاء التحية؟ راسلنا على واتساب.",
      foot: "© {y} تسنيم · صُنع بعناية",
      toggle: "English",
      title: "أهلاً · تسنيم"
    }
  };

  var year = new Date().getFullYear();
  var btn = document.getElementById("lang");

  function apply(lang) {
    var d = t[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = d.title;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (d[k]) el.textContent = d[k].replace("{y}", year);
    });
    btn.textContent = d.toggle;
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }

  var saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  var initial = saved || ((navigator.language || "").slice(0, 2) === "ar" ? "ar" : "en");
  apply(initial);

  btn.addEventListener("click", function () {
    apply(document.documentElement.lang === "ar" ? "en" : "ar");
  });
})();
