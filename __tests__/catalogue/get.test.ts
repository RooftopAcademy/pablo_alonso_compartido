import Catalogue from '../../src/entities/Catalogue';
import { ProductInterface } from '../../src/interfaces/types'

const productExample: ProductInterface[] = [
	{
		"id": "STRING",
		"picture": "path/image.png",
		"title": "TITLE",
		"author": "AUTHOR",
		"description": "DESCRIPTION",
		"price": 999,
		"comments": [
		{
			"date": "2020-01-01T01:03:25.010Z",
			"username": "USERNAME",
			"message": "MESSAGE"
		},
		{
			"date": "2021-07-21T01:01:45.010Z",
			"username": "USERNAME2",
			"message": "MESSAGE2"
		}
		],
		"category": [
			"CATEGORY_A",
			"CATEGORY_B"
		],
		"isAvaliable": true,
		notAvaliable: function() { this.isAvaliable=false },
	},
]

describe('Test method get from Catalogue', () => {
	test('return same items', () => {
		const catalogue = new Catalogue()

		/**
		 * Agregamos los productos de ejemplo
		 */
		catalogue.add(productExample)
		expect(JSON.stringify(catalogue.get())).toBe(JSON.stringify(productExample))
	})
})