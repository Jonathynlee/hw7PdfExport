

const makePDF = require('pdfkit');
const printer = new makePDF;
const fs = require('fs')


function generateHTML(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <style>
            body {
                margin: 0px 30px;
            }
    
            #header {
                width: 100%;
                height: 350px;
                background-color: ${data.color};
                float: left;
            }
    
            #mid {
                width: 100%;
                height: 500px;
                background-color: rgb(133, 133, 133);
                float: left;
            }
    
            #foot {
                width: 100%;
                height: 200px;
                background-color: ${data.color};
                float: left;
            }
    
            .profile img {
    
                width: 21%;
                height: 17%;
                position: fixed;
                top: 50px;
                left: 39.5%;
                background-color: grey;
                border-radius: 50%;
                border: 4px solid rgb(29, 29, 29);
                box-shadow: 5px 5px 15px rgb(77, 77, 77);
            }
    
            .profile {
                box-shadow: 5px 5px 15px rgb(77, 77, 77);
            }
    
            .content_head {
                width: 90%;
                height: 300px;
                position: relative;
                margin: auto;
                bottom: -150px;
                background-color: rgb(1, 63, 63);
                border-radius: 10px;
                box-shadow: 4px 4px 10px rgb(102, 102, 102);
            }
    
            .head_text {
                text-align: center;
                position: absolute;
                width: 70%;
                top: 250px;
                left: 15%;
                color: white;
                line-height: 10px;
            }
    
            h1 {
                font-size: 30px;
            }
    
            h2 {
                font-size: 20px;
            }
            h3{
                font-size:15px;
            }
    
            .links {
    
                width: auto;
                height:30px;
                margin:  30px auto;
                text-align: center;
                font-size: 12px;
                line-height:20px;
                display:inline-block;
            }
            .links img{
                width:10px;
                height:10px;
                color:white;
    
            }
    
            .links a {
                text-decoration: none;
                color: white;
    
    
            }
    
            h4 {
                float: left;
                text-align: center;
                margin:0px;
            }
    
            .mid_text {
                color: rgb(37, 37, 37);
                text-align: center;
                position: relative;
                top: 100px;
                font-size: 25px;
            }
        
            .mid_content{
                width:80%;
                height:200px;
                margin:auto;
                position: relative;
                top:100px;
    
            }
            .box{
                width:40%;
                height:80px;
                position: absolute;
                background-color:  rgb(1, 63, 63);
                border-radius: 10px;
                margin:0px;
                padding:0px;
                color:white;
                text-align:center;
                line-height:0px;
            }
            h5{
                font-size: 20px;
                margin-top:20px;
            }
            #tlbox{
                
                top:0px;
                left:0px;
                
            }
            #trbox{
                
                top:0px;
                right:0px;
                
                
            }
            #blbox{
                
                bottom:0px;
                left:0px;
                
            }
            #brbox{
                
                bottom:0px;
                right:0px;
                
            }
        </style>
    </head>
    
    <body>
        <!--///////////////////////////////////////// HEADER SECTION ///////////////////////////////-->
        <section id="header">
            <div class="content_head"></div>
            <div class="head_text">
                <h1>Hi!</h1>
                <h2>My name is ${data.user}!</h2>
                <h3>Currently at Catalog Data Solution</h3>
                
                <div class="links">
                       
                    <h4> <a href="${data.googleMapsLink}">
                            <img src="https://img.icons8.com/android/24/000000/map.png">
                            ${data.location} &nbsp&nbsp</a></h4>
                    <h4> <a href="${data.gitUrl}">
                            <img src="https://img.icons8.com/metro/26/000000/github.png">
                            <!--<img src="">-->GitHub &nbsp&nbsp</a></h4>
                    <h4><a href="${data.userBlog}">
                            <img src="https://img.icons8.com/android/24/000000/pencil.png">
                            <!--<img src="">-->Blog &nbsp&nbsp</a></h4>
    
    
                </div>
            </div>
            <div class="profile"> <img src="${data.profileImage}"></div>
        </section>
    
    
        <!--///////////////////////////////////////// MID SECTION ///////////////////////////////-->
        <section id="mid">
            <div class="mid_text">
                <p> ${data.bio}</p>
            </div>
            <div class="mid_content">
    
                <div class="box" id="tlbox">
                    <h5>Public Repositories</h5>
                    <p>${data.numRepositories}</p>
                </div>
                <div class="box" id="trbox">
                        <h5>Followers</h5>
                        <p>${data.numFollowers}</p>
                </div>
                <div class="box" id="blbox">
                        <h5>GitHub Stars</h5>
                        <p>${data.numGithubStars}</p>
                </div>
                <div class="box" id="brbox">
                        <h5>Following</h5>
                        <p>${data.numOfUsersFollowing}</p>
                </div>
    
            </div>
    
        </section>
        <!--///////////////////////////////////////// FOOTER SECTION ///////////////////////////////-->
        <section id="foot">
    
        </section>
    </body>
    
    </html>`
        }
  
module.exports = {makePDF:generateHTML};