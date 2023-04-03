
let api_url = 
      "https://www.kontests.net/api/v1/all";
      let all=0,cf=0,cc=0,ctr=0,lc,kick=0;
function myFunctionall()
{

    api_url="https://www.kontests.net/api/v1/all";

    getapi(api_url,0);
//     const btn = document.getElementById('1');

// // btn.addEventListener('click', function onClick() {
//   btn.style.backgroundColor = 'blue';
//   btn.style.color = 'white';
// });

}

function myFunctioncf()
{
    api_url="https://www.kontests.net/api/v1/codeforces";
    getapi(api_url,1);
//     const btn = document.getElementById('2');

// // btn.addEventListener('click', function onClick() {
//     btn.style.backgroundColor = 'blue';
//     btn.style.color = 'white';
//   });
    myFunction();   
}  function myFunctionlc()
{
    api_url="https://www.kontests.net/api/v1/leet_code";
    getapi(api_url,2);
    myFunction();
}  function myFunctionatr()
{
    api_url="https://www.kontests.net/api/v1/at_coder";
    getapi(api_url,3);
    myFunction();
}  function myFunctioncc()
{
    api_url="https://www.kontests.net/api/v1/code_chef";
    getapi(api_url,4);
    myFunction();
}  
function myFunctionkick()
{
    api_url="https://www.kontests.net/api/v1/kick_start";
    getapi(api_url,5);
    myFunction();
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
    showo(data,apo);
}
getapi(api_url);
// function Rem_site(site)
// {
    
// }



function rem_fun(date)
{
    console.log(1);
    let ans;
    for(let i=0;i<date.length;i++)
    {
      if (date[i]!='.'&&date[i]!='-') ans+=date[i];
    }
    return ans;
}
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

// let ans = document.getElementById("rem");

// ans.url = "https://calendar.google.com/event?action=TEMPLATE&dates=2022-12-27T14:35:00.000Z/2022-12-27T16:35:00.000Z&text=Codeforces Round (Div. 2)&location=https://codeforces.com/contestRegistration/1731"
// const po = document.getElementById("employees").innerHTML;

// const popi = document.getElementById("emp").innerHTML;

function show(data,apo) {
 let tab = 
        `<tr>
        <th>Reminder</th>
        <th>Site</th>  
        <th>Name</th>
          <th>In_24_Hours</th>
          <th>Start time</th>
          <th>link to the contest</th>
          <th>End time</th>
          <th>Duration in Min</th>
          
           </tr>`;
          let tabo = 
        `<tr>
        <th>Reminder</th> 
          <th>Site</th>
          <th>Name</th>
          <th>Start time</th>
          </tr>`;
 
         data.sort((a, b) => b.start_time > a.start_time ? -1: 1);
        //  let pp=0;
      for (let r of data) { 
if (r.site!="HackerRank"&&r.site!="HackerEarth"&&r.status!="CODING")
        { 
        r.duration = parseInt(r.duration)/60;
        let str=r.url;
        let rem_str=r.url;
        let str1=r.status;
        if (str1=="CODING")str1="Running";
        else str1="Not Yet Running";
        
     r.url=str.link(r.url);
     let siteo=r.site;
   
    
     if (apo==1) siteo="Codeforces";
     if (apo==2) siteo="LeetCode";
     if (apo==3) siteo="Atcoder";
     if (apo==4) siteo="Codechef";
     if (apo==5) siteo="KickStart";
     if (apo==0) siteo=r.site;

let linker1="/";
let linker2="&text=";
let linker3="&location=";
let linker4="https://calendar.google.com/event?action=TEMPLATE&dates={";

// rem_link = "https://calendar.google.com/event?action=TEMPLATE&dates=" + contest['start_time'] + "/" + contest['end_time'] + "&text=" + contest["name"] + "&location=" + contest['url'];
    // rem_link = formatCalendarUrl(rem_link);
    // add_to_calendar = "<a class=\"add-to-calendar\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Add to Calendar\" target=\"_blank\" href=\"" + add_to_calendar + "\"><i class=\"far fa-calendar-alt\"></i></a> &nbsp;";
    // temp_text += add_to_calendar

    //  rem_link=str.link(rem_link);
    
     let dt = new  Date(r.start_time);
     let dt1 = new Date(r.end_time);
     tre = dt.toISOString();
     tem = dt1.toISOString();
     let ans="";
     for(let i=0;i<tre.length;i++)
     {
       
        if (tre[i]=='.'||tre[i]=='-'||tre[i]==':') ans=ans;
        else ans+=tre[i];
    
     }
tre=ans;
let cp="";
for(let i=0;i<tem.length;i++)
{
  
   if (tem[i]=='.'||tem[i]=='-'||tem[i]==':') ans=ans;
   else cp+=tem[i];

}
tem=cp;


     r.start_time = dt.toLocaleString();
     r.end_time = dt1.toLocaleString();
     
     
     
let rem_link = linker4 + tre + linker1 + tem + linker2 + r.site + linker3 + r.url ;
 rem_link = str.link(rem_link);

let op = `https://calendar.google.com/event?action=TEMPLATE&dates=${tre}/${tem}&text=${r.name}&location=${r.name}`;
// let sta = document.getElementById("rem");
// sta.innerHTML=op; 
// let result = sta.link(op);

// let Reminder_link = "";

// Reminder_link = op.link(Reminder_link);
 console.log(r.name);

tab += 
    `<tr> 
    <td> <a href= ${ op } target="_blank">📅 Reminder </a></td>
    <td>${siteo}</td>
    <td>${r.name} </td>
    <td>${r.in_24_hours}</td>
    <td>${r.start_time}</td>
    <td>${r.url}</td>
    <td>${r.end_time}</td>
    <td>${r.duration}</td>
    </tr>`;
    tabo += 
    `<tr> 
    <td> <a href= ${ op } target="_blank">📅 Reminder </a></td>
    <td>${siteo}</td>
    <td>${r.name} </td>
    <td>${r.start_time}</td>
    </tr>`;
        }       
    }
    if (window.screen.width>=700)
    {
        document.getElementById("employees").innerHTML = tab ;
    
    }
    else 
    document.getElementById("employees").innerHTML = tabo ;

}