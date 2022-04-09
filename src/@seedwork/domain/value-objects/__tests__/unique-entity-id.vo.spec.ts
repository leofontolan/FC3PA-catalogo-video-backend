import InvalidUUIDError from '../../../errors/invalid-uuid.error';
import UniqueEntityId from '../unique-entity-id.vo';
import { validate as uuidValidade} from 'uuid';


describe('UniqueEntityId Unit Tests', () => {

    const validadeSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validade');

    it('should throw error when UUID is invalid', () => {
        expect(() => new UniqueEntityId("fake id")).toThrow(new InvalidUUIDError());
        expect(validadeSpy).toHaveBeenCalled();
    });

    it('should accept a uuid passed in constructor', () => {
        const uuid = 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11';
        const vo = new UniqueEntityId(uuid);
        expect(vo.value).toBe(uuid);
        expect(validadeSpy).toHaveBeenCalled();
    
    });

    it('should accept a uuid passed in constructor', () => {
        const vo = new UniqueEntityId();
        expect(uuidValidade(vo.value)).toBeTruthy();
        expect(validadeSpy).toHaveBeenCalled();
    
    });
});