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

        var duanxin = json_message.messages[0].message.replace(/\s/g, "");


//        提取短信中的信息，创建messages数组，将提取出来的信息已数组形式存放在messages中
        var activity = JSON.parse(localStorage.getItem('activities')) || []
        //竞价时，name就是价格
        var shus = JSON.parse(localStorage.getItem('shus'))
        var oo = localStorage.getItem('seeing_activity_name')

        //报名收发短信
        if (duanxin.search(/bm/i) == 0) {
            var message = {"name": "name", "phone": "phone"}
            message.name = duanxin.substr(2).trim()
            message.phone = json_message.messages[0].phone
            for (var i = 0; i < activity.length; i++) {
                if (activity[i].tureth == "true") {
                    if (activity[i].messages.length == 0) {
                        activity[i].messages.unshift(message);
                        localStorage.setItem("activities", JSON.stringify(activity));
                        native_accessor.send_sms(json_message.messages[0].phone, "恭喜您，报名成功！")
                        refresh_pages()
                    }
                    else {
                        for (var k = 0; k < activity[i].messages.length; k++) {

                            if (message.phone == activity[i].messages[k].phone) {
                                native_accessor.send_sms(json_message.messages[0].phone, "报名已成功，请勿重复报名")
                                return;
                            }
                        }
                        activity[i].messages.unshift(message);
                        localStorage.setItem("activities", JSON.stringify(activity));
                        native_accessor.send_sms(json_message.messages[0].phone, "恭喜您，报名成功！")
                        refresh_pages()
                        return;
                    }
                    return;
                }
            }
            native_accessor.send_sms(json_message.messages[0].phone, "报名未开始，请耐心等待");
        }


        //竞价收发短信
        if (duanxin.search(/jj/i) == 0) {

            var message = {"name": "name", "phone": "phone", "price": "price"}
            message.price = duanxin.substr(2).trim()
            message.phone = json_message.messages[0].phone
            if (shus[0].color == "true") //判断竞价是否开始
            {
                if (shus[0].messages.length == 0) {

                    for (var a = 0; a < activity.length; a++)//遍历报名数组
                    {console.log(1)
                        if (activity[a].activity == oo)//找到当前报名活动
                        {
                            var action = _.find(activity, function (act) {
                                return act.activity == localStorage.seeing_activity_name
                            }).messages
                            var even = _.find(action, function (act) {
                                return act.phone == message.phone
                            })
                            if (even)//判断竞价人是否报名该活动
                            {
//                                console.log(2)
                                message.name = even.name
                                shus[0].messages.unshift(message)
                                localStorage.setItem("shus", JSON.stringify(shus))
                                native_accessor.send_sms(json_message.messages[0].phone, "恭喜您，竞价成功!")
                                refresh_pages()
//                              break
                            }
                            else {
                                native_accessor.send_sms(json_message.messages[0].phone, "未报名活动，不能参加竞价1")
                                break
                            }
                        }
                    }
                }
                else {

                    var NN = _.find(shus[0].messages, function (act) {
                        return act.phone == message.phone
                    })

                    if (NN) {
                        native_accessor.send_sms(json_message.messages[0].phone, "竞价已成功，请勿重复竞价")
                        return;
                    }
                    else {
                        var oo = localStorage.getItem('seeing_activity_name')
                        console.log(oo)
                        var GG = _.find(activity, function (act) {
                            return act.activity == oo
                        })
                        if (GG)//找到当前活动
                        {
                            var action = _.find(activity, function (act) {
                                return act.activity == localStorage.seeing_activity_name
                            }).messages
//                                    console.log(action)

                            var even = _.find(action, function (act) {
                                return act.phone == message.phone
                            })
                            if (even)//判断竞价人是否已经报名
                            {
                                message.name = even.name
                                shus[0].messages.unshift(message)
                                localStorage.setItem("shus", JSON.stringify(shus))
                                native_accessor.send_sms(json_message.messages[0].phone, "恭喜您，竞价成功！=")
                                refresh_pages()
                            }
                            else {
                                native_accessor.send_sms(json_message.messages[0].phone, "未报名活动，不能参加竞价")
                                return
                            }
                        }
                        else {
                        }
                    }
                }
            }
            else {
                native_accessor.send_sms(json_message.messages[0].phone, "竞价未开始，请耐心等待");
            }
        }
    }
}
//每当有报名信息收录时，页面自动刷新
function refresh_pages() {
    var refresh_page = document.getElementById('wrapper')
    if (refresh_page) {
        var scope = angular.element(refresh_page).scope();
        scope.$apply(function () {
            scope.diaoyong();
        })
    }
}

function notify_message_received(message_json) {
    //console.log(JSON.stringify(message_json));
    //JSON.stringify(message_json);
    //alert(JSON.stringify(message_json.messages));
    native_accessor.receive_message(message_json);
    //phone_number=message_json.messages[0].phone;
}
