/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/wif";
exports.ids = ["vendor-chunks/wif"];
exports.modules = {

/***/ "(ssr)/./node_modules/wif/index.js":
/*!***********************************!*\
  !*** ./node_modules/wif/index.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var bs58check = __webpack_require__(/*! bs58check */ \"(ssr)/./node_modules/bs58check/index.js\")\n\nfunction decodeRaw (buffer, version) {\n  // check version only if defined\n  if (version !== undefined && buffer[0] !== version) throw new Error('Invalid network version')\n\n  // uncompressed\n  if (buffer.length === 33) {\n    return {\n      version: buffer[0],\n      privateKey: buffer.slice(1, 33),\n      compressed: false\n    }\n  }\n\n  // invalid length\n  if (buffer.length !== 34) throw new Error('Invalid WIF length')\n\n  // invalid compression flag\n  if (buffer[33] !== 0x01) throw new Error('Invalid compression flag')\n\n  return {\n    version: buffer[0],\n    privateKey: buffer.slice(1, 33),\n    compressed: true\n  }\n}\n\nfunction encodeRaw (version, privateKey, compressed) {\n  var result = new Buffer(compressed ? 34 : 33)\n\n  result.writeUInt8(version, 0)\n  privateKey.copy(result, 1)\n\n  if (compressed) {\n    result[33] = 0x01\n  }\n\n  return result\n}\n\nfunction decode (string, version) {\n  return decodeRaw(bs58check.decode(string), version)\n}\n\nfunction encode (version, privateKey, compressed) {\n  if (typeof version === 'number') return bs58check.encode(encodeRaw(version, privateKey, compressed))\n\n  return bs58check.encode(\n    encodeRaw(\n      version.version,\n      version.privateKey,\n      version.compressed\n    )\n  )\n}\n\nmodule.exports = {\n  decode: decode,\n  decodeRaw: decodeRaw,\n  encode: encode,\n  encodeRaw: encodeRaw\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvd2lmL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQixtQkFBTyxDQUFDLDBEQUFXOztBQUVuQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2V4YW1wbGUtYXZzLXVpLy4vbm9kZV9tb2R1bGVzL3dpZi9pbmRleC5qcz8xMWMyIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBiczU4Y2hlY2sgPSByZXF1aXJlKCdiczU4Y2hlY2snKVxuXG5mdW5jdGlvbiBkZWNvZGVSYXcgKGJ1ZmZlciwgdmVyc2lvbikge1xuICAvLyBjaGVjayB2ZXJzaW9uIG9ubHkgaWYgZGVmaW5lZFxuICBpZiAodmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIGJ1ZmZlclswXSAhPT0gdmVyc2lvbikgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIG5ldHdvcmsgdmVyc2lvbicpXG5cbiAgLy8gdW5jb21wcmVzc2VkXG4gIGlmIChidWZmZXIubGVuZ3RoID09PSAzMykge1xuICAgIHJldHVybiB7XG4gICAgICB2ZXJzaW9uOiBidWZmZXJbMF0sXG4gICAgICBwcml2YXRlS2V5OiBidWZmZXIuc2xpY2UoMSwgMzMpLFxuICAgICAgY29tcHJlc3NlZDogZmFsc2VcbiAgICB9XG4gIH1cblxuICAvLyBpbnZhbGlkIGxlbmd0aFxuICBpZiAoYnVmZmVyLmxlbmd0aCAhPT0gMzQpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBXSUYgbGVuZ3RoJylcblxuICAvLyBpbnZhbGlkIGNvbXByZXNzaW9uIGZsYWdcbiAgaWYgKGJ1ZmZlclszM10gIT09IDB4MDEpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjb21wcmVzc2lvbiBmbGFnJylcblxuICByZXR1cm4ge1xuICAgIHZlcnNpb246IGJ1ZmZlclswXSxcbiAgICBwcml2YXRlS2V5OiBidWZmZXIuc2xpY2UoMSwgMzMpLFxuICAgIGNvbXByZXNzZWQ6IHRydWVcbiAgfVxufVxuXG5mdW5jdGlvbiBlbmNvZGVSYXcgKHZlcnNpb24sIHByaXZhdGVLZXksIGNvbXByZXNzZWQpIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyBCdWZmZXIoY29tcHJlc3NlZCA/IDM0IDogMzMpXG5cbiAgcmVzdWx0LndyaXRlVUludDgodmVyc2lvbiwgMClcbiAgcHJpdmF0ZUtleS5jb3B5KHJlc3VsdCwgMSlcblxuICBpZiAoY29tcHJlc3NlZCkge1xuICAgIHJlc3VsdFszM10gPSAweDAxXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIGRlY29kZSAoc3RyaW5nLCB2ZXJzaW9uKSB7XG4gIHJldHVybiBkZWNvZGVSYXcoYnM1OGNoZWNrLmRlY29kZShzdHJpbmcpLCB2ZXJzaW9uKVxufVxuXG5mdW5jdGlvbiBlbmNvZGUgKHZlcnNpb24sIHByaXZhdGVLZXksIGNvbXByZXNzZWQpIHtcbiAgaWYgKHR5cGVvZiB2ZXJzaW9uID09PSAnbnVtYmVyJykgcmV0dXJuIGJzNThjaGVjay5lbmNvZGUoZW5jb2RlUmF3KHZlcnNpb24sIHByaXZhdGVLZXksIGNvbXByZXNzZWQpKVxuXG4gIHJldHVybiBiczU4Y2hlY2suZW5jb2RlKFxuICAgIGVuY29kZVJhdyhcbiAgICAgIHZlcnNpb24udmVyc2lvbixcbiAgICAgIHZlcnNpb24ucHJpdmF0ZUtleSxcbiAgICAgIHZlcnNpb24uY29tcHJlc3NlZFxuICAgIClcbiAgKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZGVjb2RlOiBkZWNvZGUsXG4gIGRlY29kZVJhdzogZGVjb2RlUmF3LFxuICBlbmNvZGU6IGVuY29kZSxcbiAgZW5jb2RlUmF3OiBlbmNvZGVSYXdcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/wif/index.js\n");

/***/ })

};
;