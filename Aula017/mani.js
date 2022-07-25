(function() {
    var myObject = {
        myProperty: 1,
        init: function init() {
            return this.myProperty;
        }
    };
    console.log( 'myObject', myObject.init(), myObject.init() === myObject );

    function MyConstructor() {
        this.prop1 = 'prop1';
        this.prop2 = 'prop2';
    }
    var constructor = new MyConstructor();
    console.log( 'MyConstructor', constructor.prop2 );
})();
