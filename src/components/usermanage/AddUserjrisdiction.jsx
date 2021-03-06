import React from 'react';
import {Form,Input,Button,Select,Modal} from 'antd'
const FormItem = Form.Item;
const Option = Select.Option;

class  AddUserjrisdiction extends React.Component{//在es6中定义一个AddUser类
     constructor(props){//构造函数
         super(props);
         this.state = {
             visible:false
         };
         this.handleAdd = this.handleAdd.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
         this.handleOk = this.handleOk.bind(this)
         this.handleClear = this.handleClear.bind(this)
     }
    handleAdd() {
        this.setState({
            visible: true
        });
    }
    handleSubmit(e){//提交表单
        e.preventDefault();
         this.props.form.validateFieldsAndScroll((err,values)=>{
             if(!err){
                 //console.log('接收的值：',values);
                 this.setState({
                     visible:false
                 })
                 this.props.form.resetFields();//清空提交的表单
                 //当值传递到父元素后，通过回调函数触发appendPerson方法将参数values带到父元素
                 this.props.callback(values);
             }
         })
    }

    handleClear(){
        this.props.form.resetFields();
    }

    handleOk() {
        this.setState({
            visible: false
            });
    }
    render(){

     const {getFieldDecorator} = this.props.form;
     const formItemLayout = {
         labelCol:{span : 6},
         wrapperCol:{span: 14}
     };
     const tailFormItemLayout = {
         wrapperCol: {
             span: 14,
             offset: 8
         }
     };
        return(
            <div>
                <Button type="primary" onClick={this.handleAdd}>添加用户</Button>
            <Modal title="新建用户" visible={this.state.visible} onCancel={this.handleOk} onOk={this.handleOk}>
                <Form onSubmit={this.handleSubmit}>
                    <FormItem {...formItemLayout} label = "序号"  hasFeedback>
                        {getFieldDecorator('unid', {
                            rules:[{
                                required:true,message:'请输入您的序号！'
                            }]
                        })(
                            <Input placeholder="请输入您的序号！"/>
                        )}
                        </FormItem>
                        <FormItem {...formItemLayout} label = "ID"  hasFeedback>
                            {getFieldDecorator('userid', {
                                rules:[{
                                    required:true,message:'请输入您的ID！'
                                }]
                            })(
                                <Input placeholder="请输入您的ID！"/>
                            )}
                            </FormItem>
                            <FormItem {...formItemLayout} label = "分类"  hasFeedback>
                                {getFieldDecorator('degree', {
                                    rules:[{
                                        required:true,message:'请输入您的分类！'
                                    }]
                                })(
                                    <Input placeholder="请输入您的分类！"/>
                                )}
                                </FormItem>
                        <FormItem {...formItemLayout} label = "姓名"  hasFeedback>
                            {getFieldDecorator('name', {
                                rules:[{
                                    required:true,message:'请输入您的姓名！'
                                }]
                            })(
                                <Input placeholder="请输入您的姓名！"/>
                            )}
                            </FormItem>

                    <FormItem {...formItemLayout} label="学院" hasFeedback>
                        {getFieldDecorator('schoolname',{
                            rules:[{required:true,message:'请输入您的就读学院'}]
                        })(
                            <Input placeholder="请输入您的就读学院！"/>
                        )}
                    </FormItem>


                    <FormItem {...formItemLayout} label="专业" hasFeedback>
                        {getFieldDecorator('major',{
                            rules:[{required:true,message:'请输入您专业'}]
                        })(
                            <Input type="textarea" rows={3} placeholder="请输入您专业!"/>
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="学号" hasFeedback>
                        {getFieldDecorator('schoolnumber',{
                            rules:[{required:true,message:'请输入您学号'}]
                        })(
                            <Input type="textarea" rows={3} placeholder="请输入您学号!"/>
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="座位预约" hasFeedback>
                        {getFieldDecorator('Seatreservation',{
                            rules:[{required:true,message:'请输入座位预约'}]
                        })(
                            <Input type="textarea" rows={3} placeholder="请输入座位预约!"/>
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="激活座位" hasFeedback>
                        {getFieldDecorator('Activateseat',{
                            rules:[{required:true,message:'请输入激活'}]
                        })(
                            <Input type="textarea" rows={3} placeholder="请输入激活!"/>
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="空间预约" hasFeedback>
                        {getFieldDecorator('Speaceservation',{
                            rules:[{required:true,message:'请输入空间预约'}]
                        })(
                            <Input type="textarea" rows={3} placeholder="请输入空间预约!"/>
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="激活空间" hasFeedback>
                        {getFieldDecorator('ActivatSpeace',{
                            rules:[{required:true,message:'请输入激活'}]
                        })(
                            <Input type="textarea" rows={3} placeholder="请输入激活!"/>
                        )}
                    </FormItem>

                    <FormItem {...tailFormItemLayout} style={{padding:10}}>
                        <Button type="primary" htmlType="submit" size="large">提交</Button>
                        <Button type="primary" size="large" onClick={this.handleClear}>重置</Button>
                    </FormItem>
                </Form>
            </Modal>
            </div>
        )
    }
}
AddUserjrisdiction = Form.create()(AddUserjrisdiction); //解决了getFieldDecorator无法定义;

export default AddUserjrisdiction;
