// pages/aboutus/aboutus.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    version: {
      code: "1.0.2",
      name: "辰霏工作室"
    },
    currentView: 'menu', // menu, feedback, about, usage
    menuItems: [
      {
        id: 'feedback',
        name: '意见反馈',
        icon: '/images/id_edit.png'
      },
      {
        id: 'about',
        name: '关于我们',
        icon: '/images/ic_aboutus.png'
      },
      {
        id: 'usage',
        name: '使用说明',
        icon: '/images/ic_file.jpg'
      }
    ]
  },

  /**
   * 点击菜单项
   */
  onMenuTap: function(e) {
    const menuId = e.currentTarget.dataset.id;
    this.setData({
      currentView: menuId
    });
  },

  /**
   * 返回菜单
   */
  backToMenu: function() {
    this.setData({
      currentView: 'menu'
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
