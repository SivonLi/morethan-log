export default {
  async fetch(request, env) {
    try {
      return await env.ASSETS.fetch(request);
    } catch (e) {
      let pathname = new URL(request.url).pathname;
      return new Response(`"${pathname}" not found`, {
        status: 404,
        statusText: "not found",
      });
    }
  },
};
