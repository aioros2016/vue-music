/*
 * @Author: lizhigang
 * @Date: 2023-02-09 15:37:31
 * @Company: orientsec.com.cn
 * @Description: 推荐与歌单mock
 */

import { rest } from 'msw'

export const getRecommend = rest.get('/api/getRecommend', (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      code: 0,
      result: {
        sliders: [{
          id: '35126231',
          pic: 'https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/4553383.jpg',
          link: 'https://y.qq.com/n/yqq/album/0013774a0alJLn.html'
        }, {
          id: 'https://i.y.qq.com/n2/m/digitalbum/buy/index.html?mid=000A0zgD060eoR&_video=true&_hidehd=1&_miniplayer=1&g_f=yqqjiaodian',
          pic: 'https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/4554993.jpg',
          link: 'https://i.y.qq.com/n2/m/digitalbum/buy/index.html?mid=000A0zgD060eoR&_video=true&_hidehd=1&_miniplayer=1&g_f=yqqjiaodian'
        }],
        albums:
          [{
            id: 7745421521,
            username: '顾雨菲',
            title: '时代少年团｜我们一起并肩前行',
            pic: 'http://qpic.y.qq.com/music_cover/zQII3lJrGSNNoWObRlPoys4sNl35qyw1JX0NNIVlGDR9GDu4dK7R4Q/300?n=1'
          }, {
            id: 7675104902,
            username: '平泽唯唯',
            title: '纯音乐☁超治愈☁适合学习喔～',
            pic: 'http://qpic.y.qq.com/music_cover/NdzibUgT17lZoDhtI4ozl86fWZOuXuCfP7iaduiauuv9kxiciayXicoXp1icQ/300?n=1'
          }, {
            id: 3540484302,
            username: '陈哲',
            title: '学霸必备：专心写作业 享受轻音乐好时光',
            pic: 'http://qpic.y.qq.com/music_cover/Cz8Z9ECDQia3gE2YticLiaJ22KNOu00Czu4RYkZmia3kAhUCYhiaPZ6qXQg/300?n=1'
          }, {
            id: 8029241405,
            username: 'honeysea🍯',
            title: '『独家欧美』晚风踩着云朵贩卖爱',
            pic: 'http://qpic.y.qq.com/music_cover/kGLjZpdYBzic5qRiclmCYnIqA1cicEhE2iaiaVQ2VsrNfkDL3VTlF41vQeicJo3TORyjEP/300?n=1'
          }, {
            id: 892344800,
            username: '鲸落化为孤岛',
            title: '“三杰” 时光荏苒,追寻逝去流年',
            pic: 'http://qpic.y.qq.com/music_cover/H4L7icoRhSgTiaJ9e6rNiaM8UDZPUUVp2YNicNcGwXfIBevr2FUPTEia5Tg/300?n=1'
          }, {
            id: 4144081013,
            username: '冷山集',
            title: 'Trap Rap丨慵懒毒性的迷幻说唱',
            pic: 'http://qpic.y.qq.com/music_cover/sCdyUKgxMOFRx0cRlichSyiblJsoZwNMjfXbCsSHFN5VzMaPKfiaVvKLw/300?n=1'
          }, {
            id: 7915412634,
            username: '自渡·',
            title: '纯音入眠佳曲: 治愈午后小时光',
            pic: 'http://qpic.y.qq.com/music_cover/ebxVDMSrIr0KHic07h73iaczzoeyZsjb9j01rmmlCafZmJSH4TfF4aKQ/300?n=1'
          }, {
            id: 7727231376,
            username: '王亚鹏',
            title: '中文MC感情麦：喊出人生道理',
            pic: 'http://qpic.y.qq.com/music_cover/EXVh00J0l1orGx5nKZymFUySLctkBibpFtNX47YA5Hxo07icA9KtVvPQ/300?n=1'
          }, {
            id: 7950589030,
            username: 'ONLY',
            title: '「独享时光」独处是一个人的清欢',
            pic: 'http://qpic.y.qq.com/music_cover/Zqn9d9hvgT1O39PeFzU41Hp5NT1aq0rvZlanf9D1ediaAKibx9NIOSlQ/300?n=1'
          }, {
            id: 8119485961,
            username: '青春猪头少年',
            title: '古风戏腔 |戏已开场 八方开听',
            pic: 'http://qpic.y.qq.com/music_cover/S9gjdWgE7YHcVKbco05ibzZicnhn2uZ8YcQg0yaqBpxMHCW5h38NJV8Q/300?n=1'
          }, {
            id: 8039753464,
            username: '半岛',
            title: '片段翻唱 ｜把落日余晖藏在心里',
            pic: 'http://qpic.y.qq.com/music_cover/DuKUYHgAKNJF4HrKEl0FiazorlnZJYhBuT2vib9xCILP21q5tVPyibqew/300?n=1'
          }, {
            id: 8054858756,
            username: 'Koi',
            title: 'Rapper情话看世间万物皆是浪漫',
            pic: 'http://qpic.y.qq.com/music_cover/It6JAhhBKnxpIb5RK4NEW74QhjWicIRqXys99libXsibAteuJy7kribNicCtGEhaUQ1icy/300?n=1'
          }]
      }
    })
  )
})

export const getAlbum = rest.get('/api/getAlbum', (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      code: 0,
      result: {
        songs: [{
          id: 125348859,
          mid: '0019MXW93H5C9u',
          name: '兰亭序',
          singer: '周杰伦',
          url: '',
          duration: 459,
          pic: 'https://y.gtimg.cn/mediastyle/music_v11/extra/default_300x300.jpg?max_age=31536000',
          album: ''
        }, {
          id: 3223506,
          mid: '001tCE0T2vR5p5',
          name: '画沙',
          singer: '袁咏琳/周杰伦',
          url: '',
          duration: 273,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000001PWEzJ1gmAJn.jpg?max_age=2592000',
          album: '袁咏琳 Cindy'
        }]
      }
    })
  )
})
