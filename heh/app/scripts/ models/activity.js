//类
function Activity(activity_name) {
    this.activity = activity_name;
    this.messages = [];
    this.tureth = false;
    this.bid_status = false
}

Activity.activity = function () {
    var activities = JSON.parse(localStorage.getItem('activities')) || [];
    return activities;
}
Activity.messages = function (change) {
    var activity = new Activity(change)
    var activities = Activity.activity()
    activities.unshift(activity);
    localStorage.setItem("activities", JSON.stringify(activities));
}
Activity.save_messages_start = function () {
    var activities =JSON.parse(localStorage.getItem('activities'))
    _.find(activities,function(act){return act.activity==localStorage.seeing_activity_name}).tureth =  "true"
    localStorage.setItem("activities", JSON.stringify(activities));
}

Activity.save_messages_end = function () {
    var activities =JSON.parse(localStorage.getItem('activities'))
    _.find(activities,function(act){return act.activity==localStorage.seeing_activity_name}).tureth = "false"
    localStorage.setItem("activities", JSON.stringify(activities));
}
Activity.same_name = function (change) {
    var activity = change
    var activities = Activity.activity()
    return (_.find(activities, function (act) {
        return act.activity == activity
    }))
}
Activity.new_activity=function(change){
    var activities=Activity.activity()
    localStorage.seeing_activity_name=activities[0].activity
}
Activity.click_activity=function(activity){
    var activities=Activity.activity()
    localStorage.seeing_activity_name=activity
}
Activity.activity_length=function(){
    var activities=Activity.activity()
    return activities.length==0
}
Activity.change_doing_activity=function(){
    var activities=Activity.activity()
    return(_.find(activities,function(act){return act.activity==localStorage.seeing_activity_name}))
}
Activity.creat_action_disabled=function(){
    var activities=Activity.activity()
    var v1 = _.find(activities, function (act) {
        return act.tureth == "true"
    })
    var v2 = _.find(activities, function (act) {
        return act.bid_status == "true"
    })
    return v1||v2
}