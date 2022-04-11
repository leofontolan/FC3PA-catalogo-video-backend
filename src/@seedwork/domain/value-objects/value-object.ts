export default abstract class ValueObject <Value = any> {
    protected _value: Value;

    constructor(value: Value) {
        this._value = value;
    }

    get value(): Value {
        return this._value;
    }

    // Ira sobrescrever o toString() do Objeto que será criado.
    toString = () => {
        if (typeof this.value !== "object") {
            try{
                return this.value.toString();
            }catch(e){
                return this.value+"";
            }
        }

        return this.value.toString();
    };
}