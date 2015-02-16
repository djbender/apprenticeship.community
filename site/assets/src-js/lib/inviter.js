(function(AC) {
  // Shows the button to apply if an invite code is provided.
  // Example:
  //    > AC.invite("", $(".apply-to-join"));
  //    < undefined
  //    > $('.apply-to-join .applications-open').is(':visible')
  //    < false
  //    > AC.invite("yourock", $(".apply-to-join"));
  //    < undefined
  //    > $('.apply-to-join .applications-open').is(':visible')
  //    < true
  //    AC.invite
  AC.invite = function(inviteCode, $applyToJoin) {
    if(inviteCode === "" || inviteCode === undefined) {
      $applyToJoin.find(".applications-closed").show();
      $applyToJoin.find(".applications-open").hide();
    } else {
      $applyToJoin.find(".applications-open").show();
      $applyToJoin.find(".applications-closed").hide();
    }
  };
})(window.AC = window.AC || {})
