/**
 * 平滑滚动
 * @param  {Number} position 滚动位置
 * @param  {Node} element 滚动元素
 */

function smoothScrollTo(position, element) {
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function(callback, element) {
      return setTimeout(callback, 17)
    }
  }
  // 当前滚动高度
  var scrollTop =
    element.scrollTop ||
    document.documentElement.scrollTop ||
    document.body.scrollTop
  // 滚动step方法
  var step = function() {
    // 距离目标滚动距离
    var distance = position - scrollTop
    // 目标滚动位置
    scrollTop = scrollTop + distance / 20
    if (Math.abs(distance) < 1) {
      element.scrollTo(0, position)
    } else {
      element.scrollTo(0, scrollTop)
      requestAnimationFrame(step)
    }
  }
  step()
}
