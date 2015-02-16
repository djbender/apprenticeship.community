(function(AC) {
  var invite = AC.invite = function(inviteCode, applyToJoinElement, jQuery) {
    var $ = jQuery;
    var $applyToJoin = $(applyToJoinElement);
    if(inviteCode === "" || inviteCode === undefined) {
      $applyToJoin.find(".applications-closed").show();
      $applyToJoin.find(".applications-open").hide();
    } else {
      $applyToJoin.find(".applications-open").show();
      $applyToJoin.find(".applications-closed").hide();
    }
  };
})(window.AC = window.AC || {})
