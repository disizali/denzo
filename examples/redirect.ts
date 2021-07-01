import { Denzo } from "../mod.ts";
import { printRoutes } from "../utils/mod.ts";

const app = new Denzo();

interface RouteTypes {
  Response: {
    hello: string;
  };
}

app.route<RouteTypes>({
  method: "GET",
  url: "/google",
  handler(_request, reply) {
    reply.redirect("https://www.google.com");
  },
});

const listener = Deno.listen({ port: 3000 });
app.serve(listener);

console.log("On port 3030");
printRoutes(app);
