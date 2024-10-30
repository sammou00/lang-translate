# Lingoshift

This library is designed to facilitate the management and translation of phrases for multi-language websites.
It provides a simple interface for setting the default language and retrieving translations based on the current language.

## Features

- Set and change the default language.
- Retrieve all phrases or a specific phrase by its ID.
- Translate phrases based on the current language setting.

## Installation

Install `lingoshift`

1. `npm i lingoshift`

## Getting Started

### 1. Import the Library

First, import the `Lingoshift` class :

```javascript
import Lingoshift from 'lingoshift';
```

### 3. Create a file `phrases.js` in a new folder `data`

Add this data to `phrases.js`

```javascript
// You can add/remove languages according to your need.
// add all your phrases in phrases
const phrases = [
    {
        id: 1,
        en: 'Good morning', // English
        fr: 'Bonjour', // French
        nl: 'Goedemorgen', // Dutch
        de: 'Guten Morgen', // German
        es: 'Buenos días', // Spanish
        it: 'Buongiorno', // Italian
        pt: 'Bom dia', // Portuguese
        ru: 'Доброе утро', // Russian
        zh: '早上好', // Chinese
        ja: 'おはようございます', // Japanese
        ko: '좋은 아침', // Korean
        ar: 'صباح الخير', // Arabic
        hi: 'सुप्रभात', // Hindi
        he: 'בוקר טוב', // Hebrew
        tr: 'Günaydın', // Turkish
        sv: 'God morgon', // Swedish
        no: 'God morgen', // Norwegian
        da: 'God morgen', // Danish
        fi: 'Hyvää huomenta', // Finnish
        pl: 'Dzień dobry', // Polish
        el: 'Καλημέρα', // Greek
        cs: 'Dobré ráno', // Czech
        hu: 'Jó reggelt', // Hungarian
        th: 'สวัสดีตอนเช้า', // Thai
        vi: 'Chào buổi sáng', // Vietnamese
    },
    {
        id: 2,
        en: 'Goodbye', // English
        fr: 'Au revoir', // French
        nl: 'Tot ziens', // Dutch
        de: 'Auf Wiedersehen', // German
        es: 'Adiós', // Spanish
        it: 'Arrivederci', // Italian
        pt: 'Adeus', // Portuguese
        ru: 'До свидания', // Russian
        zh: '再见', // Chinese
        ja: 'さようなら', // Japanese
        ko: '안녕히 가세요', // Korean
        ar: 'مع السلامة', // Arabic
        hi: 'अलविदा', // Hindi
        he: 'להתראות', // Hebrew
        tr: 'Hoşçakal', // Turkish
        sv: 'Adjö', // Swedish
        no: 'Ha det', // Norwegian
        da: 'Farvel', // Danish
        fi: 'Näkemiin', // Finnish
        pl: 'Do widzenia', // Polish
        el: 'Αντίο', // Greek
        cs: 'Sbohem', // Czech
        hu: 'Viszlát', // Hungarian
        th: 'ลาก่อน', // Thai
        vi: 'Tạm biệt', // Vietnamese
    },
];

export default phrases;
```

### 2. Initialize the Library

Create an instance of the `Lingoshift` class, you need to pass the language and your phrases array:

```javascript
import phrases from './data/phrases.js';
const lang = new Lingoshift('en', phrases);
```

### 3. Using the Library

#### Set the Default Language

Change the default language at any time using the `setLanguage` method:

```javascript
// you can use any language you want as long as
// it exits in your `data/phrases.js`
lang.setLanguage('fr');
```

#### Retrieve All Phrases

Get all the phrases stored in the `phrases.js`:

```javascript
console.log(lang.getAllPhrases());
```

#### Retrieve a Phrase by ID

Fetch a specific phrase by its ID:

```javascript
console.log(lang.getPhraseById(1));
```

#### Translate a Phrase

Translate a phrase based on the current language setting:

```javascript
lang.setLanguage('ko');
console.log(lang.translate(1)); // 좋은 아침
```

## Example Usage

Here is a complete example of how to use the library:

```javascript
import Lingoshift from 'lingoshift';

const phrases = [
    {
        id: 1,
        en: 'Hello',
        fr: 'Bonjour',
        nl: 'Hallo',
    },
    {
        id: 2,
        en: 'Goodbye',
        fr: 'Au revoir',
        nl: 'Tot ziens',
    },
];

// Initialize with default language as French
const lang = new Lingoshift('fr', phrases);

// Translate phrases
console.log(lang.translate(1)); // Bonjour

// Change the default language
lang.setLanguage('nl');
console.log(lang.translate(2)); // Tot ziens
console.log(lang.translate(3)); // Phrase with id 3 not found.

// Retrieve all phrases
console.log(lang.getAllPhrases());

// Retrieve a phrase by id
console.log(lang.getPhraseById(1));
```
