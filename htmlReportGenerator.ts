import reporter, {Options}from 'cucumber-html-reporter';
var date =new Date();

var currentDate=date.getDate()+ '_' + (date.getMonth()+1)+ '_' + date.getFullYear()+ '_'
+ date.getHours()+'_'+date.getMinutes()+'_'+date.getSeconds()+'_'+date.getMilliseconds();

 const options: Options= {
    
    
    brandTitle:"Client App Test Scenarious",
    theme: "bootstrap",
    jsonFile: 'test-results/cucumber_report.json',
    output: 'test-results/cucumber_report_'+currentDate+'.html',
    screenshotsDirectory:'./Screenshots/',
    storeScreenshots: true,
    launchReport:true,
    reportSuiteAsScenarios: true,
   


};

reporter.generate(options);