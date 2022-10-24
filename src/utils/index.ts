interface path {
  id: number,
  path: string,
  name: string
}

export const nav_path: Array<path> = [
  { id: 1, path: '/article', name: '文章' },
  { id: 2, path: '/creation', name: '作品' },
  { id: 3, path: '/history', name: '记忆' },
  { id: 4, path: '/jottings', name: '闪念' },
  { id: 5, path: '/comments', name: '留言' }
]
