let companiesDescList = document.getElementById("exp-companies-desc-list");
companiesDescList.children[0].setAttribute("chosen", "true");

let companiesList = document.getElementById("exp-companies-list").children;
companiesList[0].setAttribute("chosen", "true");
for (let company of companiesList) {
    company.onclick = () => {expCompanyOnClick(company.innerText);}
}



function expCompanyOnClick(companyName) {
    let companiesDescList = document.getElementById("exp-companies-desc-list").children;
    let companiesList = document.getElementById("exp-companies-list").children;
    for (let desc of companiesDescList) {
        desc.setAttribute("chosen", "false");
    }
    for (let company of companiesList) {
        company.setAttribute("chosen", "false");
    }
    let descListItem = document.getElementById(companyName);
    descListItem.setAttribute("chosen", "true");
    document.getElementById(`comp-name-${companyName}`).setAttribute("chosen", "true");
}