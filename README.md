# ADBmote

## Description

A tiny Node.js module designed to control Android TV from Linux PC.

## Setup

Run `npm install` and follow the steps. If you don't already have ADB installed, the script will install it for you (may require admin password).

## Interface

* `connect(ip, port=5555)` - Connect wirelessly to the Android device.
* `isConnected(ip)` - Check your connection status.
* `disconnect(ip)` - Disconnect form a connected device.
* `devices()` - Get a list of the connected devices.
* `pressKey(keyCode)` - Simulate a button press.
* `sendText(text)` - Send text string to the connected device.
* `getUserApps()` - Get list of the apps on the device.
* `getAppPackage(simpleName)` - Get the full package name of an application by providing simple name.
* `openApp(package)` - Open app by providing its package.
* `reboot()` - Reboot the device.


## Credits

ADB calls are executed via shelljs. All rights reserved to their respective owners.