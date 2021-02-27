function add(a: number, b: number): number {
    return a + b
}
test('hello', () => {
    expect(1).toEqual(1)
})
describe('hello test function', () => {
    it('add function', () => {
        expect(add(1, 3)).toEqual(4)
    })
})