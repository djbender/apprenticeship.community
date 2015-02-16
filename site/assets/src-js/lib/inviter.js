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
  AC.invite = function(inviteCode, $applyToJoin, appendParamToUrl) {
    var $closed = $applyToJoin.find(".applications-closed")
    var $open = $applyToJoin.find(".applications-open")
    if(inviteCode === "" || inviteCode === undefined) {
      $closed.show();
      $open.hide();
    } else {
      var initialFormUrl = $open.find('a').attr("href"),
          formUrlWithInviteCode = appendParamToUrl(initialFormUrl, "invitecode", inviteCode);
      $open.find('a').attr("href", formUrlWithInviteCode);
      $open.show();
      $closed.hide();
    }
  };
})(window.AC = window.AC || {})
