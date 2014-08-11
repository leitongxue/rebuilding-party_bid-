/**
 * Created by lei on 14-8-11.
 */
function Creat(){

}
Creat.start_button=function($scope){
    $scope.log = "false";
    if (Activity.change_doing_activity()) {
        Activity.save_messages_start()
    }
}
Creat.end_button=function($scope,$location){
    if (confirm("你确定要退出报名吗？")) {
        $scope.log = "true"
        if (Activity.change_doing_activity($scope)) {
            Activity.save_messages_end($scope)
        }
        $location.path('/jingjia')
    }
}
Creat.choose_button=function($scope){
    $scope.log = "true";
    if (Activity.change_doing_activity($scope)) {
        if (Activity.change_doing_activity().tureth == "true") {
            $scope.log = "false"
        }
    }
}
Creat.start_disabled=function($scope){
    if (Activity.creat_action_disabled()) {
        $scope.start_change = true;
    }
    else {
        $scope.start_change = false;
    }
}
Creat.main_one_input=function($scope){
    if (Activity.same_name($scope.change)) {
        $scope.show1 = true;
    }
    if (!Activity.same_name($scope.change)) {
        $scope.show1 = false;
    }
}
Creat.main_one_creat_button=function($scope,$location){
    if ($scope.show1 == false) {
        $location.path('/creat');
        Activity.new_activity($scope.change)
    }
}