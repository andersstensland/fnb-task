export function getUserId() {
  if (typeof window === "undefined") {
    return null; // session storage is not available in SSR
  }

  let userId = sessionStorage.getItem("userId");
  if (!userId) {
    userId = Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem("userId", userId);
  }
  return userId;
}
