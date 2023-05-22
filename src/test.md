## 1：打字机效果

```base
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        h1 {
            /* 本例12个文字(加标点符号)；有多少个文字，width就是多少个em */
            width: 12em;
            /* 加上两个动画，一个是打字动画，使用steps让字一个一个的出现，
             注意step和字数保持一致，光标动画也是同理，*/
            animation: typingWords 5s steps(12) infinite, cursor 0.5s steps(1) infinite;
            /* 要设置不允许换行，且溢出隐藏 */
            white-space: nowrap;
            overflow: hidden;
            /* 使用右边框作为打印的指针光标 */
            border-right: 1px solid #000;
        }

        @keyframes typingWords {
            0% {
                width: 0;
            }
        }

        @keyframes cursor {
            50% {
                border-color: transparent;
            }
        }
    </style>
</head>

<body>
    <h1>欢迎光临呐，各位访客们。</h1>
</body>

</html>

```

## 2：文字渐变色

```base
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title></title>
    <style>
        /* 加上 -webkit- 注意兼容 */
        h1 {
            background: -webkit-linear-gradient(135deg,
                    #0eaf6d,
                    #ff6ac6 25%,
                    #147b96 50%,
                    #e6d205 55%,
                    #2cc4e0 60%,
                    #8b2ce0 80%,
                    #ff6384 95%,
                    #08dfb4);
            /* 文字颜色填充设置为透明 */
            -webkit-text-fill-color: transparent;
            /* 背景裁剪，即让文字使用背景色 */
            -webkit-background-clip: text;
            /* 背景图放大一下，看着柔和一些 */
            -webkit-background-size: 200% 100%;
            /* 应用动画flowCss 12秒速度 无限循环 线性匀速动画*/
            -webkit-animation: flowCss 12s infinite linear;
        }

        @-webkit-keyframes flowCss {
            0% {
                /* 移动背景位置 */
                background-position: 0 0;
            }

            100% {
                background-position: -400% 0;
            }
        }

        h1:hover {
            -webkit-animation: flowCss 4s infinite linear;
        }
    </style>
</head>

<body>
    <h1>文字颜色渐变流光效果</h1>
    <!-- 思路就是 文字颜色填充为透明、背景裁剪让文字使用背景色、然后设置一个渐变背景色
    再放大一下背景，最后通过动画移动背景位置，于是效果就出来了 -->
</body>

</html>
```

## 3：音频波纹加载效果
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            padding: 120px;
        }

        .music {
            width: 175px;
            height: 100px;
            display: flex;
        }

        .music span {
            width: 6px;
            border-radius: 18px;
            margin-right: 6px;
        }

        .music span:nth-child(1) {
            /* 时间递增，参差不齐的效果 */
            animation: bar1 2s 0.2s infinite linear;
        }

        .music span:nth-child(2) {
            animation: bar2 2s 0.4s infinite linear;
        }

        .music span:nth-child(3) {
            animation: bar3 2s 0.6s infinite linear;
        }

        .music span:nth-child(4) {
            animation: bar4 2s 0.8s infinite linear;
        }

        .music span:nth-child(5) {
            animation: bar5 2s 1.0s infinite linear;
        }

        .music span:nth-child(6) {
            animation: bar6 2s 1.2s infinite linear;
        }

        .music span:nth-child(7) {
            animation: bar7 2s 1.4s infinite linear;
        }

        .music span:nth-child(8) {
            animation: bar8 2s 1.6s infinite linear;
        }

        .music span:nth-child(9) {
            animation: bar9 2s 1.8s infinite linear;
        }

        @keyframes bar1 {
            0% {
                background: #f677b0;
                margin-top: 25%;
                height: 10%;
            }

            50% {
                background: #f677b0;
                height: 100%;
                margin-top: 0%;
            }

            100% {
                background: #f677b0;
                height: 10%;
                margin-top: 25%;
            }
        }

        @keyframes bar2 {
            0% {
                background: #df7ff2;
                margin-top: 25%;
                height: 10%;
            }

            50% {
                background: #df7ff2;
                height: 100%;
                margin-top: 0%;
            }

            100% {
                background: #df7ff2;
                height: 10%;
                margin-top: 25%;
            }
        }

        @keyframes bar3 {
            0% {
                background: #8c7ff2;
                margin-top: 25%;
                height: 10%;
            }

            50% {
                background: #8c7ff2;
                height: 100%;
                margin-top: 0%;
            }

            100% {
                background: #8c7ff2;
                height: 10%;
                margin-top: 25%;
            }
        }

        @keyframes bar4 {
            0% {
                background: #7fd0f2;
                margin-top: 25%;
                height: 10%;
            }

            50% {
                background: #7fd0f2;
                height: 100%;
                margin-top: 0%;
            }

            100% {
                background: #7fd0f2;
                height: 10%;
                margin-top: 25%;
            }
        }

        @keyframes bar5 {
            0% {
                background: #7ff2d3;
                margin-top: 25%;
                height: 10%;
            }

            50% {
                background: #7ff2d3;
                height: 100%;
                margin-top: 0%;
            }

            100% {
                background: #7ff2d3;
                height: 10%;
                margin-top: 25%;
            }
        }

        @keyframes bar6 {
            0% {
                background: #7ff2a0;
                margin-top: 25%;
                height: 10%;
            }

            50% {
                background: #7ff2a0;
                height: 100%;
                margin-top: 0%;
            }

            100% {
                background: #7ff2a0;
                height: 10%;
                margin-top: 25%;
            }
        }

        @keyframes bar7 {
            0% {
                background: #adf27f;
                margin-top: 25%;
                height: 10%;
            }

            50% {
                background: #adf27f;
                height: 100%;
                margin-top: 0%;
            }

            100% {
                background: #adf27f;
                height: 10%;
                margin-top: 25%;
            }
        }

        @keyframes bar8 {
            0% {
                background: #e7f27f;
                margin-top: 25%;
                height: 10%;
            }

            50% {
                background: #e7f27f;
                height: 100%;
                margin-top: 0%;
            }

            100% {
                background: #e7f27f;
                height: 10%;
                margin-top: 25%;
            }
        }

        @keyframes bar9 {
            0% {
                background: #ecaa64;
                margin-top: 25%;
                height: 10%;
            }

            50% {
                background: #ecaa64;
                height: 100%;
                margin-top: 0%;
            }

            100% {
                background: #ecaa64;
                height: 10%;
                margin-top: 25%;
            }
        }
    </style>
</head>

<body>
    <div class="music">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <!-- 给每一个bar指定margin-top和height的动画的变化
    为了效果更好看，让每一个bar的背景色都不一样，便是五彩斑斓了 -->
</body>

</html>
```


## 4：四周线条环绕流动效果

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            padding: 120px;
        }

        .mainbox {
            width: 320px;
            height: 320px;
            position: relative;
            /* 超出隐藏需要加上 */
            overflow: hidden;
        }

        .content {
            width: 320px;
            height: 320px;
            line-height: 320px;
            text-align: center;
            background-color: #cde;
        }

        .line {
            /* 结合外层元素的相对定位 */
            position: absolute;
        }

        .line:nth-child(1) {
            top: 0;
            left: 0;
            width: 100%;
            height: 3px;
            /* 加上渐变效果，方可形成拖尾效果 */
            background: linear-gradient(90deg, transparent, orange);
            animation: animate1 8s linear infinite;
        }

        /* 分别控制其上下左右的定位距离，从而形成线条跟随效果 */
        @keyframes animate1 {
            0% {
                left: -100%;
            }

            50%,
            100% {
                left: 100%;
            }
        }

        .line:nth-child(2) {
            top: -100%;
            right: 0;
            width: 3px;
            height: 100%;
            background: linear-gradient(180deg, transparent, red);
            animation: animate2 8s linear infinite;
            /* 注意要加上延时触发动画效果，这样线条才会依次触发 */
            animation-delay: 2s;
        }

        @keyframes animate2 {
            0% {
                top: -100%;
            }

            50%,
            100% {
                top: 100%;
            }
        }

        .line:nth-child(3) {
            bottom: 0;
            right: 0;
            width: 100%;
            background: linear-gradient(270deg, transparent, green);
            animation: animate3 8s linear infinite;
            animation-delay: 4s;
        }

        @keyframes animate3 {
            0% {
                right: -100%;
                height: 3px;
            }

            50%,
            100% {
                height: 2px;
                right: 100%;
            }
        }

        .line:nth-child(4) {
            bottom: -100%;
            left: 0;
            width: 3px;
            height: 100%;
            background: linear-gradient(360deg, transparent, #3a86ff);
            animation: animate4 8s linear infinite;
            animation-delay: 6s;
        }

        @keyframes animate4 {
            0% {
                bottom: -100%;
            }

            50%,
            100% {
                bottom: 100%;
            }
        }
    </style>
</head>

<body>
    <div class="mainbox">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
        <div class="content">线条环绕</div>
    </div>
</body>

</html>
```


## 5：背景颜色流动效果
```

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .bg {
            margin: 60px;
            width: 32%;
            height: 48vh;
            background: linear-gradient(-45deg, #dae, #f66, #3c9, #09f, #66f);
            background-size: 200% 200%;
            animation: gradient 8s ease infinite;
        }

        @keyframes gradient {
            0% {
                background-position: 0 12%;
            }

            50% {
                background-position: 100% 100%;
            }

            100% {
                background-position: 0 12%;
            }
        }
    </style>
</head>

<body>
    <div class="bg"></div>
</body>

</html>
```


## 6：小球转圈加载效果

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .wrap {
            margin: 120px 0 0 240px;
            width: 75px;
            height: 75px;
            position: relative;
            /* transform-origin: 设置的效果搭配边框看，效果更加明显 */
            /* border: 1px solid #e9e9e9; */
        }

        .round {
            position: absolute;
            width: 13px;
            height: 13px;
            border-radius: 50%;
            background-color: rgb(241, 141, 157);
            /* 加上动画效果 */
            animation: circleRound 2.8s ease infinite;
            /* 设置旋转中心，搭配.wrap的border看 */
            transform-origin: 50% 75px;
        }

        /* 注意z-index层级关系，依次递减 */
        .round:nth-child(1) {
            z-index: 7;
        }

        /* 注意动画延后animation-delay播放，依次递增 */
        /* 至于小圆球则越来越小 */
        .round:nth-child(2) {
            height: 12px;
            width: 12px;
            background-color: rgb(199, 136, 185);
            animation-delay: .2s;
            z-index: 6;
        }

        .round:nth-child(3) {
            height: 11px;
            width: 11px;
            background-color: rgb(153, 69, 223);
            animation-delay: .4s;
            z-index: 5;
        }

        .round:nth-child(4) {
            height: 10px;
            width: 10px;
            background-color: rgb(69, 141, 223);
            animation-delay: .6s;
            z-index: 4;
        }

        .round:nth-child(5) {
            height: 9px;
            width: 9px;
            background-color: rgb(69, 223, 203);
            animation-delay: .8s;
            z-index: 3;
        }

        .round:nth-child(6) {
            height: 8px;
            width: 8px;
            background-color: rgb(100, 223, 69);
            animation-delay: 1s;
            z-index: 2;
        }

        .round:nth-child(7) {
            height: 7px;
            width: 7px;
            background-color: rgb(223, 200, 69);
            animation-delay: 1.2s;
            z-index: 1;
        }

        @keyframes circleRound {
            to {
                transform: rotate(1turn);
            }
        }
    </style>
</head>

<body>
    <div class="wrap">
        <div class="round"></div>
        <div class="round"></div>
        <div class="round"></div>
        <div class="round"></div>
        <div class="round"></div>
        <div class="round"></div>
        <div class="round"></div>
    </div>
</body>

</html>
```

## 7：文字按顺序弹跳效果
```
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<style>
		.dance {
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 6rem;
			font-weight: bold;
			white-space: nowrap;
			cursor: pointer;
			margin-top: 120px;
		}

		.word {
			/* alternate 轮流反向播放 A--B--A--B... 必须要加 */
			animation: dance 0.72s cubic-bezier(0.05, 0, 0.2, 1) infinite alternate;
			display: inline-block;
			transform: translate3d(0, 0, 0);
			font-size: 6rem;
			text-decoration: underline;
			color: #75b9ff;
			margin-right: 1px;
		}

		.word:nth-child(1) {
			animation-delay: 0s;
		}

		.word:nth-child(2) {
			animation-delay: 0.0333333333s;
		}

		.word:nth-child(3) {
			animation-delay: 0.1333333333s;
		}

		.word:nth-child(4) {
			animation-delay: 0.2333333333s;
		}

		.word:nth-child(5) {
			animation-delay: 0.3333333333s;
		}

		.word:nth-child(6) {
			animation-delay: 0.4333333333s;
		}

		.word:nth-child(7) {
			animation-delay: 0.5333333333s;
		}

		.word:nth-child(8) {
			animation-delay: 0.6333333333s;
		}

		.word:nth-child(9) {
			animation-delay: 0.7333333333s;
		}

		.word:nth-child(10) {
			animation-delay: 0.8333333333s;
		}

		.word:nth-child(11) {
			animation-delay: 0.9333333333s;
		}

		@keyframes dance {
			0% {
				transform: translate3d(0, 0, 0);
			}

			100% {
				transform: translate3d(0, -0.54em, 0);
			}
		}
	</style>
</head>

<body>
	<a class="dance" href="http://ashuai.work/welcome" target="_blank">
		<span class="word">a</span>
		<span class="word">s</span>
		<span class="word">h</span>
		<span class="word">u</span>
		<span class="word">a</span>
		<span class="word">i</span>
		<span class="word">.</span>
		<span class="word">w</span>
		<span class="word">o</span>
		<span class="word">r</span>
		<span class="word">k</span>
	</a>
</body>

</html>
```



## 8：文本逐字展示效果

```
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<style>
		p {
			background-color: #baf;
			font-size: 24px;
			box-sizing: border-box;
			padding: 12px;
		}
	</style>
</head>

<body>
	<p></p>
	<script>
		let str = `先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。然侍卫之臣不懈于内，忠志之士忘身于外者，盖追先帝之殊遇，欲报之于陛下也。
				   诚宜开张圣听，以光先帝遗德，恢弘志士之气，不宜妄自菲薄，引喻失义，以塞忠谏之路也。宫中府中，俱为一体；陟罚臧否，不宜异同。
				   若有作奸犯科及为忠善者，宜付有司论其刑赏，以昭陛下平明之理，不宜偏私，使内外异法也。
				   侍中、侍郎郭攸之、费祎、董允等，此皆良实，志虑忠纯，是以先帝简拔以遗陛下。愚以为宫中之事，事无大小，悉以咨之，然后施行，必能裨补阙漏，有所广益。
				   将军向宠，性行淑均，晓畅军事，试用于昔日，先帝称之曰能，是以众议举宠为督。愚以为营中之事，悉以咨之，必能使行阵和睦，优劣得所。
				   `

		let i = 0
		let pNode = document.querySelector('p')

		/**
		 * requestAnimationFrame版本
		 * */
		function fn() {
			if (i < str.length - 1) {
				pNode.innerHTML = pNode.innerHTML + str[i]
				i = i + 1
				window.requestAnimationFrame(fn)
			}
		}
		window.requestAnimationFrame(fn)
		
		/**
		 * setInterval版本
		 * */ 
		// let timer = setInterval(() => {
		// 	if (i < str.length - 1) {
		// 		pNode.innerHTML = pNode.innerHTML + str[i]
		// 		i = i + 1
		// 	} else {
		// 		clearInterval(timer)
		// 	}
		// }, 17);
	</script>
</body>

</html>
```

## 9：文字横向伸展模糊淡入淡出效果

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .enter {
            margin-top: 120px;
            text-align: center;
            /* 贝塞尔曲线动画 */
            animation: enterenter 1.8s infinite cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        }

        @keyframes enterenter {
            0% {
                /* 加上文字间距 */
                letter-spacing: 1em;
                /* Z轴变换 */
                transform: translateZ(300px);
                /* filter: blur(); 像素模糊效果 */
                filter: blur(12px);
                /* 透明度也要改变 */
                opacity: 0;
            }

            100% {
                transform: translateZ(12px);
                filter: blur(0);
                opacity: 1;
            }
        }

        .leave {
            text-align: center;
            animation: leaveleave 1.8s infinite cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        }

        @keyframes leaveleave {
            0% {
                transform: translateZ(0);
                filter: blur(0.01);
            }

            100% {
                letter-spacing: 1em;
                transform: translateZ(300px);
                filter: blur(12px) opacity(0%);
            }
        }
    </style>
</head>

<body>
    <h2 class="enter">早上好，程序猿兽们</h2>
    <br>
    <h2 class="leave">晚上好，程序猿兽们</h2>
</body>

</html>
```

## 10：水平左右抖动效果

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            box-sizing: border-box;
            padding: 120px;
        }

        .target {
            width: 48px;
            height: 48px;
            line-height: 48px;
            text-align: center;
            font-weight: bold;
            color: red;
            background: #baf;
            transform-origin: bottom;
            animation: shaking 1.2s ease-in-out infinite;
            /* 初始暂停播放，后续通过js控制播放 */
            animation-play-state: paused;
        }

        /* 通过translate3d的x轴移动去控制水平移动抖动效果 */
        @keyframes shaking {

            10%,
            90% {
                transform: translate3d(-1.2px, 0, 0);
            }

            20%,
            80% {
                transform: translate3d(2px, 0, 0);
            }

            30%,
            70% {
                transform: translate3d(-4.8px, 0, 0);
            }

            40%,
            60% {
                transform: translate3d(4.8px, 0, 0);
            }

            50% {
                transform: translate3d(-4.8px, 0, 0);
            }
        }
    </style>
</head>

<body>
    <div class="target">^_^</div>
    <br>
    <button class="start">动画开始</button>
    <button class="pause">动画暂停</button>
    <script>
        // js去设置animationPlayState属性值从而控制动画播放
        let startBtn = document.querySelector('.start')
        let pauseBtn = document.querySelector('.pause')
        let target = document.querySelector('.target')
        startBtn.onclick = () => {
            target.style.animationPlayState = 'running'
        }
        pauseBtn.onclick = () => {
            target.style.animationPlayState = 'paused'
        }
    </script>
</body>

</html>
```


后续收藏了会继续补充上，优化！


























