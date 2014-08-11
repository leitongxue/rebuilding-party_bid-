/**
 * Created by lei on 14-8-8.
 */
function Sms() {

}
Sms.refresh_pages = function (wrapper) {
    var refresh_page = document.getElementById('wrapper')
    if (refresh_page) {
        var scope = angular.element(refresh_page).scope();
        scope.$apply(function () {
            scope.refresh();
        })
    }
}

Sms.bm_succeed = function (json_message) {
    var note = json_message.messages[0].message.replace(/\s/g, "");
    if (note.search(/bm/i) == 0) {
        var message = {"name": "name", "phone": "phone"}
        message.name = note.substr(2).trim()
        message.phone = json_message.messages[0].phone
        var activity = JSON.parse(localStorage.getItem('activities')) || []
        var even = _.find(activity, function (act) {
            return act.tureth == "true"
        })
        even.messages.unshift(message);
        localStorage.setItem("activities", JSON.stringify(activity));
        return
    }
}
Sms.same_bm = function (json_message) {
    var even = Bids.start_disabled_activity().messages
    return(_.find(even, function (act) {
        return act.phone == json_message.messages[0].phone
    }))
}
Sms.find_this_bm = function () {
    var activities = Activity.activity()
    return  (_.find(activities, function (act) {
        return act.bid_status == "true"
    }))
}
Sms.find_jjPeople_name = function (json_message) {
    var message = Sms.find_this_bm().messages
    var a = _.find(message, function (act) {
        return act.phone == json_message.messages[0].phone
    })
    return a.name
}
Sms.find_doing_jj = function (json_message) {
    var bids = JSON.parse(localStorage.getItem('bids')) || []
    return  (_.find(bids, function (act) {
        return act.color == "true"
    }))
}
Sms.bm_phone_same_jj = function (json_message) {
    var even = Sms.find_this_bm().messages
    return (_.find(even, function (act) {
        return act.phone == json_message.messages[0].phone
    }))
}
Sms.same_jj_name = function (json_message) {
    var even = Sms.find_doing_jj().messages
    return(_.find(even, function (act) {
        return act.phone == json_message.messages[0].phone
    }))
}
Sms.jj_succeed = function (json_message) {
    var note = json_message.messages[0].message.replace(/\s/g, "");
    if (note.search(/jj/i) == 0) {
        var message = {"name": "name", "phone": "phone", "price": "price"}
        message.name = Sms.find_jjPeople_name(json_message)
        message.price = note.substr(2).trim()
        message.phone = json_message.messages[0].phone

        var bids = JSON.parse(localStorage.getItem('bids')) || []
        var activity_bid = _.find(bids, function (act) {
            return act.color == "true"
        })
        activity_bid.messages.unshift(message)
        localStorage.setItem("bids", JSON.stringify(bids));
        return
    }
}