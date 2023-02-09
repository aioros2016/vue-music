/*
 * @Author: lizhigang
 * @Date: 2023-02-09 14:54:07
 * @Company: orientsec.com.cn
 * @Description: mock接口列表
 */
import { getRecommend, getAlbum } from './recommend'
import { getSingerList, getSingerDetail } from './singer'
import { getTopList, getTopDetail } from './top-list'
import { getSearch, getHotKeys } from './search'
import { getSongsUrl, getLyric } from './song'

export const handlers = [
  getRecommend,
  getAlbum,
  getSingerList,
  getTopList,
  getSearch,
  getSongsUrl,
  getSingerDetail,
  getLyric,
  getTopDetail,
  getHotKeys
]
