const reporter=require('cucumber-html-reporter');
var date =new Date();

var currentDate=date.getDate()+ '_' + (date.getMonth()+1)+ '_' + date.getFullYear()+ '_'
+ date.getHours()+'_'+date.getMinutes()+'_'+date.getSeconds()+'_'+date.getMilliseconds();

var options= {
    
    brandTitle:"Client App Test Scenarious",
    theme: "bootstrap",
    jsonFile: 'test-results/cucumber_report.json',
    output: 'test-results/cucumber_report_'+currentDate+'.html',
    screenshotDirectory:'./Screenshots/',
    storeScreenshots: true,
    launchReport:true,
   


};

reporter.generate(options);