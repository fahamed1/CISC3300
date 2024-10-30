<?php
class Person {
    public string $name;
    public int $age;
    protected int $birthMonth;

    public function __construct($name, $age, $birthMonth) {
        $this->name = $name;
        $this->age = $age;
    }

    public function setBirthMonth($birthMonth)
    {
        $this->birthMonth = $birthMonth;

    }

    public function getBirthMonth()
    {
        return $this->birthMonth;
    }

    public static function staticMethod(){
        echo 'this is a Person';
    }
}

?>