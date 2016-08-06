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
                    sort: '=',
                    limit: '=',
                    showMoreButton: '='
                },
                controller: ['$scope', function topIdeasController($scope) {
                    $scope.newIdeaLimit = 1;

                    $scope.AddIdeas = function AddIdeas() {
                        $scope.newIdeaLimit = $scope.newIdeaLimit + 1;
                    };
                }],
                templateUrl: 'utilities/topIdeas.tpl.html'
            };
        }
    ]
);
