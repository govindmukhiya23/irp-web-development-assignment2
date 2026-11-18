# IRP Web Development Assignment

Two parts: a responsive IRP LMS home page (Part A) and a JavaScript bank simulator (Part B).

## Folder structure

```
part-a-responsive-ui/   index.html, style.css
part-b-javascript/      bank.js
README.md
```

## Part A - Responsive UI

Open `part-a-responsive-ui/index.html` in Google Chrome.

How to test:
1. Scroll down the page. The navbar should stay at the top (`position: sticky`).
2. Press F12 and turn on the Device Toolbar.
3. At 1200px or wider: the hero has 2 columns and the step cards are in 5 columns.
4. At 769px to 1024px: the step cards wrap into 3 columns.
5. At 375px or 390px: nav links are hidden, the hero is stacked, the cards are in 1 column, and there is no sideways scrolling.

## Part B - JavaScript

Needs Node.js. From the project folder run:

```
node part-b-javascript/bank.js
```

Part 1 tests `parseAmount()` with 7 inputs. Part 2 shows const/let, hoisting, the Temporal Dead Zone and the var/let loop difference.
# irp-web-development-assignment2
