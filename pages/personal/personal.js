// pages/index/personal/personal.js
import request from '../../utils/request'

// 获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
  },
  
  onLoad() {
    const userInfo = wx.getStorageSync('userInfo')
    app.globalData.userInfo = userInfo
    if (app.globalData.userInfo) {
      // 修改数据
      this.setData({
        userInfo: app.globalData.userInfo,
      })
    }
  },

  //获取用户信息
  async getUserInfo(e) {
    const {nickName, avatarUrl} =  e.detail.userInfo
    const gender =  e.detail.userInfo.gender.toString()
    const userInfo = {nickName, avatarUrl, gender}
    
    const result = await request('/register', userInfo)
    if(result.result === true) {
      //保存微信信息到本地
      wx.setStorageSync('userInfo', userInfo)
      this.setData({userInfo})
      console.log('登录成功')
    } else if(result.result === false) {
      wx.setStorageSync('userInfo', userInfo)
      this.setData({
        userInfo: app.globalData.userInfo
      })
    }
  },

  //跳转到完善信息页面
  handleInfo() {
    wx.navigateTo({
      url: '/pages/info/info',
    })
  },

  handleLogout() {
    let that = this      // 把当前的Page对象保存在that中
    wx.showModal({
      content: '确定退出吗？',
      cancelColor: '#999',
      success (res) {
        if (res.confirm) {
          that.setData({
            userInfo: {}
          })
        }
      }
    })
  }
})
