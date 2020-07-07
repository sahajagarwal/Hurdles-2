class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    player1 = createSprite(100,200);
    player2 = createSprite(300,200);
    player3 = createSprite(500,200);
    player4 = createSprite(700,200);
    players = [player1, player2, player3, player4];

    // player1.addImage("player1", player1_img);
    // player2.addImage("player2", player2_img);
    // player3.addImage("player3", player3_img);
    // player4.addImage("player4", player4_img);

  }

  play(){
    form.hide();

    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      background("brown");
      //var display_position = 100;

      //index of the array
      var index = 0;

      //x and y position of the players
      var x = 80;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the players a little away from each other in x direction
        x = x + 300;
        //use data from the database to display the players in y direction
        y = displayHeight - allPlayers[plr].distance;
        players[index-1].x = x;
        players[index-1].y = y;

        if (index === player.index){
          players[index - 1];
          camera.position.x = displayWidth/2;
          camera.position.y = players[index-1].y
        }
        if(frameCount%80===0){
         hurdles = createSprite(x,y-400,10,10);
         hurdles.shapeColor = "red";
        //  hurdles.addImage("hurdles", hurdles_img);
         player.update();
        } 
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    if(keyCode===32 && player.index!==null){
      player[index-1].position.x = x+10;
      console.log("neev");
    }

    if(player.distance>3800 ){
      gameState = 2;
    }

    drawSprites();
  }
 
}