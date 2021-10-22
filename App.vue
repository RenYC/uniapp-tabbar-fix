<script>
	import { Mask, noticeBarFn } from '@/common/utils.js'
	
	export default {
		globalData: {
			tabReady: {
				live: false,
				news: false,
				discovery: false,
				data: false,
				wonderful: false
			},
		},
		onLaunch: function() {
			console.log('App Launch')
			// tabbar 点击防抖
			new Mask(this.globalData).init()
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
