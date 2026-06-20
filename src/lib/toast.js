// Простой глобальный тост через кастомное событие.
// Любой компонент вызывает showToast(...), а <Toaster/> в корне его показывает.
export function showToast(message) {
  window.dispatchEvent(new CustomEvent('app:toast', { detail: { message } }))
}
