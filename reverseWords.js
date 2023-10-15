document.getElementById("reverseButton").addEventListener("click", function () {
    var inputSentence = document.getElementById("sentence").value;
    var reversedSentence = reverseWords(inputSentence);
    document.getElementById("result").textContent = "Reversed Sentence: " + reversedSentence;
});

function reverseWords(sentence) {
    var words = sentence.split(" ");
    function reverseWord(word) {
        return word.split("").reverse().join("");
    }
    for (var i = 0; i < words.length; i++) {
        words[i] = reverseWord(words[i]);
    }
    return words.join(" ");
}