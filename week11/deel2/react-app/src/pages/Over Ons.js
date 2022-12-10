import Logo from '../download.png';
import Entree from '../images.jpg';
import '../script'

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
                <a class="tagactive" onClick={() => props.overOns()}>Over Ons</a>
                <a class="tag" onClick={() => props.bestel()}>Bestel Tickets</a>
            </div>
        </div>
    );
}
function HeaderLogo(props) {
    return (
        <a onClick={() => props.main()}>
            <img class="logo" src={Logo} alt="logo" style={{ width: '120px', height: '100px' }} />
        </a>
    );
}
function Banner() {
    return (
        <img src={Entree} alt="logo" style={{ width: '100%', height: '300px' }} />
    );
}
function Inhoud() {
    return (
        <div class="inhoud">
            {InhoudFoto()}
            {InhoudTekst()}
            {LeukeNaam()}
        </div>
    );
}
function InhoudTekst() {
    return (
        <h3 class="inhoudTekst">
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
        </h3>
    );
}
function InhoudFoto() {
    return (
        <img class="inhoudfoto" src={Entree} alt="logo" style={{ width: '40%', height: '40%' }} />
    );
}
function LeukeNaam() {
    return (
        <form class="leukenaam">
            <h1>Bekijk jouw naam in de walibi font!</h1>
            Jouw naam:<br /> <input id="denaam" type="text" name="naam" />
            <input type="button" value="Bekijk!" id="naamknop" onClick={window['naamtonen']} />
            <p class="jouwnaam" id="jouwnaam"></p>
        </form>
    );
}



const Overons = { Head, Body };
export default Overons