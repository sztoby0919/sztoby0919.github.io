console.log("Welcome to Ziyue's Website!");


// 1. 定义诗句库
const poems = [
    "你喜欢跑步吗？",
    "长跑的目标不是更快，而是更强。",
    "箱根山岳，险天下。",
    "所谓的跑步，就是对生命与时间的阅读。",
    "最后归根结底，是你自己在陪伴你自己。",
    "既然已经选择了奔跑，那就抬头挺胸，跑得帅气一点。",
    "所谓强者，是即使身陷痛苦，也能不断奔跑的人。",
    "只要此刻能继续跑下去就行了。这是我们唯一的、自由的瞬间。"
];

const poemDisplay = document.getElementById('poem-display');
let currentText = "";
let index = 0;
let isTyping = false;

// 2. 实现打字机效果的函数
function typeWriter(text) {
    if (index < text.length) {
        poemDisplay.innerHTML += text.charAt(index);
        index++;
        setTimeout(() => typeWriter(text), 150); // 设置打字速度，单位毫秒
    } else {
        isTyping = false;
    }
}

// 3. 随机选择并触发打字
function refreshPoem() {
    if (isTyping) return; // 如果正在打印中，不重复触发
    
    isTyping = true;
    poemDisplay.innerHTML = ""; // 先清空内容
    index = 0;
    const randomIndex = Math.floor(Math.random() * poems.length);
    currentText = poems[randomIndex];
    typeWriter(currentText);
}

// 4. 页面加载完成执行
window.onload = () => {
    refreshPoem();
    
    // 你原本点击名字变色的功能
    const nameTag = document.querySelector('h1');
    if(nameTag) {
        nameTag.addEventListener('click', () => {
            const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            nameTag.style.color = randomColor;
        });
    }
};

// 一个简单的小功能：点击名字会变色
const nameTag = document.querySelector('h1');

nameTag.addEventListener('click', () => {
    // 随机生成一种颜色
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    nameTag.style.color = randomColor;
});