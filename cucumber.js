let options=[

    '--require-module ts-node/register',
    '--require ./steps/*.steps.ts',
    '--format progress-bar',
    '--publish-quiet',
    '--format json:./Reports/cucumber_report.json',
].join(' ');

let run_features= [
    './features/',
    options,
].join(' ');

module.exports={
    test_runner:run_features
};