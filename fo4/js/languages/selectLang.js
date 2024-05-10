

console.log('DEBUG Language');
const userLang = navigator.language || navigator.userLanguage; // Obtenir la langue de l'utilisateur
const lang={
    fr: fr,
    en:''
}
console.log(lang[userLang].st.l1.name);