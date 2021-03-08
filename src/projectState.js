import register1 from "./img/StudentRegister1.PNG";
import register2 from "./img/StudentRegister2.PNG";

import tracker1 from "./img/Covid-Tracker1.PNG";
import tracker2 from "./img/Covid-Tracker2.PNG";

import musicApp1 from "./img/Music1.PNG";
import musicApp2 from "./img/Music2.PNG";

import inventory1 from "./img/SaleInventory1.jpg";
import inventory2 from "./img/SaleInventory2.jpg";

import lithophane1 from "./img/Lithophane1.png";
import lithophane2 from "./img/Lithophane2.png";

import summer1 from "./img/SummerHack1.jpg";
import summer2 from "./img/SummerHack2.jpg";

export const projectState = () => {
    return [
        {
            title: 'Student Register',
            description: 'This is my first medium project with Ansi C and memory allocation',
            mainImg: register1,
            secondaryImg: register2,
            linkPage: "/",
            linkGit: "https://github.com/KhanhDoHoang/Student-Register",
            url: '/work/student-register-project',
            awards: [
                {
                    title: 'Overall:',
                    description: '"This project is made with Ansi C, and working with memory allocation.Student Register uses pointers, multi-dimensional array with header and source code to build and run the product! This project is able to register student to course as well drop the student from course with a small menu."'
                },
                {
                    title: 'Purpose: ',
                    description: '"Students can input their student number, be able to select to enroll and drop out any course."'
                }

            ]
        },
        {
            title: 'The Covid-19 Tracker',
            description: 'React.js was used to make this project in order to track covid-19 positve cases and recoverings around the world. There is a big map on the site where you can hover the mouse to know the numbers of positve, recovering and death cases. Able to click to choose at the top three boxes for active cases, recovering and death. There is the drop down to choose the specific country to show three components. On the right side, there is the general overview for the world. ',
            mainImg: tracker1,
            secondaryImg: tracker2,
            linkPage: "https://covid-19-tracker-e8f7f.web.app/",
            linkGit: "https://github.com/KhanhDoHoang/Covid-Tracker",
            url: '/work/the-covid-19-tracker',
            awards: [
                {
                    title: 'Data',
                    description: '"Working with online API, fetching and sorting by "numeral" library "'
                },
                {
                    title: 'Mapping',
                    description: '"Utilizing leaflet library to make a map, using leaflet and countryInfo from the Database to locate different countries"'
                },
                {
                    title: 'Designing',
                    description: '"Applying @material-ui/core to format and design with frame boxes"'
                },

            ]
        },
        {
            title: 'The Wave Music Application (Self-learning Project)',
            description: 'This is a music web application made by React.js. Made three months ago when I first started learning and engaging myself into React.js.',
            mainImg: musicApp1,
            secondaryImg: musicApp2,
            linkPage: "https://music-application-4bcaf.web.app/",
            linkGit: "https://github.com/KhanhDoHoang/Music-Waves-App",
            url: '/work/the-music-application',
            awards: [
                {
                    title: 'Display: ',
                    description: '"There is a big play disc when you get in the website, which display an image of the song collection from Lofi source "https://chillhop.com/". A tiny libary button on the top right which will display a playlist on the left side when clicked."'
                },
                {
                    title: 'What I learned from this: ',
                    description: '"The hardest thing that I have learned from this project is using library, and manage the components"'
                }
            ]
        },
        {
            title: 'Sales Inventory',
            description: 'Sales Inventory is a project that works out for a large storage that is optimal regarding sorting and checking products',
            mainImg: inventory1,
            secondaryImg: inventory2,
            linkPage: "/",
            linkGit: "https://github.com/KhanhDoHoang/Sales-Inventory",
            url: '/work/sales-inventory',
            awards: [
                {
                    title: 'Overall',
                    description: '"There are 2 versions of sale inventory under branches. First version has option for file reading and input to collect data from files for different items. Second version does not have reading file option but having algorithms and library for date check and using FIFO Queue for checking expired items in the list. Both versions using OOP method and Big O Notation to read and sort datasets."'
                },

                {
                    title: 'What I learned from this: ',
                    description: '"This project strongly utilized Big O Notation method where I used Quick Sort to sort a recursive and inheritance data, then using Comparable to check and call any products to check the quantities. Last version, I used Queue to do FIFO check with time expiration for products."'
                }
            ]
        },
        {
            title: '3D Lithophane Printing',
            description: 'Link to original post with videos: https://khanhdohoang.github.io/HoangDo_Portfolio/Project1.html ',
            mainImg: lithophane1,
            secondaryImg: lithophane2,
            linkPage: "/",
            linkGit: "https://github.com/KhanhDoHoang/3D-Lithophane-Printing",
            url: '/work/3d-lithophane-printing',
            awards: [
                {
                    title: 'Overall: ',
                    description: '"Using Stl for format with algorithm to calculate 3D geometry, applying Object-Oriented Programming with inheritance, UML to call then print out the product with PrintWriter!!"'
                },

                {
                    title: 'What I learned from this: ',
                    description: '"Learning more about multi-dimensional array which was used to applied 2d math to print the images based on provided data. Second lession is about Object Oriented Programming, which is applied throughout the project which has two big branches to read, calculate and print."'
                }
            ]
        },
        {
            title: 'Search the summer away!',
            description: 'Making a website for the summer activity with the hope that summer can last a bit longer with more memories',
            mainImg: summer1,
            secondaryImg: summer2,
            linkPage: "http://www.searchthesummeraway.tech/",
            linkGit: "https://github.com/BearAndBean/Summer-Hack",
            url: '/work/summer-hack',
            awards: [
                {
                    title: 'Overall: ',
                    description: '"This project was made within 2 days by me and my friend for a competition called Summer Hack, which created based on Summer theme. Using Node.js and jQuery to search new cards and list them on the note on the left."'
                },
                {
                    title: 'What I learned from this: ',
                    description: '"This is my first big project with web application development, I was writing the backend of project while my teammates supported the graphic and design. The problem that we tackled at first was stacking images and using function to list the name of the card as an activity to the note and able to delete it by clicking the note. The drawbacks of this project is not really affecting users to go out and do it, it just makes them curious and keeps clicking to find the card they like :)) then easily gets bored."'
                },
            ]
        },

    ];
}