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
          ]
}

console.log(family.faimilysite[0].atext, family.faimilysite[0].href);

const mytag = `<a href="${family.faimilysite[0].href}">${family.faimilysite[0].atext}</a>`;

console.log(mytag);
