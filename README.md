## antd-moible-form-validate
ant mobile form validate, base rc-from, ant-mobile.

![images](./example/images/example.png)

## Development

```bash
yarn add sg-moible-form

```

### Usage

```bash
import { FormItems } from 'antd-mobile-form-validate';
```

### [Example](./src/index.js)

```bash

import React from 'react';
import ReactDOM from 'react-dom';
import { TextareaItem, DatePicker, List } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import { createForm } from 'rc-form';
import { FormItems } from 'antd-mobile-form-validate';
import './index.css';

const App = (props) => {
  const { form } = props;

  const basicIsCanEdit = false;
  return (
    <div className="pageContainer">
      <FormItems
        columnName="dyzl"
        rules={[{ required: true, message: '请输入必填项字段名' }]}
        title="字段名"
        placeholder="请输入字段名"
        autoHeight
        form={form}
        WrapperItem={TextareaItem}
      />
    </div>
  );

}

const NewApp = createForm()(App);

```


## 注意
* 1.entry的入口文件位置，由开发环境的src/index.js改成了组件的出口src/components/index.js，表示此处只负责输出组件。

* 2.output的libraryTarget需要为commonjs2。

* 3.通过nodeExternals()将打包组件内的react等依赖给去除了，减小了包的体积，在引用该包时，只要其环境下有相关包，就可以正常使用。