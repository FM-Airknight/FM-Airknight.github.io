const ap = new APlayer({
    container: document.getElementById('player'),
    fixed: true,
    autoplay: true,
    theme: '#FADFA3',
    loop: 'all',   //one,none
    order: 'list', //random
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: 90,
    lrcType: 3,
    audio: [{
        name: '阳光宅男',
        artist: '周杰伦',
        url: 'http://lc-fRvwEE14.cn-e1.lcfile.com/7c21bf1831d765989ceb/%E7%A8%BB%E9%A6%99%2B%E9%98%B3%E5%85%89%E5%AE%85%E7%94%B7%2B%E9%BE%99%E5%8D%B7%E9%A3%8E.mp3',
        cover: 'http://lc-fRvwEE14.cn-e1.lcfile.com/e5fb567401a3cd53b933/%E9%98%B3%E5%85%89%E5%AE%85%E7%94%B7.jpg',
    },
    {
        name: 'love story',
        artist: 'Taylor Swift',
        url: 'http://lc-fRvwEE14.cn-e1.lcfile.com/063c6e279700d77ed356/love%20story.mp3',
        cover: 'http://lc-fRvwEE14.cn-e1.lcfile.com/db27e53cfddf18574ebd/love%20story.jpg',
    },
    {
        name: '没有理由',
        artist: '杨胖雨/lambert',
        url: 'http://lc-fRvwEE14.cn-e1.lcfile.com/3fb2c123eea957a67fd6/%E6%B2%A1%E6%9C%89%E7%90%86%E7%94%B1.mp3',
        cover: 'http://lc-fRvwEE14.cn-e1.lcfile.com/dd402bbec38e3682fcf6/%E6%B2%A1%E6%9C%89%E7%90%86%E7%94%B1.jpg',
    },
    {
        name: 'take me to your heart',
        artist: 'michael learn to rock',
        url: 'http://lc-fRvwEE14.cn-e1.lcfile.com/6d86c24979f287379e17/take%20me%20to%20your%20heart.mp3',
        cover: 'http://lc-fRvwEE14.cn-e1.lcfile.com/d9f26c1b311ed2bea65a/take%20me%20to%20your%20heart.jpg',
    }
    ]
    
});