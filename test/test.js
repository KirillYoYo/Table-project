import React from 'react'
var assert = require('assert');
//var ForMochaTests = require('../src/forMochaTests/forTest');

import PropTypes from 'prop-types'
import { connect } from 'dva'

const ForMochaTests = ({user , loading, location}) => {
	console.log('TEST')
	return 'NONE'
}


ForMochaTests.propTypes = {
	user: PropTypes.object,
	location: PropTypes.object,
	dispatch: PropTypes.func,
	loading: PropTypes.object,
};

export default connect(({ user, loading }) => ({ user, loading }))(ForMochaTests)


console.log('ForMochaTests');
console.log('++++');
//console.log(ForMochaTests({user, loading}));


describe('Array', function() {
	describe('#indexOf()', function() {
		it('should return -1 when the value is not present !!!!!!!', function() {
			assert.equal(-1, [1,2,3].indexOf(4));
		});
	});
});
