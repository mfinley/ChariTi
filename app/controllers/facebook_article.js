var APP = require("core");
var UTIL = require("utilities");
var MODEL = require("models/facebook");

var DATA = arguments[0] || {};

$.init = function() {
	Ti.API.debug("facebook_article.init");
	Ti.API.trace(JSON.stringify(DATA));
	
	$.handleData(MODEL.getArticle(DATA.id));
};

$.handleData = function(_data) {
	Ti.API.debug("facebook_article.handleData");
	
	$.heading.text	= _data.title;
	$.text.text		= _data.description;
	$.date.text		= UTIL.toDateRelative(_data.date);
	$.date.color	= APP.Settings.colors.primary;
	
	$.NavigationBar.title.color				= APP.Settings.colors.text || "#FFF";
	$.NavigationBar.Wrapper.backgroundColor	= APP.Settings.colors.primary || "#000";
};

// Event listeners
$.NavigationBar.back.addEventListener("click", function(_event) {
	Ti.API.debug("facebook_article @close");
	
	APP.closeDetailScreen();
});

// Kick off the init
$.init();