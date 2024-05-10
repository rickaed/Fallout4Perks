const userLang = navigator.language || navigator.userLanguage; // Obtenir la langue de l'utilisateur
const lang={
    fr: fr,
    en: en
}
e.log(lang[userLang].st.l1.name);