/*
 * @Author: lizhigang
 * @Date: 2023-02-09 15:01:23
 * @Company: orientsec.com.cn
 * @Description: 浏览器worker实例
 */
import { setupWorker } from 'msw'
import { handlers } from './handlers'

export const worker = setupWorker(...handlers)
