<?php

namespace model; 

class UserModel {
    public function getAllUsers() {
        return [
            [
                'age' => 32, 'name' => 'Kitty'
            ],
            [
                'age' => 21,'name' => 'Bilal'
            ],
            [
                'age' => 3,'name' => 'Mary'
            ]
        ];
    }
}
?>