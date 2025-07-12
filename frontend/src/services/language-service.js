import translations from "../utils/language/translations.js";
class LanguageService {
    constructor() {
        this.language = localStorage.getItem("lang") || "mk"; // Default to Macedonian
        this.translations = translations; 
    }

    getLanguage() {
        return this.language;
    }

    setLanguage(lang) {
        if (this.translations[lang]) {
            this.language = lang;
            localStorage.setItem("lang", lang);
        }
    }

    // Returns all translations for the current language
    getAllTranslations() {
        return this.translations[this.language];
    }
}

const languageService = new LanguageService();
export default languageService;
