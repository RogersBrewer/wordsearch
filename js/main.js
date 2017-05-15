
	// loop for making the letters, putting into the p tag
 arrayLetter  = ['f','u','n','c','t','i','o','n','j','s','a','b', 
                 'd','e','b','u','g','g','i','n','g','t','c','b', 
                 'e','l','c','l','a','s','s','d','n','y','c','o',
                 'v','e','v','b','g','m','i','o','i','l','o','r', 
                 'e','m','c','o','d','i','f','y','g','e','m','d',
                 'l','e','s','d','x','t','k','m','r','o','m','e',
                 'o','n','s','y','e','p','c','h','a','e','e','r',
                 'p','t','x','r','d','i','o','t','m','h','n','g',
                 'e','n','l','i','n','e','l','m','g','a','t','q', 
                 'r','v','a','r','i','a','b','l','e','f','e','d']

      // adding the arrayletter to make a word
var  wordFunction = arrayLetter[0] + arrayLetter[1] + arrayLetter[2] + arrayLetter[3] + arrayLetter[4] + arrayLetter[5] + arrayLetter[6] + arrayLetter[7]
  console.log(wordFunction)
var wordBorder = arrayLetter[23] + arrayLetter[35] + arrayLetter[47] + arrayLetter[59] + arrayLetter[71] + arrayLetter[83]
// console.log(wordBorder)
 var wordClass = arrayLetter[26] + arrayLetter[27] + arrayLetter[28] + arrayLetter[29] + arrayLetter[30]
 // console.log(wordClass)
var  wordId = arrayLetter[18] + arrayLetter[31]
 // console.log(wordId)
var  wordMargin = arrayLetter[92] + arrayLetter[80] + arrayLetter[68] + arrayLetter[56] + arrayLetter[44] + arrayLetter[32]
 // console.log(wordMargin)
var  wordJs = arrayLetter[8] + arrayLetter[9]
 // console.log(wordJs)
var  wordDiv = arrayLetter[12] + arrayLetter[25] + arrayLetter[38]
 // console.log(wordDiv)
var  wordFont = arrayLetter[54] + arrayLetter[43] + arrayLetter[32] + arrayLetter[21]
 // console.log(wordFont)
var  wordStyle = arrayLetter[9] + arrayLetter[21] + arrayLetter[33] + arrayLetter[45] + arrayLetter[57]
 // console.log(wordStyle)
var  wordDeveloper = arrayLetter[12] + arrayLetter[24] + arrayLetter[36] + arrayLetter[48] + arrayLetter[60] + arrayLetter[72] + arrayLetter[84] + arrayLetter[96] + arrayLetter[108]
 // console.log(wordDeveloper)
var  wordInline = arrayLetter[0] + arrayLetter[1] + arrayLetter[2] + arrayLetter[3] + arrayLetter[4] + arrayLetter[5]
//console.log(wordInline)
var  wordBlock = arrayLetter[114] + arrayLetter[102] + arrayLetter[90] + arrayLetter[78] + arrayLetter[66]
 // console.log(wordBlock)
var  wordElement = arrayLetter[13] + arrayLetter[25] + arrayLetter[37] + arrayLetter[49] + arrayLetter[61] + arrayLetter[73] + arrayLetter[85]
 // console.log(wordElement)
var  wordTag = arrayLetter[106] + arrayLetter[105] + arrayLetter[104]
 // console.log(wordTag)
var  wordComment = arrayLetter[34] + arrayLetter[46] + arrayLetter[58] + arrayLetter[70] + arrayLetter[82] + arrayLetter[94] + arrayLetter[106]
 // console.log(wordComment)
var  wordImg =  arrayLetter[42] + arrayLetter[41] +  arrayLetter[40]
 // console.log(wordImg)
var  wordIf = arrayLetter[42] + arrayLetter[54]
 // console.log(wordIf)
var  wordVarible = arrayLetter[109] + arrayLetter[110] + arrayLetter[111] + arrayLetter[112] + arrayLetter[113] + arrayLetter[114] +arrayLetter[115] + arrayLetter[116]   
 // console.log(wordVarible)
var  wordCodify = arrayLetter[50] + arrayLetter[51] + arrayLetter[52] +arrayLetter[53] + arrayLetter[54] + arrayLetter[55] 
 // console.log(wordCodify)
var  wordDebugging = arrayLetter[12] + arrayLetter[13] + arrayLetter[14] + arrayLetter[15] + arrayLetter[16] + arrayLetter[17] + arrayLetter[18] + arrayLetter[19] + arrayLetter[20]
 // console.log(wordDebugging)
var  wordHtml =  arrayLetter[79] + arrayLetter[91] + arrayLetter[103] + arrayLetter[115]
 // console.log(wordHtml)
var  wordCss = arrayLetter[50] + arrayLetter[62] + arrayLetter[74]
 // console.log(wordCss)
var  wordBody = arrayLetter[39] + arrayLetter[51] + arrayLetter[63] + arrayLetter[75]
 // console.log(wordBody)
var  wordIndex = arrayLetter[112] + arrayLetter[100] + arrayLetter[88] + arrayLetter[76] + arrayLetter[64]
 // console.log(wordIndex)



           // loop for making all id, class, elements

for (var i = 0; i < 120; i++) {
	var body = document.getElementById('body')	
	// var div = document.createElement('div')
	var button = document.createElement('button')
	var ol = document.createElement('ol')	
    button.setAttribute('type','button')
	// button.setAttribute('onclick',"highLight()")

	 button.className = 'btn'
	button.appendChild(document.createTextNode(arrayLetter[i]))
	body.appendChild(button)
	// body.appendChild(div)

	// document.getElementsByTagName("button")[i].id = "mybtn" + i

		// change button color
} 

document.addEventListener('mousedown', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement;
    if (target.className == 'btn') {
        target.className =  'btn on';
    } else if(target.className == 'btn on') {
    	target.className = 'btn off';
    } else if (target.className == 'btn off') {
    	target.className = 'btn on';
    }
}, false);
         


		
							 // array of words
		var findWords = ['function','border','class','id','margin','js','div','font','style','developer','block','element',
		                  'tag','comment','img','if','varible','codify','debugging','html','css','body','index']
		        
		        // looping through array print words on screen
		         
		 for (var i = 0; i < findWords.length; i++) {                	
		 		var bodyWord = document.getElementById('findwords')		 		
		 		var li = document.createElement('li')		 		
		 		li.className = 'li'
		 		ol.appendChild(li)
		 		bodyWord.appendChild(ol)
				li.appendChild(document.createTextNode(findWords[i]))
        };


        console.log( wordFunction)

               












