import * as Router from "koa-router";
import { addTask } from "../api/task";

export const router = new Router();

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
