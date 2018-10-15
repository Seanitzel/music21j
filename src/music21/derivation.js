export class Derivation {
    constructor(client) {
        this.client = client;
        this.method = undefined;
        this.origin = undefined;
    }

    clone() {
        const newThing = new Derivation();
        newThing.client = this.client;
        newThing.origin = this.origin;
    }

    * chain() {
        let origin = this.origin;
        while (origin !== undefined) {
            yield origin;
            origin = origin.derivation.origin;
        }
    }

    rootDerivation() {
        const derivationChain = Array.from(this.chain());
        if (derivationChain.length) {
            return derivationChain[derivationChain.length - 1];
        } else {
            return undefined;
        }
    }
}

export default Derivation;
