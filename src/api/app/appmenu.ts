import request from "/@/utils/request";

export const pageList = (params?: Object) => {
    return request({
        url: '/admin/appmenu/tree',
        method: "get",
        params
    })
}

export const info = (id: String) => {
    return request({
        url: `/admin/appmenu/${id}`,
        method: "get",
    })
}

export const save = (data: Object) => {
    return request({
        url: '/admin/appmenu',
        method: "post",
        data: data
    })
}

export const update = (data: Object) => {
    return request({
        url: '/admin/appmenu',
        method: "put",
        data: data
    })
}

export const addObj = (data: Object) => {
    return request({
        url: '/admin/appmenu',
        method: "post",
        data: data
    })
}

export function delObj(ids?: object) {
    return request({
        url: '/admin/appmenu',
        method: 'delete',
        data: ids
    })
}

export function getDetails(obj: Object) {
    return request({
        url: '/admin/appmenu/details/' + obj,
        method: 'get'
    })
}

export function validatePermission(rule: any, value: any, callback: any, isEdit: boolean) {
    if (isEdit) {
        return callback()
    }

    getDetails(value).then(response => {
        const result = response.data
        if (result !== null) {
            callback(new Error('权限标识已经存在'))
        } else {
            callback()
        }
    })
}


