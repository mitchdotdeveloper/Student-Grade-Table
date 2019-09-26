<?php

if (!function_exists('handleErrors')) {
  function handleErrors ( $errorObj ) {
    $data = [
      'success' => false,
      'error' => $errorObj->getMessage()
    ];

    $jsonData = json_encode( $data );
    print( $jsonData );
  }
}

?>
