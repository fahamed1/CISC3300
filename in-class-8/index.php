<?php
require 'controllers/userController.php';
require 'models/User.php';
use controllers\UserController;

$new_object = new UserController();
$new_object->index();

?>