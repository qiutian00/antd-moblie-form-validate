import React, { Component } from 'react';
import { TextareaItem, Toast } from 'antd-mobile';

import './FormItems.css';

class Index extends Component {

  renderFormItem = () => {
    const {
      form = {},
      columnName = 'notFound',
      rules = [],
      WrapperItem = TextareaItem,
      error,
      onErrorClick,
      eventFunc,
      initialValue = ''
    } = this.props;
    const { getFieldProps, getFieldError } = form;
    const isRequired = !!rules.find((item) => {
      return item.required === true;
    });
    // console.log("渲染：", this.props.title, this.props.WrapperItem);
    const componentProps = {
      ...this.props
    }
    delete componentProps.WrapperItem;
    delete componentProps.columnName;
    return (
      <div className="container">
        { isRequired ? <span className="requireText">*</span> : ''}
        <WrapperItem
          {...getFieldProps(columnName, {
            ...eventFunc,
            initialValue,
            rules,
          })}
          error={error || !!getFieldError(columnName)}
          onErrorClick={() => {
            if (onErrorClick) {
              onErrorClick();
            }
            if (getFieldError(columnName)) {
              Toast.fail(getFieldError(columnName).join('、'), 2);
            }
          }}
          {...componentProps}
        />
        {error || getFieldError(columnName) ? <span className="errorText">{error || getFieldError(columnName).join(',')}</span> : null}
      </div>
    )
  }

  render() {
    return this.renderFormItem();
  }
}

export default Index;
