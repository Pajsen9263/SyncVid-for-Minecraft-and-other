// /public/js/main-i18n.js

// We use the backend to load /locales/{{lng}}/translation.json
i18next
  .use(i18nextHttpBackend)
  .init({
    fallbackLng: 'en',
    debug: true,
    backend: {
      loadPath: '/locales/{{lng}}/translation.json'
    }
  }, function(err, t) {
    // once initialized, we localize the entire DOM
    jqueryI18next.init(i18next, $, { useOptionsAttr: true });
    $('body').localize();
  });

// language change management
$('#languageSwitcher').on('change', function() {
  const newLang = $(this).val();
  i18next.changeLanguage(newLang, () => {
    $('body').localize();
  });
});