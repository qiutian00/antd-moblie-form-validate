## antd-moible-form-validate
ant mobile form validate, base rc-from, ant-mobile.

![images](./example/images/example.png)

## 注意
1.entry的入口文件位置，由开发环境的src/index.js改成了组件的出口src/components/index.js，表示此处只负责输出组件。
2.output的libraryTarget需要为commonjs2。
3.通过nodeExternals()将打包组件内的react等依赖给去除了，减小了包的体积，在引用该包时，只要其环境下有相关包，就可以正常使用。