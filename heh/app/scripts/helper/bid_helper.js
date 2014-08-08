

Find_price_of_one_people=function(){
    var list_price = JSON.parse(localStorage.getItem("price_p"))
    var min_price = _.find(list_price, function (act) {
        return act.count == 1})
    return min_price
}
Jump_window=function(){
    var bids=JSON.parse(localStorage.getItem('bids'))
    var bidding=Bids.messages_bid()
    var activity=Bids.get_messages()
    if (bidding.push == "start") {
        $('#ModalSuccess').modal("show");
        $timeout(function () {
            $('#ModalSuccess').modal('hide');
        }, 2000)
       activity[0].push = "end"
        localStorage.setItem("bids", JSON.stringify(activity))
    }
}