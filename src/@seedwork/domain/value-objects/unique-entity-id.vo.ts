import {v4 as uuidv4, validate as uuidValidade} from 'uuid';
import InvalidUUIDError from '../../errors/invalid-uuid.error';
import ValueObject from './value-object';


export default class UniqueEntityId extends ValueObject<string>{

    constructor(readonly id?: string) {
       super(id || uuidv4());
       this.validade();
    }

    private validade(){
        const isValid = uuidValidade(this._value);

        if(!isValid){
            throw new InvalidUUIDError();
        }
    }
}