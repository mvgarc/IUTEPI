<?php

class Response
{
    public static function success($message, $data = [])
    {
        http_response_code(200);
        return json_encode([
            "status" => "success",
            "message" => $message,
            "data" => $data
        ], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    }

    public static function error($message, $code = 400)
    {
        http_response_code($code);
        return json_encode([
            "status" => "error",
            "message" => $message
        ], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    }
}
