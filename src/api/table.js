/*
 * @Author: itaffy
 * @Date: 2022-07-08 22:27:39
 * @LastEditors: itaffy
 * @LastEditTime: 2022-07-09 01:38:48
 */
import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params,
  })
}
