"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useForm = void 0;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var formReducer = function formReducer(state, action) {
  switch (action.type) {
    case 'INPUT_CHANGE':
      var formIsValid = true;

      for (var inputId in state.inputs) {
        if (!state.inputs[inputId]) {
          continue;
        }

        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }

      return _objectSpread({}, state, {
        inputs: _objectSpread({}, state.inputs, _defineProperty({}, action.inputId, {
          value: action.value,
          isValid: action.isValid
        })),
        isValid: formIsValid
      });

    case 'SET_DATA':
      return {
        inputs: action.inputs,
        isValid: action.formIsValid
      };

    default:
      return state;
  }
};

var useForm = function useForm(initialInputs, initialFormValidity) {
  var _useReducer = (0, _react.useReducer)(formReducer, {
    inputs: initialInputs,
    isValid: initialFormValidity
  }),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      formState = _useReducer2[0],
      dispatch = _useReducer2[1];

  var inputHandler = (0, _react.useCallback)(function (id, value, isValid) {
    dispatch({
      type: 'INPUT_CHANGE',
      value: value,
      isValid: isValid,
      inputId: id
    });
  }, []);
  var setFormData = (0, _react.useCallback)(function (inputData, formValidity) {
    dispatch({
      type: 'SET_DATA',
      inputs: inputData,
      formIsValid: formValidity
    });
  }, []);
  return [formState, inputHandler, setFormData];
};

exports.useForm = useForm;