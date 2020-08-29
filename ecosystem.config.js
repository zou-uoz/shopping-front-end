module.exports = {
  apps: [
    {
      name: "ShoppingFront",
      instances: 1,
      script: "./node_modules/nuxt/bin/nuxt.js",
      args: "start",
      log_date_format:"YYYY-MM-DD HH:mm Z",
      // watch: true,
      // ignore_watch : ["node_modules", ".nuxt"],
      env: {
        COMMON_VARIABLE: "true"
      },
      env_production: {
        NODE_ENV: "production"
      }
    }
  ],

  deploy: {
    production: {
      user: "root",
      host: "47.115.157.0",
      ref: "origin/master",
      repo: "git@github.com:zou-uoz/shopping-test-front-end.git",
      path: "/root/shopping-test/shopping-test-front-end",
      "post-deploy":
        // "git pull && npm install && npm run build && pm2 reload ecosystem.config.js --env production"
        "git pull && npm run build && pm2 reload ecosystem.config.js --env production"
    }
  }
};
