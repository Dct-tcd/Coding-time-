let api_url = 
      "https://www.kontests.net/api/v1/all";
      let all=0,cf=0,cc=0,ctr=0,lc,kick=0;
function myFunctionall()
{
    api_url="https://www.kontests.net/api/v1/all";
    getapi(api_url,0);
}
// function newtime1(time)
// {
//     // let longMonth = time.toLocaleString('en-us', { month: 'long' }); /* June */
//     // return longMonth;
//     // console.log(longMonth);
//     let r="",p="",ans=0;
//     let  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//    time.forEach(Element => {
    // if (Element=='-') ans++;
    // if (ans==0) r+=Element;
//    });
// for(let i=0;i<time.length;i++)
// {
//     if (ans==1) p+=time[i];
//     if (time[i]=='-') ans++;
//     if (ans==0) r+=time[i];
// }
//    return  r + " " +months[p];
// }       
function myFunctioncf()
{
    // console.log("1");
    // var target = document.getElementById("cf");
    // target.innerHTML += "<style>color:green</style>";
    // {<style>color:blue</style>}
    api_url="https://www.kontests.net/api/v1/codeforces";
    getapi(api_url,1);
}  function myFunctionlc()
{
    api_url="https://www.kontests.net/api/v1/leet_code";
    getapi(api_url,1);
}  function myFunctionatr()
{
    api_url="https://www.kontests.net/api/v1/at_coder";
    getapi(api_url,1);
}  function myFunctioncc()
{
    api_url="https://www.kontests.net/api/v1/code_chef";
    getapi(api_url,1);
}  
function myFunctionkick()
{
    api_url="https://www.kontests.net/api/v1/kick_start";
    getapi(api_url,1);
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
       
     tab += 
    `<tr> 
    <td>${r.name} </td>
    <td>${r.url}</td>
    <td>${r.in_24_hours} </td>
    <td>${r.start_time} </td>
    <td>${r.end_time}</td>
    <td>${r.duration} </td>
    <td>${r.site}</td>
    <td>${str1}</td>
    </tr>`;
        }
    }
    document.getElementById("employees").innerHTML = tab ;
}