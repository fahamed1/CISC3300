<?php

namespace controller;

use model\UserModel;


class UserController {
    public function serveHTML() {
        include_once(__DIR__ . '/../views/views.html');
    }

    public function serveJSON() {
        $userModel = new UserModel();
        $users = $userModel->getAllUsers();
        header('Content-Type: application/json');
        echo json_encode($users);
    }
}

?>