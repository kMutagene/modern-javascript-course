/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domain.ts":
/*!***********************!*\
  !*** ./src/domain.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createToDo": () => (/* binding */ createToDo),
/* harmony export */   "createToDoDOM": () => (/* binding */ createToDoDOM),
/* harmony export */   "generateSummaryDOM": () => (/* binding */ generateSummaryDOM),
/* harmony export */   "getAmountOfTodosLeft": () => (/* binding */ getAmountOfTodosLeft),
/* harmony export */   "getToDosFromLocalStorage": () => (/* binding */ getToDosFromLocalStorage),
/* harmony export */   "initApp": () => (/* binding */ initApp),
/* harmony export */   "renderTodos": () => (/* binding */ renderTodos),
/* harmony export */   "saveToDosInLocalStorage": () => (/* binding */ saveToDosInLocalStorage)
/* harmony export */ });
const createToDo = (text) => {
    return {
        Text: text,
        Completed: false
    };
};
// return locally saved ToDo array if present, else return an empty array
let getToDosFromLocalStorage = () => {
    let toDosJSON = localStorage.getItem("myToDos");
    if (toDosJSON) {
        return JSON.parse(toDosJSON);
    }
    else {
        return [];
    }
};
// Save ToDo array in local storage
let saveToDosInLocalStorage = (toDos) => {
    let toDosJSON = JSON.stringify(toDos);
    localStorage.setItem("myToDos", toDosJSON);
};
// Returns the amount of uncompleted todos in the given ToDo array
const getAmountOfTodosLeft = (toDos) => {
    const filteredTodos = toDos.filter((todo) => {
        return !todo.Completed;
    });
    return filteredTodos.length;
};
const createToDoDOM = (toDo) => {
    let row = document.createElement("tr");
    let textTd = document.createElement("td");
    textTd.textContent = toDo.Text;
    let completedTd = document.createElement("td");
    let toDoCheckBox = document.createElement("input");
    toDoCheckBox.type = "checkbox";
    toDoCheckBox.checked = toDo.Completed;
    let deleteTd = document.createElement("td");
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "button is-danger is-inverted";
    completedTd.appendChild(toDoCheckBox);
    row.appendChild(completedTd);
    row.appendChild(textTd);
    deleteTd.appendChild(deleteBtn);
    row.appendChild(deleteTd);
    return row;
};
const generateSummaryDOM = (toDos) => {
    let amnt = getAmountOfTodosLeft(toDos);
    let header = document.createElement("h2");
    header.textContent = `you have ${amnt} things left to do.`;
    return header;
};
// render application ToDos based on current filters
const renderTodos = (toDos, toDoFilters) => {
    debugger;
    const filteredTodos = toDos
        .filter((todo) => {
        debugger;
        return todo.Text.toLowerCase().includes(toDoFilters.SearchText.toLowerCase());
    })
        .filter((toDo) => {
        debugger;
        if (toDo.Completed) {
            return (toDo.Completed && toDoFilters.ShowCompleted);
        }
        else {
            return true;
        }
    });
    console.log(filteredTodos);
    // clear current display data
    if (toDosTable)
        toDosTable.innerHTML = "";
    if (tableInfo)
        tableInfo.innerHTML = "";
    tableInfo === null || tableInfo === void 0 ? void 0 : tableInfo.appendChild(generateSummaryDOM(toDos));
    filteredTodos.map((toDo) => {
        let newToDo = createToDoDOM(toDo);
        console.log(newToDo);
        toDosTable === null || toDosTable === void 0 ? void 0 : toDosTable.appendChild(newToDo);
    });
};
const initApp = (toDos, filters) => {
    getToDosFromLocalStorage();
    renderTodos(toDos, filters);
};



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/todo-app.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domain */ "./src/domain.ts");

const myToDos = _domain__WEBPACK_IMPORTED_MODULE_0__.getToDosFromLocalStorage();
const toDoFilters = {
    SearchText: "",
    ShowCompleted: true
};
const toDosTable = document.querySelector("#todos-table");
const tableInfo = document.querySelector("#table-info");
const todoFilterInput = document.querySelector("#todo-filter-input");
const todoForm = document.querySelector("#todo-form");
const newToDoInput = document.querySelector("#new-todo-input");
const completedFilterCheckbox = document.querySelector("#completed-filter-checkbox");
// ToDo filter based on todo text
todoFilterInput === null || todoFilterInput === void 0 ? void 0 : todoFilterInput.addEventListener("input", (e) => {
    toDoFilters.SearchText = e.target.value;
    renderTodos(myToDos, toDoFilters);
});
// Add a new todo
todoForm === null || todoForm === void 0 ? void 0 : todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let form = e.currentTarget;
    let input = newToDoInput;
    let newToDo = createToDo(form.todoText.value);
    myToDos.push(newToDo);
    saveToDosInLocalStorage(myToDos);
    renderTodos(myToDos, toDoFilters);
    input.value = "";
});
completedFilterCheckbox === null || completedFilterCheckbox === void 0 ? void 0 : completedFilterCheckbox.addEventListener("change", (e) => {
    let checkbox = (e.currentTarget);
    toDoFilters.ShowCompleted = checkbox.checked;
    renderTodos(myToDos, toDoFilters);
});
initApp(myToDos, toDoFilters);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9kb21haW4udHMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy90b2RvLWFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsS0FBSztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDd0o7Ozs7Ozs7VUN2RnhKO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ05tQztBQUNuQyxnQkFBZ0IsNkRBQStCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY3JlYXRlVG9EbyA9ICh0ZXh0KSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIFRleHQ6IHRleHQsXHJcbiAgICAgICAgQ29tcGxldGVkOiBmYWxzZVxyXG4gICAgfTtcclxufTtcclxuLy8gcmV0dXJuIGxvY2FsbHkgc2F2ZWQgVG9EbyBhcnJheSBpZiBwcmVzZW50LCBlbHNlIHJldHVybiBhbiBlbXB0eSBhcnJheVxyXG5sZXQgZ2V0VG9Eb3NGcm9tTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xyXG4gICAgbGV0IHRvRG9zSlNPTiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibXlUb0Rvc1wiKTtcclxuICAgIGlmICh0b0Rvc0pTT04pIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh0b0Rvc0pTT04pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59O1xyXG4vLyBTYXZlIFRvRG8gYXJyYXkgaW4gbG9jYWwgc3RvcmFnZVxyXG5sZXQgc2F2ZVRvRG9zSW5Mb2NhbFN0b3JhZ2UgPSAodG9Eb3MpID0+IHtcclxuICAgIGxldCB0b0Rvc0pTT04gPSBKU09OLnN0cmluZ2lmeSh0b0Rvcyk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm15VG9Eb3NcIiwgdG9Eb3NKU09OKTtcclxufTtcclxuLy8gUmV0dXJucyB0aGUgYW1vdW50IG9mIHVuY29tcGxldGVkIHRvZG9zIGluIHRoZSBnaXZlbiBUb0RvIGFycmF5XHJcbmNvbnN0IGdldEFtb3VudE9mVG9kb3NMZWZ0ID0gKHRvRG9zKSA9PiB7XHJcbiAgICBjb25zdCBmaWx0ZXJlZFRvZG9zID0gdG9Eb3MuZmlsdGVyKCh0b2RvKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuICF0b2RvLkNvbXBsZXRlZDtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGZpbHRlcmVkVG9kb3MubGVuZ3RoO1xyXG59O1xyXG5jb25zdCBjcmVhdGVUb0RvRE9NID0gKHRvRG8pID0+IHtcclxuICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICBsZXQgdGV4dFRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgdGV4dFRkLnRleHRDb250ZW50ID0gdG9Eby5UZXh0O1xyXG4gICAgbGV0IGNvbXBsZXRlZFRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgbGV0IHRvRG9DaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIHRvRG9DaGVja0JveC50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgdG9Eb0NoZWNrQm94LmNoZWNrZWQgPSB0b0RvLkNvbXBsZXRlZDtcclxuICAgIGxldCBkZWxldGVUZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgIGxldCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcclxuICAgIGRlbGV0ZUJ0bi5jbGFzc05hbWUgPSBcImJ1dHRvbiBpcy1kYW5nZXIgaXMtaW52ZXJ0ZWRcIjtcclxuICAgIGNvbXBsZXRlZFRkLmFwcGVuZENoaWxkKHRvRG9DaGVja0JveCk7XHJcbiAgICByb3cuYXBwZW5kQ2hpbGQoY29tcGxldGVkVGQpO1xyXG4gICAgcm93LmFwcGVuZENoaWxkKHRleHRUZCk7XHJcbiAgICBkZWxldGVUZC5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xyXG4gICAgcm93LmFwcGVuZENoaWxkKGRlbGV0ZVRkKTtcclxuICAgIHJldHVybiByb3c7XHJcbn07XHJcbmNvbnN0IGdlbmVyYXRlU3VtbWFyeURPTSA9ICh0b0RvcykgPT4ge1xyXG4gICAgbGV0IGFtbnQgPSBnZXRBbW91bnRPZlRvZG9zTGVmdCh0b0Rvcyk7XHJcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gYHlvdSBoYXZlICR7YW1udH0gdGhpbmdzIGxlZnQgdG8gZG8uYDtcclxuICAgIHJldHVybiBoZWFkZXI7XHJcbn07XHJcbi8vIHJlbmRlciBhcHBsaWNhdGlvbiBUb0RvcyBiYXNlZCBvbiBjdXJyZW50IGZpbHRlcnNcclxuY29uc3QgcmVuZGVyVG9kb3MgPSAodG9Eb3MsIHRvRG9GaWx0ZXJzKSA9PiB7XHJcbiAgICBkZWJ1Z2dlcjtcclxuICAgIGNvbnN0IGZpbHRlcmVkVG9kb3MgPSB0b0Rvc1xyXG4gICAgICAgIC5maWx0ZXIoKHRvZG8pID0+IHtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICByZXR1cm4gdG9kby5UZXh0LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModG9Eb0ZpbHRlcnMuU2VhcmNoVGV4dC50b0xvd2VyQ2FzZSgpKTtcclxuICAgIH0pXHJcbiAgICAgICAgLmZpbHRlcigodG9EbykgPT4ge1xyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIGlmICh0b0RvLkNvbXBsZXRlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKHRvRG8uQ29tcGxldGVkICYmIHRvRG9GaWx0ZXJzLlNob3dDb21wbGV0ZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhmaWx0ZXJlZFRvZG9zKTtcclxuICAgIC8vIGNsZWFyIGN1cnJlbnQgZGlzcGxheSBkYXRhXHJcbiAgICBpZiAodG9Eb3NUYWJsZSlcclxuICAgICAgICB0b0Rvc1RhYmxlLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBpZiAodGFibGVJbmZvKVxyXG4gICAgICAgIHRhYmxlSW5mby5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgdGFibGVJbmZvID09PSBudWxsIHx8IHRhYmxlSW5mbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGFibGVJbmZvLmFwcGVuZENoaWxkKGdlbmVyYXRlU3VtbWFyeURPTSh0b0RvcykpO1xyXG4gICAgZmlsdGVyZWRUb2Rvcy5tYXAoKHRvRG8pID0+IHtcclxuICAgICAgICBsZXQgbmV3VG9EbyA9IGNyZWF0ZVRvRG9ET00odG9Ebyk7XHJcbiAgICAgICAgY29uc29sZS5sb2cobmV3VG9Ebyk7XHJcbiAgICAgICAgdG9Eb3NUYWJsZSA9PT0gbnVsbCB8fCB0b0Rvc1RhYmxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0b0Rvc1RhYmxlLmFwcGVuZENoaWxkKG5ld1RvRG8pO1xyXG4gICAgfSk7XHJcbn07XHJcbmNvbnN0IGluaXRBcHAgPSAodG9Eb3MsIGZpbHRlcnMpID0+IHtcclxuICAgIGdldFRvRG9zRnJvbUxvY2FsU3RvcmFnZSgpO1xyXG4gICAgcmVuZGVyVG9kb3ModG9Eb3MsIGZpbHRlcnMpO1xyXG59O1xyXG5leHBvcnQgeyBjcmVhdGVUb0RvLCBjcmVhdGVUb0RvRE9NLCBnZW5lcmF0ZVN1bW1hcnlET00sIGdldEFtb3VudE9mVG9kb3NMZWZ0LCBnZXRUb0Rvc0Zyb21Mb2NhbFN0b3JhZ2UsIGluaXRBcHAsIHJlbmRlclRvZG9zLCBzYXZlVG9Eb3NJbkxvY2FsU3RvcmFnZSB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyBEb21haW4gZnJvbSBcIi4vZG9tYWluXCI7XHJcbmNvbnN0IG15VG9Eb3MgPSBEb21haW4uZ2V0VG9Eb3NGcm9tTG9jYWxTdG9yYWdlKCk7XHJcbmNvbnN0IHRvRG9GaWx0ZXJzID0ge1xyXG4gICAgU2VhcmNoVGV4dDogXCJcIixcclxuICAgIFNob3dDb21wbGV0ZWQ6IHRydWVcclxufTtcclxuY29uc3QgdG9Eb3NUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb3MtdGFibGVcIik7XHJcbmNvbnN0IHRhYmxlSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFibGUtaW5mb1wiKTtcclxuY29uc3QgdG9kb0ZpbHRlcklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLWZpbHRlci1pbnB1dFwiKTtcclxuY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tZm9ybVwiKTtcclxuY29uc3QgbmV3VG9Eb0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctdG9kby1pbnB1dFwiKTtcclxuY29uc3QgY29tcGxldGVkRmlsdGVyQ2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbXBsZXRlZC1maWx0ZXItY2hlY2tib3hcIik7XHJcbi8vIFRvRG8gZmlsdGVyIGJhc2VkIG9uIHRvZG8gdGV4dFxyXG50b2RvRmlsdGVySW5wdXQgPT09IG51bGwgfHwgdG9kb0ZpbHRlcklucHV0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0b2RvRmlsdGVySW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XHJcbiAgICB0b0RvRmlsdGVycy5TZWFyY2hUZXh0ID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICByZW5kZXJUb2RvcyhteVRvRG9zLCB0b0RvRmlsdGVycyk7XHJcbn0pO1xyXG4vLyBBZGQgYSBuZXcgdG9kb1xyXG50b2RvRm9ybSA9PT0gbnVsbCB8fCB0b2RvRm9ybSA9PT0gdm9pZCAwID8gdm9pZCAwIDogdG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGZvcm0gPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICBsZXQgaW5wdXQgPSBuZXdUb0RvSW5wdXQ7XHJcbiAgICBsZXQgbmV3VG9EbyA9IGNyZWF0ZVRvRG8oZm9ybS50b2RvVGV4dC52YWx1ZSk7XHJcbiAgICBteVRvRG9zLnB1c2gobmV3VG9Ebyk7XHJcbiAgICBzYXZlVG9Eb3NJbkxvY2FsU3RvcmFnZShteVRvRG9zKTtcclxuICAgIHJlbmRlclRvZG9zKG15VG9Eb3MsIHRvRG9GaWx0ZXJzKTtcclxuICAgIGlucHV0LnZhbHVlID0gXCJcIjtcclxufSk7XHJcbmNvbXBsZXRlZEZpbHRlckNoZWNrYm94ID09PSBudWxsIHx8IGNvbXBsZXRlZEZpbHRlckNoZWNrYm94ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb21wbGV0ZWRGaWx0ZXJDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XHJcbiAgICBsZXQgY2hlY2tib3ggPSAoZS5jdXJyZW50VGFyZ2V0KTtcclxuICAgIHRvRG9GaWx0ZXJzLlNob3dDb21wbGV0ZWQgPSBjaGVja2JveC5jaGVja2VkO1xyXG4gICAgcmVuZGVyVG9kb3MobXlUb0RvcywgdG9Eb0ZpbHRlcnMpO1xyXG59KTtcclxuaW5pdEFwcChteVRvRG9zLCB0b0RvRmlsdGVycyk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=