firstKbRow = document.getElementById("kb-row-one")
console.log("firstKbRow", firstKbRow)

secondKbRow = document.getElementById("kb-row-two")

thirdKbRow = document.getElementById("kb-row-three")

fourthKbRow = document.getElementById("kb-row-four")

fifthKbRow = document.getElementById("kb-row-five")

let tabCount = 1

var key = (function(){

    keyDivEl = null

    return{
        makeKey: function(keyText, id){
            keyDiv = document.createElement("div")
            keyDiv.innerText = keyText
            keyDiv.classList.add("key")
            keyDiv.setAttribute("id", id)

            keyDiv.setAttribute("tabindex", ++tabCount)

            keyDiv.addEventListener("keydown", function(e){
                keyboard.getKeyPressed(e)
                console.log("this is Event", e)
                console.log(e.key)


            })

            keyDivEl = keyDiv

            return keyDiv
        },

       // on: function(eventName, callback){
         //   keyDivEl.on(eventName,function(e){
           //     callback(e)
            //})
       // }
    }
})()  



tildeKey = key.makeKey("`", "key-first")
tildeKey.autofocus = true
OneKey = key.makeKey("1", "key-one")
TwoKey = key.makeKey("2", "key-two" )
ThreeKey = key.makeKey("3", "key-three")
FourKey = key.makeKey("4", "key-four")
FiveKey = key.makeKey("5", "key-five")
SixKey = key.makeKey("6", "key-six")
SevenKey = key.makeKey("7", "key-seven" )
EightKey = key.makeKey("8" ,"key-eight")
NineKey = key.makeKey("9", "key-nine")
ZeroKey = key.makeKey("0", "key-zero")
DashKey = key.makeKey("-", "key-dash")
EqualKey = key.makeKey("=", "key-equal")
BackspaceKey = key.makeKey("backspace", "key-backspace")

firstKbRow.appendChild(tildeKey)
firstKbRow.appendChild(OneKey)
firstKbRow.appendChild(TwoKey)
firstKbRow.appendChild(ThreeKey)
firstKbRow.appendChild(FourKey)
firstKbRow.appendChild(FiveKey)
firstKbRow.appendChild(SixKey)
firstKbRow.appendChild(SevenKey)
firstKbRow.appendChild(EightKey)
firstKbRow.appendChild(NineKey)
firstKbRow.appendChild(ZeroKey)
firstKbRow.appendChild(DashKey)
firstKbRow.appendChild(EqualKey)
firstKbRow.appendChild(BackspaceKey)

TabKey = key.makeKey("Tab", "key-tab")
QKey = key.makeKey("Q", "key-q")
WKey = key.makeKey("W", "key-w")
EKey = key.makeKey("E", "key-e")
RKey = key.makeKey("R", "key-r")
TKey = key.makeKey("T", "key-t")
YKey = key.makeKey("Y", "key-y")
UKey = key.makeKey("U", "key-u")
IKey = key.makeKey("I", "key-i")
OKey = key.makeKey("O", "key-o")
Pkey = key.makeKey("P", "key-p")
BoxOpenKey = key.makeKey("[", "key-boxopen")
BoxCloseKey = key.makeKey("]", "key-boxclose")
Backslash = key.makeKey("/", "key-backslash")

secondKbRow.appendChild(TabKey)
secondKbRow.appendChild(QKey)
secondKbRow.appendChild(WKey)
secondKbRow.appendChild(EKey)
secondKbRow.appendChild(RKey)
secondKbRow.appendChild(TKey)
secondKbRow.appendChild(YKey)
secondKbRow.appendChild(UKey)
secondKbRow.appendChild(IKey)
secondKbRow.appendChild(OKey)
secondKbRow.appendChild(Pkey)
secondKbRow.appendChild(BoxOpenKey)
secondKbRow.appendChild(BoxCloseKey)
secondKbRow.appendChild(Backslash)

CapsKey = key.makeKey("Caps", "key-caps")
AKey = key.makeKey("A", "key-a")
SKey = key.makeKey("S", "key-s")
DKey = key.makeKey("D", "key-d")
FKey = key.makeKey("F", "key-f")
GKey = key.makeKey("G", "key-g")
HKey = key.makeKey("H", "key-h")
Jkey = key.makeKey("J", "key-j")
KKey = key.makeKey("K", "key-k")
LKey = key.makeKey("L", "key-l")
ComapointKey = key.makeKey(";", "comapoint-key")
HaifinKey = key.makeKey("'", "key-haifin")
EnterKey = key.makeKey("Enter", "key-enter")

thirdKbRow.appendChild(CapsKey)
thirdKbRow.appendChild(AKey)
thirdKbRow.appendChild(SKey)
thirdKbRow.appendChild(DKey)
thirdKbRow.appendChild(FKey)
thirdKbRow.appendChild(GKey)
thirdKbRow.appendChild(HKey)
thirdKbRow.appendChild(Jkey)
thirdKbRow.appendChild(KKey)
 thirdKbRow.appendChild(LKey)
thirdKbRow.appendChild(ComapointKey)
thirdKbRow.appendChild(HaifinKey)
thirdKbRow.appendChild(EnterKey)

ShiftKey = key.makeKey("Shift", "key-shift")
ZKey = key.makeKey("Z", "key-z")
XKey = key.makeKey("X", "key-x")
CKey = key.makeKey("C", "key-c")
VKey = key.makeKey("V", "key-v")
BKey = key.makeKey("B", "key-b")
NKey = key.makeKey("N", "key-n")
MKey = key.makeKey("M", "key-m")
LessthanKey = key.makeKey("<", "key-lessthan")
GreaterthanKey = key.makeKey(">", "key-greaterthan")
QuestionmarkKey = key.makeKey("?", "key-questionmark")
ShiftKey2 = key.makeKey("Shift", "key-shift")


fourthKbRow.appendChild(ShiftKey)
fourthKbRow.appendChild(ZKey)
fourthKbRow.appendChild(XKey)
fourthKbRow.appendChild(CKey)
fourthKbRow.appendChild(VKey)
fourthKbRow.appendChild(BKey)
fourthKbRow.appendChild(NKey)
fourthKbRow.appendChild(MKey)
fourthKbRow.appendChild(LessthanKey)
fourthKbRow.appendChild(GreaterthanKey)
fourthKbRow.appendChild(QuestionmarkKey)
fourthKbRow.appendChild(ShiftKey2)

ControlKey = key.makeKey("Ctrl", "key-control")
WindowKey = key.makeKey("Win", "key-windows")
AltKey = key.makeKey("Alt", "key-alt")
SpaceKey = key.makeKey(" ", "key-space")
AltKey2 = key.makeKey("Alt", "key-alt")
WindowKey2 = key.makeKey("Win", "key-windows")
ControlKey2 = key.makeKey("Ctrl", "key-control")

fifthKbRow.appendChild(ControlKey)
fifthKbRow.appendChild(WindowKey)
fifthKbRow.appendChild(AltKey)
fifthKbRow.appendChild(SpaceKey)
fifthKbRow.appendChild(AltKey2)
fifthKbRow.appendChild(WindowKey2)
fifthKbRow.appendChild(ControlKey2)

var keys = [
    tildeKey,
    OneKey ,
    TwoKey ,
    ThreeKey,
    FourKey ,
    FiveKey ,
    SixKey ,
    SevenKey,
    EightKey ,
    NineKey,
    ZeroKey,
    DashKey,
    EqualKey,
    BackspaceKey,
    
    TabKey, 
    QKey, 
    WKey,
    EKey,
    RKey ,
    TKey ,
    YKey ,
    UKey ,
    IKey ,
    OKey ,
    Pkey ,
    BoxOpenKey ,
    BoxCloseKey ,
    Backslash,

    CapsKey ,
    AKey ,
    SKey ,
    DKey ,
    FKey ,
    GKey ,
    HKey ,
    Jkey ,
    KKey ,
    LKey ,
    ComapointKey ,
    HaifinKey ,
    EnterKey ,

    ShiftKey ,
    ZKey ,
    XKey ,
    CKey ,
    VKey ,
    BKey ,
    NKey ,
    MKey ,
    LessthanKey ,
    GreaterthanKey ,
    QuestionmarkKey ,
    ShiftKey2, 

    ControlKey ,
    WindowKey ,
    AltKey ,
    SpaceKey ,
    AltKey2 ,
    WindowKey2 ,
    ControlKey2,

]


var keyboard = (function(keys){
    var keys = keys
    var keyPressed = null

    function showKeyPressed(){
        if (keyPressed !== null){
            screen.showKey(keyPressed.key)
        } else {
            screen.showKey("")
        }

    }


    function getKeyPressed(key){
        keyPressed = key
        console.log("keyPressed",keyPressed)
       showKeyPressed()

      //  for(let i = 0; i < keys.length; i++){
        //    OneKey.setA ttribute("keyName", OneKey.innerText)
          //  OneKey.setAttribute("lowerCaseName", OneKey.innerText.toLowerCase)
        //}

        //for(let i = 0; i < keys.length; i++){
          //  if(keyPressed.key == OneKey.getAttribute("keyName")|| keyPressed.key == OneKey)
            //    console.log(OneKey)
        //}

        keys.forEach((keyDiv) => {
            for(let i = 0; i < keys.length; i++){
                keyDiv.setAttribute("keyName", keyDiv.innerText);
                keyDiv.setAttribute("lowerCaseName", keyDiv.innerText.toLowerCase())
            }

        

            for(let i = 0; i < keys.length; i++){
                if(keyPressed.key == keyDiv.getAttribute("keyName") || keyPressed.key == keyDiv.getAttribute("lowerCaseName")){
                    keyDiv.classList.add("pressed")
                }else{
                    keyDiv.classList.remove("pressed")
                }
                setTimeout(() => {
                    keyDiv.classList.remove("pressed")
                },150)

            }
           
        })
       
    }
    return {
        showKeyPressed: showKeyPressed,
        getKeyPressed: getKeyPressed
    }

})(keys)



var screen = (function(){
    var screenEl = document.getElementById("screen")

    function showKey(key){
        keysDisplayed = screenEl.value
        keysDisplayed = keysDisplayed + key
        screenEl.innerText = keysDisplayed

        console.log("keydisplay ", keysDisplayed.split("") )

       sentence.compareKey(keysDisplayed)
    
      
    }


    return {
        showKey : showKey
    }
})()

    /*var sentenceScreenEl = document.getElementById("sentence")
    sentenceScreenEl.innerHTML = ""


var sentence = (function(){

   
    let randomNumber = Math.floor(Math.random()* 10)+1;

    var showSentence=[
        'I am a passionate software engineer',
	    'kessben driving school is the location',
	    'if it must be done then it must be done well',
        'Akumadan tomatoes is nice',
	    'Senior Obed is my Chairman',
    	'Positive mindset brings positive thing',
    	'i am the king of wisdom and citizen of zion',
	    'Telecommunication',		
	    'Anticipation without solution is foolishness',
    	'At long last the battle has ended',
    ];

    function showCurrentSentence(){
        let currentSentence = showSentence[randomNumber]
        
        currentSentence.split('').forEach(key =>{
            const keySpan = document.createElement('span')
            keySpan.innerText = key
           sentenceScreenEl.appendChild(keySpan)

           console.log(keySpan.innerText)
          
            
        })

        
       // var arrayDisplayQuote = .querySelectAll("keySpan")
        //console.log("arrayDisplayQuote",arrayDisplayQuote)
        
    }

   showCurrentSentence()
      
})()*/


var sentence = (function(){
    
    return{
        sentenceScreenEl: null,

        showSentence : function(){
            return{
                 words:[
                    'I am a passionate software engineer',
                    'kessben driving school is the location',
                    'if it must be done then it must be done well',
                    'Akumadan tomatoes is nice',
                    'Senior Obed is my Chairman',
                    'Positive mindset brings positive thing',
                    'i am the king of wisdom and citizen of zion',
                    'Telecommunication',		
                    'Anticipation without solution is foolishness',
                    'At long last the battle has ended',
                ]             
            }
        },

        showCurrentSentence: function(){
        

           // console.log(this.showSentence().words)
            let randomNumber = Math.floor(Math.random()* 9)+1;
            let currentSentence = this.showSentence().words[randomNumber]
            console.log(randomNumber)
        
            currentSentence.split('').forEach(key =>{
                this.sentenceScreenEl = document.getElementById("sentence")

                const keySpan = document.createElement('span')
                keySpan.innerText = key
               this.sentenceScreenEl.appendChild(keySpan)
    
              // console.log(keySpan)
              
                
            })
        },

        compareKey: function(keysDisplayed){
            var sentenceArray = sentence.sentenceScreenEl.querySelectorAll('span')
            console.log('screenElArray', sentenceArray)
    
            //var screenElArray = screenEl.value.split("")
    
            var keysArray = keysDisplayed.split("")
            console.log('keys Array',keysArray)
    
            sentenceArray.forEach((keySpan, index) => {
                const character = keysArray[index]
                if(character == null){
                    keySpan.classList.remove('corrrect')
                    keySpan.classList.remove('incorrect')
                }
                else if(character === keySpan.innerText){
                    keySpan.classList.add('correct')
                    keySpan.classList.remove('incorrect')
                }
                else{
                    keySpan.classList.remove('correct')
                    keySpan.classList.add('incorrect')
                }
            })
        }
    }

})()

sentence.showCurrentSentence()




