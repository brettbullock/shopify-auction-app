import Router  from 'koa-router';

const router = new Router;

// routes
router.get('/', async ctx => {
  ctx.redirect('/admin');
});

export default router;