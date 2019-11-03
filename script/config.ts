// config.ts
 
require(
    ['app', 'moment'],
 
    function (app: any) {
        app.start();
    },
 
    function (err: any) {
        console.error('ERROR: ', err.requireType);
        console.error('MODULES: ', err.requireModules);
    }
);