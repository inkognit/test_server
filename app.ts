import * as Koa from "koa";
import * as koaBody from "koa-body";
import * as Router from "koa-router";

const app = new Koa();
const router = new Router();

app.use(koaBody());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {
  console.log("start server");
});

router.post("/addTask", async ctx => {
  try {
    const rusult = await addTask(
      ctx.request.body.id,
      ctx.request.body.description
    );
    console.log("description 1 ", ctx.request.body.id);
    console.log("id 1 ", ctx.request.body.id);
    ctx.body = rusult;
  } catch (err) {
    console.error("err", err);
    ctx.status = 500;
    ctx.body = " internal error";
  }
});

router.get("/", async ctx => {
  ctx.body = "lets go!";
});

const addTask = async (id: String, description: String) => {
  console.log("description", description);
  console.log("id", id);
  try {
    return { id, description };
  } catch (err) {
    console.error(err);
  }
};
