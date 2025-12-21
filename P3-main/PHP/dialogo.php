<?php
$dialogo_inicial = [
    ["speaker" => "mary", "text" => "Hullo, darling."],
    ["speaker" => "patrick", "text" => "Hullo."],
    ["speaker" => "mary", "text" => "Tired, darling?"],
    ["speaker" => "patrick", "text" => "Yes."],
    ["speaker" => "mary", "text" => "I'll get it!"],
    ["speaker" => "patrick", "text" => "Sit down."],
    ["speaker" => "mary", "text" => "Darling, shall I get your slippers?"],
    ["speaker" => "patrick", "text" => "No."],
    ["speaker" => "mary", "text" => "I think it’s a shame that when a policeman gets to be as senior as you, they keep him walking all day."],
    ["speaker" => "patrick", "text" => "..."],
    ["speaker" => "mary", "text" => "Would you like some cheese?"],
    ["speaker" => "patrick", "text" => "No."],
    ["speaker" => "mary", "text" => "If you're too tired to eat out, I can cook something here."],
    ["speaker" => "mary", "text" => "I'll get cheese and crackers first."],
    ["speaker" => "patrick", "text" => "I don't want it!"],
    ["speaker" => "patrick", "text" => "Forget it!"],
    ["speaker" => "mary", "text" => "But darling, you must eat!"],
    ["speaker" => "patrick", "text" => "Sit down! Just for a minute!"],
    ["speaker" => "patrick", "text" => "Go on, sit down..."],
    ["speaker" => "patrick", "text" => "Listen, I've got something to tell you."],
    ["speaker" => "mary", "text" => "What is it, darling?"],
    ["speaker" => "patrick", "text" => "This is going to be a shock..."],
    ["speaker" => "patrick", "text" => "So there it is. I hope there won’t be any fuss."],
    ["speaker" => "mary", "text" => "I'll get the supper."],
    ["speaker" => "patrick", "text" => "For God's sake! Don't make supper for me. I'm going out."]
];

header('Content-Type: application/json; charset=utf-8');
echo json_encode($dialogo_inicial);
