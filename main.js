require('shelljs/global')
let keys = require('./constants.js')

function execCmd(command){
  return exec(command, {silent:true}).code === 0
}

exports.connect = function(ip, port = 5555) {
  let response = exec('adb connect ' + ip + ":" + port, {silent:true})
  response = response.stdout.split(/\r?\n/)[0]
  return response.indexOf("unable") == -1
},

exports.isConnected = function(ip) {
  return this.devices().filter(v => v.indexOf(ip) != -1 && v.indexOf("offline") == -1).length > 0
},

exports.disconnect = function(ip) {
  return execCmd('adb disconnect ' + ip)
},

exports.devices = function() {
  let response = exec("adb devices", {silent:true})
  response = response.stdout.split(/\r?\n/);
  response.shift()
  response = response.filter(String)
  return response
},

exports.pressKey = function(keyCode) {
  return execCmd("adb shell input keyevent " + keyCode)
},

exports.sendText = function(text) {
  text = text.replace(/ /g, "%s");
  return execCmd("adb shell input text " + text)
},

exports.getUserApps = function(){
  let response = exec("adb shell pm list packages -e", {silent:true})
  return response.stdout.split(/\r?\n/);
},

exports.getAppPackage = function(simpleName){
  res = this.getUserApps().filter(s => s.includes(simpleName))
  if(res.length > 0){
    res = res[0].split("package:")[1]
    return res
  }
  else return undefined
},

exports.openApp = function(package){
  return execCmd("adb shell monkey -p " + package + " 1")
},

exports.reboot = function(){
  yexec("adb reboot", {silent:true, async:true})
},

exports.keyCodes = keys
