'use strict';

const fs = require('fs-extra');
const Jasmine = require('jasmine');
const JasmineConsoleReporter = require('jasmine-console-reporter');

const reporter = new JasmineConsoleReporter({
    colors: 0,           // (0|false)|(1|true)|2
    cleanStack: 1,       // (0|false)|(1|true)|2|3
    verbosity: 4,        // (0|false)|1|2|(3|true)|4
    listStyle: 'indent', // "flat"|"indent"
    activity: false
});

dataSourceNinjaIn();

const jasmine = new Jasmine();
jasmine.loadConfigFile('./specs/jasmine.json');
jasmine.addReporter(reporter);
jasmine.execute();
jasmine.onComplete(() => dataSourceNinjaOut());

function dataSourceNinjaIn() {
}

function dataSourceNinjaOut() {
}
