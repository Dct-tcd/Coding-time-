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

// var el = document.getElementById("1");

// if (el.addEventListener) {
//     el.addEventListener("click", function() {
//         myFunctionall();
//     }, false);
// } else { //IE8 support
//     el.attachEvent("onclick", function() { 
//         myFunctionall();
//     });
// }

// let el = document.getElementById("2");

// if (el.addEventListener) {
//     el.addEventListener("click", function() {
//         myFunctionall();
//     }, false);
// } else { //IE8 support
//     el.attachEvent("onclick", function() { 
//         myFunctionall();
//     });
// }
// document.getElementById('1').onclick(myFunctionall());
// document.getElementById('2').onclick(myFunctioncf());
// document.getElementById('3').onclick(myFunctionlc());
// document.getElementById('4').onclick(myFunctionatr());
// document.getElementById('5').onclick(myFunctioncc());
// document.getElementById('6').onclick(myFunctionkick());
window.onload=function(){

    document.getElementById("1").addEventListener("click", myFunctionall);
    document.getElementById("2").addEventListener("click", myFunctioncf);
    document.getElementById("3").addEventListener("click", myFunctionlc);
    document.getElementById("4").addEventListener("click", myFunctionatr);
    document.getElementById("5").addEventListener("click", myFunctioncc);
    // document.getElementById("6").addEventListener("click", myFunctionkick);
    
}

async function getapi(url,apo)
 {
        const response = await fetch(url);
        let data = await response.json();
        // console.log(data);
    
        // console.log(data.size);
    if (response) {
        hideloader();
    }
    show(data,apo);
    // showo(data,apo);
}
getapi(api_url);
// function Rem_site(site)
// {
    
// }
function rem_fun(date)
{
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
          <th>Duration in Min</th>
          </tr>`;
//  console.log(apo);
         data.sort((a, b) => b.start_time > a.start_time ? -1: 1);
        //  let pp=0;
      for (let r of data)
       { 
        
if (r.site==null||r.site=="CodeForces"||r.site=="CodeChef"||r.site=="AtCoder"||r.site=="LeetCode")
        { 
        r.duration = parseInt(r.duration)/60;
        let str=r.url;
        let rem_str=r.url;
        let str1=r.status;
        if (str1=="CODING")str1="Running";
        else str1="Not Yet Running";


        let str_url=r.url;    
     r.url=str.link(r.url);
    
     let siteo=r.site;
   if (siteo=="CodeForces") siteo="Codeforces";
   if (siteo=="CodeChef") siteo="Codechef";
   if (siteo=="AtCoder") siteo="Atcoder";
   if (siteo=="LeetCode") siteo="Leetcode";
    
     if (apo==1) siteo="Codeforces";
     if (apo==2) siteo="Leetcode";
     if (apo==3) siteo="Atcoder";
     if (apo==4) siteo="Codechef";
     if (apo==5) siteo="Kickstart";
     if (apo==0) siteo=r.site;

// let linker1="/";
// let linker2="&text=";
// let linker3="&location=";
// let linker4="https://calendar.google.com/event?action=TEMPLATE&dates={";

// rem_link = "https://calendar.google.com/event?action=TEMPLATE&dates=" + contest['start_time'] + "/" + contest['end_time'] + "&text=" + contest["name"] + "&location=" + contest['url'];
    // rem_link = formatCalendarUrl(rem_link);
    // add_to_calendar = "<a class=\"add-to-calendar\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Add to Calendar\" target=\"_blank\" href=\"" + add_to_calendar + "\"><i class=\"far fa-calendar-alt\"></i></a> &nbsp;";
    // temp_text += add_to_calendar

    //  rem_link=str.link(rem_link);
    
     let dt = new  Date(r.start_time);
     let dt1 = new Date(r.end_time);
     tre = dt.toISOString();
     tem = dt1.toISOString();
     r.start_time = dt.toLocaleString();
     r.end_time = dt1.toLocaleString();
     
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
     
     
// let rem_link = linker4 + tre + linker1 + tem + linker2 + r.site + linker3 + r.url ;
//  rem_link = str.link(rem_link);
// console.log(siteo);
// console.log(3,apo);
let desc_str="";
for(let i=0;i<r.name.length;i++)
{
 if (r.name[i]==" ") desc_str+='+';
 else desc_str+=r.name[i];
}
let op = `https://calendar.google.com/event?action=TEMPLATE&dates=${tre}/${tem}&text=${desc_str}&location=${str_url}`;
     tab += 
    `<tr> 
    <td> <a href= ${op} target="_blank">📅 Reminder </a></td>
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
    <td> <a href= ${op} target="_blank" style="text-decoration:none;">&nbsp;&nbsp;Add📅 Reminder </a></td>
    <td>${siteo} </td>
    <td>${r.name} </td>
    <td>${r.start_time}</td>
    <td>${r.duration}</td>
    </tr>`;
}       
    }
    if (window.screen.width>=700)  document.getElementById("employees").innerHTML = tab;
    else  document.getElementById("employees").innerHTML = tabo ;
}