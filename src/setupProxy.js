const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  /* 마일리지 */
  app.use(
    "/api/mileage",
    createProxyMiddleware({
      target: "http://61.109.214.38",
      changeOrigin: true,
    })
  );
  /* FAQ */
  app.use(
    "/api/faq",
    createProxyMiddleware({
      target: "http://61.109.214.38",
      changeOrigin: true,
    })
  );
  /* QnA */
  app.use(
    "/api/qna",
    createProxyMiddleware({
      target: "http://61.109.214.38",
      changeOrigin: true,
    })
  );
  /* 판매처 */
  app.use(
    "/api/seller",
    createProxyMiddleware({
      target: "http://61.109.214.38",
      changeOrigin: true,
    })
  );
  /* 주문 */
  app.use(
    ["/api/refunds", "/api/orders", "/api/cancels"],
    createProxyMiddleware({
      target: "http://61.109.214.38",
      changeOrigin: true,
    })
  );
  /* 리뷰관리 */
  app.use(
    ["/api/reviews", "/api/reviewers"],
    createProxyMiddleware({
      target: "http://61.109.214.38",
      changeOrigin: true,
    })
  );
  /* 아이템관리 */
  app.use(
    "/api/items",
    createProxyMiddleware({
      target: "http://61.109.214.38",
      changeOrigin: true,
    })
  );
  /* 아이템관리 */
  app.use(
    "/api/items",
    createProxyMiddleware({
      target: "http://61.109.214.38",
      changeOrigin: true,
    })
  );
  // /* 이미지 업로드 */
  // app.use(
  //   "/api/image",
  //   createProxyMiddleware({
  //     target: "http://61.109.214.181:8087",
  //     changeOrigin: true,
  //   })
  // );
  /* 이미지 업로드 */
  app.use(
    "/api/image",
    createProxyMiddleware({
      target: "http://61.109.214.38",
      changeOrigin: true,
    })
  );
  /* 이벤트관리 */
  app.use(
    "/api/events",
    createProxyMiddleware({
      target: "http://61.109.214.38",
      changeOrigin: true,
    })
  );
  /* 회원관리 */
  app.use(
    "/api/users",
    createProxyMiddleware({
      target: "http://61.109.214.38",
      changeOrigin: true,
    })
  );
  /* 회원관리 */
  app.use(
    "/api/carts",
    createProxyMiddleware({
      target: "http://61.109.214.38",
      changeOrigin: true,
    })
  );
  /* auth */
  app.use(
    "/api/auth",
    createProxyMiddleware({
      target: "http://61.109.214.38",
      changeOrigin: true,
    })
  );
};
