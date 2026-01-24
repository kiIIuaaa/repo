// src/index.js - Cloudflare Worker 基础入口脚本
export default {
  // 处理所有网络请求的核心方法
  async fetch(request, env, ctx) {
    // 简单返回响应，验证部署成功
    return new Response("✅ Cloudflare Worker 部署成功！", {
      headers: { "Content-Type": "text/plain; charset=utf-8" }
    });
  },
};
