import {
	baseUrl
} from '../config/env'
import {
	setStore,
	getStore
} from '../common/utils.js'

const send = (url, data = {}, method = 'POST', showLoading = true, base_url = '') => {
	uni.showLoading({
		title: '加载中'
	})
	const token=getStore('token');

	
	if(token){
		data.token=token;
	}
	
	return new Promise((resolve) => {
		uni.request({
			method: method,
			url: (base_url ? base_url : baseUrl) + url,
			data: data,
			header: {
				"content-type": "application/x-www-form-urlencoded"
			},
			success: (res) => {
				resolve(res.data)
			},
			fail: (res) => {
				uni.navigateTo({
					url:'../login/login'
				})
				uni.showModal({
					content: "请求失败，请重试！",
					showCancel: false
				})
			},
			complete() {
				uni.hideLoading()
			}

		})
	})
}

export const request = {
	get: (url, data) => {
		return send(url, data, 'GET')
	},
	post: (url, data) => {
		return send(url, data, 'POST')
	}
}
