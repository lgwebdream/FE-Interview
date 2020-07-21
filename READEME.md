# 网页版课程大纲

## vuepress文档

[文档配置说明](https://www.vuepress.cn/guide/)

## 运行

```shell
    npm run docs:dev # 开发环境
    npm run docs:build # 打包线上代码
```

## 文件内容修改路径

- 修改页面导航，添加配置等
   - docs/.vuepress/config.js 
- 页面样式修改
   - docs/.vuepress/styles
- 课程大纲内容修改
   - docs/README.md 
- 实战内容修改
   - docs/project/README.md 

## 打包上线

- docs/.vuepress/dist目录上传到服务器
- 注意
   - 修改dist目录名为outline
   - 或者直接将dist目录下的内容上传到服务器outline目录下