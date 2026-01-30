
const IMAGE_ARRAY_LENGTH = 9;

const SCREEN_BUTTONS =9;

const IMAGE_ARRAY_BUTTON_MAPPING: number[] = [8, 7, 6, 5, 4, 3, 2, 1, 0];


const KEYBOARD_KEYS_LENGTH = 120;

type KeyboardKeyType = {
    nKeyId: number;
    keyText: string;
};

export interface KeyboardKeyArrayInterface {
    [key: string]: KeyboardKeyType;
}


const KEYBOARD_KEY_ARRAY: KeyboardKeyArrayInterface = {
    'Esc':{nKeyId:0, keyText:'Esc'},
    'F1':{nKeyId:24, keyText:'F1'},
    'F2':{nKeyId:48, keyText:'F2'},
    'F3':{nKeyId:72, keyText:'F3'},
    'F4':{nKeyId:96, keyText:'F4'},
    'F5':{nKeyId:12, keyText:'F5'},
    'F6':{nKeyId:36, keyText:'F6'},
    'F7':{nKeyId:60, keyText:'F7'},
    'F8':{nKeyId:84, keyText:'F8'},
    'F9':{nKeyId:108, keyText:'F9'},
    'F10':{nKeyId:1, keyText:'F10'},
    'F11':{nKeyId:25, keyText:'F11'},
    'F12':{nKeyId:49, keyText:'F12'},

     '`':{nKeyId:2, keyText:'`'},
    '1':{nKeyId:26, keyText:'1'},
    '2':{nKeyId:50, keyText:'2'},
    '3':{nKeyId:74, keyText:'3'},
    '4':{nKeyId:98, keyText:'4'},
    '5':{nKeyId:14, keyText:'5'},
    '6':{nKeyId:38, keyText:'6'},
    '7':{nKeyId:62, keyText:'7'},
    '8':{nKeyId:86, keyText:'8'},
    '9':{nKeyId:110, keyText:'9'},
    '0':{nKeyId:3, keyText:'0'},
    '-':{nKeyId:27, keyText:'-'},
    '=':{nKeyId:51, keyText:'='},
    'Backspace':{nKeyId:53, keyText:'Backspace'},

    'Tab':{nKeyId:4, keyText:'Tab'},
    'Q':{nKeyId:28, keyText:'Q'}, 
    'W':{nKeyId:52, keyText:'W'}, 
    'E':{nKeyId:76, keyText:'E'}, 
    'R':{nKeyId:100, keyText:'R'}, 
    'T':{nKeyId:16, keyText:'T'}, 
    'Y':{nKeyId:40, keyText:'Y'}, 
    'U':{nKeyId:64, keyText:'U'}, 
    'I':{nKeyId:88, keyText:'I'}, 
    'O':{nKeyId:112, keyText:'O'}, 
    'P':{nKeyId:5, keyText:'P'}, 
    '[':{nKeyId:29, keyText:'['}, 
    ']':{nKeyId:55, keyText:']'}, 
    '\\':{nKeyId:57, keyText:'\\'},

    'Caps':{nKeyId:6, keyText:'Caps'}, 
    'A':{nKeyId:30, keyText:'A'}, 
    'S':{nKeyId:54, keyText:'S'}, 
    'D':{nKeyId:78, keyText:'D'}, 
    'F':{nKeyId:102, keyText:'F'}, 
    'G':{nKeyId:18, keyText:'G'}, 
    'H':{nKeyId:42, keyText:'H'}, 
    'J':{nKeyId:66, keyText:'J'}, 
    'K':{nKeyId:90, keyText:'K'}, 
    'L':{nKeyId:114, keyText:'L'}, 
    ';':{nKeyId:7, keyText:';'},
    "'":{nKeyId:31, keyText:"'"}, 
    'Enter':{nKeyId:59, keyText:'Enter'},

    'ShiftL':{nKeyId:8, keyText:'ShiftL'}, 
    'Z':{nKeyId:32, keyText:'Z'}, 
    'X':{nKeyId:56, keyText:'X'}, 
    'C':{nKeyId:80, keyText:'C'}, 
    'V':{nKeyId:104, keyText:'V'}, 
    'B':{nKeyId:20, keyText:'B'}, 
    'N':{nKeyId:44, keyText:'N'}, 
    'M':{nKeyId:68, keyText:'M'}, 
    ',':{nKeyId:92, keyText:','}, 
    '.':{nKeyId:116, keyText:'.'}, 
    '/': { nKeyId : 9 , keyText : '/' }, 
    'ShiftR' : { nKeyId : 33 , keyText : "ShiftR" },

    'CtrlL' : { nKeyId: 10 , keyText : "CtrlL" }, 
    'Win' : { nKeyId : 34 , keyText : "Win" }, 
    'AltL' : { nKeyId : 58 , keyText : "AltL" }, 
    'Space' : { nKeyId : 22 , keyText : "Space" }, 
    'AltR' : { nKeyId : 94 , keyText : "AltR" }, 
    'Fn' : { nKeyId : 118 , keyText : "Fn" }, 
    'Code' : { nKeyId : 11, keyText : "Code" }, 
    'CtrlR' : { nKeyId : 35 , keyText :"CtrlR"},

    'Print':{ nKeyId : 73 , keyText : "Print" }, 
    'Scroll':{ nKeyId : 97 , keyText : "Scroll" }, 
    'Pause':{ nKeyId : 99 , keyText : "Pause" },
    'Insert':{ nKeyId : 75 , keyText : "Insert" }, 
    'Home':{ nKeyId : 101 , keyText : "Home" }, 
    'PageUp':{ nKeyId : 103 , keyText : "PgUp" },
    'Delete':{ nKeyId : 77 , keyText : "Delete" }, 
    'End':{ nKeyId : 105 , keyText : "End" }, 
    'PageDown':{ nKeyId : 107 , keyText : "PgDown" },
    'ArrowUp':{ nKeyId : 79 , keyText : "\u2191" },
    'ArrowLeft':{ nKeyId : 83 , keyText : "\u2190" }, 
    'ArrowDown':{ nKeyId : 81 , keyText : "\u2193" }, 
    'ArrowRight':{ nKeyId : 23 , keyText : "\u2192" },

    'FnA':{ nKeyId: 13 , keyText: "FnA" }, 
    'FnB':{ nKeyId: 37 , keyText: "FnB" }, 
    'FnC':{ nKeyId: 61 , keyText: "FnC" }, 
    'FnD':{ nKeyId: 85 , keyText: "FnD" },

    'NumLock':{ nKeyId: 15, keyText: "NmLck"}, 
    '/N': {nKeyId: 39, keyText:"/"}, 
    '*N': {nKeyId: 63, keyText:"*"}, 
    '-N': {nKeyId: 87, keyText:"-"},
    '7N':{nKeyId: 17, keyText:"7"}, 
    '8N':{nKeyId: 41, keyText:"8"}, 
    '9N':{nKeyId: 65, keyText:"9"}, 
    '+N':{nKeyId: 89, keyText:"+"},
    '4N':{nKeyId: 19, keyText:"4"}, 
    '5N':{nKeyId: 43, keyText:"5"}, 
    '6N':{nKeyId: 67, keyText:"6"},
    '1N':{nKeyId: 21, keyText:"1"}, 
    '2N':{nKeyId: 45, keyText:"2"}, 
    '3N':{nKeyId: 69, keyText:"3"}, 
    'EnterN':{nKeyId: 93, keyText:"Enter"},
    '0N':{nKeyId: 47, keyText:"0"}, 
    '.N':{nKeyId: 71, keyText:"."},

    'FnE':{nKeyId: 109, keyText:"FnE"}, 
    'FnF':{nKeyId: 111, keyText:"FnF"}, 
    'FnG':{nKeyId: 113, keyText:"FnG"}, 
    'FnH':{nKeyId: 115, keyText:"FnH"},
    'FnI':{nKeyId: 117, keyText:"FnI"},
    'FnJ':{nKeyId: 119, keyText:"FnJ"}
};

export { IMAGE_ARRAY_LENGTH ,SCREEN_BUTTONS,KEYBOARD_KEYS_LENGTH,KEYBOARD_KEY_ARRAY, IMAGE_ARRAY_BUTTON_MAPPING };