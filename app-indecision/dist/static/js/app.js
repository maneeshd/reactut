"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Indecision = function (_React$Component) {
    _inherits(Indecision, _React$Component);

    function Indecision(props) {
        _classCallCheck(this, Indecision);

        var _this = _possibleConstructorReturn(this, (Indecision.__proto__ || Object.getPrototypeOf(Indecision)).call(this, props));

        _this.state = {
            options: []
        };

        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleRemoveAll = _this.handleRemoveAll.bind(_this);
        _this.handleRemoveOne = _this.handleRemoveOne.bind(_this);
        _this.handlePickOne = _this.handlePickOne.bind(_this);
        return _this;
    }

    _createClass(Indecision, [{
        key: "handleAddOption",
        value: function handleAddOption(option) {
            if (!option) {
                return React.createElement(
                    "span",
                    null,
                    React.createElement(
                        "b",
                        null,
                        "InvalidOption:"
                    ),
                    " Enter a valid value to add option"
                );
            } else if (this.state.options.indexOf(option) > -1) {
                return React.createElement(
                    "span",
                    null,
                    React.createElement(
                        "b",
                        null,
                        "DuplicateOption:"
                    ),
                    " Option already exists"
                );
            } else {
                this.setState(function (prevState, props) {
                    return { options: prevState.options.concat([option]) };
                });
            }
        }
    }, {
        key: "handleRemoveAll",
        value: function handleRemoveAll() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: "handleRemoveOne",
        value: function handleRemoveOne(option) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (element) {
                        return element !== option;
                    }) };
            });
        }
    }, {
        key: "handlePickOne",
        value: function handlePickOne() {
            var rand_idx = Math.floor(Math.random() * this.state.options.length);
            alert("I have selected: " + this.state.options[rand_idx]);
        }
    }, {
        key: "render",
        value: function render() {
            var appSubTitle = "Let the machine decide for you";

            return React.createElement(
                "div",
                { className: "container w-50 shadow-lg p-2 text-center mt-4" },
                React.createElement(Header, { subtitle: appSubTitle }),
                React.createElement("hr", null),
                React.createElement(Action, { hasOptions: this.state.options.length > 0, handlePickOne: this.handlePickOne }),
                React.createElement(Options, _defineProperty({ options: this.state.options, handleRemoveAll: this.handleRemoveAll, handleRemoveOne: this.handleRemoveOne }, "handleRemoveOne", this.handleRemoveOne)),
                React.createElement(AddOption, { handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return Indecision;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            "p",
            { className: "lead" },
            props.subtitle
        )
    );
};

Header.defaultProps = {
    title: "Indecision?"
};

var Action = function Action(props) {
    return React.createElement(
        "div",
        { className: "d-flex justify-content-center" },
        React.createElement(
            "button",
            { className: "btn btn-primary mb-4 w-50 shadow btn-block font-weight-bold", onClick: props.handlePickOne, disabled: !props.hasOptions },
            "What should I do?"
        )
    );
};

var Option = function Option(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "span",
            { className: "font-weight-bold" },
            props.option
        ),
        React.createElement(
            "button",
            {
                className: "btn btn-xs btn-danger ml-2 font-weight-bold py-1 px-1",
                "data-type": "minus",
                style: { "font-size": "10px" },
                onClick: function onClick(e) {
                    props.handleRemoveOne(props.option);
                }
            },
            "-"
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "div",
            { className: "d-flex flex-column justify-content-center align-items-center" },
            React.createElement(
                "div",
                { className: "mb-2 w-25 text-center text-wrap" },
                props.options.map(function (option) {
                    return React.createElement(Option, { option: option, key: option, handleRemoveOne: props.handleRemoveOne });
                })
            ),
            React.createElement(
                "button",
                { className: "btn btn-sm btn-danger btn-block w-25 shadow mb-2", onClick: props.handleRemoveAll, disabled: !props.options.length },
                "Remove All"
            )
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.state = {
            inputValue: "",
            error: undefined
        };

        _this2.formSubmitHandler = _this2.formSubmitHandler.bind(_this2);
        return _this2;
    }

    _createClass(AddOption, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            console.log("ComponentDidMount!");
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            console.log("ComponentWillMount!");
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            console.log("ComponentWillMount!");
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            console.log("ComponentDidUpdate!");
        }
    }, {
        key: "formSubmitHandler",
        value: function formSubmitHandler(event) {
            event.preventDefault();

            var entered_option = event.target.elements.option.value.trim();
            var error = this.props.handleAddOption(entered_option);

            this.setState({ error: error });
            this.setState({ inputValue: "" });
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            return React.createElement(
                "div",
                null,
                this.state.error && React.createElement(
                    "div",
                    { className: "alert alert-danger p-1 mt-2" },
                    this.state.error
                ),
                React.createElement(
                    "form",
                    { className: "form-inline justify-content-center", id: "addOptionForm", onSubmit: this.formSubmitHandler },
                    React.createElement(
                        "div",
                        { className: "form-row" },
                        React.createElement(
                            "div",
                            { className: "col" },
                            React.createElement("input", { className: "form-control shadow", type: "text", name: "option",
                                value: this.state.inputValue,
                                onChange: function onChange(e) {
                                    return _this3.setState({ inputValue: e.target.value, error: undefined });
                                } })
                        ),
                        React.createElement(
                            "div",
                            { className: "col" },
                            React.createElement(
                                "button",
                                { className: "form-control btn btn-success mb-2 shadow", "data-type": "plus" },
                                "Add Option"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(Indecision, null), document.getElementById("app"));
