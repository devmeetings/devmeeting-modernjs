/// System.js potrafi przetwarzać moduły w locie
System.config({
  defaultJSExtensions: true,
  /// Jako transpiler możemy wybrać babel, traceur lub typescript
  transpiler: 'babel',
  map: {
    /// Podajemy tylko ścieżkę do transpilera
    "babel": "/cdn/babel-core/5.8.34/browser.js",
    "lodash": "/cdn/lodash.js/3.9.3/lodash.js",
  }
});
