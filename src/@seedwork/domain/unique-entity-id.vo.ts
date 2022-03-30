import {v4 as uuidv4, validate as uuiValidade} from 'uuid'

export default class UniqueEntityId {


    constructor(public readonly id?: string) {
       this.id = id || uuidv4();
    }

    private validade(){
        const isValid = uuiValidade(this.id);
    }
    
}

