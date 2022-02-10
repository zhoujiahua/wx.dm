// app.js
App({
  onLaunch() {
    wx.cloud.init({
      env: "aws-8gby9z6k9906a2c0"
    })
    
    wx.checkSession({
      success(res) {
        //session_key 未过期，并且在本生命周期一直有效
        console.log("未过期，并且在本生命周期一直有效", res)
      },
      fail(err) {
        // session_key 已经失效，需要重新执行登录流程
        // wx.login() //重新登录
        console.log("已经失效，需要重新执行登录流程", err)
      }
    })
  },
  globalData: {
    userInfo: null
  }
})