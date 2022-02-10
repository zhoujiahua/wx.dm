// pages/tool/tool.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    handleScanCode() {
        wx.scanCode({
            success(res) {
                console.log(res)
            }
        })
    },
    handlEvibrateLong() {
        wx.vibrateLong({
            success(res) {
                console.log(res)
            }
        })
    },
    handlVibrateShort() {
        wx.vibrateShort({
            success(res) {
                console.log(res)
            }
        })
    },
    hadleCallMe() {
        wx.makePhoneCall({
            phoneNumber: '17629269055' //仅为示例，并非真实的电话号码
        })
    },
    getLoaclIP() {
        wx.getLocalIPAddress({
            success(res) {
                const localip = res.localip
                console.log(localip)
            }
        })
    },
    crrentNetworkType() {
        wx.getNetworkType({
            success(res) {
                const networkType = res.networkType
                console.log(networkType)
            }
        })
    },
    selectUserInfo() {
        wx.chooseContact({
            success(res) {
                console.log(res)
            }
        })
    },
    addPhoneUserInfo() {
        wx.addPhoneContact({
            firstName: "家华",
            lastName: "周",
            nickName: "老司机",
            mobilePhoneNumber: "15029099056"
        })
    },
    openMapLocation() {
        wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success(res) {
                console.log(res)
                const latitude = res.latitude
                const longitude = res.longitude
                wx.openLocation({
                    latitude,
                    longitude,
                    scale: 18
                })
            }
        })
    },
    getMapLocation() {
        let that = this;
        wx.getLocation({
            type: 'wgs84',
            success(res) {
                console.log(res)
                const latitude = res.latitude
                const longitude = res.longitude
                const speed = res.speed
                const accuracy = res.accuracy
                that.selectMapLocation(latitude, longitude)
            }
        })
    },
    selectMapLocation(latitude, longitude) {
        wx.chooseLocation({
            latitude,
            longitude,
            success(res) {
                console.log(res)
            }
        })
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