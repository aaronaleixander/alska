<?php
/*
    Names: Aaron Utterback
    Date: March 2021
    File: index.php
*/

// Turn on error reporting
ini_set('display_errors', 1);
error_reporting(E_ALL);

// start session
session_start();

//Require the autoload file
require_once('vendor/autoload.php');

// Create an instance of the Base class
$f3 = Base::instance();
$f3->set('DEBUG', 3);

//Define a default route (home page)
$f3->route('GET|POST /', function ($f3) {
    // validate name
    // destroy session when returning to home page
    session_destroy();
    if(isset($_POST['player-name'])){
        $_SESSION['player'] = $_POST['player-name'];
    }

    $view = new Template();
    echo $view->render('views/home.html');
});

// PLAY
$f3->route('GET|POST /play', function () {
    if(isset($_POST['player-name'])){
        $_SESSION['player'] = $_POST['player-name'];
    }
    //var_dump($_SESSION);
    $view = new Template();
    echo $view->render('views/play.html');
});

// TOP SCORES - not implemented
$f3->route('GET|POST /scores', function () {
    $view = new Template();
    echo $view->render('views/scores.html');
});

// Run fat-free
$f3->run();