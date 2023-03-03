function shout(str) {
    return str.toUpperCase();

}

function whisper(str) {
    return str.toLowerCase();
}

function logShout(str) {
    str = str.toUpperCase();
    console.log(str);
}

function logWhisper(str) {
    str = str.toLowerCase();
    console.log(str);
}

function sayHiToHeadphonedRoommate(str) {
    if (str == str.toLowerCase())
    {
        return "I can't hear you!";
    } else if (str == "Let's have dinner together!") {
        return "I would love to!";
    } else {
        return "YES INDEED!";
    }
}

