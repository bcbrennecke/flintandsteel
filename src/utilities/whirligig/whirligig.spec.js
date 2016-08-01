/* global angular */
/* global describe */
/* global module */
/* global beforeEach */
/* global inject */
/* global it */
/* global expect */
/* global spyOn */

describe('whirligig', function() {
    "use strict";

    var DIRECTIVE_NAME = "whirligig";

    var scope, compile, element;

    function getCompiledElement() {
        var element = angular.element('<' + DIRECTIVE_NAME + '></' + DIRECTIVE_NAME + '>');
        var compiledElement = compile(element)(scope);
        scope.$digest();
        return compiledElement;
    }

    beforeEach(function() {
        module('flintAndSteel');
        module('utilities/whirligig/whirligig.tpl.html');

        inject(function($rootScope, $compile) {
            scope = $rootScope.$new();
            compile = $compile;
        });

        var undef;

        element = undef;
    });

    it('should exist', function() {
        spyOn(console, 'log').and.callFake(function() {});
        element = getCompiledElement();
        expect(element).toBeDefined();
    });
});
