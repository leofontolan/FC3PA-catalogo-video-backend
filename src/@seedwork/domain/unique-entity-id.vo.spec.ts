import InvalidUUIDError from '../errors/invalid-uuid.error';
import UniqueEntityId from './unique-entity-id.vo';
import { validate as uuidValidade} from 'uuid'

describe('UniqueEntityId Unit Tests', () => {

    it('should throw error when UUID is invalid', () => {
        const validadeSpy =  jest.spyOn(UniqueEntityId.prototype as any, 'validade');
        expect(() => new UniqueEntityId("fake id")).toThrow(new InvalidUUIDError());
        expect(validadeSpy).toHaveBeenCalled();
    });

    it('should accept a uuid passed in constructor', () => {
        const validadeSpy =  jest.spyOn(UniqueEntityId.prototype as any, 'validade');
        const uuid = 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11';
        const vo = new UniqueEntityId(uuid);
        expect(vo.id).toBe(uuid);
        expect(validadeSpy).toHaveBeenCalled();
    
    });

    it('should accept a uuid passed in constructor', () => {
        const validadeSpy =  jest.spyOn(UniqueEntityId.prototype as any, 'validade');
        const vo = new UniqueEntityId();
        expect(uuidValidade(vo.id)).toBeTruthy();
        expect(validadeSpy).toHaveBeenCalled();
    
    });
});