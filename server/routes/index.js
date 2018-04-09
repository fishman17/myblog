import Router from 'koa-router'
import globalConfig from '../config'
// profix


const router = new Router({
  prefix: globalConfig.app.routerBaseApi
})

router.get('/user',async (ctx,next)=>{
  // console.log(next)
  ctx.body = 123;
  console.log(123123123)
});

export default router
