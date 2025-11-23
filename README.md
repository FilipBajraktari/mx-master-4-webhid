# HapticMorse: MX Master 4 WebHID Control

HapticMorse is a lightweight, web-based application designed to interface with the Logitech MX Master 4 mouse using the WebHID API. This project demonstrates the capability to control the device's haptic feedback engine without external dependencies, utilizing pure JavaScript.

The application serves as both a proof-of-concept driver and a functional demonstration of haptic communication through three distinct modules: a text-to-haptic translator, a screen reader, and a haptic input chat interface.

## Features

### Core Functionality

  - **Zero Dependencies**: Built entirely with vanilla JavaScript.
  - **WebHID Integration**: Direct browser-to-device communication.
  - **Custom Driver**: Includes a reusable `LogitechHapticDriver` class for integration into other projects.

### Application Modules

1.  **Text Translator**: Converts user input into standard Morse code vibrations played through the mouse's haptic motor.
2.  **Highlight Reader**: A background service that detects text selection on the page. When text is highlighted, the application translates the selection into haptic feedback after a one-second delay.
3.  **Haptic AI Chatbot**: A bidirectional interface allowing users to communicate with an AI.
      - **Input**: Users input text via mouse clicks (Left Click = Dot/Dash, Middle Click = Confirm Letter/Space).
      - **Output**: AI responses are translated into haptic vibrations.

## Prerequisites

  - **Hardware**: Logitech MX Master 4 (connected via Bluetooth or USB Receiver).
  - **Software**: A Chromium-based browser (Chrome, Edge, Opera) with WebHID support enabled.

## Installation and Usage

Due to the usage of ES Modules, this project requires a local web server to function correctly. It cannot be run directly from the file system.

### Option 1: Python

Run the following command in the project root:

```bash
python3 -m http.server 8000
```

Navigate to `http://localhost:8000/app/` in your browser.

### Option 2: Node.js

```bash
npx http-server .
```

## Developer API Reference

The core logic is encapsulated within `app/logitech-haptic-driver.js`.

### Initialization

```javascript
import { LogitechHapticDriver } from './app/logitech-haptic-driver.js';

const driver = new LogitechHapticDriver();
```

## Configuration

The driver allows for configuration overrides during initialization if necessary:

```javascript
const driver = new LogitechHapticDriver({
    vendorId: 0x046d,
    productId: 0xb042
});
```

## Disclaimer

This software is an experimental project and is not officially supported by or affiliated with Logitech. Use at your own discretion.
\<ctrl46\>,filename:\<ctrl46\>README.md\<ctrl46\>}
