// app.ts
 
import {hello, Test} from '../ex/hello';

import { Animal, Lion, Sex} from './animal';
import * as aliasAnimal from './animal';


const h = require('../ex/hello');

const moment = require('moment');

export function start() {

    const t = new Test();

    const lion = new Lion('Another Lkon', Sex.FEMALE);

    console.log('start Main');
    aliasAnimal.start();

    console.log('moment use', moment().format('LLLL'));
    hello();
    h.hello('titi');
    // const lion = new Animal.Lion('RedLion', Animal.Sex.MALE);
    // console.log('shout Lion',lion.shout());
}


start();