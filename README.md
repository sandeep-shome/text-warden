[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

# text-warden

A lightweight utility library for detecting and sanitizing sensitive or unsafe text content in strings. Ideal for filtering offensive words, enforcing content policies, or building text moderation features in Node.js and frontend applications

## 🚀 Features

- 🔍 Simple `isSafeText` function to check for unsafe or banned words.
- ⚡ Lightweight and fast – no dependencies.
- 🧩 Easily extensible for custom word lists or rules.

## ⬇️ Installation

Install text-warden with npm

```bash
md my-app
cd my-app
npm install text-warden
```

## 💿 Usage/Examples

```javascript
import { isSafeText } from 'text-warden';

const result = isSafeText('Hello world!');
console.log(result); // true or false based on content
```

## 🧰 Functions/Methods

Usage and parameter list of all available functions

### `isSafeText()`

Checks if the given text is safe by detecting unsafe or profane words

```javascript
import { isSafeText } from 'text-warden';

const customOptions = {
  extendUnsafeWords: ['foo', 'bar'],
};

const result = isSafeText('Foo is bad', customOptions);
console.log(result); // false
```

| Parameter                 | Type       | Required | Description                                                                 |
| ------------------------- | ---------- | -------- | --------------------------------------------------------------------------- |
| **text**                  | `string`   | `true`   | The input text to validate for unsafe or sensitive words.                   |
| extendUnsafeWords         | `string[]` | `false`  | Adds additional words to the list of unsafe words. Useful for custom rules. |
| skipChecksFor             | `string[]` | `false`  | Words to exclude from being flagged, even if they appear in unsafe lists.   |
| disableDefaultUnsafeWords | `boolean`  | `false`  | Set to true to ignore the built-in list of unsafe words.                    |

## 🤝 Contribution

Contributions are welcome and appreciated!
If you have suggestions for improvements, feel free to open an issue or submit a pull request.
Let’s make text-warden better together! 🐝✨

## 🚀 Run Locally

Clone the project

```bash
git clone https://github.com/sandeep-shome/text-warden.git
```

Go to the project directory

```bash
cd text-warden
```

🔧 Install dependencies

```bash
npm install
```

_You can now explore and modify the package as per your needs._

📦 Build the Project

```bash
npm run build
```

## 🧪 Running Tests

Follow the steps below to run and verify the functionality of the CLI and validation logic.

```bash
npm run test
```

## 🔧 Built With

- [**TypeScript**](https://www.typescriptlang.org/) – Strongly typed language for scalable JavaScript development
- [**Vitest**](https://vitest.dev/) – Fast unit testing framework with great DX
- [**tsup**](https://tsup.egoist.dev/) – Super-fast TypeScript bundler powered by esbuild

## 📎Appendix

text-warden is an open-source project developed and maintained by a solo developer with a passion for clean code, creativity, and community-driven tools.

You're welcome to explore, use, and contribute to the project! Whether it's fixing a bug, suggesting a feature, or improving the documentation — your contributions are highly appreciated.

Feel free to check out the GitHub repository and join in making this project better for everyone. Let's build something fun together! 💡

## 👨‍💻 Authors

[@Sandeep Shome](https://github.com/sandeep-shome)

## 📄 License

[MIT](https://choosealicense.com/licenses/mit/)

## 🙋‍♂️ Support

For support, email sandeepshome.dev@gmail.com
