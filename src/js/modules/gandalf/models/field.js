
angular.module('ng-gandalf').factory('DecisionField', function () {

  function DecisionField (obj) {
    var options = obj ? angular.copy(obj) : {};

    this.alias = options.key;
    this.type = options.type;
    this.title = options.title;

    this.source = options.source;

    this.defaultValue = options.defaultValue;
  }

  DecisionField.prototype.toJSON = function () {
    return {
      key: this.alias,
      type: this.type,
      title: this.title,
      source: this.source
    };
  };

  return DecisionField;
});
