$(document).ready(function() {

  var inviteCode = AC.queryParam("invite-code");
  var applyToJoinView = new AC.ApplyToJoinView($(".apply-to-join"), {
      inviteCode: inviteCode
    , acceptingApplications: true
  });

  AC.invite(inviteCode, applyToJoinView.$buttons);

  Track.cta(".newsletter-form", "Signed up for Newsletter", {
    position: "top-right"
  , color: "Blue"
  , category: "Engagement"
  , pageSubject: $('body').attr('id')
  });

  Track.cta(".top applications-open .button", "Began application", {
    position: "top-left"
  , color: "Blue"
  , category: "Applying"
  , pageSubject: $('body').attr('id')
  });
  Track.cta(".bottom applications-open .button", "Began application", {
    position: "bottom-center"
  , color: "Blue"
  , category: "Applying"
  , pageSubject: $('body').attr('id')
  });

  Track.cta(".top .applications-closed a", "Requested invite", {
    color: "Blue"
  , category: "Applying"
  , pageSubject: $('body').attr('id')
  });

  Track.cta(".bottom .applications-closed a", "Requested invite", {
    color: "Blue"
  , category: "Applying"
  , pageSubject: $('body').attr('id')
  });
});
