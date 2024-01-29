const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  /* 마일리지 */
  app.use(
    "/api/mileage",
    createProxyMiddleware({
      target: "http://61.109.214.181:8080",
      changeOrigin: true,
    })
  );
  /* FAQ */
  app.use(
    "/api/faq",
    createProxyMiddleware({
      target: "http://61.109.214.181:8081",
      changeOrigin: true,
    })
  );
  /* QnA */
  app.use(
    "/api/qna",
    createProxyMiddleware({
      target: "http://61.109.214.181:8083",
      changeOrigin: true,
    })
  );
  /* 판매처 */
  app.use(
    "/api/seller",
    createProxyMiddleware({
      target: "http://61.109.214.181:8084",
      changeOrigin: true,
    })
  );
  /* 주문 */
  app.use(
    ["/api/refund", "/api/order", "/api/cancel"],
    createProxyMiddleware({
      target: "http://61.109.214.181:8085",
      changeOrigin: true,
    })
  );
  /* 리뷰관리 */
  app.use(
    "/api/reviews",
    createProxyMiddleware({
      target: "http://61.109.214.181:8086",
      changeOrigin: true,
    })
  );
};
