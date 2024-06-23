class LangTranslate {
    constructor(defaultLanguage = 'en') {
        this.defaultLanguage = defaultLanguage;
        this.phrases = phrases;

        this.currentId = this.phrases.length
            ? Math.max(...this.phrases.map((phrase) => phrase.id))
            : 0;
    }

    setLanguage(language) {
        this.defaultLanguage = language;
    }

    getAllPhrases() {
        return this.phrases;
    }

    getPhraseById(id) {
        const phrase = this.phrases.find((phrase) => phrase.id === id) || null;
        if (!phrase) {
            console.warn(`Phrase with id ${id} not found.`);
        }
        return phrase;
    }

    translate(id) {
        const phrase = this.phrases.find((phrase) => phrase.id === id);
        if (!phrase) {
            const message = `Phrase with id ${id} not found.`;
            console.warn(message);
            return message;
        } else {
            return phrase[this.defaultLanguage] || phrase['en'];
        }
    }

    addPhrase(translations) {
        const newId = ++this.currentId;
        this.phrases.push({ ...translations, id: newId });
        return newId;
    }

    updatePhrase(id, translations) {
        const phrase = this.phrases.find((phrase) => phrase.id === id);
        if (phrase) {
            Object.assign(phrase, translations);
        } else {
            console.warn(`Phrase with id ${id} not found.`);
        }
    }

    deletePhrase(id) {
        const index = this.phrases.findIndex((phrase) => phrase.id === id);
        if (index !== -1) {
            this.phrases.splice(index, 1);
        } else {
            console.warn(`Phrase with id ${id} not found.`);
        }
    }
}

export default LangTranslate;
