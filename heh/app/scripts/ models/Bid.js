//类
function Bids() {
    this.bid = ""
    this.name = localStorage.seeing_activity_name
    this.messages = [];
    this.color = false;
    this.push = "start"
}
Bids.use_bids = function () {
    var bids = JSON.parse(localStorage.getItem('bids')) || [];
    return bids
}
Bids.get_bids = function () {
    var BiD = new Bids()
    var bids = JSON.parse(localStorage.getItem('bids')) || [];
    bids.unshift(BiD)
    localStorage.setItem("bids", JSON.stringify(bids));
    return bids
}

Bids.save_bid_name = function (bid_name) {
    var bid = Bids.get_bids()
    var shu = _.filter(bid, function (shu) {
        return shu.name == localStorage.seeing_activity_name
    })
    bid[0].bid = "竞价" + bid.length
    bid[0].color = "true"
    localStorage.setItem("bids", JSON.stringify(bid))
    localStorage.seeing_bid_name = bid[0].bid;
}
Bids.get_messages = function () {
    var bids = JSON.parse(localStorage.getItem('bids')) || [];
    return ( _.filter(bids, function (act) {
        return act.name == localStorage.seeing_activity_name
    }))
}
Bids.start_disabled_activity = function () {
    var activities = Activity.activity()
    return  (_.find(activities, function (act) {
        return act.tureth == "true"
    }))
}
Bids.start_disabled_bid = function () {
    var bids = JSON.parse(localStorage.getItem('bids')) || []
    return ( _.find(bids, function (act) {
        return act.color == "true"
    }))
}
Bids.get_seeing_bid_name = function (bid) {
    localStorage.seeing_bid_name = bid
    var bids = JSON.parse(localStorage.getItem('bids')) || []
    var action = _.find(bids, function (act) {
        return act.bid == localStorage.seeing_bid_name
    });
    var colors = action.color
    return colors == "false"
}
Bids.messages_bid = function () {
    var bids = JSON.parse(localStorage.getItem('bids')) || [];
    var activity = _.filter(bids, function (act) {
        return act.name == localStorage.seeing_activity_name
    })
    var bidding = _.find(activity, function (act) {
        return act.bid == localStorage.seeing_bid_name
    })
    return bidding
}
Bids.change_color = function () {
    var bids = JSON.parse(localStorage.getItem('bids')) || []
    bids[0].color = "false"
    localStorage.setItem("bids", JSON.stringify(bids));
}
Bids.price_number = function () {
    var bidCount = _.countBy(Bids.messages_bid().messages, function (bid) {
        return bid.price
    });
    var even = _.map(bidCount, function (value, key) {
        return {'price': key, 'count': value}
    });
    localStorage.setItem("price_p", JSON.stringify(even))
}
Bids.bid_list = function () {
    var bidList = _.sortBy(Bids.messages_bid().messages, function (bid) {
        return bid.price
    })
    return bidList
}
Bids.find_winner = function () {
    Find_price_of_one_people()//先找到最低符合要求的价格
    if (Find_price_of_one_people()) {
        var winner_action = _.find(Bids.get_messages(), function (act) {
            return act.bid == localStorage.getItem('seeing_activity_name')
        }).messages //找到所在竞价活动的messages数组
        var winner = _.find(winner_action, function (act) {
            return act.price == min.price
        }) //找出最低价格
        console.log(winner)
        localStorage.setItem("winner", JSON.stringify(winner))
    }
}