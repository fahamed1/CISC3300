<?php
namespace models;

class User {
    public function getAllUsers() {
        return [
            [
                'id' => 1, 'name' => 'Helen'
            ],
            [
                'id' => 2,'name' => 'Katie'
            ],
            [
                'id' => 3,'name' => 'Phil'
            ]
        ];
    }
}

?>