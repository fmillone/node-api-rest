interface RawConfig {
    port: Number
}

export class Config implements RawConfig {
    readonly port: Number

    constructor(params: RawConfig) {
        if (params) {
            this.port = params.port;
        }

    }

    merge(params: RawConfig): Config {
        return new Config(this.mergeParams(params));
    }

    private mergeParams(params: RawConfig): RawConfig {
        return {
            port: params.port || this.port
        };
    }

}