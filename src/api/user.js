/*
 * @Author: itaffy
 * @Date: 2022-07-08 22:27:39
 * @LastEditors: itaffy
 * @LastEditTime: 2022-07-09 01:38:44
 */
import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/vue-admin-template/user/login',
    method: 'post',
    data,
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token },
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post',
  })
}
