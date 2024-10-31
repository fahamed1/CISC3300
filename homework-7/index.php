<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require 'controller/UserController.php';
require 'model/ClassModel.php';

use controller\UserController;
 
$controller = new UserController();

if ($_SERVER['REQUEST_METHOD'] === 'GET' && $_SERVER['REQUEST_URI'] === '/users') {
    $controller->serveJSON();
} else {
    $controller->serveHTML();
}

?>