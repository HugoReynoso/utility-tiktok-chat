import { ref } from "vue";
import { isDemo } from "./demo";
/** True once the backend has answered. Render Free sleeps after an idle period. */
export const serverAwake = ref(isDemo);
export function wakeServer() {
  if (isDemo) return;
  const origin = import.meta.env.VITE_API_URL?.trim() ?? "";
  // The health route sends no CORS headers: an opaque answer is enough here.
  fetch(`${origin}/api/health`, { mode: "no-cors", cache: "no-store" })
    .then(() => (serverAwake.value = true))
    .catch(() => {});
}
