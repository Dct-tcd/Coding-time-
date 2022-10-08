let api_url = 
      "https://www.kontests.net/api/v1/all";
      let all=0,cf=0,cc=0,ctr=0,lc,kick=0;
function myFunctionall()
{
    api_url="https://www.kontests.net/api/v1/all";
    getapi(api_url,0);
}
function myFunctioncf()
{
    api_url="https://www.kontests.net/api/v1/codeforces";
    getapi(api_url,1);
}  function myFunctionlc()
{
    api_url="https://www.kontests.net/api/v1/leet_code";
    getapi(api_url,2);
}  function myFunctionatr()
{
    api_url="https://www.kontests.net/api/v1/at_coder";
    getapi(api_url,3);
}  function myFunctioncc()
{
    api_url="https://www.kontests.net/api/v1/code_chef";
    getapi(api_url,4);
}  
function myFunctionkick()
{
    api_url="https://www.kontests.net/api/v1/kick_start";
    getapi(api_url,5);
}  
async function getapi(url,apo)
 {
        const response = await fetch(url);
        let data = await response.json();
    console.log(data.size);
    if (response) {
        hideloader();
    }
    show(data,apo);
}
getapi(api_url);
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
const po = document.getElementById("employees").innerHTML;
function show(data,apo) {
 let tab = 
        `<tr>
          <th>Name</th>
          <th>Link to the Contest</th>
          <th>In_24_Hours</th>
          <th>Start time</th>
          <th>End time</th>
          <th>Duration in Min</th>
          <th>Site</th>
          <th>Status</th>
          </tr>`;
         data.sort((a, b) => b.start_time > a.start_time ? -1: 1);
        //  let pp=0;
      for (let r of data) { 
if (r.site!="HackerRank"&&r.site!="HackerEarth")
        { 
        r.duration = parseInt(r.duration)/60;
        let str=r.url;
        let str1=r.status;
        if (str1=="CODING")str1="Running";
        else str1="Not Yet Running";
        let dt = new Date(r.start_time);
    let dt1 = new Date(r.end_time);
    r.start_time = dt.toLocaleString();
    r.end_time = dt1.toLocaleString();
     r.url=str.link(r.url);
     let siteo=r.site;
     if (apo==1) siteo="Codeforces";
     if (apo==2) siteo="LeetCode";
     if (apo==3) siteo="Atcoder";
     if (apo==4) siteo="Codechef";
     if (apo==5) siteo="KickStart";
     if (apo==0) siteo=r.site; 
      tab += 
    `<tr> 
    <td>${r.name} </td>
    <td>${r.url}</td>
    <td>${r.in_24_hours}</td>
    <td>${r.start_time}</td>
    <td>${r.end_time}</td>
    <td>${r.duration}</td>
    <td>${siteo}</td>
    <td>${str1}</td>
    </tr>`;
        }
    }
    document.getElementById("employees").innerHTML = tab ;
}