const dataForTest = require('../utils/data-for-test');
//import dataForTest from '../utils/data-for-test'

// const countrys_arr_1 = [
// 	{
// 		label: 'Russia',
// 		name: 'Russia',
// 		value: 'Russia',
// 		cities: ['Челябинск', 'Волгоград', 'Краснодар', 'Питер', 'Москва', 'новгород', 'Уфа', 'Киров', 'Тюмень', 'павлодар']
// 	},
// 	{
// 		name: 'USA',
// 		label: 'USA',
// 		value: 'USA',
// 		cities: ['Texas', 'California', 'WC', 'NY', 'Michigan', 'LA', 'Yota', 'Sprigfield', 'Nano', 'Dollar']
// 	},
// ];

let countrys_arr_1 = [];

dataForTest.map( (obj, i) => {
	if (countrys_arr_1.indexOf(obj.country) === -1) {
		if (obj.country !== '') {
			countrys_arr_1.push(obj.country);
		} else {
			countrys_arr_1.push('нет данных');
		}
	}
});

countrys_arr_1.map( (country, i) => {
	let name = country;
	countrys_arr_1[i] = {
		name: name,
		label: name,
		value: name,
		children: []
	}
	country = {
		name: name,
 		label: name,
 		value: name,
		children: []
	}
});

dataForTest.map( (obj, i) => {
	countrys_arr_1.map( (country, i) => {
		if (obj.country === country.name) {
			obj.city !== '' ?
			country.children.push(obj.city)
			:	country.children.push('нет данных')
		}
	});
});


let setIds = (function () {
	let cnt = 0;
	countrys_arr_1.map( (country, i) => {
		cnt++;
		country.id = cnt;
		country.pid = undefined;
		country.children.map( (city, c_i) => {
			cnt++;
			country.children[c_i] = {
				id : cnt,
				name: city,
				value : city,
				label : city,
			}
			// city.id = cnt;
			// city.name = city;
			// city.value = city;
			// city.label = city;
		});
	});
	return countrys_arr_1;
}());

module.exports = setIds;