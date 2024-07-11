//$.trim() :- $.trim() is used to Removes leading and trailing whitespace
$.trim( "    lots of extra whitespace    " );

//$.each() :- $.each() is used to Iterates over arrays and objects
$.each([ "foo", "bar", "baz" ], function( idx, val ) {
    console.log( "element " + idx + " is " + val );
 });
  
 $.each({ foo: "bar", baz: "bim" }, function( k, v ) {
    console.log( k + " : " + v );
 });

 //$.inArray() :- $.inArray() is used to Returns a value's index in an array, or -1 if the value is not in the array.
var myArray = [ 1, 2, 3, 5 ];
 
if ( $.inArray( 4, myArray ) !== -1 ) {
   console.log( "found it!" );
}

//$.extend() :- $.extend() is used to Changes the properties of the first object using the properties of subsequent objects.
var firstObject = { foo: "bar", a: "b" };
var secondObject = { foo: "baz" };
 
var newObject = $.extend( firstObject, secondObject );
 
console.log( firstObject.foo ); 
console.log( newObject.foo );

//$.grep() :- This grep() method in jQuery is used to finds the elements of an array that satisfies a filter function.
