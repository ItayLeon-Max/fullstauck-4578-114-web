export const getCountries = () =>
    new Promise((resolve) => {
    setTimeout(() => {
       resolve([
        
           { name: "Afghanistan", population: 38928341 },
   
           { name: "Åland Islands", population: 28875 },
   
           { name: "Albania", population: 2837743 },
   
           { name: "Algeria", population: 43851043 },
   
           { name: "American Samoa", population: 55197 },
   
           { name: "Andorra", population: 77265 },
   
           { name: "Angola", population: 32866268 },
   
           { name: "Anguilla", population: 13452 },
   
           { name: "Antarctica", population: 1000 },
   
           { name: "Antigua and Barbuda", population: 97928 },
   
           { name: "Argentina", population: 45376763 },
   
           { name: "Armenia", population: 2963234 },
   
           { name: "Aruba", population: 106766 },
   
           { name: "Australia", population: 25687041 },
   
           { name: "Austria", population: 8917205 },
   
           { name: "Azerbaijan", population: 10110116 },
   
           { name: "Bahamas", population: 393248 },
   
           { name: "Bahrain", population: 1701583 },
   
           { name: "Bangladesh", population: 164689383 },
   
           { name: "Barbados", population: 287371 },
   
           { name: "Belarus", population: 9398861 },
   
           { name: "Belgium", population: 11555997 },
   
           { name: "Belize", population: 397621 },
   
           { name: "Benin", population: 12123198 },
   
           { name: "Bermuda", population: 63903 },
   
           { name: "Bhutan", population: 771612 },
   
           { name: "Bolivia (Plurinational State of)", population: 11673029 },
   
           { name: "Bonaire, Sint Eustatius and Saba", population: 17408 },
   
           { name: "Bosnia and Herzegovina", population: 3280815 },
   
           { name: "Botswana", population: 2351625 },
   
           { name: "Bouvet Island", population: 0 },
   
           { name: "Brazil", population: 212559409 },
   
           { name: "British Indian Ocean Territory", population: 3000 },
   
           { name: "United States Minor Outlying Islands", population: 300 },
   
           { name: "Virgin Islands (British)", population: 30237 },
   
           { name: "Virgin Islands (U.S.)", population: 106290 },
   
           { name: "Brunei Darussalam", population: 437483 },
   
           { name: "Bulgaria", population: 6927288 },
   
           { name: "Burkina Faso", population: 20903278 },
   
           { name: "Burundi", population: 11890781 },
   
           { name: "Cambodia", population: 16718971 },
   
           { name: "Cameroon", population: 26545864 },
   
           { name: "Canada", population: 38005238 },
   
           { name: "Cabo Verde", population: 555988 },
   
           { name: "Cayman Islands", population: 65720 },
   
           { name: "Central African Republic", population: 4829764 },
   
           { name: "Chad", population: 16425859 },
   
           { name: "Chile", population: 19116209 },
   
           { name: "China", population: 1402112000 },
   
           { name: "Christmas Island", population: 2072 },
   
           { name: "Cocos (Keeling) Islands", population: 550 },
   
           { name: "Colombia", population: 50882884 },
   
           { name: "Comoros", population: 869595 },
   
           { name: "Congo", population: 5518092 },
   
           { name: "Congo (Democratic Republic of the)", population: 89561404 },
   
           { name: "Cook Islands", population: 18100 },
   
           { name: "Costa Rica", population: 5094114 },
   
           { name: "Croatia", population: 4047200 },
   
           { name: "Cuba", population: 11326616 },
   
           { name: "Curaçao", population: 155014 },
   
           { name: "Cyprus", population: 1207361 },
   
           { name: "Czech Republic", population: 10698896 },
   
           { name: "Denmark", population: 5831404 },
   
           { name: "Djibouti", population: 988002 },
   
           { name: "Dominica", population: 71991 },
   
           { name: "Dominican Republic", population: 10847904 },
   
           { name: "Ecuador", population: 17643060 },
   
           { name: "Egypt", population: 102334403 },
   
           { name: "El Salvador", population: 6486201 },
   
           { name: "Equatorial Guinea", population: 1402985 },
   
           { name: "Eritrea", population: 5352000 },
   
           { name: "Estonia", population: 1331057 },
   
           { name: "Ethiopia", population: 114963583 },
   
           { name: "Falkland Islands (Malvinas)", population: 2563 },
   
           { name: "Faroe Islands", population: 48865 },
   
           { name: "Fiji", population: 896444 },
   
           { name: "Finland", population: 5530719 },
   
           { name: "France", population: 67391582 },
   
           { name: "French Guiana", population: 254541 },
   
           { name: "French Polynesia", population: 280904 },
   
           { name: "French Southern Territories", population: 140 },
   
           { name: "Gabon", population: 2225728 },
   
           { name: "Gambia", population: 2416664 },
   
           { name: "Georgia", population: 3714000 },
   
           { name: "Germany", population: 83240525 },
   
           { name: "Ghana", population: 31072945 },
   
           { name: "Gibraltar", population: 33691 },
   
           { name: "Greece", population: 10715549 },
   
           { name: "Greenland", population: 56367 },
   
           { name: "Grenada", population: 112519 },
   
           { name: "Guadeloupe", population: 400132 },
   
           { name: "Guam", population: 168783 },
   
           { name: "Guatemala", population: 16858333 },
   
           { name: "Guernsey", population: 62999 },
   
           { name: "Guinea", population: 13132792 },
   
           { name: "Guinea-Bissau", population: 1967998 },
   
           { name: "Guyana", population: 786559 },
   
           { name: "Haiti", population: 11402533 },
   
           { name: "Heard Island and McDonald Islands", population: 0 },
   
           { name: "Vatican City", population: 451 },
   
           { name: "Honduras", population: 9904608 },
   
           { name: "Hungary", population: 9749763 },
   
           { name: "Hong Kong", population: 7481800 },
   
           { name: "Iceland", population: 366425 },
   
           { name: "India", population: 1380004385 },
   
           { name: "Indonesia", population: 273523621 },
   
           { name: "Ivory Coast", population: 26378275 },
   
           { name: "Iran (Islamic Republic of)", population: 83992953 },
   
           { name: "Iraq", population: 40222503 },
   
           { name: "Ireland", population: 4994724 },
   
           { name: "Isle of Man", population: 85032 },
   
           { name: "Israel", population: 9216900 },
   
           { name: "Italy", population: 59554023 },
   
           { name: "Jamaica", population: 2961161 },
   
           { name: "Japan", population: 125836021 },
   
           { name: "Jersey", population: 100800 },
   
           { name: "Jordan", population: 10203140 },
   
           { name: "Kazakhstan", population: 18754440 },
   
           { name: "Kenya", population: 53771300 },
   
           { name: "Kiribati", population: 119446 },
   
           { name: "Kuwait", population: 4270563 },
   
           { name: "Kyrgyzstan", population: 6591600 },
   
           { name: "Lao People's Democratic Republic", population: 7275556 },
   
           { name: "Latvia", population: 1901548 },
   
           { name: "Lebanon", population: 6825442 },
   
           { name: "Lesotho", population: 2142252 },
   
           { name: "Liberia", population: 5057677 },
   
           { name: "Libya", population: 6871287 },
   
           { name: "Liechtenstein", population: 38137 },
   
           { name: "Lithuania", population: 2794700 },
   
           { name: "Luxembourg", population: 632275 },
   
           { name: "Macao", population: 649342 },
   
           { name: "North Macedonia", population: 2083380 },
   
           { name: "Madagascar", population: 27691019 },
   
           { name: "Malawi", population: 19129955 },
   
           { name: "Malaysia", population: 32365998 },
   
           { name: "Maldives", population: 540542 },
   
           { name: "Mali", population: 20250834 },
   
           { name: "Malta", population: 525285 },
   
           { name: "Marshall Islands", population: 59194 },
   
           { name: "Martinique", population: 378243 },
   
           { name: "Mauritania", population: 4649660 },
   
           { name: "Mauritius", population: 1265740 },
   
           { name: "Mayotte", population: 226915 },
   
           { name: "Mexico", population: 128932753 },
   
           { name: "Micronesia (Federated States of)", population: 115021 },
   
           { name: "Moldova (Republic of)", population: 2617820 },
   
           { name: "Monaco", population: 39244 },
   
           { name: "Mongolia", population: 3278292 },
   
           { name: "Montenegro", population: 621718 },
   
           { name: "Montserrat", population: 4922 },
   
           { name: "Morocco", population: 36910558 },
   
           { name: "Mozambique", population: 31255435 },
   
           { name: "Myanmar", population: 54409794 },
   
           { name: "Namibia", population: 2540916 },
   
           { name: "Nauru", population: 10834 },
   
           { name: "Nepal", population: 29136808 },
   
           { name: "Netherlands", population: 17441139 },
   
           { name: "New Caledonia", population: 271960 },
   
           { name: "New Zealand", population: 5084300 },
   
           { name: "Nicaragua", population: 6624554 },
   
           { name: "Niger", population: 24206636 },
   
           { name: "Nigeria", population: 206139587 },
   
           { name: "Niue", population: 1470 },
   
           { name: "Norfolk Island", population: 2302 },
   
           {name: "Korea (Democratic People's Republic of)", population: 25778815 },
   
           { name: "Northern Mariana Islands", population: 57557 },
   
           { name: "Norway", population: 5379475 },
   
           { name: "Oman", population: 5106622 },
   
           { name: "Pakistan", population: 220892331 },
   
           { name: "Palau", population: 18092 },
   
           { name: "Palestine, State of", population: 4803269 },
   
           { name: "Panama", population: 4314768 },
   
           { name: "Papua New Guinea", population: 8947027 },
   
           { name: "Paraguay", population: 7132530 },
   
           { name: "Peru", population: 32971846 },
   
           { name: "Philippines", population: 109581085 },
   
           { name: "Pitcairn", population: 56 },
   
           { name: "Poland", population: 37950802 },
   
           { name: "Portugal", population: 10305564 },
   
           { name: "Puerto Rico", population: 3194034 },
   
           { name: "Qatar", population: 2881060 },
   
           { name: "Republic of Kosovo", population: 1775378 },
   
           { name: "Réunion", population: 840974 },
   
           { name: "Romania", population: 19286123 },
   
           { name: "Russian Federation", population: 144104080 },
   
           { name: "Rwanda", population: 12952209 },
   
           { name: "Saint Barthélemy", population: 9417 },
   
           {name: "Saint Helena, Ascension and Tristan da Cunha",population: 4255 },
   
           { name: "Saint Kitts and Nevis", population: 53192 },
   
           { name: "Saint Lucia", population: 183629 },
   
           { name: "Saint Martin (French part)", population: 38659 },
   
           { name: "Saint Pierre and Miquelon", population: 6069 },
   
           { name: "Saint Vincent and the Grenadines", population: 110947 },
   
           { name: "Samoa", population: 198410 },
   
           { name: "San Marino", population: 33938 },
   
           { name: "Sao Tome and Principe", population: 219161 },
   
           { name: "Saudi Arabia", population: 34813867 },
   
           { name: "Senegal", population: 16743930 },
   
           { name: "Serbia", population: 6908224 },
   
           { name: "Seychelles", population: 98462 },
   
           { name: "Sierra Leone", population: 7976985 },
   
           { name: "Singapore", population: 5685807 },
   
           { name: "Sint Maarten (Dutch part)", population: 40812 },
   
           { name: "Slovakia", population: 5458827 },
   
           { name: "Slovenia", population: 2100126 },
   
           { name: "Solomon Islands", population: 686878 },
   
           { name: "Somalia", population: 15893219 },
   
           { name: "South Africa", population: 59308690 },
   
           {name: "South Georgia and the South Sandwich Islands", population: 30},
   
           { name: "Korea (Republic of)", population: 51780579 },
   
           { name: "Spain", population: 47351567 },
   
           { name: "Sri Lanka", population: 21919000 },
   
           { name: "Sudan", population: 43849269 },
   
           { name: "South Sudan", population: 11193729 },
   
           { name: "Suriname", population: 586634 },
   
           { name: "Svalbard and Jan Mayen", population: 2562 },
   
           { name: "Swaziland", population: 1160164 },
   
           { name: "Sweden", population: 10353442 },
   
           { name: "Switzerland", population: 8636896 },
   
           { name: "Syrian Arab Republic", population: 17500657 },
   
           { name: "Taiwan", population: 23503349 },
   
           { name: "Tajikistan", population: 9537642 },
   
           { name: "Tanzania, United Republic of", population: 59734213 },
   
           { name: "Thailand", population: 69799978 },
   
           { name: "Timor-Leste", population: 1318442 },
   
           { name: "Togo", population: 8278737 },
   
           { name: "Tokelau", population: 1411 },
   
           { name: "Tonga", population: 105697 },
   
           { name: "Trinidad and Tobago", population: 1399491 },
   
           { name: "Tunisia", population: 11818618 },
   
           { name: "Turkey", population: 84339067 },
   
           { name: "Turkmenistan", population: 6031187 },
   
           { name: "Turks and Caicos Islands", population: 38718 },
   
           { name: "Tuvalu", population: 11792 },
   
           { name: "Uganda", population: 45741000 },
   
           { name: "Ukraine", population: 44134693 },
   
           { name: "United Arab Emirates", population: 9890400 },
   
           {name: "United Kingdom of Great Britain and Northern Ireland", population: 67215293 },
   
           { name: "United States of America", population: 329484123 },
   
           { name: "Uruguay", population: 3473727 },
   
           { name: "Uzbekistan", population: 34232050 },
   
           { name: "Vanuatu", population: 307150 },
   
           { name: "Venezuela (Bolivarian Republic of)", population: 28435943 },
   
           { name: "Vietnam", population: 97338583 },
   
           { name: "Wallis and Futuna", population: 11750 },
   
           { name: "Western Sahara", population: 510713 },
   
           { name: "Yemen", population: 29825968 },
   
           { name: "Zambia", population: 18383956 },
   
           { name: "Zimbabwe", population: 14862927 }
   
        ]);
   
       }, 500);
   
     });
   
   
   