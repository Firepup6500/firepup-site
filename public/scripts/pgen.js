function genPwd() {
  var pwdLen = Math.floor(Math.random() * 21) + 10;
  var pwdChars = "";
  if (document.getElementById("commnsym").checked) {
    pwdChars = pwdChars + "!@#$%&?*/"
  }
  if (document.getElementById("uncomsym").checked) {
    pwdChars = pwdChars + "~^()_+`-={}[]\\|;:'\"<,>."
  }
  if (document.getElementById("uppercas").checked) {
    pwdChars = pwdChars + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if (document.getElementById("lowercas").checked) {
    pwdChars = pwdChars + "abcdefghijklmnopqrstuvwxyz"
  }
  if (document.getElementById("numerics").checked) {
    pwdChars = pwdChars + "0123456789"
  }
  if (pwdChars != "") {
    var rndPwd = new Array(pwdLen).fill(pwdChars).map(x => (function(chars) { let umax = Math.pow(2, 32), r = new Uint32Array(1), max = umax - (umax % chars.length); do { crypto.getRandomValues(r); } while(r[0] > max); return chars[r[0] % chars.length]; })(x)).join('');
  } else {
    var rndPwd = new Array(100000).fill("!@#$%&?*/~^()_+`-={}[]\\|;:'\"<,>.ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789").map(x => (function(chars) { let umax = Math.pow(2, 32), r = new Uint32Array(1), max = umax - (umax % chars.length); do { crypto.getRandomValues(r); } while(r[0] > max); return chars[r[0] % chars.length]; })(x)).join('');
  }
  document.getElementById("password").innerText = "Your random password is: " + rndPwd;
}
document.querySelectorAll("[disabled]").forEach(e=>e.disabled=false);
