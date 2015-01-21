var Todo = function( params ){
  this.description = params.description || "";
  Todo.all.push( this );
}

Todo.all = [];

for( var i = 1; i < 10; i++){
  new Todo({
    description: i 
  });
}
