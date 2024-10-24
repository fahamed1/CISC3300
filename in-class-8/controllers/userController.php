<?php
namespace controllers;
use models\User;

class UserController {

    public function index() {
        $user = new User();

        $allUser = $user->getAllUsers();

        var_dump($allUser);

    }

}

?>