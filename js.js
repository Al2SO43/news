// 显示弹窗
window.onload = function() {
  var modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = '<p>温馨提示:本站新闻内容不代表作者本人最终观点,作者不对任何私自引用本站内容的人员负责!</p>';
  document.body.appendChild(modal);
  modal.style.display = 'block';
  setTimeout(function() {
    modal.style.display = 'none';
  }, 3500); // 3.5秒后自动隐藏
};