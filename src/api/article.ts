import request from '@/utils/api'

export const getArticleList = (data: any) => {
  return request({
    url: '/article/list',
    method: 'GET',
    data
  })
}