import Logo from '../download.png';
import React from 'react';
import { useState } from 'react';

function Head() {
    return (
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="mystyle.css" />
            <link rel="stylesheet" href="jquery-ui.css" />
            <script src="script.js" />
            <script src="https://code.jquery.com/jquery-3.6.0.js" />
            <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js" />
        </head>
    );
}
function Body(props) {
    return (
        <body>
            {Header(props)}
            {Banner()}
            {Inhoud()}
        </body>
    );
}
function Header(props) {
    return (
        <div class="header">
            {HeaderLogo(props)}
            <div class="tags">
                <a class="tag" onClick={() => props.overOns()}>Over Ons</a>
                <a class="tagactive" onClick={() => props.bestel()}>Bestel Tickets</a>
            </div>
        </div>
    );
}
function HeaderLogo(props) {
    return (
        <a>
            <img onClick={() => props.main()} class="logo" src={Logo} alt="logo" style={{ width: '120px', height: '100px' }} />
        </a>
    );
}
function Banner() {
    return (
        <div class="banner"></div>
    );
}

function Inhoud() {
    const [volw, setVolw] = useState(0);
    const [kind, setKind] = useState(0);
    const [type, setType] = useState('');


    return (
        <div class="inhoudbestelpagina">
            <div class="linkerhelft">
                <div class="bestellen">

                    <div class="datepicker">
                        <p>Datum: <input type="text" id="datepicker" /></p>
                    </div>
                    <div>
                        <div class="adult-ticket">
                            <label for="Adult-ticket" class="center-label">Volwassenen</label>
                            <input type="number" id="adult" name="user_adult" />
                        </div>
                        <div class="child-ticket">
                            <label for="child-ticket" class="center-label">Kinderen</label>
                            <input type="number" id="child" name="user_child" />
                        </div>
                        <div class="standard-price">
                            <input type="radio" id="Standard" name="Type" value="Standard" />
                            <label class="light" for="Standard">Standaard</label><br />
                        </div>
                        <div class="fast-pass">
                            <input type="radio" id="Fast-pass" name="Type" value="Fast-pass" />
                            <label class="light" for="Fast-pass">Fast-pass</label><br /><br />
                        </div>
                        <input type="button" value="In winkelwagen" id="checkoutbtn" onClick={() => {
                            setKind(Number(document.getElementById('child').value));
                            setVolw(Number(document.getElementById('adult').value));
                            setType(document.querySelector('input[type=radio]:checked').getAttribute("value"));
                        }} />
                    </div>

                </div>
            </div>
            <div class="rechterhelft">
                <h1 class="besteloverzicht">BestelOverzicht</h1>
                <div class="besteloverzichtinhoud">
                    <h3 class="volwassentickets">Aantal volwassentickets:</h3>
                    <p class="vticket" id="total-vt">{volw}</p>
                    <h3 class="kindertickets">Aantal kindertickets:</h3>
                    <p class="kticket" id="total-kt">{kind}</p>
                    <h3 class="totaalbedrag">Totaalbedrag:</h3>
                    <p class="prijs" id="total-cost">
                        {
                            type == 'Standard' &&
                            (volw * 18) + (kind * 8)
                        }
                        {
                            type == 'Fast-pass' &&
                            (volw * 30) + (kind * 15)
                        }
                    </p>
                </div>
            </div>
        </div>
    );
}

const Bestel = { Head, Body };
export default Bestel