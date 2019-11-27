const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const createPDF = require("./makePDF.js");
const stringify = require('json-stringify-safe');
const downloadImg = require('image-downloader');

var pdf = require('html-pdf');
let profileImage;
let username;
let googleMapsLink;
let gitUrl;
let userBlog;
let bio;
let numRepositories;
let numFollowers;
let numGithubStars;
let numOfUsersFollowing;
let data = {};
let finalCount = 0;

inquirer
    .prompt([{
        type: "input",
        message: "Enter your GitHub username",
        name: "username"
    }, {
        type: 'list',
        name: 'favorite_color',
        message: 'What is your favorite color?',
        choices: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple'],

    }])
    .then(function ({ username, favorite_color }) {
        const queryUrl = `https://api.github.com/users/${username}`;
        console.log("Fetching Profile Data...")
        axios
            .get(queryUrl)
            .then(function (res) {
                //console.log(res.data);
                let newnewArray = [];
                let i = 0;
                //////////////////// STORE DATA TO DATA OBJECT ///////////////////////////////
                data.profileImage = res.data.avatar_url;

                data.user = res.data.login;

                data.googleMapsLink = "www.google.com/maps/place/" + res.data.location;
                data.location = res.data.location;

                data.gitUrl = res.data.html_url;

                data.userBlog = res.data.blog;

                data.bio = res.data.bio;

                data.numRepositories = res.data.public_repos;

                data.numFollowers = res.data.followers;



                data.numOfUsersFollowing = res.data.following;

                data.color = favorite_color;
               
               ///////////////////////FOR FILE TESTING ///////////////////////////
               /*
                fs.writeFile("mainText.json", stringify(res), (err) => {
                    if (err) throw err;
                    console.log("File Saved")
                });
                */

                const queryStarredUrl = `https://api.github.com/users/${username}/starred`;
                console.log("Fetching Star Gazer Data...")
                axios
                    .get(queryStarredUrl)
                    .then(function (response) {
                        //console.log(response.data[0].stargazers_count)
                        for (let i = 0; i < response.data.length; i++) {
                            //console.log(response.data[i].stargazers_count)
                            let currentCount = response.data[i].stargazers_count;
                            finalCount += currentCount;
                            //console.log(finalCount);
                        }
                        data.numGithubStars = finalCount
                        // console.log(data)



                        var options = { format: 'Letter' };

                        pdf.create(createPDF.makePDF(data), options).toFile(`${data.user}_profile.pdf`, function (err, resp) {
                            if (err) return console.log(err);
                            //console.log(resp); // { filename: '/app/businesscard.pdf' }
                            console.log(`Your file was successfully saved to ${data.user}_profile.pdf`)
                        });




                        /////////////////////// STORE STARRED DATA //////////////
                        /*
                        fs.writeFile("starredText.json", stringify(response), (err) => {
                            if (err) throw err;
                            console.log("File Saved")
                        });
                        */
                    });

                //console.log(res)
            });



    });


