import devConfig from "./config.dev";
import prodConfig from "./config.prod";
import { Config } from "./configType";

let config: Config;



function getBaseConfig(){
    let environment = process.env.NODE_ENV;
    switch (environment) {
        case 'development':
            return devConfig;
        default:
            return prodConfig;
    }
}

const port = process.env.PORT;
config = getBaseConfig().merge({
    port:  port ? new Number(process.env.PORT): undefined
});


export default config;


