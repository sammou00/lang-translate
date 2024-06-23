# Lang

This library is designed to facilitate the management and translation of phrases for multi-language websites.
It provides a simple interface for setting the default language and  retrieving translations based on the current language.

## Features

- Set and change the default language.
- Retrieve all phrases or a specific phrase by its ID.
- Translate phrases based on the current language setting.

## Installation

Install `lang-translate`

1. `npm i lang-translate`

## Getting Started

### 1. Import the Library

First, import the `LangTranslate` class :

```javascript
import LangTranslate from 'lang-translate'
```

### 3. Create a file `phrases.js`

Add this data to `phrases.js`

```javascript
// You can add/remove languages according toy our need.
const phrases = [
  {
    id: 1,
    en: 'Good morning',
    fr: 'Bonjour',
    nl: 'Goedemorgen',
    de: 'Guten Morgen',    // German
    es: 'Buenos días',     // Spanish
    it: 'Buongiorno',      // Italian
    pt: 'Bom dia',         // Portuguese
    ru: 'Доброе утро',     // Russian
    zh: '早上好',          // Chinese
    ja: 'おはようございます', // Japanese
    ko: '좋은 아침',       // Korean
    ar: 'صباح الخير',      // Arabic
    hi: 'सुप्रभात',       // Hindi
    he: 'בוקר טוב',       // Hebrew
    tr: 'Günaydın',        // Turkish
    sv: 'God morgon',      // Swedish
    no: 'God morgen',      // Norwegian
    da: 'God morgen',      // Danish
    fi: 'Hyvää huomenta',  // Finnish
    pl: 'Dzień dobry',     // Polish
    el: 'Καλημέρα',        // Greek
    cs: 'Dobré ráno',      // Czech
    hu: 'Jó reggelt',      // Hungarian
    th: 'สวัสดีตอนเช้า', // Thai
    vi: 'Chào buổi sáng'  
  }
];

export default phrases;
```

### 2. Initialize the Library

Create an instance of the `LangTranslate` class, you need to pass the language  and your phrases array:

```javascript
import phrases from './data/phrases.js';
const lang = new LangTranslate('en', phrases);
```

### 3. Using the Library

#### Set the Default Language

Change the default language at any time using the `setLanguage` method:

```javascript
// you can use any language you want as long as it exits in your `data/phrases.js`
lang.setLanguage('en'); 
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
console.log(lang.translate(1)); 
```

## Example Usage

Here is a complete example of how to use the library:

```javascript
import LangTranslate from 'lang-translate'

const phrases = [
  id : 1,
  en: 'Hello',
  fr: 'Bonjour',
  nl: 'Hallo'
]

// Initialize with default language as French
const lang = new LangTranslate('fr', phrases);

// Translate phrases
console.log(lang.translate(1)); // Hello
console.log(lang.translate(2)); // Phrase with id 2 not found.

// Retrieve all phrases
console.log(lang.getAllPhrases());
```

## Add, update and delete phrases `permanently` from `phrases.js`
