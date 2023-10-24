function toggleMode(){
    const html = document.documentElement;
 
    html.classList.toggle('light');

    //   pegar a tag img 
    const image = document.querySelector("#profile img");


    if(html.classList.contains("light")){
            image.setAttribute("src", "assets/assets/avatar-light.png");
            image.setAttribute("alt","Foto doe Mayk Brito usando óculos escuros e jaqueta preta sem barba com um fundo roxo e azul");
    } else{
            image.setAttribute("src", "assets/assets/avatar.png")
            image.setAttribute("alt","Foto doe Mayk Brito usando óculos  e camisa preta e barba com um fundo amarelo");
    }

  

    }
    

