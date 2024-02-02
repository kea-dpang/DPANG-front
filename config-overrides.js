const { override, addBabelPlugin } = require("customize-cra");

module.exports = override(
  addBabelPlugin([
    "module-resolver",
    {
      root: ["./src"],
      alias: {
        "@api": "./src/api",
        "@data": "./src/assets/data",
        "@fonts": "./src/assets/fonts",
        "@images": "./src/assets/images",
        "@components": "./src/components/common",
        "@userPages": "./src/pages/user",
        "@adminPages": "./src/pages/admin",
        "@recoilUser": "./src/recoil/user",
        "@userRoutes": "./src/routes/UserRoutes",
        "@adminRoutes": "./src/routes/AdminRoutes",
        "@styles": "./src/styles",
        "@utils": "./src/utils",
      },
    },
  ])
);
