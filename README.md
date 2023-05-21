<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="calculator.css">

</head>

<body class="container">
    <div class="flex background_clr h_w radius margin_40">
        <div>
            <h1 class="calculator_m font_all f_clr">Calculator</h1>
        </div>
        <div>
            <img src="orangeline.jpg" alt="orangeline" class="horizontal-line1">
        </div>
        <div><input class="input" type="text"></div>
        <div>
            <img src="line.png" alt="line" class="horizontal-line2">
        </div>

        <div class="div1_m"><button class=" button_design int_font int_clr btn_bground">7</button>
            <button class="action button_design int_font int_clr btn_bground">8</button>
            <button class="button_design int_font int_clr btn_bground">9</button>
            <button class="button_design int_font int_clr exp_bground">/</button>
        </div>
        <div class="div2_m"><button class="button_design int_font int_clr btn_bground">4</button>
            <button class="button_design int_font int_clr btn_bground">5</button>
            <button class="button_design int_font int_clr btn_bground">6</button>
            <button class="button_design int_font int_clr exp_bground">*</button>
        </div>
        <div class="div3_m"><button class="button_design int_font int_clr btn_bground">1</button>
            <button class="button_design int_font int_clr btn_bground">2</button>
            <button class="button_design int_font int_clr btn_bground">3</button>
            <button class="button_design int_font int_clr exp_bground">+</button>
        </div>
        <div class="div4_m">
            <button class="button_design int_font int_clr exp_bground">.</button>
            <button class="button_design int_font int_clr btn_bground">0</button>
            <button class="equal_button_design int_font int_clr exp_bground">=</button>
            <button class="button_design int_font int_clr exp_bground">-</button>
        </div>
        <div class="div5_m"><button class="button clr_button_design int_clr btn_bground">clear</button></div>
    </div>

</body>
<script src="calculator.js"></script>

</html>
