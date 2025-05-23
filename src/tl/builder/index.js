const builderMap = {
  'mt_vector': function(params) {
    this.int32(481674261);
  },
  'mt_resPQ': function(params) {
    this.int32(85337187);
    this.int128(params.nonce);
    this.int128(params.server_nonce);
    this.bytes(params.pq);
    this.vector(this.long, params.server_public_key_fingerprints);
  },
  'mt_p_q_inner_data_dc': function(params) {
    this.int32(-1443537003);
    this.bytes(params.pq);
    this.bytes(params.p);
    this.bytes(params.q);
    this.int128(params.nonce);
    this.int128(params.server_nonce);
    this.int256(params.new_nonce);
    this.int(params.dc);
  },
  'mt_p_q_inner_data_temp_dc': function(params) {
    this.int32(1459478408);
    this.bytes(params.pq);
    this.bytes(params.p);
    this.bytes(params.q);
    this.int128(params.nonce);
    this.int128(params.server_nonce);
    this.int256(params.new_nonce);
    this.int(params.dc);
    this.int(params.expires_in);
  },
  'mt_server_DH_params_ok': function(params) {
    this.int32(-790100132);
    this.int128(params.nonce);
    this.int128(params.server_nonce);
    this.bytes(params.encrypted_answer);
  },
  'mt_server_DH_inner_data': function(params) {
    this.int32(-1249309254);
    this.int128(params.nonce);
    this.int128(params.server_nonce);
    this.int(params.g);
    this.bytes(params.dh_prime);
    this.bytes(params.g_a);
    this.int(params.server_time);
  },
  'mt_client_DH_inner_data': function(params) {
    this.int32(1715713620);
    this.int128(params.nonce);
    this.int128(params.server_nonce);
    this.long(params.retry_id);
    this.bytes(params.g_b);
  },
  'mt_dh_gen_ok': function(params) {
    this.int32(1003222836);
    this.int128(params.nonce);
    this.int128(params.server_nonce);
    this.int128(params.new_nonce_hash1);
  },
  'mt_dh_gen_retry': function(params) {
    this.int32(1188831161);
    this.int128(params.nonce);
    this.int128(params.server_nonce);
    this.int128(params.new_nonce_hash2);
  },
  'mt_dh_gen_fail': function(params) {
    this.int32(-1499615742);
    this.int128(params.nonce);
    this.int128(params.server_nonce);
    this.int128(params.new_nonce_hash3);
  },
  'mt_bind_auth_key_inner': function(params) {
    this.int32(1973679973);
    this.long(params.nonce);
    this.long(params.temp_auth_key_id);
    this.long(params.perm_auth_key_id);
    this.long(params.temp_session_id);
    this.int(params.expires_at);
  },
  'mt_rpc_result': function(params) {
    this.int32(-212046591);
    this.long(params.req_msg_id);
    this.predicate(params.result);
  },
  'mt_rpc_error': function(params) {
    this.int32(558156313);
    this.int(params.error_code);
    this.string(params.error_message);
  },
  'mt_rpc_answer_unknown': function(params) {
    this.int32(1579864942);
  },
  'mt_rpc_answer_dropped_running': function(params) {
    this.int32(-847714938);
  },
  'mt_rpc_answer_dropped': function(params) {
    this.int32(-1539647305);
    this.long(params.msg_id);
    this.int(params.seq_no);
    this.int(params.bytes);
  },
  'mt_future_salt': function(params) {
    this.int32(155834844);
    this.int(params.valid_since);
    this.int(params.valid_until);
    this.long(params.salt);
  },
  'mt_future_salts': function(params) {
    this.int32(-1370486635);
    this.long(params.req_msg_id);
    this.int(params.now);
    this.vector(this.predicate, params.salts);
  },
  'mt_pong': function(params) {
    this.int32(880243653);
    this.long(params.msg_id);
    this.long(params.ping_id);
  },
  'mt_destroy_session_ok': function(params) {
    this.int32(-501201412);
    this.long(params.session_id);
  },
  'mt_destroy_session_none': function(params) {
    this.int32(1658015945);
    this.long(params.session_id);
  },
  'mt_new_session_created': function(params) {
    this.int32(-1631450872);
    this.long(params.first_msg_id);
    this.long(params.unique_id);
    this.long(params.server_salt);
  },
  'mt_msg_container': function(params) {
    this.int32(1945237724);
    this.vector(this.predicate, params.messages);
  },
  'mt_message': function(params) {
    this.int32(1538843921);
    this.long(params.msg_id);
    this.int(params.seqno);
    this.int(params.bytes);
    this.predicate(params.body);
  },
  'mt_msg_copy': function(params) {
    this.int32(-530561358);
    this.predicate(params.orig_message);
  },
  'mt_gzip_packed': function(params) {
    this.int32(812830625);
    this.bytes(params.packed_data);
  },
  'mt_msgs_ack': function(params) {
    this.int32(1658238041);
    this.vector(this.long, params.msg_ids);
  },
  'mt_bad_msg_notification': function(params) {
    this.int32(-1477445615);
    this.long(params.bad_msg_id);
    this.int(params.bad_msg_seqno);
    this.int(params.error_code);
  },
  'mt_bad_server_salt': function(params) {
    this.int32(-307542917);
    this.long(params.bad_msg_id);
    this.int(params.bad_msg_seqno);
    this.int(params.error_code);
    this.long(params.new_server_salt);
  },
  'mt_msg_resend_req': function(params) {
    this.int32(2105940488);
    this.vector(this.long, params.msg_ids);
  },
  'mt_msgs_state_req': function(params) {
    this.int32(-630588590);
    this.vector(this.long, params.msg_ids);
  },
  'mt_msgs_state_info': function(params) {
    this.int32(81704317);
    this.long(params.req_msg_id);
    this.bytes(params.info);
  },
  'mt_msgs_all_info': function(params) {
    this.int32(-1933520591);
    this.vector(this.long, params.msg_ids);
    this.bytes(params.info);
  },
  'mt_msg_detailed_info': function(params) {
    this.int32(661470918);
    this.long(params.msg_id);
    this.long(params.answer_msg_id);
    this.int(params.bytes);
    this.int(params.status);
  },
  'mt_msg_new_detailed_info': function(params) {
    this.int32(-2137147681);
    this.long(params.answer_msg_id);
    this.int(params.bytes);
    this.int(params.status);
  },
  'mt_destroy_auth_key_ok': function(params) {
    this.int32(-161422892);
  },
  'mt_destroy_auth_key_none': function(params) {
    this.int32(178201177);
  },
  'mt_destroy_auth_key_fail': function(params) {
    this.int32(-368010477);
  },
  'mt_eitaa_updates_expire_token': function(params) {
    this.int32(-601545863);
  },
  'mt_eitaa_updates_token': function(params) {
    this.int32(-1519642063);
    this.string(params.token);
    this.int(params.expire);
    this.int(params.date);
  },
  'mt_eitaa_token_updating': function(params) {
    this.int32(-601545867);
  },
  'mt_adsOpenLinkAction': function(params) {
    this.int32(-899560710);
    this.string(params.link);
  },
  'mt_adsOpenExternalLinkAction': function(params) {
    this.int32(-1661694581);
    this.string(params.link);
  },
  'mt_adsIntentAction': function(params) {
    this.int32(155099767);
    this.string(params.uri);
  },
  'mt_adsAdPack': function(params) {
    this.int32(-545239366);
    this.string(params.title);
    this.vector(this.predicate, params.ads);
  },
  'mt_undefined': function(params) {
    this.int32(812057886);
    const flags = (this.has(params.pinnedBackground) << 2) | (this.has(params.muted) << 3) | (this.has(params.verified) << 4);
    this.int32(flags);
    this.int(params.expire);
    this.int(params.type);
    this.int(params.id);
    this.predicate(params.action);
    this.string(params.title);
    this.string(params.badge);
    this.string(params.message);
    this.vector(this.predicate, params.thumbs);
    this.int(params.unreadCount);
  },
  'mt_undefined': function(params) {
    this.int32(-1205172244);
    this.int(params.expires);
  },
  'mt_eitaaAppInfo': function(params) {
    this.int32(1635347945);
    this.int(params.build_version);
    this.string(params.device_model);
    this.string(params.system_version);
    this.string(params.app_version);
    this.string(params.lang_code);
    this.string(params.sign);
  },
  'mt_account.noPassword': function(params) {
    this.int32(1587643126);
    this.bytes(params.new_salt);
    this.bytes(params.new_secure_salt);
    this.bytes(params.secure_random);
    this.string(params.email_unconfirmed_pattern);
  },
  'mt_req_pq_multi': function(params) {
    this.int32(-1099002127);
    this.int128(params.nonce);
  },
  'mt_req_DH_params': function(params) {
    this.int32(-686627650);
    this.int128(params.nonce);
    this.int128(params.server_nonce);
    this.bytes(params.p);
    this.bytes(params.q);
    this.long(params.public_key_fingerprint);
    this.bytes(params.encrypted_data);
  },
  'mt_set_client_DH_params': function(params) {
    this.int32(-184262881);
    this.int128(params.nonce);
    this.int128(params.server_nonce);
    this.bytes(params.encrypted_data);
  },
  'mt_rpc_drop_answer': function(params) {
    this.int32(1491380032);
    this.long(params.req_msg_id);
  },
  'mt_get_future_salts': function(params) {
    this.int32(-1188971260);
    this.int(params.num);
  },
  'mt_ping': function(params) {
    this.int32(2059302892);
    this.long(params.ping_id);
  },
  'mt_ping_delay_disconnect': function(params) {
    this.int32(-213746804);
    this.long(params.ping_id);
    this.int(params.disconnect_delay);
  },
  'mt_destroy_session': function(params) {
    this.int32(-414113498);
    this.long(params.session_id);
  },
  'mt_http_wait': function(params) {
    this.int32(-1835453025);
    this.int(params.max_delay);
    this.int(params.wait_after);
    this.int(params.max_wait);
  },
  'mt_destroy_auth_key': function(params) {
    this.int32(-784117408);
  },
  'mt_eitaaUpdatesExpireToken': function(params) {
    this.int32(-601545863);
  },
  'mt_eitaaTokenUpdating': function(params) {
    this.int32(-601545867);
  },
  'boolFalse': function(params) {
    this.int32(-1132882121);
  },
  'boolTrue': function(params) {
    this.int32(-1720552011);
  },
  'true': function(params) {
    this.int32(1072550713);
  },
  'vector': function(params) {
    this.int32(481674261);
  },
  'error': function(params) {
    this.int32(-994444869);
    this.int(params.code);
    this.string(params.text);
  },
  'null': function(params) {
    this.int32(1450380236);
  },
  'inputPeerEmpty': function(params) {
    this.int32(2134579434);
  },
  'inputPeerSelf': function(params) {
    this.int32(2107670217);
  },
  'inputPeerChat': function(params) {
    this.int32(900291769);
    this.long(params.chat_id);
  },
  'inputPeerUser': function(params) {
    this.int32(-571955892);
    this.long(params.user_id);
    this.long(params.access_hash);
  },
  'inputPeerChannel': function(params) {
    this.int32(666680316);
    this.long(params.channel_id);
    this.long(params.access_hash);
  },
  'inputPeerUserFromMessage': function(params) {
    this.int32(-1468331492);
    this.predicate(params.peer);
    this.int(params.msg_id);
    this.long(params.user_id);
  },
  'inputPeerChannelFromMessage': function(params) {
    this.int32(-1121318848);
    this.predicate(params.peer);
    this.int(params.msg_id);
    this.long(params.channel_id);
  },
  'inputUserEmpty': function(params) {
    this.int32(-1182234929);
  },
  'inputUserSelf': function(params) {
    this.int32(-138301121);
  },
  'inputUser': function(params) {
    this.int32(-233744186);
    this.long(params.user_id);
    this.long(params.access_hash);
  },
  'inputUserFromMessage': function(params) {
    this.int32(497305826);
    this.predicate(params.peer);
    this.int(params.msg_id);
    this.long(params.user_id);
  },
  'inputPhoneContact': function(params) {
    this.int32(-208488460);
    this.long(params.client_id);
    this.string(params.phone);
    this.string(params.first_name);
    this.string(params.last_name);
  },
  'inputFile': function(params) {
    this.int32(-181407105);
    this.long(params.id);
    this.int(params.parts);
    this.string(params.name);
    this.string(params.md5_checksum);
  },
  'inputFileBig': function(params) {
    this.int32(-95482955);
    this.long(params.id);
    this.int(params.parts);
    this.string(params.name);
  },
  'inputMediaEmpty': function(params) {
    this.int32(-1771768449);
  },
  'inputMediaUploadedPhoto': function(params) {
    this.int32(505969924);
    const flags = (this.has(params.stickers) << 0) | (this.has(params.ttl_seconds) << 1);
    this.int32(flags);
    this.predicate(params.file);
    this.flagVector(this.predicate, params.stickers);
    this.flag(this.int, params.ttl_seconds);
  },
  'inputMediaPhoto': function(params) {
    this.int32(-1279654347);
    const flags = (this.has(params.ttl_seconds) << 0);
    this.int32(flags);
    this.predicate(params.id);
    this.flag(this.int, params.ttl_seconds);
  },
  'inputMediaGeoPoint': function(params) {
    this.int32(-104578748);
    this.predicate(params.geo_point);
  },
  'inputMediaContact': function(params) {
    this.int32(-122978821);
    this.string(params.phone_number);
    this.string(params.first_name);
    this.string(params.last_name);
    this.string(params.vcard);
  },
  'inputMediaUploadedDocument': function(params) {
    this.int32(1530447553);
    const flags = (this.has(params.nosound_video) << 3) | (this.has(params.force_file) << 4) | (this.has(params.thumb) << 2) | (this.has(params.stickers) << 0) | (this.has(params.ttl_seconds) << 1);
    this.int32(flags);
    this.predicate(params.file);
    this.flag(this.predicate, params.thumb);
    this.string(params.mime_type);
    this.vector(this.predicate, params.attributes);
    this.flagVector(this.predicate, params.stickers);
    this.flag(this.int, params.ttl_seconds);
  },
  'inputMediaDocument': function(params) {
    this.int32(860303448);
    const flags = (this.has(params.ttl_seconds) << 0) | (this.has(params.query) << 1);
    this.int32(flags);
    this.predicate(params.id);
    this.flag(this.int, params.ttl_seconds);
    this.flag(this.string, params.query);
  },
  'inputMediaVenue': function(params) {
    this.int32(-1052959727);
    this.predicate(params.geo_point);
    this.string(params.title);
    this.string(params.address);
    this.string(params.provider);
    this.string(params.venue_id);
    this.string(params.venue_type);
  },
  'inputMediaPhotoExternal': function(params) {
    this.int32(-440664550);
    const flags = (this.has(params.ttl_seconds) << 0);
    this.int32(flags);
    this.string(params.url);
    this.flag(this.int, params.ttl_seconds);
  },
  'inputMediaDocumentExternal': function(params) {
    this.int32(-78455655);
    const flags = (this.has(params.ttl_seconds) << 0);
    this.int32(flags);
    this.string(params.url);
    this.flag(this.int, params.ttl_seconds);
  },
  'inputMediaGame': function(params) {
    this.int32(-750828557);
    this.predicate(params.id);
  },
  'inputMediaInvoice': function(params) {
    this.int32(-646342540);
    const flags = (this.has(params.photo) << 0) | (this.has(params.start_param) << 1);
    this.int32(flags);
    this.string(params.title);
    this.string(params.description);
    this.flag(this.predicate, params.photo);
    this.predicate(params.invoice);
    this.bytes(params.payload);
    this.string(params.provider);
    this.predicate(params.provider_data);
    this.flag(this.string, params.start_param);
  },
  'inputMediaGeoLive': function(params) {
    this.int32(-1759532989);
    const flags = (this.has(params.stopped) << 0) | (this.has(params.heading) << 2) | (this.has(params.period) << 1) | (this.has(params.proximity_notification_radius) << 3);
    this.int32(flags);
    this.predicate(params.geo_point);
    this.flag(this.int, params.heading);
    this.flag(this.int, params.period);
    this.flag(this.int, params.proximity_notification_radius);
  },
  'inputMediaPoll': function(params) {
    this.int32(261416433);
    const flags = (this.has(params.correct_answers) << 0) | (this.has(params.solution) << 1) | (this.has(params.solution_entities) << 1);
    this.int32(flags);
    this.predicate(params.poll);
    this.flagVector(this.bytes, params.correct_answers);
    this.flag(this.string, params.solution);
    this.flagVector(this.predicate, params.solution_entities);
  },
  'inputMediaDice': function(params) {
    this.int32(-428884101);
    this.string(params.emoticon);
  },
  'inputChatPhotoEmpty': function(params) {
    this.int32(480546647);
  },
  'inputChatUploadedPhoto': function(params) {
    this.int32(-968723890);
    const flags = (this.has(params.file) << 0) | (this.has(params.video) << 1) | (this.has(params.video_start_ts) << 2);
    this.int32(flags);
    this.flag(this.predicate, params.file);
    this.flag(this.predicate, params.video);
    this.flag(this.double, params.video_start_ts);
  },
  'inputChatPhoto': function(params) {
    this.int32(-1991004873);
    this.predicate(params.id);
  },
  'inputGeoPointEmpty': function(params) {
    this.int32(-457104426);
  },
  'inputGeoPoint': function(params) {
    this.int32(1210199983);
    const flags = (this.has(params.accuracy_radius) << 0);
    this.int32(flags);
    this.double(params.lat);
    this.double(params.long);
    this.flag(this.int, params.accuracy_radius);
  },
  'inputPhotoEmpty': function(params) {
    this.int32(483901197);
  },
  'inputPhoto': function(params) {
    this.int32(1001634122);
    this.long(params.id);
    this.long(params.access_hash);
    this.bytes(params.file_reference);
  },
  'inputFileLocation': function(params) {
    this.int32(-539317279);
    this.long(params.volume_id);
    this.int(params.local_id);
    this.long(params.secret);
    this.bytes(params.file_reference);
  },
  'inputEncryptedFileLocation': function(params) {
    this.int32(-182231723);
    this.long(params.id);
    this.long(params.access_hash);
  },
  'inputDocumentFileLocation': function(params) {
    this.int32(-1160743548);
    this.long(params.id);
    this.long(params.access_hash);
    this.bytes(params.file_reference);
    this.string(params.thumb_size);
  },
  'inputSecureFileLocation': function(params) {
    this.int32(-876089816);
    this.long(params.id);
    this.long(params.access_hash);
  },
  'inputTakeoutFileLocation': function(params) {
    this.int32(700340377);
  },
  'inputPhotoFileLocation': function(params) {
    this.int32(1075322878);
    this.long(params.id);
    this.long(params.access_hash);
    this.bytes(params.file_reference);
    this.string(params.thumb_size);
  },
  'inputPhotoLegacyFileLocation': function(params) {
    this.int32(-667654413);
    this.long(params.id);
    this.long(params.access_hash);
    this.bytes(params.file_reference);
    this.long(params.volume_id);
    this.int(params.local_id);
    this.long(params.secret);
  },
  'inputPeerPhotoFileLocation': function(params) {
    this.int32(925204121);
    const flags = (this.has(params.big) << 0);
    this.int32(flags);
    this.predicate(params.peer);
    this.long(params.photo_id);
    this.long(params.volume_id);
    this.int(params.local_id);
  },
  'inputStickerSetThumb': function(params) {
    this.int32(-1652231205);
    this.predicate(params.stickerset);
    this.int(params.thumb_version);
  },
  'inputGroupCallStream': function(params) {
    this.int32(93890858);
    const flags = (this.has(params.video_channel) << 0) | (this.has(params.video_quality) << 0);
    this.int32(flags);
    this.predicate(params.call);
    this.long(params.time_ms);
    this.int(params.scale);
    this.flag(this.int, params.video_channel);
    this.flag(this.int, params.video_quality);
  },
  'peerUser': function(params) {
    this.int32(1498486562);
    this.long(params.user_id);
  },
  'peerChat': function(params) {
    this.int32(918946202);
    this.long(params.chat_id);
  },
  'peerChannel': function(params) {
    this.int32(-1566230754);
    this.long(params.channel_id);
  },
  'storage.fileUnknown': function(params) {
    this.int32(-1432995067);
  },
  'storage.filePartial': function(params) {
    this.int32(1086091090);
  },
  'storage.fileJpeg': function(params) {
    this.int32(8322574);
  },
  'storage.fileGif': function(params) {
    this.int32(-891180321);
  },
  'storage.filePng': function(params) {
    this.int32(172975040);
  },
  'storage.filePdf': function(params) {
    this.int32(-1373745011);
  },
  'storage.fileMp3': function(params) {
    this.int32(1384777335);
  },
  'storage.fileMov': function(params) {
    this.int32(1258941372);
  },
  'storage.fileMp4': function(params) {
    this.int32(-1278304028);
  },
  'storage.fileWebp': function(params) {
    this.int32(276907596);
  },
  'userEmpty': function(params) {
    this.int32(-742634630);
    this.long(params.id);
  },
  'user': function(params) {
    this.int32(1073147056);
    const flags = (this.has(params.self) << 10) | (this.has(params.contact) << 11) | (this.has(params.mutual_contact) << 12) | (this.has(params.deleted) << 13) | (this.has(params.bot) << 14) | (this.has(params.bot_chat_history) << 15) | (this.has(params.bot_nochats) << 16) | (this.has(params.verified) << 17) | (this.has(params.restricted) << 18) | (this.has(params.min) << 20) | (this.has(params.bot_inline_geo) << 21) | (this.has(params.support) << 23) | (this.has(params.scam) << 24) | (this.has(params.apply_min_photo) << 25) | (this.has(params.fake) << 26) | (this.has(params.access_hash) << 0) | (this.has(params.first_name) << 1) | (this.has(params.last_name) << 2) | (this.has(params.username) << 3) | (this.has(params.phone) << 4) | (this.has(params.photo) << 5) | (this.has(params.status) << 6) | (this.has(params.bot_info_version) << 14) | (this.has(params.restriction_reason) << 18) | (this.has(params.bot_inline_placeholder) << 19) | (this.has(params.lang_code) << 22);
    this.int32(flags);
    this.long(params.id);
    this.flag(this.long, params.access_hash);
    this.flag(this.string, params.first_name);
    this.flag(this.string, params.last_name);
    this.flag(this.string, params.username);
    this.flag(this.string, params.phone);
    this.flag(this.predicate, params.photo);
    this.flag(this.predicate, params.status);
    this.flag(this.int, params.bot_info_version);
    this.flagVector(this.predicate, params.restriction_reason);
    this.flag(this.string, params.bot_inline_placeholder);
    this.flag(this.string, params.lang_code);
  },
  'userProfilePhotoEmpty': function(params) {
    this.int32(1326562017);
  },
  'userProfilePhoto': function(params) {
    this.int32(1775479590);
    const flags = (this.has(params.has_video) << 0);
    this.int32(flags);
    this.long(params.photo_id);
    this.predicate(params.photo_small);
    this.predicate(params.photo_big);
    this.int(params.dc_id);
  },
  'userStatusEmpty': function(params) {
    this.int32(164646985);
  },
  'userStatusOnline': function(params) {
    this.int32(-306628279);
    this.int(params.expires);
  },
  'userStatusOffline': function(params) {
    this.int32(9203775);
    this.int(params.was_online);
  },
  'userStatusRecently': function(params) {
    this.int32(-496024847);
  },
  'userStatusLastWeek': function(params) {
    this.int32(129960444);
  },
  'userStatusLastMonth': function(params) {
    this.int32(2011940674);
  },
  'chatEmpty': function(params) {
    this.int32(693512293);
    this.long(params.id);
  },
  'chat': function(params) {
    this.int32(1103884886);
    const flags = (this.has(params.creator) << 0) | (this.has(params.kicked) << 1) | (this.has(params.left) << 2) | (this.has(params.deactivated) << 5) | (this.has(params.call_active) << 23) | (this.has(params.call_not_empty) << 24) | (this.has(params.migrated_to) << 6) | (this.has(params.admin_rights) << 14) | (this.has(params.default_banned_rights) << 18);
    this.int32(flags);
    this.long(params.id);
    this.string(params.title);
    this.predicate(params.photo);
    this.int(params.participants_count);
    this.int(params.date);
    this.int(params.version);
    this.flag(this.predicate, params.migrated_to);
    this.flag(this.predicate, params.admin_rights);
    this.flag(this.predicate, params.default_banned_rights);
  },
  'chatForbidden': function(params) {
    this.int32(1704108455);
    this.long(params.id);
    this.string(params.title);
  },
  'channel': function(params) {
    this.int32(-2107528095);
    const flags = (this.has(params.creator) << 0) | (this.has(params.left) << 2) | (this.has(params.broadcast) << 5) | (this.has(params.verified) << 7) | (this.has(params.megagroup) << 8) | (this.has(params.restricted) << 9) | (this.has(params.signatures) << 11) | (this.has(params.min) << 12) | (this.has(params.scam) << 19) | (this.has(params.has_link) << 20) | (this.has(params.has_geo) << 21) | (this.has(params.slowmode_enabled) << 22) | (this.has(params.call_active) << 23) | (this.has(params.call_not_empty) << 24) | (this.has(params.fake) << 25) | (this.has(params.gigagroup) << 26) | (this.has(params.access_hash) << 13) | (this.has(params.username) << 6) | (this.has(params.restriction_reason) << 9) | (this.has(params.admin_rights) << 14) | (this.has(params.banned_rights) << 15) | (this.has(params.default_banned_rights) << 18) | (this.has(params.participants_count) << 17) | (this.has(params.live_msg_id) << 29);
    this.int32(flags);
    this.long(params.id);
    this.flag(this.long, params.access_hash);
    this.string(params.title);
    this.flag(this.string, params.username);
    this.predicate(params.photo);
    this.int(params.date);
    this.flagVector(this.predicate, params.restriction_reason);
    this.flag(this.predicate, params.admin_rights);
    this.flag(this.predicate, params.banned_rights);
    this.flag(this.predicate, params.default_banned_rights);
    this.flag(this.int, params.participants_count);
    this.flag(this.int, params.live_msg_id);
  },
  'channelForbidden': function(params) {
    this.int32(399807445);
    const flags = (this.has(params.broadcast) << 5) | (this.has(params.megagroup) << 8) | (this.has(params.until_date) << 16);
    this.int32(flags);
    this.long(params.id);
    this.long(params.access_hash);
    this.string(params.title);
    this.flag(this.int, params.until_date);
  },
  'chatFull': function(params) {
    this.int32(1304281241);
    const flags = (this.has(params.can_set_username) << 7) | (this.has(params.has_scheduled) << 8) | (this.has(params.chat_photo) << 2) | (this.has(params.exported_invite) << 13) | (this.has(params.bot_info) << 3) | (this.has(params.pinned_msg_id) << 6) | (this.has(params.folder_id) << 11) | (this.has(params.call) << 12) | (this.has(params.ttl_period) << 14) | (this.has(params.groupcall_default_join_as) << 15) | (this.has(params.theme_emoticon) << 16);
    this.int32(flags);
    this.long(params.id);
    this.string(params.about);
    this.predicate(params.participants);
    this.flag(this.predicate, params.chat_photo);
    this.predicate(params.notify_settings);
    this.flag(this.predicate, params.exported_invite);
    this.flagVector(this.predicate, params.bot_info);
    this.flag(this.int, params.pinned_msg_id);
    this.flag(this.int, params.folder_id);
    this.flag(this.predicate, params.call);
    this.flag(this.int, params.ttl_period);
    this.flag(this.predicate, params.groupcall_default_join_as);
    this.flag(this.string, params.theme_emoticon);
  },
  'channelFull': function(params) {
    this.int32(-374179305);
    const flags = (this.has(params.can_view_participants) << 3) | (this.has(params.can_set_username) << 6) | (this.has(params.can_set_stickers) << 7) | (this.has(params.hidden_prehistory) << 10) | (this.has(params.can_set_location) << 16) | (this.has(params.has_scheduled) << 19) | (this.has(params.can_view_stats) << 20) | (this.has(params.blocked) << 22) | (this.has(params.participants_count) << 0) | (this.has(params.admins_count) << 1) | (this.has(params.kicked_count) << 2) | (this.has(params.banned_count) << 2) | (this.has(params.online_count) << 13) | (this.has(params.exported_invite) << 23) | (this.has(params.migrated_from_chat_id) << 4) | (this.has(params.migrated_from_max_id) << 4) | (this.has(params.pinned_msg_id) << 5) | (this.has(params.stickerset) << 8) | (this.has(params.available_min_id) << 9) | (this.has(params.folder_id) << 11) | (this.has(params.linked_chat_id) << 14) | (this.has(params.location) << 15) | (this.has(params.slowmode_seconds) << 17) | (this.has(params.slowmode_next_send_date) << 18) | (this.has(params.stats_dc) << 12) | (this.has(params.call) << 21) | (this.has(params.ttl_period) << 24) | (this.has(params.pending_suggestions) << 25) | (this.has(params.groupcall_default_join_as) << 26) | (this.has(params.theme_emoticon) << 27);
    this.int32(flags);
    this.long(params.id);
    this.string(params.about);
    this.flag(this.int, params.participants_count);
    this.flag(this.int, params.admins_count);
    this.flag(this.int, params.kicked_count);
    this.flag(this.int, params.banned_count);
    this.flag(this.int, params.online_count);
    this.int(params.read_inbox_max_id);
    this.int(params.read_outbox_max_id);
    this.int(params.unread_count);
    this.predicate(params.chat_photo);
    this.predicate(params.notify_settings);
    this.flag(this.predicate, params.exported_invite);
    this.vector(this.predicate, params.bot_info);
    this.flag(this.long, params.migrated_from_chat_id);
    this.flag(this.int, params.migrated_from_max_id);
    this.flag(this.int, params.pinned_msg_id);
    this.flag(this.predicate, params.stickerset);
    this.flag(this.int, params.available_min_id);
    this.flag(this.int, params.folder_id);
    this.flag(this.long, params.linked_chat_id);
    this.flag(this.predicate, params.location);
    this.flag(this.int, params.slowmode_seconds);
    this.flag(this.int, params.slowmode_next_send_date);
    this.flag(this.int, params.stats_dc);
    this.int(params.pts);
    this.flag(this.predicate, params.call);
    this.flag(this.int, params.ttl_period);
    this.flagVector(this.string, params.pending_suggestions);
    this.flag(this.predicate, params.groupcall_default_join_as);
    this.flag(this.string, params.theme_emoticon);
  },
  'chatParticipant': function(params) {
    this.int32(-1070776313);
    this.long(params.user_id);
    this.long(params.inviter_id);
    this.int(params.date);
  },
  'chatParticipantCreator': function(params) {
    this.int32(-462696732);
    this.long(params.user_id);
  },
  'chatParticipantAdmin': function(params) {
    this.int32(-1600962725);
    this.long(params.user_id);
    this.long(params.inviter_id);
    this.int(params.date);
  },
  'chatParticipantsForbidden': function(params) {
    this.int32(-2023500831);
    const flags = (this.has(params.self_participant) << 0);
    this.int32(flags);
    this.long(params.chat_id);
    this.flag(this.predicate, params.self_participant);
  },
  'chatParticipants': function(params) {
    this.int32(1018991608);
    this.long(params.chat_id);
    this.vector(this.predicate, params.participants);
    this.int(params.version);
  },
  'chatPhotoEmpty': function(params) {
    this.int32(935395612);
  },
  'chatPhoto': function(params) {
    this.int32(-770990276);
    const flags = (this.has(params.has_video) << 0);
    this.int32(flags);
    this.long(params.photo_id);
    this.predicate(params.photo_small);
    this.predicate(params.photo_big);
    this.int(params.dc_id);
  },
  'messageEmpty': function(params) {
    this.int32(-1868117372);
    const flags = (this.has(params.peer_id) << 0);
    this.int32(flags);
    this.int(params.id);
    this.flag(this.predicate, params.peer_id);
  },
  'message': function(params) {
    this.int32(-2049520670);
    const flags = (this.has(params.out) << 1) | (this.has(params.mentioned) << 4) | (this.has(params.media_unread) << 5) | (this.has(params.silent) << 13) | (this.has(params.post) << 14) | (this.has(params.from_scheduled) << 18) | (this.has(params.legacy) << 19) | (this.has(params.edit_hide) << 21) | (this.has(params.pinned) << 24) | (this.has(params.from_id) << 8) | (this.has(params.fwd_from) << 2) | (this.has(params.via_bot_id) << 11) | (this.has(params.reply_to) << 3) | (this.has(params.media) << 9) | (this.has(params.reply_markup) << 6) | (this.has(params.entities) << 7) | (this.has(params.views) << 10) | (this.has(params.forwards) << 10) | (this.has(params.replies) << 23) | (this.has(params.edit_date) << 15) | (this.has(params.post_author) << 16) | (this.has(params.grouped_id) << 17) | (this.has(params.restriction_reason) << 22) | (this.has(params.ttl_period) << 25);
    this.int32(flags);
    this.int(params.id);
    this.flag(this.predicate, params.from_id);
    this.predicate(params.peer_id);
    this.flag(this.predicate, params.fwd_from);
    this.flag(this.long, params.via_bot_id);
    this.flag(this.predicate, params.reply_to);
    this.int(params.date);
    this.string(params.message);
    this.flag(this.predicate, params.media);
    this.flag(this.predicate, params.reply_markup);
    this.flagVector(this.predicate, params.entities);
    this.flag(this.int, params.views);
    this.flag(this.int, params.forwards);
    this.flag(this.predicate, params.replies);
    this.flag(this.int, params.edit_date);
    this.flag(this.string, params.post_author);
    this.flag(this.long, params.grouped_id);
    this.flagVector(this.predicate, params.restriction_reason);
    this.flag(this.int, params.ttl_period);
  },
  'messageService': function(params) {
    this.int32(721967202);
    const flags = (this.has(params.out) << 1) | (this.has(params.mentioned) << 4) | (this.has(params.media_unread) << 5) | (this.has(params.silent) << 13) | (this.has(params.post) << 14) | (this.has(params.legacy) << 19) | (this.has(params.from_id) << 8) | (this.has(params.reply_to) << 3) | (this.has(params.ttl_period) << 25);
    this.int32(flags);
    this.int(params.id);
    this.flag(this.predicate, params.from_id);
    this.predicate(params.peer_id);
    this.flag(this.predicate, params.reply_to);
    this.int(params.date);
    this.predicate(params.action);
    this.flag(this.int, params.ttl_period);
  },
  'messageMediaEmpty': function(params) {
    this.int32(1038967584);
  },
  'messageMediaPhoto': function(params) {
    this.int32(1766936791);
    const flags = (this.has(params.photo) << 0) | (this.has(params.ttl_seconds) << 2);
    this.int32(flags);
    this.flag(this.predicate, params.photo);
    this.flag(this.int, params.ttl_seconds);
  },
  'messageMediaGeo': function(params) {
    this.int32(1457575028);
    this.predicate(params.geo);
  },
  'messageMediaContact': function(params) {
    this.int32(1882335561);
    this.string(params.phone_number);
    this.string(params.first_name);
    this.string(params.last_name);
    this.string(params.vcard);
    this.long(params.user_id);
  },
  'messageMediaUnsupported': function(params) {
    this.int32(-1618676578);
  },
  'messageMediaDocument': function(params) {
    this.int32(-1666158377);
    const flags = (this.has(params.document) << 0) | (this.has(params.ttl_seconds) << 2);
    this.int32(flags);
    this.flag(this.predicate, params.document);
    this.flag(this.int, params.ttl_seconds);
  },
  'messageMediaWebPage': function(params) {
    this.int32(-1557277184);
    this.predicate(params.webpage);
  },
  'messageMediaVenue': function(params) {
    this.int32(784356159);
    this.predicate(params.geo);
    this.string(params.title);
    this.string(params.address);
    this.string(params.provider);
    this.string(params.venue_id);
    this.string(params.venue_type);
  },
  'messageMediaGame': function(params) {
    this.int32(-38694904);
    this.predicate(params.game);
  },
  'messageMediaInvoice': function(params) {
    this.int32(-2074799289);
    const flags = (this.has(params.shipping_address_requested) << 1) | (this.has(params.test) << 3) | (this.has(params.photo) << 0) | (this.has(params.receipt_msg_id) << 2);
    this.int32(flags);
    this.string(params.title);
    this.string(params.description);
    this.flag(this.predicate, params.photo);
    this.flag(this.int, params.receipt_msg_id);
    this.string(params.currency);
    this.long(params.total_amount);
    this.string(params.start_param);
  },
  'messageMediaGeoLive': function(params) {
    this.int32(-1186937242);
    const flags = (this.has(params.heading) << 0) | (this.has(params.proximity_notification_radius) << 1);
    this.int32(flags);
    this.predicate(params.geo);
    this.flag(this.int, params.heading);
    this.int(params.period);
    this.flag(this.int, params.proximity_notification_radius);
  },
  'messageMediaPoll': function(params) {
    this.int32(1272375192);
    this.predicate(params.poll);
    this.predicate(params.results);
  },
  'messageMediaDice': function(params) {
    this.int32(1065280907);
    this.int(params.value);
    this.string(params.emoticon);
  },
  'messageActionEmpty': function(params) {
    this.int32(-1230047312);
  },
  'messageActionChatCreate': function(params) {
    this.int32(-1119368275);
    this.string(params.title);
    this.vector(this.long, params.users);
  },
  'messageActionChatEditTitle': function(params) {
    this.int32(-1247687078);
    this.string(params.title);
  },
  'messageActionChatEditPhoto': function(params) {
    this.int32(2144015272);
    this.predicate(params.photo);
  },
  'messageActionChatDeletePhoto': function(params) {
    this.int32(-1780220945);
  },
  'messageActionChatAddUser': function(params) {
    this.int32(365886720);
    this.vector(this.long, params.users);
  },
  'messageActionChatDeleteUser': function(params) {
    this.int32(-1539362612);
    this.long(params.user_id);
  },
  'messageActionChatJoinedByLink': function(params) {
    this.int32(51520707);
    this.long(params.inviter_id);
  },
  'messageActionChannelCreate': function(params) {
    this.int32(-1781355374);
    this.string(params.title);
  },
  'messageActionChatMigrateTo': function(params) {
    this.int32(-519864430);
    this.long(params.channel_id);
  },
  'messageActionChannelMigrateFrom': function(params) {
    this.int32(-365344535);
    this.string(params.title);
    this.long(params.chat_id);
  },
  'messageActionPinMessage': function(params) {
    this.int32(-1799538451);
  },
  'messageActionHistoryClear': function(params) {
    this.int32(-1615153660);
  },
  'messageActionGameScore': function(params) {
    this.int32(-1834538890);
    this.long(params.game_id);
    this.int(params.score);
  },
  'messageActionPaymentSentMe': function(params) {
    this.int32(-1892568281);
    const flags = (this.has(params.info) << 0) | (this.has(params.shipping_option_id) << 1);
    this.int32(flags);
    this.string(params.currency);
    this.long(params.total_amount);
    this.bytes(params.payload);
    this.flag(this.predicate, params.info);
    this.flag(this.string, params.shipping_option_id);
    this.predicate(params.charge);
  },
  'messageActionPaymentSent': function(params) {
    this.int32(1080663248);
    this.string(params.currency);
    this.long(params.total_amount);
  },
  'messageActionPhoneCall': function(params) {
    this.int32(-2132731265);
    const flags = (this.has(params.video) << 2) | (this.has(params.reason) << 0) | (this.has(params.duration) << 1);
    this.int32(flags);
    this.long(params.call_id);
    this.flag(this.predicate, params.reason);
    this.flag(this.int, params.duration);
  },
  'messageActionScreenshotTaken': function(params) {
    this.int32(1200788123);
  },
  'messageActionCustomAction': function(params) {
    this.int32(-85549226);
    this.string(params.message);
  },
  'messageActionBotAllowed': function(params) {
    this.int32(-1410748418);
    this.string(params.domain);
  },
  'messageActionSecureValuesSentMe': function(params) {
    this.int32(455635795);
    this.vector(this.predicate, params.values);
    this.predicate(params.credentials);
  },
  'messageActionSecureValuesSent': function(params) {
    this.int32(-648257196);
    this.vector(this.predicate, params.types);
  },
  'messageActionContactSignUp': function(params) {
    this.int32(-202219658);
  },
  'messageActionGeoProximityReached': function(params) {
    this.int32(-1730095465);
    this.predicate(params.from_id);
    this.predicate(params.to_id);
    this.int(params.distance);
  },
  'messageActionGroupCall': function(params) {
    this.int32(2047704898);
    const flags = (this.has(params.duration) << 0);
    this.int32(flags);
    this.predicate(params.call);
    this.flag(this.int, params.duration);
  },
  'messageActionInviteToGroupCall': function(params) {
    this.int32(1345295095);
    this.predicate(params.call);
    this.vector(this.long, params.users);
  },
  'messageActionSetMessagesTTL': function(params) {
    this.int32(-1441072131);
    this.int(params.period);
  },
  'messageActionGroupCallScheduled': function(params) {
    this.int32(-1281329567);
    this.predicate(params.call);
    this.int(params.schedule_date);
  },
  'messageActionSetChatTheme': function(params) {
    this.int32(-1434950843);
    this.string(params.emoticon);
  },
  'dialog': function(params) {
    this.int32(739712882);
    const flags = (this.has(params.pinned) << 2) | (this.has(params.unread_mark) << 3) | (this.has(params.pts) << 0) | (this.has(params.draft) << 1) | (this.has(params.folder_id) << 4);
    this.int32(flags);
    this.predicate(params.peer);
    this.int(params.top_message);
    this.int(params.read_inbox_max_id);
    this.int(params.read_outbox_max_id);
    this.int(params.unread_count);
    this.int(params.unread_mentions_count);
    this.predicate(params.notify_settings);
    this.flag(this.int, params.pts);
    this.flag(this.predicate, params.draft);
    this.flag(this.int, params.folder_id);
  },
  'dialogFolder': function(params) {
    this.int32(1908216652);
    const flags = (this.has(params.pinned) << 2);
    this.int32(flags);
    this.predicate(params.folder);
    this.predicate(params.peer);
    this.int(params.top_message);
    this.int(params.unread_muted_peers_count);
    this.int(params.unread_unmuted_peers_count);
    this.int(params.unread_muted_messages_count);
    this.int(params.unread_unmuted_messages_count);
  },
  'photoEmpty': function(params) {
    this.int32(590459437);
    this.long(params.id);
  },
  'photo': function(params) {
    this.int32(-82216347);
    const flags = (this.has(params.has_stickers) << 0) | (this.has(params.video_sizes) << 1);
    this.int32(flags);
    this.long(params.id);
    this.long(params.access_hash);
    this.bytes(params.file_reference);
    this.int(params.date);
    this.vector(this.predicate, params.sizes);
    this.flagVector(this.predicate, params.video_sizes);
    this.int(params.dc_id);
  },
  'photoSizeEmpty': function(params) {
    this.int32(236446268);
    this.string(params.type);
  },
  'photoSize': function(params) {
    this.int32(1976012384);
    this.string(params.type);
    this.int(params.w);
    this.int(params.h);
    this.int(params.size);
  },
  'photoCachedSize': function(params) {
    this.int32(35527382);
    this.string(params.type);
    this.int(params.w);
    this.int(params.h);
    this.bytes(params.bytes);
  },
  'photoStrippedSize': function(params) {
    this.int32(-525288402);
    this.string(params.type);
    this.bytes(params.bytes);
  },
  'photoSizeProgressive': function(params) {
    this.int32(-96535659);
    this.string(params.type);
    this.int(params.w);
    this.int(params.h);
    this.vector(this.int, params.sizes);
  },
  'photoPathSize': function(params) {
    this.int32(-668906175);
    this.string(params.type);
    this.bytes(params.bytes);
  },
  'geoPointEmpty': function(params) {
    this.int32(286776671);
  },
  'geoPoint': function(params) {
    this.int32(-1297942941);
    const flags = (this.has(params.accuracy_radius) << 0);
    this.int32(flags);
    this.double(params.long);
    this.double(params.lat);
    this.long(params.access_hash);
    this.flag(this.int, params.accuracy_radius);
  },
  'geoPoint_84': function(params) {
    this.int32(541710092);
    this.double(params.long);
    this.double(params.lat);
  },
  'auth.sentCode': function(params) {
    this.int32(1577067778);
    const flags = (this.has(params.next_type) << 1) | (this.has(params.timeout) << 2);
    this.int32(flags);
    this.predicate(params.type);
    this.string(params.phone_code_hash);
    this.flag(this.predicate, params.next_type);
    this.flag(this.int, params.timeout);
  },
  'auth.authorization': function(params) {
    this.int32(-855308010);
    const flags = 0;
    this.int32(flags);
    this.string(params.token);
    this.predicate(params.user);
  },
  'auth.authorizationSignUpRequired': function(params) {
    this.int32(1148485274);
    const flags = (this.has(params.terms_of_service) << 0);
    this.int32(flags);
    this.flag(this.predicate, params.terms_of_service);
  },
  'auth.exportedAuthorization': function(params) {
    this.int32(-1271602504);
    this.long(params.id);
    this.bytes(params.bytes);
  },
  'inputNotifyPeer': function(params) {
    this.int32(-1195615476);
    this.predicate(params.peer);
  },
  'inputNotifyUsers': function(params) {
    this.int32(423314455);
  },
  'inputNotifyChats': function(params) {
    this.int32(1251338318);
  },
  'inputNotifyBroadcasts': function(params) {
    this.int32(-1311015810);
  },
  'inputPeerNotifySettings': function(params) {
    this.int32(-1673717362);
    const flags = (this.has(params.show_previews) << 0) | (this.has(params.silent) << 1) | (this.has(params.mute_until) << 2) | (this.has(params.sound) << 3);
    this.int32(flags);
    this.flag(this.Bool, params.show_previews);
    this.flag(this.Bool, params.silent);
    this.flag(this.int, params.mute_until);
    this.flag(this.string, params.sound);
  },
  'peerNotifySettings': function(params) {
    this.int32(-1353671392);
    const flags = (this.has(params.show_previews) << 0) | (this.has(params.silent) << 1) | (this.has(params.mute_until) << 2) | (this.has(params.sound) << 3);
    this.int32(flags);
    this.flag(this.Bool, params.show_previews);
    this.flag(this.Bool, params.silent);
    this.flag(this.int, params.mute_until);
    this.flag(this.string, params.sound);
  },
  'peerSettings': function(params) {
    this.int32(1933519201);
    const flags = (this.has(params.report_spam) << 0) | (this.has(params.add_contact) << 1) | (this.has(params.block_contact) << 2) | (this.has(params.share_contact) << 3) | (this.has(params.need_contacts_exception) << 4) | (this.has(params.report_geo) << 5) | (this.has(params.autoarchived) << 7) | (this.has(params.invite_members) << 8) | (this.has(params.geo_distance) << 6);
    this.int32(flags);
    this.flag(this.int, params.geo_distance);
  },
  'wallPaper': function(params) {
    this.int32(-1539849235);
    this.long(params.id);
    const flags = (this.has(params.creator) << 0) | (this.has(params.default) << 1) | (this.has(params.pattern) << 3) | (this.has(params.dark) << 4) | (this.has(params.settings) << 2);
    this.int32(flags);
    this.long(params.access_hash);
    this.string(params.slug);
    this.predicate(params.document);
    this.flag(this.predicate, params.settings);
  },
  'wallPaperNoFile': function(params) {
    this.int32(-528465642);
    this.long(params.id);
    const flags = (this.has(params.default) << 1) | (this.has(params.dark) << 4) | (this.has(params.settings) << 2);
    this.int32(flags);
    this.flag(this.predicate, params.settings);
  },
  'inputReportReasonSpam': function(params) {
    this.int32(1490799288);
  },
  'inputReportReasonViolence': function(params) {
    this.int32(505595789);
  },
  'inputReportReasonPornography': function(params) {
    this.int32(777640226);
  },
  'inputReportReasonChildAbuse': function(params) {
    this.int32(-1376497949);
  },
  'inputReportReasonOther': function(params) {
    this.int32(-1041980751);
  },
  'inputReportReasonCopyright': function(params) {
    this.int32(-1685456582);
  },
  'inputReportReasonGeoIrrelevant': function(params) {
    this.int32(-606798099);
  },
  'inputReportReasonFake': function(params) {
    this.int32(-170010905);
  },
  'userFull': function(params) {
    this.int32(-694681851);
    const flags = (this.has(params.blocked) << 0) | (this.has(params.phone_calls_available) << 4) | (this.has(params.phone_calls_private) << 5) | (this.has(params.can_pin_message) << 7) | (this.has(params.has_scheduled) << 12) | (this.has(params.video_calls_available) << 13) | (this.has(params.about) << 1) | (this.has(params.profile_photo) << 2) | (this.has(params.bot_info) << 3) | (this.has(params.pinned_msg_id) << 6) | (this.has(params.folder_id) << 11) | (this.has(params.ttl_period) << 14) | (this.has(params.theme_emoticon) << 15);
    this.int32(flags);
    this.predicate(params.user);
    this.flag(this.string, params.about);
    this.predicate(params.settings);
    this.flag(this.predicate, params.profile_photo);
    this.predicate(params.notify_settings);
    this.flag(this.predicate, params.bot_info);
    this.flag(this.int, params.pinned_msg_id);
    this.int(params.common_chats_count);
    this.flag(this.int, params.folder_id);
    this.flag(this.int, params.ttl_period);
    this.flag(this.string, params.theme_emoticon);
  },
  'contact': function(params) {
    this.int32(341499403);
    this.long(params.user_id);
    this.Bool(params.mutual);
  },
  'importedContact': function(params) {
    this.int32(-1052885936);
    this.long(params.user_id);
    this.long(params.client_id);
  },
  'contactStatus': function(params) {
    this.int32(383348795);
    this.long(params.user_id);
    this.predicate(params.status);
  },
  'contacts.contactsNotModified': function(params) {
    this.int32(-1219778094);
  },
  'contacts.contacts': function(params) {
    this.int32(-353862078);
    this.vector(this.predicate, params.contacts);
    this.vector(this.predicate, params.users);
  },
  'contacts.importedContacts': function(params) {
    this.int32(2010127419);
    this.vector(this.predicate, params.imported);
    this.vector(this.predicate, params.popular_invites);
    this.vector(this.long, params.retry_contacts);
    this.vector(this.predicate, params.users);
  },
  'contacts.blocked': function(params) {
    this.int32(182326673);
    this.vector(this.predicate, params.blocked);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'contacts.blockedSlice': function(params) {
    this.int32(-513392236);
    this.int(params.count);
    this.vector(this.predicate, params.blocked);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'messages.dialogs': function(params) {
    this.int32(364538944);
    this.vector(this.predicate, params.dialogs);
    this.vector(this.predicate, params.messages);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'messages.dialogsSlice': function(params) {
    this.int32(1910543603);
    this.int(params.count);
    this.vector(this.predicate, params.dialogs);
    this.vector(this.predicate, params.messages);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'messages.dialogsNotModified': function(params) {
    this.int32(-253500010);
    this.int(params.count);
  },
  'messages.messages': function(params) {
    this.int32(-1938715001);
    this.vector(this.predicate, params.messages);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'messages.messagesSlice': function(params) {
    this.int32(978610270);
    const flags = (this.has(params.inexact) << 1) | (this.has(params.next_rate) << 0) | (this.has(params.offset_id_offset) << 2);
    this.int32(flags);
    this.int(params.count);
    this.flag(this.int, params.next_rate);
    this.flag(this.int, params.offset_id_offset);
    this.vector(this.predicate, params.messages);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'messages.channelMessages': function(params) {
    this.int32(1682413576);
    const flags = (this.has(params.inexact) << 1) | (this.has(params.offset_id_offset) << 2);
    this.int32(flags);
    this.int(params.pts);
    this.int(params.count);
    this.flag(this.int, params.offset_id_offset);
    this.vector(this.predicate, params.messages);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'messages.messagesNotModified': function(params) {
    this.int32(1951620897);
    this.int(params.count);
  },
  'messages.chats': function(params) {
    this.int32(1694474197);
    this.vector(this.predicate, params.chats);
  },
  'messages.chatsSlice': function(params) {
    this.int32(-1663561404);
    this.int(params.count);
    this.vector(this.predicate, params.chats);
  },
  'messages.chatFull': function(params) {
    this.int32(-438840932);
    this.predicate(params.full_chat);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'messages.affectedHistory': function(params) {
    this.int32(-1269012015);
    this.int(params.pts);
    this.int(params.pts_count);
    this.int(params.offset);
  },
  'inputMessagesFilterEmpty': function(params) {
    this.int32(1474492012);
  },
  'inputMessagesFilterPhotos': function(params) {
    this.int32(-1777752804);
  },
  'inputMessagesFilterVideo': function(params) {
    this.int32(-1614803355);
  },
  'inputMessagesFilterPhotoVideo': function(params) {
    this.int32(1458172132);
  },
  'inputMessagesFilterDocument': function(params) {
    this.int32(-1629621880);
  },
  'inputMessagesFilterUrl': function(params) {
    this.int32(2129714567);
  },
  'inputMessagesFilterGif': function(params) {
    this.int32(-3644025);
  },
  'inputMessagesFilterVoice': function(params) {
    this.int32(1358283666);
  },
  'inputMessagesFilterMusic': function(params) {
    this.int32(928101534);
  },
  'inputMessagesFilterChatPhotos': function(params) {
    this.int32(975236280);
  },
  'inputMessagesFilterPhoneCalls': function(params) {
    this.int32(-2134272152);
    const flags = (this.has(params.missed) << 0);
    this.int32(flags);
  },
  'inputMessagesFilterRoundVoice': function(params) {
    this.int32(2054952868);
  },
  'inputMessagesFilterRoundVideo': function(params) {
    this.int32(-1253451181);
  },
  'inputMessagesFilterMyMentions': function(params) {
    this.int32(-1040652646);
  },
  'inputMessagesFilterGeo': function(params) {
    this.int32(-419271411);
  },
  'inputMessagesFilterContacts': function(params) {
    this.int32(-530392189);
  },
  'inputMessagesFilterPinned': function(params) {
    this.int32(464520273);
  },
  'updateNewMessage': function(params) {
    this.int32(522914557);
    this.predicate(params.message);
    this.int(params.pts);
    this.int(params.pts_count);
  },
  'updateMessageID': function(params) {
    this.int32(1318109142);
    this.int(params.id);
    this.long(params.random_id);
  },
  'updateDeleteMessages': function(params) {
    this.int32(-1576161051);
    this.vector(this.int, params.messages);
    this.int(params.pts);
    this.int(params.pts_count);
  },
  'updateUserTyping': function(params) {
    this.int32(-1071741569);
    this.long(params.user_id);
    this.predicate(params.action);
  },
  'updateChatUserTyping': function(params) {
    this.int32(-2092401936);
    this.long(params.chat_id);
    this.predicate(params.from_id);
    this.predicate(params.action);
  },
  'updateChatParticipants': function(params) {
    this.int32(125178264);
    this.predicate(params.participants);
  },
  'updateUserStatus': function(params) {
    this.int32(-440534818);
    this.long(params.user_id);
    this.predicate(params.status);
  },
  'updateUserName': function(params) {
    this.int32(-1007549728);
    this.long(params.user_id);
    this.string(params.first_name);
    this.string(params.last_name);
    this.string(params.username);
  },
  'updateUserPhoto': function(params) {
    this.int32(-232290676);
    this.long(params.user_id);
    this.int(params.date);
    this.predicate(params.photo);
    this.Bool(params.previous);
  },
  'updateNewEncryptedMessage': function(params) {
    this.int32(314359194);
    this.predicate(params.message);
    this.int(params.qts);
  },
  'updateEncryptedChatTyping': function(params) {
    this.int32(386986326);
    this.int(params.chat_id);
  },
  'updateEncryption': function(params) {
    this.int32(-1264392051);
    this.predicate(params.chat);
    this.int(params.date);
  },
  'updateEncryptedMessagesRead': function(params) {
    this.int32(956179895);
    this.int(params.chat_id);
    this.int(params.max_date);
    this.int(params.date);
  },
  'updateChatParticipantAdd': function(params) {
    this.int32(1037718609);
    this.long(params.chat_id);
    this.long(params.user_id);
    this.long(params.inviter_id);
    this.int(params.date);
    this.int(params.version);
  },
  'updateChatParticipantDelete': function(params) {
    this.int32(-483443337);
    this.long(params.chat_id);
    this.long(params.user_id);
    this.int(params.version);
  },
  'updateDcOptions': function(params) {
    this.int32(-1906403213);
    this.vector(this.predicate, params.dc_options);
  },
  'updateNotifySettings': function(params) {
    this.int32(-1094555409);
    this.predicate(params.peer);
    this.predicate(params.notify_settings);
  },
  'updateServiceNotification': function(params) {
    this.int32(-337352679);
    const flags = (this.has(params.popup) << 0) | (this.has(params.inbox_date) << 1);
    this.int32(flags);
    this.flag(this.int, params.inbox_date);
    this.string(params.type);
    this.string(params.message);
    this.predicate(params.media);
    this.vector(this.predicate, params.entities);
  },
  'updatePrivacy': function(params) {
    this.int32(-298113238);
    this.predicate(params.key);
    this.vector(this.predicate, params.rules);
  },
  'updateUserPhone': function(params) {
    this.int32(88680979);
    this.long(params.user_id);
    this.string(params.phone);
  },
  'updateReadHistoryInbox': function(params) {
    this.int32(-1667805217);
    const flags = (this.has(params.folder_id) << 0);
    this.int32(flags);
    this.flag(this.int, params.folder_id);
    this.predicate(params.peer);
    this.int(params.max_id);
    this.int(params.still_unread_count);
    this.int(params.pts);
    this.int(params.pts_count);
  },
  'updateReadHistoryOutbox': function(params) {
    this.int32(791617983);
    this.predicate(params.peer);
    this.int(params.max_id);
    this.int(params.pts);
    this.int(params.pts_count);
  },
  'updateWebPage': function(params) {
    this.int32(2139689491);
    this.predicate(params.webpage);
    this.int(params.pts);
    this.int(params.pts_count);
  },
  'updateReadMessagesContents': function(params) {
    this.int32(1757493555);
    this.vector(this.int, params.messages);
    this.int(params.pts);
    this.int(params.pts_count);
  },
  'updateChannelTooLong': function(params) {
    this.int32(277713951);
    const flags = (this.has(params.pts) << 0);
    this.int32(flags);
    this.long(params.channel_id);
    this.flag(this.int, params.pts);
  },
  'updateChannel': function(params) {
    this.int32(1666927625);
    this.long(params.channel_id);
  },
  'updateNewChannelMessage': function(params) {
    this.int32(1656358105);
    this.predicate(params.message);
    this.int(params.pts);
    this.int(params.pts_count);
  },
  'updateReadChannelInbox': function(params) {
    this.int32(-1842450928);
    const flags = (this.has(params.folder_id) << 0);
    this.int32(flags);
    this.flag(this.int, params.folder_id);
    this.long(params.channel_id);
    this.int(params.max_id);
    this.int(params.still_unread_count);
    this.int(params.pts);
  },
  'updateDeleteChannelMessages': function(params) {
    this.int32(-1020437742);
    this.long(params.channel_id);
    this.vector(this.int, params.messages);
    this.int(params.pts);
    this.int(params.pts_count);
  },
  'updateChannelMessageViews': function(params) {
    this.int32(-232346616);
    this.long(params.channel_id);
    this.int(params.id);
    this.int(params.views);
  },
  'updateChatParticipantAdmin': function(params) {
    this.int32(-674602590);
    this.long(params.chat_id);
    this.long(params.user_id);
    this.Bool(params.is_admin);
    this.int(params.version);
  },
  'updateNewStickerSet': function(params) {
    this.int32(1753886890);
    this.predicate(params.stickerset);
  },
  'updateStickerSetsOrder': function(params) {
    this.int32(196268545);
    const flags = (this.has(params.masks) << 0);
    this.int32(flags);
    this.vector(this.long, params.order);
  },
  'updateStickerSets': function(params) {
    this.int32(1135492588);
  },
  'updateSavedGifs': function(params) {
    this.int32(-1821035490);
  },
  'updateBotInlineQuery': function(params) {
    this.int32(1232025500);
    const flags = (this.has(params.geo) << 0) | (this.has(params.peer_type) << 1);
    this.int32(flags);
    this.long(params.query_id);
    this.long(params.user_id);
    this.string(params.query);
    this.flag(this.predicate, params.geo);
    this.flag(this.predicate, params.peer_type);
    this.string(params.offset);
  },
  'updateBotInlineSend': function(params) {
    this.int32(317794823);
    const flags = (this.has(params.geo) << 0) | (this.has(params.msg_id) << 1);
    this.int32(flags);
    this.long(params.user_id);
    this.string(params.query);
    this.flag(this.predicate, params.geo);
    this.string(params.id);
    this.flag(this.predicate, params.msg_id);
  },
  'updateEditChannelMessage': function(params) {
    this.int32(457133559);
    this.predicate(params.message);
    this.int(params.pts);
    this.int(params.pts_count);
  },
  'updateBotCallbackQuery': function(params) {
    this.int32(-1177566067);
    const flags = (this.has(params.data) << 0) | (this.has(params.game_short_name) << 1);
    this.int32(flags);
    this.long(params.query_id);
    this.long(params.user_id);
    this.predicate(params.peer);
    this.int(params.msg_id);
    this.long(params.chat_instance);
    this.flag(this.bytes, params.data);
    this.flag(this.string, params.game_short_name);
  },
  'updateEditMessage': function(params) {
    this.int32(-469536605);
    this.predicate(params.message);
    this.int(params.pts);
    this.int(params.pts_count);
  },
  'updateInlineBotCallbackQuery': function(params) {
    this.int32(1763610706);
    const flags = (this.has(params.data) << 0) | (this.has(params.game_short_name) << 1);
    this.int32(flags);
    this.long(params.query_id);
    this.long(params.user_id);
    this.predicate(params.msg_id);
    this.long(params.chat_instance);
    this.flag(this.bytes, params.data);
    this.flag(this.string, params.game_short_name);
  },
  'updateReadChannelOutbox': function(params) {
    this.int32(-1218471511);
    this.long(params.channel_id);
    this.int(params.max_id);
  },
  'updateDraftMessage': function(params) {
    this.int32(-299124375);
    this.predicate(params.peer);
    this.predicate(params.draft);
  },
  'updateReadFeaturedStickers': function(params) {
    this.int32(1461528386);
  },
  'updateRecentStickers': function(params) {
    this.int32(-1706939360);
  },
  'updateConfig': function(params) {
    this.int32(-1574314746);
  },
  'updatePtsChanged': function(params) {
    this.int32(861169551);
  },
  'updateChannelWebPage': function(params) {
    this.int32(791390623);
    this.long(params.channel_id);
    this.predicate(params.webpage);
    this.int(params.pts);
    this.int(params.pts_count);
  },
  'updateDialogPinned': function(params) {
    this.int32(1852826908);
    const flags = (this.has(params.pinned) << 0) | (this.has(params.folder_id) << 1);
    this.int32(flags);
    this.flag(this.int, params.folder_id);
    this.predicate(params.peer);
  },
  'updatePinnedDialogs': function(params) {
    this.int32(-99664734);
    const flags = (this.has(params.folder_id) << 1) | (this.has(params.order) << 0);
    this.int32(flags);
    this.flag(this.int, params.folder_id);
    this.flagVector(this.predicate, params.order);
  },
  'updateBotWebhookJSON': function(params) {
    this.int32(-2095595325);
    this.predicate(params.data);
  },
  'updateBotWebhookJSONQuery': function(params) {
    this.int32(-1684914010);
    this.long(params.query_id);
    this.predicate(params.data);
    this.int(params.timeout);
  },
  'updateBotShippingQuery': function(params) {
    this.int32(-1246823043);
    this.long(params.query_id);
    this.long(params.user_id);
    this.bytes(params.payload);
    this.predicate(params.shipping_address);
  },
  'updateBotPrecheckoutQuery': function(params) {
    this.int32(-1934976362);
    const flags = (this.has(params.info) << 0) | (this.has(params.shipping_option_id) << 1);
    this.int32(flags);
    this.long(params.query_id);
    this.long(params.user_id);
    this.bytes(params.payload);
    this.flag(this.predicate, params.info);
    this.flag(this.string, params.shipping_option_id);
    this.string(params.currency);
    this.long(params.total_amount);
  },
  'updatePhoneCall': function(params) {
    this.int32(-1425052898);
    this.predicate(params.phone_call);
  },
  'updateLangPackTooLong': function(params) {
    this.int32(1180041828);
    this.string(params.lang_code);
  },
  'updateLangPack': function(params) {
    this.int32(1442983757);
    this.predicate(params.difference);
  },
  'updateFavedStickers': function(params) {
    this.int32(-451831443);
  },
  'updateChannelReadMessagesContents': function(params) {
    this.int32(1153291573);
    this.long(params.channel_id);
    this.vector(this.int, params.messages);
  },
  'updateContactsReset': function(params) {
    this.int32(1887741886);
  },
  'updateChannelAvailableMessages': function(params) {
    this.int32(-1304443240);
    this.long(params.channel_id);
    this.int(params.available_min_id);
  },
  'updateDialogUnreadMark': function(params) {
    this.int32(-513517117);
    const flags = (this.has(params.unread) << 0);
    this.int32(flags);
    this.predicate(params.peer);
  },
  'updateMessagePoll': function(params) {
    this.int32(-1398708869);
    const flags = (this.has(params.poll) << 0);
    this.int32(flags);
    this.long(params.poll_id);
    this.flag(this.predicate, params.poll);
    this.predicate(params.results);
  },
  'updateChatDefaultBannedRights': function(params) {
    this.int32(1421875280);
    this.predicate(params.peer);
    this.predicate(params.default_banned_rights);
    this.int(params.version);
  },
  'updateFolderPeers': function(params) {
    this.int32(422972864);
    this.vector(this.predicate, params.folder_peers);
    this.int(params.pts);
    this.int(params.pts_count);
  },
  'updatePeerSettings': function(params) {
    this.int32(1786671974);
    this.predicate(params.peer);
    this.predicate(params.settings);
  },
  'updatePeerLocated': function(params) {
    this.int32(-1263546448);
    this.vector(this.predicate, params.peers);
  },
  'updateNewScheduledMessage': function(params) {
    this.int32(967122427);
    this.predicate(params.message);
  },
  'updateDeleteScheduledMessages': function(params) {
    this.int32(-1870238482);
    this.predicate(params.peer);
    this.vector(this.int, params.messages);
  },
  'updateTheme': function(params) {
    this.int32(-2112423005);
    this.predicate(params.theme);
  },
  'updateGeoLiveViewed': function(params) {
    this.int32(-2027964103);
    this.predicate(params.peer);
    this.int(params.msg_id);
  },
  'updateLoginToken': function(params) {
    this.int32(1448076945);
  },
  'updateMessagePollVote': function(params) {
    this.int32(274961865);
    this.long(params.poll_id);
    this.long(params.user_id);
    this.vector(this.bytes, params.options);
    this.int(params.qts);
  },
  'updateDialogFilter': function(params) {
    this.int32(654302845);
    const flags = (this.has(params.filter) << 0);
    this.int32(flags);
    this.int(params.id);
    this.flag(this.predicate, params.filter);
  },
  'updateDialogFilterOrder': function(params) {
    this.int32(-1512627963);
    this.vector(this.int, params.order);
  },
  'updateDialogFilters': function(params) {
    this.int32(889491791);
  },
  'updatePhoneCallSignalingData': function(params) {
    this.int32(643940105);
    this.long(params.phone_call_id);
    this.bytes(params.data);
  },
  'updateChannelMessageForwards': function(params) {
    this.int32(-761649164);
    this.long(params.channel_id);
    this.int(params.id);
    this.int(params.forwards);
  },
  'updateReadChannelDiscussionInbox': function(params) {
    this.int32(-693004986);
    const flags = (this.has(params.broadcast_id) << 0) | (this.has(params.broadcast_post) << 0);
    this.int32(flags);
    this.long(params.channel_id);
    this.int(params.top_msg_id);
    this.int(params.read_max_id);
    this.flag(this.long, params.broadcast_id);
    this.flag(this.int, params.broadcast_post);
  },
  'updateReadChannelDiscussionOutbox': function(params) {
    this.int32(1767677564);
    this.long(params.channel_id);
    this.int(params.top_msg_id);
    this.int(params.read_max_id);
  },
  'updatePeerBlocked': function(params) {
    this.int32(610945826);
    this.predicate(params.peer_id);
    this.Bool(params.blocked);
  },
  'updateChannelUserTyping': function(params) {
    this.int32(-1937192669);
    const flags = (this.has(params.top_msg_id) << 0);
    this.int32(flags);
    this.long(params.channel_id);
    this.flag(this.int, params.top_msg_id);
    this.predicate(params.from_id);
    this.predicate(params.action);
  },
  'updatePinnedMessages': function(params) {
    this.int32(-309990731);
    const flags = (this.has(params.pinned) << 0);
    this.int32(flags);
    this.predicate(params.peer);
    this.vector(this.int, params.messages);
    this.int(params.pts);
    this.int(params.pts_count);
  },
  'updatePinnedChannelMessages': function(params) {
    this.int32(1538885128);
    const flags = (this.has(params.pinned) << 0);
    this.int32(flags);
    this.long(params.channel_id);
    this.vector(this.int, params.messages);
    this.int(params.pts);
    this.int(params.pts_count);
  },
  'updateChat': function(params) {
    this.int32(-124097970);
    this.long(params.chat_id);
  },
  'updateGroupCallParticipants': function(params) {
    this.int32(-219423922);
    this.predicate(params.call);
    this.vector(this.predicate, params.participants);
    this.int(params.version);
  },
  'updateGroupCall': function(params) {
    this.int32(347227392);
    this.long(params.chat_id);
    this.predicate(params.call);
  },
  'updatePeerHistoryTTL': function(params) {
    this.int32(-1147422299);
    const flags = (this.has(params.ttl_period) << 0);
    this.int32(flags);
    this.predicate(params.peer);
    this.flag(this.int, params.ttl_period);
  },
  'updateChatParticipant': function(params) {
    this.int32(-796432838);
    const flags = (this.has(params.prev_participant) << 0) | (this.has(params.new_participant) << 1) | (this.has(params.invite) << 2);
    this.int32(flags);
    this.long(params.chat_id);
    this.int(params.date);
    this.long(params.actor_id);
    this.long(params.user_id);
    this.flag(this.predicate, params.prev_participant);
    this.flag(this.predicate, params.new_participant);
    this.flag(this.predicate, params.invite);
    this.int(params.qts);
  },
  'updateChannelParticipant': function(params) {
    this.int32(-1738720581);
    const flags = (this.has(params.prev_participant) << 0) | (this.has(params.new_participant) << 1) | (this.has(params.invite) << 2);
    this.int32(flags);
    this.long(params.channel_id);
    this.int(params.date);
    this.long(params.actor_id);
    this.long(params.user_id);
    this.flag(this.predicate, params.prev_participant);
    this.flag(this.predicate, params.new_participant);
    this.flag(this.predicate, params.invite);
    this.int(params.qts);
  },
  'updateBotStopped': function(params) {
    this.int32(-997782967);
    this.long(params.user_id);
    this.int(params.date);
    this.Bool(params.stopped);
    this.int(params.qts);
  },
  'updateGroupCallConnection': function(params) {
    this.int32(192428418);
    const flags = (this.has(params.presentation) << 0);
    this.int32(flags);
    this.predicate(params.params);
  },
  'updateBotCommands': function(params) {
    this.int32(1299263278);
    this.predicate(params.peer);
    this.long(params.bot_id);
    this.vector(this.predicate, params.commands);
  },
  'updates.state': function(params) {
    this.int32(-1519637954);
    this.int(params.pts);
    this.int(params.qts);
    this.int(params.date);
    this.int(params.seq);
    this.int(params.unread_count);
  },
  'updates.differenceEmpty': function(params) {
    this.int32(1567990072);
    this.int(params.date);
    this.int(params.seq);
  },
  'updates.difference': function(params) {
    this.int32(16030880);
    this.vector(this.predicate, params.new_messages);
    this.vector(this.predicate, params.new_encrypted_messages);
    this.vector(this.predicate, params.other_updates);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
    this.predicate(params.state);
  },
  'updates.differenceSlice': function(params) {
    this.int32(-1459938943);
    this.vector(this.predicate, params.new_messages);
    this.vector(this.predicate, params.new_encrypted_messages);
    this.vector(this.predicate, params.other_updates);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
    this.predicate(params.intermediate_state);
  },
  'updates.differenceTooLong': function(params) {
    this.int32(1258196845);
    this.int(params.pts);
  },
  'updatesTooLong': function(params) {
    this.int32(-484987010);
  },
  'updateShortMessage': function(params) {
    this.int32(826001400);
    const flags = (this.has(params.out) << 1) | (this.has(params.mentioned) << 4) | (this.has(params.media_unread) << 5) | (this.has(params.silent) << 13) | (this.has(params.fwd_from) << 2) | (this.has(params.via_bot_id) << 11) | (this.has(params.reply_to) << 3) | (this.has(params.entities) << 7) | (this.has(params.ttl_period) << 25);
    this.int32(flags);
    this.int(params.id);
    this.long(params.user_id);
    this.string(params.message);
    this.int(params.pts);
    this.int(params.pts_count);
    this.int(params.date);
    this.flag(this.predicate, params.fwd_from);
    this.flag(this.long, params.via_bot_id);
    this.flag(this.predicate, params.reply_to);
    this.flagVector(this.predicate, params.entities);
    this.flag(this.int, params.ttl_period);
  },
  'updateShortChatMessage': function(params) {
    this.int32(1299050149);
    const flags = (this.has(params.out) << 1) | (this.has(params.mentioned) << 4) | (this.has(params.media_unread) << 5) | (this.has(params.silent) << 13) | (this.has(params.fwd_from) << 2) | (this.has(params.via_bot_id) << 11) | (this.has(params.reply_to) << 3) | (this.has(params.entities) << 7) | (this.has(params.ttl_period) << 25);
    this.int32(flags);
    this.int(params.id);
    this.long(params.from_id);
    this.long(params.chat_id);
    this.string(params.message);
    this.int(params.pts);
    this.int(params.pts_count);
    this.int(params.date);
    this.flag(this.predicate, params.fwd_from);
    this.flag(this.long, params.via_bot_id);
    this.flag(this.predicate, params.reply_to);
    this.flagVector(this.predicate, params.entities);
    this.flag(this.int, params.ttl_period);
  },
  'updateShort': function(params) {
    this.int32(2027216577);
    this.predicate(params.update);
    this.int(params.date);
  },
  'updatesCombined': function(params) {
    this.int32(1918567619);
    this.vector(this.predicate, params.updates);
    this.vector(this.predicate, params.users);
    this.vector(this.predicate, params.chats);
    this.int(params.date);
    this.int(params.seq_start);
    this.int(params.seq);
  },
  'updates': function(params) {
    this.int32(1957577280);
    this.vector(this.predicate, params.updates);
    this.vector(this.predicate, params.users);
    this.vector(this.predicate, params.chats);
    this.int(params.date);
    this.int(params.seq);
  },
  'updateShortSentMessage': function(params) {
    this.int32(-1877614335);
    const flags = (this.has(params.out) << 1) | (this.has(params.media) << 9) | (this.has(params.entities) << 7) | (this.has(params.ttl_period) << 25);
    this.int32(flags);
    this.int(params.id);
    this.int(params.pts);
    this.int(params.pts_count);
    this.int(params.date);
    this.flag(this.predicate, params.media);
    this.flagVector(this.predicate, params.entities);
    this.flag(this.int, params.ttl_period);
  },
  'photos.photos': function(params) {
    this.int32(-1916114267);
    this.vector(this.predicate, params.photos);
    this.vector(this.predicate, params.users);
  },
  'photos.photosSlice': function(params) {
    this.int32(352657236);
    this.int(params.count);
    this.vector(this.predicate, params.photos);
    this.vector(this.predicate, params.users);
  },
  'photos.photo': function(params) {
    this.int32(539045032);
    this.predicate(params.photo);
    this.vector(this.predicate, params.users);
  },
  'upload.file': function(params) {
    this.int32(157948117);
    this.predicate(params.type);
    this.int(params.mtime);
    this.bytes(params.bytes);
  },
  'upload.fileCdnRedirect': function(params) {
    this.int32(-242427324);
    this.int(params.dc_id);
    this.bytes(params.file_token);
    this.bytes(params.encryption_key);
    this.bytes(params.encryption_iv);
    this.vector(this.predicate, params.file_hashes);
  },
  'dcOption': function(params) {
    this.int32(414687501);
    const flags = (this.has(params.ipv6) << 0) | (this.has(params.media_only) << 1) | (this.has(params.tcpo_only) << 2) | (this.has(params.cdn) << 3) | (this.has(params.static) << 4) | (this.has(params.secret) << 10);
    this.int32(flags);
    this.int(params.id);
    this.string(params.ip_address);
    this.int(params.port);
    this.flag(this.bytes, params.secret);
  },
  'config': function(params) {
    this.int32(856375399);
    const flags = (this.has(params.phonecalls_enabled) << 1) | (this.has(params.default_p2p_contacts) << 3) | (this.has(params.preload_featured_stickers) << 4) | (this.has(params.ignore_phone_entities) << 5) | (this.has(params.revoke_pm_inbox) << 6) | (this.has(params.blocked_mode) << 8) | (this.has(params.pfs_enabled) << 13) | (this.has(params.tmp_sessions) << 0) | (this.has(params.autoupdate_url_prefix) << 7) | (this.has(params.gif_search_username) << 9) | (this.has(params.venue_search_username) << 10) | (this.has(params.img_search_username) << 11) | (this.has(params.static_maps_provider) << 12) | (this.has(params.suggested_lang_code) << 2) | (this.has(params.lang_pack_version) << 2) | (this.has(params.base_lang_pack_version) << 2);
    this.int32(flags);
    this.int(params.date);
    this.int(params.expires);
    this.Bool(params.test_mode);
    this.int(params.this_dc);
    this.vector(this.predicate, params.dc_options);
    this.string(params.dc_txt_domain_name);
    this.int(params.chat_size_max);
    this.int(params.megagroup_size_max);
    this.int(params.forwarded_count_max);
    this.int(params.online_update_period_ms);
    this.int(params.offline_blur_timeout_ms);
    this.int(params.offline_idle_timeout_ms);
    this.int(params.online_cloud_timeout_ms);
    this.int(params.notify_cloud_delay_ms);
    this.int(params.notify_default_delay_ms);
    this.int(params.push_chat_period_ms);
    this.int(params.push_chat_limit);
    this.int(params.saved_gifs_limit);
    this.int(params.edit_time_limit);
    this.int(params.revoke_time_limit);
    this.int(params.revoke_pm_time_limit);
    this.int(params.rating_e_decay);
    this.int(params.stickers_recent_limit);
    this.int(params.stickers_faved_limit);
    this.int(params.channels_read_media_period);
    this.flag(this.int, params.tmp_sessions);
    this.int(params.pinned_dialogs_count_max);
    this.int(params.pinned_infolder_count_max);
    this.int(params.call_receive_timeout_ms);
    this.int(params.call_ring_timeout_ms);
    this.int(params.call_connect_timeout_ms);
    this.int(params.call_packet_timeout_ms);
    this.string(params.me_url_prefix);
    this.flag(this.string, params.autoupdate_url_prefix);
    this.flag(this.string, params.gif_search_username);
    this.flag(this.string, params.venue_search_username);
    this.flag(this.string, params.img_search_username);
    this.flag(this.string, params.static_maps_provider);
    this.int(params.caption_length_max);
    this.int(params.message_length_max);
    this.int(params.webfile_dc_id);
    this.flag(this.string, params.suggested_lang_code);
    this.flag(this.int, params.lang_pack_version);
    this.flag(this.int, params.base_lang_pack_version);
    this.int(params.schedule_period_foreground_ms);
    this.int(params.schedule_period_background_ms);
    this.int(params.schedule_period_background_delay_ms);
    this.int(params.upload_chunk_size_kb);
    this.int(params.download_chunk_size_kb);
  },
  'nearestDc': function(params) {
    this.int32(-1910892683);
    this.string(params.country);
    this.int(params.this_dc);
    this.int(params.nearest_dc);
  },
  'help.appUpdate': function(params) {
    this.int32(-860107216);
    const flags = (this.has(params.can_not_skip) << 0) | (this.has(params.document) << 1) | (this.has(params.url) << 2) | (this.has(params.sticker) << 3);
    this.int32(flags);
    this.int(params.id);
    this.string(params.version);
    this.string(params.text);
    this.vector(this.predicate, params.entities);
    this.flag(this.predicate, params.document);
    this.flag(this.string, params.url);
    this.flag(this.predicate, params.sticker);
  },
  'help.noAppUpdate': function(params) {
    this.int32(-1000708810);
  },
  'help.inviteText': function(params) {
    this.int32(415997816);
    this.string(params.message);
  },
  'encryptedChatEmpty': function(params) {
    this.int32(-1417756512);
    this.int(params.id);
  },
  'encryptedChatWaiting': function(params) {
    this.int32(1722964307);
    this.int(params.id);
    this.long(params.access_hash);
    this.int(params.date);
    this.long(params.admin_id);
    this.long(params.participant_id);
  },
  'encryptedChatRequested': function(params) {
    this.int32(1223809356);
    const flags = (this.has(params.folder_id) << 0);
    this.int32(flags);
    this.flag(this.int, params.folder_id);
    this.int(params.id);
    this.long(params.access_hash);
    this.int(params.date);
    this.long(params.admin_id);
    this.long(params.participant_id);
    this.bytes(params.g_a);
  },
  'encryptedChat': function(params) {
    this.int32(1643173063);
    this.int(params.id);
    this.long(params.access_hash);
    this.int(params.date);
    this.long(params.admin_id);
    this.long(params.participant_id);
    this.bytes(params.g_a_or_b);
    this.long(params.key_fingerprint);
  },
  'encryptedChatDiscarded': function(params) {
    this.int32(505183301);
    const flags = (this.has(params.history_deleted) << 0);
    this.int32(flags);
    this.int(params.id);
  },
  'inputEncryptedChat': function(params) {
    this.int32(-247351839);
    this.int(params.chat_id);
    this.long(params.access_hash);
  },
  'encryptedFileEmpty': function(params) {
    this.int32(-1038136962);
  },
  'encryptedFile': function(params) {
    this.int32(1248893260);
    this.long(params.id);
    this.long(params.access_hash);
    this.int(params.size);
    this.int(params.dc_id);
    this.int(params.key_fingerprint);
  },
  'inputEncryptedFileEmpty': function(params) {
    this.int32(406307684);
  },
  'inputEncryptedFileUploaded': function(params) {
    this.int32(1690108678);
    this.long(params.id);
    this.int(params.parts);
    this.string(params.md5_checksum);
    this.int(params.key_fingerprint);
  },
  'inputEncryptedFile': function(params) {
    this.int32(1511503333);
    this.long(params.id);
    this.long(params.access_hash);
  },
  'inputEncryptedFileBigUploaded': function(params) {
    this.int32(767652808);
    this.long(params.id);
    this.int(params.parts);
    this.int(params.key_fingerprint);
  },
  'encryptedMessage': function(params) {
    this.int32(-317144808);
    this.long(params.random_id);
    this.int(params.chat_id);
    this.int(params.date);
    this.bytes(params.bytes);
    this.predicate(params.file);
  },
  'encryptedMessageService': function(params) {
    this.int32(594758406);
    this.long(params.random_id);
    this.int(params.chat_id);
    this.int(params.date);
    this.bytes(params.bytes);
  },
  'messages.dhConfigNotModified': function(params) {
    this.int32(-1058912715);
    this.bytes(params.random);
  },
  'messages.dhConfig': function(params) {
    this.int32(740433629);
    this.int(params.g);
    this.bytes(params.p);
    this.int(params.version);
    this.bytes(params.random);
  },
  'messages.sentEncryptedMessage': function(params) {
    this.int32(1443858741);
    this.int(params.date);
  },
  'messages.sentEncryptedFile': function(params) {
    this.int32(-1802240206);
    this.int(params.date);
    this.predicate(params.file);
  },
  'inputDocumentEmpty': function(params) {
    this.int32(1928391342);
  },
  'inputDocument': function(params) {
    this.int32(448771445);
    this.long(params.id);
    this.long(params.access_hash);
    this.bytes(params.file_reference);
  },
  'documentEmpty': function(params) {
    this.int32(922273905);
    this.long(params.id);
  },
  'document': function(params) {
    this.int32(512177195);
    const flags = (this.has(params.thumbs) << 0) | (this.has(params.video_thumbs) << 1);
    this.int32(flags);
    this.long(params.id);
    this.long(params.access_hash);
    this.bytes(params.file_reference);
    this.int(params.date);
    this.string(params.mime_type);
    this.int(params.size);
    this.flagVector(this.predicate, params.thumbs);
    this.flagVector(this.predicate, params.video_thumbs);
    this.int(params.dc_id);
    this.vector(this.predicate, params.attributes);
  },
  'help.support': function(params) {
    this.int32(398898678);
    this.string(params.phone_number);
    this.predicate(params.user);
  },
  'notifyPeer': function(params) {
    this.int32(-1613493288);
    this.predicate(params.peer);
  },
  'notifyUsers': function(params) {
    this.int32(-1261946036);
  },
  'notifyChats': function(params) {
    this.int32(-1073230141);
  },
  'notifyBroadcasts': function(params) {
    this.int32(-703403793);
  },
  'sendMessageTypingAction': function(params) {
    this.int32(381645902);
  },
  'sendMessageCancelAction': function(params) {
    this.int32(-44119819);
  },
  'sendMessageRecordVideoAction': function(params) {
    this.int32(-1584933265);
  },
  'sendMessageUploadVideoAction': function(params) {
    this.int32(-378127636);
    this.int(params.progress);
  },
  'sendMessageRecordAudioAction': function(params) {
    this.int32(-718310409);
  },
  'sendMessageUploadAudioAction': function(params) {
    this.int32(-212740181);
    this.int(params.progress);
  },
  'sendMessageUploadPhotoAction': function(params) {
    this.int32(-774682074);
    this.int(params.progress);
  },
  'sendMessageUploadDocumentAction': function(params) {
    this.int32(-1441998364);
    this.int(params.progress);
  },
  'sendMessageGeoLocationAction': function(params) {
    this.int32(393186209);
  },
  'sendMessageChooseContactAction': function(params) {
    this.int32(1653390447);
  },
  'sendMessageGamePlayAction': function(params) {
    this.int32(-580219064);
  },
  'sendMessageRecordRoundAction': function(params) {
    this.int32(-1997373508);
  },
  'sendMessageUploadRoundAction': function(params) {
    this.int32(608050278);
    this.int(params.progress);
  },
  'speakingInGroupCallAction': function(params) {
    this.int32(-651419003);
  },
  'sendMessageHistoryImportAction': function(params) {
    this.int32(-606432698);
    this.int(params.progress);
  },
  'sendMessageChooseStickerAction': function(params) {
    this.int32(-1336228175);
  },
  'sendMessageEmojiInteraction': function(params) {
    this.int32(1781674934);
    this.string(params.emoticon);
    this.predicate(params.interaction);
  },
  'sendMessageEmojiInteractionSeen': function(params) {
    this.int32(-1234857938);
    this.string(params.emoticon);
  },
  'contacts.found': function(params) {
    this.int32(-1290580579);
    this.vector(this.predicate, params.my_results);
    this.vector(this.predicate, params.results);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'inputPrivacyKeyStatusTimestamp': function(params) {
    this.int32(1335282456);
  },
  'inputPrivacyKeyChatInvite': function(params) {
    this.int32(-1107622874);
  },
  'inputPrivacyKeyPhoneCall': function(params) {
    this.int32(-88417185);
  },
  'inputPrivacyKeyPhoneP2P': function(params) {
    this.int32(-610373422);
  },
  'inputPrivacyKeyForwards': function(params) {
    this.int32(-1529000952);
  },
  'inputPrivacyKeyProfilePhoto': function(params) {
    this.int32(1461304012);
  },
  'inputPrivacyKeyPhoneNumber': function(params) {
    this.int32(55761658);
  },
  'inputPrivacyKeyAddedByPhone': function(params) {
    this.int32(-786326563);
  },
  'privacyKeyStatusTimestamp': function(params) {
    this.int32(-1137792208);
  },
  'privacyKeyChatInvite': function(params) {
    this.int32(1343122938);
  },
  'privacyKeyPhoneCall': function(params) {
    this.int32(1030105979);
  },
  'privacyKeyPhoneP2P': function(params) {
    this.int32(961092808);
  },
  'privacyKeyForwards': function(params) {
    this.int32(1777096355);
  },
  'privacyKeyProfilePhoto': function(params) {
    this.int32(-1777000467);
  },
  'privacyKeyPhoneNumber': function(params) {
    this.int32(-778378131);
  },
  'privacyKeyAddedByPhone': function(params) {
    this.int32(1124062251);
  },
  'inputPrivacyValueAllowContacts': function(params) {
    this.int32(218751099);
  },
  'inputPrivacyValueAllowAll': function(params) {
    this.int32(407582158);
  },
  'inputPrivacyValueAllowUsers': function(params) {
    this.int32(320652927);
    this.vector(this.predicate, params.users);
  },
  'inputPrivacyValueDisallowContacts': function(params) {
    this.int32(195371015);
  },
  'inputPrivacyValueDisallowAll': function(params) {
    this.int32(-697604407);
  },
  'inputPrivacyValueDisallowUsers': function(params) {
    this.int32(-1877932953);
    this.vector(this.predicate, params.users);
  },
  'inputPrivacyValueAllowChatParticipants': function(params) {
    this.int32(-2079962673);
    this.vector(this.long, params.chats);
  },
  'inputPrivacyValueDisallowChatParticipants': function(params) {
    this.int32(-380694650);
    this.vector(this.long, params.chats);
  },
  'privacyValueAllowContacts': function(params) {
    this.int32(-123988);
  },
  'privacyValueAllowAll': function(params) {
    this.int32(1698855810);
  },
  'privacyValueAllowUsers': function(params) {
    this.int32(-1198497870);
    this.vector(this.long, params.users);
  },
  'privacyValueDisallowContacts': function(params) {
    this.int32(-125240806);
  },
  'privacyValueDisallowAll': function(params) {
    this.int32(-1955338397);
  },
  'privacyValueDisallowUsers': function(params) {
    this.int32(-463335103);
    this.vector(this.long, params.users);
  },
  'privacyValueAllowChatParticipants': function(params) {
    this.int32(1796427406);
    this.vector(this.long, params.chats);
  },
  'privacyValueDisallowChatParticipants': function(params) {
    this.int32(1103656293);
    this.vector(this.long, params.chats);
  },
  'account.privacyRules': function(params) {
    this.int32(1352683077);
    this.vector(this.predicate, params.rules);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'accountDaysTTL': function(params) {
    this.int32(-1194283041);
    this.int(params.days);
  },
  'documentAttributeImageSize': function(params) {
    this.int32(1815593308);
    this.int(params.w);
    this.int(params.h);
  },
  'documentAttributeAnimated': function(params) {
    this.int32(297109817);
  },
  'documentAttributeSticker': function(params) {
    this.int32(1662637586);
    const flags = (this.has(params.mask) << 1) | (this.has(params.mask_coords) << 0);
    this.int32(flags);
    this.string(params.alt);
    this.predicate(params.stickerset);
    this.flag(this.predicate, params.mask_coords);
  },
  'documentAttributeVideo': function(params) {
    this.int32(250621158);
    const flags = (this.has(params.round_message) << 0) | (this.has(params.supports_streaming) << 1);
    this.int32(flags);
    this.int(params.duration);
    this.int(params.w);
    this.int(params.h);
  },
  'documentAttributeAudio': function(params) {
    this.int32(-1739392570);
    const flags = (this.has(params.voice) << 10) | (this.has(params.title) << 0) | (this.has(params.performer) << 1) | (this.has(params.waveform) << 2);
    this.int32(flags);
    this.int(params.duration);
    this.flag(this.string, params.title);
    this.flag(this.string, params.performer);
    this.flag(this.bytes, params.waveform);
  },
  'documentAttributeFilename': function(params) {
    this.int32(358154344);
    this.string(params.file_name);
  },
  'documentAttributeHasStickers': function(params) {
    this.int32(-1744710921);
  },
  'messages.stickersNotModified': function(params) {
    this.int32(-244016606);
  },
  'messages.stickers': function(params) {
    this.int32(816245886);
    this.long(params.hash);
    this.vector(this.predicate, params.stickers);
  },
  'stickerPack': function(params) {
    this.int32(313694676);
    this.string(params.emoticon);
    this.vector(this.long, params.documents);
  },
  'messages.allStickersNotModified': function(params) {
    this.int32(-395967805);
  },
  'messages.allStickers': function(params) {
    this.int32(-843329861);
    this.long(params.hash);
    this.vector(this.predicate, params.sets);
  },
  'messages.affectedMessages': function(params) {
    this.int32(-2066640507);
    this.int(params.pts);
    this.int(params.pts_count);
  },
  'webPageEmpty': function(params) {
    this.int32(-350980120);
    this.long(params.id);
  },
  'webPagePending': function(params) {
    this.int32(-981018084);
    this.long(params.id);
    this.int(params.date);
  },
  'webPage': function(params) {
    this.int32(-392411726);
    const flags = (this.has(params.type) << 0) | (this.has(params.site_name) << 1) | (this.has(params.title) << 2) | (this.has(params.description) << 3) | (this.has(params.photo) << 4) | (this.has(params.embed_url) << 5) | (this.has(params.embed_type) << 5) | (this.has(params.embed_width) << 6) | (this.has(params.embed_height) << 6) | (this.has(params.duration) << 7) | (this.has(params.author) << 8) | (this.has(params.document) << 9) | (this.has(params.cached_page) << 10) | (this.has(params.attributes) << 12);
    this.int32(flags);
    this.long(params.id);
    this.string(params.url);
    this.string(params.display_url);
    this.int(params.hash);
    this.flag(this.string, params.type);
    this.flag(this.string, params.site_name);
    this.flag(this.string, params.title);
    this.flag(this.string, params.description);
    this.flag(this.predicate, params.photo);
    this.flag(this.string, params.embed_url);
    this.flag(this.string, params.embed_type);
    this.flag(this.int, params.embed_width);
    this.flag(this.int, params.embed_height);
    this.flag(this.int, params.duration);
    this.flag(this.string, params.author);
    this.flag(this.predicate, params.document);
    this.flag(this.predicate, params.cached_page);
    this.flagVector(this.predicate, params.attributes);
  },
  'webPageNotModified': function(params) {
    this.int32(1930545681);
    const flags = (this.has(params.cached_page_views) << 0);
    this.int32(flags);
    this.flag(this.int, params.cached_page_views);
  },
  'authorization': function(params) {
    this.int32(-1392388579);
    const flags = (this.has(params.current) << 0) | (this.has(params.official_app) << 1) | (this.has(params.password_pending) << 2);
    this.int32(flags);
    this.long(params.hash);
    this.string(params.device_model);
    this.string(params.platform);
    this.string(params.system_version);
    this.int(params.api_id);
    this.string(params.app_name);
    this.string(params.app_version);
    this.int(params.date_created);
    this.int(params.date_active);
    this.string(params.ip);
    this.string(params.country);
    this.string(params.region);
  },
  'account.authorizations': function(params) {
    this.int32(307276766);
    this.vector(this.predicate, params.authorizations);
  },
  'account.password': function(params) {
    this.int32(408623183);
    const flags = (this.has(params.has_recovery) << 0) | (this.has(params.has_secure_values) << 1) | (this.has(params.has_password) << 2) | (this.has(params.current_algo) << 2) | (this.has(params.srp_B) << 2) | (this.has(params.srp_id) << 2) | (this.has(params.hint) << 3) | (this.has(params.email_unconfirmed_pattern) << 4) | (this.has(params.pending_reset_date) << 5);
    this.int32(flags);
    this.flag(this.predicate, params.current_algo);
    this.flag(this.bytes, params.srp_B);
    this.flag(this.long, params.srp_id);
    this.flag(this.string, params.hint);
    this.flag(this.string, params.email_unconfirmed_pattern);
    this.predicate(params.new_algo);
    this.predicate(params.new_secure_algo);
    this.bytes(params.secure_random);
    this.flag(this.int, params.pending_reset_date);
  },
  'account.password2': function(params) {
    this.int32(-902187961);
    const flags = (this.has(params.has_recovery) << 0) | (this.has(params.has_secure_values) << 1);
    this.int32(flags);
    this.bytes(params.current_salt);
    this.bytes(params.new_salt);
    this.bytes(params.new_secure_salt);
    this.bytes(params.secure_random);
    this.string(params.hint);
    this.string(params.email_unconfirmed_pattern);
  },
  'account.passwordSettings': function(params) {
    this.int32(-1705233435);
    const flags = (this.has(params.email) << 0) | (this.has(params.secure_settings) << 1);
    this.int32(flags);
    this.flag(this.string, params.email);
    this.flag(this.predicate, params.secure_settings);
  },
  'account.passwordInputSettings': function(params) {
    this.int32(-1036572727);
    const flags = (this.has(params.new_algo) << 0) | (this.has(params.new_password_hash) << 0) | (this.has(params.hint) << 0) | (this.has(params.email) << 1) | (this.has(params.new_secure_settings) << 2);
    this.int32(flags);
    this.flag(this.predicate, params.new_algo);
    this.flag(this.bytes, params.new_password_hash);
    this.flag(this.string, params.hint);
    this.flag(this.string, params.email);
    this.flag(this.predicate, params.new_secure_settings);
  },
  'account.passwordInputSettingsLayer68': function(params) {
    this.int32(570402317);
    const flags = (this.has(params.new_salt) << 0) | (this.has(params.new_password_hash) << 0) | (this.has(params.hint) << 0) | (this.has(params.email) << 1) | (this.has(params.new_secure_salt) << 2) | (this.has(params.new_secure_secret) << 2) | (this.has(params.new_secure_secret_id) << 2);
    this.int32(flags);
    this.flag(this.bytes, params.new_salt);
    this.flag(this.bytes, params.new_password_hash);
    this.flag(this.string, params.hint);
    this.flag(this.string, params.email);
    this.flag(this.bytes, params.new_secure_salt);
    this.flag(this.bytes, params.new_secure_secret);
    this.flag(this.long, params.new_secure_secret_id);
  },
  'auth.passwordRecovery': function(params) {
    this.int32(326715557);
    this.string(params.email_pattern);
  },
  'receivedNotifyMessage': function(params) {
    this.int32(-1551583367);
    this.int(params.id);
    this.int(params.flags);
  },
  'chatInviteExported': function(params) {
    this.int32(-1316944408);
    const flags = (this.has(params.revoked) << 0) | (this.has(params.permanent) << 5) | (this.has(params.start_date) << 4) | (this.has(params.expire_date) << 1) | (this.has(params.usage_limit) << 2) | (this.has(params.usage) << 3);
    this.int32(flags);
    this.string(params.link);
    this.long(params.admin_id);
    this.int(params.date);
    this.flag(this.int, params.start_date);
    this.flag(this.int, params.expire_date);
    this.flag(this.int, params.usage_limit);
    this.flag(this.int, params.usage);
  },
  'chatInviteExportedLayer122': function(params) {
    this.int32(-64092740);
    this.string(params.link);
  },
  'chatInviteEmptyLayer122': function(params) {
    this.int32(1776236393);
  },
  'chatInviteAlready': function(params) {
    this.int32(1516793212);
    this.predicate(params.chat);
  },
  'chatInvite': function(params) {
    this.int32(-540871282);
    const flags = (this.has(params.channel) << 0) | (this.has(params.broadcast) << 1) | (this.has(params.public) << 2) | (this.has(params.megagroup) << 3) | (this.has(params.participants) << 4);
    this.int32(flags);
    this.string(params.title);
    this.predicate(params.photo);
    this.int(params.participants_count);
    this.flagVector(this.predicate, params.participants);
  },
  'chatInviteLayer84': function(params) {
    this.int32(-613092008);
    const flags = (this.has(params.channel) << 0) | (this.has(params.broadcast) << 1) | (this.has(params.public) << 2) | (this.has(params.megagroup) << 3) | (this.has(params.participants) << 4);
    this.int32(flags);
    this.string(params.title);
    this.predicate(params.photo);
    this.int(params.participants_count);
    this.flagVector(this.predicate, params.participants);
  },
  'chatInvitePeek': function(params) {
    this.int32(1634294960);
    this.predicate(params.chat);
    this.int(params.expires);
  },
  'inputStickerSetEmpty': function(params) {
    this.int32(-4838507);
  },
  'inputStickerSetID': function(params) {
    this.int32(-1645763991);
    this.long(params.id);
    this.long(params.access_hash);
  },
  'inputStickerSetShortName': function(params) {
    this.int32(-2044933984);
    this.string(params.short_name);
  },
  'inputStickerSetAnimatedEmoji': function(params) {
    this.int32(42402760);
  },
  'inputStickerSetDice': function(params) {
    this.int32(-427863538);
    this.string(params.emoticon);
  },
  'stickerSet': function(params) {
    this.int32(-673242758);
    const flags = (this.has(params.archived) << 1) | (this.has(params.official) << 2) | (this.has(params.masks) << 3) | (this.has(params.animated) << 5) | (this.has(params.installed_date) << 0) | (this.has(params.thumbs) << 4) | (this.has(params.thumb_dc_id) << 4) | (this.has(params.thumb_version) << 4);
    this.int32(flags);
    this.flag(this.int, params.installed_date);
    this.long(params.id);
    this.long(params.access_hash);
    this.string(params.title);
    this.string(params.short_name);
    this.flagVector(this.predicate, params.thumbs);
    this.flag(this.int, params.thumb_dc_id);
    this.flag(this.int, params.thumb_version);
    this.int(params.count);
    this.int(params.hash);
  },
  'messages.stickerSet': function(params) {
    this.int32(-1240849242);
    this.predicate(params.set);
    this.vector(this.predicate, params.packs);
    this.vector(this.predicate, params.documents);
  },
  'botCommand': function(params) {
    this.int32(-1032140601);
    this.string(params.command);
    this.string(params.description);
  },
  'botInfo': function(params) {
    this.int32(460632885);
    this.long(params.user_id);
    this.string(params.description);
    this.vector(this.predicate, params.commands);
  },
  'keyboardButton': function(params) {
    this.int32(-1560655744);
    this.string(params.text);
  },
  'keyboardButtonUrl': function(params) {
    this.int32(629866245);
    this.string(params.text);
    this.string(params.url);
  },
  'keyboardButtonCallback': function(params) {
    this.int32(901503851);
    const flags = (this.has(params.requires_password) << 0);
    this.int32(flags);
    this.string(params.text);
    this.bytes(params.data);
  },
  'keyboardButtonRequestPhone': function(params) {
    this.int32(-1318425559);
    this.string(params.text);
  },
  'keyboardButtonRequestGeoLocation': function(params) {
    this.int32(-59151553);
    this.string(params.text);
  },
  'keyboardButtonSwitchInline': function(params) {
    this.int32(90744648);
    const flags = (this.has(params.same_peer) << 0);
    this.int32(flags);
    this.string(params.text);
    this.string(params.query);
  },
  'keyboardButtonGame': function(params) {
    this.int32(1358175439);
    this.string(params.text);
  },
  'keyboardButtonBuy': function(params) {
    this.int32(-1344716869);
    this.string(params.text);
  },
  'keyboardButtonUrlAuth': function(params) {
    this.int32(280464681);
    const flags = (this.has(params.fwd_text) << 0);
    this.int32(flags);
    this.string(params.text);
    this.flag(this.string, params.fwd_text);
    this.string(params.url);
    this.int(params.button_id);
  },
  'inputKeyboardButtonUrlAuth': function(params) {
    this.int32(-802258988);
    const flags = (this.has(params.request_write_access) << 0) | (this.has(params.fwd_text) << 1);
    this.int32(flags);
    this.string(params.text);
    this.flag(this.string, params.fwd_text);
    this.string(params.url);
    this.predicate(params.bot);
  },
  'keyboardButtonRequestPoll': function(params) {
    this.int32(-1144565411);
    const flags = (this.has(params.quiz) << 0);
    this.int32(flags);
    this.flag(this.Bool, params.quiz);
    this.string(params.text);
  },
  'keyboardButtonRow': function(params) {
    this.int32(2002815875);
    this.vector(this.predicate, params.buttons);
  },
  'replyKeyboardHide': function(params) {
    this.int32(-1606526075);
    const flags = (this.has(params.selective) << 2);
    this.int32(flags);
  },
  'replyKeyboardForceReply': function(params) {
    this.int32(-2035021048);
    const flags = (this.has(params.single_use) << 1) | (this.has(params.selective) << 2) | (this.has(params.placeholder) << 3);
    this.int32(flags);
    this.flag(this.string, params.placeholder);
  },
  'replyKeyboardMarkup': function(params) {
    this.int32(-2049074735);
    const flags = (this.has(params.resize) << 0) | (this.has(params.single_use) << 1) | (this.has(params.selective) << 2) | (this.has(params.placeholder) << 3);
    this.int32(flags);
    this.vector(this.predicate, params.rows);
    this.flag(this.string, params.placeholder);
  },
  'replyInlineMarkup': function(params) {
    this.int32(1218642516);
    this.vector(this.predicate, params.rows);
  },
  'messageEntityUnknown': function(params) {
    this.int32(-1148011883);
    this.int(params.offset);
    this.int(params.length);
  },
  'messageEntityMention': function(params) {
    this.int32(-100378723);
    this.int(params.offset);
    this.int(params.length);
  },
  'messageEntityHashtag': function(params) {
    this.int32(1868782349);
    this.int(params.offset);
    this.int(params.length);
  },
  'messageEntityBotCommand': function(params) {
    this.int32(1827637959);
    this.int(params.offset);
    this.int(params.length);
  },
  'messageEntityUrl': function(params) {
    this.int32(1859134776);
    this.int(params.offset);
    this.int(params.length);
  },
  'messageEntityEmail': function(params) {
    this.int32(1692693954);
    this.int(params.offset);
    this.int(params.length);
  },
  'messageEntityBold': function(params) {
    this.int32(-1117713463);
    this.int(params.offset);
    this.int(params.length);
  },
  'messageEntityItalic': function(params) {
    this.int32(-2106619040);
    this.int(params.offset);
    this.int(params.length);
  },
  'messageEntityCode': function(params) {
    this.int32(681706865);
    this.int(params.offset);
    this.int(params.length);
  },
  'messageEntityPre': function(params) {
    this.int32(1938967520);
    this.int(params.offset);
    this.int(params.length);
    this.string(params.language);
  },
  'messageEntityTextUrl': function(params) {
    this.int32(1990644519);
    this.int(params.offset);
    this.int(params.length);
    this.string(params.url);
  },
  'messageEntityMentionName': function(params) {
    this.int32(-595914432);
    this.int(params.offset);
    this.int(params.length);
    this.long(params.user_id);
  },
  'inputMessageEntityMentionName': function(params) {
    this.int32(546203849);
    this.int(params.offset);
    this.int(params.length);
    this.predicate(params.user_id);
  },
  'messageEntityPhone': function(params) {
    this.int32(-1687559349);
    this.int(params.offset);
    this.int(params.length);
  },
  'messageEntityCashtag': function(params) {
    this.int32(1280209983);
    this.int(params.offset);
    this.int(params.length);
  },
  'messageEntityUnderline': function(params) {
    this.int32(-1672577397);
    this.int(params.offset);
    this.int(params.length);
  },
  'messageEntityStrike': function(params) {
    this.int32(-1090087980);
    this.int(params.offset);
    this.int(params.length);
  },
  'messageEntityBlockquote': function(params) {
    this.int32(34469328);
    this.int(params.offset);
    this.int(params.length);
  },
  'messageEntityBankCard': function(params) {
    this.int32(1981704948);
    this.int(params.offset);
    this.int(params.length);
  },
  'inputChannelEmpty': function(params) {
    this.int32(-292807034);
  },
  'inputChannel': function(params) {
    this.int32(-212145112);
    this.long(params.channel_id);
    this.long(params.access_hash);
  },
  'inputChannelFromMessage': function(params) {
    this.int32(1536380829);
    this.predicate(params.peer);
    this.int(params.msg_id);
    this.long(params.channel_id);
  },
  'contacts.resolvedPeer': function(params) {
    this.int32(2131196633);
    this.predicate(params.peer);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'messageRange': function(params) {
    this.int32(182649427);
    this.int(params.min_id);
    this.int(params.max_id);
  },
  'updates.channelDifferenceEmpty': function(params) {
    this.int32(1041346555);
    const flags = (this.has(params.final) << 0) | (this.has(params.timeout) << 1);
    this.int32(flags);
    this.int(params.pts);
    this.flag(this.int, params.timeout);
  },
  'updates.channelDifferenceTooLong': function(params) {
    this.int32(-1531132162);
    const flags = (this.has(params.final) << 0) | (this.has(params.timeout) << 1);
    this.int32(flags);
    this.flag(this.int, params.timeout);
    this.predicate(params.dialog);
    this.vector(this.predicate, params.messages);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'updates.channelDifference': function(params) {
    this.int32(543450958);
    const flags = (this.has(params.final) << 0) | (this.has(params.timeout) << 1);
    this.int32(flags);
    this.int(params.pts);
    this.flag(this.int, params.timeout);
    this.vector(this.predicate, params.new_messages);
    this.vector(this.predicate, params.other_updates);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'channelMessagesFilterEmpty': function(params) {
    this.int32(-1798033689);
  },
  'channelMessagesFilter': function(params) {
    this.int32(-847783593);
    const flags = (this.has(params.exclude_new_messages) << 1);
    this.int32(flags);
    this.vector(this.predicate, params.ranges);
  },
  'channelParticipant': function(params) {
    this.int32(-1072953408);
    this.long(params.user_id);
    this.int(params.date);
  },
  'channelParticipantSelf': function(params) {
    this.int32(682146919);
    this.long(params.user_id);
    this.long(params.inviter_id);
    this.int(params.date);
  },
  'channelParticipantCreator': function(params) {
    this.int32(803602899);
    const flags = (this.has(params.rank) << 0);
    this.int32(flags);
    this.long(params.user_id);
    this.predicate(params.admin_rights);
    this.flag(this.string, params.rank);
  },
  'channelParticipantAdmin': function(params) {
    this.int32(885242707);
    const flags = (this.has(params.can_edit) << 0) | (this.has(params.self) << 1) | (this.has(params.inviter_id) << 1) | (this.has(params.rank) << 2);
    this.int32(flags);
    this.long(params.user_id);
    this.flag(this.long, params.inviter_id);
    this.long(params.promoted_by);
    this.int(params.date);
    this.predicate(params.admin_rights);
    this.flag(this.string, params.rank);
  },
  'channelParticipantBanned': function(params) {
    this.int32(1844969806);
    const flags = (this.has(params.left) << 0);
    this.int32(flags);
    this.predicate(params.peer);
    this.long(params.kicked_by);
    this.int(params.date);
    this.predicate(params.banned_rights);
  },
  'channelParticipantLeft': function(params) {
    this.int32(453242886);
    this.predicate(params.peer);
  },
  'channelParticipantsRecent': function(params) {
    this.int32(-566281095);
  },
  'channelParticipantsAdmins': function(params) {
    this.int32(-1268741783);
  },
  'channelParticipantsKicked': function(params) {
    this.int32(-1548400251);
    this.string(params.q);
  },
  'channelParticipantsBots': function(params) {
    this.int32(-1328445861);
  },
  'channelParticipantsBanned': function(params) {
    this.int32(338142689);
    this.string(params.q);
  },
  'channelParticipantsSearch': function(params) {
    this.int32(106343499);
    this.string(params.q);
  },
  'channelParticipantsContacts': function(params) {
    this.int32(-1150621555);
    this.string(params.q);
  },
  'channelParticipantsMentions': function(params) {
    this.int32(-531931925);
    const flags = (this.has(params.q) << 0) | (this.has(params.top_msg_id) << 1);
    this.int32(flags);
    this.flag(this.string, params.q);
    this.flag(this.int, params.top_msg_id);
  },
  'channels.channelParticipants': function(params) {
    this.int32(-1699676497);
    this.int(params.count);
    this.vector(this.predicate, params.participants);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'channels.channelParticipantsNotModified': function(params) {
    this.int32(-266911767);
  },
  'channels.channelParticipant': function(params) {
    this.int32(-541588713);
    this.predicate(params.participant);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'help.termsOfService': function(params) {
    this.int32(2013922064);
    const flags = (this.has(params.popup) << 0) | (this.has(params.min_age_confirm) << 1);
    this.int32(flags);
    this.predicate(params.id);
    this.string(params.text);
    this.vector(this.predicate, params.entities);
    this.flag(this.int, params.min_age_confirm);
  },
  'messages.savedGifsNotModified': function(params) {
    this.int32(-402498398);
  },
  'messages.savedGifs': function(params) {
    this.int32(-2069878259);
    this.long(params.hash);
    this.vector(this.predicate, params.gifs);
  },
  'inputBotInlineMessageMediaAuto': function(params) {
    this.int32(864077702);
    const flags = (this.has(params.entities) << 1) | (this.has(params.reply_markup) << 2);
    this.int32(flags);
    this.string(params.message);
    this.flagVector(this.predicate, params.entities);
    this.flag(this.predicate, params.reply_markup);
  },
  'inputBotInlineMessageText': function(params) {
    this.int32(1036876423);
    const flags = (this.has(params.no_webpage) << 0) | (this.has(params.entities) << 1) | (this.has(params.reply_markup) << 2);
    this.int32(flags);
    this.string(params.message);
    this.flagVector(this.predicate, params.entities);
    this.flag(this.predicate, params.reply_markup);
  },
  'inputBotInlineMessageMediaGeo': function(params) {
    this.int32(-1768777083);
    const flags = (this.has(params.heading) << 0) | (this.has(params.period) << 1) | (this.has(params.proximity_notification_radius) << 3) | (this.has(params.reply_markup) << 2);
    this.int32(flags);
    this.predicate(params.geo_point);
    this.flag(this.int, params.heading);
    this.flag(this.int, params.period);
    this.flag(this.int, params.proximity_notification_radius);
    this.flag(this.predicate, params.reply_markup);
  },
  'inputBotInlineMessageMediaVenue': function(params) {
    this.int32(1098628881);
    const flags = (this.has(params.reply_markup) << 2);
    this.int32(flags);
    this.predicate(params.geo_point);
    this.string(params.title);
    this.string(params.address);
    this.string(params.provider);
    this.string(params.venue_id);
    this.string(params.venue_type);
    this.flag(this.predicate, params.reply_markup);
  },
  'inputBotInlineMessageMediaContact': function(params) {
    this.int32(-1494368259);
    const flags = (this.has(params.reply_markup) << 2);
    this.int32(flags);
    this.string(params.phone_number);
    this.string(params.first_name);
    this.string(params.last_name);
    this.string(params.vcard);
    this.flag(this.predicate, params.reply_markup);
  },
  'inputBotInlineMessageGame': function(params) {
    this.int32(1262639204);
    const flags = (this.has(params.reply_markup) << 2);
    this.int32(flags);
    this.flag(this.predicate, params.reply_markup);
  },
  'inputBotInlineMessageMediaInvoice': function(params) {
    this.int32(-672693723);
    const flags = (this.has(params.photo) << 0) | (this.has(params.reply_markup) << 2);
    this.int32(flags);
    this.string(params.title);
    this.string(params.description);
    this.flag(this.predicate, params.photo);
    this.predicate(params.invoice);
    this.bytes(params.payload);
    this.string(params.provider);
    this.predicate(params.provider_data);
    this.flag(this.predicate, params.reply_markup);
  },
  'inputBotInlineResult': function(params) {
    this.int32(-2000710887);
    const flags = (this.has(params.title) << 1) | (this.has(params.description) << 2) | (this.has(params.url) << 3) | (this.has(params.thumb) << 4) | (this.has(params.content) << 5);
    this.int32(flags);
    this.string(params.id);
    this.string(params.type);
    this.flag(this.string, params.title);
    this.flag(this.string, params.description);
    this.flag(this.string, params.url);
    this.flag(this.predicate, params.thumb);
    this.flag(this.predicate, params.content);
    this.predicate(params.send_message);
  },
  'inputBotInlineResultPhoto': function(params) {
    this.int32(-1462213465);
    this.string(params.id);
    this.string(params.type);
    this.predicate(params.photo);
    this.predicate(params.send_message);
  },
  'inputBotInlineResultDocument': function(params) {
    this.int32(-459324);
    const flags = (this.has(params.title) << 1) | (this.has(params.description) << 2);
    this.int32(flags);
    this.string(params.id);
    this.string(params.type);
    this.flag(this.string, params.title);
    this.flag(this.string, params.description);
    this.predicate(params.document);
    this.predicate(params.send_message);
  },
  'inputBotInlineResultGame': function(params) {
    this.int32(1336154098);
    this.string(params.id);
    this.string(params.short_name);
    this.predicate(params.send_message);
  },
  'botInlineMessageMediaAuto': function(params) {
    this.int32(1984755728);
    const flags = (this.has(params.entities) << 1) | (this.has(params.reply_markup) << 2);
    this.int32(flags);
    this.string(params.message);
    this.flagVector(this.predicate, params.entities);
    this.flag(this.predicate, params.reply_markup);
  },
  'botInlineMessageText': function(params) {
    this.int32(-1937807902);
    const flags = (this.has(params.no_webpage) << 0) | (this.has(params.entities) << 1) | (this.has(params.reply_markup) << 2);
    this.int32(flags);
    this.string(params.message);
    this.flagVector(this.predicate, params.entities);
    this.flag(this.predicate, params.reply_markup);
  },
  'botInlineMessageMediaGeo': function(params) {
    this.int32(85477117);
    const flags = (this.has(params.heading) << 0) | (this.has(params.period) << 1) | (this.has(params.proximity_notification_radius) << 3) | (this.has(params.reply_markup) << 2);
    this.int32(flags);
    this.predicate(params.geo);
    this.flag(this.int, params.heading);
    this.flag(this.int, params.period);
    this.flag(this.int, params.proximity_notification_radius);
    this.flag(this.predicate, params.reply_markup);
  },
  'botInlineMessageMediaVenue': function(params) {
    this.int32(-1970903652);
    const flags = (this.has(params.reply_markup) << 2);
    this.int32(flags);
    this.predicate(params.geo);
    this.string(params.title);
    this.string(params.address);
    this.string(params.provider);
    this.string(params.venue_id);
    this.string(params.venue_type);
    this.flag(this.predicate, params.reply_markup);
  },
  'botInlineMessageMediaContact': function(params) {
    this.int32(416402882);
    const flags = (this.has(params.reply_markup) << 2);
    this.int32(flags);
    this.string(params.phone_number);
    this.string(params.first_name);
    this.string(params.last_name);
    this.string(params.vcard);
    this.flag(this.predicate, params.reply_markup);
  },
  'botInlineMessageMediaInvoice': function(params) {
    this.int32(894081801);
    const flags = (this.has(params.shipping_address_requested) << 1) | (this.has(params.test) << 3) | (this.has(params.photo) << 0) | (this.has(params.reply_markup) << 2);
    this.int32(flags);
    this.string(params.title);
    this.string(params.description);
    this.flag(this.predicate, params.photo);
    this.string(params.currency);
    this.long(params.total_amount);
    this.flag(this.predicate, params.reply_markup);
  },
  'botInlineResult': function(params) {
    this.int32(295067450);
    const flags = (this.has(params.title) << 1) | (this.has(params.description) << 2) | (this.has(params.url) << 3) | (this.has(params.thumb) << 4) | (this.has(params.content) << 5);
    this.int32(flags);
    this.string(params.id);
    this.string(params.type);
    this.flag(this.string, params.title);
    this.flag(this.string, params.description);
    this.flag(this.string, params.url);
    this.flag(this.predicate, params.thumb);
    this.flag(this.predicate, params.content);
    this.predicate(params.send_message);
  },
  'botInlineMediaResult': function(params) {
    this.int32(400266251);
    const flags = (this.has(params.photo) << 0) | (this.has(params.document) << 1) | (this.has(params.title) << 2) | (this.has(params.description) << 3);
    this.int32(flags);
    this.string(params.id);
    this.string(params.type);
    this.flag(this.predicate, params.photo);
    this.flag(this.predicate, params.document);
    this.flag(this.string, params.title);
    this.flag(this.string, params.description);
    this.predicate(params.send_message);
  },
  'messages.botResults': function(params) {
    this.int32(-1803769784);
    const flags = (this.has(params.gallery) << 0) | (this.has(params.next_offset) << 1) | (this.has(params.switch_pm) << 2);
    this.int32(flags);
    this.long(params.query_id);
    this.flag(this.string, params.next_offset);
    this.flag(this.predicate, params.switch_pm);
    this.vector(this.predicate, params.results);
    this.int(params.cache_time);
    this.vector(this.predicate, params.users);
  },
  'exportedMessageLink': function(params) {
    this.int32(1571494644);
    this.string(params.link);
    this.string(params.html);
  },
  'messageFwdHeader': function(params) {
    this.int32(1601666510);
    const flags = (this.has(params.imported) << 7) | (this.has(params.from_id) << 0) | (this.has(params.from_name) << 5) | (this.has(params.channel_post) << 2) | (this.has(params.post_author) << 3) | (this.has(params.saved_from_peer) << 4) | (this.has(params.saved_from_msg_id) << 4) | (this.has(params.psa_type) << 6);
    this.int32(flags);
    this.flag(this.predicate, params.from_id);
    this.flag(this.string, params.from_name);
    this.int(params.date);
    this.flag(this.int, params.channel_post);
    this.flag(this.string, params.post_author);
    this.flag(this.predicate, params.saved_from_peer);
    this.flag(this.int, params.saved_from_msg_id);
    this.flag(this.string, params.psa_type);
  },
  'auth.codeTypeSms': function(params) {
    this.int32(1923290508);
  },
  'auth.codeTypeCall': function(params) {
    this.int32(1948046307);
  },
  'auth.codeTypeFlashCall': function(params) {
    this.int32(577556219);
  },
  'auth.sentCodeTypeApp': function(params) {
    this.int32(1035688326);
    this.int(params.length);
  },
  'auth.sentCodeTypeSms': function(params) {
    this.int32(-1073693790);
    this.int(params.length);
  },
  'auth.sentCodeTypeCall': function(params) {
    this.int32(1398007207);
    this.int(params.length);
  },
  'auth.sentCodeTypeFlashCall': function(params) {
    this.int32(-1425815847);
    this.string(params.pattern);
  },
  'messages.botCallbackAnswer': function(params) {
    this.int32(911761060);
    const flags = (this.has(params.alert) << 1) | (this.has(params.has_url) << 3) | (this.has(params.native_ui) << 4) | (this.has(params.message) << 0) | (this.has(params.url) << 2);
    this.int32(flags);
    this.flag(this.string, params.message);
    this.flag(this.string, params.url);
    this.int(params.cache_time);
  },
  'messages.messageEditData': function(params) {
    this.int32(649453030);
    const flags = (this.has(params.caption) << 0);
    this.int32(flags);
  },
  'inputBotInlineMessageID': function(params) {
    this.int32(-1995686519);
    this.int(params.dc_id);
    this.long(params.id);
    this.long(params.access_hash);
  },
  'inputBotInlineMessageID64': function(params) {
    this.int32(-1227287081);
    this.int(params.dc_id);
    this.long(params.owner_id);
    this.int(params.id);
    this.long(params.access_hash);
  },
  'inlineBotSwitchPM': function(params) {
    this.int32(1008755359);
    this.string(params.text);
    this.string(params.start_param);
  },
  'messages.peerDialogs': function(params) {
    this.int32(863093588);
    this.vector(this.predicate, params.dialogs);
    this.vector(this.predicate, params.messages);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
    this.predicate(params.state);
  },
  'topPeer': function(params) {
    this.int32(-305282981);
    this.predicate(params.peer);
    this.double(params.rating);
  },
  'topPeerCategoryBotsPM': function(params) {
    this.int32(-1419371685);
  },
  'topPeerCategoryBotsInline': function(params) {
    this.int32(344356834);
  },
  'topPeerCategoryCorrespondents': function(params) {
    this.int32(104314861);
  },
  'topPeerCategoryGroups': function(params) {
    this.int32(-1122524854);
  },
  'topPeerCategoryChannels': function(params) {
    this.int32(371037736);
  },
  'topPeerCategoryPhoneCalls': function(params) {
    this.int32(511092620);
  },
  'topPeerCategoryForwardUsers': function(params) {
    this.int32(-1472172887);
  },
  'topPeerCategoryForwardChats': function(params) {
    this.int32(-68239120);
  },
  'topPeerCategoryPeers': function(params) {
    this.int32(-75283823);
    this.predicate(params.category);
    this.int(params.count);
    this.vector(this.predicate, params.peers);
  },
  'contacts.topPeersNotModified': function(params) {
    this.int32(-567906571);
  },
  'contacts.topPeers': function(params) {
    this.int32(1891070632);
    this.vector(this.predicate, params.categories);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'contacts.topPeersDisabled': function(params) {
    this.int32(-1255369827);
  },
  'draftMessageEmpty': function(params) {
    this.int32(453805082);
    const flags = (this.has(params.date) << 0);
    this.int32(flags);
    this.flag(this.int, params.date);
  },
  'draftMessage': function(params) {
    this.int32(-40996577);
    const flags = (this.has(params.no_webpage) << 1) | (this.has(params.reply_to_msg_id) << 0) | (this.has(params.entities) << 3);
    this.int32(flags);
    this.flag(this.int, params.reply_to_msg_id);
    this.string(params.message);
    this.flagVector(this.predicate, params.entities);
    this.int(params.date);
  },
  'messages.featuredStickersNotModified': function(params) {
    this.int32(-958657434);
    this.int(params.count);
  },
  'messages.featuredStickers': function(params) {
    this.int32(-2067782896);
    this.long(params.hash);
    this.int(params.count);
    this.vector(this.predicate, params.sets);
    this.vector(this.long, params.unread);
  },
  'messages.recentStickersNotModified': function(params) {
    this.int32(186120336);
  },
  'messages.recentStickers': function(params) {
    this.int32(-1999405994);
    this.long(params.hash);
    this.vector(this.predicate, params.packs);
    this.vector(this.predicate, params.stickers);
    this.vector(this.int, params.dates);
  },
  'messages.archivedStickers': function(params) {
    this.int32(1338747336);
    this.int(params.count);
    this.vector(this.predicate, params.sets);
  },
  'messages.stickerSetInstallResultSuccess': function(params) {
    this.int32(946083368);
  },
  'messages.stickerSetInstallResultArchive': function(params) {
    this.int32(904138920);
    this.vector(this.predicate, params.sets);
  },
  'stickerSetCovered': function(params) {
    this.int32(1678812626);
    this.predicate(params.set);
    this.predicate(params.cover);
  },
  'stickerSetMultiCovered': function(params) {
    this.int32(872932635);
    this.predicate(params.set);
    this.vector(this.predicate, params.covers);
  },
  'maskCoords': function(params) {
    this.int32(-1361650766);
    this.int(params.n);
    this.double(params.x);
    this.double(params.y);
    this.double(params.zoom);
  },
  'inputStickeredMediaPhoto': function(params) {
    this.int32(1251549527);
    this.predicate(params.id);
  },
  'inputStickeredMediaDocument': function(params) {
    this.int32(70813275);
    this.predicate(params.id);
  },
  'game': function(params) {
    this.int32(-1107729093);
    const flags = (this.has(params.document) << 0);
    this.int32(flags);
    this.long(params.id);
    this.long(params.access_hash);
    this.string(params.short_name);
    this.string(params.title);
    this.string(params.description);
    this.predicate(params.photo);
    this.flag(this.predicate, params.document);
  },
  'inputGameID': function(params) {
    this.int32(53231223);
    this.long(params.id);
    this.long(params.access_hash);
  },
  'inputGameShortName': function(params) {
    this.int32(-1020139510);
    this.predicate(params.bot_id);
    this.string(params.short_name);
  },
  'highScore': function(params) {
    this.int32(1940093419);
    this.int(params.pos);
    this.long(params.user_id);
    this.int(params.score);
  },
  'messages.highScores': function(params) {
    this.int32(-1707344487);
    this.vector(this.predicate, params.scores);
    this.vector(this.predicate, params.users);
  },
  'textEmpty': function(params) {
    this.int32(-599948721);
  },
  'textPlain': function(params) {
    this.int32(1950782688);
    this.string(params.text);
  },
  'textBold': function(params) {
    this.int32(1730456516);
    this.predicate(params.text);
  },
  'textItalic': function(params) {
    this.int32(-653089380);
    this.predicate(params.text);
  },
  'textUnderline': function(params) {
    this.int32(-1054465340);
    this.predicate(params.text);
  },
  'textStrike': function(params) {
    this.int32(-1678197867);
    this.predicate(params.text);
  },
  'textFixed': function(params) {
    this.int32(1816074681);
    this.predicate(params.text);
  },
  'textUrl': function(params) {
    this.int32(1009288385);
    this.predicate(params.text);
    this.string(params.url);
    this.long(params.webpage_id);
  },
  'textEmail': function(params) {
    this.int32(-564523562);
    this.predicate(params.text);
    this.string(params.email);
  },
  'textConcat': function(params) {
    this.int32(2120376535);
    this.vector(this.predicate, params.texts);
  },
  'textSubscript': function(params) {
    this.int32(-311786236);
    this.predicate(params.text);
  },
  'textSuperscript': function(params) {
    this.int32(-939827711);
    this.predicate(params.text);
  },
  'textMarked': function(params) {
    this.int32(55281185);
    this.predicate(params.text);
  },
  'textPhone': function(params) {
    this.int32(483104362);
    this.predicate(params.text);
    this.string(params.phone);
  },
  'textImage': function(params) {
    this.int32(136105807);
    this.long(params.document_id);
    this.int(params.w);
    this.int(params.h);
  },
  'textAnchor': function(params) {
    this.int32(894777186);
    this.predicate(params.text);
    this.string(params.name);
  },
  'pageBlockUnsupported': function(params) {
    this.int32(324435594);
  },
  'pageBlockTitle': function(params) {
    this.int32(1890305021);
    this.predicate(params.text);
  },
  'pageBlockSubtitle': function(params) {
    this.int32(-1879401953);
    this.predicate(params.text);
  },
  'pageBlockAuthorDate': function(params) {
    this.int32(-1162877472);
    this.predicate(params.author);
    this.int(params.published_date);
  },
  'pageBlockHeader': function(params) {
    this.int32(-1076861716);
    this.predicate(params.text);
  },
  'pageBlockSubheader': function(params) {
    this.int32(-248793375);
    this.predicate(params.text);
  },
  'pageBlockParagraph': function(params) {
    this.int32(1182402406);
    this.predicate(params.text);
  },
  'pageBlockPreformatted': function(params) {
    this.int32(-1066346178);
    this.predicate(params.text);
    this.string(params.language);
  },
  'pageBlockFooter': function(params) {
    this.int32(1216809369);
    this.predicate(params.text);
  },
  'pageBlockDivider': function(params) {
    this.int32(-618614392);
  },
  'pageBlockAnchor': function(params) {
    this.int32(-837994576);
    this.string(params.name);
  },
  'pageBlockList': function(params) {
    this.int32(-454524911);
    this.vector(this.predicate, params.items);
  },
  'pageBlockBlockquote': function(params) {
    this.int32(641563686);
    this.predicate(params.text);
    this.predicate(params.caption);
  },
  'pageBlockPullquote': function(params) {
    this.int32(1329878739);
    this.predicate(params.text);
    this.predicate(params.caption);
  },
  'pageBlockPhoto': function(params) {
    this.int32(391759200);
    const flags = (this.has(params.url) << 0) | (this.has(params.webpage_id) << 0);
    this.int32(flags);
    this.long(params.photo_id);
    this.predicate(params.caption);
    this.flag(this.string, params.url);
    this.flag(this.long, params.webpage_id);
  },
  'pageBlockVideo': function(params) {
    this.int32(2089805750);
    const flags = (this.has(params.autoplay) << 0) | (this.has(params.loop) << 1);
    this.int32(flags);
    this.long(params.video_id);
    this.predicate(params.caption);
  },
  'pageBlockCover': function(params) {
    this.int32(972174080);
    this.predicate(params.cover);
  },
  'pageBlockEmbed': function(params) {
    this.int32(-1468953147);
    const flags = (this.has(params.full_width) << 0) | (this.has(params.allow_scrolling) << 3) | (this.has(params.url) << 1) | (this.has(params.html) << 2) | (this.has(params.poster_photo_id) << 4) | (this.has(params.w) << 5) | (this.has(params.h) << 5);
    this.int32(flags);
    this.flag(this.string, params.url);
    this.flag(this.string, params.html);
    this.flag(this.long, params.poster_photo_id);
    this.flag(this.int, params.w);
    this.flag(this.int, params.h);
    this.predicate(params.caption);
  },
  'pageBlockEmbedPost': function(params) {
    this.int32(-229005301);
    this.string(params.url);
    this.long(params.webpage_id);
    this.long(params.author_photo_id);
    this.string(params.author);
    this.int(params.date);
    this.vector(this.predicate, params.blocks);
    this.predicate(params.caption);
  },
  'pageBlockCollage': function(params) {
    this.int32(1705048653);
    this.vector(this.predicate, params.items);
    this.predicate(params.caption);
  },
  'pageBlockSlideshow': function(params) {
    this.int32(52401552);
    this.vector(this.predicate, params.items);
    this.predicate(params.caption);
  },
  'pageBlockChannel': function(params) {
    this.int32(-283684427);
    this.predicate(params.channel);
  },
  'pageBlockAudio': function(params) {
    this.int32(-2143067670);
    this.long(params.audio_id);
    this.predicate(params.caption);
  },
  'pageBlockKicker': function(params) {
    this.int32(504660880);
    this.predicate(params.text);
  },
  'pageBlockTable': function(params) {
    this.int32(-1085412734);
    const flags = (this.has(params.bordered) << 0) | (this.has(params.striped) << 1);
    this.int32(flags);
    this.predicate(params.title);
    this.vector(this.predicate, params.rows);
  },
  'pageBlockOrderedList': function(params) {
    this.int32(-1702174239);
    this.vector(this.predicate, params.items);
  },
  'pageBlockDetails': function(params) {
    this.int32(1987480557);
    const flags = (this.has(params.open) << 0);
    this.int32(flags);
    this.vector(this.predicate, params.blocks);
    this.predicate(params.title);
  },
  'pageBlockRelatedArticles': function(params) {
    this.int32(370236054);
    this.predicate(params.title);
    this.vector(this.predicate, params.articles);
  },
  'pageBlockMap': function(params) {
    this.int32(-1538310410);
    this.predicate(params.geo);
    this.int(params.zoom);
    this.int(params.w);
    this.int(params.h);
    this.predicate(params.caption);
  },
  'phoneCallDiscardReasonMissed': function(params) {
    this.int32(-2048646399);
  },
  'phoneCallDiscardReasonDisconnect': function(params) {
    this.int32(-527056480);
  },
  'phoneCallDiscardReasonHangup': function(params) {
    this.int32(1471006352);
  },
  'phoneCallDiscardReasonBusy': function(params) {
    this.int32(-84416311);
  },
  'dataJSON': function(params) {
    this.int32(2104790276);
    this.string(params.data);
  },
  'labeledPrice': function(params) {
    this.int32(-886477832);
    this.string(params.label);
    this.long(params.amount);
  },
  'invoice': function(params) {
    this.int32(215516896);
    const flags = (this.has(params.test) << 0) | (this.has(params.name_requested) << 1) | (this.has(params.phone_requested) << 2) | (this.has(params.email_requested) << 3) | (this.has(params.shipping_address_requested) << 4) | (this.has(params.flexible) << 5) | (this.has(params.phone_to_provider) << 6) | (this.has(params.email_to_provider) << 7) | (this.has(params.max_tip_amount) << 8) | (this.has(params.suggested_tip_amounts) << 8);
    this.int32(flags);
    this.string(params.currency);
    this.vector(this.predicate, params.prices);
    this.flag(this.long, params.max_tip_amount);
    this.flagVector(this.long, params.suggested_tip_amounts);
  },
  'paymentCharge': function(params) {
    this.int32(-368917890);
    this.string(params.id);
    this.string(params.provider_charge_id);
  },
  'postAddress': function(params) {
    this.int32(512535275);
    this.string(params.street_line1);
    this.string(params.street_line2);
    this.string(params.city);
    this.string(params.state);
    this.string(params.country_iso2);
    this.string(params.post_code);
  },
  'paymentRequestedInfo': function(params) {
    this.int32(-1868808300);
    const flags = (this.has(params.name) << 0) | (this.has(params.phone) << 1) | (this.has(params.email) << 2) | (this.has(params.shipping_address) << 3);
    this.int32(flags);
    this.flag(this.string, params.name);
    this.flag(this.string, params.phone);
    this.flag(this.string, params.email);
    this.flag(this.predicate, params.shipping_address);
  },
  'paymentSavedCredentialsCard': function(params) {
    this.int32(-842892769);
    this.string(params.id);
    this.string(params.title);
  },
  'webDocument': function(params) {
    this.int32(475467473);
    this.string(params.url);
    this.long(params.access_hash);
    this.int(params.size);
    this.string(params.mime_type);
    this.vector(this.predicate, params.attributes);
  },
  'webDocumentNoProxy': function(params) {
    this.int32(-104284986);
    this.string(params.url);
    this.int(params.size);
    this.string(params.mime_type);
    this.vector(this.predicate, params.attributes);
  },
  'inputWebDocument': function(params) {
    this.int32(-1678949555);
    this.string(params.url);
    this.int(params.size);
    this.string(params.mime_type);
    this.vector(this.predicate, params.attributes);
  },
  'inputWebFileLocation': function(params) {
    this.int32(-1036396922);
    this.string(params.url);
    this.long(params.access_hash);
  },
  'inputWebFileGeoPointLocation': function(params) {
    this.int32(-1625153079);
    this.predicate(params.geo_point);
    this.long(params.access_hash);
    this.int(params.w);
    this.int(params.h);
    this.int(params.zoom);
    this.int(params.scale);
  },
  'upload.webFile': function(params) {
    this.int32(568808380);
    this.int(params.size);
    this.string(params.mime_type);
    this.predicate(params.file_type);
    this.int(params.mtime);
    this.bytes(params.bytes);
  },
  'payments.paymentForm': function(params) {
    this.int32(378828315);
    const flags = (this.has(params.can_save_credentials) << 2) | (this.has(params.password_missing) << 3) | (this.has(params.native_provider) << 4) | (this.has(params.native_params) << 4) | (this.has(params.saved_info) << 0) | (this.has(params.saved_credentials) << 1);
    this.int32(flags);
    this.long(params.form_id);
    this.long(params.bot_id);
    this.predicate(params.invoice);
    this.long(params.provider_id);
    this.string(params.url);
    this.flag(this.string, params.native_provider);
    this.flag(this.predicate, params.native_params);
    this.flag(this.predicate, params.saved_info);
    this.flag(this.predicate, params.saved_credentials);
    this.vector(this.predicate, params.users);
  },
  'payments.validatedRequestedInfo': function(params) {
    this.int32(-784000893);
    const flags = (this.has(params.id) << 0) | (this.has(params.shipping_options) << 1);
    this.int32(flags);
    this.flag(this.string, params.id);
    this.flagVector(this.predicate, params.shipping_options);
  },
  'payments.paymentResult': function(params) {
    this.int32(1314881805);
    this.predicate(params.updates);
  },
  'payments.paymentVerificationNeeded': function(params) {
    this.int32(-666824391);
    this.string(params.url);
  },
  'payments.paymentReceipt': function(params) {
    this.int32(1891958275);
    const flags = (this.has(params.photo) << 2) | (this.has(params.info) << 0) | (this.has(params.shipping) << 1) | (this.has(params.tip_amount) << 3);
    this.int32(flags);
    this.int(params.date);
    this.long(params.bot_id);
    this.long(params.provider_id);
    this.string(params.title);
    this.string(params.description);
    this.flag(this.predicate, params.photo);
    this.predicate(params.invoice);
    this.flag(this.predicate, params.info);
    this.flag(this.predicate, params.shipping);
    this.flag(this.long, params.tip_amount);
    this.string(params.currency);
    this.long(params.total_amount);
    this.string(params.credentials_title);
    this.vector(this.predicate, params.users);
  },
  'payments.savedInfo': function(params) {
    this.int32(-74456004);
    const flags = (this.has(params.has_saved_credentials) << 1) | (this.has(params.saved_info) << 0);
    this.int32(flags);
    this.flag(this.predicate, params.saved_info);
  },
  'inputPaymentCredentialsSaved': function(params) {
    this.int32(-1056001329);
    this.string(params.id);
    this.bytes(params.tmp_password);
  },
  'inputPaymentCredentials': function(params) {
    this.int32(873977640);
    const flags = (this.has(params.save) << 0);
    this.int32(flags);
    this.predicate(params.data);
  },
  'inputPaymentCredentialsApplePay': function(params) {
    this.int32(178373535);
    this.predicate(params.payment_data);
  },
  'inputPaymentCredentialsGooglePay': function(params) {
    this.int32(-1966921727);
    this.predicate(params.payment_token);
  },
  'account.tmpPassword': function(params) {
    this.int32(-614138572);
    this.bytes(params.tmp_password);
    this.int(params.valid_until);
  },
  'shippingOption': function(params) {
    this.int32(-1239335713);
    this.string(params.id);
    this.string(params.title);
    this.vector(this.predicate, params.prices);
  },
  'inputStickerSetItem': function(params) {
    this.int32(-6249322);
    const flags = (this.has(params.mask_coords) << 0);
    this.int32(flags);
    this.predicate(params.document);
    this.string(params.emoji);
    this.flag(this.predicate, params.mask_coords);
  },
  'inputPhoneCall': function(params) {
    this.int32(506920429);
    this.long(params.id);
    this.long(params.access_hash);
  },
  'phoneCallEmpty': function(params) {
    this.int32(1399245077);
    this.long(params.id);
  },
  'phoneCallWaiting': function(params) {
    this.int32(-987599081);
    const flags = (this.has(params.video) << 6) | (this.has(params.receive_date) << 0);
    this.int32(flags);
    this.long(params.id);
    this.long(params.access_hash);
    this.int(params.date);
    this.long(params.admin_id);
    this.long(params.participant_id);
    this.predicate(params.protocol);
    this.flag(this.int, params.receive_date);
  },
  'phoneCallRequested': function(params) {
    this.int32(347139340);
    const flags = (this.has(params.video) << 6);
    this.int32(flags);
    this.long(params.id);
    this.long(params.access_hash);
    this.int(params.date);
    this.long(params.admin_id);
    this.long(params.participant_id);
    this.bytes(params.g_a_hash);
    this.predicate(params.protocol);
  },
  'phoneCallAccepted': function(params) {
    this.int32(912311057);
    const flags = (this.has(params.video) << 6);
    this.int32(flags);
    this.long(params.id);
    this.long(params.access_hash);
    this.int(params.date);
    this.long(params.admin_id);
    this.long(params.participant_id);
    this.bytes(params.g_b);
    this.predicate(params.protocol);
  },
  'phoneCall': function(params) {
    this.int32(-1770029977);
    const flags = (this.has(params.p2p_allowed) << 5) | (this.has(params.video) << 6);
    this.int32(flags);
    this.long(params.id);
    this.long(params.access_hash);
    this.int(params.date);
    this.long(params.admin_id);
    this.long(params.participant_id);
    this.bytes(params.g_a_or_b);
    this.long(params.key_fingerprint);
    this.predicate(params.protocol);
    this.vector(this.predicate, params.connections);
    this.int(params.start_date);
  },
  'phoneCallDiscarded': function(params) {
    this.int32(1355435489);
    const flags = (this.has(params.need_rating) << 2) | (this.has(params.need_debug) << 3) | (this.has(params.video) << 6) | (this.has(params.reason) << 0) | (this.has(params.duration) << 1);
    this.int32(flags);
    this.long(params.id);
    this.flag(this.predicate, params.reason);
    this.flag(this.int, params.duration);
  },
  'phoneConnection': function(params) {
    this.int32(-1655957568);
    this.long(params.id);
    this.string(params.ip);
    this.string(params.ipv6);
    this.int(params.port);
    this.bytes(params.peer_tag);
  },
  'phoneConnectionWebrtc': function(params) {
    this.int32(1667228533);
    const flags = (this.has(params.turn) << 0) | (this.has(params.stun) << 1);
    this.int32(flags);
    this.long(params.id);
    this.string(params.ip);
    this.string(params.ipv6);
    this.int(params.port);
    this.string(params.username);
    this.string(params.password);
  },
  'phoneCallProtocol': function(params) {
    this.int32(-58224696);
    const flags = (this.has(params.udp_p2p) << 0) | (this.has(params.udp_reflector) << 1);
    this.int32(flags);
    this.int(params.min_layer);
    this.int(params.max_layer);
    this.vector(this.string, params.library_versions);
  },
  'phone.phoneCall': function(params) {
    this.int32(-326966976);
    this.predicate(params.phone_call);
    this.vector(this.predicate, params.users);
  },
  'upload.cdnFileReuploadNeeded': function(params) {
    this.int32(-290921362);
    this.bytes(params.request_token);
  },
  'upload.cdnFile': function(params) {
    this.int32(-1449145777);
    this.bytes(params.bytes);
  },
  'cdnPublicKey': function(params) {
    this.int32(-914167110);
    this.int(params.dc_id);
    this.string(params.public_key);
  },
  'cdnConfig': function(params) {
    this.int32(1462101002);
    this.vector(this.predicate, params.public_keys);
  },
  'langPackString': function(params) {
    this.int32(-892239370);
    this.string(params.key);
    this.string(params.value);
  },
  'langPackStringPluralized': function(params) {
    this.int32(1816636575);
    const flags = (this.has(params.zero_value) << 0) | (this.has(params.one_value) << 1) | (this.has(params.two_value) << 2) | (this.has(params.few_value) << 3) | (this.has(params.many_value) << 4);
    this.int32(flags);
    this.string(params.key);
    this.flag(this.string, params.zero_value);
    this.flag(this.string, params.one_value);
    this.flag(this.string, params.two_value);
    this.flag(this.string, params.few_value);
    this.flag(this.string, params.many_value);
    this.string(params.other_value);
  },
  'langPackStringDeleted': function(params) {
    this.int32(695856818);
    this.string(params.key);
  },
  'langPackDifference': function(params) {
    this.int32(-209337866);
    this.string(params.lang_code);
    this.int(params.from_version);
    this.int(params.version);
    this.vector(this.predicate, params.strings);
  },
  'langPackLanguage': function(params) {
    this.int32(-288727837);
    const flags = (this.has(params.official) << 0) | (this.has(params.rtl) << 2) | (this.has(params.beta) << 3) | (this.has(params.base_lang_code) << 1);
    this.int32(flags);
    this.string(params.name);
    this.string(params.native_name);
    this.string(params.lang_code);
    this.flag(this.string, params.base_lang_code);
    this.string(params.plural_code);
    this.int(params.strings_count);
    this.int(params.translated_count);
    this.string(params.translations_url);
  },
  'channelAdminLogEventActionChangeTitle': function(params) {
    this.int32(-421545947);
    this.string(params.prev_value);
    this.string(params.new_value);
  },
  'channelAdminLogEventActionChangeAbout': function(params) {
    this.int32(1427671598);
    this.string(params.prev_value);
    this.string(params.new_value);
  },
  'channelAdminLogEventActionChangeUsername': function(params) {
    this.int32(1783299128);
    this.string(params.prev_value);
    this.string(params.new_value);
  },
  'channelAdminLogEventActionChangePhoto': function(params) {
    this.int32(1129042607);
    this.predicate(params.prev_photo);
    this.predicate(params.new_photo);
  },
  'channelAdminLogEventActionToggleInvites': function(params) {
    this.int32(460916654);
    this.Bool(params.new_value);
  },
  'channelAdminLogEventActionToggleSignatures': function(params) {
    this.int32(648939889);
    this.Bool(params.new_value);
  },
  'channelAdminLogEventActionUpdatePinned': function(params) {
    this.int32(-370660328);
    this.predicate(params.message);
  },
  'channelAdminLogEventActionEditMessage': function(params) {
    this.int32(1889215493);
    this.predicate(params.prev_message);
    this.predicate(params.new_message);
  },
  'channelAdminLogEventActionDeleteMessage': function(params) {
    this.int32(1121994683);
    this.predicate(params.message);
  },
  'channelAdminLogEventActionParticipantJoin': function(params) {
    this.int32(405815507);
  },
  'channelAdminLogEventActionParticipantLeave': function(params) {
    this.int32(-124291086);
  },
  'channelAdminLogEventActionParticipantInvite': function(params) {
    this.int32(-484690728);
    this.predicate(params.participant);
  },
  'channelAdminLogEventActionParticipantToggleBan': function(params) {
    this.int32(-422036098);
    this.predicate(params.prev_participant);
    this.predicate(params.new_participant);
  },
  'channelAdminLogEventActionParticipantToggleAdmin': function(params) {
    this.int32(-714643696);
    this.predicate(params.prev_participant);
    this.predicate(params.new_participant);
  },
  'channelAdminLogEventActionChangeStickerSet': function(params) {
    this.int32(-1312568665);
    this.predicate(params.prev_stickerset);
    this.predicate(params.new_stickerset);
  },
  'channelAdminLogEventActionTogglePreHistoryHidden': function(params) {
    this.int32(1599903217);
    this.Bool(params.new_value);
  },
  'channelAdminLogEventActionDefaultBannedRights': function(params) {
    this.int32(771095562);
    this.predicate(params.prev_banned_rights);
    this.predicate(params.new_banned_rights);
  },
  'channelAdminLogEventActionStopPoll': function(params) {
    this.int32(-1895328189);
    this.predicate(params.message);
  },
  'channelAdminLogEventActionChangeLinkedChat': function(params) {
    this.int32(84703944);
    this.long(params.prev_value);
    this.long(params.new_value);
  },
  'channelAdminLogEventActionChangeLocation': function(params) {
    this.int32(241923758);
    this.predicate(params.prev_value);
    this.predicate(params.new_value);
  },
  'channelAdminLogEventActionToggleSlowMode': function(params) {
    this.int32(1401984889);
    this.int(params.prev_value);
    this.int(params.new_value);
  },
  'channelAdminLogEventActionStartGroupCall': function(params) {
    this.int32(589338437);
    this.predicate(params.call);
  },
  'channelAdminLogEventActionDiscardGroupCall': function(params) {
    this.int32(-610299584);
    this.predicate(params.call);
  },
  'channelAdminLogEventActionParticipantMute': function(params) {
    this.int32(-115071790);
    this.predicate(params.participant);
  },
  'channelAdminLogEventActionParticipantUnmute': function(params) {
    this.int32(-431740480);
    this.predicate(params.participant);
  },
  'channelAdminLogEventActionToggleGroupCallSetting': function(params) {
    this.int32(1456906823);
    this.Bool(params.join_muted);
  },
  'channelAdminLogEventActionParticipantJoinByInvite': function(params) {
    this.int32(1557846647);
    this.predicate(params.invite);
  },
  'channelAdminLogEventActionExportedInviteDelete': function(params) {
    this.int32(1515256996);
    this.predicate(params.invite);
  },
  'channelAdminLogEventActionExportedInviteRevoke': function(params) {
    this.int32(1091179342);
    this.predicate(params.invite);
  },
  'channelAdminLogEventActionExportedInviteEdit': function(params) {
    this.int32(-384910503);
    this.predicate(params.prev_invite);
    this.predicate(params.new_invite);
  },
  'channelAdminLogEventActionParticipantVolume': function(params) {
    this.int32(1048537159);
    this.predicate(params.participant);
  },
  'channelAdminLogEventActionChangeHistoryTTL': function(params) {
    this.int32(1855199800);
    this.int(params.prev_value);
    this.int(params.new_value);
  },
  'channelAdminLogEventActionChangeTheme': function(params) {
    this.int32(-26672755);
    this.string(params.prev_value);
    this.string(params.new_value);
  },
  'channelAdminLogEvent': function(params) {
    this.int32(531458253);
    this.long(params.id);
    this.int(params.date);
    this.long(params.user_id);
    this.predicate(params.action);
  },
  'channels.adminLogResults': function(params) {
    this.int32(-309659827);
    this.vector(this.predicate, params.events);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'channelAdminLogEventsFilter': function(params) {
    this.int32(-368018716);
    const flags = (this.has(params.join) << 0) | (this.has(params.leave) << 1) | (this.has(params.invite) << 2) | (this.has(params.ban) << 3) | (this.has(params.unban) << 4) | (this.has(params.kick) << 5) | (this.has(params.unkick) << 6) | (this.has(params.promote) << 7) | (this.has(params.demote) << 8) | (this.has(params.info) << 9) | (this.has(params.settings) << 10) | (this.has(params.pinned) << 11) | (this.has(params.edit) << 12) | (this.has(params.delete) << 13) | (this.has(params.group_call) << 14) | (this.has(params.invites) << 15);
    this.int32(flags);
  },
  'popularContact': function(params) {
    this.int32(1558266229);
    this.long(params.client_id);
    this.int(params.importers);
  },
  'messages.favedStickersNotModified': function(params) {
    this.int32(-1634752813);
  },
  'messages.favedStickers': function(params) {
    this.int32(750063767);
    this.long(params.hash);
    this.vector(this.predicate, params.packs);
    this.vector(this.predicate, params.stickers);
  },
  'recentMeUrlUnknown': function(params) {
    this.int32(1189204285);
    this.string(params.url);
  },
  'recentMeUrlUser': function(params) {
    this.int32(-1188296222);
    this.string(params.url);
    this.long(params.user_id);
  },
  'recentMeUrlChat': function(params) {
    this.int32(-1294306862);
    this.string(params.url);
    this.long(params.chat_id);
  },
  'recentMeUrlChatInvite': function(params) {
    this.int32(-347535331);
    this.string(params.url);
    this.predicate(params.chat_invite);
  },
  'recentMeUrlStickerSet': function(params) {
    this.int32(-1140172836);
    this.string(params.url);
    this.predicate(params.set);
  },
  'help.recentMeUrls': function(params) {
    this.int32(235081943);
    this.vector(this.predicate, params.urls);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'inputSingleMedia': function(params) {
    this.int32(482797855);
    const flags = (this.has(params.entities) << 0);
    this.int32(flags);
    this.predicate(params.media);
    this.long(params.random_id);
    this.string(params.message);
    this.flagVector(this.predicate, params.entities);
  },
  'webAuthorization': function(params) {
    this.int32(-1493633966);
    this.long(params.hash);
    this.long(params.bot_id);
    this.string(params.domain);
    this.string(params.browser);
    this.string(params.platform);
    this.int(params.date_created);
    this.int(params.date_active);
    this.string(params.ip);
    this.string(params.region);
  },
  'account.webAuthorizations': function(params) {
    this.int32(-313079300);
    this.vector(this.predicate, params.authorizations);
    this.vector(this.predicate, params.users);
  },
  'inputMessageID': function(params) {
    this.int32(-1502174430);
    this.int(params.id);
  },
  'inputMessageReplyTo': function(params) {
    this.int32(-1160215659);
    this.int(params.id);
  },
  'inputMessagePinned': function(params) {
    this.int32(-2037963464);
  },
  'inputMessageCallbackQuery': function(params) {
    this.int32(-1392895362);
    this.int(params.id);
    this.long(params.query_id);
  },
  'inputDialogPeer': function(params) {
    this.int32(-55902537);
    this.predicate(params.peer);
  },
  'inputDialogPeerFolder': function(params) {
    this.int32(1684014375);
    this.int(params.folder_id);
  },
  'dialogPeer': function(params) {
    this.int32(-445792507);
    this.predicate(params.peer);
  },
  'dialogPeerFolder': function(params) {
    this.int32(1363483106);
    this.int(params.folder_id);
  },
  'messages.foundStickerSetsNotModified': function(params) {
    this.int32(223655517);
  },
  'messages.foundStickerSets': function(params) {
    this.int32(-1963942446);
    this.long(params.hash);
    this.vector(this.predicate, params.sets);
  },
  'fileHash': function(params) {
    this.int32(1648543603);
    this.int(params.offset);
    this.int(params.limit);
    this.bytes(params.hash);
  },
  'inputClientProxy': function(params) {
    this.int32(1968737087);
    this.string(params.address);
    this.int(params.port);
  },
  'help.termsOfServiceUpdateEmpty': function(params) {
    this.int32(-483352705);
    this.int(params.expires);
  },
  'help.termsOfServiceUpdate': function(params) {
    this.int32(686618977);
    this.int(params.expires);
    this.predicate(params.terms_of_service);
  },
  'inputSecureFileUploaded': function(params) {
    this.int32(859091184);
    this.long(params.id);
    this.int(params.parts);
    this.string(params.md5_checksum);
    this.bytes(params.file_hash);
    this.bytes(params.secret);
  },
  'inputSecureFile': function(params) {
    this.int32(1399317950);
    this.long(params.id);
    this.long(params.access_hash);
  },
  'secureFileEmpty': function(params) {
    this.int32(1679398724);
  },
  'secureFile': function(params) {
    this.int32(-534283678);
    this.long(params.id);
    this.long(params.access_hash);
    this.int(params.size);
    this.int(params.dc_id);
    this.int(params.date);
    this.bytes(params.file_hash);
    this.bytes(params.secret);
  },
  'secureData': function(params) {
    this.int32(-1964327229);
    this.bytes(params.data);
    this.bytes(params.data_hash);
    this.bytes(params.secret);
  },
  'securePlainPhone': function(params) {
    this.int32(2103482845);
    this.string(params.phone);
  },
  'securePlainEmail': function(params) {
    this.int32(569137759);
    this.string(params.email);
  },
  'secureValueTypePersonalDetails': function(params) {
    this.int32(-1658158621);
  },
  'secureValueTypePassport': function(params) {
    this.int32(1034709504);
  },
  'secureValueTypeDriverLicense': function(params) {
    this.int32(115615172);
  },
  'secureValueTypeIdentityCard': function(params) {
    this.int32(-1596951477);
  },
  'secureValueTypeInternalPassport': function(params) {
    this.int32(-1717268701);
  },
  'secureValueTypeAddress': function(params) {
    this.int32(-874308058);
  },
  'secureValueTypeUtilityBill': function(params) {
    this.int32(-63531698);
  },
  'secureValueTypeBankStatement': function(params) {
    this.int32(-1995211763);
  },
  'secureValueTypeRentalAgreement': function(params) {
    this.int32(-1954007928);
  },
  'secureValueTypePassportRegistration': function(params) {
    this.int32(-1713143702);
  },
  'secureValueTypeTemporaryRegistration': function(params) {
    this.int32(-368907213);
  },
  'secureValueTypePhone': function(params) {
    this.int32(-1289704741);
  },
  'secureValueTypeEmail': function(params) {
    this.int32(-1908627474);
  },
  'secureValue': function(params) {
    this.int32(411017418);
    const flags = (this.has(params.data) << 0) | (this.has(params.front_side) << 1) | (this.has(params.reverse_side) << 2) | (this.has(params.selfie) << 3) | (this.has(params.translation) << 6) | (this.has(params.files) << 4) | (this.has(params.plain_data) << 5);
    this.int32(flags);
    this.predicate(params.type);
    this.flag(this.predicate, params.data);
    this.flag(this.predicate, params.front_side);
    this.flag(this.predicate, params.reverse_side);
    this.flag(this.predicate, params.selfie);
    this.flagVector(this.predicate, params.translation);
    this.flagVector(this.predicate, params.files);
    this.flag(this.predicate, params.plain_data);
    this.bytes(params.hash);
  },
  'inputSecureValue': function(params) {
    this.int32(-618540889);
    const flags = (this.has(params.data) << 0) | (this.has(params.front_side) << 1) | (this.has(params.reverse_side) << 2) | (this.has(params.selfie) << 3) | (this.has(params.translation) << 6) | (this.has(params.files) << 4) | (this.has(params.plain_data) << 5);
    this.int32(flags);
    this.predicate(params.type);
    this.flag(this.predicate, params.data);
    this.flag(this.predicate, params.front_side);
    this.flag(this.predicate, params.reverse_side);
    this.flag(this.predicate, params.selfie);
    this.flagVector(this.predicate, params.translation);
    this.flagVector(this.predicate, params.files);
    this.flag(this.predicate, params.plain_data);
  },
  'secureValueHash': function(params) {
    this.int32(-316748368);
    this.predicate(params.type);
    this.bytes(params.hash);
  },
  'secureValueErrorData': function(params) {
    this.int32(-391902247);
    this.predicate(params.type);
    this.bytes(params.data_hash);
    this.string(params.field);
    this.string(params.text);
  },
  'secureValueErrorFrontSide': function(params) {
    this.int32(12467706);
    this.predicate(params.type);
    this.bytes(params.file_hash);
    this.string(params.text);
  },
  'secureValueErrorReverseSide': function(params) {
    this.int32(-2037765467);
    this.predicate(params.type);
    this.bytes(params.file_hash);
    this.string(params.text);
  },
  'secureValueErrorSelfie': function(params) {
    this.int32(-449327402);
    this.predicate(params.type);
    this.bytes(params.file_hash);
    this.string(params.text);
  },
  'secureValueErrorFile': function(params) {
    this.int32(2054162547);
    this.predicate(params.type);
    this.bytes(params.file_hash);
    this.string(params.text);
  },
  'secureValueErrorFiles': function(params) {
    this.int32(1717706985);
    this.predicate(params.type);
    this.vector(this.bytes, params.file_hash);
    this.string(params.text);
  },
  'secureValueError': function(params) {
    this.int32(-2036501105);
    this.predicate(params.type);
    this.bytes(params.hash);
    this.string(params.text);
  },
  'secureValueErrorTranslationFile': function(params) {
    this.int32(-1592506512);
    this.predicate(params.type);
    this.bytes(params.file_hash);
    this.string(params.text);
  },
  'secureValueErrorTranslationFiles': function(params) {
    this.int32(878931416);
    this.predicate(params.type);
    this.vector(this.bytes, params.file_hash);
    this.string(params.text);
  },
  'secureCredentialsEncrypted': function(params) {
    this.int32(871426631);
    this.bytes(params.data);
    this.bytes(params.hash);
    this.bytes(params.secret);
  },
  'account.authorizationForm': function(params) {
    this.int32(-1389486888);
    const flags = (this.has(params.privacy_policy_url) << 0);
    this.int32(flags);
    this.vector(this.predicate, params.required_types);
    this.vector(this.predicate, params.values);
    this.vector(this.predicate, params.errors);
    this.vector(this.predicate, params.users);
    this.flag(this.string, params.privacy_policy_url);
  },
  'account.sentEmailCode': function(params) {
    this.int32(-2128640689);
    this.string(params.email_pattern);
    this.int(params.length);
  },
  'help.deepLinkInfoEmpty': function(params) {
    this.int32(1722786150);
  },
  'help.deepLinkInfo': function(params) {
    this.int32(1783556146);
    const flags = (this.has(params.update_app) << 0) | (this.has(params.entities) << 1);
    this.int32(flags);
    this.string(params.message);
    this.flagVector(this.predicate, params.entities);
  },
  'savedPhoneContact': function(params) {
    this.int32(289586518);
    this.string(params.phone);
    this.string(params.first_name);
    this.string(params.last_name);
    this.int(params.date);
  },
  'account.takeout': function(params) {
    this.int32(1304052993);
    this.long(params.id);
  },
  'passwordKdfAlgoUnknown': function(params) {
    this.int32(-732254058);
  },
  'passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow': function(params) {
    this.int32(982592842);
    this.bytes(params.salt1);
    this.bytes(params.salt2);
    this.int(params.g);
    this.bytes(params.p);
  },
  'securePasswordKdfAlgoUnknown': function(params) {
    this.int32(4883767);
  },
  'securePasswordKdfAlgoPBKDF2HMACSHA512iter100000': function(params) {
    this.int32(-1141711456);
    this.bytes(params.salt);
  },
  'securePasswordKdfAlgoSHA512': function(params) {
    this.int32(-2042159726);
    this.bytes(params.salt);
  },
  'secureSecretSettings': function(params) {
    this.int32(354925740);
    this.predicate(params.secure_algo);
    this.bytes(params.secure_secret);
    this.long(params.secure_secret_id);
  },
  'inputCheckPasswordEmpty': function(params) {
    this.int32(-1736378792);
  },
  'inputCheckPasswordSRP': function(params) {
    this.int32(-763367294);
    this.long(params.srp_id);
    this.bytes(params.A);
    this.bytes(params.M1);
  },
  'secureRequiredType': function(params) {
    this.int32(-2103600678);
    const flags = (this.has(params.native_names) << 0) | (this.has(params.selfie_required) << 1) | (this.has(params.translation_required) << 2);
    this.int32(flags);
    this.predicate(params.type);
  },
  'secureRequiredTypeOneOf': function(params) {
    this.int32(41187252);
    this.vector(this.predicate, params.types);
  },
  'help.passportConfigNotModified': function(params) {
    this.int32(-1078332329);
  },
  'help.passportConfig': function(params) {
    this.int32(-1600596305);
    this.int(params.hash);
    this.predicate(params.countries_langs);
  },
  'inputAppEvent': function(params) {
    this.int32(488313413);
    this.double(params.time);
    this.string(params.type);
    this.long(params.peer);
    this.predicate(params.data);
  },
  'jsonObjectValue': function(params) {
    this.int32(-1059185703);
    this.string(params.key);
    this.predicate(params.value);
  },
  'jsonNull': function(params) {
    this.int32(1064139624);
  },
  'jsonBool': function(params) {
    this.int32(-952869270);
    this.Bool(params.value);
  },
  'jsonNumber': function(params) {
    this.int32(736157604);
    this.double(params.value);
  },
  'jsonString': function(params) {
    this.int32(-1222740358);
    this.string(params.value);
  },
  'jsonArray': function(params) {
    this.int32(-146520221);
    this.vector(this.predicate, params.value);
  },
  'jsonObject': function(params) {
    this.int32(-1715350371);
    this.vector(this.predicate, params.value);
  },
  'pageTableCell': function(params) {
    this.int32(878078826);
    const flags = (this.has(params.header) << 0) | (this.has(params.align_center) << 3) | (this.has(params.align_right) << 4) | (this.has(params.valign_middle) << 5) | (this.has(params.valign_bottom) << 6) | (this.has(params.text) << 7) | (this.has(params.colspan) << 1) | (this.has(params.rowspan) << 2);
    this.int32(flags);
    this.flag(this.predicate, params.text);
    this.flag(this.int, params.colspan);
    this.flag(this.int, params.rowspan);
  },
  'pageTableRow': function(params) {
    this.int32(-524237339);
    this.vector(this.predicate, params.cells);
  },
  'pageCaption': function(params) {
    this.int32(1869903447);
    this.predicate(params.text);
    this.predicate(params.credit);
  },
  'pageListItemText': function(params) {
    this.int32(-1188055347);
    this.predicate(params.text);
  },
  'pageListItemBlocks': function(params) {
    this.int32(635466748);
    this.vector(this.predicate, params.blocks);
  },
  'pageListOrderedItemText': function(params) {
    this.int32(1577484359);
    this.string(params.num);
    this.predicate(params.text);
  },
  'pageListOrderedItemBlocks': function(params) {
    this.int32(-1730311882);
    this.string(params.num);
    this.vector(this.predicate, params.blocks);
  },
  'pageRelatedArticle': function(params) {
    this.int32(-1282352120);
    const flags = (this.has(params.title) << 0) | (this.has(params.description) << 1) | (this.has(params.photo_id) << 2) | (this.has(params.author) << 3) | (this.has(params.published_date) << 4);
    this.int32(flags);
    this.string(params.url);
    this.long(params.webpage_id);
    this.flag(this.string, params.title);
    this.flag(this.string, params.description);
    this.flag(this.long, params.photo_id);
    this.flag(this.string, params.author);
    this.flag(this.int, params.published_date);
  },
  'page': function(params) {
    this.int32(-1738178803);
    const flags = (this.has(params.part) << 0) | (this.has(params.rtl) << 1) | (this.has(params.v2) << 2) | (this.has(params.views) << 3);
    this.int32(flags);
    this.string(params.url);
    this.vector(this.predicate, params.blocks);
    this.vector(this.predicate, params.photos);
    this.vector(this.predicate, params.documents);
    this.flag(this.int, params.views);
  },
  'help.supportName': function(params) {
    this.int32(-1945767479);
    this.string(params.name);
  },
  'help.userInfoEmpty': function(params) {
    this.int32(-206688531);
  },
  'help.userInfo': function(params) {
    this.int32(32192344);
    this.string(params.message);
    this.vector(this.predicate, params.entities);
    this.string(params.author);
    this.int(params.date);
  },
  'pollAnswer': function(params) {
    this.int32(1823064809);
    this.string(params.text);
    this.bytes(params.option);
  },
  'poll': function(params) {
    this.int32(-2032041631);
    this.long(params.id);
    const flags = (this.has(params.closed) << 0) | (this.has(params.public_voters) << 1) | (this.has(params.multiple_choice) << 2) | (this.has(params.quiz) << 3) | (this.has(params.close_period) << 4) | (this.has(params.close_date) << 5);
    this.int32(flags);
    this.string(params.question);
    this.vector(this.predicate, params.answers);
    this.flag(this.int, params.close_period);
    this.flag(this.int, params.close_date);
  },
  'pollAnswerVoters': function(params) {
    this.int32(997055186);
    const flags = (this.has(params.chosen) << 0) | (this.has(params.correct) << 1);
    this.int32(flags);
    this.bytes(params.option);
    this.int(params.voters);
  },
  'pollResults': function(params) {
    this.int32(-591909213);
    const flags = (this.has(params.min) << 0) | (this.has(params.results) << 1) | (this.has(params.total_voters) << 2) | (this.has(params.recent_voters) << 3) | (this.has(params.solution) << 4) | (this.has(params.solution_entities) << 4);
    this.int32(flags);
    this.flagVector(this.predicate, params.results);
    this.flag(this.int, params.total_voters);
    this.flagVector(this.long, params.recent_voters);
    this.flag(this.string, params.solution);
    this.flagVector(this.predicate, params.solution_entities);
  },
  'chatOnlines': function(params) {
    this.int32(-264117680);
    this.int(params.onlines);
  },
  'statsURL': function(params) {
    this.int32(1202287072);
    this.string(params.url);
  },
  'chatAdminRights': function(params) {
    this.int32(1605510357);
    const flags = (this.has(params.change_info) << 0) | (this.has(params.post_messages) << 1) | (this.has(params.edit_messages) << 2) | (this.has(params.delete_messages) << 3) | (this.has(params.ban_users) << 4) | (this.has(params.invite_users) << 5) | (this.has(params.pin_messages) << 7) | (this.has(params.add_admins) << 9) | (this.has(params.anonymous) << 10) | (this.has(params.manage_call) << 11) | (this.has(params.other) << 12);
    this.int32(flags);
  },
  'chatBannedRights': function(params) {
    this.int32(-1626209256);
    const flags = (this.has(params.view_messages) << 0) | (this.has(params.send_messages) << 1) | (this.has(params.send_media) << 2) | (this.has(params.send_stickers) << 3) | (this.has(params.send_gifs) << 4) | (this.has(params.send_games) << 5) | (this.has(params.send_inline) << 6) | (this.has(params.embed_links) << 7) | (this.has(params.send_polls) << 8) | (this.has(params.change_info) << 10) | (this.has(params.invite_users) << 15) | (this.has(params.pin_messages) << 17);
    this.int32(flags);
    this.int(params.until_date);
  },
  'inputWallPaper': function(params) {
    this.int32(-433014407);
    this.long(params.id);
    this.long(params.access_hash);
  },
  'inputWallPaperSlug': function(params) {
    this.int32(1913199744);
    this.string(params.slug);
  },
  'inputWallPaperNoFile': function(params) {
    this.int32(-1770371538);
    this.long(params.id);
  },
  'account.wallPapersNotModified': function(params) {
    this.int32(471437699);
  },
  'account.wallPapers': function(params) {
    this.int32(-842824308);
    this.long(params.hash);
    this.vector(this.predicate, params.wallpapers);
  },
  'codeSettings': function(params) {
    this.int32(-557924733);
    const flags = (this.has(params.allow_flashcall) << 0) | (this.has(params.current_number) << 1) | (this.has(params.allow_app_hash) << 4);
    this.int32(flags);
  },
  'wallPaperSettings': function(params) {
    this.int32(499236004);
    const flags = (this.has(params.blur) << 1) | (this.has(params.motion) << 2) | (this.has(params.background_color) << 0) | (this.has(params.second_background_color) << 4) | (this.has(params.third_background_color) << 5) | (this.has(params.fourth_background_color) << 6) | (this.has(params.intensity) << 3) | (this.has(params.rotation) << 4);
    this.int32(flags);
    this.flag(this.int, params.background_color);
    this.flag(this.int, params.second_background_color);
    this.flag(this.int, params.third_background_color);
    this.flag(this.int, params.fourth_background_color);
    this.flag(this.int, params.intensity);
    this.flag(this.int, params.rotation);
  },
  'autoDownloadSettings': function(params) {
    this.int32(-532532493);
    const flags = (this.has(params.disabled) << 0) | (this.has(params.video_preload_large) << 1) | (this.has(params.audio_preload_next) << 2) | (this.has(params.phonecalls_less_data) << 3);
    this.int32(flags);
    this.int(params.photo_size_max);
    this.int(params.video_size_max);
    this.int(params.file_size_max);
    this.int(params.video_upload_maxbitrate);
  },
  'account.autoDownloadSettings': function(params) {
    this.int32(1674235686);
    this.predicate(params.low);
    this.predicate(params.medium);
    this.predicate(params.high);
  },
  'emojiKeyword': function(params) {
    this.int32(-709641735);
    this.string(params.keyword);
    this.vector(this.string, params.emoticons);
  },
  'emojiKeywordDeleted': function(params) {
    this.int32(594408994);
    this.string(params.keyword);
    this.vector(this.string, params.emoticons);
  },
  'emojiKeywordsDifference': function(params) {
    this.int32(1556570557);
    this.string(params.lang_code);
    this.int(params.from_version);
    this.int(params.version);
    this.vector(this.predicate, params.keywords);
  },
  'emojiURL': function(params) {
    this.int32(-1519029347);
    this.string(params.url);
  },
  'emojiLanguage': function(params) {
    this.int32(-1275374751);
    this.string(params.lang_code);
  },
  'folder': function(params) {
    this.int32(-11252123);
    const flags = (this.has(params.autofill_new_broadcasts) << 0) | (this.has(params.autofill_public_groups) << 1) | (this.has(params.autofill_new_correspondents) << 2) | (this.has(params.photo) << 3);
    this.int32(flags);
    this.int(params.id);
    this.string(params.title);
    this.flag(this.predicate, params.photo);
  },
  'inputFolderPeer': function(params) {
    this.int32(-70073706);
    this.predicate(params.peer);
    this.int(params.folder_id);
  },
  'folderPeer': function(params) {
    this.int32(-373643672);
    this.predicate(params.peer);
    this.int(params.folder_id);
  },
  'messages.searchCounter': function(params) {
    this.int32(-398136321);
    const flags = (this.has(params.inexact) << 1);
    this.int32(flags);
    this.predicate(params.filter);
    this.int(params.count);
  },
  'urlAuthResultRequest': function(params) {
    this.int32(-1831650802);
    const flags = (this.has(params.request_write_access) << 0);
    this.int32(flags);
    this.predicate(params.bot);
    this.string(params.domain);
  },
  'urlAuthResultAccepted': function(params) {
    this.int32(-1886646706);
    this.string(params.url);
  },
  'urlAuthResultDefault': function(params) {
    this.int32(-1445536993);
  },
  'channelLocationEmpty': function(params) {
    this.int32(-1078612597);
  },
  'channelLocation': function(params) {
    this.int32(547062491);
    this.predicate(params.geo_point);
    this.string(params.address);
  },
  'peerLocated': function(params) {
    this.int32(-901375139);
    this.predicate(params.peer);
    this.int(params.expires);
    this.int(params.distance);
  },
  'peerSelfLocated': function(params) {
    this.int32(-118740917);
    this.int(params.expires);
  },
  'restrictionReason': function(params) {
    this.int32(-797791052);
    this.string(params.platform);
    this.string(params.reason);
    this.string(params.text);
  },
  'inputTheme': function(params) {
    this.int32(1012306921);
    this.long(params.id);
    this.long(params.access_hash);
  },
  'inputThemeSlug': function(params) {
    this.int32(-175567375);
    this.string(params.slug);
  },
  'theme': function(params) {
    this.int32(-402474788);
    const flags = (this.has(params.creator) << 0) | (this.has(params.default) << 1) | (this.has(params.for_chat) << 5) | (this.has(params.document) << 2) | (this.has(params.settings) << 3) | (this.has(params.installs_count) << 4);
    this.int32(flags);
    this.long(params.id);
    this.long(params.access_hash);
    this.string(params.slug);
    this.string(params.title);
    this.flag(this.predicate, params.document);
    this.flag(this.predicate, params.settings);
    this.flag(this.int, params.installs_count);
  },
  'account.themesNotModified': function(params) {
    this.int32(-199313886);
  },
  'account.themes': function(params) {
    this.int32(-1707242387);
    this.long(params.hash);
    this.vector(this.predicate, params.themes);
  },
  'auth.loginToken': function(params) {
    this.int32(1654593920);
    this.int(params.expires);
    this.bytes(params.token);
  },
  'auth.loginTokenMigrateTo': function(params) {
    this.int32(110008598);
    this.int(params.dc_id);
    this.bytes(params.token);
  },
  'auth.loginTokenSuccess': function(params) {
    this.int32(957176926);
    this.predicate(params.authorization);
  },
  'account.contentSettings': function(params) {
    this.int32(1474462241);
    const flags = (this.has(params.sensitive_enabled) << 0) | (this.has(params.sensitive_can_change) << 1);
    this.int32(flags);
  },
  'messages.inactiveChats': function(params) {
    this.int32(-1456996667);
    this.vector(this.int, params.dates);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'baseThemeClassic': function(params) {
    this.int32(-1012849566);
  },
  'baseThemeDay': function(params) {
    this.int32(-69724536);
  },
  'baseThemeNight': function(params) {
    this.int32(-1212997976);
  },
  'baseThemeTinted': function(params) {
    this.int32(1834973166);
  },
  'baseThemeArctic': function(params) {
    this.int32(1527845466);
  },
  'inputThemeSettings': function(params) {
    this.int32(-1881255857);
    const flags = (this.has(params.message_colors_animated) << 2) | (this.has(params.outbox_accent_color) << 3) | (this.has(params.message_colors) << 0) | (this.has(params.wallpaper) << 1) | (this.has(params.wallpaper_settings) << 1);
    this.int32(flags);
    this.predicate(params.base_theme);
    this.int(params.accent_color);
    this.flag(this.int, params.outbox_accent_color);
    this.flagVector(this.int, params.message_colors);
    this.flag(this.predicate, params.wallpaper);
    this.flag(this.predicate, params.wallpaper_settings);
  },
  'themeSettings': function(params) {
    this.int32(-94849324);
    const flags = (this.has(params.message_colors_animated) << 2) | (this.has(params.outbox_accent_color) << 3) | (this.has(params.message_colors) << 0) | (this.has(params.wallpaper) << 1);
    this.int32(flags);
    this.predicate(params.base_theme);
    this.int(params.accent_color);
    this.flag(this.int, params.outbox_accent_color);
    this.flagVector(this.int, params.message_colors);
    this.flag(this.predicate, params.wallpaper);
  },
  'webPageAttributeTheme': function(params) {
    this.int32(1421174295);
    const flags = (this.has(params.documents) << 0) | (this.has(params.settings) << 1);
    this.int32(flags);
    this.flagVector(this.predicate, params.documents);
    this.flag(this.predicate, params.settings);
  },
  'messageUserVote': function(params) {
    this.int32(886196148);
    this.long(params.user_id);
    this.bytes(params.option);
    this.int(params.date);
  },
  'messageUserVoteInputOption': function(params) {
    this.int32(1017491692);
    this.long(params.user_id);
    this.int(params.date);
  },
  'messageUserVoteMultiple': function(params) {
    this.int32(-1973033641);
    this.long(params.user_id);
    this.vector(this.bytes, params.options);
    this.int(params.date);
  },
  'messages.votesList': function(params) {
    this.int32(136574537);
    const flags = (this.has(params.next_offset) << 0);
    this.int32(flags);
    this.int(params.count);
    this.vector(this.predicate, params.votes);
    this.vector(this.predicate, params.users);
    this.flag(this.string, params.next_offset);
  },
  'bankCardOpenUrl': function(params) {
    this.int32(-177732982);
    this.string(params.url);
    this.string(params.name);
  },
  'payments.bankCardData': function(params) {
    this.int32(1042605427);
    this.string(params.title);
    this.vector(this.predicate, params.open_urls);
  },
  'dialogFilter': function(params) {
    this.int32(1949890536);
    const flags = (this.has(params.contacts) << 0) | (this.has(params.non_contacts) << 1) | (this.has(params.groups) << 2) | (this.has(params.broadcasts) << 3) | (this.has(params.bots) << 4) | (this.has(params.exclude_muted) << 11) | (this.has(params.exclude_read) << 12) | (this.has(params.exclude_archived) << 13) | (this.has(params.emoticon) << 25);
    this.int32(flags);
    this.int(params.id);
    this.string(params.title);
    this.flag(this.string, params.emoticon);
    this.vector(this.predicate, params.pinned_peers);
    this.vector(this.predicate, params.include_peers);
    this.vector(this.predicate, params.exclude_peers);
  },
  'dialogFilterSuggested': function(params) {
    this.int32(2004110666);
    this.predicate(params.filter);
    this.string(params.description);
  },
  'statsDateRangeDays': function(params) {
    this.int32(-1237848657);
    this.int(params.min_date);
    this.int(params.max_date);
  },
  'statsAbsValueAndPrev': function(params) {
    this.int32(-884757282);
    this.double(params.current);
    this.double(params.previous);
  },
  'statsPercentValue': function(params) {
    this.int32(-875679776);
    this.double(params.part);
    this.double(params.total);
  },
  'statsGraphAsync': function(params) {
    this.int32(1244130093);
    this.string(params.token);
  },
  'statsGraphError': function(params) {
    this.int32(-1092839390);
    this.string(params.error);
  },
  'statsGraph': function(params) {
    this.int32(-1901828938);
    const flags = (this.has(params.zoom_token) << 0);
    this.int32(flags);
    this.predicate(params.json);
    this.flag(this.string, params.zoom_token);
  },
  'messageInteractionCounters': function(params) {
    this.int32(-1387279939);
    this.int(params.msg_id);
    this.int(params.views);
    this.int(params.forwards);
  },
  'stats.broadcastStats': function(params) {
    this.int32(-1107852396);
    this.predicate(params.period);
    this.predicate(params.followers);
    this.predicate(params.views_per_post);
    this.predicate(params.shares_per_post);
    this.predicate(params.enabled_notifications);
    this.predicate(params.growth_graph);
    this.predicate(params.followers_graph);
    this.predicate(params.mute_graph);
    this.predicate(params.top_hours_graph);
    this.predicate(params.interactions_graph);
    this.predicate(params.iv_interactions_graph);
    this.predicate(params.views_by_source_graph);
    this.predicate(params.new_followers_by_source_graph);
    this.predicate(params.languages_graph);
    this.vector(this.predicate, params.recent_message_interactions);
  },
  'help.promoDataEmpty': function(params) {
    this.int32(-1728664459);
    this.int(params.expires);
  },
  'help.promoData': function(params) {
    this.int32(-1942390465);
    const flags = (this.has(params.proxy) << 0) | (this.has(params.psa_type) << 1) | (this.has(params.psa_message) << 2);
    this.int32(flags);
    this.int(params.expires);
    this.predicate(params.peer);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
    this.flag(this.string, params.psa_type);
    this.flag(this.string, params.psa_message);
  },
  'videoSize': function(params) {
    this.int32(-567037804);
    const flags = (this.has(params.video_start_ts) << 0);
    this.int32(flags);
    this.string(params.type);
    this.int(params.w);
    this.int(params.h);
    this.int(params.size);
    this.flag(this.double, params.video_start_ts);
  },
  'statsGroupTopPoster': function(params) {
    this.int32(-1660637285);
    this.long(params.user_id);
    this.int(params.messages);
    this.int(params.avg_chars);
  },
  'statsGroupTopAdmin': function(params) {
    this.int32(-682079097);
    this.long(params.user_id);
    this.int(params.deleted);
    this.int(params.kicked);
    this.int(params.banned);
  },
  'statsGroupTopInviter': function(params) {
    this.int32(1398765469);
    this.long(params.user_id);
    this.int(params.invitations);
  },
  'stats.megagroupStats': function(params) {
    this.int32(-276825834);
    this.predicate(params.period);
    this.predicate(params.members);
    this.predicate(params.messages);
    this.predicate(params.viewers);
    this.predicate(params.posters);
    this.predicate(params.growth_graph);
    this.predicate(params.members_graph);
    this.predicate(params.new_members_by_source_graph);
    this.predicate(params.languages_graph);
    this.predicate(params.messages_graph);
    this.predicate(params.actions_graph);
    this.predicate(params.top_hours_graph);
    this.predicate(params.weekdays_graph);
    this.vector(this.predicate, params.top_posters);
    this.vector(this.predicate, params.top_admins);
    this.vector(this.predicate, params.top_inviters);
    this.vector(this.predicate, params.users);
  },
  'globalPrivacySettings': function(params) {
    this.int32(-1096616924);
    const flags = (this.has(params.archive_and_mute_new_noncontact_peers) << 0);
    this.int32(flags);
    this.flag(this.Bool, params.archive_and_mute_new_noncontact_peers);
  },
  'help.countryCode': function(params) {
    this.int32(1107543535);
    const flags = (this.has(params.prefixes) << 0) | (this.has(params.patterns) << 1);
    this.int32(flags);
    this.string(params.country_code);
    this.flagVector(this.string, params.prefixes);
    this.flagVector(this.string, params.patterns);
  },
  'help.country': function(params) {
    this.int32(-1014526429);
    const flags = (this.has(params.hidden) << 0) | (this.has(params.name) << 1);
    this.int32(flags);
    this.string(params.iso2);
    this.string(params.default_name);
    this.flag(this.string, params.name);
    this.vector(this.predicate, params.country_codes);
  },
  'help.countriesListNotModified': function(params) {
    this.int32(-1815339214);
  },
  'help.countriesList': function(params) {
    this.int32(-2016381538);
    this.vector(this.predicate, params.countries);
    this.int(params.hash);
  },
  'messageViews': function(params) {
    this.int32(1163625789);
    const flags = (this.has(params.views) << 0) | (this.has(params.forwards) << 1) | (this.has(params.replies) << 2);
    this.int32(flags);
    this.flag(this.int, params.views);
    this.flag(this.int, params.forwards);
    this.flag(this.predicate, params.replies);
  },
  'messages.messageViews': function(params) {
    this.int32(-1228606141);
    this.vector(this.predicate, params.views);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'messages.discussionMessage': function(params) {
    this.int32(-1506535550);
    const flags = (this.has(params.max_id) << 0) | (this.has(params.read_inbox_max_id) << 1) | (this.has(params.read_outbox_max_id) << 2);
    this.int32(flags);
    this.vector(this.predicate, params.messages);
    this.flag(this.int, params.max_id);
    this.flag(this.int, params.read_inbox_max_id);
    this.flag(this.int, params.read_outbox_max_id);
    this.int(params.unread_count);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'messageReplyHeader': function(params) {
    this.int32(-1495959709);
    const flags = (this.has(params.reply_to_peer_id) << 0) | (this.has(params.reply_to_top_id) << 1);
    this.int32(flags);
    this.int(params.reply_to_msg_id);
    this.flag(this.predicate, params.reply_to_peer_id);
    this.flag(this.int, params.reply_to_top_id);
  },
  'messageReplies': function(params) {
    this.int32(-2083123262);
    const flags = (this.has(params.comments) << 0) | (this.has(params.recent_repliers) << 1) | (this.has(params.channel_id) << 0) | (this.has(params.max_id) << 2) | (this.has(params.read_max_id) << 3);
    this.int32(flags);
    this.int(params.replies);
    this.int(params.replies_pts);
    this.flagVector(this.predicate, params.recent_repliers);
    this.flag(this.long, params.channel_id);
    this.flag(this.int, params.max_id);
    this.flag(this.int, params.read_max_id);
  },
  'peerBlocked': function(params) {
    this.int32(-386039788);
    this.predicate(params.peer_id);
    this.int(params.date);
  },
  'stats.messageStats': function(params) {
    this.int32(-1986399595);
    this.predicate(params.views_graph);
  },
  'groupCallDiscarded': function(params) {
    this.int32(2004925620);
    this.long(params.id);
    this.long(params.access_hash);
    this.int(params.duration);
  },
  'groupCall': function(params) {
    this.int32(-711498484);
    const flags = (this.has(params.join_muted) << 1) | (this.has(params.can_change_join_muted) << 2) | (this.has(params.join_date_asc) << 6) | (this.has(params.schedule_start_subscribed) << 8) | (this.has(params.can_start_video) << 9) | (this.has(params.record_video_active) << 11) | (this.has(params.title) << 3) | (this.has(params.stream_dc_id) << 4) | (this.has(params.record_start_date) << 5) | (this.has(params.schedule_date) << 7) | (this.has(params.unmuted_video_count) << 10);
    this.int32(flags);
    this.long(params.id);
    this.long(params.access_hash);
    this.int(params.participants_count);
    this.flag(this.string, params.title);
    this.flag(this.int, params.stream_dc_id);
    this.flag(this.int, params.record_start_date);
    this.flag(this.int, params.schedule_date);
    this.flag(this.int, params.unmuted_video_count);
    this.int(params.unmuted_video_limit);
    this.int(params.version);
  },
  'inputGroupCall': function(params) {
    this.int32(-659913713);
    this.long(params.id);
    this.long(params.access_hash);
  },
  'groupCallParticipant': function(params) {
    this.int32(-341428482);
    const flags = (this.has(params.muted) << 0) | (this.has(params.left) << 1) | (this.has(params.can_self_unmute) << 2) | (this.has(params.just_joined) << 4) | (this.has(params.versioned) << 5) | (this.has(params.min) << 8) | (this.has(params.muted_by_you) << 9) | (this.has(params.volume_by_admin) << 10) | (this.has(params.self) << 12) | (this.has(params.video_joined) << 15) | (this.has(params.active_date) << 3) | (this.has(params.volume) << 7) | (this.has(params.about) << 11) | (this.has(params.raise_hand_rating) << 13) | (this.has(params.video) << 6) | (this.has(params.presentation) << 14);
    this.int32(flags);
    this.predicate(params.peer);
    this.int(params.date);
    this.flag(this.int, params.active_date);
    this.int(params.source);
    this.flag(this.int, params.volume);
    this.flag(this.string, params.about);
    this.flag(this.long, params.raise_hand_rating);
    this.flag(this.predicate, params.video);
    this.flag(this.predicate, params.presentation);
  },
  'phone.groupCall': function(params) {
    this.int32(-1636664659);
    this.predicate(params.call);
    this.vector(this.predicate, params.participants);
    this.string(params.participants_next_offset);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'phone.groupParticipants': function(params) {
    this.int32(-193506890);
    this.int(params.count);
    this.vector(this.predicate, params.participants);
    this.string(params.next_offset);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
    this.int(params.version);
  },
  'inlineQueryPeerTypeSameBotPM': function(params) {
    this.int32(813821341);
  },
  'inlineQueryPeerTypePM': function(params) {
    this.int32(-2093215828);
  },
  'inlineQueryPeerTypeChat': function(params) {
    this.int32(-681130742);
  },
  'inlineQueryPeerTypeMegagroup': function(params) {
    this.int32(1589952067);
  },
  'inlineQueryPeerTypeBroadcast': function(params) {
    this.int32(1664413338);
  },
  'messages.historyImport': function(params) {
    this.int32(375566091);
    this.long(params.id);
  },
  'messages.historyImportParsed': function(params) {
    this.int32(1578088377);
    const flags = (this.has(params.pm) << 0) | (this.has(params.group) << 1) | (this.has(params.title) << 2);
    this.int32(flags);
    this.flag(this.string, params.title);
  },
  'messages.affectedFoundMessages': function(params) {
    this.int32(-275956116);
    this.int(params.pts);
    this.int(params.pts_count);
    this.int(params.offset);
    this.vector(this.int, params.messages);
  },
  'chatInviteImporter': function(params) {
    this.int32(190633460);
    this.long(params.user_id);
    this.int(params.date);
  },
  'messages.exportedChatInvites': function(params) {
    this.int32(-1111085620);
    this.int(params.count);
    this.vector(this.predicate, params.invites);
    this.vector(this.predicate, params.users);
  },
  'messages.exportedChatInvite': function(params) {
    this.int32(410107472);
    this.predicate(params.invite);
    this.vector(this.predicate, params.users);
  },
  'messages.exportedChatInviteReplaced': function(params) {
    this.int32(572915951);
    this.predicate(params.invite);
    this.predicate(params.new_invite);
    this.vector(this.predicate, params.users);
  },
  'messages.chatInviteImporters': function(params) {
    this.int32(-2118733814);
    this.int(params.count);
    this.vector(this.predicate, params.importers);
    this.vector(this.predicate, params.users);
  },
  'chatAdminWithInvites': function(params) {
    this.int32(-219353309);
    this.long(params.admin_id);
    this.int(params.invites_count);
    this.int(params.revoked_invites_count);
  },
  'messages.chatAdminsWithInvites': function(params) {
    this.int32(-1231326505);
    this.vector(this.predicate, params.admins);
    this.vector(this.predicate, params.users);
  },
  'messages.checkedHistoryImportPeer': function(params) {
    this.int32(-1571952873);
    this.string(params.confirm_text);
  },
  'phone.joinAsPeers': function(params) {
    this.int32(-1343921601);
    this.vector(this.predicate, params.peers);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'phone.exportedGroupCallInvite': function(params) {
    this.int32(541839704);
    this.string(params.link);
  },
  'groupCallParticipantVideoSourceGroup': function(params) {
    this.int32(-592373577);
    this.string(params.semantics);
    this.vector(this.int, params.sources);
  },
  'groupCallParticipantVideo': function(params) {
    this.int32(1735736008);
    const flags = (this.has(params.paused) << 0) | (this.has(params.audio_source) << 1);
    this.int32(flags);
    this.string(params.endpoint);
    this.vector(this.predicate, params.source_groups);
    this.flag(this.int, params.audio_source);
  },
  'stickers.suggestedShortName': function(params) {
    this.int32(-2046910401);
    this.string(params.short_name);
  },
  'botCommandScopeDefault': function(params) {
    this.int32(795652779);
  },
  'botCommandScopeUsers': function(params) {
    this.int32(1011811544);
  },
  'botCommandScopeChats': function(params) {
    this.int32(1877059713);
  },
  'botCommandScopeChatAdmins': function(params) {
    this.int32(-1180016534);
  },
  'botCommandScopePeer': function(params) {
    this.int32(-610432643);
    this.predicate(params.peer);
  },
  'botCommandScopePeerAdmins': function(params) {
    this.int32(1071145937);
    this.predicate(params.peer);
  },
  'botCommandScopePeerUser': function(params) {
    this.int32(169026035);
    this.predicate(params.peer);
    this.predicate(params.user_id);
  },
  'account.resetPasswordFailedWait': function(params) {
    this.int32(-478701471);
    this.int(params.retry_date);
  },
  'account.resetPasswordRequestedWait': function(params) {
    this.int32(-370148227);
    this.int(params.until_date);
  },
  'account.resetPasswordOk': function(params) {
    this.int32(-383330754);
  },
  'chatTheme': function(params) {
    this.int32(-318022605);
    this.string(params.emoticon);
    this.predicate(params.theme);
    this.predicate(params.dark_theme);
  },
  'account.chatThemesNotModified': function(params) {
    this.int32(-535699004);
  },
  'account.chatThemes': function(params) {
    this.int32(-28524867);
    this.int(params.hash);
    this.vector(this.predicate, params.themes);
  },
  'sponsoredMessage': function(params) {
    this.int32(708589599);
    const flags = (this.has(params.start_param) << 0) | (this.has(params.entities) << 1);
    this.int32(flags);
    this.bytes(params.random_id);
    this.predicate(params.from_id);
    this.flag(this.string, params.start_param);
    this.string(params.message);
    this.flagVector(this.predicate, params.entities);
  },
  'messages.sponsoredMessages': function(params) {
    this.int32(1705297877);
    this.vector(this.predicate, params.messages);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'eitaaObject': function(params) {
    this.int32(2059302893);
    this.string(params.token);
    this.string(params.imei);
    this.bytes(params.packed_data);
    this.int(params.layer);
  },
  'liveGetMedia': function(params) {
    this.int32(1640969877);
    this.int(params.flags);
    this.long(params.id);
    this.long(params.access_hash);
  },
  'chatPhoto': function(params) {
    this.int32(1632839530);
    this.predicate(params.photo_small);
    this.predicate(params.photo_big);
  },
  'fileLocationToBeDeprecated': function(params) {
    this.int32(-1132476723);
    this.long(params.volume_id);
    this.int(params.local_id);
  },
  'fileLocation': function(params) {
    this.int32(1406570614);
    this.int(params.dc_id);
    this.long(params.volume_id);
    this.int(params.local_id);
    this.long(params.secret);
  },
  'photoCachedSize': function(params) {
    this.int32(-374917894);
    this.string(params.type);
    this.predicate(params.location);
    this.int(params.w);
    this.int(params.h);
    this.bytes(params.bytes);
  },
  'photoSize': function(params) {
    this.int32(2009052699);
    this.string(params.type);
    this.predicate(params.location);
    this.int(params.w);
    this.int(params.h);
    this.int(params.size);
  },
  'messageMediaLiveStream': function(params) {
    this.int32(-873187034);
    const flags = (this.has(params.from_self) << 1) | (this.has(params.total_viewers) << 0) | (this.has(params.thumbs) << 2);
    this.int32(flags);
    this.long(params.id);
    this.long(params.access_hash);
    this.flag(this.int, params.total_viewers);
    this.predicate(params.state);
    this.flagVector(this.predicate, params.thumbs);
  },
  'liveStreamStateInit': function(params) {
    this.int32(-1263446626);
  },
  'liveStreamStateBroadcasting': function(params) {
    this.int32(-1151640075);
    const flags = (this.has(params.paused) << 0);
    this.int32(flags);
    this.predicate(params.liveStream);
  },
  'liveStreamStateEnded': function(params) {
    this.int32(-1202907733);
    const flags = (this.has(params.expire_date) << 0) | (this.has(params.archive_link) << 0);
    this.int32(flags);
    this.int(params.duration);
    this.flag(this.int, params.expire_date);
    this.flag(this.string, params.archive_link);
  },
  'liveStreamStateEnded2': function(params) {
    this.int32(-53427794);
    const flags = (this.has(params.expire_date) << 0) | (this.has(params.archive_link) << 0) | (this.has(params.archive_size) << 0);
    this.int32(flags);
    this.int(params.duration);
    this.flag(this.int, params.expire_date);
    this.flag(this.string, params.archive_link);
    this.flag(this.int, params.archive_size);
  },
  'liveStream': function(params) {
    this.int32(765942443);
    const flags = (this.has(params.read_link) << 0) | (this.has(params.write_link) << 1);
    this.int32(flags);
    this.flag(this.string, params.read_link);
    this.flag(this.string, params.write_link);
    this.int(params.start_date);
  },
  'liveGetParticipants': function(params) {
    this.int32(-2008309847);
    this.long(params.id);
    this.long(params.access_hash);
  },
  'liveParticipants': function(params) {
    this.int32(-219577344);
    this.vector(this.predicate, params.users);
  },
  'adsInputAdsLocationRecommend': function(params) {
    this.int32(-1829372741);
  },
  'adsInputAdsLocationChatMembers': function(params) {
    this.int32(-338836925);
    this.predicate(params.peer);
  },
  'adsInputAdsLocationContacts': function(params) {
    this.int32(-415214013);
  },
  'adsInputAdsLocationTrends': function(params) {
    this.int32(1557811792);
    this.string(params.groupTitle);
  },
  'adsInputAdsLocationDialog': function(params) {
    this.int32(314488883);
  },
  'statAd': function(params) {
    this.int32(-1626620176);
    this.int(params.id);
    this.predicate(params.adsLocation);
  },
  'eitaaAppInfo': function(params) {
    this.int32(1635347945);
    this.int(params.build_version);
    this.string(params.device_model);
    this.string(params.system_version);
    this.string(params.app_version);
    this.string(params.lang_code);
    this.string(params.sign);
  },
  'invokeAfterMsg': function(params) {
    this.int32(-878758099);
    this.long(params.msg_id);
    this.predicate(params.query);
  },
  'invokeAfterMsgs': function(params) {
    this.int32(1036301552);
    this.vector(this.long, params.msg_ids);
    this.predicate(params.query);
  },
  'initConnection': function(params) {
    this.int32(-1043505495);
    const flags = (this.has(params.proxy) << 0) | (this.has(params.params) << 1);
    this.int32(flags);
    this.int(params.api_id);
    this.string(params.device_model);
    this.string(params.system_version);
    this.string(params.app_version);
    this.string(params.system_lang_code);
    this.string(params.lang_pack);
    this.string(params.lang_code);
    this.flag(this.predicate, params.proxy);
    this.flag(this.predicate, params.params);
    this.predicate(params.query);
  },
  'invokeWithLayer': function(params) {
    this.int32(-627372787);
    this.int(params.layer);
    this.predicate(params.query);
  },
  'invokeWithoutUpdates': function(params) {
    this.int32(-1080796745);
    this.predicate(params.query);
  },
  'invokeWithMessagesRange': function(params) {
    this.int32(911373810);
    this.predicate(params.range);
    this.predicate(params.query);
  },
  'invokeWithTakeout': function(params) {
    this.int32(-1398145746);
    this.long(params.takeout_id);
    this.predicate(params.query);
  },
  'auth.sendCode': function(params) {
    this.int32(-1502141361);
    this.string(params.phone_number);
    this.int(params.api_id);
    this.string(params.api_hash);
    this.predicate(params.settings);
  },
  'auth.signUp': function(params) {
    this.int32(-2131827673);
    this.string(params.phone_number);
    this.string(params.phone_code_hash);
    this.string(params.phone_code);
    this.string(params.first_name);
    this.string(params.last_name);
    this.predicate(params.app_info);
  },
  'auth.signIn': function(params) {
    this.int32(-1126886015);
    this.string(params.phone_number);
    this.string(params.phone_code_hash);
    this.string(params.phone_code);
  },
  'auth.logOut': function(params) {
    this.int32(1461180992);
  },
  'auth.resetAuthorizations': function(params) {
    this.int32(-1616179942);
  },
  'auth.exportAuthorization': function(params) {
    this.int32(-440401971);
    this.int(params.dc_id);
  },
  'auth.importAuthorization': function(params) {
    this.int32(-1518699091);
    this.long(params.id);
    this.bytes(params.bytes);
  },
  'auth.bindTempAuthKey': function(params) {
    this.int32(-841733627);
    this.long(params.perm_auth_key_id);
    this.long(params.nonce);
    this.int(params.expires_at);
    this.bytes(params.encrypted_message);
  },
  'auth.importBotAuthorization': function(params) {
    this.int32(1738800940);
    this.int(params.flags);
    this.int(params.api_id);
    this.string(params.api_hash);
    this.string(params.bot_auth_token);
  },
  'auth.checkPassword': function(params) {
    this.int32(-779399914);
    this.predicate(params.password);
  },
  'auth.checkPassword2': function(params) {
    this.int32(-1987323361);
    this.bytes(params.password_hash);
    const flags = (this.has(params.phone_code) << 0) | (this.has(params.phone_number) << 1);
    this.int32(flags);
    this.flag(this.string, params.phone_code);
    this.flag(this.string, params.phone_number);
  },
  'auth.requestPasswordRecovery': function(params) {
    this.int32(-661144474);
  },
  'auth.recoverPassword': function(params) {
    this.int32(923364464);
    const flags = (this.has(params.new_settings) << 0);
    this.int32(flags);
    this.string(params.code);
    this.flag(this.predicate, params.new_settings);
  },
  'auth.resendCode': function(params) {
    this.int32(1056025023);
    this.string(params.phone_number);
    this.string(params.phone_code_hash);
  },
  'auth.cancelCode': function(params) {
    this.int32(520357240);
    this.string(params.phone_number);
    this.string(params.phone_code_hash);
  },
  'auth.dropTempAuthKeys': function(params) {
    this.int32(-1907842680);
    this.vector(this.long, params.except_auth_keys);
  },
  'auth.exportLoginToken': function(params) {
    this.int32(-1210022402);
    this.int(params.api_id);
    this.string(params.api_hash);
    this.vector(this.long, params.except_ids);
  },
  'auth.importLoginToken': function(params) {
    this.int32(-1783866140);
    this.bytes(params.token);
  },
  'auth.acceptLoginToken': function(params) {
    this.int32(-392909491);
    this.bytes(params.token);
  },
  'auth.checkRecoveryPassword': function(params) {
    this.int32(221691769);
    this.string(params.code);
  },
  'account.registerDevice': function(params) {
    this.int32(-326762118);
    const flags = (this.has(params.no_muted) << 0);
    this.int32(flags);
    this.int(params.token_type);
    this.string(params.token);
    this.Bool(params.app_sandbox);
    this.bytes(params.secret);
    this.vector(this.long, params.other_uids);
  },
  'account.unregisterDevice': function(params) {
    this.int32(1779249670);
    this.int(params.token_type);
    this.string(params.token);
    this.vector(this.long, params.other_uids);
  },
  'account.updateNotifySettings': function(params) {
    this.int32(-2067899501);
    this.predicate(params.peer);
    this.predicate(params.settings);
  },
  'account.getNotifySettings': function(params) {
    this.int32(313765169);
    this.predicate(params.peer);
  },
  'account.resetNotifySettings': function(params) {
    this.int32(-612493497);
  },
  'account.updateProfile': function(params) {
    this.int32(2018596725);
    const flags = (this.has(params.first_name) << 0) | (this.has(params.last_name) << 1) | (this.has(params.about) << 2);
    this.int32(flags);
    this.flag(this.string, params.first_name);
    this.flag(this.string, params.last_name);
    this.flag(this.string, params.about);
  },
  'account.updateStatus': function(params) {
    this.int32(1713919532);
    this.Bool(params.offline);
  },
  'account.getWallPapers': function(params) {
    this.int32(127302966);
    this.long(params.hash);
  },
  'account.reportPeer': function(params) {
    this.int32(-977650298);
    this.predicate(params.peer);
    this.predicate(params.reason);
    this.string(params.message);
  },
  'account.checkUsername': function(params) {
    this.int32(655677548);
    this.string(params.username);
  },
  'account.updateUsername': function(params) {
    this.int32(1040964988);
    this.string(params.username);
  },
  'account.getPrivacy': function(params) {
    this.int32(-623130288);
    this.predicate(params.key);
  },
  'account.setPrivacy': function(params) {
    this.int32(-906486552);
    this.predicate(params.key);
    this.vector(this.predicate, params.rules);
  },
  'account.deleteAccount': function(params) {
    this.int32(1099779595);
    this.string(params.reason);
  },
  'account.getAccountTTL': function(params) {
    this.int32(150761757);
  },
  'account.setAccountTTL': function(params) {
    this.int32(608323678);
    this.predicate(params.ttl);
  },
  'account.sendChangePhoneCode': function(params) {
    this.int32(-2108208411);
    this.string(params.phone_number);
    this.predicate(params.settings);
  },
  'account.changePhone': function(params) {
    this.int32(1891839707);
    this.string(params.phone_number);
    this.string(params.phone_code_hash);
    this.string(params.phone_code);
  },
  'account.updateDeviceLocked': function(params) {
    this.int32(954152242);
    this.int(params.period);
  },
  'account.getAuthorizations': function(params) {
    this.int32(-484392616);
  },
  'account.resetAuthorization': function(params) {
    this.int32(-545786948);
    this.long(params.hash);
  },
  'account.getPassword': function(params) {
    this.int32(1418342645);
  },
  'account.getPasswordLayer68': function(params) {
    this.int32(3612004724);
    const flags = (this.has(params.phone_code) << 0) | (this.has(params.phone_number) << 1);
    this.int32(flags);
    this.flag(this.string, params.phone_code);
    this.flag(this.string, params.phone_number);
  },
  'account.getPasswordSettings': function(params) {
    this.int32(-1663767815);
    this.predicate(params.password);
  },
  'account.updatePasswordSettings': function(params) {
    this.int32(-1516564433);
    this.predicate(params.password);
    this.predicate(params.new_settings);
  },
  'account.updatePasswordSettingsLayer68': function(params) {
    this.int32(-92517498);
    this.bytes(params.current_password_hash);
    this.predicate(params.new_settings);
  },
  'account.sendConfirmPhoneCode': function(params) {
    this.int32(457157256);
    this.string(params.hash);
    this.predicate(params.settings);
  },
  'account.confirmPhone': function(params) {
    this.int32(1596029123);
    this.string(params.phone_code_hash);
    this.string(params.phone_code);
  },
  'account.getTmpPassword': function(params) {
    this.int32(1151208273);
    this.predicate(params.password);
    this.int(params.period);
  },
  'account.getWebAuthorizations': function(params) {
    this.int32(405695855);
  },
  'account.resetWebAuthorization': function(params) {
    this.int32(755087855);
    this.long(params.hash);
  },
  'account.resetWebAuthorizations': function(params) {
    this.int32(1747789204);
  },
  'account.getAllSecureValues': function(params) {
    this.int32(-1299661699);
  },
  'account.getSecureValue': function(params) {
    this.int32(1936088002);
    this.vector(this.predicate, params.types);
  },
  'account.saveSecureValue': function(params) {
    this.int32(-1986010339);
    this.predicate(params.value);
    this.long(params.secure_secret_id);
  },
  'account.deleteSecureValue': function(params) {
    this.int32(-1199522741);
    this.vector(this.predicate, params.types);
  },
  'account.getAuthorizationForm': function(params) {
    this.int32(-1456907910);
    this.long(params.bot_id);
    this.string(params.scope);
    this.string(params.public_key);
  },
  'account.acceptAuthorization': function(params) {
    this.int32(-202552205);
    this.long(params.bot_id);
    this.string(params.scope);
    this.string(params.public_key);
    this.vector(this.predicate, params.value_hashes);
    this.predicate(params.credentials);
  },
  'account.sendVerifyPhoneCode': function(params) {
    this.int32(-1516022023);
    this.string(params.phone_number);
    this.predicate(params.settings);
  },
  'account.verifyPhone': function(params) {
    this.int32(1305716726);
    this.string(params.phone_number);
    this.string(params.phone_code_hash);
    this.string(params.phone_code);
  },
  'account.sendVerifyEmailCode': function(params) {
    this.int32(1880182943);
    this.string(params.email);
  },
  'account.verifyEmail': function(params) {
    this.int32(-323339813);
    this.string(params.email);
    this.string(params.code);
  },
  'account.initTakeoutSession': function(params) {
    this.int32(-262453244);
    const flags = (this.has(params.contacts) << 0) | (this.has(params.message_users) << 1) | (this.has(params.message_chats) << 2) | (this.has(params.message_megagroups) << 3) | (this.has(params.message_channels) << 4) | (this.has(params.files) << 5) | (this.has(params.file_max_size) << 5);
    this.int32(flags);
    this.flag(this.int, params.file_max_size);
  },
  'account.finishTakeoutSession': function(params) {
    this.int32(489050862);
    const flags = (this.has(params.success) << 0);
    this.int32(flags);
  },
  'account.confirmPasswordEmail': function(params) {
    this.int32(-1881204448);
    this.string(params.code);
  },
  'account.resendPasswordEmail': function(params) {
    this.int32(2055154197);
  },
  'account.cancelPasswordEmail': function(params) {
    this.int32(-1043606090);
  },
  'account.getContactSignUpNotification': function(params) {
    this.int32(-1626880216);
  },
  'account.setContactSignUpNotification': function(params) {
    this.int32(-806076575);
    this.Bool(params.silent);
  },
  'account.getNotifyExceptions': function(params) {
    this.int32(1398240377);
    const flags = (this.has(params.compare_sound) << 1) | (this.has(params.peer) << 0);
    this.int32(flags);
    this.flag(this.predicate, params.peer);
  },
  'account.getWallPaper': function(params) {
    this.int32(-57811990);
    this.predicate(params.wallpaper);
  },
  'account.uploadWallPaper': function(params) {
    this.int32(-578472351);
    this.predicate(params.file);
    this.string(params.mime_type);
    this.predicate(params.settings);
  },
  'account.saveWallPaper': function(params) {
    this.int32(1817860919);
    this.predicate(params.wallpaper);
    this.Bool(params.unsave);
    this.predicate(params.settings);
  },
  'account.installWallPaper': function(params) {
    this.int32(-18000023);
    this.predicate(params.wallpaper);
    this.predicate(params.settings);
  },
  'account.resetWallPapers': function(params) {
    this.int32(-1153722364);
  },
  'account.getAutoDownloadSettings': function(params) {
    this.int32(1457130303);
  },
  'account.saveAutoDownloadSettings': function(params) {
    this.int32(1995661875);
    const flags = (this.has(params.low) << 0) | (this.has(params.high) << 1);
    this.int32(flags);
    this.predicate(params.settings);
  },
  'account.uploadTheme': function(params) {
    this.int32(473805619);
    const flags = (this.has(params.thumb) << 0);
    this.int32(flags);
    this.predicate(params.file);
    this.flag(this.predicate, params.thumb);
    this.string(params.file_name);
    this.string(params.mime_type);
  },
  'account.createTheme': function(params) {
    this.int32(-2077048289);
    const flags = (this.has(params.document) << 2) | (this.has(params.settings) << 3);
    this.int32(flags);
    this.string(params.slug);
    this.string(params.title);
    this.flag(this.predicate, params.document);
    this.flag(this.predicate, params.settings);
  },
  'account.updateTheme': function(params) {
    this.int32(1555261397);
    const flags = (this.has(params.slug) << 0) | (this.has(params.title) << 1) | (this.has(params.document) << 2) | (this.has(params.settings) << 3);
    this.int32(flags);
    this.string(params.format);
    this.predicate(params.theme);
    this.flag(this.string, params.slug);
    this.flag(this.string, params.title);
    this.flag(this.predicate, params.document);
    this.flag(this.predicate, params.settings);
  },
  'account.saveTheme': function(params) {
    this.int32(-229175188);
    this.predicate(params.theme);
    this.Bool(params.unsave);
  },
  'account.installTheme': function(params) {
    this.int32(2061776695);
    const flags = (this.has(params.dark) << 0) | (this.has(params.format) << 1) | (this.has(params.theme) << 1);
    this.int32(flags);
    this.flag(this.string, params.format);
    this.flag(this.predicate, params.theme);
  },
  'account.getTheme': function(params) {
    this.int32(-1919060949);
    this.string(params.format);
    this.predicate(params.theme);
    this.long(params.document_id);
  },
  'account.getThemes': function(params) {
    this.int32(1913054296);
    this.string(params.format);
    this.long(params.hash);
  },
  'account.setContentSettings': function(params) {
    this.int32(-1250643605);
    const flags = (this.has(params.sensitive_enabled) << 0);
    this.int32(flags);
  },
  'account.getContentSettings': function(params) {
    this.int32(-1952756306);
  },
  'account.getMultiWallPapers': function(params) {
    this.int32(1705865692);
    this.vector(this.predicate, params.wallpapers);
  },
  'account.getGlobalPrivacySettings': function(params) {
    this.int32(-349483786);
  },
  'account.setGlobalPrivacySettings': function(params) {
    this.int32(517647042);
    this.predicate(params.settings);
  },
  'account.reportProfilePhoto': function(params) {
    this.int32(-91437323);
    this.predicate(params.peer);
    this.predicate(params.photo_id);
    this.predicate(params.reason);
    this.string(params.message);
  },
  'account.resetPassword': function(params) {
    this.int32(-1828139493);
  },
  'account.declinePasswordReset': function(params) {
    this.int32(1284770294);
  },
  'account.getChatThemes': function(params) {
    this.int32(-690545285);
    this.int(params.hash);
  },
  'users.getUsers': function(params) {
    this.int32(227648840);
    this.vector(this.predicate, params.id);
  },
  'users.getFullUser': function(params) {
    this.int32(-902781519);
    this.predicate(params.id);
  },
  'users.setSecureValueErrors': function(params) {
    this.int32(-1865902923);
    this.predicate(params.id);
    this.vector(this.predicate, params.errors);
  },
  'contacts.getContactIDs': function(params) {
    this.int32(2061264541);
    this.long(params.hash);
  },
  'contacts.getStatuses': function(params) {
    this.int32(-995929106);
  },
  'contacts.getContacts': function(params) {
    this.int32(1574346258);
    this.long(params.hash);
  },
  'contacts.importContacts': function(params) {
    this.int32(746589157);
    this.vector(this.predicate, params.contacts);
  },
  'contacts.deleteContacts': function(params) {
    this.int32(157945344);
    this.vector(this.predicate, params.id);
  },
  'contacts.deleteByPhones': function(params) {
    this.int32(269745566);
    this.vector(this.string, params.phones);
  },
  'contacts.block': function(params) {
    this.int32(1758204945);
    this.predicate(params.id);
  },
  'contacts.unblock': function(params) {
    this.int32(-1096393392);
    this.predicate(params.id);
  },
  'contacts.getBlocked': function(params) {
    this.int32(-176409329);
    this.int(params.offset);
    this.int(params.limit);
  },
  'contacts.search': function(params) {
    this.int32(301470424);
    this.string(params.q);
    this.int(params.limit);
  },
  'contacts.resolveUsername': function(params) {
    this.int32(-113456221);
    this.string(params.username);
  },
  'contacts.getTopPeers': function(params) {
    this.int32(-1758168906);
    const flags = (this.has(params.correspondents) << 0) | (this.has(params.bots_pm) << 1) | (this.has(params.bots_inline) << 2) | (this.has(params.phone_calls) << 3) | (this.has(params.forward_users) << 4) | (this.has(params.forward_chats) << 5) | (this.has(params.groups) << 10) | (this.has(params.channels) << 15);
    this.int32(flags);
    this.int(params.offset);
    this.int(params.limit);
    this.long(params.hash);
  },
  'contacts.resetTopPeerRating': function(params) {
    this.int32(451113900);
    this.predicate(params.category);
    this.predicate(params.peer);
  },
  'contacts.resetSaved': function(params) {
    this.int32(-2020263951);
  },
  'contacts.getSaved': function(params) {
    this.int32(-2098076769);
  },
  'contacts.toggleTopPeers': function(params) {
    this.int32(-2062238246);
    this.Bool(params.enabled);
  },
  'contacts.addContact': function(params) {
    this.int32(-386636848);
    const flags = (this.has(params.add_phone_privacy_exception) << 0);
    this.int32(flags);
    this.predicate(params.id);
    this.string(params.first_name);
    this.string(params.last_name);
    this.string(params.phone);
  },
  'contacts.acceptContact': function(params) {
    this.int32(-130964977);
    this.predicate(params.id);
  },
  'contacts.getLocated': function(params) {
    this.int32(-750207932);
    const flags = (this.has(params.background) << 1) | (this.has(params.self_expires) << 0);
    this.int32(flags);
    this.predicate(params.geo_point);
    this.flag(this.int, params.self_expires);
  },
  'contacts.blockFromReplies': function(params) {
    this.int32(698914348);
    const flags = (this.has(params.delete_message) << 0) | (this.has(params.delete_history) << 1) | (this.has(params.report_spam) << 2);
    this.int32(flags);
    this.int(params.msg_id);
  },
  'messages.getMessages': function(params) {
    this.int32(1673946374);
    this.vector(this.predicate, params.id);
  },
  'messages.getDialogs': function(params) {
    this.int32(-1594569905);
    const flags = (this.has(params.exclude_pinned) << 0) | (this.has(params.folder_id) << 1);
    this.int32(flags);
    this.flag(this.int, params.folder_id);
    this.int(params.offset_date);
    this.int(params.offset_id);
    this.predicate(params.offset_peer);
    this.int(params.limit);
    this.long(params.hash);
  },
  'messages.getHistory': function(params) {
    this.int32(1143203525);
    this.predicate(params.peer);
    this.int(params.offset_id);
    this.int(params.offset_date);
    this.int(params.add_offset);
    this.int(params.limit);
    this.int(params.max_id);
    this.int(params.min_id);
    this.long(params.hash);
  },
  'messages.search': function(params) {
    this.int32(-1593989278);
    const flags = (this.has(params.from_id) << 0) | (this.has(params.top_msg_id) << 1);
    this.int32(flags);
    this.predicate(params.peer);
    this.string(params.q);
    this.flag(this.predicate, params.from_id);
    this.flag(this.int, params.top_msg_id);
    this.predicate(params.filter);
    this.int(params.min_date);
    this.int(params.max_date);
    this.int(params.offset_id);
    this.int(params.add_offset);
    this.int(params.limit);
    this.int(params.max_id);
    this.int(params.min_id);
    this.long(params.hash);
  },
  'messages.readHistory': function(params) {
    this.int32(238054714);
    this.predicate(params.peer);
    this.int(params.max_id);
  },
  'messages.deleteHistory': function(params) {
    this.int32(469850889);
    const flags = (this.has(params.just_clear) << 0) | (this.has(params.revoke) << 1);
    this.int32(flags);
    this.predicate(params.peer);
    this.int(params.max_id);
  },
  'messages.deleteMessages': function(params) {
    this.int32(-443640366);
    const flags = (this.has(params.revoke) << 0);
    this.int32(flags);
    this.vector(this.int, params.id);
  },
  'messages.receivedMessages': function(params) {
    this.int32(94983360);
    this.int(params.max_id);
  },
  'messages.setTyping': function(params) {
    this.int32(1486110434);
    const flags = (this.has(params.top_msg_id) << 0);
    this.int32(flags);
    this.predicate(params.peer);
    this.flag(this.int, params.top_msg_id);
    this.predicate(params.action);
  },
  'messages.sendMessage': function(params) {
    this.int32(1376532592);
    const flags = (this.has(params.no_webpage) << 1) | (this.has(params.silent) << 5) | (this.has(params.background) << 6) | (this.has(params.clear_draft) << 7) | (this.has(params.reply_to_msg_id) << 0) | (this.has(params.reply_markup) << 2) | (this.has(params.entities) << 3) | (this.has(params.schedule_date) << 10);
    this.int32(flags);
    this.predicate(params.peer);
    this.flag(this.int, params.reply_to_msg_id);
    this.string(params.message);
    this.long(params.random_id);
    this.flag(this.predicate, params.reply_markup);
    this.flagVector(this.predicate, params.entities);
    this.flag(this.int, params.schedule_date);
  },
  'messages.sendMedia': function(params) {
    this.int32(881978281);
    const flags = (this.has(params.silent) << 5) | (this.has(params.background) << 6) | (this.has(params.clear_draft) << 7) | (this.has(params.reply_to_msg_id) << 0) | (this.has(params.reply_markup) << 2) | (this.has(params.entities) << 3) | (this.has(params.schedule_date) << 10);
    this.int32(flags);
    this.predicate(params.peer);
    this.flag(this.int, params.reply_to_msg_id);
    this.predicate(params.media);
    this.string(params.message);
    this.long(params.random_id);
    this.flag(this.predicate, params.reply_markup);
    this.flagVector(this.predicate, params.entities);
    this.flag(this.int, params.schedule_date);
  },
  'messages.forwardMessages': function(params) {
    this.int32(-637606386);
    const flags = (this.has(params.silent) << 5) | (this.has(params.background) << 6) | (this.has(params.with_my_score) << 8) | (this.has(params.drop_author) << 11) | (this.has(params.drop_media_captions) << 12) | (this.has(params.schedule_date) << 10);
    this.int32(flags);
    this.predicate(params.from_peer);
    this.vector(this.int, params.id);
    this.vector(this.long, params.random_id);
    this.predicate(params.to_peer);
    this.flag(this.int, params.schedule_date);
  },
  'messages.reportSpam': function(params) {
    this.int32(-820669733);
    this.predicate(params.peer);
  },
  'messages.getPeerSettings': function(params) {
    this.int32(913498268);
    this.predicate(params.peer);
  },
  'messages.report': function(params) {
    this.int32(-1991005362);
    this.predicate(params.peer);
    this.vector(this.int, params.id);
    this.predicate(params.reason);
    this.string(params.message);
  },
  'messages.getChats': function(params) {
    this.int32(1240027791);
    this.vector(this.long, params.id);
  },
  'messages.getFullChat': function(params) {
    this.int32(-1364194508);
    this.long(params.chat_id);
  },
  'messages.editChatTitle': function(params) {
    this.int32(1937260541);
    this.long(params.chat_id);
    this.string(params.title);
  },
  'messages.editChatPhoto': function(params) {
    this.int32(903730804);
    this.long(params.chat_id);
    this.predicate(params.photo);
  },
  'messages.addChatUser': function(params) {
    this.int32(-230206493);
    this.long(params.chat_id);
    this.predicate(params.user_id);
    this.int(params.fwd_limit);
  },
  'messages.deleteChatUser': function(params) {
    this.int32(-1575461717);
    const flags = (this.has(params.revoke_history) << 0);
    this.int32(flags);
    this.long(params.chat_id);
    this.predicate(params.user_id);
  },
  'messages.createChat': function(params) {
    this.int32(164303470);
    this.vector(this.predicate, params.users);
    this.string(params.title);
  },
  'messages.getDhConfig': function(params) {
    this.int32(651135312);
    this.int(params.version);
    this.int(params.random_length);
  },
  'messages.requestEncryption': function(params) {
    this.int32(-162681021);
    this.predicate(params.user_id);
    this.int(params.random_id);
    this.bytes(params.g_a);
  },
  'messages.acceptEncryption': function(params) {
    this.int32(1035731989);
    this.predicate(params.peer);
    this.bytes(params.g_b);
    this.long(params.key_fingerprint);
  },
  'messages.discardEncryption': function(params) {
    this.int32(-208425312);
    const flags = (this.has(params.delete_history) << 0);
    this.int32(flags);
    this.int(params.chat_id);
  },
  'messages.setEncryptedTyping': function(params) {
    this.int32(2031374829);
    this.predicate(params.peer);
    this.Bool(params.typing);
  },
  'messages.readEncryptedHistory': function(params) {
    this.int32(2135648522);
    this.predicate(params.peer);
    this.int(params.max_date);
  },
  'messages.sendEncrypted': function(params) {
    this.int32(1157265941);
    const flags = (this.has(params.silent) << 0);
    this.int32(flags);
    this.predicate(params.peer);
    this.long(params.random_id);
    this.bytes(params.data);
  },
  'messages.sendEncryptedFile': function(params) {
    this.int32(1431914525);
    const flags = (this.has(params.silent) << 0);
    this.int32(flags);
    this.predicate(params.peer);
    this.long(params.random_id);
    this.bytes(params.data);
    this.predicate(params.file);
  },
  'messages.sendEncryptedService': function(params) {
    this.int32(852769188);
    this.predicate(params.peer);
    this.long(params.random_id);
    this.bytes(params.data);
  },
  'messages.receivedQueue': function(params) {
    this.int32(1436924774);
    this.int(params.max_qts);
  },
  'messages.reportEncryptedSpam': function(params) {
    this.int32(1259113487);
    this.predicate(params.peer);
  },
  'messages.readMessageContents': function(params) {
    this.int32(916930423);
    this.vector(this.int, params.id);
  },
  'messages.getStickers': function(params) {
    this.int32(-710552671);
    this.string(params.emoticon);
    this.long(params.hash);
  },
  'messages.getAllStickers': function(params) {
    this.int32(-1197432408);
    this.long(params.hash);
  },
  'messages.getWebPagePreview': function(params) {
    this.int32(-1956073268);
    const flags = (this.has(params.entities) << 3);
    this.int32(flags);
    this.string(params.message);
    this.flagVector(this.predicate, params.entities);
  },
  'messages.exportChatInvite': function(params) {
    this.int32(347716823);
    const flags = (this.has(params.legacy_revoke_permanent) << 2) | (this.has(params.expire_date) << 0) | (this.has(params.usage_limit) << 1);
    this.int32(flags);
    this.predicate(params.peer);
    this.flag(this.int, params.expire_date);
    this.flag(this.int, params.usage_limit);
  },
  'messages.exportChatInviteLayer84': function(params) {
    this.int32(2106086025);
    this.int(params.chat_id);
  },
  'messages.checkChatInvite': function(params) {
    this.int32(1051570619);
    this.string(params.hash);
  },
  'messages.importChatInvite': function(params) {
    this.int32(1817183516);
    this.string(params.hash);
  },
  'messages.getStickerSet': function(params) {
    this.int32(639215886);
    this.predicate(params.stickerset);
  },
  'messages.installStickerSet': function(params) {
    this.int32(-946871200);
    this.predicate(params.stickerset);
    this.Bool(params.archived);
  },
  'messages.uninstallStickerSet': function(params) {
    this.int32(-110209570);
    this.predicate(params.stickerset);
  },
  'messages.startBot': function(params) {
    this.int32(-421563528);
    this.predicate(params.bot);
    this.predicate(params.peer);
    this.long(params.random_id);
    this.string(params.start_param);
  },
  'messages.getMessagesViews': function(params) {
    this.int32(1468322785);
    const flags = 0;
    this.int32(flags);
    this.predicate(params.peer);
    this.vector(this.int, params.id);
    this.Bool(params.increment);
  },
  'messages.editChatAdmin': function(params) {
    this.int32(-1470377534);
    this.long(params.chat_id);
    this.predicate(params.user_id);
    this.Bool(params.is_admin);
  },
  'messages.migrateChat': function(params) {
    this.int32(-1568189671);
    this.long(params.chat_id);
  },
  'messages.searchGlobal': function(params) {
    this.int32(1271290010);
    const flags = (this.has(params.folder_id) << 0);
    this.int32(flags);
    this.flag(this.int, params.folder_id);
    this.string(params.q);
    this.predicate(params.filter);
    this.int(params.min_date);
    this.int(params.max_date);
    this.int(params.offset_rate);
    this.predicate(params.offset_peer);
    this.int(params.offset_id);
    this.int(params.limit);
  },
  'messages.searchGlobalExt': function(params) {
    this.int32(711765008);
    const flags = 0;
    this.int32(flags);
    this.string(params.q);
    this.int(params.offset_date);
    this.predicate(params.offset_peer);
    this.int(params.offset_id);
    this.int(params.limit);
  },
  'messages.reorderStickerSets': function(params) {
    this.int32(2016638777);
    const flags = (this.has(params.masks) << 0);
    this.int32(flags);
    this.vector(this.long, params.order);
  },
  'messages.getDocumentByHash': function(params) {
    this.int32(864953444);
    this.bytes(params.sha256);
    this.int(params.size);
    this.string(params.mime_type);
  },
  'messages.getSavedGifs': function(params) {
    this.int32(1559270965);
    this.long(params.hash);
  },
  'messages.saveGif': function(params) {
    this.int32(846868683);
    this.predicate(params.id);
    this.Bool(params.unsave);
  },
  'messages.getInlineBotResults': function(params) {
    this.int32(1364105629);
    const flags = (this.has(params.geo_point) << 0);
    this.int32(flags);
    this.predicate(params.bot);
    this.predicate(params.peer);
    this.flag(this.predicate, params.geo_point);
    this.string(params.query);
    this.string(params.offset);
  },
  'messages.setInlineBotResults': function(params) {
    this.int32(-346119674);
    const flags = (this.has(params.gallery) << 0) | (this.has(params.private) << 1) | (this.has(params.next_offset) << 2) | (this.has(params.switch_pm) << 3);
    this.int32(flags);
    this.long(params.query_id);
    this.vector(this.predicate, params.results);
    this.int(params.cache_time);
    this.flag(this.string, params.next_offset);
    this.flag(this.predicate, params.switch_pm);
  },
  'messages.sendInlineBotResult': function(params) {
    this.int32(570955184);
    const flags = (this.has(params.silent) << 5) | (this.has(params.background) << 6) | (this.has(params.clear_draft) << 7) | (this.has(params.hide_via) << 11) | (this.has(params.reply_to_msg_id) << 0) | (this.has(params.schedule_date) << 10);
    this.int32(flags);
    this.predicate(params.peer);
    this.flag(this.int, params.reply_to_msg_id);
    this.long(params.random_id);
    this.long(params.query_id);
    this.string(params.id);
    this.flag(this.int, params.schedule_date);
  },
  'messages.getMessageEditData': function(params) {
    this.int32(-39416522);
    this.predicate(params.peer);
    this.int(params.id);
  },
  'messages.editMessage': function(params) {
    this.int32(1224152952);
    const flags = (this.has(params.no_webpage) << 1) | (this.has(params.message) << 11) | (this.has(params.media) << 14) | (this.has(params.reply_markup) << 2) | (this.has(params.entities) << 3) | (this.has(params.schedule_date) << 15);
    this.int32(flags);
    this.predicate(params.peer);
    this.int(params.id);
    this.flag(this.string, params.message);
    this.flag(this.predicate, params.media);
    this.flag(this.predicate, params.reply_markup);
    this.flagVector(this.predicate, params.entities);
    this.flag(this.int, params.schedule_date);
  },
  'messages.editInlineBotMessage': function(params) {
    this.int32(-2091549254);
    const flags = (this.has(params.no_webpage) << 1) | (this.has(params.message) << 11) | (this.has(params.media) << 14) | (this.has(params.reply_markup) << 2) | (this.has(params.entities) << 3);
    this.int32(flags);
    this.predicate(params.id);
    this.flag(this.string, params.message);
    this.flag(this.predicate, params.media);
    this.flag(this.predicate, params.reply_markup);
    this.flagVector(this.predicate, params.entities);
  },
  'messages.getBotCallbackAnswer': function(params) {
    this.int32(-1824339449);
    const flags = (this.has(params.game) << 1) | (this.has(params.data) << 0) | (this.has(params.password) << 2);
    this.int32(flags);
    this.predicate(params.peer);
    this.int(params.msg_id);
    this.flag(this.bytes, params.data);
    this.flag(this.predicate, params.password);
  },
  'messages.setBotCallbackAnswer': function(params) {
    this.int32(-712043766);
    const flags = (this.has(params.alert) << 1) | (this.has(params.message) << 0) | (this.has(params.url) << 2);
    this.int32(flags);
    this.long(params.query_id);
    this.flag(this.string, params.message);
    this.flag(this.string, params.url);
    this.int(params.cache_time);
  },
  'messages.getPeerDialogs': function(params) {
    this.int32(-462373635);
    this.vector(this.predicate, params.peers);
  },
  'messages.saveDraft': function(params) {
    this.int32(-1137057461);
    const flags = (this.has(params.no_webpage) << 1) | (this.has(params.reply_to_msg_id) << 0) | (this.has(params.entities) << 3);
    this.int32(flags);
    this.flag(this.int, params.reply_to_msg_id);
    this.predicate(params.peer);
    this.string(params.message);
    this.flagVector(this.predicate, params.entities);
  },
  'messages.getAllDrafts': function(params) {
    this.int32(1782549861);
  },
  'messages.getFeaturedStickers': function(params) {
    this.int32(1685588756);
    this.long(params.hash);
  },
  'messages.readFeaturedStickers': function(params) {
    this.int32(1527873830);
    this.vector(this.long, params.id);
  },
  'messages.getRecentStickers': function(params) {
    this.int32(-1649852357);
    const flags = (this.has(params.attached) << 0);
    this.int32(flags);
    this.long(params.hash);
  },
  'messages.saveRecentSticker': function(params) {
    this.int32(958863608);
    const flags = (this.has(params.attached) << 0);
    this.int32(flags);
    this.predicate(params.id);
    this.Bool(params.unsave);
  },
  'messages.clearRecentStickers': function(params) {
    this.int32(-1986437075);
    const flags = (this.has(params.attached) << 0);
    this.int32(flags);
  },
  'messages.getArchivedStickers': function(params) {
    this.int32(1475442322);
    const flags = (this.has(params.masks) << 0);
    this.int32(flags);
    this.long(params.offset_id);
    this.int(params.limit);
  },
  'messages.getMaskStickers': function(params) {
    this.int32(1678738104);
    this.long(params.hash);
  },
  'messages.getAttachedStickers': function(params) {
    this.int32(-866424884);
    this.predicate(params.media);
  },
  'messages.setGameScore': function(params) {
    this.int32(-1896289088);
    const flags = (this.has(params.edit_message) << 0) | (this.has(params.force) << 1);
    this.int32(flags);
    this.predicate(params.peer);
    this.int(params.id);
    this.predicate(params.user_id);
    this.int(params.score);
  },
  'messages.setInlineGameScore': function(params) {
    this.int32(363700068);
    const flags = (this.has(params.edit_message) << 0) | (this.has(params.force) << 1);
    this.int32(flags);
    this.predicate(params.id);
    this.predicate(params.user_id);
    this.int(params.score);
  },
  'messages.getGameHighScores': function(params) {
    this.int32(-400399203);
    this.predicate(params.peer);
    this.int(params.id);
    this.predicate(params.user_id);
  },
  'messages.getInlineGameHighScores': function(params) {
    this.int32(258170395);
    this.predicate(params.id);
    this.predicate(params.user_id);
  },
  'messages.getCommonChats': function(params) {
    this.int32(-468934396);
    this.predicate(params.user_id);
    this.long(params.max_id);
    this.int(params.limit);
  },
  'messages.getAllChats': function(params) {
    this.int32(-2023787330);
    this.vector(this.long, params.except_ids);
  },
  'messages.getWebPage': function(params) {
    this.int32(852135825);
    this.string(params.url);
    this.int(params.hash);
  },
  'messages.toggleDialogPin': function(params) {
    this.int32(-1489903017);
    const flags = (this.has(params.pinned) << 0);
    this.int32(flags);
    this.predicate(params.peer);
  },
  'messages.reorderPinnedDialogs': function(params) {
    this.int32(991616823);
    const flags = (this.has(params.force) << 0);
    this.int32(flags);
    this.int(params.folder_id);
    this.vector(this.predicate, params.order);
  },
  'messages.getPinnedDialogs': function(params) {
    this.int32(-692498958);
    this.int(params.folder_id);
  },
  'messages.setBotShippingResults': function(params) {
    this.int32(-436833542);
    const flags = (this.has(params.error) << 0) | (this.has(params.shipping_options) << 1);
    this.int32(flags);
    this.long(params.query_id);
    this.flag(this.string, params.error);
    this.flagVector(this.predicate, params.shipping_options);
  },
  'messages.setBotPrecheckoutResults': function(params) {
    this.int32(163765653);
    const flags = (this.has(params.success) << 1) | (this.has(params.error) << 0);
    this.int32(flags);
    this.long(params.query_id);
    this.flag(this.string, params.error);
  },
  'messages.uploadMedia': function(params) {
    this.int32(1369162417);
    this.predicate(params.peer);
    this.predicate(params.media);
  },
  'messages.sendScreenshotNotification': function(params) {
    this.int32(-914493408);
    this.predicate(params.peer);
    this.int(params.reply_to_msg_id);
    this.long(params.random_id);
  },
  'messages.getFavedStickers': function(params) {
    this.int32(82946729);
    this.long(params.hash);
  },
  'messages.faveSticker': function(params) {
    this.int32(-1174420133);
    this.predicate(params.id);
    this.Bool(params.unfave);
  },
  'messages.getUnreadMentions': function(params) {
    this.int32(1180140658);
    this.predicate(params.peer);
    this.int(params.offset_id);
    this.int(params.add_offset);
    this.int(params.limit);
    this.int(params.max_id);
    this.int(params.min_id);
  },
  'messages.readMentions': function(params) {
    this.int32(251759059);
    this.predicate(params.peer);
  },
  'messages.getRecentLocations': function(params) {
    this.int32(1881817312);
    this.predicate(params.peer);
    this.int(params.limit);
    this.long(params.hash);
  },
  'messages.sendMultiMedia': function(params) {
    this.int32(-872345397);
    const flags = (this.has(params.silent) << 5) | (this.has(params.background) << 6) | (this.has(params.clear_draft) << 7) | (this.has(params.reply_to_msg_id) << 0) | (this.has(params.schedule_date) << 10);
    this.int32(flags);
    this.predicate(params.peer);
    this.flag(this.int, params.reply_to_msg_id);
    this.vector(this.predicate, params.multi_media);
    this.flag(this.int, params.schedule_date);
  },
  'messages.uploadEncryptedFile': function(params) {
    this.int32(1347929239);
    this.predicate(params.peer);
    this.predicate(params.file);
  },
  'messages.searchStickerSets': function(params) {
    this.int32(896555914);
    const flags = (this.has(params.exclude_featured) << 0);
    this.int32(flags);
    this.string(params.q);
    this.long(params.hash);
  },
  'messages.getSplitRanges': function(params) {
    this.int32(486505992);
  },
  'messages.markDialogUnread': function(params) {
    this.int32(-1031349873);
    const flags = (this.has(params.unread) << 0);
    this.int32(flags);
    this.predicate(params.peer);
  },
  'messages.getDialogUnreadMarks': function(params) {
    this.int32(585256482);
  },
  'messages.clearAllDrafts': function(params) {
    this.int32(2119757468);
  },
  'messages.updatePinnedMessage': function(params) {
    this.int32(-760547348);
    const flags = (this.has(params.silent) << 0) | (this.has(params.unpin) << 1) | (this.has(params.pm_oneside) << 2);
    this.int32(flags);
    this.predicate(params.peer);
    this.int(params.id);
  },
  'messages.sendVote': function(params) {
    this.int32(283795844);
    this.predicate(params.peer);
    this.int(params.msg_id);
    this.vector(this.bytes, params.options);
  },
  'messages.getPollResults': function(params) {
    this.int32(1941660731);
    this.predicate(params.peer);
    this.int(params.msg_id);
  },
  'messages.getOnlines': function(params) {
    this.int32(1848369232);
    this.predicate(params.peer);
  },
  'messages.getStatsURL': function(params) {
    this.int32(-2127811866);
    const flags = (this.has(params.dark) << 0);
    this.int32(flags);
    this.predicate(params.peer);
    this.string(params.params);
  },
  'messages.editChatAbout': function(params) {
    this.int32(-554301545);
    this.predicate(params.peer);
    this.string(params.about);
  },
  'messages.editChatDefaultBannedRights': function(params) {
    this.int32(-1517917375);
    this.predicate(params.peer);
    this.predicate(params.banned_rights);
  },
  'messages.getEmojiKeywords': function(params) {
    this.int32(899735650);
    this.string(params.lang_code);
  },
  'messages.getEmojiKeywordsDifference': function(params) {
    this.int32(352892591);
    this.string(params.lang_code);
    this.int(params.from_version);
  },
  'messages.getEmojiKeywordsLanguages': function(params) {
    this.int32(1318675378);
    this.vector(this.string, params.lang_codes);
  },
  'messages.getEmojiURL': function(params) {
    this.int32(-709817306);
    this.string(params.lang_code);
  },
  'messages.getSearchCounters': function(params) {
    this.int32(1932455680);
    this.predicate(params.peer);
    this.vector(this.predicate, params.filters);
  },
  'messages.requestUrlAuth': function(params) {
    this.int32(428848198);
    const flags = (this.has(params.peer) << 1) | (this.has(params.msg_id) << 1) | (this.has(params.button_id) << 1) | (this.has(params.url) << 2);
    this.int32(flags);
    this.flag(this.predicate, params.peer);
    this.flag(this.int, params.msg_id);
    this.flag(this.int, params.button_id);
    this.flag(this.string, params.url);
  },
  'messages.acceptUrlAuth': function(params) {
    this.int32(-1322487515);
    const flags = (this.has(params.write_allowed) << 0) | (this.has(params.peer) << 1) | (this.has(params.msg_id) << 1) | (this.has(params.button_id) << 1) | (this.has(params.url) << 2);
    this.int32(flags);
    this.flag(this.predicate, params.peer);
    this.flag(this.int, params.msg_id);
    this.flag(this.int, params.button_id);
    this.flag(this.string, params.url);
  },
  'messages.hidePeerSettingsBar': function(params) {
    this.int32(1336717624);
    this.predicate(params.peer);
  },
  'messages.getScheduledHistory': function(params) {
    this.int32(-183077365);
    this.predicate(params.peer);
    this.long(params.hash);
  },
  'messages.getScheduledMessages': function(params) {
    this.int32(-1111817116);
    this.predicate(params.peer);
    this.vector(this.int, params.id);
  },
  'messages.sendScheduledMessages': function(params) {
    this.int32(-1120369398);
    this.predicate(params.peer);
    this.vector(this.int, params.id);
  },
  'messages.deleteScheduledMessages': function(params) {
    this.int32(1504586518);
    this.predicate(params.peer);
    this.vector(this.int, params.id);
  },
  'messages.getPollVotes': function(params) {
    this.int32(-1200736242);
    const flags = (this.has(params.option) << 0) | (this.has(params.offset) << 1);
    this.int32(flags);
    this.predicate(params.peer);
    this.int(params.id);
    this.flag(this.bytes, params.option);
    this.flag(this.string, params.offset);
    this.int(params.limit);
  },
  'messages.toggleStickerSets': function(params) {
    this.int32(-1257951254);
    const flags = (this.has(params.uninstall) << 0) | (this.has(params.archive) << 1) | (this.has(params.unarchive) << 2);
    this.int32(flags);
    this.vector(this.predicate, params.stickersets);
  },
  'messages.getDialogFilters': function(params) {
    this.int32(-241247891);
  },
  'messages.getSuggestedDialogFilters': function(params) {
    this.int32(-1566780372);
  },
  'messages.updateDialogFilter': function(params) {
    this.int32(450142282);
    const flags = (this.has(params.filter) << 0);
    this.int32(flags);
    this.int(params.id);
    this.flag(this.predicate, params.filter);
  },
  'messages.updateDialogFiltersOrder': function(params) {
    this.int32(-983318044);
    this.vector(this.int, params.order);
  },
  'messages.getOldFeaturedStickers': function(params) {
    this.int32(2127598753);
    this.int(params.offset);
    this.int(params.limit);
    this.long(params.hash);
  },
  'messages.getReplies': function(params) {
    this.int32(584962828);
    this.predicate(params.peer);
    this.int(params.msg_id);
    this.int(params.offset_id);
    this.int(params.offset_date);
    this.int(params.add_offset);
    this.int(params.limit);
    this.int(params.max_id);
    this.int(params.min_id);
    this.long(params.hash);
  },
  'messages.getDiscussionMessage': function(params) {
    this.int32(1147761405);
    this.predicate(params.peer);
    this.int(params.msg_id);
  },
  'messages.readDiscussion': function(params) {
    this.int32(-147740172);
    this.predicate(params.peer);
    this.int(params.msg_id);
    this.int(params.read_max_id);
  },
  'messages.unpinAllMessages': function(params) {
    this.int32(-265962357);
    this.predicate(params.peer);
  },
  'messages.deleteChat': function(params) {
    this.int32(1540419152);
    this.long(params.chat_id);
  },
  'messages.deletePhoneCallHistory': function(params) {
    this.int32(-104078327);
    const flags = (this.has(params.revoke) << 0);
    this.int32(flags);
  },
  'messages.checkHistoryImport': function(params) {
    this.int32(1140726259);
    this.string(params.import_head);
  },
  'messages.initHistoryImport': function(params) {
    this.int32(873008187);
    this.predicate(params.peer);
    this.predicate(params.file);
    this.int(params.media_count);
  },
  'messages.uploadImportedMedia': function(params) {
    this.int32(713433234);
    this.predicate(params.peer);
    this.long(params.import_id);
    this.string(params.file_name);
    this.predicate(params.media);
  },
  'messages.startHistoryImport': function(params) {
    this.int32(-1271008444);
    this.predicate(params.peer);
    this.long(params.import_id);
  },
  'messages.getExportedChatInvites': function(params) {
    this.int32(-1565154314);
    const flags = (this.has(params.revoked) << 3) | (this.has(params.offset_date) << 2) | (this.has(params.offset_link) << 2);
    this.int32(flags);
    this.predicate(params.peer);
    this.predicate(params.admin_id);
    this.flag(this.int, params.offset_date);
    this.flag(this.string, params.offset_link);
    this.int(params.limit);
  },
  'messages.getExportedChatInvite': function(params) {
    this.int32(1937010524);
    this.predicate(params.peer);
    this.string(params.link);
  },
  'messages.editExportedChatInvite': function(params) {
    this.int32(48562110);
    const flags = (this.has(params.revoked) << 2) | (this.has(params.expire_date) << 0) | (this.has(params.usage_limit) << 1);
    this.int32(flags);
    this.predicate(params.peer);
    this.string(params.link);
    this.flag(this.int, params.expire_date);
    this.flag(this.int, params.usage_limit);
  },
  'messages.deleteRevokedExportedChatInvites': function(params) {
    this.int32(1452833749);
    this.predicate(params.peer);
    this.predicate(params.admin_id);
  },
  'messages.deleteExportedChatInvite': function(params) {
    this.int32(-731601877);
    this.predicate(params.peer);
    this.string(params.link);
  },
  'messages.getAdminsWithInvites': function(params) {
    this.int32(958457583);
    this.predicate(params.peer);
  },
  'messages.getChatInviteImporters': function(params) {
    this.int32(654013065);
    this.predicate(params.peer);
    this.string(params.link);
    this.int(params.offset_date);
    this.predicate(params.offset_user);
    this.int(params.limit);
  },
  'messages.setHistoryTTL': function(params) {
    this.int32(-1207017500);
    this.predicate(params.peer);
    this.int(params.period);
  },
  'messages.checkHistoryImportPeer': function(params) {
    this.int32(1573261059);
    this.predicate(params.peer);
  },
  'messages.setChatTheme': function(params) {
    this.int32(-432283329);
    this.predicate(params.peer);
    this.string(params.emoticon);
  },
  'messages.getMessageReadParticipants': function(params) {
    this.int32(745510839);
    this.predicate(params.peer);
    this.int(params.msg_id);
  },
  'updates.getState': function(params) {
    this.int32(-304838614);
  },
  'updates.getDifference': function(params) {
    this.int32(630429265);
    const flags = (this.has(params.pts_total_limit) << 0);
    this.int32(flags);
    this.int(params.pts);
    this.flag(this.int, params.pts_total_limit);
    this.int(params.date);
    this.int(params.qts);
  },
  'updates.getChannelDifference': function(params) {
    this.int32(51854712);
    const flags = (this.has(params.force) << 0);
    this.int32(flags);
    this.predicate(params.channel);
    this.predicate(params.filter);
    this.int(params.pts);
    this.int(params.limit);
  },
  'photos.updateProfilePhoto': function(params) {
    this.int32(1926525996);
    this.predicate(params.id);
  },
  'photos.uploadProfilePhoto': function(params) {
    this.int32(-1980559511);
    const flags = (this.has(params.file) << 0) | (this.has(params.video) << 1) | (this.has(params.video_start_ts) << 2);
    this.int32(flags);
    this.flag(this.predicate, params.file);
    this.flag(this.predicate, params.video);
    this.flag(this.double, params.video_start_ts);
  },
  'photos.deletePhotos': function(params) {
    this.int32(-2016444625);
    this.vector(this.predicate, params.id);
  },
  'photos.getUserPhotos': function(params) {
    this.int32(-1848823128);
    this.predicate(params.user_id);
    this.int(params.offset);
    this.long(params.max_id);
    this.int(params.limit);
  },
  'upload.saveFilePart': function(params) {
    this.int32(-1291540959);
    this.long(params.file_id);
    this.int(params.file_part);
    this.bytes(params.bytes);
    const flags = (this.has(params.peer) << 0) | (this.has(params.totalFileSize) << 1);
    this.int32(flags);
    this.flag(this.predicate, params.peer);
    this.flag(this.long, params.totalFileSize);
  },
  'upload.getFile': function(params) {
    this.int32(-1319462148);
    const flags = (this.has(params.precise) << 0) | (this.has(params.cdn_supported) << 1);
    this.int32(flags);
    this.predicate(params.location);
    this.int(params.offset);
    this.int(params.limit);
  },
  'upload.getFile2': function(params) {
    this.int32(-475607115);
    this.predicate(params.location);
    this.int(params.offset);
    this.int(params.limit);
  },
  'upload.saveBigFilePart': function(params) {
    this.int32(-562337987);
    this.long(params.file_id);
    this.int(params.file_part);
    this.int(params.file_total_parts);
    this.bytes(params.bytes);
    const flags = (this.has(params.peer) << 0) | (this.has(params.totalFileSize) << 1);
    this.int32(flags);
    this.flag(this.predicate, params.peer);
    this.flag(this.long, params.totalFileSize);
  },
  'upload.getWebFile': function(params) {
    this.int32(619086221);
    this.predicate(params.location);
    this.int(params.offset);
    this.int(params.limit);
  },
  'upload.getCdnFile': function(params) {
    this.int32(536919235);
    this.bytes(params.file_token);
    this.int(params.offset);
    this.int(params.limit);
  },
  'upload.reuploadCdnFile': function(params) {
    this.int32(-1691921240);
    this.bytes(params.file_token);
    this.bytes(params.request_token);
  },
  'upload.getCdnFileHashes': function(params) {
    this.int32(1302676017);
    this.bytes(params.file_token);
    this.int(params.offset);
  },
  'upload.getFileHashes': function(params) {
    this.int32(-956147407);
    this.predicate(params.location);
    this.int(params.offset);
  },
  'help.getConfig': function(params) {
    this.int32(-990308245);
  },
  'help.getNearestDc': function(params) {
    this.int32(531836966);
  },
  'help.getAppUpdate': function(params) {
    this.int32(1378703997);
    this.string(params.source);
  },
  'help.getInviteText': function(params) {
    this.int32(1295590211);
  },
  'help.getSupport': function(params) {
    this.int32(-1663104819);
  },
  'help.getAppChangelog': function(params) {
    this.int32(-1877938321);
    this.string(params.prev_app_version);
  },
  'help.setBotUpdatesStatus': function(params) {
    this.int32(-333262899);
    this.int(params.pending_updates_count);
    this.string(params.message);
  },
  'help.getCdnConfig': function(params) {
    this.int32(1375900482);
  },
  'help.getRecentMeUrls': function(params) {
    this.int32(1036054804);
    this.string(params.referer);
  },
  'help.getTermsOfServiceUpdate': function(params) {
    this.int32(749019089);
  },
  'help.acceptTermsOfService': function(params) {
    this.int32(-294455398);
    this.predicate(params.id);
  },
  'help.getDeepLinkInfo': function(params) {
    this.int32(1072547679);
    this.string(params.path);
  },
  'help.getAppConfig': function(params) {
    this.int32(-1735311088);
  },
  'help.saveAppLog': function(params) {
    this.int32(1862465352);
    this.vector(this.predicate, params.events);
  },
  'help.getPassportConfig': function(params) {
    this.int32(-966677240);
    this.int(params.hash);
  },
  'help.getSupportName': function(params) {
    this.int32(-748624084);
  },
  'help.getUserInfo': function(params) {
    this.int32(59377875);
    this.predicate(params.user_id);
  },
  'help.editUserInfo': function(params) {
    this.int32(1723407216);
    this.predicate(params.user_id);
    this.string(params.message);
    this.vector(this.predicate, params.entities);
  },
  'help.getPromoData': function(params) {
    this.int32(-1063816159);
  },
  'help.hidePromoData': function(params) {
    this.int32(505748629);
    this.predicate(params.peer);
  },
  'help.dismissSuggestion': function(params) {
    this.int32(-183649631);
    this.predicate(params.peer);
    this.string(params.suggestion);
  },
  'help.getCountriesList': function(params) {
    this.int32(1935116200);
    this.string(params.lang_code);
    this.int(params.hash);
  },
  'channels.readHistory': function(params) {
    this.int32(-871347913);
    this.predicate(params.channel);
    this.int(params.max_id);
  },
  'channels.deleteMessages': function(params) {
    this.int32(-2067661490);
    this.predicate(params.channel);
    this.vector(this.int, params.id);
  },
  'channels.deleteUserHistory': function(params) {
    this.int32(-787622117);
    this.predicate(params.channel);
    this.predicate(params.user_id);
  },
  'channels.reportSpam': function(params) {
    this.int32(-32999408);
    this.predicate(params.channel);
    this.predicate(params.user_id);
    this.vector(this.int, params.id);
  },
  'channels.getMessages': function(params) {
    this.int32(-1383294429);
    this.predicate(params.channel);
    this.vector(this.predicate, params.id);
  },
  'channels.getParticipants': function(params) {
    this.int32(2010044880);
    this.predicate(params.channel);
    this.predicate(params.filter);
    this.int(params.offset);
    this.int(params.limit);
    this.long(params.hash);
  },
  'channels.getParticipant': function(params) {
    this.int32(-1599378234);
    this.predicate(params.channel);
    this.predicate(params.participant);
  },
  'channels.getChannels': function(params) {
    this.int32(176122811);
    this.vector(this.predicate, params.id);
  },
  'channels.getFullChannel': function(params) {
    this.int32(141781513);
    this.predicate(params.channel);
  },
  'channels.createChannel': function(params) {
    this.int32(1029681423);
    const flags = (this.has(params.broadcast) << 0) | (this.has(params.megagroup) << 1) | (this.has(params.for_import) << 3) | (this.has(params.geo_point) << 2) | (this.has(params.address) << 2);
    this.int32(flags);
    this.string(params.title);
    this.string(params.about);
    this.flag(this.predicate, params.geo_point);
    this.flag(this.string, params.address);
  },
  'channels.editAdmin': function(params) {
    this.int32(-751007486);
    this.predicate(params.channel);
    this.predicate(params.user_id);
    this.predicate(params.admin_rights);
    this.string(params.rank);
  },
  'channels.editTitle': function(params) {
    this.int32(1450044624);
    this.predicate(params.channel);
    this.string(params.title);
  },
  'channels.editPhoto': function(params) {
    this.int32(-248621111);
    this.predicate(params.channel);
    this.predicate(params.photo);
  },
  'channels.checkUsername': function(params) {
    this.int32(283557164);
    this.predicate(params.channel);
    this.string(params.username);
  },
  'channels.updateUsername': function(params) {
    this.int32(890549214);
    this.predicate(params.channel);
    this.string(params.username);
  },
  'channels.joinChannel': function(params) {
    this.int32(615851205);
    this.predicate(params.channel);
  },
  'channels.leaveChannel': function(params) {
    this.int32(-130635115);
    this.predicate(params.channel);
  },
  'channels.inviteToChannel': function(params) {
    this.int32(429865580);
    this.predicate(params.channel);
    this.vector(this.predicate, params.users);
  },
  'channels.inviteToChannelLayer84': function(params) {
    this.int32(3344304261);
    this.predicate(params.channel);
  },
  'channels.deleteChannel': function(params) {
    this.int32(-1072619549);
    this.predicate(params.channel);
  },
  'channels.exportMessageLink': function(params) {
    this.int32(-432034325);
    const flags = (this.has(params.grouped) << 0) | (this.has(params.thread) << 1);
    this.int32(flags);
    this.predicate(params.channel);
    this.int(params.id);
  },
  'channels.toggleSignatures': function(params) {
    this.int32(527021574);
    this.predicate(params.channel);
    this.Bool(params.enabled);
  },
  'channels.getAdminedPublicChannels': function(params) {
    this.int32(-122669393);
    const flags = (this.has(params.by_location) << 0) | (this.has(params.check_limit) << 1);
    this.int32(flags);
  },
  'channels.editBanned': function(params) {
    this.int32(-1763259007);
    this.predicate(params.channel);
    this.predicate(params.participant);
    this.predicate(params.banned_rights);
  },
  'channels.getAdminLog': function(params) {
    this.int32(870184064);
    const flags = (this.has(params.events_filter) << 0) | (this.has(params.admins) << 1);
    this.int32(flags);
    this.predicate(params.channel);
    this.string(params.q);
    this.flag(this.predicate, params.events_filter);
    this.flagVector(this.predicate, params.admins);
    this.long(params.max_id);
    this.long(params.min_id);
    this.int(params.limit);
  },
  'channels.setStickers': function(params) {
    this.int32(-359881479);
    this.predicate(params.channel);
    this.predicate(params.stickerset);
  },
  'channels.readMessageContents': function(params) {
    this.int32(-357180360);
    this.predicate(params.channel);
    this.vector(this.int, params.id);
  },
  'channels.deleteHistory': function(params) {
    this.int32(-1355375294);
    this.predicate(params.channel);
    this.int(params.max_id);
  },
  'channels.togglePreHistoryHidden': function(params) {
    this.int32(-356796084);
    this.predicate(params.channel);
    this.Bool(params.enabled);
  },
  'channels.getLeftChannels': function(params) {
    this.int32(-2092831552);
    this.int(params.offset);
  },
  'channels.getGroupsForDiscussion': function(params) {
    this.int32(-170208392);
  },
  'channels.setDiscussionGroup': function(params) {
    this.int32(1079520178);
    this.predicate(params.broadcast);
    this.predicate(params.group);
  },
  'channels.editCreator': function(params) {
    this.int32(-1892102881);
    this.predicate(params.channel);
    this.predicate(params.user_id);
    this.predicate(params.password);
  },
  'channels.editLocation': function(params) {
    this.int32(1491484525);
    this.predicate(params.channel);
    this.predicate(params.geo_point);
    this.string(params.address);
  },
  'channels.toggleSlowMode': function(params) {
    this.int32(-304832784);
    this.predicate(params.channel);
    this.int(params.seconds);
  },
  'channels.getInactiveChannels': function(params) {
    this.int32(300429806);
  },
  'channels.convertToGigagroup': function(params) {
    this.int32(187239529);
    this.predicate(params.channel);
  },
  'channels.viewSponsoredMessage': function(params) {
    this.int32(-1095836780);
    this.predicate(params.channel);
    this.bytes(params.random_id);
  },
  'channels.getSponsoredMessages': function(params) {
    this.int32(-333377601);
    this.predicate(params.channel);
  },
  'bots.sendCustomRequest': function(params) {
    this.int32(-1440257555);
    this.string(params.custom_method);
    this.predicate(params.params);
  },
  'bots.answerWebhookJSONQuery': function(params) {
    this.int32(-434028723);
    this.long(params.query_id);
    this.predicate(params.data);
  },
  'bots.setBotCommands': function(params) {
    this.int32(85399130);
    this.predicate(params.scope);
    this.string(params.lang_code);
    this.vector(this.predicate, params.commands);
  },
  'bots.resetBotCommands': function(params) {
    this.int32(1032708345);
    this.predicate(params.scope);
    this.string(params.lang_code);
  },
  'bots.getBotCommands': function(params) {
    this.int32(-481554986);
    this.predicate(params.scope);
    this.string(params.lang_code);
  },
  'payments.getPaymentForm': function(params) {
    this.int32(-1976353651);
    const flags = (this.has(params.theme_params) << 0);
    this.int32(flags);
    this.predicate(params.peer);
    this.int(params.msg_id);
    this.flag(this.predicate, params.theme_params);
  },
  'payments.getPaymentReceipt': function(params) {
    this.int32(611897804);
    this.predicate(params.peer);
    this.int(params.msg_id);
  },
  'payments.validateRequestedInfo': function(params) {
    this.int32(-619695760);
    const flags = (this.has(params.save) << 0);
    this.int32(flags);
    this.predicate(params.peer);
    this.int(params.msg_id);
    this.predicate(params.info);
  },
  'payments.sendPaymentForm': function(params) {
    this.int32(818134173);
    const flags = (this.has(params.requested_info_id) << 0) | (this.has(params.shipping_option_id) << 1) | (this.has(params.tip_amount) << 2);
    this.int32(flags);
    this.long(params.form_id);
    this.predicate(params.peer);
    this.int(params.msg_id);
    this.flag(this.string, params.requested_info_id);
    this.flag(this.string, params.shipping_option_id);
    this.predicate(params.credentials);
    this.flag(this.long, params.tip_amount);
  },
  'payments.getSavedInfo': function(params) {
    this.int32(578650699);
  },
  'payments.clearSavedInfo': function(params) {
    this.int32(-667062079);
    const flags = (this.has(params.credentials) << 0) | (this.has(params.info) << 1);
    this.int32(flags);
  },
  'payments.getBankCardData': function(params) {
    this.int32(779736953);
    this.string(params.number);
  },
  'stickers.createStickerSet': function(params) {
    this.int32(-1876841625);
    const flags = (this.has(params.masks) << 0) | (this.has(params.animated) << 1) | (this.has(params.thumb) << 2) | (this.has(params.software) << 3);
    this.int32(flags);
    this.predicate(params.user_id);
    this.string(params.title);
    this.string(params.short_name);
    this.flag(this.predicate, params.thumb);
    this.vector(this.predicate, params.stickers);
    this.flag(this.string, params.software);
  },
  'stickers.removeStickerFromSet': function(params) {
    this.int32(-143257775);
    this.predicate(params.sticker);
  },
  'stickers.changeStickerPosition': function(params) {
    this.int32(-4795190);
    this.predicate(params.sticker);
    this.int(params.position);
  },
  'stickers.addStickerToSet': function(params) {
    this.int32(-2041315650);
    this.predicate(params.stickerset);
    this.predicate(params.sticker);
  },
  'stickers.setStickerSetThumb': function(params) {
    this.int32(-1707717072);
    this.predicate(params.stickerset);
    this.predicate(params.thumb);
  },
  'stickers.checkShortName': function(params) {
    this.int32(676017721);
    this.string(params.short_name);
  },
  'stickers.suggestShortName': function(params) {
    this.int32(1303364867);
    this.string(params.title);
  },
  'phone.getCallConfig': function(params) {
    this.int32(1430593449);
  },
  'phone.requestCall': function(params) {
    this.int32(1124046573);
    const flags = (this.has(params.video) << 0);
    this.int32(flags);
    this.predicate(params.user_id);
    this.int(params.random_id);
    this.bytes(params.g_a_hash);
    this.predicate(params.protocol);
  },
  'phone.acceptCall': function(params) {
    this.int32(1003664544);
    this.predicate(params.peer);
    this.bytes(params.g_b);
    this.predicate(params.protocol);
  },
  'phone.confirmCall': function(params) {
    this.int32(788404002);
    this.predicate(params.peer);
    this.bytes(params.g_a);
    this.long(params.key_fingerprint);
    this.predicate(params.protocol);
  },
  'phone.receivedCall': function(params) {
    this.int32(399855457);
    this.predicate(params.peer);
  },
  'phone.discardCall': function(params) {
    this.int32(-1295269440);
    const flags = (this.has(params.video) << 0);
    this.int32(flags);
    this.predicate(params.peer);
    this.int(params.duration);
    this.predicate(params.reason);
    this.long(params.connection_id);
  },
  'phone.setCallRating': function(params) {
    this.int32(1508562471);
    const flags = (this.has(params.user_initiative) << 0);
    this.int32(flags);
    this.predicate(params.peer);
    this.int(params.rating);
    this.string(params.comment);
  },
  'phone.saveCallDebug': function(params) {
    this.int32(662363518);
    this.predicate(params.peer);
    this.predicate(params.debug);
  },
  'phone.sendSignalingData': function(params) {
    this.int32(-8744061);
    this.predicate(params.peer);
    this.bytes(params.data);
  },
  'phone.createGroupCall': function(params) {
    this.int32(1221445336);
    const flags = (this.has(params.title) << 0) | (this.has(params.schedule_date) << 1);
    this.int32(flags);
    this.predicate(params.peer);
    this.int(params.random_id);
    this.flag(this.string, params.title);
    this.flag(this.int, params.schedule_date);
  },
  'phone.joinGroupCall': function(params) {
    this.int32(-1322057861);
    const flags = (this.has(params.muted) << 0) | (this.has(params.video_stopped) << 2) | (this.has(params.invite_hash) << 1);
    this.int32(flags);
    this.predicate(params.call);
    this.predicate(params.join_as);
    this.flag(this.string, params.invite_hash);
    this.predicate(params.params);
  },
  'phone.leaveGroupCall': function(params) {
    this.int32(1342404601);
    this.predicate(params.call);
    this.int(params.source);
  },
  'phone.inviteToGroupCall': function(params) {
    this.int32(2067345760);
    this.predicate(params.call);
    this.vector(this.predicate, params.users);
  },
  'phone.discardGroupCall': function(params) {
    this.int32(2054648117);
    this.predicate(params.call);
  },
  'phone.toggleGroupCallSettings': function(params) {
    this.int32(1958458429);
    const flags = (this.has(params.reset_invite_hash) << 1) | (this.has(params.join_muted) << 0);
    this.int32(flags);
    this.predicate(params.call);
    this.flag(this.Bool, params.join_muted);
  },
  'phone.getGroupCall': function(params) {
    this.int32(68699611);
    this.predicate(params.call);
    this.int(params.limit);
  },
  'phone.getGroupParticipants': function(params) {
    this.int32(-984033109);
    this.predicate(params.call);
    this.vector(this.predicate, params.ids);
    this.vector(this.int, params.sources);
    this.string(params.offset);
    this.int(params.limit);
  },
  'phone.checkGroupCall': function(params) {
    this.int32(-1248003721);
    this.predicate(params.call);
    this.vector(this.int, params.sources);
  },
  'phone.toggleGroupCallRecord': function(params) {
    this.int32(-248985848);
    const flags = (this.has(params.start) << 0) | (this.has(params.video) << 2) | (this.has(params.title) << 1) | (this.has(params.video_portrait) << 2);
    this.int32(flags);
    this.predicate(params.call);
    this.flag(this.string, params.title);
    this.flag(this.Bool, params.video_portrait);
  },
  'phone.editGroupCallParticipant': function(params) {
    this.int32(-1524155713);
    const flags = (this.has(params.muted) << 0) | (this.has(params.volume) << 1) | (this.has(params.raise_hand) << 2) | (this.has(params.video_stopped) << 3) | (this.has(params.video_paused) << 4) | (this.has(params.presentation_paused) << 5);
    this.int32(flags);
    this.predicate(params.call);
    this.predicate(params.participant);
    this.flag(this.Bool, params.muted);
    this.flag(this.int, params.volume);
    this.flag(this.Bool, params.raise_hand);
    this.flag(this.Bool, params.video_stopped);
    this.flag(this.Bool, params.video_paused);
    this.flag(this.Bool, params.presentation_paused);
  },
  'phone.editGroupCallTitle': function(params) {
    this.int32(480685066);
    this.predicate(params.call);
    this.string(params.title);
  },
  'phone.getGroupCallJoinAs': function(params) {
    this.int32(-277077702);
    this.predicate(params.peer);
  },
  'phone.exportGroupCallInvite': function(params) {
    this.int32(-425040769);
    const flags = (this.has(params.can_self_unmute) << 0);
    this.int32(flags);
    this.predicate(params.call);
  },
  'phone.toggleGroupCallStartSubscription': function(params) {
    this.int32(563885286);
    this.predicate(params.call);
    this.Bool(params.subscribed);
  },
  'phone.startScheduledGroupCall': function(params) {
    this.int32(1451287362);
    this.predicate(params.call);
  },
  'phone.saveDefaultGroupCallJoinAs': function(params) {
    this.int32(1465786252);
    this.predicate(params.peer);
    this.predicate(params.join_as);
  },
  'phone.joinGroupCallPresentation': function(params) {
    this.int32(-873829436);
    this.predicate(params.call);
    this.predicate(params.params);
  },
  'phone.leaveGroupCallPresentation': function(params) {
    this.int32(475058500);
    this.predicate(params.call);
  },
  'langpack.getLangPack': function(params) {
    this.int32(-219008246);
    this.string(params.lang_pack);
    this.string(params.lang_code);
  },
  'langpack.getStrings': function(params) {
    this.int32(-269862909);
    this.string(params.lang_pack);
    this.string(params.lang_code);
    this.vector(this.string, params.keys);
  },
  'langpack.getDifference': function(params) {
    this.int32(-845657435);
    this.string(params.lang_pack);
    this.string(params.lang_code);
    this.int(params.from_version);
  },
  'langpack.getLanguages': function(params) {
    this.int32(1120311183);
    this.string(params.lang_pack);
  },
  'langpack.getLanguage': function(params) {
    this.int32(1784243458);
    this.string(params.lang_pack);
    this.string(params.lang_code);
  },
  'folders.editPeerFolders': function(params) {
    this.int32(1749536939);
    this.vector(this.predicate, params.folder_peers);
  },
  'folders.deleteFolder': function(params) {
    this.int32(472471681);
    this.int(params.folder_id);
  },
  'stats.getBroadcastStats': function(params) {
    this.int32(-1421720550);
    const flags = (this.has(params.dark) << 0);
    this.int32(flags);
    this.predicate(params.channel);
  },
  'stats.loadAsyncGraph': function(params) {
    this.int32(1646092192);
    const flags = (this.has(params.x) << 0);
    this.int32(flags);
    this.string(params.token);
    this.flag(this.long, params.x);
  },
  'stats.getMegagroupStats': function(params) {
    this.int32(-589330937);
    const flags = (this.has(params.dark) << 0);
    this.int32(flags);
    this.predicate(params.channel);
  },
  'stats.getMessagePublicForwards': function(params) {
    this.int32(1445996571);
    this.predicate(params.channel);
    this.int(params.msg_id);
    this.int(params.offset_rate);
    this.predicate(params.offset_peer);
    this.int(params.offset_id);
    this.int(params.limit);
  },
  'stats.getMessageStats': function(params) {
    this.int32(-1226791947);
    const flags = (this.has(params.dark) << 0);
    this.int32(flags);
    this.predicate(params.channel);
    this.int(params.msg_id);
  },
  'eitaaObject': function(params) {
    this.int32(2059302893);
    this.string(params.token);
    this.string(params.imei);
    this.bytes(params.packed_data);
    this.int(params.layer);
  },
  'eitaaRefreshToken': function(params) {
    this.int32(-599448727);
    this.predicate(params.app_info);
  },
  'liveGetMedia': function(params) {
    this.int32(1640969877);
    const flags = 0;
    this.int32(flags);
    this.long(params.id);
    this.long(params.access_hash);
  },
  'adsGetAdsPack': function(params) {
    this.int32(950734118);
    this.int(params.flags);
    this.predicate(params.location);
  },
  'statAd': function(params) {
    this.int32(-1626620176);
    this.int(params.id);
    this.predicate(params.adsLocation);
  },
  'statReportAdActionPerformed': function(params) {
    this.int32(-1261786457);
    this.predicate(params.statAd);
  },
};
module.exports = builderMap;