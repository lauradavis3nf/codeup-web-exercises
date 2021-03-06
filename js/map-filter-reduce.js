"use strict";

(function() {

    // 1. Create js/map-filter-reduce.js and copy users data into it.

    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];


    // 2. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

    const arr3Languages = users.filter(u => u.languages.length >= 3);
    console.log(arr3Languages);


    // 3. Use .map to create an array of strings where each element is a user's email address

    const arrEmails = users.map(u => u.email);
    console.log(arrEmails);


    // 4. Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result
    // to calculate the average.

    let sumYrsExp = users.reduce((sum, usr) => sum += usr.yearsOfExperience, 0);
    let avgYrsExp = sumYrsExp / users.length;
    console.log(`The users have ${sumYrsExp} total years of experience, with an average of ${avgYrsExp} years.`);


    // 5. Use .reduce to get the longest email from the list of users.
    // example from lecture was
    // var bestSalesPerson =  salesPeople.reduce((bestSalesPerson, person) => (bestSalesPerson.units > person.units) ? bestSalesPerson : person, {units: 0});
    // starting value is not technically required in this case because you're not accumulating but comparing values. Good practice to include it anyway.

    let longestEmail = users.reduce((longestEmail, usr) => (longestEmail.email.length > usr.email.length) ? longestEmail : usr, {email: ""});
    console.log(longestEmail.email);


    // 6. Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
    // In the walk-through David changed it to capitalize each name, but I made it match the example output requested.
    let userName = users.reduce((userName, user, index) => {
        if(index < users.length - 1) {
            return userName + `${user.name}, `
        } else {
            return userName + `${user.name}.`
        }
    }, "");
    console.log(`Your instructors are: ${userName}`);


    // Bonus

    // 1. Use .reduce to get the unique list of languages from the list of users.

    // get languages from arrays as comma-separated strings, add comma separator after each one
    let userLang = users.reduce((userLang, user) => userLang + `${user.languages},`, "");
    // remove the trailing comma and convert the string to a sorted array
    const userLangArr = userLang.substring(0, userLang.length - 1).split(",").sort();
    // filter out the unique values leaving an array of unique languages
    let uniqLangStr = userLangArr.filter((element, index, array) => userLangArr.indexOf(element) === index);
    // Join to return it as a string instead of an array: .join(",");
    console.log(uniqLangStr);



    // // David's solution
    // const uniqueLangs = users
    //     .reduce((langList, user) => {
    //         for (let lang of user.languages) {
    //             if(!langList.includes(lang)) {
    //                 langList.push(lang);
    //             }
    //         }
    //         return langList;
    //     }, []);
    // console.log(uniqueLangs);
    //
    // // another solution using Set (we will cover later)
    // let arr = users.reduce((langs ,user) => {
    //     for (let lang of user.languages) {
    //         langs.push(lang);
    //     }
    //     return langs;
    // }, []);
    // let set = new Set(arr);
    // let uniqueLangsQuick = Array.from(set);
    // console.log(uniqueLangsQuick);


})();