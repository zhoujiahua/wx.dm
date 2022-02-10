Page({

    /**
     * 页面的初始数据
     */
    data: {
        uname: "老司机"
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    getUserOpenid() {
        wx.cloud.callFunction({
            name: "getOpenID"
        }).then(res => {
            console.log(res)
        }).catch(err => console.log(err))
    },
    getMsgAuth() {
        wx.requestSubscribeMessage({
            tmplIds: ['y0Z9x07nQmqaL1ZJqW51-wKqRInm2XrXjQEd7FlcP_I'],
            success(res) {
                console.log(res)
            }
        })
    },
    getUserName(e) {
        let uname = e.detail.value;
        this.setData({
            uname
        })
    },
    sendToUserMsg() {
        wx.cloud.callFunction({
            name: "sendMsg",
            data: {
                openid: "oKVWs5SWiaZQor2QLmDn1BpVisNI",
                tmplid: "y0Z9x07nQmqaL1ZJqW51-wKqRInm2XrXjQEd7FlcP_I",
                name: this.data.uname
            }
        }).then(res => {
            console.log(res)
        }).catch(err => console.log(err))
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

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