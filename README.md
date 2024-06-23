# Lang

This library is designed to facilitate the management and translation of phrases for multi-language websites.
It provides a simple interface for setting the default language and  retrieving translations based on the current language.

## Features

- Set and change the default language.
- Retrieve all phrases or a specific phrase by its ID.
- Translate phrases based on the current language setting.
- Add new phrases with translations.
- Update existing phrases.
- Delete phrases by ID.

## Installation

Install `lang-translate`

1. `npm i lang-translate`

## Getting Started

### 1. Import the Library

First, import the `Lang` class :

```javascript
import Lang from 'lang-translate'
```

### 3. Create a folder `data` in the root of your project and inside it create a file `phrases.js`

Add this data to `phrases.js`

```javascript
// You can add, or modify the phrases according to your need
const phrases = [
  {
    id: 1,
    en: 'Hello',
    fr: 'Bonjour',
    nl: 'Hallo'
  },
  {
    id: 2,
    en: 'Goodbye',
    fr: 'Au revoir',
    nl: 'Tot ziens'
  },
  {
    id: 3,
    en: 'Thank you',
    fr: 'Merci',
    nl: 'Dank u'
  }
];


```

### 2. Initialize the Library

Create an instance of the `Lang` class, you need to pass the language  and your phrases array:

```javascript
const lang = new Lang('en', phrases);
```

If no default language is specified, it defaults to English (`'en'`).

### 3. Using the Library

#### Set the Default Language

Change the default language at any time using the `setLanguage` method:

```javascript
// you can use any language you want as long as they exits in your `data/phrases.js`
lang.setLanguage('en'); 
```

#### Retrieve All Phrases

Get all the phrases stored in the library:

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

#### Add a New Phrase

Add a new phrase with translations:

```javascript
// Note the new added phrases will not be saved permanently, if that what you 
// want you can add them in `data/phrases.js 
const newId = lang.addPhrase({
  en: 'Hello',
  fr: 'Bonjour',
  nl: 'Hallo'
});
console.log(newId); // New phrase ID
```

#### Update an Existing Phrase

Update an existing phrase by its ID:

```javascript
// Note the new updated phrases will not be updated permanently, if that what you 
// want you can update them in `data/phrases.js 
lang.updatePhrase(1, {
  en: 'Goodbye',
  fr: 'Au revoir',
  nl: 'Tot ziens'
});
```

#### Delete a Phrase

Delete a phrase by its ID:

```javascript
// Note the deleted phrases will not be deleted permanently, if that what you 
// want you can remove them from in `data/phrases.js 
lang.deletePhrase(1);
```

## Example Usage

Here is a complete example of how to use the library:

```javascript
const Lang = require('lang-translate')

// Initialize with default language as French
const lang = new Lang('fr');

// Add some phrases
lang.addPhrase({
  en: 'Hello',
  fr: 'Bonjour',
  nl: 'Hallo'
});

// Change language to English
lang.setLanguage('en');

// Translate phrases
console.log(lang.translate(1)); // the phrase with id = 1 in English
console.log(lang.translate(2)); // the phrase with id = 2 in English

// Update a phrase
lang.updatePhrase(1, {
  en: 'Hi',
  fr: 'Salut',
  nl: 'Hallo'
});

// Delete a phrase
lang.deletePhrase(2);

// Retrieve all phrases
console.log(lang.getAllPhrases());
```

## Add, update and delete phrases `permanently` to `'data/phrases.js`

you can add/remove languages according to your need:

```javascript
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
    vi: 'Chào buổi sáng'   // Vietnamese
  }
];

```
