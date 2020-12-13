let getEmoji = () => {
  let emoji = document.getElementById("emojiInput").value;
  let n = emoji.codePointAt(0).toString(16);
  let url = "https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/"+n+".svg";
  document.getElementById("result").innerHTML = "<a href='"+url+"' target='_blank'><img src='"+url+"' width='128'>";
}