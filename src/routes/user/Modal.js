import React from 'react'
import PropTypes from 'prop-types'
import {Form, Input, InputNumber, Radio, Modal, Cascader} from 'antd'

import groups from '../../utils/groups'

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
				<FormItem label="LastName" hasFeedback {...formItemLayout}>
					{getFieldDecorator('lastName', {
						initialValue: item.organization,
						rules: [
							{
								required: true,
							},
						],
					})(<Input />)}
				</FormItem>

				<FormItem label="Group" hasFeedback {...formItemLayout}>
					{getFieldDecorator('group', {
						initialValue: item.address && item.address.split(' '),
						rules: [
							{
								required: false,
							},
						],
					})(<Cascader
						size="large"
						style={{width: '100%'}}
						options={groups}
						placeholder="Select a group"
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
