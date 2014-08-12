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
jj_move = function ($scope, $location) {
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

jj_success_show = function ($scope) {
    if (Find_price_of_one_people()) {
        Bids.find_winner()
        $scope.winner_name = Bids.find_winner().name
        $scope.winner_phone = Bids.find_winner().phone + "  竞价成功！"
        $scope.winner_price = "￥" + Bids.find_winner().price
    }
}
judge_jj_people_number = function ($scope) {
    if (Bids.messages_bid().messages.length == 0) {
        $scope.winner_name = "0人"
    }
    if (Bids.messages_bid().messages.length != 0) {   //有人竞价
        jj_success_show($scope)
        jj_fail_show($scope)
    }
}
jj_fail_show = function ($scope) {
    if (!Find_price_of_one_people()) {
        $scope.winner_name = "竞价失败！"
        $scope.winner_phone = ""
        $scope.winner_price = ""
    }
}
jj_success_show_with_window = function ($scope, $timeout) {
    if (Find_price_of_one_people()) {
        Bids.find_winner()
        $scope.winner_name = Bids.find_winner().name
        $scope.winner_phone = Bids.find_winner().phone + "  竞价成功！"
        $scope.winner_price = "￥" + Bids.find_winner().price
        Jump_window($timeout)
    }
}
judge_jj_people_number_with_window = function ($scope, $timeout) {
    if (Bids.messages_bid().messages.length == 0) {
        $scope.winner_name = "0人"
    }
    if (Bids.messages_bid().messages.length != 0) {   //有人竞价
        jj_success_show_with_window($scope, $timeout)
        jj_fail_show($scope)
    }
}
jj_result = function ($scope, $timeout) {
    if (Bids.messages_bid()) {
        Bids.price_number()
        $scope.middle = Bids.bid_list()
        $scope.number = Bids.messages_bid().messages.length //显示参与竞价人数
        $scope.title = Bids.messages_bid().bid //显示竞价活动名

        judge_jj_people_number_with_window($scope, $timeout)
    }
}
jj_analyze = function ($scope) {
    Bids.messages_bid()
    if (Bids.messages_bid()) {
        $scope.title = Bids.messages_bid().bid
        $scope.number = Bids.messages_bid().messages.length
        $scope.middle = Bids.price_number()
        judge_jj_people_number($scope)
    }
}