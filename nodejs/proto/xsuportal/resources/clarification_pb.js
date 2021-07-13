// source: xsuportal/resources/clarification.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var xsuportal_resources_team_pb = require('../../xsuportal/resources/team_pb.js');
goog.object.extend(proto, xsuportal_resources_team_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.xsuportal.proto.resources.Clarification', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xsuportal.proto.resources.Clarification = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xsuportal.proto.resources.Clarification, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xsuportal.proto.resources.Clarification.displayName = 'proto.xsuportal.proto.resources.Clarification';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xsuportal.proto.resources.Clarification.prototype.toObject = function(opt_includeInstance) {
  return proto.xsuportal.proto.resources.Clarification.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xsuportal.proto.resources.Clarification} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xsuportal.proto.resources.Clarification.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    teamId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    answered: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    disclosed: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    question: jspb.Message.getFieldWithDefault(msg, 5, ""),
    answer: jspb.Message.getFieldWithDefault(msg, 6, ""),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    answeredAt: (f = msg.getAnsweredAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    team: (f = msg.getTeam()) && xsuportal_resources_team_pb.Team.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xsuportal.proto.resources.Clarification}
 */
proto.xsuportal.proto.resources.Clarification.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xsuportal.proto.resources.Clarification;
  return proto.xsuportal.proto.resources.Clarification.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xsuportal.proto.resources.Clarification} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xsuportal.proto.resources.Clarification}
 */
proto.xsuportal.proto.resources.Clarification.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTeamId(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAnswered(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisclosed(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuestion(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setAnswer(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setAnsweredAt(value);
      break;
    case 16:
      var value = new xsuportal_resources_team_pb.Team;
      reader.readMessage(value,xsuportal_resources_team_pb.Team.deserializeBinaryFromReader);
      msg.setTeam(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xsuportal.proto.resources.Clarification.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xsuportal.proto.resources.Clarification.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xsuportal.proto.resources.Clarification} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xsuportal.proto.resources.Clarification.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getTeamId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getAnswered();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getDisclosed();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getQuestion();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getAnswer();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getAnsweredAt();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTeam();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      xsuportal_resources_team_pb.Team.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.xsuportal.proto.resources.Clarification.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.xsuportal.proto.resources.Clarification} returns this
 */
proto.xsuportal.proto.resources.Clarification.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 team_id = 2;
 * @return {number}
 */
proto.xsuportal.proto.resources.Clarification.prototype.getTeamId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.xsuportal.proto.resources.Clarification} returns this
 */
proto.xsuportal.proto.resources.Clarification.prototype.setTeamId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool answered = 3;
 * @return {boolean}
 */
proto.xsuportal.proto.resources.Clarification.prototype.getAnswered = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.xsuportal.proto.resources.Clarification} returns this
 */
proto.xsuportal.proto.resources.Clarification.prototype.setAnswered = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool disclosed = 4;
 * @return {boolean}
 */
proto.xsuportal.proto.resources.Clarification.prototype.getDisclosed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.xsuportal.proto.resources.Clarification} returns this
 */
proto.xsuportal.proto.resources.Clarification.prototype.setDisclosed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional string question = 5;
 * @return {string}
 */
proto.xsuportal.proto.resources.Clarification.prototype.getQuestion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.xsuportal.proto.resources.Clarification} returns this
 */
proto.xsuportal.proto.resources.Clarification.prototype.setQuestion = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string answer = 6;
 * @return {string}
 */
proto.xsuportal.proto.resources.Clarification.prototype.getAnswer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.xsuportal.proto.resources.Clarification} returns this
 */
proto.xsuportal.proto.resources.Clarification.prototype.setAnswer = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.xsuportal.proto.resources.Clarification.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.xsuportal.proto.resources.Clarification} returns this
*/
proto.xsuportal.proto.resources.Clarification.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xsuportal.proto.resources.Clarification} returns this
 */
proto.xsuportal.proto.resources.Clarification.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xsuportal.proto.resources.Clarification.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Timestamp answered_at = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.xsuportal.proto.resources.Clarification.prototype.getAnsweredAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.xsuportal.proto.resources.Clarification} returns this
*/
proto.xsuportal.proto.resources.Clarification.prototype.setAnsweredAt = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xsuportal.proto.resources.Clarification} returns this
 */
proto.xsuportal.proto.resources.Clarification.prototype.clearAnsweredAt = function() {
  return this.setAnsweredAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xsuportal.proto.resources.Clarification.prototype.hasAnsweredAt = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Team team = 16;
 * @return {?proto.xsuportal.proto.resources.Team}
 */
proto.xsuportal.proto.resources.Clarification.prototype.getTeam = function() {
  return /** @type{?proto.xsuportal.proto.resources.Team} */ (
    jspb.Message.getWrapperField(this, xsuportal_resources_team_pb.Team, 16));
};


/**
 * @param {?proto.xsuportal.proto.resources.Team|undefined} value
 * @return {!proto.xsuportal.proto.resources.Clarification} returns this
*/
proto.xsuportal.proto.resources.Clarification.prototype.setTeam = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xsuportal.proto.resources.Clarification} returns this
 */
proto.xsuportal.proto.resources.Clarification.prototype.clearTeam = function() {
  return this.setTeam(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xsuportal.proto.resources.Clarification.prototype.hasTeam = function() {
  return jspb.Message.getField(this, 16) != null;
};


goog.object.extend(exports, proto.xsuportal.proto.resources);
