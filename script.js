function showimage() {
    let imageurl = document.getElementById('imageminput').value
 
    let code = imageurl.charAt(32)
    code += imageurl.charAt(33)
    code += imageurl.charAt(34)
    code += imageurl.charAt(35)
    code += imageurl.charAt(36)
    code += imageurl.charAt(37)
    code += imageurl.charAt(38)
    code += imageurl.charAt(39)
    code += imageurl.charAt(40)
    code += imageurl.charAt(41)
    code += imageurl.charAt(42)

    console.log(code)
    document.getElementById('imagemresultado').src='https://i.ytimg.com/vi/'+code+'/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC9oGZ9IDEhgbZvIcft8NZn-lP76w';



    }