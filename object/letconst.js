const family = {
          d1text : "RealativeSite",
          faimilysite : [
            {
                  atext : "GIT",
                  href : "http://www.github.com/4thdraw" 
            },
            {
                  atext : "Notion",
                  href : "http://www.notion.io/4thdraw" 
            },
            {
                  atext : "Figma",
                  href : "http://www.figma.com/4thdraw" 
            }
            ,
            {
                  atext : "Figma",
                  href : "http://www.figma.com/4thdraw" 
            }
           
          ]
}

let  familytag = '';
familytag +=`<h2>${family.d1text}</h2><ul>`;

for( x  of  family.faimilysite ){
      familytag += `<li>${x.atext}</li>`
}
familytag +='</ul>';

window.addEventListener('load', function(){
      this.document.querySelector("#family")
      .innerHTML =  familytag;
})


