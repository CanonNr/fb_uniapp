<template>
	<view>
		<!-- 顶部导航 -->
		<view class="topTabBar" :style="{position:headerPosition,top:headerTop}">
			
			<view class="grid" v-for="(grid,tbIndex) in orderType" :key="tbIndex" @tap="showType(tbIndex)">
				
				<view class="text"  :class="[tbIndex==tabbarIndex?'on':'']">{{grid}}</view>
				
			</view>
		</view>
		<!-- 考虑非APP端长列表和复杂的DOM使用scroll-view会卡顿，所以漂浮顶部选项卡使用page本身的滑动 -->
		<view class="order-list">
			<view class="list">
				<view class="onorder" v-if="list.length==0">
					<image src="../../../static/img/noorder.png"></image>
					<view class="text">
						没有相关订单
					</view>
				</view>
				<view class="row" v-for="(row,index) in list" :key="index">
					<view class="type">{{typeText[row.type]}}</view>
					<view class="order-info">
						<view class="left">
							<image :src="row.goods.cover"></image>
						</view>
						<view class="right">
							<view class="name">
								{{row.order_name}}
							</view>
							<view class="spec">{{row.spec}}</view>
						<!-- 	<view class="price-number">
								￥<view class="price">{{row.price}}</view>
								x<view class="number">{{row.numner}}</view>
							</view> -->
						</view>
						
					</view>
					<view class="detail">
						<!-- <view class="number">共{{row.numner}}件商品</view> --><view class="sum">合计￥<view class="price">{{row.total}}</view></view><view class="nominal">(含运费 ￥{{row.freight}})</view>
					</view>
					<view class="btns">
						
						<block v-if="row.type=='1'"></block>
						<block v-if="row.type=='2'"><view class="pay" @tap="toFinish(row)">确认收货</view></block>
						<block v-if="row.status=='2' && row.comment_status ==0" ><view class="default" @tap="toComment(row.id)">评价</view></block>
					
						
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import {
			setStore,
			getStore
		} from '../../../common/utils.js';
	import {
			request
		} from '../../../libs/request';
		import {
			baseUrl
		} from 'config/env';
	export default {
		data() {
			return {
				headerPosition:"fixed",
				headerTop:"0px",
				typeText:{
					
				},
				orderType: {10:"全部",11:'待发货',12:'待送达',13:'已送达'},
				//订单列表 演示数据
				orderList:[
					[
						{ type:"0",ordersn:0,goods_id: 0, img: '/static/img/goods/p1.jpg', name: '商品名称商品名称商品名称商品名称商品名称', price: '168.00',payment:168.00,freight:12.00,spec:'规格:S码',numner:1 },
						{ type:"0",ordersn:1,goods_id: 1, img: '/static/img/goods/p2.jpg', name: '商品名称商品名称商品名称商品名称商品名称', price: '168.00',payment:168.00,freight:12.00,spec:'规格:S码',numner:1 },
						{ type:"1",ordersn:1,goods_id: 1, img: '/static/img/goods/p3.jpg', name: '商品名称商品名称商品名称商品名称商品名称', price: '168.00',payment:168.00,freight:12.00,spec:'规格:S码',numner:1 },
						{ type:"2",ordersn:1,goods_id: 1, img: '/static/img/goods/p4.jpg', name: '商品名称商品名称商品名称商品名称商品名称', price: '168.00',payment:168.00,freight:12.00,spec:'规格:S码',numner:1 },
						{ type:"3",ordersn:1,goods_id: 1, img: '/static/img/goods/p5.jpg', name: '商品名称商品名称商品名称商品名称商品名称', price: '168.00',payment:168.00,freight:12.00,spec:'规格:S码',numner:1 },
				],
					[
						{ type:"0",ordersn:0,goods_id: 0, img: '/static/img/goods/p1.jpg', name: '商品名称商品名称商品名称商品名称商品名称', price: '￥168',payment:168.00,freight:12.00,spec:'规格:S码',numner:1 },
						{ type:"0",ordersn:1,goods_id: 1, img: '/static/img/goods/p2.jpg', name: '商品名称商品名称商品名称商品名称商品名称', price: '￥168',payment:168.00,freight:12.00,spec:'规格:S码',numner:1 }
					],
					[
						//无
					],
					[
						{ type:"2",ordersn:1,goods_id: 1, img: '/static/img/goods/p4.jpg', name: '商品名称商品名称商品名称商品名称商品名称', price: '￥168',payment:168.00,freight:12.00,spec:'规格:S码',numner:1 }
					],
					[
						{ type:"3",ordersn:1,goods_id: 1, img: '/static/img/goods/p5.jpg', name: '商品名称商品名称商品名称商品名称商品名称', price: '￥168',payment:168.00,freight:12.00,spec:'规格:S码',numner:1 }
					]
					
				],
				list:[],
				tabbarIndex:10
			};
		},
		onLoad(option) {
			const userid=getStore('user_id');
			if(userid == 0){
				uni.navigateTo({
					url:'../../login/login'
				})
				return
			}
			
			//option为object类型，会序列化上个页面传递的参数
			console.log(option.tbIndex);
			
			if(option.tbIndex === undefined){
				option.tbIndex = 10
			}
			
			let tbIndex = parseInt(option.tbIndex);
			this.list = this.orderList[tbIndex];
			this.tabbarIndex = tbIndex;
			//兼容H5下排序栏位置
			// #ifdef H5
				let Timer = setInterval(()=>{
					let uniHead = document.getElementsByTagName('uni-page-head');
					if(uniHead.length>0){
						this.headerTop = uniHead[0].offsetHeight+'px';
						clearInterval(Timer);//清除定时器
					}
				},1);
			// #endif
			
			//const userid=getStore('user_id');
			//option.cid=1;
			var that = this
			var order_type = 10;
			console.log(option.tbIndex)
			switch(option.tbIndex){
				case '11':
					order_type = 0;
					break;
				case '12':
					order_type = 1;
					break;
				case '13':
					order_type = 2;
					break;
				default:
					order_type = 10;
					break;
			}
			console.log(order_type)
			request.get('/api/order/get/'+userid+'/'+order_type).then(function(res) {
				let data = res.data;
				for(let i=0;i<data.length;i++){
					data[i]['goods']['cover'] = baseUrl+data[i]['goods']['cover']
					
				}
				 that.list=data
			}, function(error) {
				console.log('error')
			})
			
			
		},
		onShow() {
			const userid=getStore('user_id');
			if(userid == 0){
				uni.navigateTo({
					url:'../../login/login'
				})
				return
			}
			//option.cid=1;
			var that = this
			//var contactmsg = 
			// request.get('/v1/getorderlist/'+userid).then(function(res) {
				 
			// 	 that.orderList=res.data
			// 	 // that.goodsData.id=res.data.id,
			// 	 //  that.goodsData.price=res.data.price,
			// 	 //  that.goodsData.img=res.data.goods_cover,
			// 	 // that.swiperList.img=res.data.goods_cover,
				  
			// 	// console.log(that.goodsData)
				 
			// }, function(error) {
			// 	console.log('error')
			// })
		},
		onPageScroll(e){
			return;
			//兼容iOS端下拉时顶部漂移
			this.headerPosition = e.scrollTop>=0?"fixed":"absolute";
		},
		methods: {
			showType(tbIndex){
				console.log(tbIndex)
				this.tabbarIndex = tbIndex;
				this.list = [];
				var that = this
				const userid=getStore('user_id');
				var order_type = 10
				switch(tbIndex){
					case '11':
						order_type = 0;
						break;
					case '12':
						order_type = 1;
						break;
					case '13':
						order_type = 2;
						break;
					default:
						order_type = 10;
						break;
				}
				
				request.get('/api/order/get/'+userid+'/'+order_type).then(function(res) {
					let data = res.data;
					for(let i=0;i<data.length;i++){
						data[i]['goods']['cover'] = baseUrl+data[i]['goods']['cover']
					}
					 that.list=data
				}, function(error) {
					console.log('error')
				})
			},
			
			toFinish(row){
				uni.showLoading({
					title:'正在确认订单...'
				})
				const userid=getStore('userid');
				
					// const userPhone=getStore('userPhone');
					request.post('/v1/order/finsh',{'orderid':row.ordersn,'openid':userid}).then(function(res) {
						console.log(res)
					
					uni.showToast({title: "已确认"});
						
				
						uni.hideLoading();
						uni.navigateBack();
					}, function(error) {
						console.log('error')
					})
				
				
			},
			toPayment(row){
				//本地模拟订单提交UI效果
				uni.showLoading({
					title:'正在获取订单...'
				})
				let paymentOrder = [];
				paymentOrder.push(row);
				setTimeout(()=>{
					uni.setStorage({
						key:'paymentOrder',
						data:paymentOrder,
						success: () => {
							uni.hideLoading();
							uni.navigateTo({
								url:'../../pay/payment/payment?amount='+row.payment+"&orderid="+row.ordersn
							})
						}
					})
				},500)
			},
			toComment(id){
				uni.navigateTo({
					url:'../comment/comment?order_id='+id
				})
			}
		}
	}
</script>

<style lang="scss">
page{
	background-color: #f3f3f3;
}
.topTabBar{
	width: 100%;
	position: fixed;
	top: 0;
	z-index: 10;
	background-color: #f8f8f8;
	height: 80upx;
	display: flex;
	justify-content: space-around;
	.grid{
		width: 20%;
		height: 80upx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #444;
		font-size: 28upx;
		.text{
			height: 76upx;
			display: flex;
			align-items: center;
			&.on{
				color: #f06c7a;
				border-bottom: solid 4upx #f06c7a;
			}
		}
		
	}
}
.order-list{
	margin-top: 80upx;
	padding-top: 20upx;
	width: 100%;
	.list{
		width: 94%;
		margin: 0 auto;
		.onorder{
			width: 100%;
			height: 50vw;
			display: flex;
			justify-content: center;
			align-content: center;
			flex-wrap: wrap;
			image{
				width: 20vw;
				height: 20vw;
				border-radius: 100%;
			}
			.text{
				width: 100%;
				height: 60upx;
				font-size: 28upx;
				color: #444;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
		.row{
			width: calc(100% - 40upx);
			padding: 10upx 20upx;
			border-radius: 10upx;
			background-color: #fff;
			margin-bottom: 20upx;
			.type{
				font-size: 26upx;
				color: #ec652f;
				height: 50upx;
				display: flex;
				align-items: center;
			}
			.order-info{
				width: 100%;
				display: flex;
				.left{
					flex-shrink: 0;
					width: 25vw;
					height: 25vw;
					image{
						width: 25vw;
						height: 25vw;
						border-radius: 10upx;
					}
				}
				.right{
					width: 100%;
					margin-left: 10upx;
					position: relative;
					.name{
						width: 100%;
						font-size: 28upx;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						overflow: hidden;
					}
					.spec{
						color: #a7a7a7;
						font-size: 22upx;

					}
					.price-number{
						position: absolute;
						bottom: 0;
						width: 100%;
						display: flex;
						justify-content: flex-end;
						font-size: 22upx;
						color: #333;
						display: flex;
						align-items: flex-end;
						.price{
							font-size: 24upx;
							margin-right: 5upx;
						}
						
					}
				}
			}
			.detail{
				display: flex;
				justify-content: flex-end;
				align-items: flex-end;
				height: 60upx;
				font-size: 26upx;
				.sum{
					padding: 0 8upx;
					display: flex;
					align-items: flex-end;
					.price{
						font-size: 30upx;
					}
				}
				
			}
			.btns{
				height: 80upx;
				display: flex;
				align-items: center;
				justify-content: flex-end;
				view{
					min-width: 120upx;
					height: 50upx;
					padding: 0 20upx;
					border-radius: 50upx;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 28upx;
					margin-left: 20upx;
				}
				.default{
					border: solid 1upx #ccc;
					color: #666;
				}
				.pay{
					border: solid 1upx #ec652f;
					color: #ec652f;
				}
			}
		}
	}
}
</style>
