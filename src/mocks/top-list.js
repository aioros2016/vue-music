/*
 * @Author: lizhigang
 * @Date: 2023-02-09 15:51:21
 * @Company: orientsec.com.cn
 * @Description: 榜单与详情mock
 */
import { rest } from 'msw'

export const getTopList = rest.get('/api/getTopList', (req, res, ctx) => {
  return res(
    // Respond with a 200 status code
    ctx.status(200),
    ctx.json({
      code: 0,
      result: {
        topList: [{
          id: 62,
          pic: 'http://y.gtimg.cn/music/photo_new/T003R300x300M000001ZuUi04733sR.jpg',
          name: '飙升榜',
          period: '2023-02-09',
          songList: [{ id: 384263699, singerName: '李荣浩', songName: '乌梅子酱' }, {
            id: 392021886,
            singerName: '邓寓君(等什么君)',
            songName: '道中人'
          }, { id: 391039821, singerName: '陈卓璇', songName: '天窗' }]
        }, {
          id: 26,
          pic: 'http://y.gtimg.cn/music/photo_new/T003R300x300M000003SxZVU45uDKZ.jpg',
          name: '热歌榜',
          period: '2023-02-09',
          songList: [{ id: 368139519, singerName: '容祖儿', songName: '就让这大雨全都落下' }, {
            id: 1030353,
            singerName: '蔡健雅',
            songName: 'Letting Go'
          }, { id: 372639235, singerName: '赵雷', songName: '我记得' }]
        }, {
          id: 27,
          pic: 'http://y.gtimg.cn/music/photo_new/T003R300x300M000001DNbUP1kKKwt.jpg',
          name: '新歌榜',
          period: '2023-02-09',
          songList: [{ id: 393418619, singerName: '王子健', songName: '循迹' }, {
            id: 391194138,
            singerName: '袁小葳',
            songName: '人海万里'
          }, { id: 391610675, singerName: '周深', songName: '人是_' }]
        }, {
          id: 4,
          pic: 'http://y.gtimg.cn/music/photo_new/T003R300x300M000003jUvZN0STMZ2.jpg',
          name: '流行指数榜',
          period: '2023-02-09',
          songList: [{ id: 390152632, singerName: '空城', songName: '换个角色爱你' }, {
            id: 393418619,
            singerName: '王子健',
            songName: '循迹'
          }, { id: 7253181, singerName: '张杰', songName: '听' }]
        }, {
          id: 57,
          pic: 'http://y.gtimg.cn/music/photo_new/T003R300x300M000003vNniv2OWerW.jpg',
          name: '喜力电音榜',
          period: '2023_5',
          songList: [{
            id: 391178249,
            singerName: 'ThimLife/Bibiane Z',
            songName: 'Home (Again) (Thimlife & Lorian Rose Version)'
          }, { id: 390980914, singerName: 'Onism./L?NX/Bumpÿ/故茕', songName: '春时·雪梅赋' }, {
            id: 389855098,
            singerName: 'Mike Candys',
            songName: 'For The People'
          }]
        }, {
          id: 52,
          pic: 'http://y.gtimg.cn/music/photo_new/T003R300x300M000001pbIXv24WJ64.jpg',
          name: '腾讯音乐人原创榜',
          period: '2023-02-08',
          songList: [{ id: 393418619, singerName: '王子健', songName: '循迹' }, {
            id: 393362290,
            singerName: '老王乐队',
            songName: '我在爱情的尽头看见了你和我 (Till we Meet at the End of Love)'
          }, { id: 393171907, singerName: '犬儒乐队', songName: '志铭' }]
        }, {
          id: 67,
          pic: 'http://y.gtimg.cn/music/photo_new/T003R300x300M000002jFoXG3Ok23k.jpg',
          name: '听歌识曲榜',
          period: '2023-02-09',
          songList: [{ id: 384107426, singerName: '那艺娜', songName: '爱如火' }, {
            id: 283942525,
            singerName: '李噫涵',
            songName: '听你呼吸里的伤 (DJ版)'
          }, { id: 393418619, singerName: '王子健', songName: '循迹' }]
        }, {
          id: 201,
          pic: 'http://y.gtimg.cn/music/photo_new/T003R300x300M000003Wkdlh0xuMEB.jpg',
          name: 'MV榜',
          period: '',
          songList: [{ id: 0, singerName: '周深', songName: '人是_ (《流浪地球2》电影定义主题曲)' }, {
            id: 0,
            singerName: 'TOMORROW X TOGETHER',
            songName: "TXT (투모로우바이투게더) 'Sugar Rush Ride' Official MV"
          }, { id: 0, singerName: '周深', songName: '花开忘忧' }]
        }, {
          id: 5,
          pic: 'http://y.gtimg.cn/music/photo_new/T003R300x300M0000010LvK13cjpXa.jpg',
          name: '内地榜',
          period: '2023_6',
          songList: [{ id: 389979699, singerName: '郁可唯', songName: '去有风的地方' }, {
            id: 393418619,
            singerName: '王子健',
            songName: '循迹'
          }, { id: 390152632, singerName: '空城', songName: '换个角色爱你' }]
        }, {
          id: 59,
          pic: 'http://y.gtimg.cn/music/photo_new/T003R300x300M000000A6O5q3sULOT.jpg',
          name: '香港地区榜',
          period: '2023_6',
          songList: [{ id: 368139519, singerName: '容祖儿', songName: '就让这大雨全都落下' }, {
            id: 389987990,
            singerName: '李克勤',
            songName: '晚风心里吹'
          }, { id: 391032669, singerName: '陈奕迅', songName: '盲婚哑嫁' }]
        }, {
          id: 61,
          pic: 'http://y.gtimg.cn/music/photo_new/T003R300x300M000004JHCoP0mGx8K.jpg',
          name: '台湾地区榜',
          period: '2023_6',
          songList: [{ id: 393960841, singerName: '林俊杰', songName: '达尔文' }, {
            id: 393959368,
            singerName: '林俊杰',
            songName: '想见你想见你想见你'
          }, { id: 393920398, singerName: '苏有朋', songName: '我最大的奇迹' }]
        }, {
          id: 3,
          pic: 'http://y.gtimg.cn/music/photo_new/T003R300x300M000001aSohF1BnTMu.jpg',
          name: '欧美榜',
          period: '2023_5',
          songList: [{ id: 391573225, singerName: 'Miley Cyrus', songName: 'Flowers' }, {
            id: 392216384,
            singerName: 'Max Oazo',
            songName: 'Cheri Cheri Lady'
          }, { id: 391617371, singerName: 'XG', songName: 'SHOOTING STAR' }]
        }, {
          id: 16,
          pic: 'http://y.gtimg.cn/music/photo_new/T003R300x300M000003oSNNW444ulC.jpg',
          name: '韩国榜',
          period: '2023_6',
          songList: [{ id: 388821920, singerName: 'NewJeans (뉴진스)', songName: 'Ditto' }, {
            id: 394087691,
            singerName: 'BSS (SEVENTEEN)/李泳知 (이영지)',
            songName: '파이팅 해야지 (Feat. 이영지) (Fighting)'
          }, { id: 394087689, singerName: 'BSS (SEVENTEEN)/Peder Elias', songName: '7시에 들어줘 (Feat. Peder Elias) (7PM)' }]
        }, {
          id: 17,
          pic: 'http://y.gtimg.cn/music/photo_new/T003R300x300M000002wMr5P0So4i3.jpg',
          name: '日本榜',
          period: '2023_5',
          songList: [{
            id: 391197995,
            singerName: 'HoneyWorks/星乃夢奈',
            songName: '可愛くてごめん (feat. 星乃夢奈) (这么可爱真是抱歉)'
          }, { id: 390076156, singerName: 'Uru (うる)', songName: '再会 Self' }, {
            id: 371727208,
            singerName: '澤野弘之 (さわの ひろゆき)/SennaRin (茜雫凛)',
            songName: 'IVORY TOWER (feat. SennaRin)'
          }]
        }, {
          id: 28,
          pic: 'http://y.gtimg.cn/music/photo_new/T003R300x300M000003Rup1u4RoZJe.jpg',
          name: '网络歌曲榜',
          period: '2023_6',
          songList: [{ id: 394348839, singerName: '半吨兄弟', songName: '为情所伤' }, {
            id: 391674264,
            singerName: '夏婉安',
            songName: '后来'
          }, { id: 392694311, singerName: '高进', songName: '小哥' }]
        }, {
          id: 63,
          pic: 'http://y.gtimg.cn/music/photo_new/T003R300x300M000004BkTPk3EdZuq.jpg',
          name: 'DJ舞曲榜',
          period: '2023_6',
          songList: [{ id: 392937832, singerName: '阿辰（阎辰）/袁小葳', songName: 'Baby I Love You (化作烟火)' }, {
            id: 391493180,
            singerName: '弹棉花的小花',
            songName: '成瘾 (DJ楠哈哈版)'
          }, { id: 122166609, singerName: 'Pogee/Barbara', songName: 'Miami Dancefloors (Ex-Po Remix Edit)' }]
        }, {
          id: 60,
          pic: 'http://y.gtimg.cn/music/photo_new/T003R300x300M000000OHgWu0lgAvD.jpg',
          name: '抖快榜',
          period: '2023_6',
          songList: [{ id: 368139519, singerName: '容祖儿', songName: '就让这大雨全都落下' }, {
            id: 372639235,
            singerName: '赵雷',
            songName: '我记得'
          }, { id: 288767498, singerName: '袁树雄', songName: '早安隆回' }]
        }, {
          id: 64,
          pic: 'http://y.gtimg.cn/music/photo_new/T003R300x300M000000DjWVP31vKdD.jpg',
          name: '综艺新歌榜',
          period: '2023_5',
          songList: [{ id: 393052752, singerName: '周深', songName: '月光 (Live)' }, {
            id: 392569113,
            singerName: '周深',
            songName: '歌曲：花开忘忧 (Live)'
          }, { id: 392237407, singerName: '林峯', songName: '晚风心里吹 (Live)' }]
        }, {
          id: 29,
          pic: 'http://y.gtimg.cn/music/photo_new/T003R300x300M000000oULqm4EGNtY.jpg',
          name: '影视金曲榜',
          period: '2023_5',
          songList: [{ id: 389979699, singerName: '郁可唯', songName: '去有风的地方' }, {
            id: 392412484,
            singerName: '韩红',
            songName: '花火'
          }, { id: 392492653, singerName: '唐汉霄', songName: '再见深海 (微亮的瞬间)' }]
        }, {
          id: 65,
          pic: 'http://y.gtimg.cn/music/photo_new/T003R300x300M000000ursfk0Qx0Jv.jpg',
          name: '国风热歌榜',
          period: '2023_5',
          songList: [{ id: 391939155, singerName: '摩登兄弟刘宇宁', songName: '六爻' }, {
            id: 391518942,
            singerName: '周深/王者荣耀',
            songName: '祈愿山海'
          }, { id: 390934913, singerName: '指尖笑', songName: '惊鸿醉' }]
        }, {
          id: 58,
          pic: 'http://y.gtimg.cn/music/photo_new/T003R300x300M000001zZaLq4U1UJa.jpg',
          name: '说唱榜',
          period: '2023_5',
          songList: [{
            id: 392806075,
            singerName: 'TF家族/TF家族-朱志鑫/TF家族-苏新皓/TF家族-左航/TF家族-张泽禹/TF家族-张峻豪',
            songName: '日日夜夜 (Day&night)'
          }, { id: 391618554, singerName: '张羽涵Leezi/永猩Nssus', songName: 'Lay it down' }, {
            id: 388778497,
            singerName: '半吨兄弟',
            songName: '我想更懂你 (烟嗓版)'
          }]
        }, {
          id: 72,
          pic: 'http://y.gtimg.cn/music/photo_new/T003R300x300M0000020D9NC0XcB8d.jpg',
          name: '动漫音乐榜',
          period: '2023_5',
          songList: [{ id: 392492653, singerName: '唐汉霄', songName: '再见深海 (微亮的瞬间)' }, {
            id: 392423476,
            singerName: '毛不易',
            songName: '小丑'
          }, { id: 392493828, singerName: '周昭妍（Miumiu）', songName: '星尘' }]
        }, {
          id: 73,
          pic: 'http://y.gtimg.cn/music/photo_new/T003R300x300M000001oTdjt1dJvgH.jpg',
          name: '游戏音乐榜',
          period: '2023_5',
          songList: [{ id: 389987990, singerName: '李克勤', songName: '晚风心里吹' }, {
            id: 391518942,
            singerName: '周深/王者荣耀',
            songName: '祈愿山海'
          }, { id: 391635365, singerName: 'ReoNa (レオナ)', songName: 'VITA' }]
        }, {
          id: 70,
          pic: 'http://y.gtimg.cn/music/photo_new/T003R300x300M000003xDqZO46UwyD.jpg',
          name: '达人音乐榜',
          period: '2023_6',
          songList: [{ id: 393154894, singerName: 'COOX.', songName: '很任性' }, {
            id: 393464751,
            singerName: '白允y',
            songName: '等不来花开'
          }, { id: 388782527, singerName: '余坪', songName: '梦里花 (Live)' }]
        }, {
          id: 36,
          pic: 'http://y.gtimg.cn/music/photo_new/T003R300x300M0000030HgRd1ESEFi.jpg',
          name: 'K歌金曲榜',
          period: '2023_6',
          songList: [{ id: 449200, singerName: '周杰伦', songName: '说好的幸福呢' }, {
            id: 309058164,
            singerName: '莫文蔚',
            songName: '这世界那么多人'
          }, { id: 938054, singerName: '戚薇', songName: '如果爱忘了' }]
        }, {
          id: 108,
          pic: 'http://y.gtimg.cn/music/photo_new/T003R300x300M000001ToV1o0adhlH.jpg',
          name: '美国公告牌榜',
          period: '2023_6',
          songList: [{ id: 391573225, singerName: 'Miley Cyrus', songName: 'Flowers' }, {
            id: 387630335,
            singerName: 'SZA',
            songName: 'Kill Bill'
          }, { id: 386972934, singerName: 'Metro Boomin/The Weeknd/21 Savage', songName: "Creepin' (Clean)" }]
        }, {
          id: 129,
          pic: 'http://y.gtimg.cn/music/photo_new/T003R300x300M000001S6RGf4UZYbB.jpg',
          name: '韩国Melon榜',
          period: '2023_6',
          songList: [{ id: 388821920, singerName: 'NewJeans (뉴진스)', songName: 'Ditto' }, {
            id: 390142723,
            singerName: 'NewJeans (뉴진스)',
            songName: 'OMG'
          }, { id: 369475641, singerName: 'NewJeans (뉴진스)', songName: 'Hype Boy' }]
        }, {
          id: 107,
          pic: 'http://y.gtimg.cn/music/photo_new/T003R300x300M000004K7PTX0sa5aM.jpg',
          name: '英国UK榜',
          period: '2023_6',
          songList: [{ id: 391573225, singerName: 'Miley Cyrus', songName: 'Flowers' }, {
            id: 376442254,
            singerName: 'RAYE/070 Shake',
            songName: 'Escapism. (Explicit)'
          }, { id: 387315191, singerName: 'SZA', songName: 'Kill Bill' }]
        }, {
          id: 105,
          pic: 'http://y.gtimg.cn/music/photo_new/T003R300x300M000002C09n82gMiWq.jpg',
          name: '日本公信榜',
          period: '2023_6',
          songList: [{ id: 382864440, singerName: '10-FEET (テンフィート)', songName: '第ゼロ感 (第零感)' }, {
            id: 378709532,
            singerName: 'Official髭男dism (OFFICIAL HIGE DANDISM)',
            songName: 'Subtitle'
          }, { id: 393378984, singerName: 'INI', songName: 'New Day' }]
        }, {
          id: 126,
          pic: 'http://y.gtimg.cn/music/photo_new/T003R300x300M0000024ppqC3Mx7uh.jpg',
          name: 'JOOX本地热播榜',
          period: '2023_5',
          songList: [{ id: 391918938, singerName: 'MC 张天赋', songName: '世一' }, {
            id: 392059891,
            singerName: '陈卓贤',
            songName: '再见 宁静海'
          }, { id: 390246015, singerName: '吕爵安', songName: 'LOVERSE' }]
        }, {
          id: 130,
          pic: 'http://y.gtimg.cn/music/photo_new/T003R300x300M000003OrSr33MPg0N.jpg',
          name: '香港TVB劲歌金榜',
          period: '2023_1',
          songList: [{ id: 386352339, singerName: '胡鸿钧', songName: '我们在结束时开始' }, {
            id: 386805504,
            singerName: 'Mike 曾比特',
            songName: '重见'
          }, { id: 387698760, singerName: '洪助昇 Aiden Hung', songName: '生活复常' }]
        }, {
          id: 127,
          pic: 'http://y.gtimg.cn/music/photo_new/T003R300x300M000002cesWt3V6T6o.jpg',
          name: '台湾KKBOX榜',
          period: '2023_5',
          songList: [{ id: 389317383, singerName: '陈势安', songName: '连输入法都记得你' }, {
            id: 391589936,
            singerName: 'U:NUS',
            songName: 'U & US'
          }, { id: 388565215, singerName: 'A-Lin', songName: '爱上你等于爱上寂寞' }]
        }, {
          id: 128,
          pic: 'http://y.gtimg.cn/music/photo_new/T003R300x300M0000045VwMt102GGt.jpg',
          name: 'YouTube音乐排行榜',
          period: '2023_6',
          songList: [{ id: 391573225, singerName: 'Miley Cyrus', songName: 'Flowers' }, {
            id: 388410750,
            singerName: 'Fuerza Regida/Grupo Frontera',
            songName: 'Bebe Dame'
          }, { id: 387471574, singerName: 'Carin Leon/Grupo Frontera', songName: 'Que Vuelvas' }]
        }]
      }
    })
  )
})

export const getTopDetail = rest.get('/api/getTopDetail', (req, res, ctx) => {
  return res(
    // Respond with a 200 status code
    ctx.status(200),
    ctx.json({
      code: 0,
      result: {
        songs: [{
          id: 384263699,
          mid: '001GLG5B45uLhI',
          name: '乌梅子酱',
          singer: '李荣浩',
          url: '',
          duration: 257,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000002PwL9x3TiVdh.jpg?max_age=2592000',
          album: '纵横四海'
        }, {
          id: 392021886,
          mid: '004aQNKP2nZN61',
          name: '道中人',
          singer: '邓寓君(等什么君)',
          url: '',
          duration: 226,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000001xUR0e2GskyK.jpg?max_age=2592000',
          album: '道中人'
        }, {
          id: 391039821,
          mid: '003Gjg4L1PXknF',
          name: '天窗',
          singer: '陈卓璇',
          url: '',
          duration: 267,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000003FdoPY3qOOhQ.jpg?max_age=2592000',
          album: '不降落飞行指南'
        }, {
          id: 336054233,
          mid: '0002IewZ15QgT7',
          name: '星光坠',
          singer: '张露馨',
          url: '',
          duration: 219,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000004bS3hP0E8lA7.jpg?max_age=2592000',
          album: '星光坠'
        }, {
          id: 391194138,
          mid: '003rFrWt2jl0bo',
          name: '人海万里',
          singer: '袁小葳',
          url: '',
          duration: 183,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000000zL9rz3T8OhM.jpg?max_age=2592000',
          album: '人海万里'
        }, {
          id: 231012655,
          mid: '000H9uLH12fsW2',
          name: '送流水',
          singer: '声音碎片',
          url: '',
          duration: 291,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000001oqMrt13uShR.jpg?max_age=2592000',
          album: '送流水'
        }, {
          id: 392442111,
          mid: '000hXtel4EhRfc',
          name: '寂寞烟火·2023',
          singer: '旺仔小乔',
          url: '',
          duration: 237,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000001EKtEd2QaW4L.jpg?max_age=2592000',
          album: '寂寞烟火·2023'
        }, {
          id: 202553248,
          mid: '004TEo4m1cwCtf',
          name: '桃花诺',
          singer: 'G.E.M. 邓紫棋',
          url: '',
          duration: 219,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000000Vk6tG2kuHDU.jpg?max_age=2592000',
          album: '上古情歌 电视剧原声带'
        }, {
          id: 394463582,
          mid: '001LVQHJ3Gzhq4',
          name: '归途有风',
          singer: '海来阿木',
          url: '',
          duration: 190,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000001VXpUr3uPgrs.jpg?max_age=2592000',
          album: '归途有风'
        }, {
          id: 392423394,
          mid: '0031Jjj02nocK0',
          name: '归途有风',
          singer: '小阿七',
          url: '',
          duration: 192,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M0000018pWAf1KQESN.jpg?max_age=2592000',
          album: '归途有风 (女版)'
        }, {
          id: 345548922,
          mid: '003GnIPj00dDFW',
          name: '阳光开朗大男孩',
          singer: '卦者灵风',
          url: '',
          duration: 206,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000003jRWcG0f05QH.jpg?max_age=2592000',
          album: '阳光开朗大男孩'
        }, {
          id: 376343205,
          mid: '0033Pebv3Hif2j',
          name: '一半疯了一半算了',
          singer: '3秒超市',
          url: '',
          duration: 249,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000004gBL110IOqxH.jpg?max_age=2592000',
          album: '一半疯了一半算了'
        }, {
          id: 394543083,
          mid: '003X79mL0L36Ue',
          name: '星之旅',
          singer: '孔艺弦/邓鼓/王者荣耀',
          url: '',
          duration: 282,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000003ieWMc2aWUOV.jpg?max_age=2592000',
          album: '星之旅'
        }, {
          id: 394067697,
          mid: '002K3BNM3zKkEq',
          name: '雨夜旁白',
          singer: '张露馨',
          url: '',
          duration: 229,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M0000012KCgQ3lSknH.jpg?max_age=2592000',
          album: '雨夜旁白'
        }, {
          id: 394452320,
          mid: '000Rc1pL3gTeCY',
          name: '痴情的我犯下痴情的错',
          singer: '彤大王',
          url: '',
          duration: 231,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000004aagYn0DhC9q.jpg?max_age=2592000',
          album: '痴情的我犯下痴情的错'
        }, {
          id: 391937863,
          mid: '004Xvufh2Jqryg',
          name: '爱的蠢动',
          singer: '胡期皓',
          url: '',
          duration: 149,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000003NFs0i2hFif4.jpg?max_age=2592000',
          album: '爱的蠢动'
        }, {
          id: 356424911,
          mid: '002jyNPQ3UGeh0',
          name: '再也没爱过',
          singer: '何深彰',
          url: '',
          duration: 245,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000004WG6OX0TgWhW.jpg?max_age=2592000',
          album: '再也没爱过'
        }, {
          id: 394449897,
          mid: '000sROm22TwXyg',
          name: '听',
          singer: '阿豪',
          url: '',
          duration: 197,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M0000041NUSb4IC9vm.jpg?max_age=2592000',
          album: '听（DJ杰哥版）'
        }, {
          id: 394704525,
          mid: '000My9rk06f1z3',
          name: '为情所伤',
          singer: '半吨兄弟',
          url: '',
          duration: 251,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000004Sb3jg4Xomkq.jpg?max_age=2592000',
          album: '为情所伤'
        }, {
          id: 334382135,
          mid: '001lePVO36SNSo',
          name: '天地龙鳞',
          singer: '王力宏',
          url: '',
          duration: 196,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000004VAoXe40mO4M.jpg?max_age=2592000',
          album: '天地龙鳞'
        }, {
          id: 393375320,
          mid: '001Lk5Yc291v2l',
          name: '山茶花读不懂白玫瑰',
          singer: 'Lil笑笑',
          url: '',
          duration: 199,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000001XzGsO0xEJMV.jpg?max_age=2592000',
          album: '山茶花读不懂白玫瑰'
        }, {
          id: 394058956,
          mid: '000CeIF71XdnoP',
          name: '就让这大雨全都落下',
          singer: '汪珂楠',
          url: '',
          duration: 253,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000002diXkG3ilyDh.jpg?max_age=2592000',
          album: '翻唱集2'
        }, {
          id: 361918960,
          mid: '004UfdN530V8RS',
          name: '一半疯了一半算了',
          singer: '苏谭谭',
          url: '',
          duration: 249,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000002fTjIO15gnWx.jpg?max_age=2592000',
          album: '一半疯了一半算了'
        }, {
          id: 394336362,
          mid: '002wpF9B375IJs',
          name: '再见深海 (微亮的瞬间)',
          singer: '唐汉霄',
          url: '',
          duration: 263,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000000h4BL74NXdur.jpg?max_age=2592000',
          album: '深海 电影原声大碟'
        }, {
          id: 312591364,
          mid: '001Y5vZB0XuqRm',
          name: 'You & Me',
          singer: 'Fingazz ft.H-Slang & Choco',
          url: '',
          duration: 231,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000003HyQvb2hDbdM.jpg?max_age=2592000',
          album: 'Me And You (Explicit)'
        }, {
          id: 382100126,
          mid: '004CYCkk1TgJ3S',
          name: 'Con La Brisa',
          singer: 'Foudeqush/Ludwig Göransson',
          url: '',
          duration: 167,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M0000026iZm626atos.jpg?max_age=2592000',
          album: 'Black Panther: Wakanda Forever - Music From and Inspired By'
        }, {
          id: 4995064,
          mid: '000KOu5r16cFi5',
          name: '命运',
          singer: '家家',
          url: '',
          duration: 230,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000002adz882rV5uh.jpg?max_age=2592000',
          album: '兰陵王 电视剧原声带'
        }, {
          id: 375285329,
          mid: '003820WE3U6YAv',
          name: '你别像风一样',
          singer: '苏星婕',
          url: '',
          duration: 161,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M00000049pk40oYjS1.jpg?max_age=2592000',
          album: '你别像风一样'
        }, {
          id: 389708280,
          mid: '003YPVIr2RhSa9',
          name: '云与海',
          singer: 'CR3.',
          url: '',
          duration: 135,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000002Fxt8t3H5fGb.jpg?max_age=2592000',
          album: '云与海（0.9降速版）'
        }, {
          id: 393603464,
          mid: '0038sFyx2ufC6x',
          name: '小小',
          singer: '赵乃吉',
          url: '',
          duration: 228,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000001PxcdB11KhTf.jpg?max_age=2592000',
          album: '小小（回忆版）'
        }, {
          id: 391619644,
          mid: '003rGYCY4TVWJA',
          name: '时光慢慢',
          singer: '天空乐队',
          url: '',
          duration: 246,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000004JppKa0YjNgO.jpg?max_age=2592000',
          album: '时光慢慢'
        }, {
          id: 259161385,
          mid: '003MgQ4S4W6UrJ',
          name: '童话',
          singer: '光良',
          url: '',
          duration: 241,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000001QgafV3XXIRM.jpg?max_age=2592000',
          album: '童话 Fairy Tale'
        }, {
          id: 324222198,
          mid: '0018UIMi2H0CYr',
          name: '失重催眠曲',
          singer: '淑清',
          url: '',
          duration: 287,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000002UalpT3anZhr.jpg?max_age=2592000',
          album: '阿尔法脑波音乐丨冥想丨放松'
        }, {
          id: 393904670,
          mid: '001bIAuF0E3lMN',
          name: '假装',
          singer: '阿磊',
          url: '',
          duration: 237,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000002tA7fs3EmB9J.jpg?max_age=2592000',
          album: '假装'
        }, {
          id: 391321115,
          mid: '000to2lE1TSgnZ',
          name: '游鲸与灯塔',
          singer: '杨瑜婷',
          url: '',
          duration: 227,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000004IfmJF3L08gf.jpg?max_age=2592000',
          album: '游鲸与灯塔'
        }, {
          id: 393411894,
          mid: '002xclLY3ivWh4',
          name: '让她走吧，别再想她',
          singer: '高跷妹',
          url: '',
          duration: 213,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000004GRhW53SrfRn.jpg?max_age=2592000',
          album: '让她走吧，别再想她'
        }, {
          id: 392423476,
          mid: '003j7UOF1AUjN9',
          name: '小丑',
          singer: '毛不易',
          url: '',
          duration: 245,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000001tM8zg0OnQu5.jpg?max_age=2592000',
          album: '小丑'
        }, {
          id: 377107951,
          mid: '001emhGf2dukEq',
          name: '一千零一个愿望',
          singer: 'Minnie',
          url: '',
          duration: 274,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000001zhK1c4PMYDz.jpg?max_age=2592000',
          album: '一千零一个愿望 (青春重置计划6 特调汽水)'
        }, {
          id: 384599068,
          mid: '000I4YLJ3BtFQn',
          name: '追光而来',
          singer: '卢卢快闭嘴',
          url: '',
          duration: 168,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000001TajJR3hmEwv.jpg?max_age=2592000',
          album: '追光而来'
        }, {
          id: 393418619,
          mid: '003Znf5f0APB6H',
          name: '循迹',
          singer: '王子健',
          url: '',
          duration: 197,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000000eZy7T0rdx97.jpg?max_age=2592000',
          album: '循迹'
        }, {
          id: 391910119,
          mid: '002fcUDA3SUHMk',
          name: '讲不出再见',
          singer: '谭咏麟',
          url: '',
          duration: 292,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000004GgCBM4Drry5.jpg?max_age=2592000',
          album: '经典留声：听见时光的声音'
        }, {
          id: 391573225,
          mid: '002Es8j947AA3f',
          name: 'Flowers',
          singer: 'Miley Cyrus',
          url: '',
          duration: 200,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000002TSEYU4QlxeN.jpg?max_age=2592000',
          album: 'Flowers'
        }, {
          id: 5079779,
          mid: '001BXE1e3iQtHA',
          name: '生日礼物',
          singer: '江涛',
          url: '',
          duration: 268,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000002hG2LE2BvVbQ.jpg?max_age=2592000',
          album: '等到花没开'
        }, {
          id: 392018379,
          mid: '0012ClDX2IEFWE',
          name: '还是会想你',
          singer: '7paste',
          url: '',
          duration: 165,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000001vMAhx3Vu6k7.jpg?max_age=2592000',
          album: '还是会想你'
        }, {
          id: 390556732,
          mid: '004VualN34wezH',
          name: '下辈子的誓言',
          singer: '潘倩倩',
          url: '',
          duration: 290,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000003XUBLp3IjiV9.jpg?max_age=2592000',
          album: '下辈子的誓言'
        }, {
          id: 384355170,
          mid: '000XBpt91mPrgl',
          name: '匆匆走完这一生',
          singer: '张茜',
          url: '',
          duration: 244,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000001i7mVW3CCQCW.jpg?max_age=2592000',
          album: '匆匆走完这一生'
        }, {
          id: 375285504,
          mid: '001PDR7S3xJJip',
          name: '行走的鱼',
          singer: '徐佳莹',
          url: '',
          duration: 245,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000002HcXA60aeTLD.jpg?max_age=2592000',
          album: '联名'
        }, {
          id: 230988173,
          mid: '003TYxDO46ac54',
          name: '不如不见面Remix',
          singer: 'KeepBoyZ/Bubble gum/梁老师T.Song',
          url: '',
          duration: 274,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000000sg4Df3fJ83K.jpg?max_age=2592000',
          album: '不如不见面Remix'
        }, {
          id: 390720061,
          mid: '003oQdIo0FqkJ4',
          name: '烟雨唱扬州',
          singer: '何炫丽',
          url: '',
          duration: 240,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000000lAu2l0KL394.jpg?max_age=2592000',
          album: '烟雨唱扬州'
        }, {
          id: 387385310,
          mid: '002X30Sa28Wru6',
          name: '活着',
          singer: '金润吉',
          url: '',
          duration: 203,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000003twSyR1mCFzB.jpg?max_age=2592000',
          album: '活着'
        }, {
          id: 394286359,
          mid: '000RXP5z0cFmOh',
          name: '这就是爱情（合唱版）',
          singer: '张家旺/悦开心',
          url: '',
          duration: 247,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M0000041rf9c0tPhpL.jpg?max_age=2592000',
          album: '这就是爱情（合唱版）'
        }, {
          id: 394353283,
          mid: '001VYiSy3u1Han',
          name: '我们总在等',
          singer: '范茹',
          url: '',
          duration: 231,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000004E6arH3srvfY.jpg?max_age=2592000',
          album: '我们总在等'
        }, {
          id: 360705384,
          mid: '002PEZio2R00kZ',
          name: '九十九度差一度',
          singer: '大美',
          url: '',
          duration: 230,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000000laNZJ2xDnnb.jpg?max_age=2592000',
          album: '九十九度差一度'
        }, {
          id: 202482671,
          mid: '000Nw0m813dPxY',
          name: 'FLY',
          singer: 'ANU',
          url: '',
          duration: 264,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M0000015xhDN42xBaO.jpg?max_age=2592000',
          album: 'FLY'
        }, {
          id: 582125,
          mid: '001QGp4g4dFqII',
          name: '我记得你眼里的依恋',
          singer: '音乐磁场',
          url: '',
          duration: 266,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M0000036HNF91tEXzV.jpg?max_age=2592000',
          album: '音乐磁场10-国语经典名曲'
        }, {
          id: 394469540,
          mid: '000GOO5V2aAfOC',
          name: '听',
          singer: '毛乖乖',
          url: '',
          duration: 145,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000004Q0wvN3DhYar.jpg?max_age=2592000',
          album: '听'
        }, {
          id: 395257701,
          mid: '0033vrEN2kYRDh',
          name: 'Bitter',
          singer: 'ロス',
          url: '',
          duration: 182,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000001KkUGD18l6KC.jpg?max_age=2592000',
          album: 'Bitter'
        }, {
          id: 393924827,
          mid: '0016kMRF3koinu',
          name: '她都不用哭',
          singer: '应嘉俐',
          url: '',
          duration: 240,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000003ozAmI2irTTm.jpg?max_age=2592000',
          album: '她都不用哭'
        }, {
          id: 394097804,
          mid: '0036SEvU3RgQuj',
          name: '就让这大雨全都落下',
          singer: '南音cc',
          url: '',
          duration: 254,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000002EoyTs1dRslR.jpg?max_age=2592000',
          album: '翻唱'
        }, {
          id: 368291194,
          mid: '0010f1vX2gJtme',
          name: 'ชอบตัวเองตอนอยู่กับเธอ',
          singer: 'Billkin',
          url: '',
          duration: 222,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000001Gvclw24crSB.jpg?max_age=2592000',
          album: 'ชอบตัวเองตอนอยู่กับเธอ'
        }, {
          id: 389702097,
          mid: '002uRTkW3fMFuM',
          name: '浪人琵琶',
          singer: 'CR3.',
          url: '',
          duration: 149,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M0000010bnDF0qpk7n.jpg?max_age=2592000',
          album: '浪人琵琶 (DJ0.9降速)'
        }]
      }
    })
  )
})
