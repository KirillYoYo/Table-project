import React from 'react'
import PropTypes from 'prop-types'
import {Form, Input, InputNumber, Radio, Modal, Cascader} from 'antd'
import city from '../../utils/city'
import counties from '../../utils/countries'

const FormItem = Form.Item

const formItemLayout = {
	labelCol: {
		span: 6,
	},
	wrapperCol: {
		span: 14,
	},
}

const modal = ({
	               item = {},
	               onOk,
	               form: {
		               getFieldDecorator,
		               validateFields,
		               getFieldsValue,
	               },
	               ...modalProps
               }) => {
	const handleOk = () => {
		validateFields((errors) => {
			if (errors) {
				return
			}
			const data = {
				...getFieldsValue(),
				key: item.key,
			}
			data.address = data.address.join(' ')
			onOk(data)
		})
	}

	const modalOpts = {
		...modalProps,
		onOk: handleOk,
	}

	return (
		<Modal {...modalOpts}>
			<Form layout="horizontal">
				<FormItem label="Name" hasFeedback {...formItemLayout}>
					{getFieldDecorator('name', {
						initialValue: item.name,
						rules: [
							{
								required: true,
							},
						],
					})(<Input />)}
				</FormItem>
				<FormItem label="Organization" hasFeedback {...formItemLayout}>
					{getFieldDecorator('organization', {
						initialValue: item.organization,
						rules: [
							{
								required: true,
							},
						],
					})(<Input />)}
				</FormItem>
				{/*<FormItem label="Address" hasFeedback {...formItemLayout}>*/}
					{/*{getFieldDecorator('address', {*/}
						{/*initialValue: item.organization,*/}
						{/*rules: [*/}
							{/*{*/}
								{/*required: false,*/}
							{/*},*/}
						{/*],*/}
					{/*})(<Input />)}*/}
				{/*</FormItem>*/}
				<FormItem label="Description" hasFeedback {...formItemLayout}>
					{getFieldDecorator('description', {
						initialValue: item.organization,
						rules: [
							{
								required: false,
							},
						],
					})(<Input />)}
				</FormItem>

				<FormItem label="Address" hasFeedback {...formItemLayout}>
					{getFieldDecorator('address', {
						initialValue: item.address && item.address.split(' '),
						rules: [
							{
								required: false,
							},
						],
					})(<Cascader
						size="large"
						style={{width: '100%'}}
						options={counties}
						placeholder="Pick an address"
					/>)}
				</FormItem>
			</Form>
		</Modal>
	)
}

modal.propTypes = {
	form: PropTypes.object.isRequired,
	type: PropTypes.string,
	item: PropTypes.object,
	onOk: PropTypes.func,
}

export default Form.create()(modal)
