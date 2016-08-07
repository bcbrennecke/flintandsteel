/* global angular */

angular.module('flintAndSteel')
.directive('topIdeas',
    [
        function() {
            "use strict";

            return {
                restrict: 'E',
                scope: {
                    title: '@',
                    ideaslist: '=',
                    sort: '='//,
                    //limit: '='//,
                    //showMoreButton: '='
                },

                templateUrl: 'utilities/topIdeas.tpl.html'
            };
        }
    ]
)
.controller('TopIdeasCtrl',
    [
        '$scope', '$state',
        function($scope, $state) {
            "use strict";
            $scope.newIdeaLimit = 1;

             function AddIdeas() {
                $scope.newIdeaLimit = $scope.newIdeaLimit + 1;
            };

        }
    ]
);
