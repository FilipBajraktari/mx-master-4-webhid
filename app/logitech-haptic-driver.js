/**
 * logitech-haptic-driver.js
 * reusable es module for logitech haptic devices.
 */

export class LogitechHapticDriver {
    constructor(options = {}) {
        this.device = null;
        // config defaults for mx master 4
        this.config = {
            vendorId: 0x046d,
            productId: 0xb042,
            hapticFeatureId: 0x0b4e,
            reportId: 0x11,
            reportLength: 19,
            deviceIndex: 2,
            ...options
        };
    }

    // check webhid support
    get isSupported() {
        return 'hid' in navigator;
    }

    // get active device
    get connectedDevice() {
        return (this.device && this.device.opened) ? this.device : null;
    }

    // connect to device
    async connect() {
        if (!this.isSupported) throw new Error("webhid not supported");

        const devices = await navigator.hid.requestDevice({
            filters: [{ vendorId: this.config.vendorId, productId: this.config.productId }]
        });

        if (!devices.length) throw new Error("no device selected");

        this.device = devices[0];
        
        if (!this.device.opened) {
            await this.device.open();
        }

        return this.device;
    }

    // disconnect device
    async disconnect() {
        if (this.connectedDevice) {
            await this.device.close();
        }
        this.device = null;
    }

    // trigger haptic effect
    async triggerHaptic(effectId) {
        if (!this.connectedDevice) throw new Error("device disconnected");

        const data = new Uint8Array(this.config.reportLength);
        const view = new DataView(data.buffer);

        view.setUint8(0, this.config.deviceIndex);
        view.setUint16(1, this.config.hapticFeatureId, false);
        view.setUint8(3, effectId);

        await this.device.sendReport(this.config.reportId, data);
    }
}