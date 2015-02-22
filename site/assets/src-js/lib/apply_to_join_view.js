(function(AC) {
  // Encapsulates interactions with the DOM elements used in
  // the application to join widget.
  // Example:
  AC.ApplyToJoinView = function($element, options) {
    options = options || {};
    var $closed = $element.find(".applications-closed")
    var $open = $element.find(".applications-open")
    var acceptingApplications = options.acceptingApplications || false;
    var inviteCode = options.inviteCode;
    this.$buttons = $element.find("a.button");
    if (acceptingApplications || inviteCode) {
      $open.show();
      $closed.hide();
    } else {
      $open.hide();
      $closed.show();
    }
  }

  // It exposes the buttons as a list of elements.
  // > var applyToJoin = new AC.ApplyToJoin($(".apply-to-join"));
  // < undefined
  // > applyToJoin.$buttons;
  // < [<a class="button" href="...">...</a>, <a ...>...</a>]
  // When applications are closed
  // > var applyToJoin = new AC.ApplyToJoin($(".apply-to-join"));
  // < undefined
  // > $('.apply-to-join .applications-open').is(':visible');
  // < false
  // > $('.apply-to-join .applications-closed').is(':visible');
  // < true

  // When applications are closed and an inviteCode is provided
  // > var applyToJoin = new AC.ApplyToJoin($(".apply-to-join"), { 
  //         inviteCode: "you-rock"
  //       , acceptingApplications: false
  //   });
  // < undefined
  // > $('.apply-to-join .applications-open').is(':visible');
  // < true
  // > $('.apply-to-join .applications-closed').is(':visible');
  // < false

  // When applications are open
  // > var applyToJoin = new AC.ApplyToJoin($(".apply-to-join"), {
  //                           acceptingApplications: true
  //   });
  // < undefined
  // > $('.apply-to-join .applications-open').is(':visible');
  // < false
  // > $('.apply-to-join .applications-closed').is(':visible');
  // < true
})(window.AC = window.AC || {})
