import request from '@/utils/api'

export const getArticleList = (data: any) => {
  return request({
    url: '/post/findAll',
    method: 'GET',
    data
  })
}

// 详情
export const getArticleDetail = (id: number) => {
  return request({
    url: `/post/${id}`,
    method: 'GET',
  })
}