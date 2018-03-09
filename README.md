у всех путей префикс /api
есть еще префикс /testapi , возвращающий моки

post /team - создание команды { team_name, image_url }, {team_id}
get /team - получение информации о команде { team_id }, { team_name, img_url }
get /teams - получение списка команд {}, { team_map : { team_id : team_name } }

post /session - создание сессии { team_id[], session_name}, { session_id}
get /session - получение информации о сессии { session_id }, { session_name, team_ids[] }
get /sessions - получение всех сессий {}, { session_map : { session_id : session_name } }

post /clients - создание клиентов для сессии { session_id, client_number }, { client_ids[] }
get /clients - получение списка всех клиентов сессии { sesion_id }, { client_ids[] }

post /round - создание раунда { session_id, round_name, round_comment }, { round_id (autoincrement) }

get /full_session - получение полной информации о сессии { client_id }, { session_name, round : [ round_id, round_name, round_comment ], team_map[] : [ team_id, team_name, img_url ],  vote_flag}, 

put /vote - ручка для голосования { client_id, round_id, team_id }, { status }
get /stat - получение статистики { client_id, round_id }, { vote_results : { team_id : count } }


get /voters  - получение списка голосующих {}, { voter_ids[]}
delete /voters - удаление списка голосующих { voters_ids[] }, {status}
