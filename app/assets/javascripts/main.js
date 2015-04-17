require.config({
  paths: {
    braintree: "https://assets.braintreegateway.com/v2/braintree"
  }
});

require(["braintree"], function (braintree) {
  braintree.setup("CLIENT-TOKEN-FROM-SERVER", "<integration>", options);
});