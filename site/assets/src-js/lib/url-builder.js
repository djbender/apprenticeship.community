(function(AC) {
  AC.URLBuilder = AC.URLBuilder || {}
  //
  // Example:
  //    > AC.URLBuilder.appendParam("http://example.com", "name", "value")
  //    < "http://example.com?name=value"
  //    > AC.URLBuilder.appendParam("http://example.com?foo=bar", "name", "value")
  //    < "http://example.com?foo=bar&name=value"
  var appendParam = AC.URLBuilder.appendParam = function(url, param, value) {
    var joinChar = (url.indexOf("?") === -1) ? "?" : "&"
    return url + joinChar + param + "=" + value;
  }

  var assertEqual = function(a, b) {
    console.log(a === b, a, b);
  }

  assertEqual("http://example.com?foo=bar", appendParam("http://example.com", "foo", "bar"));
  assertEqual("http://example.com?foo=bar&bim=baz", appendParam("http://example.com?foo=bar", "bim", "baz"));
})( typeof window === "undefined" ? exports : window.AC = window.AC)
