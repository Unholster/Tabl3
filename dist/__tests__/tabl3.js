'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

var _ajax = require('../conector/ajax');

var _ajax2 = _interopRequireDefault(_ajax);

var _removeParamFromQS = require('../core/removeParamFromQS');

var _removeParamFromQS2 = _interopRequireDefault(_removeParamFromQS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.mock('../conector/ajax');

describe("removeParamFromQS [http://127.0.0.1:8000/colors/?limit=4&offset=4&ordering=-name&name__icontains=a]", function () {
  test('remove limit', function () {
    expect((0, _removeParamFromQS2.default)('name__icontains', 'http://127.0.0.1:8000/colors/?limit=4&offset=4&ordering=-name&name__icontains=a')).toEqual('http://127.0.0.1:8000/colors/?limit=4&offset=4&ordering=-name');
  });
  test('remove limit false', function () {
    expect((0, _removeParamFromQS2.default)('name__', 'http://127.0.0.1:8000/colors/?limit=4&offset=4&ordering=-name&name__icontains=a')).toEqual('http://127.0.0.1:8000/colors/?limit=4&offset=4&ordering=-name&name__icontains=a');
  });
});

var component = {};
var table2new = {};

describe("Tabl3 GET [http://127.0.0.1:8000/colors/?limit=4&offset=4&ordering=-name&name__icontains=a]", function () {
  test('create Table & asign className', function () {
    component2 = (0, _enzyme.mount)(_react2.default.createElement(_index2.default, {
      config: {
        ajax: {
          url: 'http://127.0.0.1:8000/colors/?limit=4&offset=4&ordering=-name&name__icontains=a',
          method: 'GET',
          liveHeaders: function liveHeaders() {
            return {
              Authorization: 'JWT 298KJHkj1KJH'
            };
          }
        },
        conector: _ajax2.default,
        debug: {
          inputSearch: true,
          paginator: true,
          initiaAjax: true,
          dataset: true
        },
        onBeforeSend: function onBeforeSend(e) {
          return function (e) {};
        },
        onAfterSend: function onAfterSend(e) {
          return function (e) {};
        },
        onAfterRender: function onAfterRender(e) {},
        errors: {
          onAjaxError: function onAjaxError(e) {
            return function (e) {/* console.log(arguments);*/};
          }
        },
        extraThead: function extraThead(paginator) {
          return _react2.default.createElement(
            'button',
            { onClick: function onClick() {
                console.log(paginator);
              } },
            'a'
          );
        },
        table: {
          className: 'table table-hover table-condensed',
          resetButton: {
            className: 'btn btn-sm btn-warning',
            title: 'Restablecer',
            onReset: function onReset(e) {
              return function (e) {};
            }
          },
          thead: {
            className: '',
            actions: {
              className: '',
              cssTH: {
                width: '130px',
                minWidth: '130px'
              },
              isEmpty: 'bla',
              style: { color: 'red' },
              component: function component(instance) {
                return _react2.default.createElement(
                  'button',
                  null,
                  instance.id
                );
              }
            }
          }
        },
        paginator: {
          prevLink: 3,
          nextLink: 3
        },
        columns: [{
          title: 'Nombre',
          name: 'name',
          textEmpty: 'Sin deatlle',
          inputPlaceholder: 'Buscar',
          input: 'name__icontains'
        }, {
          title: 'Nombre',
          name: 'noexist',
          textEmpty: 'Sin deatlle',
          inputPlaceholder: 'Buscar',
          input: 'name__icontains'
        }]
      } }));
    table2new2 = component2;
    expect(table2new2.find('table').props().className).toEqual('table-2-new table table-hover table-condensed');
    var table2new2Instance = component2.instance();
    table2new2Instance.updateState('PAGINATOR_GOTO_PAGE', 1);
    table2new2Instance.updateState('PAGINATOR_PREV_PAGE');
    table2new2Instance.updateState('PAGINATOR_NEXT_PAGE');
    table2new2Instance.updateState('RESULTS_ORDERING', 'name');
    table2new2Instance.resetToInitialState();
    //table2new2Instance.compareOrderingParam('-name')
    //table2new2Instance.compareOrderingParam('name')
  });
  test('create Table & asign className without columns', function () {
    component2 = (0, _enzyme.mount)(_react2.default.createElement(_index2.default, {
      config: {
        ajax: {
          url: 'http://127.0.0.1:8000/colors/?limit=4&offset=4&ordering=-name&name__icontains=a',
          method: 'GET',
          liveHeaders: function liveHeaders() {
            return {
              Authorization: 'JWT 298KJHkj1KJH'
            };
          }
        },
        conector: _ajax2.default,
        debug: {
          inputSearch: true,
          paginator: true,
          initiaAjax: true,
          dataset: true
        },
        onBeforeSend: function onBeforeSend(e) {
          return function (e) {};
        },
        onAfterSend: function onAfterSend(e) {
          return function (e) {};
        },
        onAfterRender: function onAfterRender(e) {},
        errors: {
          onAjaxError: function onAjaxError(e) {
            return function (e) {/* console.log(arguments);*/};
          }
        },
        table: {
          className: 'table table-hover table-condensed',
          resetButton: {
            className: 'btn btn-sm btn-warning',
            title: 'Restablecer',
            onReset: function onReset(e) {
              return function (e) {};
            }
          },
          thead: {
            className: '',
            actions: {
              className: '',
              cssTH: {
                width: '130px',
                minWidth: '130px'
              },
              isEmpty: 'bla',
              style: { color: 'red' },
              component: function component(instance) {
                return _react2.default.createElement(
                  'button',
                  null,
                  instance.id
                );
              }
            }
          }
        },
        testCol: true,
        paginator: {
          prevLink: 3,
          nextLink: 3
        }
      } }));
    table2new2 = component2;
    //table2new2Instance.compareOrderingParam('-name')
    //table2new2Instance.compareOrderingParam('name')
  });
});

describe("Tabl3 GET [http://127.0.0.1:8000/colors/?limit=4]", function () {
  test('create Table & asign className', function () {
    component = (0, _enzyme.mount)(_react2.default.createElement(_index2.default, {
      config: {
        ajax: {
          url: 'http://127.0.0.1:8000/colors/?limit=4',
          method: 'GET',
          liveHeaders: function liveHeaders() {
            return {
              Authorization: 'JWT 298KJHkj1KJH'
            };
          }
        },
        conector: _ajax2.default,
        debug: {
          inputSearch: true,
          paginator: true,
          initiaAjax: true,
          dataset: true
        },
        onBeforeSend: function onBeforeSend(e) {
          return function (e) {};
        },
        onAfterSend: function onAfterSend(e) {
          return function (e) {};
        },
        errors: {
          onAjaxError: function onAjaxError(e) {
            return function (e) {/* console.log(arguments);*/};
          }
        },
        table: {
          className: 'table table-hover table-condensed',
          thead: {
            className: '',
            actions: {
              className: '',
              cssTH: {
                width: '130px',
                minWidth: '130px'
              },
              component: function component(instance) {
                return _react2.default.createElement(
                  'button',
                  null,
                  instance.id
                );
              }
            }
          }
        },
        paginator: {
          prevLink: 3,
          nextLink: 3
        },
        columns: [{
          title: 'Id',
          name: 'idd',
          textEmpty: 'Sin nombre',
          cssTH: {
            width: '250px',
            minWidth: '250px'
          },
          input: 'id',
          inputPlaceholder: 'Ingrese nemotécnico a buscar',
          inputClassName: 'form-control'
        }, {
          title: 'Nombre',
          name: 'name',
          textEmpty: 'Sin deatlle',
          inputPlaceholder: 'Buscar',
          input: 'name__icontains'
        }]
      } }));
    table2new = component;
    expect(table2new.find('table').props().className).toEqual('table-2-new table table-hover table-condensed');
  });

  test('create Table & no input', function () {
    component = (0, _enzyme.mount)(_react2.default.createElement(_index2.default, {
      config: {
        ajax: {
          url: 'http://127.0.0.1:8000/colors/?limit=4',
          method: 'GET',
          liveHeaders: function liveHeaders() {
            return {
              Authorization: 'JWT 298KJHkj1KJH'
            };
          }
        },
        conector: _ajax2.default,
        debug: {
          inputSearch: true,
          paginator: true,
          initiaAjax: true,
          dataset: true
        },
        onBeforeSend: function onBeforeSend(e) {
          return function (e) {};
        },
        onAfterSend: function onAfterSend(e) {
          return function (e) {};
        },
        errors: {
          onAjaxError: function onAjaxError(e) {
            return function (e) {/* console.log(arguments);*/};
          }
        },
        table: {
          className: 'table table-hover table-condensed',
          resetButton: {
            className: 'btn btn-sm btn-warning',
            title: 'Restablecer',
            onReset: function onReset(e) {
              return function (e) {};
            }
          },
          thead: {
            className: '',
            actions: {
              className: '',
              cssTH: {
                width: '130px',
                minWidth: '130px'
              },
              component: function component(instance) {
                return _react2.default.createElement(
                  'button',
                  null,
                  instance.id
                );
              }
            }
          }
        },
        paginator: {
          prevLink: 3,
          nextLink: 3
        },
        columns: [{
          title: 'Id',
          name: 'id',
          textEmpty: 'Sin nombre',
          cssTH: {
            width: '250px',
            minWidth: '250px'
          }
        }, {
          title: 'Nombre',
          name: 'name',
          textEmpty: 'Sin deatlle'
        }]
      } }));
    table2new = component;
    expect(table2new.find('table').props().className).toEqual('table-2-new table table-hover table-condensed');
  });

  test('state.config.ajax.url === http://127.0.0.1:8000/colors/?limit=4', function () {
    expect(table2new.props().config.paginator.nextLink).toEqual(3);
    expect(table2new.props().config.paginator.prevLink).toEqual(3);
    expect(table2new.props().config.ajax.url).toEqual('http://127.0.0.1:8000/colors/?limit=4');
  });

  test('create paginator <ul>', function () {
    expect(table2new.find('ul').length).toEqual(1);
  });
  test('test create paginator by service mock (6 link)', function () {
    expect(table2new.find('ul').children().length).toEqual(6);
  });
  test('test create td in tbody (12 = 4 objects x3 columns)', function () {
    expect(table2new.find('tbody').find('td').length).toEqual(12);
    expect(table2new.find('tbody').find('tr').children().length).toEqual(12);
  });
  test('test create header (3 th)', function () {
    expect(table2new.find('th').length).toEqual(3);
  });
  test('count total: 13', function () {
    var instanceTable = table2new.instance();
    expect(instanceTable.state.paginator.count).toEqual(13);
  });
});

var component2 = {};
var table2new2 = {};

describe("Tabl3 GET [http://127.0.0.1:8000/colors/?limit=4]", function () {
  test('create Table & click paginator', function () {
    component2 = (0, _enzyme.mount)(_react2.default.createElement(_index2.default, {
      config: {
        ajax: {
          url: 'http://127.0.0.1:8000/colors/?limit=4',
          method: 'GET',
          simulateError: true,
          liveHeaders: function liveHeaders() {
            return {
              Authorization: 'JWT 298KJHkj1KJH'
            };
          }
        },
        conector: _ajax2.default,
        debug: {
          inputSearch: true,
          paginator: true,
          initiaAjax: true,
          dataset: true
        },
        onBeforeSend: function onBeforeSend(e) {
          return function (e) {};
        },
        onAfterSend: function onAfterSend(e) {
          return function (e) {};
        },
        errors: {
          onAjaxError: function onAjaxError(e) {
            return function (e) {/* console.log(arguments);*/};
          }
        },
        table: {
          className: 'table table-hover table-condensed',
          resetButton: {
            className: 'btn btn-sm btn-warning',
            title: 'Restablecer',
            onReset: function onReset(e) {
              return function (e) {};
            }
          },
          thead: {
            className: '',
            actions: {
              className: '',
              cssTH: {
                width: '130px',
                minWidth: '130px'
              },
              component: function component(instance) {
                return _react2.default.createElement(
                  'button',
                  null,
                  instance.id
                );
              }
            }
          }
        },
        paginator: {
          prevLink: 3,
          nextLink: 3
        },
        columns: [{
          title: 'Nombre',
          name: 'name',
          textEmpty: 'Sin deatlle',
          inputPlaceholder: 'Buscar',
          input: 'name__icontains'
        }]
      } }));
    var table2new2Instance = component2.instance();
    table2new2Instance.updateState('PAGINATOR_GOTO_PAGE', 1);
    table2new2Instance.updateQueryStringOut(function (p) {
      return {
        offset: 0
      };
    }, false);
    table2new2Instance.updateQueryStringOut(function (p) {
      return {
        offset: 0
      };
    }, true);
  });
});

describe("Tabl3 Generate Error", function () {
  test('error', function () {
    var tableError = (0, _enzyme.mount)(_react2.default.createElement(_index2.default, { config: {
        table: {
          className: 'table table-hover table-condensed',
          resetButton: {
            className: 'btn btn-sm btn-warning',
            title: 'Restablecer',
            onReset: function onReset(e) {
              return function (e) {};
            }
          },
          thead: {
            className: '',
            actions: {
              className: '',
              cssTH: {
                width: '130px',
                minWidth: '130px'
              },
              component: function component(instance) {
                return _react2.default.createElement(
                  'button',
                  null,
                  instance.id
                );
              }
            }
          }
        },
        paginator: {
          prevLink: 3,
          nextLink: 3
        },
        columns: [{
          title: 'Nombre',
          name: 'name',
          textEmpty: 'Sin deatlle',
          inputPlaceholder: 'Buscar',
          input: 'name__icontains'
        }]
      } }));
    var instanceTableError = tableError.instance();
    expect(instanceTableError.initError).toEqual(true);
  });
});

describe("Tabl3 onAjaxError", function () {

  var inputTest = function inputTest(handlerChangeInput, instance, value) {
    var hdc = handlerChangeInput;
    return _react2.default.createElement('input', { value: value, onChange: hdc });
  };
  test('render custom imput', function () {
    var tableError = (0, _enzyme.mount)(_react2.default.createElement(_index2.default, { config: {
        ajax: {
          url: 'http://127.0.0.1:8000/colors/?limit=4',
          method: 'GET',
          simulateError: true,
          liveHeaders: function liveHeaders() {
            return {
              Authorization: 'JWT 298KJHkj1KJH'
            };
          }
        },
        conector: _ajax2.default,
        table: {
          className: 'table table-hover table-condensed',
          resetButton: {
            className: 'btn btn-sm btn-warning',
            title: 'Restablecer',
            onReset: function onReset(e) {
              return function (e) {};
            }
          },
          thead: {
            className: '',
            actions: {
              className: '',
              cssTH: {
                width: '130px',
                minWidth: '130px'
              },
              component: function component(instance) {
                return _react2.default.createElement(
                  'button',
                  null,
                  instance.id
                );
              }
            }
          }
        },
        onAjaxError: function onAjaxError(e) {
          return function (e) {};
        },
        paginator: {
          prevLink: 3,
          nextLink: 3
        },
        columns: [{
          title: 'Nombre',
          name: 'name',
          textEmpty: 'Sin deatlle',
          inputPlaceholder: 'Buscar',
          input: 'name__icontains',
          componentInput: inputTest
        }]
      } }));
    var instanceTableError = tableError.instance();
    expect(instanceTableError.initError).toEqual(false);
  });
});