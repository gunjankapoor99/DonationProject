const db = require('../config/mongoose');
// const Faqs = require('../models/faqs');

const Faqs = [
    {
        id: 1,
        query: "This is Question One",
        answer: "This is answer One"
    },
    {
        id: 2,
        query: "This is Question Two",
        answer: "This is answer Two"
    },
    {
        id: 3,
        query: "This is Question Three",
        answer: "This is answer Three"
    },
    {
        id: 4,
        query: "This is Question Four",
        answer: "This is answer Four"
    },
    {
        id: 5,
        query: "This is Question One",
        answer: "This is answer One"
    },
    {
        id: 6,
        query: "This is Question One",
        answer: "This is answer One"
    },
    {
        id: 7,
        query: "This is Question One",
        answer: "This is answer One"
    },
    {
        id: 8,
        query: "This is Question One",
        answer: "This is answer One"
    },
    {
        id: 9,
        query: "This is Question One",
        answer: "This is answer One"
    },
    {
        id: 10,
        query: "This is Question One",
        answer: "This is answer One"
    },
    {
        id: 11,
        query: "This is Question One",
        answer: "This is answer One"
    },
    {
        query: "This is Question One",
        answer: "This is answer One"
    },
    {
        query: "This is Question One",
        answer: "This is answer One"
    },
    {
        query: "This is Question One",
        answer: "This is answer One"
    },
    {
        query: "This is Question One",
        answer: "This is answer One"
    },
    {
        query: "This is Question One",
        answer: "This is answer One"
    },
    {
        query: "This is Question 17",
        answer: "This is answer 17"
    },
    {
        query: "This is Question 18",
        answer: "This is answer 18"
    }
];

module.exports.faq = function(req, res){ 
    return res.render('faq', {
        title: "FAQs",
        message: "This is our faqs page",
        faqs_list: Faqs
    });

};