// app.ts
 
import * as Animal from "animal"; // Module TS
import {hello} from '../ex/hello';

const h = require('../ex/hello');

const moment = require('moment');

export function start() {
    console.log('start Main');
    Animal.start();

    console.log('moment use', moment().format('LLLL'));
    hello();
    h.hello('titi');
    const lion = new Animal.Lion('RedLion', Animal.Sex.MALE);
    console.log('shout Lion',lion.shout());
}