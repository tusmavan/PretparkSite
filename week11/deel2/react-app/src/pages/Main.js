import Logo from '../download.png';
import Bannerfoto from '../WH_Lost_Gravity_ondersteboven_22pers.jpg';
import Goliath from '../Walibi-Goliath.jpg';

function Head() {
    return (
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="mystyle.css" />
            <script src="script.js" />
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
                <a class="tag" onClick={() => props.bestel()}>Bestel Tickets</a>
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
        <img src={Goliath} alt="goliath" style={{ width: '100%', height: '300px' }} />
    );
}
function Inhoud() {
    return (
        <div class="inhoud">
            {InhoudTekst()}
            {InhoudFoto()}
            {Weer()}
        </div>
    );
}
function InhoudTekst() {
    return (
        <h2 class="inhoudTekstlinks">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in commodo eros. Etiam velit sapien,
            lobortis nec erat ac, lobortis elementum dui. Donec nulla ligula, feugiat quis ligula tempor, cursus tincidunt
            purus.
            Morbi sit amet ante tincidunt dui elementum semper nec at enim. Curabitur molestie ante dignissim, venenatis
            sapien eget,
            tempus erat. Nunc vel sapien semper, accumsan odio ut, condimentum metus. Proin non massa non ante scelerisque
            congue
            ut quis turpis. Nunc hendrerit lorem eu sem euismod, sit amet interdum velit imperdiet. Etiam euismod dictum
            sapien, et
            sollicitudin nulla pellentesque quis. Nulla malesuada ex ultrices, consequat mauris sit amet, cursus ex. Proin
            interdum at felis
            ut porta. Integer sodales, libero eget consequat sodales, sem lacus convallis purus, pretium blandit leo mauris ac
            tellus. Nulla et
            lectus ac felis aliquet tempus. Sed aliquam facilisis lacus ac tincidunt.
        </h2>
    );
}
function InhoudFoto() {
    return (
        <img class="inhoudfoto" src={Bannerfoto} alt="mooie foto" style={{ width: '40%', height: '40%', }} />
    );
}
function Weer() {
    return (
        <div class="weer">
            <h2>Het weer vandaag</h2>
            <h3 id="huidigtemp">Huidige temperatuur:</h3>
            <h3 id="mintemp">Minimale temperatuur:</h3>
            <h3 id="maxtemp">Maximale temperatuur:</h3>
            <input type="button" value="ververs" id="checkoutbtn" onclick="haalweerop()" />
        </div>
    );
}
const Main = { Head, Body };
export default Main