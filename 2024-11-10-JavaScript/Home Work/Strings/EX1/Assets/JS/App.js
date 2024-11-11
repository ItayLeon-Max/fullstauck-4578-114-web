const webURL = prompt("Enter the URL of the website you want to scrape");

//test if the ".com" or ".org" or "co.il" or "org.il" or "gov.il" is in the URL end only this is the website type
if(webURL.includes(".com") && webURL.endsWith(".com")){
    alert("International commercial site");
} else if(webURL.includes(".org") && webURL.endsWith(".org")){
    alert("International corporate website");
} else if(webURL.includes("co.il") && webURL.endsWith("co.il")){
    alert("Israeli commercial website");
} else if(webURL.includes("org.il") && webURL.endsWith("org.il")){
    alert("Israeli corporate website");
} else if(webURL.includes("gov.il") && webURL.endsWith("gov.il")){
    alert("Israeli government website");
} else {
    alert("Unknown website");
}



