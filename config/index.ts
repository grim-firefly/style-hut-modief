import { devConfig } from './devConfig';
import { prodConfig } from './prod';
import _ from 'lodash';

const defaultConfig = {
    db: '',
    baseURL: '',
};

let config = {};

let env = process.env.NODE_ENV || 'development';

if (env === 'development') {
    config = devConfig;
} else if (env === 'production') {
    config = prodConfig;
}

export default _.merge(defaultConfig, config);
