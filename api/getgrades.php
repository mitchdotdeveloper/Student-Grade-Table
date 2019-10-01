<?php
require_once('./functions.php');
set_exception_handler('handleErrors');
require_once('./mysqlconnect.php');

$query = "SELECT `g`.`id`, `g`.`name`, `g`.`grade`,
                 `c`.`name` AS `course`
          FROM `courses` AS `c`
          JOIN `grades` AS `g`
          ON `g`.`course_id` = `c`.`id`";

$result = mysqli_query($db, $query);
if ( !$result ) {
  throw new Exception('Query error: ' . mysqli_error($db));
}

$data = [];
while ($row = mysqli_fetch_assoc($result)) {
  $row['id'] = intVal($row['id']);
  $row['grade'] = intVal($row['grade']);
  $data[] = $row;
}

$output = [
  'success' => true,
  'data' => $data
];

$jsonData = json_encode($output);
print($jsonData);

?>
