## step

分析每个模块需要的时间
1. leaflet 是啥
2. 创建一个项目，fork GitHub repo； 两人一组，结对编程
    1. 项目里包含： 基础脚手架，publish.sh，leaflet map demo
    2. 切个人分支
    3. 能够跑起来
3. 提出需求 散点图
    1. 在地图上用 div 描点
      - 地图
      - layer api: https://leafletjs.com/reference-1.5.0.html#layer-onadd
      - map api: https://leafletjs.com/reference-1.5.0.html#map-overlaypane
    1. 始末点为圆形， 样式不一致
    1. 可以改变颜色
    1. 可以添加覆盖物，删除覆盖物，修改覆盖物样式
4. 编写 gh-pages
5. Push 到远程仓库
6. 完善 readme 文档
7. 发布到 npmjs
8. 最后结果展现总结

- layer api: https://leafletjs.com/reference-1.5.0.html#layer-onadd
- map api: https://leafletjs.com/reference-1.5.0.html#map-overlaypane

## github fork
- git remote add upstream git@github.com:jdc-fe/leaflet.pluginDemo.git
- git fetch upstream
- gco -b hlj
- git merge upstream/feature/hlj
