<?php

$petsArray = [
    'name' => 'Tofu',
    'age' => 2,
    'specie' => 'Cat',
    'breed' => 'Ragdo;;'
  ];

  foreach ($petsArray as $key => $value) {
    echo $key . ", " . $value . "<br>"; 
  }

  function calculateAmount(float $quantity, float $default = 2.5) : float {
    return $quantity * $default;    
  }

  echo calculateAmount(10.0, 3.5);

?>

