
function addPlot(){
	
	let mybody = document.getElementById('idBody');
	let newline = mybody.insertRow(-1);
	let firstcell=newline.insertCell(0);	
	firstcell.innerHTML = "Fonction à dessiner:";
	let secondcell=newline.insertCell(1);
	let str="idfonction"+document.getElementById('tabId').rows.length;
	secondcell.innerHTML ="<input type=\"text\" value=\"x\" id='"+str+"'/>"; //id=\"idfonction"+document.getElementById('tabId').rows.length+"\"/>";*/
	//alert(document.getElementById('idfonction4').value);
	
}


function redraw() {
	let tab=[{fn: document.getElementById('idfonction').value, color: document.getElementById('idcolorfonction').value}];
	for (let i=4; i<=document.getElementById('tabId').rows.length; i++) {
		tab[i-3]={fn: document.getElementById('idfonction'+i).value};
	}
	tab[1]={fn: document.getElementById('idfonction4').value, color: document.getElementById('idcolorfonction').value};
	let parameters = {
            target: '#root',
            data: tab,
            grid: true,
            yAxis: {domain: [document.getElementById('idminy').value, document.getElementById('idmaxy').value]},
            xAxis: {domain: [document.getElementById('idminx').value, document.getElementById('idmaxy').value]}
        };

       functionPlot(parameters);
	//[{fn: document.getElementById('idfonction').value, color: document.getElementById('idcolorfonction').value}]
}
