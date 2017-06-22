import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'dva'


const Index = ({post, dispatch, loading, location}) => {

	return (<div className="content-inner">
		<h1>Hello!</h1>
	</div>)
}

Index.propTypes = {
	post: PropTypes.object,
	loading: PropTypes.object,
	location: PropTypes.object,
	dispatch: PropTypes.func,
}

export default connect(({post, loading}) => ({post, loading}))(Index)
