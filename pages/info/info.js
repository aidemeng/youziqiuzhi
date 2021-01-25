import request from '../../utils/request'
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      name:'',
      gender: '',
      age: '',
      phone: '',
      type: '1',
      major: '',
      date: '',     //在校生毕业日期
      spost: '',
      city: [],     //城市
      company: '',
      gpost: '',
      brief: ''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(app.globalData.userInfo.name) {
      this.setData({
        userInfo: app.globalData.userInfo
      })
    }
  },

  //
  handleTypeChange(e) {
    this.setData({
      'userInfo.type': e.detail.value
    })
  },

  //毕业时间处理函数
  bindDateChange(e) {
    this.setData({
      'userInfo.date': e.detail.value
    })
  },

  //城市处理函数
  bindCityChange(e) {
    this.setData({
      'userInfo.city': e.detail.value
    })
  },

  //
  async formSubmit(e) {
    let userInfo = e.detail.value
    let wxUserInfo = wx.getStorageSync('userInfo')
    userInfo = {...wxUserInfo, ...userInfo}
    
    const {name, age, phone, type, major, date, spost, city, company, gpost} = userInfo
    //前端验证
    // 1.姓名
    if(!name) {
      wx.showToast({
        title: '姓名未填写',
        icon: 'error'
      })
      return
    }
    const nameReg = /[A-Za-z.\-\u4e00-\u9fa5]+/
    if(!nameReg.test(name)) {
      wx.showToast({
        title: '姓名格式出错',
        icon: 'error'
      })
      return
    }

    //2.年龄
    if(!age) {
      wx.showToast({
        title: '年龄未填写',
        icon: 'error'
      })
      return
    }
    const ageReg = /^[1-9][0-9]{1}$/
    if(!ageReg.test(age)) {
      wx.showToast({
        title: '年龄格式出错',
        icon: 'error'
      })
      return
    }

    //联系方式
    if(!phone) {
      wx.showToast({
        title: '联系方式未填写',
        icon: 'error'
      })
      return
    }
    const phoneReg = /^1[3|4|5|7|8][0-9]{9}$/
    if(!phoneReg.test(phone)) {
      wx.showToast({
        title: '手机号格式出错',
        icon: 'error'
      })
      return
    }

    //3.专业
    if(type==='1' && !major) {
      wx.showToast({
        title: '专业未填写',
        icon: 'error'
      })
      return
    }
    const majorReg = /[\u4e00-\u9fa5]/
    if(major && !majorReg.test(major)) {
      wx.showToast({
        title: '专业请输入中文',
        icon: 'error'
      })
      return
    }

    //4.毕业时间
    if(type==='1' && !date) {
      wx.showToast({
        title: '毕业时间未选',
        icon: 'error'
      })
      return
    }

    //5.期望职位
    if(type==='1' && !spost) {
      wx.showToast({
        title: '职位未填写',
        icon: 'error'
      })
      return
    }
    const spostReg = /[\u4e00-\u9fa5]/
    if(spost && !spostReg.test(spost)) {
      wx.showToast({
        title: '职位请输入中文',
        icon: 'error'
      })
      return
    }

    //6.所在城市
    if(type==='2' && city.length===0) {
      wx.showToast({
        title: '未选择城市',
        icon: 'error'
      })
      return
    }

    //7.入职公司
    if(type==='2' && !company) {
      wx.showToast({
        title: '公司未填写',
        icon: 'error'
      })
      return
    }
    const companyReg = /[\u4e00-\u9fa5]/
    if(company && !companyReg.test(company)) {
      wx.showToast({
        title: '公司请输入中文',
        icon: 'error'
      })
      return
    }

    //8.工作职务
    if(type==='2' && !gpost) {
      wx.showToast({
        title: '职位未填写',
        icon: 'error'
      })
      return
    }
    const gpostReg = /[\u4e00-\u9fa5]/
    if(gpost && !gpostReg.test(gpost)) {
      wx.showToast({
        title: '职位请输入中文',
        icon: 'error'
      })
      return
    }

    //提交到后台
    const result = await request('/update', userInfo)
    if(result.result === true) {
      wx.showToast({
        title: '修改成功',
        icon: 'success'
      })
      //将用户的信息存储到本地
      wx.setStorageSync('userInfo', userInfo)  //result.user
      app.globalData.userInfo = userInfo
      //跳转到personal界面
      wx.reLaunch({
        url: '/pages/personal/personal',
      })
    } else {
      wx.showToast({
        title: '修改失败请重试',
        icon: 'error'
      })
    }
  }
})