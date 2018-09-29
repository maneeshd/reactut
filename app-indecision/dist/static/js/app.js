"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.state = {
            count: 0
        };
        _this.countUp = _this.countUp.bind(_this);
        _this.countDown = _this.countDown.bind(_this);
        _this.resetCounter = _this.resetCounter.bind(_this);
        return _this;
    }

    _createClass(Counter, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            try {
                var count_str = localStorage.getItem("count");
                var count = parseInt(count_str, 10);
                if (!isNaN(count)) {
                    console.log("ComponentDidMount!");
                    this.setState(function () {
                        return { count: count };
                    });
                }
            } catch (error) {}
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
            console.log("ComponentDidUpdate!");
            localStorage.setItem("count", this.state.count);
        }
    }, {
        key: "countUp",
        value: function countUp() {
            this.setState(function (prevState) {
                return { count: prevState.count += 1 };
            });
        }
    }, {
        key: "countDown",
        value: function countDown() {
            this.setState(function (prevState) {
                return { count: prevState.count -= 1 };
            });
        }
    }, {
        key: "resetCounter",
        value: function resetCounter() {
            this.setState(function () {
                return { count: 0 };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "container w-50 shadow-lg my-4 p-4 text-center" },
                React.createElement(
                    "p",
                    { className: "display-4" },
                    "Counter: ",
                    this.state.count
                ),
                React.createElement(
                    "div",
                    { className: "p-2" },
                    React.createElement(
                        "button",
                        { className: "btn btn-danger ml-1 shadow-sm font-weight-bold", onClick: this.resetCounter },
                        "Reset"
                    ),
                    React.createElement(
                        "button",
                        { className: "btn btn-warning mx-1 shadow-sm font-weight-bold", onClick: this.countDown },
                        "-1"
                    ),
                    React.createElement(
                        "button",
                        { className: "btn btn-success mr-1 shadow-sm font-weight-bold", onClick: this.countUp },
                        "+1"
                    )
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById("app"));
