console.log("Welcome to Ziyue's Website!");

// 一个简单的小功能：点击名字会变色
const nameTag = document.querySelector('h1');

nameTag.addEventListener('click', () => {
    // 随机生成一种颜色
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    nameTag.style.color = randomColor;
});