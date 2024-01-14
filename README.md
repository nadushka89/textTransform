# Text Transformer

Простая библиотека для преобразования текста с использованием различных методов.

## Установка

bash
npm install text_transform_lib

## Использование
const textTransformer = require('text_transform_lib');

const originalText = 'Hello, World!';

const upperCaseText = textTransformer.toUpperCase(originalText);
console.log(upperCaseText); // HELLO, WORLD!

const lowerCaseText = textTransformer.toLowerCase(originalText);
console.log(lowerCaseText); // hello, world!

const reversedText = textTransformer.reverse(originalText);
console.log(reversedText); // !dlroW ,olleH

const switchedText = textTransformer.switchLayout(originalText);
console.log(switchedText); // Пример переключения раскладки

## Методы
1. toUpperCase(text: string): string
   Преобразует текст в верхний регистр.

2. toLowerCase(text: string): string
   Преобразует текст в нижний регистр.

3. reverse(text: string): string
   Инвертирует порядок символов в тексте.

4. switchLayout(text: string): string
   Переключает раскладку текста между русской и английской.