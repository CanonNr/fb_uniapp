const baseUrl = 'http://uniapp.dcloud.io';  
const nowTime = Date.now || function () {  
    return new Date().getTime();  
};  
export default {  
    baseUrl,  
    nowTime,  
}

/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
	if (!name) return;
	if (typeof content !== 'string') {
		content = JSON.stringify(content);
	}
	 uni.setStorageSync(name, content);
}

/**
 * 获取localStorage
 */
export const getStore = name => {
	if (!name) return;
	return uni.getStorageSync(name);
}