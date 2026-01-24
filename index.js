// src/index.js - Cloudflare Workers 基础示例
export default {
  // 处理所有 HTTP 请求
  async fetch(request) {
    return new Response("Hello, Cloudflare Workers!", {
      headers: { "Content-Type": "text/plain" },
    });
  },
};
