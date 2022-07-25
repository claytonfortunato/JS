(function() {
    'use strict';

    function MyFunction( name, lastName ) {
        this.name = name;
        this.lastName = lastName;
        this.age = 20;
    }

    MyFunction.prototype.fullName = function() {
        return this.name + ' ' + this.lastName;
    }

    var fernando = new MyFunction('Fernando', 'Daciuk');

    MyFunction.prototype.age = 30;

    console.log( fernando.age );
})();