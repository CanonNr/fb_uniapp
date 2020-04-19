<template>
    <div class="box">
        <textarea placeholder="请输入..." maxlength="120" @input="descInput" v-model="desc" class="mytextarea" />
        <span class="numberV">{{txtVal}}/120</span>
		<button type="primary" @tap="submit()">提 交</button>
	</div>
	
</template>

<script>
	import {
			setStore,
			getStore
		} from '../../../common/utils.js';
	import {request} from '../../../libs/request';
	export default {
		data() {
			return {
				order_id:0,		
				txtVal: 0,
				desc:""
			}

		},
		onLoad(option) {
			if(option.order_id === undefined){
				uni.navigateTo({
					url:'../order_list/order_list',
				});
				
			}
			this.order_id = option.order_id
		},
		methods: {
			descInput(){
				this.txtVal = this.desc.length;
			},
		submit(){
			let desc = this.desc
			let order_id = this.order_id
			request.post('/api/order/comment',{
				content:desc,
				order_id:order_id
			}).then(function(res) {
				uni.navigateTo({
					url:'../order_list/order_list',
				});		 
			}, function(error) {
				console.log('error')
			})
		}

		}
	}
</script>

<style>
.box{
	border:1px solid #0077AA;
	margin: 5px;
	padding: 10px;
}
.mytextarea {
	display: inline-block;
	width: 100%;
	height: 80px;
	line-height: 20px;
	font-size: 15px;
	resize: none;
	border: #0077AA;
}

</style>
