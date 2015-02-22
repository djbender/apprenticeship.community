(function(AC) {
  // Appends inviteCode to set of elements href's
  // Example:
  //    > AC.invite("you-rock", $(".apply-to-join a"));
  //    < undefined
  //    > $(".apply-to-join a").attr('href')
  //    < ["example.com?inviteCode=you-rock", "example.com?foo&inviteCode=you-rock"]
  AC.invite = function(inviteCode, $links, options) {
    options = options || {};
    if(inviteCode === "" || inviteCode === undefined) {
      return;
    } else {
      var appendParamToUrl = options.appendParamToUrl || AC.URLBuilder.appendParam;
      $links.each(function(index, link) {
        var $link = $(link);
        var initialUrl = $link.attr("href"),
            urlWithInviteCode = appendParamToUrl(initialUrl, "invitecode", inviteCode);
        $link.attr("href", urlWithInviteCode);
      });
    }
  };
})(window.AC = window.AC || {})
