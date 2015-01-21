var TodoView = function( model ){
  this.model = model;
  this.input = document.querySelector("input");
  this.output = document.querySelector("ul");
  this.form = document.querySelector("form"); 
  this.render();
  this.form.addEventListener("submit", this.create.bind(this) );
}

TodoView.prototype = {
  render: function(){
    var i = 0, len = this.model.length;
    this.output.innerHTML = '';
    this.input.value = '';
    for( ; i < len; i++ ){
      var li = document.createElement("li");
      li.innerHTML = this.model[i].description;
      this.output.appendChild( li );
    }
  },
  create: function( event ){
    event.preventDefault();
    var todo = new Todo( { description: this.input.value } );	  
    this.render();
  }
}
