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
          <li><a href="page3.html">Page 5</a></li>
          <li><a href="page3.html">Page 5</a></li>
          <li><a href="page3.html">Page 5</a></li>
          <li><a href="page3.html">Page 5</a></li>
          <li><a href="page3.html">Page 5</a></li>
          <li><a href="page3.html">Page 5</a></li>
          <li><a href="page3.html">Page 5</a></li>
          <li><a href="page3.html">Page 5</a></li>
          <li><a href="page3.html">Page 5</a></li>
          <li><a href="page3.html">Page 5</a></li>
          <li><a href="page3.html">Page 5</a></li>
          <li><a href="page3.html">Page 5</a></li>
          <li><a href="page3.html">Page 5</a></li>
          <li><a href="page3.html">Page 5</a></li>
          <li><a href="page3.html">Page 5</a></li>
          <li><a href="page3.html">Page 5</a></li>
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

const listItems = document.querySelectorAll('li');
listItems.forEach(item => {
    item.addEventListener('click', function () {
        // 先将所有 li 元素的背景颜色重置
        listItems.forEach(li => {
            li.style.backgroundColor = '';
        });
        // 再设置当前点击的 li 元素的背景颜色
        this.style.backgroundColor = 'lightblue';
    });
});