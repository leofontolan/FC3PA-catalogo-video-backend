import {v4 as uuidv4, validate as uuiValidade} from 'uuid'
import InvalidUUIDError from '../errors/invalid-uuid.error';


export default class UniqueEntityId {

    constructor(public readonly id?: string) {
       this.id = id || uuidv4();
    }

    private validade(){
        const isValid = uuiValidade(this.id);

        if(!isValid){
            throw new InvalidUUIDError(this.id);
        }
    }
}