import request from '../utils/http'
// 加入购物车

export function joinGoods(courseId) {

    return request.get(`/api/weChat/applet/shoppingCart/join/shoppingCart/${courseId}`)
}


// 购物车列表

export function goodsList() {
    return request.get(`/api/weChat/applet/shoppingCart/my/list`)
}



// 删除购物车
export function delShop(shoppingCartId) {
    return request.get(`/api/weChat/applet/shoppingCart/remove/${shoppingCartId}`)
}
