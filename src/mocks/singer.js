/*
 * @Author: lizhigang
 * @Date: 2023-02-09 15:49:37
 * @Company: orientsec.com.cn
 * @Description: 歌手列表与详情mock
 */
import { rest } from 'msw'

export const getSingerList = rest.get('/api/getSingerList', (req, res, ctx) => {
  return res(
    // Respond with a 200 status code
    ctx.status(200),
    ctx.delay(2000),
    ctx.json({
      code: 0,
      result: {
        singers: [{
          title: '热',
          list: [{
            id: 4558,
            mid: '0025NhlN2yWrP4',
            name: '周杰伦',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M0000025NhlN2yWrP4.jpg'
          }, {
            id: 143,
            mid: '003Nz2So3XXYek',
            name: '陈奕迅',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000003Nz2So3XXYek.jpg'
          }, {
            id: 4286,
            mid: '001BLpXF2DyJe2',
            name: '林俊杰',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000001BLpXF2DyJe2.jpg'
          }, {
            id: 6016498,
            mid: '002YetSZ06c9c9',
            name: '王靖雯不胖',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000002YetSZ06c9c9.jpg'
          }, {
            id: 5062,
            mid: '002J4UUk29y8BY',
            name: '薛之谦',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000002J4UUk29y8BY.jpg'
          }, {
            id: 13948,
            mid: '001fNHEf1SFEFN',
            name: 'G.E.M. 邓紫棋',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000001fNHEf1SFEFN.jpg'
          }, {
            id: 4553007,
            mid: '0039JTTG0s4SCv',
            name: '时代少年团',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M0000039JTTG0s4SCv.jpg'
          }, {
            id: 7221,
            mid: '000CK5xN3yZDJt',
            name: '许嵩',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000000CK5xN3yZDJt.jpg'
          }, {
            id: 199509,
            mid: '003fA5G40k6hKc',
            name: '周深',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000003fA5G40k6hKc.jpg'
          }, {
            id: 29858,
            mid: '00067r4p0wBDDN',
            name: '任然',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M00000067r4p0wBDDN.jpg'
          }]
        }, {
          title: 'A',
          list: [{
            id: 944940,
            mid: '0020PeOh4ZaCw1',
            name: 'Alan Walker (艾兰·沃克)',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M0000020PeOh4ZaCw1.jpg'
          }]
        }, {
          title: 'B',
          list: [{
            id: 2,
            mid: '002pUZT93gF4Cu',
            name: 'BEYOND',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000002pUZT93gF4Cu.jpg'
          }, {
            id: 1190986,
            mid: '003DBAjk2MMfhR',
            name: 'BLACKPINK',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000003DBAjk2MMfhR.jpg'
          }, {
            id: 963482,
            mid: '004GZcGF2ZgJYo',
            name: '白小白',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000004GZcGF2ZgJYo.jpg'
          }, {
            id: 11733,
            mid: '004AlfUb0cVkN1',
            name: 'BIGBANG (빅뱅)',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000004AlfUb0cVkN1.jpg'
          }]
        }, {
          title: 'C',
          list: [{
            id: 143,
            mid: '003Nz2So3XXYek',
            name: '陈奕迅',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000003Nz2So3XXYek.jpg'
          }, {
            id: 4246,
            mid: '003iPzNg35cWzp',
            name: '程响',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000003iPzNg35cWzp.jpg'
          }, {
            id: 112,
            mid: '000hNnWC3kko2c',
            name: '蔡健雅',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000000hNnWC3kko2c.jpg'
          }, {
            id: 228,
            mid: '000JvETZ3tOrPR',
            name: '陈慧娴',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000000JvETZ3tOrPR.jpg'
          }, {
            id: 940748,
            mid: '004WgCsE3KBddt',
            name: '陈粒',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000004WgCsE3KBddt.jpg'
          }]
        }, {
          title: 'D',
          list: [{
            id: 2907567,
            mid: '001B2drs3Jq4EX',
            name: '等什么君(邓寓君)',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000001B2drs3Jq4EX.jpg'
          }, {
            id: 2174230,
            mid: '002ug9Ha2zYM1y',
            name: '单依纯',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000002ug9Ha2zYM1y.jpg'
          }, {
            id: 51313,
            mid: '002YZsgF2rNFZL',
            name: 'DJ小鱼儿',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000002YZsgF2rNFZL.jpg'
          }, {
            id: 244,
            mid: '000iZroE1VWLJG',
            name: '刀郎',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000000iZroE1VWLJG.jpg'
          }]
        }, {
          title: 'E',
          list: [{
            id: 38578,
            mid: '001QVwtq3l8cKC',
            name: 'EXO (엑소)',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000001QVwtq3l8cKC.jpg'
          }, {
            id: 29222,
            mid: '0045p4Sz0LIwL5',
            name: 'Ed Sheeran (艾德·希兰)',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M0000045p4Sz0LIwL5.jpg'
          }]
        }, {
          title: 'F',
          list: [{
            id: 951320,
            mid: '000PeZCQ1i4XVs',
            name: '房东的猫',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000000PeZCQ1i4XVs.jpg'
          }, {
            id: 1066,
            mid: '003zHcYF44FVEV',
            name: '方大同',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000003zHcYF44FVEV.jpg'
          }]
        }, {
          title: 'G',
          list: [{
            id: 13948,
            mid: '001fNHEf1SFEFN',
            name: 'G.E.M. 邓紫棋',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000001fNHEf1SFEFN.jpg'
          }, {
            id: 4418,
            mid: '0002ankM4d5yZI',
            name: '郭顶',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M0000002ankM4d5yZI.jpg'
          }, {
            id: 7293,
            mid: '004bwEMD0ssUPi',
            name: '郭德纲',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000004bwEMD0ssUPi.jpg'
          }]
        }, {
          title: 'H',
          list: [{
            id: 1012042,
            mid: '000oCQfT3kdonw',
            name: '黄霄雲',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000000oCQfT3kdonw.jpg'
          }, {
            id: 187111,
            mid: '001r6H560AOJMq',
            name: '花僮',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000001r6H560AOJMq.jpg'
          }]
        }, {
          title: 'I',
          list: [{
            id: 27158,
            mid: '003W0GsQ2bAxVU',
            name: 'Imagine Dragons (梦龙)',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000003W0GsQ2bAxVU.jpg'
          }]
        }, {
          title: 'J',
          list: [{
            id: 12111,
            mid: '004YXxql1sSr2o',
            name: '金志文',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000004YXxql1sSr2o.jpg'
          }, {
            id: 4199,
            mid: '001TgcTp2jHGOR',
            name: '蒋雪儿',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000001TgcTp2jHGOR.jpg'
          }, {
            id: 164157,
            mid: '002gC7Yc0KoAJ2',
            name: '金润吉',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000002gC7Yc0KoAJ2.jpg'
          }]
        }, {
          title: 'L',
          list: [{
            id: 4286,
            mid: '001BLpXF2DyJe2',
            name: '林俊杰',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000001BLpXF2DyJe2.jpg'
          }, {
            id: 60505,
            mid: '000aHmbL2aPXWH',
            name: '李荣浩',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000000aHmbL2aPXWH.jpg'
          }, {
            id: 967459,
            mid: '00257xNB06Ucx6',
            name: '柳爽',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M00000257xNB06Ucx6.jpg'
          }, {
            id: 4615,
            mid: '002ZOuVm3Qn20Y',
            name: '李宇春',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000002ZOuVm3Qn20Y.jpg'
          }, {
            id: 235,
            mid: '003nS2v740Lxcw',
            name: '李克勤',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000003nS2v740Lxcw.jpg'
          }, {
            id: 11606,
            mid: '001f0VyZ1hmWZ1',
            name: '林宥嘉',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000001f0VyZ1hmWZ1.jpg'
          }, {
            id: 51,
            mid: '003jJGvv3C82KZ',
            name: '刘若英',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000003jJGvv3C82KZ.jpg'
          }, {
            id: 163,
            mid: '003aQYLo2x8izP',
            name: '刘德华',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000003aQYLo2x8izP.jpg'
          }, {
            id: 44,
            mid: '000GGDys0yA0Nk',
            name: '梁静茹',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000000GGDys0yA0Nk.jpg'
          }, {
            id: 19329,
            mid: '000Qm9wO1bcM6J',
            name: '李玉刚',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000000Qm9wO1bcM6J.jpg'
          }]
        }, {
          title: 'M',
          list: [{
            id: 54,
            mid: '000cISVf2QqLc6',
            name: '莫文蔚',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000000cISVf2QqLc6.jpg'
          }, {
            id: 1507534,
            mid: '001BHDR33FZVZ0',
            name: '毛不易',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000001BHDR33FZVZ0.jpg'
          }]
        }, {
          title: 'P',
          list: [{
            id: 4442,
            mid: '000mLAT42CFWNa',
            name: '朴树',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000000mLAT42CFWNa.jpg'
          }]
        }, {
          title: 'Q',
          list: [{
            id: 1103924,
            mid: '001ZVMXf3ZYVX7',
            name: '曲肖冰',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000001ZVMXf3ZYVX7.jpg'
          }]
        }, {
          title: 'R',
          list: [{
            id: 29858,
            mid: '00067r4p0wBDDN',
            name: '任然',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M00000067r4p0wBDDN.jpg'
          }]
        }, {
          title: 'S',
          list: [{
            id: 4553007,
            mid: '0039JTTG0s4SCv',
            name: '时代少年团',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M0000039JTTG0s4SCv.jpg'
          }, {
            id: 7588624,
            mid: '002lKaDq2lLLtk',
            name: '苏星婕',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000002lKaDq2lLLtk.jpg'
          }, {
            id: 109,
            mid: '001pWERg3vFgg8',
            name: '孙燕姿',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000001pWERg3vFgg8.jpg'
          }, {
            id: 218,
            mid: '003u5H9x1vACGo',
            name: 'S.H.E',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000003u5H9x1vACGo.jpg'
          }, {
            id: 7015,
            mid: '004ItgA32BhfdC',
            name: 'Sia (希雅)',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000004ItgA32BhfdC.jpg'
          }, {
            id: 61620,
            mid: '004KKLWZ4320g1',
            name: '宋冬野',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000004KKLWZ4320g1.jpg'
          }]
        }, {
          title: 'T',
          list: [{
            id: 11921,
            mid: '000qrPik2w6lDr',
            name: 'Taylor Swift (泰勒·斯威夫特)',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000000qrPik2w6lDr.jpg'
          }, {
            id: 149,
            mid: '0040D7gK4aI54k',
            name: '谭咏麟',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M0000040D7gK4aI54k.jpg'
          }, {
            id: 101,
            mid: '002cK0F12szD9T',
            name: '陶喆',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000002cK0F12szD9T.jpg'
          }, {
            id: 4701,
            mid: '001ByAsv3XCdgm',
            name: '田馥甄',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000001ByAsv3XCdgm.jpg'
          }]
        }, {
          title: 'V',
          list: [{
            id: 173914,
            mid: '003AD17D4PYPFR',
            name: 'Vicetone',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000003AD17D4PYPFR.jpg'
          }]
        }, {
          title: 'W',
          list: [{
            id: 6016498,
            mid: '002YetSZ06c9c9',
            name: '王靖雯不胖',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000002YetSZ06c9c9.jpg'
          }, {
            id: 3954,
            mid: '001z2JmX09LLgL',
            name: '汪苏泷',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000001z2JmX09LLgL.jpg'
          }, {
            id: 74,
            mid: '000Sp0Bz4JXH0o',
            name: '五月天',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000000Sp0Bz4JXH0o.jpg'
          }, {
            id: 264,
            mid: '000GDDuQ3sGQiT',
            name: '王菲',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000000GDDuQ3sGQiT.jpg'
          }, {
            id: 265,
            mid: '001JDzPT3JdvqK',
            name: '王力宏',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000001JDzPT3JdvqK.jpg'
          }, {
            id: 161301,
            mid: '000IBYF50SRnXP',
            name: '王源',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000000IBYF50SRnXP.jpg'
          }]
        }, {
          title: 'X',
          list: [{
            id: 5062,
            mid: '002J4UUk29y8BY',
            name: '薛之谦',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000002J4UUk29y8BY.jpg'
          }, {
            id: 7221,
            mid: '000CK5xN3yZDJt',
            name: '许嵩',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000000CK5xN3yZDJt.jpg'
          }, {
            id: 3376,
            mid: '00235pCx2tYjlq',
            name: '许巍',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M00000235pCx2tYjlq.jpg'
          }]
        }, {
          title: 'Y',
          list: [{
            id: 19624,
            mid: '000NUoMp2WAEpO',
            name: '郁可唯',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000000NUoMp2WAEpO.jpg'
          }, {
            id: 11608,
            mid: '003tMm0y0TuewY',
            name: '杨宗纬',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000003tMm0y0TuewY.jpg'
          }, {
            id: 171,
            mid: '000xogLP35ayzS',
            name: '杨千嬅',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000000xogLP35ayzS.jpg'
          }, {
            id: 1288409,
            mid: '002vALgR3hRRlv',
            name: '音阙诗听',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000002vALgR3hRRlv.jpg'
          }]
        }, {
          title: 'Z',
          list: [{
            id: 4558,
            mid: '0025NhlN2yWrP4',
            name: '周杰伦',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M0000025NhlN2yWrP4.jpg'
          }, {
            id: 199509,
            mid: '003fA5G40k6hKc',
            name: '周深',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000003fA5G40k6hKc.jpg'
          }, {
            id: 6499,
            mid: '002azErJ0UcDN6',
            name: '张杰',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000002azErJ0UcDN6.jpg'
          }, {
            id: 4365,
            mid: '004NMZuf2BLjg8',
            name: '周传雄',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000004NMZuf2BLjg8.jpg'
          }, {
            id: 174,
            mid: '004Be55m1SJaLk',
            name: '张学友',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000004Be55m1SJaLk.jpg'
          }, {
            id: 199515,
            mid: '0003ZpE43ypssl',
            name: '张碧晨',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M0000003ZpE43ypssl.jpg'
          }, {
            id: 206036,
            mid: '003jTY4I4f2ETE',
            name: '赵乃吉',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000003jTY4I4f2ETE.jpg'
          }, {
            id: 224,
            mid: '002raUWw3PXdkT',
            name: '张韶涵',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000002raUWw3PXdkT.jpg'
          }, {
            id: 4607,
            mid: '000aw4WC2EQYTv',
            name: '张靓颖',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000000aw4WC2EQYTv.jpg'
          }, {
            id: 167,
            mid: '0000mFvh1jtLcz',
            name: '张信哲',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M0000000mFvh1jtLcz.jpg'
          }, {
            id: 40449,
            mid: '001Lr98T0yEWAk',
            name: '赵雷',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000001Lr98T0yEWAk.jpg'
          }, {
            id: 89698,
            mid: '003Cn3Yh16q1MO',
            name: '庄心妍',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M000003Cn3Yh16q1MO.jpg'
          }, {
            id: 87,
            mid: '0001v4XU1cZxPy',
            name: '张国荣',
            pic: 'http://y.gtimg.cn/music/photo_new/T001R800x800M0000001v4XU1cZxPy.jpg'
          }]
        }]
      }
    })
  )
})

export const getSingerDetail = rest.get('/api/getSingerDetail', (req, res, ctx) => {
  return res(
    // Respond with a 200 status code
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
