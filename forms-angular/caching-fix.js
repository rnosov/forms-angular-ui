angular.module('formsAngular').run(['$templateCache',
  function($templateCache) {
    'use strict';

    $templateCache.put('template/form-button-bs2.html',
      "<div class=\"btn-group pull-right\"><button id=saveButton class=\"btn btn-mini btn-primary form-btn\" ng-click=save() ng-disabled=isSaveDisabled()><i class=icon-ok></i> Save</button> <button id=cancelButton class=\"btn btn-mini btn-warning form-btn\" ng-click=cancel() ng-disabled=isCancelDisabled()><i class=icon-remove></i> Cancel</button></div><div class=\"btn-group pull-right\"><button id=newButton class=\"btn btn-mini btn-success form-btn\" ng-click=new() ng-disabled=isNewDisabled()><i class=icon-plus></i> New</button> <button id=deleteButton class=\"btn btn-mini btn-danger form-btn\" ng-click=delete() ng-disabled=isDeleteDisabled()><i class=icon-minus></i> Delete</button></div>"
    );


    $templateCache.put('template/form-button-bs3.html',
      "<div class=\"btn-group pull-right\"><button id=saveButton class=\"btn btn-primary form-btn btn-xs\" ng-click=save() ng-disabled=isSaveDisabled()><i class=\"glyphicon glyphicon-ok\"></i> Save</button> <button id=cancelButton class=\"btn btn-warning form-btn btn-xs\" ng-click=cancel() ng-disabled=isCancelDisabled()><i class=\"glyphicon glyphicon-remove\"></i> Cancel</button></div><div class=\"btn-group pull-right\"><button id=newButton class=\"btn btn-success form-btn btn-xs\" ng-click=new() ng-disabled=isNewDisabled()><i class=\"glyphicon glyphicon-plus\"></i> New</button> <button id=deleteButton class=\"btn btn-danger form-btn btn-xs\" ng-click=delete() ng-disabled=isDeleteDisabled()><i class=\"glyphicon glyphicon-minus\"></i> Delete</button></div>"
    );


    $templateCache.put('template/search-bs2.html',
      "<form class=\"navbar-search pull-right\"><div id=search-cg class=control-group ng-class=errorClass><input id=searchinput ng-model=searchTarget class=search-query placeholder=\"Ctrl+Slash to Search\" ng-keyup=handleKey($event)></div></form><div class=results-container ng-show=\"results.length >= 1\"><div class=search-results><div ng-repeat=\"result in results\"><span ng-class=resultClass($index) ng-click=selectResult($index)>{{result.resourceText}} {{result.text}}</span></div><div ng-show=\"moreCount > 0\">(plus more - continue typing to narrow down search...)</div></div></div>"
    );


    $templateCache.put('template/search-bs3.html',
      "<form class=\"pull-right navbar-form\"><div id=search-cg class=form-group ng-class=errorClass><input id=searchinput ng-model=searchTarget class=\"search-query form-control\" placeholder=\"Ctrl+Slash to Search\" ng-keyup=handleKey($event)></div></form><div class=results-container ng-show=\"results.length >= 1\"><div class=search-results><div ng-repeat=\"result in results\"><span ng-class=resultClass($index) ng-click=selectResult($index)>{{result.resourceText}} {{result.text}}</span></div><div ng-show=\"moreCount > 0\">(plus more - continue typing to narrow down search...)</div></div></div>"
    );

  }
]);
