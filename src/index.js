import React from 'react';
import ReactDOM from 'react-dom';
import { TextareaItem, DatePicker, List } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import { createForm } from 'rc-form';
import FormItems from './components/FormItems';
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
      <FormItems
        columnName="dyzl"
        rules={[
          { required: true, message: '请输入必填项动用指令' },
          { regexp: /^\d+$/, pattern: /^粤应急函.+$/, message: '请输入正确格式：粤应急函〔2021〕001号'}
        ]}
        // error={basicIsCanEdit || validateDyzlResult.success ? '' : validateDyzlResult.message}
        // onErrorClick={!basicIsCanEdit && (() => {
        //   if (!validateDyzlResult.success) {
        //     Toast.fail(validateDyzlResult.message);
        //   }
        // })}
        title="动用指令"
        placeholder="请输入动用指令"
        autoHeight
        disabled={basicIsCanEdit}
        form={form}
        WrapperItem={TextareaItem}
      />
      <FormItems
        title="要求达到时间"
        columnName="yqddsjTime"
        // initialValue={ new Date(viewDyzlDetailData?.data?.yqddsj ?? Date.now()) }
        rules={[{ required: true, message: '请输入必填要求达到时间' }]}
        placeholder="请输入要求到达时间"
        autoHeight
        disabled={basicIsCanEdit}
        form={form}
        WrapperItem={DatePicker}
        format="yyyy-MM-dd HH:mm:ss"
      >
        <List.Item arrow="horizontal" className="dateList" disabled={basicIsCanEdit}>要求达到时间</List.Item>
      </FormItems>
      {
        !basicIsCanEdit
          ?
          (
            <FormItems
              title="目的地"
              columnName="mdd"
              // initialValue={[{selectedOptions: [viewDyzlDetailData?.data?.mdd, viewDyzlDetailData?.data?.mddmc]}]}
              rules={[{ required: true, message: '请选择目的地' }]}
              placeholder="请选择目的地"
              extra="选择目的地"
              autoHeight
              disabled={basicIsCanEdit}
              form={form}
              // WrapperItem={SGDictSelect}
              className="sgDict"
              multiple={false}
              wrap
              showSearch
              multiSelect={false}
              isSingle={false}
              searchPlaceholder="输入名称搜索"
              data={typeof areaTreeData || []}
              keepSearch
              // onSearch={this.handleSearchMdd}
            />
          )
          :
          (
            <FormItems
              title="目的地"
              columnName="mdd"
              // initialValue={ viewDyzlDetailData?.data?.mddmc ?? ''}
              rules={[{ required: true, message: '请选择目的地' }]}
              placeholder="请选择目的地"
              autoHeight
              disabled={basicIsCanEdit}
              form={form}
            />
          )
      }
      <FormItems
        title="接收人"
        columnName="jsr"
        // initialValue={ viewDyzlDetailData?.data?.jsr ?? ''}
        rules={[{ required: true, message: '请输入接收人' }]}
        placeholder="请输入接收人"
        autoHeight
        disabled={basicIsCanEdit}
        form={form}
      />
      <FormItems
        title="接收人电话"
        columnName="jsr_lxdh"
        // initialValue={ viewDyzlDetailData?.data?.jsr_lxdh ?? ''}
        rules={[
          { required: true, message: '请输入接收人电话' },
          { pattern: /^1[3|4|5|7|8][0-9]{9}$/, message: '请输入正确的手机号' }
        ]}
        placeholder="接收人电话"
        autoHeight
        disabled={basicIsCanEdit}
        form={form}
      />
      <FormItems
        columnName="ycy"
        title="押车员"
        // initialValue={userMsg?.userName ?? ''}
        autoHeight
        disabled={basicIsCanEdit}
        form={form}
      />
      <FormItems
        columnName="ycy_lxdh"
        title="押车员电话"
        // initialValue={userMsg?.phoneNumber ?? ''}
        autoHeight
        disabled={basicIsCanEdit}
        form={form}
      />
      <FormItems
        columnName={`wzqd`}
        // initialValue={item.wzqd ?? ''}
        title="清单"
        rules={[
          { required: true, message: '请输入清单' }
        ]}
        prefixListCls="newLineInput"
        placeholder="请输入清单"
        autoHeight
        rows="2"
        form={form}
        eventFunc={{
          // onChange: this.handleInputCarInfo.bind(this, index, 'wzqd')
        }}
      />
    </div>
  )
}

const NewApp = createForm()(App);

//要实现局部热更新，必须要添加此句
if (module.hot) {module.hot.accept()}

ReactDOM.render(<NewApp />, document.getElementById('root'));
