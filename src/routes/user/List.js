import React from 'react'
import PropTypes from 'prop-types'
import {Table, Modal} from 'antd'
import styles from './List.less'
import classnames from 'classnames'
import AnimTableBody from '../../components/DataTable/AnimTableBody'
import {DropOption} from '../../components'
import {Link} from 'dva/router'

const confirm = Modal.confirm

let new_arr = [];

const List = ({onDeleteItem, onEditItem, isMotion, location, ...tableProps}) => {

	const handleMenuClick = (record, e) => {
		if (e.key === '1') {
			onEditItem(record)
		} else if (e.key === '2') {
			confirm({
				title: 'Are you sure delete this record?',
				onOk () {
					onDeleteItem(record.id)
				},
			})
		}
	};

	function compareByAlph (a, b) {
		if (a > b) {
			return -1;
		}
		if (a < b) {
			return 1;
		}
		// a must be equal to b
		return 0;
	}



	const columns = [
		// {
		//   title: 'Avatar',
		//   dataIndex: 'avatar',
		//   key: 'avatar',
		//   width: 64,
		//   className: styles.avatar,
		//   render: (text) => <img alt={'avatar'} width={24} src={text} />,
		// },
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
			render: (text, record) => <Link to={`user/${record.id}`}>{text}</Link>,
			sorter: (a, b) => compareByAlph(a.name, b.name),
		},
		{
			title: 'LastName',
			dataIndex: 'lastName',
			key: 'lastName',
			sorter: (a, b) => compareByAlph(a.lastName, b.lastName),
		},
		{
			title: 'Group',
			dataIndex: 'group',
			key: 'group',
			sorter: (a, b) => compareByAlph(a.group, b.group),
		},
		// {
		//     title: 'Description',
		//     dataIndex: 'description',
		//     key: 'description',
		//    width: 400,
		//     render: (text, record) => {
		//         return <div style={{
		//            // maxHeight: 100,
		//            // overflow: 'hidden',
		//            // textOverflow: 'ellipsis',
		//         }} className="td-description">{text}</div>
		//     },
		// },
		// {
		//   title: 'Operation',
		//   key: 'operation',
		//   width: 100,
		//   render: (text, record) => {
		//     return <DropOption onMenuClick={e => handleMenuClick(record, e)} menuOptions={[{ key: '1', name: 'Update' }, { key: '2', name: 'Delete' }]} />
		//   },
		// },
	]

	const getBodyWrapperProps = {
		page: location.query.page,
		current: tableProps.pagination.current,
	}

	const getBodyWrapper = body => {
		return isMotion ? <AnimTableBody {...getBodyWrapperProps} body={body}/> : body
	}

	return (
		<div>
			<Table
				{...tableProps}
				className={classnames({[styles.table]: true, [styles.motion]: isMotion})}
				bordered
				scroll={{x: 1250}}
				columns={columns}
				simple
				rowKey={record => record.id}
				getBodyWrapper={getBodyWrapper}
			/>
		</div>
	)
}

List.propTypes = {
	onDeleteItem: PropTypes.func,
	onEditItem: PropTypes.func,
	isMotion: PropTypes.bool,
	location: PropTypes.object,
}

export default List
