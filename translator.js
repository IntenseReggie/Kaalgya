(function() {
    window.googleTranslateElementInit = function() {
        new google.translate.TranslateElement({
            pageLanguage: 'hi',
            includedLanguages: 'en,hi',
            autoDisplay: false
        }, 'google_translate_element');
    };

    var gtScript = document.createElement('script');
    gtScript.type = 'text/javascript';
    gtScript.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.head.appendChild(gtScript);
})();

let isTranslatedToEnglish = false;

window.toggleSiteLanguage = function() {
    isTranslatedToEnglish = !isTranslatedToEnglish;
    const targetLang = isTranslatedToEnglish ? 'en' : 'hi';
    const btn = document.getElementById("lang-switch-btn");

    function applyLang() {
        const select = document.querySelector('.goog-te-combo');
        if (select) {
            select.value = targetLang;
            select.dispatchEvent(new Event('change'));
            if (btn) {
                btn.innerText = isTranslatedToEnglish ? "हिन्दी" : "English";
            }
        } else {
            setTimeout(applyLang, 300);
        }
    }
    applyLang();
};
