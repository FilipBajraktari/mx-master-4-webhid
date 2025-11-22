# Logitech MX Master 4 WebHID Haptics

A lightweight, zero-dependency JavaScript library to control haptic feedback on the Logitech MX Master 4 using the WebHID API.

### [Live demo](https://mario-gutierrez.github.io/mx-master-4-webhid/app)

## 🚀 Quick Start

### 1. Prerequisites
* **Browser:** Chromium-based browser (Chrome, Edge, Opera) is required for WebHID support.
* **Hardware:** Logitech MX Master 4 connected via USB or Bluetooth.

### 2. Running the Demo Locally
Because this project uses ES Modules (`import` statements), you cannot open `index.html` directly from the file system (`file://`). You must use a local server.

**Using Python:**
```bash
# Run inside the project root
python3 -m http.server 8000
# Open http://localhost:8000/app/ in your browser
```

**Using Node:**
```bash
npx http-server .
```

## 📦 Library Usage
The core logic is contained in `app/logitech-haptic-driver.js.`

Importing the Driver
```JavaScript
import { LogitechHapticDriver } from './path/to/logitech-haptic-driver.js';

const driver = new LogitechHapticDriver();
````

## API Reference
`connect()`

Prompts the user to select the MX Master 4 device and opens a connection.

```JavaScript

try {
    await driver.connect();
    console.log("Device connected!");
} catch (error) {
    console.error("Connection failed:", error);
}
````

`triggerHaptic(effectId)`

Triggers a specific haptic effect.

effectId: Integer (0-14).

```JavaScript
// Trigger effect ID 1
await driver.triggerHaptic(1);
````

`disconnect()`

Closes the connection to the device.

```JavaScript
await driver.disconnect();
````

**🔧 Configuration**

The driver is pre-configured for the MX Master 4, but you can override defaults during initialization if needed:

```JavaScript
const driver = new LogitechHapticDriver({
    vendorId: 0x046d,  // Logitech
    productId: 0xb042  // MX Master 4
});
````

### ⚠️ Disclaimer
This is an experimental project, it is not officially supported by Logitech.