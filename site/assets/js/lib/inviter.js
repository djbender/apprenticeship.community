(function(exports) {
  var invite = exports.invite = function(inviteCode, applyToJoinElement, jQuery) {
    var $ = jQuery;
    var $applyToJoin = $(applyToJoinView);
    if(inviteCode === "" || inviteCode === undefined) {
      $applyToJoin.find(".applications-closed").show();
    } else {
      $applyToJoin.find(".applications-open").show();
    }
  };
})(window || exports)
