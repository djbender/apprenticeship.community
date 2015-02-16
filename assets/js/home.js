$(document).ready(function() {
  AC.invite(AC.queryParam("invite-code"), $('.apply-to-join'));

  Track.cta(".applications-open .button", "Began application", {
    color: "Blue"
  , category: "Applying"
  , pageSubject: $('body').attr('id')
  });
  Track.cta(".applications-closed a", "Requested invite", {
    color: "Blue"
  , category: "Applying"
  , pageSubject: $('body').attr('id')
  });
});
