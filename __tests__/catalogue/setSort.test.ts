import Catalogue from '../../src/entities/Catalogue';

const itemSorted = [
	{
		"title": "a",
		"author": "char",
		"price": 1,
	},
  {
		"title": "a",
		"author": "char",
		"price": 2,
	},
  {
		"title": "a",
		"author": "foo",
		"price": 1,
	},
  {
		"title": "b",
		"author": "char",
		"price": 1,
	},
  {
		"title": "b",
		"author": "char",
		"price": 3,
	},
  {
		"title": "b",
		"author": "foo",
		"price": 0,
	},
  {
		"title": "c",
		"author": "char",
		"price": 0,
	},
  {
		"title": "c",
		"author": "foo",
		"price": 9,
	},
]

const itemUnsorted = [
  {
    "title": "b",
    "author": "char",
    "price": 1,
  },
  {
    "title": "a",
		"author": "char",
		"price": 2,
	},
  {
    "title": "c",
    "author": "foo",
    "price": 9,
  },
  {
    "title": "a",
		"author": "foo",
		"price": 1,
	},
  {
    "title": "b",
		"author": "foo",
		"price": 0,
	},
  {
    "title": "a",
    "author": "char",
    "price": 1,
  },
  {
    "title": "c",
		"author": "char",
		"price": 0,
	},
  {
    "title": "b",
    "author": "char",
    "price": 3,
  },
]

const key = {
	'title': 1,
	'author': 1,
	'price': 1
}

describe('Test method setSort from Catalogue', () => {
	test('return sorted items', () => {
		const catalogue = new Catalogue()

		/**
		 * Insertamos los items desordenados
		 */
		 catalogue.items = itemUnsorted

		/**
		 * Ordenamos segun los criterios dentro de key
		 */
		 catalogue.setSort(key)
		expect(JSON.stringify(catalogue.getSort(key))).toBe(JSON.stringify(itemSorted))
	})
})
