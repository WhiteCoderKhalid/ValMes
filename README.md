# Secret Valentine

A simple web application that allows users to send anonymous Valentine messages via a generated secret link.

## Features
- Users can write a secret message.
- The app generates a unique shareable link.
- The recipient can view the message by opening the link.
- Emojis are supported in messages.
- Users can copy the generated link easily.

## Technologies Used
- HTML
- CSS
- JavaScript
- Base64 Encoding/Decoding

## How It Works
1. User writes a secret message in the input box.
2. The app encodes the message using Base64 and generates a link.
3. The user shares the link with someone.
4. When the recipient opens the link, the message is decoded and displayed.

## Installation & Usage
1. Download or clone the repository.
2. Open `index.html` in a web browser.
3. Write a message and generate a secret link.
4. Copy the link and share it.
5. The recipient opens the link to view the secret message.

## Fixes & Improvements
- **Use `js-base64` Library:** Replace `btoa()` and `atob()` with `Base64.encode()` and `Base64.decode()` for better emoji handling.
- **Modern Clipboard API:** Replace `document.execCommand("copy")` with `navigator.clipboard.writeText()` for better browser support.
- **Improve URL Handling:** Ensure the URL is correctly formatted and logged in the console for debugging.

## License
This project is open-source and available under the MIT License.

