ServiceConfiguration.configurations.upsert(
  { service: "facebook" },
  {
    $set: {
      loginStyle: "popup",
    clientId: '594623523973899',
    secret: '9d60d2518a5b1732963ecfe15375e586'
    }
  }
);