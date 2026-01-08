
const IMAGE_ARRAY_LENGTH = 9;

const SCREEN_BUTTONS =9;

const IMAGE_ARRAY_BUTTON_MAPPING: number[] = [8, 7, 6, 5, 4, 3, 2, 1, 0];


const KEYBOARD_KEYS_LENGTH = 114;

type KeyboardKeyType = {
    nKeyId: number;
    keyText: string;
};

export interface KeyboardKeyArrayInterface {
    [key: string]: KeyboardKeyType;
}


const KEYBOARD_KEY_ARRAY: KeyboardKeyArrayInterface = {
    'Esc':{nKeyId:0, keyText:'Esc'},
    'F1':{nKeyId:1, keyText:'F1'},
    'F2':{nKeyId:2, keyText:'F2'},
    'F3':{nKeyId:3, keyText:'F3'},
    'F4':{nKeyId:4, keyText:'F4'},
    'F5':{nKeyId:5, keyText:'F5'},
    'F6':{nKeyId:6, keyText:'F6'},
    'F7':{nKeyId:7, keyText:'F7'},
    'F8':{nKeyId:8, keyText:'F8'},
    'F9':{nKeyId:9, keyText:'F9'},
    'F10':{nKeyId:10, keyText:'F10'},
    'F11':{nKeyId:11, keyText:'F11'},
    'F12':{nKeyId:12, keyText:'F12'},

     '`':{nKeyId:13, keyText:'`'},
    '1':{nKeyId:14, keyText:'1'},
    '2':{nKeyId:15, keyText:'2'},
    '3':{nKeyId:16, keyText:'3'},
    '4':{nKeyId:17, keyText:'4'},
    '5':{nKeyId:18, keyText:'5'},
    '6':{nKeyId:19, keyText:'6'},
    '7':{nKeyId:20, keyText:'7'},
    '8':{nKeyId:21, keyText:'8'},
    '9':{nKeyId:22, keyText:'9'},
    '0':{nKeyId:23, keyText:'0'},
    '-':{nKeyId:24, keyText:'-'},
    '=':{nKeyId:25, keyText:'='},
    'Backspace':{nKeyId:26, keyText:'Backspace'},

    'Tab':{nKeyId:27, keyText:'Tab'},
    'Q':{nKeyId:28, keyText:'Q'}, 
    'W':{nKeyId:29, keyText:'W'}, 
    'E':{nKeyId:30, keyText:'E'}, 
    'R':{nKeyId:31, keyText:'R'}, 
    'T':{nKeyId:32, keyText:'T'}, 
    'Y':{nKeyId:33, keyText:'Y'}, 
    'U':{nKeyId:34, keyText:'U'}, 
    'I':{nKeyId:35, keyText:'I'}, 
    'O':{nKeyId:36, keyText:'O'}, 
    'P':{nKeyId:37, keyText:'P'}, 
    '[':{nKeyId:38, keyText:'['}, 
    ']':{nKeyId:39, keyText:']'}, 
    '\\':{nKeyId:40, keyText:'\\'},

    'Caps':{nKeyId:41, keyText:'Caps'}, 
    'A':{nKeyId:42, keyText:'A'}, 
    'S':{nKeyId:43, keyText:'S'}, 
    'D':{nKeyId:44, keyText:'D'}, 
    'F':{nKeyId:45, keyText:'F'}, 
    'G':{nKeyId:46, keyText:'G'}, 
    'H':{nKeyId:47, keyText:'H'}, 
    'J':{nKeyId:48, keyText:'J'}, 
    'K':{nKeyId:49, keyText:'K'}, 
    'L':{nKeyId:50, keyText:'L'}, 
    ';':{nKeyId:51, keyText:';'},
    "'":{nKeyId:52, keyText:"'"}, 
    'Enter':{nKeyId:53, keyText:'Enter'},

    'ShiftL':{nKeyId:54, keyText:'ShiftL'}, 
    'Z':{nKeyId:55, keyText:'Z'}, 
    'X':{nKeyId:56, keyText:'X'}, 
    'C':{nKeyId:57, keyText:'C'}, 
    'V':{nKeyId:58, keyText:'V'}, 
    'B':{nKeyId:59, keyText:'B'}, 
    'N':{nKeyId:60, keyText:'N'}, 
    'M':{nKeyId:61, keyText:'M'}, 
    ',':{nKeyId:62, keyText:','}, 
    '.':{nKeyId:63, keyText:'.'}, 
    '/': { nKeyId : 64 , keyText : '/' }, 
    'ShiftR' : { nKeyId : 65 , keyText : "ShiftR" },

    'CtrlL' : { nKeyId: 66 , keyText : "CtrlL" }, 
    'Win' : { nKeyId : 67 , keyText : "Win" }, 
    'AltL' : { nKeyId : 68 , keyText : "AltL" }, 
    'Space' : { nKeyId : 69 , keyText : "Space" }, 
    'AltR' : { nKeyId : 70 , keyText : "AltR" }, 
    'Fn' : { nKeyId : 71 , keyText : "Fn" }, 
    'Code' : { nKeyId : 72 , keyText : "Code" }, 
    'CtrlR' : { nKeyId : 73 , keyText :"CtrlR"},

    'Print':{ nKeyId : 74 , keyText : "Print" }, 
    'Scroll':{ nKeyId : 75 , keyText : "Scroll" }, 
    'Pause':{ nKeyId : 76 , keyText : "Pause" },
    'Insert':{ nKeyId : 77 , keyText : "Insert" }, 
    'Home':{ nKeyId : 78 , keyText : "Home" }, 
    'PageUp':{ nKeyId : 79 , keyText : "PgUp" },
    'Delete':{ nKeyId : 80 , keyText : "Delete" }, 
    'End':{ nKeyId : 81 , keyText : "End" }, 
    'PageDown':{ nKeyId : 82 , keyText : "PgDown" },
    'ArrowUp':{ nKeyId : 83 , keyText : "\u2191" },
    'ArrowLeft':{ nKeyId : 84 , keyText : "\u2190" }, 
    'ArrowDown':{ nKeyId : 85 , keyText : "\u2193" }, 
    'ArrowRight':{ nKeyId : 86 , keyText : "\u2192" },

    'FnA':{ nKeyId: 87 , keyText: "FnA" }, 
    'FnB':{ nKeyId: 88 , keyText: "FnB" }, 
    'FnC':{ nKeyId: 89 , keyText: "FnC" }, 
    'FnD':{ nKeyId: 90 , keyText: "FnD" },

    'NumLock':{ nKeyId: 91, keyText: "NmLck"}, 
    '/N': {nKeyId: 92, keyText:"/"}, 
    '*N': {nKeyId: 93, keyText:"*"}, 
    '-N': {nKeyId: 94, keyText:"-"},
    '7N':{nKeyId: 95, keyText:"7"}, 
    '8N':{nKeyId: 96, keyText:"8"}, 
    '9N':{nKeyId: 97, keyText:"9"}, 
    '+N':{nKeyId: 98, keyText:"+"},
    '4N':{nKeyId: 99, keyText:"4"}, 
    '5N':{nKeyId: 100, keyText:"5"}, 
    '6N':{nKeyId: 101, keyText:"6"},
    '1N':{nKeyId: 102, keyText:"1"}, 
    '2N':{nKeyId: 103, keyText:"2"}, 
    '3N':{nKeyId: 104, keyText:"3"}, 
    'EnterN':{nKeyId: 105, keyText:"Enter"},
    '0N':{nKeyId: 106, keyText:"0"}, 
    '.N':{nKeyId: 107, keyText:"."},

    'FnE':{nKeyId: 108, keyText:"FnE"}, 
    'FnF':{nKeyId: 109, keyText:"FnF"}, 
    'FnG':{nKeyId: 110, keyText:"FnG"}, 
    'FnH':{nKeyId: 111, keyText:"FnH"},
    'FnI':{nKeyId: 112, keyText:"FnI"},
    'FnJ':{nKeyId: 113, keyText:"FnJ"}
};

export { IMAGE_ARRAY_LENGTH ,SCREEN_BUTTONS,KEYBOARD_KEYS_LENGTH,KEYBOARD_KEY_ARRAY, IMAGE_ARRAY_BUTTON_MAPPING };