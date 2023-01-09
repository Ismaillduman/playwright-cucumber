let options = [
  '--require-module ts-node/register',
  '--require ./steps/*.steps.ts',
  '--format progress-bar',
  '--publish-quiet',
  '--format json:./test-results/cucumber_report.json',
].join(' ');

let run_features = ['./features/', options].join(' ');

// eslint-disable-next-line no-undef
module.exports = {
  test_runner: run_features,
};
