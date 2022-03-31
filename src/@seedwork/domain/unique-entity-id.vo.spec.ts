import InvalidUUIDError from '../errors/invalid-uuid.error';
import UniqueEntityId from './unique-entity-id.vo';

describe('UniqueEntityId Unit Tests', () => {

    it('should throw error when UUID is invalid', () => {
        expect(() => new UniqueEntityId("fake id")).toThrow(new InvalidUUIDError());
    });
});