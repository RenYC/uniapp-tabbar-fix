export class Mask {
	// 全局蒙版
	// 如果首次进入app，直接对tabbar页面一顿狂点会出现bug。
	// 所以做一个全局蒙版，在页面 onReady 后关闭。
	constructor(globalData) {
		this.mask = new plus.nativeObj.View('test', {
			bottom: '0',
			left: '0px',
			height: '50px',
			width: '100%'
		})
		this.globalData = globalData
	}

	drawRect() {
		// 绘制矩形
		this.mask.drawRect({
			color: 'rgba(0,0,0,0)'
		}, {
			top: '0px',
			left: '0px',
			width: '100%',
			height: '100%'
		});
	}

	onClick() {
		this.mask.addEventListener('click', (res) => {
			this.bindClick(res)
		})
	}

	bindClick(res) {
		const width = plus.screen.resolutionWidth / 5
		const routes = getCurrentPages()
		const route = routes[routes.length - 1].route
		const page = route.split('/')[route.split('/').length - 1]

		if (res.pageX < width) {
			// 比赛
			if (this.globalData.tabReady[page]) {
				uni.switchTab({
					url: '/pages/tabbar/live/live'
				})
			}

		} else if (res.pageX > width && res.pageX < width * 2) {
			// 新闻
			if (this.globalData.tabReady[page]) {
				uni.switchTab({
					url: '/pages/tabbar/news/news'
				})
			}
		} else if (res.pageX > width * 2 && res.pageX < width * 3) {
			// 发现
			if (this.globalData.tabReady[page]) {
				uni.switchTab({
					url: '/pages/tabbar/discovery/discovery'
				})
			}
		} else if (res.pageX > width * 3 && res.pageX < width * 4) {
			// 数据
			if (this.globalData.tabReady[page]) {
				uni.switchTab({
					url: '/pages/tabbar/data/data'
				})
			}
		} else if (res.pageX > width * 4) {
			// 精彩
			if (this.globalData.tabReady[page]) {
				uni.switchTab({
					url: '/pages/tabbar/wonderful/wonderful'
				})
			}
		}

		if (this.globalData.tabReady.live && this.globalData.tabReady.news && this.globalData.tabReady.discovery &&
			this
			.globalData.tabReady.data && this.globalData.tabReady.wonderful) {
			this.close()
		}

	}

	show() {
		this.mask.show();
	}

	hide() {
		this.mask.hide();
	}

	close() {
		this.mask.close();
	}
	
	addInterceptor() {
		uni.addInterceptor('switchTab', {
			invoke: (args)=> {
				if (this.globalData.tabReady.live && this.globalData.tabReady.news && this.globalData.tabReady.discovery &&
					this.globalData.tabReady.data && this.globalData.tabReady.wonderful) return
					
				this.show()
			},
		})
		uni.addInterceptor('navigateTo', {
			invoke: (args)=> {
				this.hide()
			},
		})
	}

	init() {
		this.drawRect()
		this.onClick()
		this.show()
		this.addInterceptor()
	}

}