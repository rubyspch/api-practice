export async function getBoredActivity() {
  let activity = await fetch("http://www.boredapi.com/api/activity/");
  let body = await activity.json();
  return body.activity;
}
