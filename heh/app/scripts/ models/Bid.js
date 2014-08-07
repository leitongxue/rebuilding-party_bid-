//类
function Bids() {
    this.bid = ""
    this.name = localStorage.seeing_activity_name
    this.messages = [];
    this.color = false;
    this.push = "start"
}
Bids.save = function () {

}

Bids.get_bids = function () {
    var BiD = new Bids()
    var bids = JSON.parse(localStorage.getItem('bids')) || [];
    bids.unshift(BiD)
    localStorage.setItem("bids", JSON.stringify(bids));
    return bids
}
Bids.start_disabled = function () {
    var activities = Activity.activity()
    var even = _.find(activities, function (act) {
        return act.tureth == "ture"
    })
    return even
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
    var message = _.filter(bids, function (act) {
        return act.name == localStorage.seeing_activity_name
    })
    return message
}
Bids.action_disabled = function () {
    var activities = Activity.activity()
    var bids = JSON.parse(localStorage.getItem('bids')) || []
    var v1 = _.find(activities, function (act) {
        return act.tureth == "true"
    })
    var v2 = _.find(bids, function (act) {
        return act.color == "true"
    })
    return v1 || v2
}
Bids.get_seeing_bid_name=function(bid){
    localStorage.seeing_bid_name =bid
    var bids = JSON.parse(localStorage.getItem('bids')) || []
    var action = _.find(bids, function (act) {
        return act.bid == localStorage.seeing_bid_name});console.log(bids)
    var colors=action.color
    return colors=="false"
}