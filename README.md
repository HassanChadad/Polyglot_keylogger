# CS-683 Polyglot_keylogger
# Hassan Chadad

## What is Polyglot
Polyglot file is a file that can be an **image AND JavaScript at the same time!** It also does not need an external script to extract the payload. The javascript code is often hidden in the header of the image.

## My polyglot file 
I created a javascript that logs all the keys pressed in the webpage. Then I hided the javascript inside a bmp image using the following program (https://github.com/jklmnn/imagejs). In order to test the new polyglot, I created an html webpage and included the new polyglot file in it as a script and as an image.

## Results
When opening the webpage, you will see the image and will see the keylogs in the console of the webpage.

## Why using BMP for polyglot ?
BMP encodes a payload in such a way that the resulting binary blob is both valid x86 shellcode and a valid bitmap image file (.bmp).

## Limitations
In order to run the XSS attack (key-logging), the site doesn't strip EXIF metadata and is vulnerable to XSS attacks.</br>
So basically, the new polyglot image won't work on facebook or instagram for example.



