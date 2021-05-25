import React, { Component } from 'react';
import { TextareaItem, Toast } from 'antd-mobile';

import styles from './FormItems.less';

class Index extends Component {

  renderFormItem = () => {
    const { form = {}, columnName = 'notFound', rules = [], WrapperItem = TextareaItem } = this.props;
    const { getFieldProps, getFieldError } = form;
    const isRequired = !!rules.find((item) => {
      return item.required === true;
    });
    return (
      <div className={styles.container}>
        { isRequired ? <span className={styles.requireText}>*</span> : ''}
        <WrapperItem
          {...getFieldProps(columnName, {
            rules,
          })}
          error={!!getFieldError(columnName)}
          onErrorClick={() => {
            Toast.fail(getFieldError(columnName).join('、'), 2);
          }}
          {...this.props}
        />
        {getFieldError(columnName) ? <span className={styles.errorText}>{getFieldError(columnName).join(',')}</span> : null}
      </div>
    )
  }

  render() {
    return this.renderFormItem();
  }

  // only for test
  // constructor(props){
  //   super(props);
  //   this.state={
  //     btnTxt:'Login'
  //   }
  // }

  // renderFunc = () => {
  //   const { btnTxt = '测试' }=this.state;
  //   return(
  //     <div className='button-container' onClick={()=>{ this.setState({btnTxt:btnTxt==='Login'?'Logout':'Login'})}}>
  //       <span>{btnTxt}</span>
  //     </div>
  //   );
  // }

  // render() {
  //   return this.renderFunc();
  // }
}

export default Index;
