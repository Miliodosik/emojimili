// emoji-randomizer.js

const emojis = [
    '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇',
    '🙂', '🙃', '😉', '😌', '😍', '😘', '😗', '😙', '😚', '😋',
    '😛', '😜', '😝', '🤑', '🤗', '🤓', '😎', '🤡', '🤠', '😏',
    '😒', '😞', '😔', '😟', '😕', '🙁', '☹️', '😣', '😖', '😫',
    '😩', '😤', '😠', '😡', '😶', '😐', '😑', '😯', '😦', '😧',
    '😮', '😲', '😵', '😳', '😱', '😨', '😰', '😢', '😥', '🤤',
    '😭', '😓', '😪', '😴', '🙄', '🤔', '🤥', '😬', '🤐', '🤢',
    '🤧', '😷', '🤒', '🤕', '😈', '👿', '👹', '👺', '💩', '👻',
    '💀', '☠️', '👽', '👾', '🤖', '🎃', '😺', '😸', '😹', '😻',
    '😼', '😽', '🙀', '😿', '😾'
  ];
  
  /**
   * Function to randomly select an emoji from the emojis array.
   * @returns {string} A randomly selected emoji.
   */
  function getRandomEmoji() {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
  }
  
  module.exports = getRandomEmoji;
  