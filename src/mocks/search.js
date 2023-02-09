/*
 * @Author: lizhigang
 * @Date: 2023-02-09 16:02:57
 * @Company: orientsec.com.cn
 * @Description: 搜索与热门搜索词mock
 */
import { rest } from 'msw'

export const getSearch = rest.get('/api/search', (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      code: 0,
      result: {
        songs: [{
          id: 125311712,
          mid: '0018DSTN0YHKNx',
          name: '七里香 (剧场版)',
          singer: '周杰伦',
          url: '',
          duration: 373,
          pic: 'https://y.gtimg.cn/mediastyle/music_v11/extra/default_300x300.jpg?max_age=31536000',
          album: ''
        }, {
          id: 101803866,
          mid: '001cCPt60GRPUz',
          name: '手写的从前 (Live)',
          singer: '周杰伦',
          url: '',
          duration: 287,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000002xOmp62kqSic.jpg?max_age=2592000',
          album: '2015江苏卫视新年演唱会'
        }, {
          id: 336474765,
          mid: '003SAFY70Nu60A',
          name: '给我一首歌的时间 + 我不配 + 安静 + 轨迹 (Live)',
          singer: '周杰伦',
          url: '',
          duration: 484,
          pic: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000001SfWPi2wEX1b.jpg?max_age=2592000',
          album: '第三届TMEA腾讯音乐娱乐盛典'
        }, {
          id: 369072391,
          mid: '003a2vuS32utR4',
          name: '《回到过去》周杰伦：听完上头 (DJ长音频)',
          singer: '宝藏挖掘机',
          url: '',
          duration: 126,
          pic: 'https://y.gtimg.cn/mediastyle/music_v11/extra/default_300x300.jpg?max_age=31536000',
          album: ''
        }],
        singer: {
          id: 4558,
          mid: '0025NhlN2yWrP4',
          name: '周杰伦',
          pic: 'https://y.gtimg.cn/music/photo_new/T001R800x800M0000025NhlN2yWrP4.jpg?max_age=2592000'
        },
        hasMore: true
      }
    })
  )
})

export const getHotKeys = rest.get('/api/getHotKeys', (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      code: 0,
      result: {
        code: 0,
        hotKeys: [{
          key: '周杰伦',
          id: 4558
        }, {
          key: '陈奕迅',
          id: 4559
        }]
      }
    })
  )
})
