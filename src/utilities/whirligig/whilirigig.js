/* global angular */

angular.module('flintAndSteel')
.directive('whirligig',
    [
        function() {
            "use strict";

            return {
                restrict: 'E',
                scope: {
                    title: '@'
                },
                templateUrl: 'utilities/whirligig/whirligig.tpl.html',
                controller: 'WhirlCtrl'
            };
        }
    ]
);
