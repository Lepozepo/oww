Meteor.startup(function () {    
  environment = process.env.NODE_ENV;

  try {
    if (environment == 'production') {
      ServiceConfiguration.configurations.remove({
        service: "facebook"
      });
      ServiceConfiguration.configurations.insert({
        "service" : "facebook",
        "appId" : "594623523973899",
        "secret" : "9d60d2518a5b1732963ecfe15375e586"
      });
    }
  } catch(error) {
    console.log(error.message);
  }
});