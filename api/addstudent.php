<?php
require_once('./functions.php');
set_exception_handler('handleErrors');
require_once('./mysqlconnect.php');

$query = "SELECT `id` FROM `courses`
          WHERE `name` = '{$_POST['course']}'";

$result = mysqli_query($db, $query);
if (!$result || !mysqli_num_rows($result)) {
  throw new Exception('Query error: ' . mysqli_error($db));
}

$result = mysqli_fetch_assoc($result)['id'];
$query = "INSERT INTO `grades` (`name`, `course_id`, `grade`)
          VALUES ('{$_POST['name']}', {$result}, {$_POST['grade']})";

$result = mysqli_query($db, $query);
if (!$result) {
  throw new Exception('Query error: ' . mysqli_error($db));
}

$jsonData = json_encode(['success'=>true]);
print($jsonData);
?>
