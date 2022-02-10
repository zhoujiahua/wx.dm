Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        let userInfo = res.userInfo;
        this.getUserLogin(userInfo);
        this.setData({
          userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    let userInfo = e.detail.userInfo;
    this.getUserLogin(userInfo);
    this.setData({
      userInfo,
      hasUserInfo: true
    })
  },
  getUserLogin(e) {
    console.log(e)
    wx.login({
      success(res) {
        if (res.code) {
          //发起网络请求
          console.log(res)
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  }
})