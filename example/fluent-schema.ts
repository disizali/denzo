import S from "https://esm.sh/fluent-json-schema@3.0.0";
import { Espresso } from "../mod.ts";

const app = new Espresso();

app.route({
  method: "GET",
  url: "/concat",
  schema: {
    query: S.object()
      .prop("a", S.string().required())
      .prop("b", S.string().required()),
  },
  handler(request) {
    const body = request.query as any;
    return {
      result: body.a + body.b,
    };
  },
});

const listener = Deno.listen({ port: 3000 });
app.serve(listener);

console.log('On port 3030')
app.router.getRoutes().forEach((route, path) =>
  console.log(`${route.method} ${path}`)
);