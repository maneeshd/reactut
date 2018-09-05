"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
* Indecision: A simple app to randomly pick an option from a list using React Components
*
* Author: Maneesh D <maneeshd77@gmail.com>
*/

// Header title and sub-title Component Class
var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Indecision?"
                ),
                React.createElement(
                    "p",
                    null,
                    "Let the machine decide for you"
                )
            );
        }
    }]);

    return Header;
}(React.Component);

// Decision Action button Component Class


var Action = function (_React$Component2) {
    _inherits(Action, _React$Component2);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "button",
                { className: "btn btn-primary mb-3" },
                "What should I do?"
            );
        }
    }]);

    return Action;
}(React.Component);

// Option Entry Component Class


var Option = function (_React$Component3) {
    _inherits(Option, _React$Component3);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "p",
                null,
                "This is the Option Sub Entry."
            );
        }
    }]);

    return Option;
}(React.Component);

// Options List Component Class


var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "p",
                    null,
                    "Option Sub Entry goes here."
                ),
                React.createElement(Option, null)
            );
        }
    }]);

    return Options;
}(React.Component);

// AddOption button Component Class


var AddOption = function (_React$Component5) {
    _inherits(AddOption, _React$Component5);

    function AddOption() {
        _classCallCheck(this, AddOption);

        return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
    }

    _createClass(AddOption, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "button",
                { className: "btn btn-success mb-2" },
                "Add Option"
            );
        }
    }]);

    return AddOption;
}(React.Component);

// Main Component Class for App


var Indecision = function (_React$Component6) {
    _inherits(Indecision, _React$Component6);

    function Indecision() {
        _classCallCheck(this, Indecision);

        return _possibleConstructorReturn(this, (Indecision.__proto__ || Object.getPrototypeOf(Indecision)).apply(this, arguments));
    }

    _createClass(Indecision, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Header, null),
                React.createElement(Action, null),
                React.createElement(Options, null),
                React.createElement(AddOption, null)
            );
        }
    }]);

    return Indecision;
}(React.Component);

ReactDOM.render(React.createElement(Indecision, null), document.getElementById("app"));
