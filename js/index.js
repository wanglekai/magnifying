(function () {
    var curImg = document.getElementById('curImg')
    var moveBox = document.getElementById('moveBox')
    var header = document.getElementById('header')
    var curBigImg = document.getElementById('curBigImg')
    var bigImgWrap = document.getElementById('bigImgWrap')
    var smallImgList = document.getElementById('smallImgList')
    var eLis = smallImgList.getElementsByTagName('li')

    var cur = 0;
    var imgs = ['black', 'blue', 'green', 'purple', 'red']

    // console.log(curImg.offsetLeft)
    // console.log(curImg.offsetTop)
    console.log(document.body.clientLeft);
    console.log(document.body.clientTop);

    // 当前显示的图
    for(var i = 0, len = eLis.length; i < len; i++) {
        
        (function(i) {
            var eItem = eLis[i]
            eItem.addEventListener('mouseover', function () {
                // console.log(i)
                // cur = i
                if (cur !== i) {
                    eLis[cur].classList.remove('active');
                    eLis[i].classList.add('active')
                    cur = i;
                    curImg.src = './imgs/' + imgs[cur] + '-s.png';
                }
            })
        })(i)
    }
    header.addEventListener('mouseover', function () {
        moveBox.classList.remove('hide')
        bigImgWrap.classList.remove('hide')
        curBigImg.src = './imgs/' + imgs[cur] + '-b.png'
        // header.addEventListener('mousemove', move)
        // console.log('inner');
    })
    header.addEventListener('mouseout', function () {
        moveBox.classList.add('hide')
        bigImgWrap.classList.add('hide')
        // header.removeEventListener('mousemove', move)
        // console.log('outer');
    })
    header.addEventListener('mousemove', move)

    // header.addEventListener('mousemove', function (e) {
    //     // console.log(e)
    //     var mx = e.clientX 
    //     var my = e.clientY 

    //     // console.log(mx, my)
    //     move(mx, my)
        
    // })

    function move (e) {
        // console.log(e);
        // var maxx = x - 100
        // var maxy = y - 100

        var mx = e.clientX 
        var my = e.clientY 

        var l = mx - Math.floor(moveBox.offsetWidth / 2)
        var t = my - Math.floor(moveBox.offsetHeight / 2)

        if (Math.floor(moveBox.offsetWidth / 2)+ mx > curImg.offsetWidth) {
            l = curImg.offsetWidth - moveBox.offsetWidth
        }
        if (Math.floor(moveBox.offsetHeight / 2)+ my > curImg.offsetHeight) {
            t = curImg.offsetHeight - moveBox.offsetHeight
        }
        
        if (l <= 0 ) {
            l = 0
        }

        if (t <= 0) {
            t = 0
        }

        // console.log(my)

        moveBox.style.left = l + 'px'
        moveBox.style.top = t + 'px'
        curBigImg.style.left = l * -2 + 'px'
        curBigImg.style.top = t * -2 + 'px'
    }
})()