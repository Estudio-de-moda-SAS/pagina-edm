const POST_LOGIN_REDIRECT_KEY = "post_login_redirect_pending";

export function markPostLoginRedirectPending() {
  if (typeof window === "undefined") return;
  window.sessionStorage.setItem(POST_LOGIN_REDIRECT_KEY, "true");
}

export function consumePostLoginRedirectPending() {
  if (typeof window === "undefined") return false;

  const isPending = window.sessionStorage.getItem(POST_LOGIN_REDIRECT_KEY) === "true";

  if (isPending) {
    window.sessionStorage.removeItem(POST_LOGIN_REDIRECT_KEY);
  }

  return isPending;
}

export function hasPostLoginRedirectPending() {
  if (typeof window === "undefined") return false;
  return window.sessionStorage.getItem(POST_LOGIN_REDIRECT_KEY) === "true";
}

export function clearPostLoginRedirectPending() {
  if (typeof window === "undefined") return;
  window.sessionStorage.removeItem(POST_LOGIN_REDIRECT_KEY);
}
