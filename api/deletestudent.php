<?php
require_once('./functions.php');
set_exception_handler('handleErrors');
require_once('./mysqlconnect.php');

$query = "DELETE FROM `grades`
          WHERE `id` = {$_POST['student_id']}";

$result = mysqli_query($db, $query);
if (!$result) {
  throw new Exception('Query error: ' . mysqli_error($db));
}

$jsonData = json_encode(['success'=>true]);
print($jsonData);
