interface path {
  id: number,
  path: string,
  name: string
}

export const nav_path: Array<path> = [
  { id: 1, path: '/article', name: '文章' },
  { id: 2, path: '/creation', name: '作品' },
  { id: 3, path: '/history', name: '记忆' },
  // { id: 4, path: '/jottings', name: '闪念' },
  { id: 5, path: '/comments', name: '留言' }
]

export const user_info_link: Array<path> = [
  { id: 1, path: '', name: 'github' },
  { id: 2, path: '', name: 'wechat' },
  { id: 3, path: '', name: 'qqtelp' },
]