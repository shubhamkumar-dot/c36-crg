class Form {
  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');

    this.greeting = createElement('h3');
  }

  hide(){

    this.input.hide();
    this.button.hide();
    this.greeting.hide();
    
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);
    
    // 'this' -  refers to the object which is calling the function

    
    this.input.position(130, 160);
    this.button.position(250, 200);

    // arrow function basically ensures that "this" remains bound to the particular object
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);

      this.greeting.html("Hello " + player.name );
      this.greeting.position(130, 160);
    });

  }
}
