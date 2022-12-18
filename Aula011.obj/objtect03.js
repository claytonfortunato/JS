if( '' ) { teste = true; } else { teste = false; }
// false
teste
//false
if( '0' ) { teste = true; } else { teste = false; }
//false
if( underfined ) { teste = true; } else { teste = false; }
//false
if( null ) { teste = true; } else { teste = false; }
//false
if( {} ) { teste = true; } else { teste = false; }
//true
if( [] ) { teste = true; } else { teste = false; }
//true
if( NaN ) { teste = true; } else { teste = false; }
//false
if( -0 ) { teste = true; } else { teste = false; }
//false
if( 2 ) { teste = true; } else { teste = false; }
//true