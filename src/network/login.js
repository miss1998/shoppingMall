import { request } from './request'
export function getUserInfo(){
    return request({
        url:"permission/getMenu",
        type:"post"
    })
}