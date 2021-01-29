// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postList: [
      {
        id: '1',
        nickname: 'EdmundDKang',
        avatarImg: 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ8FLaHn52jz65uaDXl5od5of7iaJDDIRHTOuc7ibZwlS5I0saRTOH46nEwQ8xyvoMolwdMCDodRVEQ/132',
        time: '12:33',
        content: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
        imgs: ['https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ8FLaHn52jz65uaDXl5od5of7iaJDDIRHTOuc7ibZwlS5I0saRTOH46nEwQ8xyvoMolwdMCDodRVEQ/132','https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ8FLaHn52jz65uaDXl5od5of7iaJDDIRHTOuc7ibZwlS5I0saRTOH46nEwQ8xyvoMolwdMCDodRVEQ/132','https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ8FLaHn52jz65uaDXl5od5of7iaJDDIRHTOuc7ibZwlS5I0saRTOH46nEwQ8xyvoMolwdMCDodRVEQ/132','https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ8FLaHn52jz65uaDXl5od5of7iaJDDIRHTOuc7ibZwlS5I0saRTOH46nEwQ8xyvoMolwdMCDodRVEQ/132'],
        like: '2',
        comment: '1',
        star: ''
      },
      {
        id: '2',
        nickname: 'EdmundDKang',
        avatarImg: 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ8FLaHn52jz65uaDXl5od5of7iaJDDIRHTOuc7ibZwlS5I0saRTOH46nEwQ8xyvoMolwdMCDodRVEQ/132',
        time: '12:33',
        content: '埃德加啊大家艾菲奖阿覅你打的扩大看到复烤fog经济',
        imgs: ['https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ8FLaHn52jz65uaDXl5od5of7iaJDDIRHTOuc7ibZwlS5I0saRTOH46nEwQ8xyvoMolwdMCDodRVEQ/132'],
        like: '',
        comment: '1',
        star: '3'
      },
      {
        id: '3',
        nickname: 'EdmundDKang',
        avatarImg: 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ8FLaHn52jz65uaDXl5od5of7iaJDDIRHTOuc7ibZwlS5I0saRTOH46nEwQ8xyvoMolwdMCDodRVEQ/132',
        time: '12:33',
        content: '埃德加啊大家艾菲奖阿覅你打的扩大看到复烤fog经济',
        imgs: [],
        like: '',
        comment: '1',
        star: '3'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //this.getPostList()
  },

  /**
   * 获取论坛列表数据
   */
  async getPostList() {
    // const ListData = await request('', {})
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})