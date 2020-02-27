const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/salandyj2/Sites/_personal/yfc/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-templates-blog-post-tsx": hot(preferDefault(require("/Users/salandyj2/Sites/_personal/yfc/src/templates/blog-post.tsx"))),
  "component---src-templates-blog-list-tsx": hot(preferDefault(require("/Users/salandyj2/Sites/_personal/yfc/src/templates/blog-list.tsx"))),
  "component---src-templates-tags-tsx": hot(preferDefault(require("/Users/salandyj2/Sites/_personal/yfc/src/templates/tags.tsx"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("/Users/salandyj2/Sites/_personal/yfc/src/pages/404.tsx"))),
  "component---src-pages-about-tsx": hot(preferDefault(require("/Users/salandyj2/Sites/_personal/yfc/src/pages/about.tsx"))),
  "component---src-pages-contact-tsx": hot(preferDefault(require("/Users/salandyj2/Sites/_personal/yfc/src/pages/contact.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/salandyj2/Sites/_personal/yfc/src/pages/index.tsx")))
}

