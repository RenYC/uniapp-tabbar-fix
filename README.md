# uniapp-tabbar-fix
针对uniapp原生tabbar, 初次进入app狂点tabbar导致页面无法正常切换所做的优化。


## 使用蒙版 + 拦截tabbar点击事件

思路：创建蒙版 + 拦截tabbar点击事件。定义一个变量对象，控制每个页面是否已经onready。只有当前页面onready后点击tabbar才会生效。

1. 首先创建一个蒙版类
```
export class Mask {}
```

2. 使用 plus.nativeObj.View 创建一个蒙版
```
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
    color: 'rgba(0,0,0,0.5)'
  }, {
    top: '0px',
    left: '0px',
    width: '100%',
    height: '100%'
  });
}
```   
3. 绑定点击事件
```
onClick() {
  this.mask.addEventListener('click', (res) => {
    this.bindClick(res)
  })
}
```
4. 拦截tabbar点击事件
```
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
```
5. 初始化Mask
```
init() {
  this.drawRect()
  this.onClick()
  this.show()
}
```

6. App.vue 页面调用, tabReady 用于判断tabbar页面是否已经onready完成。
```
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
```

7. tabbar 页面更新变量
```
onReady() {
  getApp().globalData.tabReady.live = true
}
```


最后附上仓库代码，需要的自行下载。

https://github.com/RenYC/uniapp-tabbar-fix

### 小提示

运行代码的时候可以把蒙版的颜色显示出来, 0.5 就是了
```
drawRect() {
  // 绘制矩形
  this.mask.drawRect({
    color: 'rgba(0,0,0,0.5)'
  }, {
    top: '0px',
    left: '0px',
    width: '100%',
    height: '100%'
  });
}
```