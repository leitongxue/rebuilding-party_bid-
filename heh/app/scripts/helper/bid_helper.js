Find_price_of_one_people = function () {
    var list_price = JSON.parse(localStorage.getItem("price_p"))
    var min_price = _.find(list_price, function (act) {
        return act.count == 1
    })
    return min_price
}
Jump_window = function ($timeout) {
    var bids = JSON.parse(localStorage.getItem('bids'))
    var bidding = Bids.messages_bid()
    var activity = Bids.get_messages()
    if (bidding.push == "start") {
        $('#ModalSuccess').modal("show");
        $timeout(function () {
            $('#ModalSuccess').modal('hide');
        }, 2000)
        activity[0].push = "end"
        localStorage.setItem("bids", JSON.stringify(activity))
    }
}
jj_move = function ($scope,$location) {
    if (Activity.creat_action_disabled()) {
        $scope.click = true
    }
    else {
        if (Activity.change_doing_activity()) {
            Activity.save_bid_status_true();
        }
        Bids.save_bid_name()
        $location.path('/Money_message')
    }
}
click_start_button = function ($scope) {
    if (Bids.start_disabled_activity($scope) || Bids.start_disabled_bid($scope)) {
        return  true;
    }
    if (!(Bids.start_disabled_activity($scope) || !Bids.start_disabled_bid($scope))) {
        return false
    }

}
find_jj_name = function (bid, $location) {
    if (Bids.get_seeing_bid_name(bid)) {
        $location.path('/result')
    }
    if (!Bids.get_seeing_bid_name(bid)) {
        $location.path('/Money_message')
    }
}
jj_end_window = function ($location) {
    if (confirm("你确定要结束竞价吗？")) {
        Activity.save_bid_status_false()
        Bids.change_color()
        $location.path('/result')
    }
}

