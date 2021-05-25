import React from 'react';
import ReactDOM from 'react-dom';
import { TextareaItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import FormItems from './components/FormItems';

const App = () => {
  return (
    <div>
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
  )
}

const NewApp = createForm()(App);

//要实现局部热更新，必须要添加此句
if (module.hot) {module.hot.accept()}

ReactDOM.render(<NewApp />, document.getElementById('root'));
