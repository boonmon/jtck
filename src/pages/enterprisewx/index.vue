<template>
	<div>
		<mt-header title="老板专区">
			<router-link to="/" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>
		<div class="inc-serve">
			<ul class="clearfix">
				<li v-for="item in items">
					<section class="">
						<div class="inc-serve-item">
							<a href="http://s.amazeui.org/media/i/demos/bing-2.jpg" class="">
								<div class="fx-rudia  fx-lightred" v-bind:style="{background:item.bgColor}">
									<!--<img src="img/raw_1.png" alt="" />-->
									<i class="iconfont icon-taizhangjilu"></i>
								</div>
								<h3 class="am-gallery-title">{{ item.title }}</h3>
							</a>
						</div>
						<div class="inc-serve-content">
							<p>
								<span v-for="content in item.contents" v-bind:style="{marginRight:content.move}"><a v-bind:href="content.conUrl">{{ content.title }}</a></span>
							</p>
						</div>

					</section>
				</li>
			</ul>
		</div>
		<div class="inc-hotproduct">
			<section class="inc-hotproduct-title">
				<span>热门产品</span>
			</section>
			<section class="inc-hotproduct-show clearfix" v-for="list in lists">
				<div class="inc-hotproduct-show-photo">
					<!--<img src="img/raw_4.jpeg.jpg" />-->
					<img v-bind:src="list.imageSrc">
					<div class="inc-hotproduct-phototitile">
						<span>{{ list.hint }}</span>
						<div class="titleshadow"></div>
					</div>
				</div>
				<div class="inc-hotproduct-show-content">
					<p>{{ list.title }}</p>
					<span>{{ list.introduce }}</span>
					<div class="inc-hotproduct-price"><span><b>{{ list.price }}</b>/年起</span></div>
				</div>
			</section>
		</div>
	</div>
</template>
<style>
	.mint-header {
		background-color: #ff7043 !important;
	}
	
	.mint-header-title {
		margin: 0;
	}
	
	.inc-serve {
		background: #fff;
		padding: 0;
		margin-top: 0.2rem;
		margin-bottom: 0.5rem;
	}
	
	.inc-serve {
		text-align: center;
	}
	
	.inc-serve ul {
		margin: 0;
	}
	
	.inc-serve ul li {
		float: left;
		width: 50%;
	}
	
	.inc-serve li {
		padding: 0.8rem 0 1rem 0;
		border: 1px solid #e3e3e3;
	}
	
	.inc-serve ul li:nth-child(1),
	.inc-serve ul li:nth-child(2) {
		border-bottom: none;
	}
	
	.inc-serve ul li:nth-child(1),
	.inc-serve ul li:nth-child(3) {
		border-right: none;
	}
	
	.inc-serve h3 {
		margin-bottom: 0.8rem !important;
		color: #474747;
	}
	
	.inc-serve h3,
	.inc-serve p {
		margin-top: 0.3rem;
		margin-bottom: 0;
		font-size: 1.2rem;
	}
	
	.inc-serve-content {
		width: 18rem;
		margin: 0 auto;
		padding: 0 1rem 0 1rem;
	}
	
	.inc-serve-content span {
		display: inline-block;
		height: 2rem;
	}
	
	.inc-serve .inc-serve-content a {
		color: #999;
		font-size: 1.2rem;
	}
	
	.inc-serve .fx-rudia {
		width: 5rem;
		height: 5rem;
		border-radius: 50%;
		margin: 0 auto;
		line-height: 5rem;
	}
	
	.inc-serve i {
		font-size: 2.8rem;
		color: #fff;
	}
	
	.inc-hotproduct-title {
		width: 10.1rem;
		height: 2.5rem;
		background: #FB8C00;
		font-size: 12px;
		color: #fff;
		text-align: center;
		line-height: 2.5rem;
		border-radius: 0 1.5rem 1.5rem 0;
	}
	
	.inc-hotproduct-show-photo {
		position: relative;
		height: 8rem;
		width: 30%;
		padding-right: 0;
		padding-left: 1.5rem;
	}
	
	.inc-hotproduct-show img {
		width: 100%;
		height: 100%;
	}
	
	.inc-hotproduct-show {
		padding: 1.5rem 0;
		background: #fff;
		margin-bottom: 0.2rem;
		border: 1px solid #e3e3e3;
	}
	
	.inc-hotproduct-show p {
		font-size: 1.4rem;
		color: #FF9800;
	}
	
	.inc-hotproduct-show-content span {
		font-size: 1rem;
		letter-spacing: -0.05rem;
		color: #9E9E9E;
		display: inline-block;
		line-height: 1.3rem;
		display: table-cell;
		vertical-align: middle;
	}
	
	.inc-hotproduct-price {
		position: absolute;
		bottom: 0;
		left: 0.8rem;
		margin-top: 0.2rem;
	}
	
	.inc-hotproduct-show-content span b {
		font-size: 1.4rem;
		font-weight: 400;
		color: #FF5722;
	}
	
	.inc-hotproduct-show img {
		width: 100%;
		height: 100%;
	}
	
	.inc-hotproduct-show-content {
		position: relative;
		width: 70%;
		height: 8rem;
		display: table;
		float: left;
		padding: 0 0.8rem 0 0.8rem;
	}
	
	.inc-hotproduct-show-content p {
		position: absolute;
		margin-bottom: 0.5rem;
		letter-spacing: -0.05rem;
	}
	
	.inc-hotproduct-show-photo {
		position: relative;
		float: left;
		height: 8rem;
		width: 30%;
		padding-right: 0;
		padding-left: 1.5rem;
	}
	
	.inc-hotproduct-showtitle {
		width: 100%;
		height: 2.1rem;
		line-height: 2.1rem;
		font-size: 1.2rem;
	}
	
	.inc-hotproduct-phototitile {
		position: relative;
		width: 100%;
		height: 2.1rem;
		line-height: 2.1rem;
		text-align: center;
		transform: translateY(-2.1rem);
		-webkit-transform: translateY(-2.1rem);
	}
	
	.inc-hotproduct-phototitile span {
		position: relative;
		font-size: 1.2rem;
		color: #555;
		z-index: 99;
	}
	
	.inc-hotproduct-phototitile .titleshadow {
		position: absolute;
		width: 100%;
		height: 2.1rem;
		background: #cfcfcf;
		bottom: 0rem;
		opacity: 0.8;
	}
	
	@media (device-width:320px) and (-webkit-min-device-pixel-ratio:2) {
		/* 兼容iphone4、iphone5 */
		.inc-hotproduct-show-content p {
			font-size: 1.2rem;
		}
		.inc-hotproduct-show-content span {
			font-size: 0.9rem;
			letter-spacing: -0.05rem;
		}
		.inc-serve-content {
			width: 100%;
		}
	}
</style>
<script>
	import icon01 from '../../assets/iamges/enterprisewx/raw_4.jpeg.jpg';
	import icon02 from '../enterprisewx/img/raw_4.jpeg.jpg';
	import icon03 from '../enterprisewx/img/raw_5.jpeg.jpg';
	import icon04 from '../enterprisewx/img/raw_6.jpeg.jpg';
	export default {
		data() {
			return {
				lists: [{
						imageSrc: icon01,
						hint: '代理记账',
						price: '￥1980.00',
						title: '小规模纳税人代理记帐（内资）-零申报',
						introduce: '专业资深会计为小规模纳税人提供代理记账、纳税申报等服务，VIP客户经理上门服务.....'
					},
					{
						imageSrc: icon02,
						hint: '代理记账',
						price: '￥2980.00',
						title: '小规模纳税人代理记帐（内资）',
						introduce: '专业资深会计为小规模纳税人提供代理记账、纳税申报等服务，VIP客户经理上门服务.....'
					},
					{
						imageSrc: icon03,
						hint: '公司注册',
						price: '￥580.00',
						title: '有限责任公司注册',
						introduce: '专业工商代办人员为您办理有限责任公司注册服务，服务进展实时更新，VIP客户经理一对一服务.....'
					},
					{
						imageSrc: icon04,
						hint: '单项代办',
						price: '￥200.00',
						title: '更换三证合一营业执照',
						introduce: 'VIP客户经理上门收取相应资料，专业人员为您办理更换三证合一服务，服务进展实时掌握.....'
					}
				],
				items: [{
						bgColor: "#F29F3F",
						title: "开办公司",
						conUrl: "",
						contents: [{
								title: "认证进项发票",
								conUrl: "",
								move: "1.2rem"
							},
							{
								title: "工商年报",
								conUrl: ""
							},
							{
								title: "代开专票",
								conUrl: ""
							},
						]
					},
					{
						bgColor: "#FF6633",
						title: "财税外包",

						contents: [{
								title: "一般纳税人代理记账",
								conUrl: ""
							},
							{
								title: "小规模纳税人代理记账",
								conUrl: ""
							}
						]
					},
					{
						bgColor: "#E87E51",
						title: "财富增值",
						conUrl: "",
						contents: [{
								title: "企业所得税免税包",
								conUrl: ""
							},
							{
								title: "地方财政贡献奖励包",
								conUrl: ""
							}
						]
					},
					{
						bgColor: "#F2D309",
						title: "财税咨询",

						contents: [{
								title: "企业所得税汇算清缴报告",
								conUrl: ""
							},
							{
								title: "土地增值税清算审核报告",
								conUrl: ""
							}
						]
					}
				]
			}
		},
		methods: {

		},
		mounted: function() {

		}
	}
</script>