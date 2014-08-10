//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"bm仝键","phone":"18733171780"}]})
//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"jj308","phone":"18733171780"}]})
var native_accessor = {
    send_sms: function (phone, message) {
//        native_access.send_sms({"receivers":[{"name":'name', "phone":phone}]}, {"message_content":message});
        console.log(phone, message);
    },

    receive_message: function (json_message) {
        if (typeof this.process_received_message === 'function') {
            this.process_received_message(json_message);
        }
    },

    process_received_message: function (json_message) {

        if (Bids.start_disabled_activity(json_message) && !Sms.same_bm(json_message)) {
            Sms.bm_succeed(json_message)
            native_accessor.send_sms(json_message.messages[0].phone, "恭喜您，报名成功！")
            Sms.refresh_pages();
            return;
        }

        if (Bids.start_disabled_activity(json_message) && Sms.same_bm(json_message)) {
            native_accessor.send_sms(json_message.messages[0].phone, "报名已成功，请勿重复报名")
            Sms.refresh_pages();
            return;
        }

        if (!Bids.start_disabled_activity(json_message) && !Sms.find_doing_jj(json_message)) {

            native_accessor.send_sms(json_message.messages[0].phone, "报名未开始，请耐心等待")
            return;
        }

        if (Sms.find_doing_jj(json_message) && Sms.find_this_bm(json_message) && Sms.bm_phone_same_jj(json_message)&& !Sms.same_jj_name(json_message)) {

            Sms.jj_succeed(json_message)

            native_accessor.send_sms(json_message.messages[0].phone, "恭喜您，竞价成功！")
            Sms.refresh_pages();
            return;
        }

        if (Sms.find_doing_jj(json_message) && Sms.find_this_bm(json_message) && Sms.same_jj_name(json_message)) {
            native_accessor.send_sms(json_message.messages[0].phone, "竞价已成功，请勿重复竞价")
            return;
        }
        if (Sms.find_doing_jj(json_message) && !Sms.bm_phone_same_jj(json_message)) {
            native_accessor.send_sms(json_message.messages[0].phone, "未报名活动，不能参加竞价")
            return;
        }
        if (Bids.start_disabled_activity(json_message) && !Sms.find_doing_jj(json_message)) {
            native_accessor.send_sms(json_message.messages[0].phone, "竞价未开始，请耐心等待");
            return;
        }
    }
}


function notify_message_received(message_json) {
    //console.log(JSON.stringify(message_json));
    //JSON.stringify(message_json);
    //alert(JSON.stringify(message_json.messages));
    native_accessor.receive_message(message_json);
    //phone_number=message_json.messages[0].phone;
}
