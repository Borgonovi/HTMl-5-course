"use strict";function routes($stateProvider,$urlRouterProvider,$locationProvider){$urlRouterProvider.otherwise("/404"),$locationProvider.html5Mode(!0),$stateProvider.state("home",{url:"/",templateUrl:"templates/home.html"}).state("red",{url:"/red",templateUrl:"templates/red.html"}).state("green",{url:"/green",templateUrl:"templates/green.html"}).state("blue",{url:"/blue",templateUrl:"templates/blue.html"})}angular.module("atividade-routes",["ui.router"]),angular.module("atividade-routes").config(routes),routes.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsInJvdXRlcy5jb25maWcuanMiXSwibmFtZXMiOlsicm91dGVzIiwiJHN0YXRlUHJvdmlkZXIiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCIkbG9jYXRpb25Qcm92aWRlciIsIm90aGVyd2lzZSIsImh0bWw1TW9kZSIsInN0YXRlIiwidXJsIiwidGVtcGxhdGVVcmwiLCJhbmd1bGFyIiwibW9kdWxlIiwiY29uZmlnIiwiJGluamVjdCJdLCJtYXBwaW5ncyI6IkFBQUEsWUNNQSxTQUFTQSxRQUFPQyxlQUFnQkMsbUJBQW9CQyxtQkFDbkRELG1CQUFtQkUsVUFBVSxRQUM3QkQsa0JBQWtCRSxXQUFVLEdBQzVCSixlQUNFSyxNQUFNLFFBQ05DLElBQUksSUFDSkMsWUFBYSx3QkFFYkYsTUFBTSxPQUNOQyxJQUFJLE9BQ0pDLFlBQWEsdUJBR2JGLE1BQU0sU0FDTkMsSUFBSSxTQUNKQyxZQUFhLHlCQUdiRixNQUFNLFFBQ05DLElBQUksUUFDSkMsWUFBYSx3QkR4QmhCQyxRQUNHQyxPQUFPLG9CQUNQLGNDRkhELFFBQ0VDLE9BQU8sb0JBQ1BDLE9BQU9YLFFBeUJUQSxPQUFPWSxTQUFXLGlCQUFrQixxQkFBc0IiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5hbmd1bGFyXG4gIC5tb2R1bGUoJ2F0aXZpZGFkZS1yb3V0ZXMnLCBbXG4gIFx0J3VpLnJvdXRlcidcbiBcdF0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuYW5ndWxhclxyXG5cdC5tb2R1bGUoJ2F0aXZpZGFkZS1yb3V0ZXMnKVxyXG5cdC5jb25maWcocm91dGVzKTtcclxuXHJcbmZ1bmN0aW9uIHJvdXRlcygkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcil7XHJcblx0JHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLzQwNCcpO1xyXG5cdCRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh0cnVlKTtcclxuXHQkc3RhdGVQcm92aWRlclxyXG5cdFx0LnN0YXRlKCdob21lJyx7XHJcblx0XHRcdHVybDonLycsXHJcblx0XHRcdHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2hvbWUuaHRtbCdcclxuXHRcdH0pXHJcblx0XHQuc3RhdGUoJ3JlZCcse1xyXG5cdFx0XHR1cmw6Jy9yZWQnLFxyXG5cdFx0XHR0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9yZWQuaHRtbCdcclxuXHRcdH0pXHJcblxyXG5cdFx0LnN0YXRlKCdncmVlbicse1xyXG5cdFx0XHR1cmw6Jy9ncmVlbicsXHJcblx0XHRcdHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2dyZWVuLmh0bWwnXHJcblx0XHR9KVxyXG5cclxuXHRcdC5zdGF0ZSgnYmx1ZScse1xyXG5cdFx0XHR1cmw6Jy9ibHVlJyxcclxuXHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvYmx1ZS5odG1sJ1xyXG5cdFx0fSk7XHJcbn0iXSwic291cmNlUm9vdCI6Ii9hc3NldHMvYW5ndWxhciJ9