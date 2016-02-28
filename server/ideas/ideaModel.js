/* global exports */

var ObjectId = require('mongodb').ObjectID,
    _ = require('lodash');

function Idea(title, description, authorId, eventId, tags, rolesreq) {
    "use strict";

    var now = new Date().toISOString();

    if (!title) {
        throw new TypeError("Invalid title");
    }
    if (!description) {
        throw new TypeError("Invalid description");
    }
    if (!authorId) {
        throw new TypeError("Invalid authorId");
    }
    if (eventId === null || typeof eventId === 'undefined') {
        throw new TypeError("Invalid eventId");
    }
    if (!tags) {
        throw new TypeError("Invalid tags");
    }
    if (!rolesreq) {
        throw new TypeError("Invalid rolesreq");
    }

    var tagsValid = _.every(tags, function(tag) {
        return typeof tag !== 'undefined' && tag !== null;
    });

    if (!tagsValid) {
        throw new TypeError("Invalid individual tag");
    }

    var rolesreqValid = _.every(rolesreq, function(role) {
        if (typeof role !== 'undefined' && role !== null) {
            return _.every(role, function(val) {
                return !_.isNull(val) && !_.isUndefined(val);
            });
        }
        else {
            throw new TypeError("Invalid individual role element")
        }
    });

    if (!rolesreqValid) {
        throw new TypeError("Invalid individual role value");
    }

    this.title = title;
    this.description = description;
    this.authorId = authorId;
    this.eventId = eventId;
    this.timeCreated = now;
    this.timeModified = now;
    this.tags = tags;
    this.rolesreq = rolesreq;
    this.likes = [];
    this.updates = [];
    this.comments = [];
    this.backs = [{
        _id: new ObjectId(),
        text: "Idea Owner",
        authorId: this.authorId,
        timeCreated: new Date().toISOString(),
        timeModified: '',
        types: [{name: "Owner", _lowername: "owner"}]
    }];
    this.team = [{memberId: this.authorId}];

    return this;
}

exports.create = function(title, description, authorId, eventId, tags, rolesreq) {
    "use strict";

    try {
        return new Idea(title, description, authorId, eventId, tags, rolesreq);
    }
    catch (e) {
        return e;
    }
};
