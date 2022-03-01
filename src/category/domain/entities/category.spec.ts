import { Category } from './category';


describe('Category Tests', () => {

    test('constructor of category', () => {
        const category: any = new Category('Movie');
        expect(category.name).toBe('Movie');
    })
});