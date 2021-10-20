import { sampleFunction } from '../src'

describe("Concat the same string twice", () => {
	test("Check the sampleFunction function", () => {
		expect(sampleFunction("hello")).toEqual("hellohello")
	})
})

