
import React, { useState, forwardRef } from 'react';
import ReactDOM  from 'react-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

const countries = [
    '+93 --- Afghanistan','+355 --- Albania','+213 --- Algeria','+684 --- American Samoa',
    '+376 --- Andorra','+244 --- Angola','+809 --- Anguilla','+268 --- Antigua',
    '+54 --- Argentina','+374 --- Armenia','+297 --- Aruba','247 --- Ascension Island',
    '+61 --- Australia','+672 --- Australian External Territories','+43 --- Austria','+994 --- Azerbaijan',
    '+242 --- Bahamas','+246 --- Barbados','+973 --- Bahrain','+880 --- Bangladesh',
    '+375 --- Belarus','+32 --- Belgium','+501 --- Belize','+229 --- Benin','+809 --- Bermuda','+975 --- Bhutan',
    '+284 --- British Virgin Islands','+591 --- Bolivia','+387 --- Bosnia and Hercegovina','+267 --- Botswana',
    '+55 --- Brazil','+284 --- British V.I.','+359 --- Bulgaria','+226 --- Burkina Faso',
    '+257 --- Burundi','+855 --- Cambodia','+237 --- Cameroon','+1 --- Canada',
    '+238 --- CapeVerde Islands','+1 --- Caribbean Nations','+345 --- Cayman Islands','+238 --- Cape Verdi',
    '+236 --- Central African Republic','+235 --- Chad','+56 --- Chile','+86 --- China (Peoples Republic)',
    '+886 --- Taiwan','+57 --- Colombia','+269 --- Comoros and Mayotte','+242 --- Congo',
    '+682 --- Cook Islands','+506 --- Costa Rica','+385 --- Croatia','+53 --- Cuba','+357 --- Cyprus',
    '+420 --- Czech Republic','+45 --- Denmark','+24/6 --- Diego Garcia','+767 --- Dominca','+809 --- /Dominican Republic','+253 --- Djibouti','+593 --- Ecuador','+20 --- Egypt',
    '+503 --- El Salvador','+240 --- Equatorial Guinea','+291 --- Eritrea','+372 --- Estonia','+251 --- Ethiopia','+500 --- Falkland Islands','+298 --- Faroe (Faeroe) Islands (Denmark)',
    '+679 --- Fiji','+358 --- Finland','+33 --- France','+596 --- French Antilles','+594 --- French Guiana','+241 --- Gabon (Gabonese Republic)',
    '+220 --- Gambia','+995 --- Georgia','+49 --- Germany','+233 --- Ghana','+350 --- Gibraltar',
    '+30 --- Greece','+299 --- Greenland',
    '+473 --- Grenada/Carricou','+671 --- Guam','+224 --- Guinea','+245 --- Guinea-Bissau',
    '+592 --- Guyana','+509 --- Haiti','+504 --- Honduras','+852 --- Hong Kong','+36 --- Hungary',
    '+354 --- Iceland','+91 --- India','+62 --- Indonesia',
    '+502 --- Guatemala','+62 --- Indonesia','+98 --- Iran',
    '+964 --- Iraq','+353 --- Ireland (Irish Republic; Eire)','+972 --- Israel',
    '+39 --- Italy','+225 --- Côte d\'Ivoire','+1 876 --- Jamaica','+81 --- Japan','+962 --- Jordan','+7 --- Kazakhstan','+254 --- Kenya','+855 --- Khmer Republic (Cambodia/Kampuchea)','+686 --- Kiribati Republic (Gilbert Islands)','+82 --- the Republic of Korea (South Korea)','+850 --- Democratic Peoples Republic of Korea (North Korea)','+965 --- Kuwait','+996 --- Kyrgyz Republic','+371 --- Latvia',
    '+856 --- Laos','+961 --- Lebanon','+266 --- Lesotho','+231 --- Liberia','+370 --- Lithuania','+218 --- Libya','+423 --- Liechtenstein','+352 --- Luxembourg','+853 --- Macao',
    '+389 --- Macedonia','+261 --- Madagascar','+265 --- Malawi','+60 --- Malaysia',
    '+960 --- Maldives','+223 --- Mali','+356 --- Malta','+692 --- Marshall Islands',
    '+596 --- Martinique (French Antilles)','+222 --- Mauritania','+230 --- Mauritius',
    '+269 --- Mayolte','+52 --- Mexico','+691 --- Micronesia (F.S. of Polynesia)','+373 --- Moldova','+33 --- Monaco','+976 --- Mongolia','+473 --- Montserrat','+212 --- Morocco','+258 --- Mozambique','+95 --- Myanmar (former Burma)','+264 --- Namibia (former South-West Africa)','+674 --- Nauru','+977 --- Nepal','+31 --- Netherlands','+599 --- Netherlands Antilles','+869 --- Nevis',
    '+687 --- New Caledonia','+64 --- New Zealand','+505 --- Nicaragua','+227 --- Niger','+234 --- Nigeria','+683 --- Niue','+850 --- North Korea','+1 670 --- North Mariana Islands (Saipan)','+47 --- Norway','+968 --- Oman','+92 --- Pakistan','+680 --- Palau',
    '+507 --- Panama','+675 --- Papua New Guinea','+595 --- Paraguay','+51 --- Peru','+63 --- Philippines','+48 --- Poland','+351 --- Portugal (includes Azores)','+1 787 --- Puerto Rico',
    '+974 --- Qatar','+262 --- Reunion (France)',
    '+40 --- Romania','+7 --- Russia','+250 --- Rwanda (Rwandese Republic)','+670 --- Saipan','+378 --- San Marino',
    '+239 --- Sao Tome and Principe','+966 --- Saudi Arabia','+221 --- Senegal','+381 --- Serbia and Montenegro','+248 --- Seychelles','+232 --- Sierra Leone','+65 --- Singapore','+421 --- Slovakia','+386 --- Slovenia','+677 --- Solomon Islands','+252 --- Somalia',
    '+27 --- South Africa','+34 --- Spain','+94 --- Sri Lanka','+290 --- St. Helena','+869 --- St. Kitts/Nevis',
    '+508 --- St. Pierre &(et) Miquelon (France)','+249 --- Sudan','+597 --- Suriname','+268 --- Swaziland','+46 --- Sweden','+41 --- Switzerland','+963 --- Syrian Arab Republic (Syria)',
    '+689 --- Tahiti (French Polynesia)','+886 --- Taiwan','+7 --- Tajikistan','+255 --- Tanzania (includes Zanzibar)',
    '+66 --- Thailand','+228 --- Togo (Togolese Republic)','+690 --- Tokelau','+676 --- Tonga','+1 868 --- Trinidad and Tobago',
    '+216 --- Tunisia','+90 --- Turkey',
    '+993 --- Turkmenistan','+256 --- Uganda','+380 --- Ukraine','+971 --- United Arab Emirates',
    '+44 --- United Kingdom','+598 --- Uruguay','+1 --- USA','+7 --- Uzbekistan',
    '+678 --- Vanuatu (New Hebrides)','+39 --- Vatican City','+58 --- Venezuela','+84 --- Viet Nam',
    '+1 340 --- Virgin Islands','+681 --- Wallis and Futuna','+685 --- Samoa',
    '+967 --- Yemen','+243 --- Zaire','+260 --- Zambia','+263 --- Zimbabwe'
];

const CountryCodesDropdown = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
      const [value, setValue] = useState('');
  
      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <Form.Control
            as="select"
            autoFocus
            value={value}
            onChange={(e) => setValue(e.target.value)}
          >
            <option value="">Select a country...</option>
            {countries.map((country) => (
              <option key={country}>{country}</option>
            ))}
          </Form.Control>
        </div>
      );
    },
  );
  
  
    function App() {
        const [isOpen, setIsOpen] = React.useState(false);

        function handleClick(e) {
            e.preventDefault();
            setIsOpen((open) => !open);
          }
          
      
        const CustomToggle = React.forwardRef(({ children, onClick }, ref) => {
            function handleClick(e) {
                e.preventDefault();
                onClick(e);
                setIsOpen((open) => !open);
            }

            return (
            <a
            href="/"
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
                handleClick(e);
                }
            }
        
            >
              {children} &#x25bc;
            </a>
          );
        });
    
    return(
        <>
            {isOpen && (
                <Dropdown>
                    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                        Custom toggle
                    </Dropdown.Toggle>
                    <Dropdown.Menu as={CountryCodesDropdown} show={isOpen} align="end">
                        {countries.map((country) => (
                            <Dropdown.Item key={country}>{country}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            )}
        </>
    );
}
const container = document.getElementById('root');
ReactDOM.render(<App/>, container);
export default CountryCodesDropdown;
