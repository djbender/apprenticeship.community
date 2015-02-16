(function(AC) {
  // Retrieves a query param from the location global.
  // Example: ?foo=bar&baz=car
  //    > AC.queryParam(foo)
  //    < "bar"
  //    > AC.queryParam(baz)
  //    < "car"
  //    > AC.queryParam(bin)
  //    < ""
  AC.queryParam = function(param) {
    var name = param.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]")
    ,   regex = new RegExp("[\\?&]" + name + "=([^&#]*)")
    ,   results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  };
})(window.AC = window.AC || {})
