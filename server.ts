// 실행시 deno run이 아니라 deno run --allow-net으로 해야한다.
// 왜냐 permission과 관련한 flag를 주지 않으면 에러가 발생하기 때문
// 즉 보안이 강화되어서 그렇다.
import { serve } from "https://deno.land/std@0.83.0/http/server.ts";

const server = serve({ hostname: "0.0.0.0", port: 8080 });
console.log(`HTTP webserver running.  Access it at:  http://localhost:8080/ 🦕`);

(async function handleHttpRequest () {
  for await (const request of server) {
    let bodyContent = "Your user-agent is:\n\n";
    bodyContent += request.headers.get("user-agent") || "Unknown";

    request.respond({
      status: 200,
      body: `
      Hello Deno!
                    __
                    / _)
          _.----._/ /
          /         /
      __/ (  | (  |
      /__.-'|_|--|_|
      `
    });
  }
})()