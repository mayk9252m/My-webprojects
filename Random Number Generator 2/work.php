<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the number of dice and dice type from the form
    $numDice = $_POST["numDice"];
    $diceType = $_POST["diceType"];

    // Function to generate a random number between 1 and the dice type
    function rollDice($diceType) {
        return rand(1, $diceType);
    }

    // Generate and display the random numbers
    echo "<h2>Random Numbers:</h2>";
    for ($i = 1; $i <= $numDice; $i++) {
        $result = rollDice($diceType);
        echo "Dice $i: $result<br>";
    }
}
?>
