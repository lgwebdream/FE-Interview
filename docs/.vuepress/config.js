module.exports = {
  base: "/FE-Interview/",
//   title: "京程一灯",
  head: [["link", { rel: "icon", href: "/img/favicon.ico" }]],
  description: "精英班 课程大纲 全栈 架构师 图形学 工程化  ",
  themeConfig: {
    logo: '/img/logo_01c8731.png',
    nav: [
      { text: "课程大纲", link: "/" },
      { text: "实战项目", link: "/project/" }
    ],
    sidebar: 'auto',
    sidebarDepth: 2,
    displayAllHeaders: true,
    smoothScroll: true,
    search: false
  }
};
