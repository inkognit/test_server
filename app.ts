import * as Koa from "koa";
import * as koaBody from "koa-body";
import { router } from "/home/mikhail/z/router/index";

const app = new Koa();

app.use(koaBody());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {
  console.log("start server");
});
