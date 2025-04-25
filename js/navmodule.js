class NavComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const navHTML = `
      <style>
       .nav {
          background-color: #333;
          color: white;
          padding: 1%;
          width: 8%; /* 设置导航栏宽度 */
          height: 100vh; /* 设置导航栏高度为视口高度 */
          position: fixed; /* 固定导航栏位置 */
          left: 0; /* 导航栏位于左边 */
          top: 0; /* 导航栏位于顶部 */
          overflow-y: auto; /* 当内容超出高度时显示垂直滚动条 */
        }
       .nav ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column; /* 修改为垂直布局 */
          justify-content: flex-start; /* 元素从顶部开始排列 */
        }
       .nav ul li {
          margin-bottom: 10px; /* 每个导航项之间的间距 */
        }
       .nav ul li a {
          color: white;
          text-decoration: none;
        }
      </style>
      <div class="nav">
        <ul>
          <li><a href="./hk.html">HK</a></li>
          <li><a href="./chicang.html">持仓</a></li>
          <li><a href="page2.html">机器人</a></li>
          <li><a href="page3.html">华为</a></li>
          <li><a href="bankuai.html">概念板块</a></li>
          <li><a href="page3.html">3月底-5月-电力</a></li>
          <li><a href="page3.html">吉祥名字</a></li>
          <li><a href="page3.html">Page 5</a></li>
          <li><a href="page3.html">Page 5</a></li>
          <li><a href="page3.html">Page 5</a></li>
          <li><a href="page3.html">Page 5</a></li>
          <li><a href="page3.html">Page 5</a></li>
          <li><a href="page3.html">Page 5</a></li>
          <li><a href="page3.html">2026-马</a></li>
          <li><a href="page3.html">2027-羊</a></li>
          <li><a href="page3.html">2028-猴</a></li>
          <li><a href="page3.html">2029-鸡</a></li>
          <li><a href="page3.html">2030-狗</a></li>
          <li><a href="page3.html">2031-猪</a></li>
          <li><a href="page3.html">2032-马</a></li>
          <li><a href="page3.html">2033-羊</a></li>
          <li><a href="page3.html">Page 5</a></li>
          <li><a href="page3.html">Page 5</a></li>
          <li><a href="page3.html">Page 5</a></li>
          <li><a href="page3.html">Page 5</a></li>
          <li><a href="page3.html">Page 6</a></li>
          <li><a href="page3.html">Page 6</a></li>
          <li><a href="page3.html">Page 6</a></li>
          <li><a href="page3.html">Page 6</a></li>
        </ul>
      </div>
    `;
    shadow.innerHTML = navHTML;
  }
}
customElements.define('nav-component', NavComponent);

document.addEventListener('DOMContentLoaded', function() {
  // 获取 nav-component 元素
  const navComponent = document.querySelector('nav-component');
  if (navComponent) {
      // 获取 Shadow DOM
      const shadowRoot = navComponent.shadowRoot;
      if (shadowRoot) {
          // 在 Shadow DOM 中查找所有 li 元素
          const listItems = shadowRoot.querySelectorAll('li');
          listItems.forEach(item => {
              item.addEventListener('click', function () {
                  listItems.forEach(li => {
                      li.style.backgroundColor = '';
                  });
                  this.style.backgroundColor = 'lightblue';
              });
          });
      }
  }
});