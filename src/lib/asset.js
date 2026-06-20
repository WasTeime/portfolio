// Публичные файлы с учётом base path (секретный префикс в production)
export function asset(path) {
  const file = path.startsWith('/') ? path.slice(1) : path
  return `${import.meta.env.BASE_URL}${file}`
}
