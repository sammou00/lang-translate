# Lang

This library is designed to facilitate the management and translation of phrases for multi-language websites. It provides a simple interface for setting the default language, adding new phrases, updating existing ones, and retrieving translations based on the current language.

## Features

- Set and change the default language.
- Retrieve all phrases or a specific phrase by its ID.
- Translate phrases based on the current language setting.
- Add new phrases with translations.
- Update existing phrases.
- Delete phrases by ID.

## Installation

To use this library, ensure you have the following files in your project:

1. `Lang.js` - The main class file for managing translations.

## Getting Started

### 1. Import the Library

First, import the `Lang` class and the phrases array:

```javascript
import Lang from 'Lang.js';
```

### 2. Initialize the Library

Create an instance of the `Lang` class, optionally setting the default language:

```javascript
const lang = new Lang('fr'); // Default language is French
```

If no default language is specified, it defaults to English (`'en'`).

### 3. Using the Library

#### Set the Default Language

Change the default language at any time using the `setLanguage` method:

```javascript
lang.setLanguage('en'); // Change default language to Spanish
```

#### Retrieve All Phrases

Get all the phrases stored in the library:

```javascript
console.log(lang.getAllPhrases());
```

#### Retrieve a Phrase by ID

Fetch a specific phrase by its ID:

```javascript
console.log(lang.getPhraseById(1)); // Retrieves the phrase with ID 1
```

#### Translate a Phrase

Translate a phrase based on the current language setting:

```javascript
console.log(lang.translate(1)); // Translates the phrase with ID 1 to the current language
```

#### Add a New Phrase

Add a new phrase with translations:

```javascript
const newId = lang.addPhrase({
  en: 'Hello',
  fr: 'Bonjour',
  es: 'Hola'
});
console.log(newId); // New phrase ID
```

#### Update an Existing Phrase

Update an existing phrase by its ID:

```javascript
lang.updatePhrase(1, {
  en: 'Goodbye',
  fr: 'Au revoir',
  es: 'Adiós'
});
```

#### Delete a Phrase

Delete a phrase by its ID:

```javascript
lang.deletePhrase(1); // Deletes the phrase with ID 1
```

## Example Usage

Here is a complete example of how to use the library:

```javascript
import Lang from './Lang.js';

// Initialize with default language as French
const lang = new Lang('fr');

// Add some phrases
lang.addPhrase({
  en: 'Hello',
  fr: 'Bonjour',
  es: 'Hola'
});
lang.addPhrase({
  en: 'Goodbye',
  fr: 'Au revoir',
  es: 'Adiós'
});

// Change language to Spanish
lang.setLanguage('es');

// Translate phrases
console.log(lang.translate(1)); // Output: Hola
console.log(lang.translate(2)); // Output: Adiós

// Update a phrase
lang.updatePhrase(1, {
  en: 'Hi',
  fr: 'Salut',
  es: 'Hola'
});

// Delete a phrase
lang.deletePhrase(2);

// Retrieve all phrases
console.log(lang.getAllPhrases());
```

## Add phrases to 'data/phrases.js/

The `phrases` array should be structured as follows:

```javascript
const phrases = [
  { id: 1, en: 'Hello', fr: 'Bonjour', nl: 'Hallo' },
  { id: 2, en: 'Goodbye', fr: 'Au revoir', nl: 'Tot ziens' }
];

export default phrases;
```
