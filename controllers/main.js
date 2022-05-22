var express = require('express');
var router = express.Router();
var path = require('path');
const got = require('got');

router.get('/', async function(req, res, next) {
    res.render('public/index2', { layout: "empty", page_title: 'Welcome', page_description:"" });
});


router.route('/quiz').get(async function(req, res, next) {
    res.redirect('/dashboard')
});


router.get('/error', function(req, res, next) {
    res.render('public/error', { layout: "empty", page_title: 'Error'});
});

router.get('/robots.txt', (req,res,next)=>{
    res.sendFile(path.resolve('public/robots.txt') );
});

router.get('/overview', async function(req, res, next) {
    res.render('public/course_overview', { layout: "candidate", no_navbar: true, page_title: 'Welcome', page_description:"A brief overview, about Lien Writer® software. Lien Writing software is designed to offer an easy to use tool for printing forms for the mechanics’ lien process. A user can enter their applicable job data and print the forms they need in moments." });
});

router.get('/day1', async function(req, res, next) {
    res.render('public/content/day1', { layout: "candidate", no_navbar: true, page_title: 'Day 1', page_description:"A brief overview, about Lien Writer® software. Lien Writing software is designed to offer an easy to use tool for printing forms for the mechanics’ lien process. A user can enter their applicable job data and print the forms they need in moments." });
});

router.get('/day2', async function(req, res, next) {
    res.render('public/content/day2', { layout: "candidate", no_navbar: true, page_title: 'Day 2', page_description:" " });
});

router.get('/day3', async function(req, res, next) {
    res.render('public/content/day3', { layout: "candidate", no_navbar: true, page_title: 'Day 3', page_description:" " });
});

router.get('/day4', async function(req, res, next) {
    res.render('public/content/day4', { layout: "candidate", no_navbar: true, page_title: 'Day 4', page_description:" " });
});

router.get('/day5', async function(req, res, next) {
    res.render('public/content/day5', { layout: "candidate", no_navbar: true, page_title: 'Day 5', page_description:" " });
});

router.get('/day6', async function(req, res, next) {
    res.render('public/content/day6', { layout: "candidate", no_navbar: true, page_title: 'Day 6', page_description:" " });
});

router.get('/dashboard', async function(req, res, next) {
    week = []; week_age = 15;
    for (i = 0; i < 12; i++) {if(i>week_age){week.push(false);} else{week.push(true);}}
    res.render('public/dashboard', { layout: "candidate", week: week, page_title: 'Welcome', page_description:"" });
});

router.get('/leaderboard',async function(req, res, next) {
    res.render('public/leaderboard', { layout: "candidate", page_title: 'Welcome', page_description:" " });
});

router.get('/internship', async function(req, res, next) {
    res.render('public/internship', { layout: "candidate", page_title: 'Welcome', page_description:" " });
});

module.exports = router;
