(function(AC) {
  var queryParam = AC.queryParam = function(param) {
    var name = param.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]")
    ,   regex = new RegExp("[\\?&]" + name + "=([^&#]*)")
    ,   results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  };
})(window.AC = window.AC || {})
