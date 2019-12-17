server = window.location.host;
pathname = window.location.pathname.toLowerCase().substr(1, window.location.pathname.toLowerCase().lastIndexOf(".nsf") + 3) ;
protocol = window.location.protocol;

//var language = window.navigator.language.substring(0,2).toUpperCase(); //pega somente os dois primeiros caracteres
var language = getCookie("IDIOMACompras");
var baseurl = protocol + '//' + server + '/' + pathname + '/' ;

/* Chosen v1.8.7 | (c) 2011-2018 by Harvest | MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md */
(function(){var t,e,s,i,n=function(t,e){return function(){return t.apply(e,arguments)}},r=function(t,e){function s(){this.constructor=t}for(var i in e)o.call(e,i)&&(t[i]=e[i]);return s.prototype=e.prototype,t.prototype=new s,t.__super__=e.prototype,t},o={}.hasOwnProperty;(i=function(){function t(){this.options_index=0,this.parsed=[]}return t.prototype.add_node=function(t){return"OPTGROUP"===t.nodeName.toUpperCase()?this.add_group(t):this.add_option(t)},t.prototype.add_group=function(t){var e,s,i,n,r,o;for(e=this.parsed.length,this.parsed.push({array_index:e,group:!0,label:t.label,title:t.title?t.title:void 0,children:0,disabled:t.disabled,classes:t.className}),o=[],s=0,i=(r=t.childNodes).length;s<i;s++)n=r[s],o.push(this.add_option(n,e,t.disabled));return o},t.prototype.add_option=function(t,e,s){if("OPTION"===t.nodeName.toUpperCase())return""!==t.text?(null!=e&&(this.parsed[e].children+=1),this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,value:t.value,text:t.text,html:t.innerHTML,title:t.title?t.title:void 0,selected:t.selected,disabled:!0===s?s:t.disabled,group_array_index:e,group_label:null!=e?this.parsed[e].label:null,classes:t.className,style:t.style.cssText})):this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,empty:!0}),this.options_index+=1},t}()).select_to_array=function(t){var e,s,n,r,o;for(r=new i,s=0,n=(o=t.childNodes).length;s<n;s++)e=o[s],r.add_node(e);return r.parsed},e=function(){function t(e,s){this.form_field=e,this.options=null!=s?s:{},this.label_click_handler=n(this.label_click_handler,this),t.browser_is_supported()&&(this.is_multiple=this.form_field.multiple,this.set_default_text(),this.set_default_values(),this.setup(),this.set_up_html(),this.register_observers(),this.on_ready())}return t.prototype.set_default_values=function(){return this.click_test_action=function(t){return function(e){return t.test_active_click(e)}}(this),this.activate_action=function(t){return function(e){return t.activate_field(e)}}(this),this.active_field=!1,this.mouse_on_container=!1,this.results_showing=!1,this.result_highlighted=null,this.is_rtl=this.options.rtl||/\bchosen-rtl\b/.test(this.form_field.className),this.allow_single_deselect=null!=this.options.allow_single_deselect&&null!=this.form_field.options[0]&&""===this.form_field.options[0].text&&this.options.allow_single_deselect,this.disable_search_threshold=this.options.disable_search_threshold||0,this.disable_search=this.options.disable_search||!1,this.enable_split_word_search=null==this.options.enable_split_word_search||this.options.enable_split_word_search,this.group_search=null==this.options.group_search||this.options.group_search,this.search_contains=this.options.search_contains||!1,this.single_backstroke_delete=null==this.options.single_backstroke_delete||this.options.single_backstroke_delete,this.max_selected_options=this.options.max_selected_options||Infinity,this.inherit_select_classes=this.options.inherit_select_classes||!1,this.display_selected_options=null==this.options.display_selected_options||this.options.display_selected_options,this.display_disabled_options=null==this.options.display_disabled_options||this.options.display_disabled_options,this.include_group_label_in_selected=this.options.include_group_label_in_selected||!1,this.max_shown_results=this.options.max_shown_results||Number.POSITIVE_INFINITY,this.case_sensitive_search=this.options.case_sensitive_search||!1,this.hide_results_on_select=null==this.options.hide_results_on_select||this.options.hide_results_on_select},t.prototype.set_default_text=function(){return this.form_field.getAttribute("data-placeholder")?this.default_text=this.form_field.getAttribute("data-placeholder"):this.is_multiple?this.default_text=this.options.placeholder_text_multiple||this.options.placeholder_text||t.default_multiple_text:this.default_text=this.options.placeholder_text_single||this.options.placeholder_text||t.default_single_text,this.default_text=this.escape_html(this.default_text),this.results_none_found=this.form_field.getAttribute("data-no_results_text")||this.options.no_results_text||t.default_no_result_text},t.prototype.choice_label=function(t){return this.include_group_label_in_selected&&null!=t.group_label?"<b class='group-name'>"+this.escape_html(t.group_label)+"</b>"+t.html:t.html},t.prototype.mouse_enter=function(){return this.mouse_on_container=!0},t.prototype.mouse_leave=function(){return this.mouse_on_container=!1},t.prototype.input_focus=function(t){if(this.is_multiple){if(!this.active_field)return setTimeout(function(t){return function(){return t.container_mousedown()}}(this),50)}else if(!this.active_field)return this.activate_field()},t.prototype.input_blur=function(t){if(!this.mouse_on_container)return this.active_field=!1,setTimeout(function(t){return function(){return t.blur_test()}}(this),100)},t.prototype.label_click_handler=function(t){return this.is_multiple?this.container_mousedown(t):this.activate_field()},t.prototype.results_option_build=function(t){var e,s,i,n,r,o,h;for(e="",h=0,n=0,r=(o=this.results_data).length;n<r&&(s=o[n],i="",""!==(i=s.group?this.result_add_group(s):this.result_add_option(s))&&(h++,e+=i),(null!=t?t.first:void 0)&&(s.selected&&this.is_multiple?this.choice_build(s):s.selected&&!this.is_multiple&&this.single_set_selected_text(this.choice_label(s))),!(h>=this.max_shown_results));n++);return e},t.prototype.result_add_option=function(t){var e,s;return t.search_match&&this.include_option_in_results(t)?(e=[],t.disabled||t.selected&&this.is_multiple||e.push("active-result"),!t.disabled||t.selected&&this.is_multiple||e.push("disabled-result"),t.selected&&e.push("result-selected"),null!=t.group_array_index&&e.push("group-option"),""!==t.classes&&e.push(t.classes),s=document.createElement("li"),s.className=e.join(" "),t.style&&(s.style.cssText=t.style),s.setAttribute("data-option-array-index",t.array_index),s.innerHTML=t.highlighted_html||t.html,t.title&&(s.title=t.title),this.outerHTML(s)):""},t.prototype.result_add_group=function(t){var e,s;return(t.search_match||t.group_match)&&t.active_options>0?((e=[]).push("group-result"),t.classes&&e.push(t.classes),s=document.createElement("li"),s.className=e.join(" "),s.innerHTML=t.highlighted_html||this.escape_html(t.label),t.title&&(s.title=t.title),this.outerHTML(s)):""},t.prototype.results_update_field=function(){if(this.set_default_text(),this.is_multiple||this.results_reset_cleanup(),this.result_clear_highlight(),this.results_build(),this.results_showing)return this.winnow_results()},t.prototype.reset_single_select_options=function(){var t,e,s,i,n;for(n=[],t=0,e=(s=this.results_data).length;t<e;t++)(i=s[t]).selected?n.push(i.selected=!1):n.push(void 0);return n},t.prototype.results_toggle=function(){return this.results_showing?this.results_hide():this.results_show()},t.prototype.results_search=function(t){return this.results_showing?this.winnow_results():this.results_show()},t.prototype.winnow_results=function(t){var e,s,i,n,r,o,h,l,c,_,a,u,d,p,f;for(this.no_results_clear(),_=0,e=(h=this.get_search_text()).replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),c=this.get_search_regex(e),i=0,n=(l=this.results_data).length;i<n;i++)(r=l[i]).search_match=!1,a=null,u=null,r.highlighted_html="",this.include_option_in_results(r)&&(r.group&&(r.group_match=!1,r.active_options=0),null!=r.group_array_index&&this.results_data[r.group_array_index]&&(0===(a=this.results_data[r.group_array_index]).active_options&&a.search_match&&(_+=1),a.active_options+=1),f=r.group?r.label:r.text,r.group&&!this.group_search||(u=this.search_string_match(f,c),r.search_match=null!=u,r.search_match&&!r.group&&(_+=1),r.search_match?(h.length&&(d=u.index,o=f.slice(0,d),s=f.slice(d,d+h.length),p=f.slice(d+h.length),r.highlighted_html=this.escape_html(o)+"<em>"+this.escape_html(s)+"</em>"+this.escape_html(p)),null!=a&&(a.group_match=!0)):null!=r.group_array_index&&this.results_data[r.group_array_index].search_match&&(r.search_match=!0)));return this.result_clear_highlight(),_<1&&h.length?(this.update_results_content(""),this.no_results(h)):(this.update_results_content(this.results_option_build()),(null!=t?t.skip_highlight:void 0)?void 0:this.winnow_results_set_highlight())},t.prototype.get_search_regex=function(t){var e,s;return s=this.search_contains?t:"(^|\\s|\\b)"+t+"[^\\s]*",this.enable_split_word_search||this.search_contains||(s="^"+s),e=this.case_sensitive_search?"":"i",new RegExp(s,e)},t.prototype.search_string_match=function(t,e){var s;return s=e.exec(t),!this.search_contains&&(null!=s?s[1]:void 0)&&(s.index+=1),s},t.prototype.choices_count=function(){var t,e,s;if(null!=this.selected_option_count)return this.selected_option_count;for(this.selected_option_count=0,t=0,e=(s=this.form_field.options).length;t<e;t++)s[t].selected&&(this.selected_option_count+=1);return this.selected_option_count},t.prototype.choices_click=function(t){if(t.preventDefault(),this.activate_field(),!this.results_showing&&!this.is_disabled)return this.results_show()},t.prototype.keydown_checker=function(t){var e,s;switch(s=null!=(e=t.which)?e:t.keyCode,this.search_field_scale(),8!==s&&this.pending_backstroke&&this.clear_backstroke(),s){case 8:this.backstroke_length=this.get_search_field_value().length;break;case 9:this.results_showing&&!this.is_multiple&&this.result_select(t),this.mouse_on_container=!1;break;case 13:case 27:this.results_showing&&t.preventDefault();break;case 32:this.disable_search&&t.preventDefault();break;case 38:t.preventDefault(),this.keyup_arrow();break;case 40:t.preventDefault(),this.keydown_arrow()}},t.prototype.keyup_checker=function(t){var e,s;switch(s=null!=(e=t.which)?e:t.keyCode,this.search_field_scale(),s){case 8:this.is_multiple&&this.backstroke_length<1&&this.choices_count()>0?this.keydown_backstroke():this.pending_backstroke||(this.result_clear_highlight(),this.results_search());break;case 13:t.preventDefault(),this.results_showing&&this.result_select(t);break;case 27:this.results_showing&&this.results_hide();break;case 9:case 16:case 17:case 18:case 38:case 40:case 91:break;default:this.results_search()}},t.prototype.clipboard_event_checker=function(t){if(!this.is_disabled)return setTimeout(function(t){return function(){return t.results_search()}}(this),50)},t.prototype.container_width=function(){return null!=this.options.width?this.options.width:this.form_field.offsetWidth+"px"},t.prototype.include_option_in_results=function(t){return!(this.is_multiple&&!this.display_selected_options&&t.selected)&&(!(!this.display_disabled_options&&t.disabled)&&!t.empty)},t.prototype.search_results_touchstart=function(t){return this.touch_started=!0,this.search_results_mouseover(t)},t.prototype.search_results_touchmove=function(t){return this.touch_started=!1,this.search_results_mouseout(t)},t.prototype.search_results_touchend=function(t){if(this.touch_started)return this.search_results_mouseup(t)},t.prototype.outerHTML=function(t){var e;return t.outerHTML?t.outerHTML:((e=document.createElement("div")).appendChild(t),e.innerHTML)},t.prototype.get_single_html=function(){return'<a class="chosen-single chosen-default">\n  <span>'+this.default_text+'</span>\n  <div><b></b></div>\n</a>\n<div class="chosen-drop">\n  <div class="chosen-search">\n    <input class="chosen-search-input" type="text" autocomplete="off" />\n  </div>\n  <ul class="chosen-results"></ul>\n</div>'},t.prototype.get_multi_html=function(){return'<ul class="chosen-choices">\n  <li class="search-field">\n    <input class="chosen-search-input" type="text" autocomplete="off" value="'+this.default_text+'" />\n  </li>\n</ul>\n<div class="chosen-drop">\n  <ul class="chosen-results"></ul>\n</div>'},t.prototype.get_no_results_html=function(t){return'<li class="no-results">\n  '+this.results_none_found+" <span>"+this.escape_html(t)+"</span>\n</li>"},t.browser_is_supported=function(){return"Microsoft Internet Explorer"===window.navigator.appName?document.documentMode>=8:!(/iP(od|hone)/i.test(window.navigator.userAgent)||/IEMobile/i.test(window.navigator.userAgent)||/Windows Phone/i.test(window.navigator.userAgent)||/BlackBerry/i.test(window.navigator.userAgent)||/BB10/i.test(window.navigator.userAgent)||/Android.*Mobile/i.test(window.navigator.userAgent))},t.default_multiple_text="Select Some Options",t.default_single_text="Select an Option",t.default_no_result_text="No results match",t}(),(t=jQuery).fn.extend({chosen:function(i){return e.browser_is_supported()?this.each(function(e){var n,r;r=(n=t(this)).data("chosen"),"destroy"!==i?r instanceof s||n.data("chosen",new s(this,i)):r instanceof s&&r.destroy()}):this}}),s=function(s){function n(){return n.__super__.constructor.apply(this,arguments)}return r(n,e),n.prototype.setup=function(){return this.form_field_jq=t(this.form_field),this.current_selectedIndex=this.form_field.selectedIndex},n.prototype.set_up_html=function(){var e,s;return(e=["chosen-container"]).push("chosen-container-"+(this.is_multiple?"multi":"single")),this.inherit_select_classes&&this.form_field.className&&e.push(this.form_field.className),this.is_rtl&&e.push("chosen-rtl"),s={"class":e.join(" "),title:this.form_field.title},this.form_field.id.length&&(s.id=this.form_field.id.replace(/[^\w]/g,"_")+"_chosen"),this.container=t("<div />",s),this.container.width(this.container_width()),this.is_multiple?this.container.html(this.get_multi_html()):this.container.html(this.get_single_html()),this.form_field_jq.hide().after(this.container),this.dropdown=this.container.find("div.chosen-drop").first(),this.search_field=this.container.find("input").first(),this.search_results=this.container.find("ul.chosen-results").first(),this.search_field_scale(),this.search_no_results=this.container.find("li.no-results").first(),this.is_multiple?(this.search_choices=this.container.find("ul.chosen-choices").first(),this.search_container=this.container.find("li.search-field").first()):(this.search_container=this.container.find("div.chosen-search").first(),this.selected_item=this.container.find(".chosen-single").first()),this.results_build(),this.set_tab_index(),this.set_label_behavior()},n.prototype.on_ready=function(){return this.form_field_jq.trigger("chosen:ready",{chosen:this})},n.prototype.register_observers=function(){return this.container.on("touchstart.chosen",function(t){return function(e){t.container_mousedown(e)}}(this)),this.container.on("touchend.chosen",function(t){return function(e){t.container_mouseup(e)}}(this)),this.container.on("mousedown.chosen",function(t){return function(e){t.container_mousedown(e)}}(this)),this.container.on("mouseup.chosen",function(t){return function(e){t.container_mouseup(e)}}(this)),this.container.on("mouseenter.chosen",function(t){return function(e){t.mouse_enter(e)}}(this)),this.container.on("mouseleave.chosen",function(t){return function(e){t.mouse_leave(e)}}(this)),this.search_results.on("mouseup.chosen",function(t){return function(e){t.search_results_mouseup(e)}}(this)),this.search_results.on("mouseover.chosen",function(t){return function(e){t.search_results_mouseover(e)}}(this)),this.search_results.on("mouseout.chosen",function(t){return function(e){t.search_results_mouseout(e)}}(this)),this.search_results.on("mousewheel.chosen DOMMouseScroll.chosen",function(t){return function(e){t.search_results_mousewheel(e)}}(this)),this.search_results.on("touchstart.chosen",function(t){return function(e){t.search_results_touchstart(e)}}(this)),this.search_results.on("touchmove.chosen",function(t){return function(e){t.search_results_touchmove(e)}}(this)),this.search_results.on("touchend.chosen",function(t){return function(e){t.search_results_touchend(e)}}(this)),this.form_field_jq.on("chosen:updated.chosen",function(t){return function(e){t.results_update_field(e)}}(this)),this.form_field_jq.on("chosen:activate.chosen",function(t){return function(e){t.activate_field(e)}}(this)),this.form_field_jq.on("chosen:open.chosen",function(t){return function(e){t.container_mousedown(e)}}(this)),this.form_field_jq.on("chosen:close.chosen",function(t){return function(e){t.close_field(e)}}(this)),this.search_field.on("blur.chosen",function(t){return function(e){t.input_blur(e)}}(this)),this.search_field.on("keyup.chosen",function(t){return function(e){t.keyup_checker(e)}}(this)),this.search_field.on("keydown.chosen",function(t){return function(e){t.keydown_checker(e)}}(this)),this.search_field.on("focus.chosen",function(t){return function(e){t.input_focus(e)}}(this)),this.search_field.on("cut.chosen",function(t){return function(e){t.clipboard_event_checker(e)}}(this)),this.search_field.on("paste.chosen",function(t){return function(e){t.clipboard_event_checker(e)}}(this)),this.is_multiple?this.search_choices.on("click.chosen",function(t){return function(e){t.choices_click(e)}}(this)):this.container.on("click.chosen",function(t){t.preventDefault()})},n.prototype.destroy=function(){return t(this.container[0].ownerDocument).off("click.chosen",this.click_test_action),this.form_field_label.length>0&&this.form_field_label.off("click.chosen"),this.search_field[0].tabIndex&&(this.form_field_jq[0].tabIndex=this.search_field[0].tabIndex),this.container.remove(),this.form_field_jq.removeData("chosen"),this.form_field_jq.show()},n.prototype.search_field_disabled=function(){return this.is_disabled=this.form_field.disabled||this.form_field_jq.parents("fieldset").is(":disabled"),this.container.toggleClass("chosen-disabled",this.is_disabled),this.search_field[0].disabled=this.is_disabled,this.is_multiple||this.selected_item.off("focus.chosen",this.activate_field),this.is_disabled?this.close_field():this.is_multiple?void 0:this.selected_item.on("focus.chosen",this.activate_field)},n.prototype.container_mousedown=function(e){var s;if(!this.is_disabled)return!e||"mousedown"!==(s=e.type)&&"touchstart"!==s||this.results_showing||e.preventDefault(),null!=e&&t(e.target).hasClass("search-choice-close")?void 0:(this.active_field?this.is_multiple||!e||t(e.target)[0]!==this.selected_item[0]&&!t(e.target).parents("a.chosen-single").length||(e.preventDefault(),this.results_toggle()):(this.is_multiple&&this.search_field.val(""),t(this.container[0].ownerDocument).on("click.chosen",this.click_test_action),this.results_show()),this.activate_field())},n.prototype.container_mouseup=function(t){if("ABBR"===t.target.nodeName&&!this.is_disabled)return this.results_reset(t)},n.prototype.search_results_mousewheel=function(t){var e;if(t.originalEvent&&(e=t.originalEvent.deltaY||-t.originalEvent.wheelDelta||t.originalEvent.detail),null!=e)return t.preventDefault(),"DOMMouseScroll"===t.type&&(e*=40),this.search_results.scrollTop(e+this.search_results.scrollTop())},n.prototype.blur_test=function(t){if(!this.active_field&&this.container.hasClass("chosen-container-active"))return this.close_field()},n.prototype.close_field=function(){return t(this.container[0].ownerDocument).off("click.chosen",this.click_test_action),this.active_field=!1,this.results_hide(),this.container.removeClass("chosen-container-active"),this.clear_backstroke(),this.show_search_field_default(),this.search_field_scale(),this.search_field.blur()},n.prototype.activate_field=function(){if(!this.is_disabled)return this.container.addClass("chosen-container-active"),this.active_field=!0,this.search_field.val(this.search_field.val()),this.search_field.focus()},n.prototype.test_active_click=function(e){var s;return(s=t(e.target).closest(".chosen-container")).length&&this.container[0]===s[0]?this.active_field=!0:this.close_field()},n.prototype.results_build=function(){return this.parsing=!0,this.selected_option_count=null,this.results_data=i.select_to_array(this.form_field),this.is_multiple?this.search_choices.find("li.search-choice").remove():(this.single_set_selected_text(),this.disable_search||this.form_field.options.length<=this.disable_search_threshold?(this.search_field[0].readOnly=!0,this.container.addClass("chosen-container-single-nosearch")):(this.search_field[0].readOnly=!1,this.container.removeClass("chosen-container-single-nosearch"))),this.update_results_content(this.results_option_build({first:!0})),this.search_field_disabled(),this.show_search_field_default(),this.search_field_scale(),this.parsing=!1},n.prototype.result_do_highlight=function(t){var e,s,i,n,r;if(t.length){if(this.result_clear_highlight(),this.result_highlight=t,this.result_highlight.addClass("highlighted"),i=parseInt(this.search_results.css("maxHeight"),10),r=this.search_results.scrollTop(),n=i+r,s=this.result_highlight.position().top+this.search_results.scrollTop(),(e=s+this.result_highlight.outerHeight())>=n)return this.search_results.scrollTop(e-i>0?e-i:0);if(s<r)return this.search_results.scrollTop(s)}},n.prototype.result_clear_highlight=function(){return this.result_highlight&&this.result_highlight.removeClass("highlighted"),this.result_highlight=null},n.prototype.results_show=function(){return this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger("chosen:maxselected",{chosen:this}),!1):(this.container.addClass("chosen-with-drop"),this.results_showing=!0,this.search_field.focus(),this.search_field.val(this.get_search_field_value()),this.winnow_results(),this.form_field_jq.trigger("chosen:showing_dropdown",{chosen:this}))},n.prototype.update_results_content=function(t){return this.search_results.html(t)},n.prototype.results_hide=function(){return this.results_showing&&(this.result_clear_highlight(),this.container.removeClass("chosen-with-drop"),this.form_field_jq.trigger("chosen:hiding_dropdown",{chosen:this})),this.results_showing=!1},n.prototype.set_tab_index=function(t){var e;if(this.form_field.tabIndex)return e=this.form_field.tabIndex,this.form_field.tabIndex=-1,this.search_field[0].tabIndex=e},n.prototype.set_label_behavior=function(){if(this.form_field_label=this.form_field_jq.parents("label"),!this.form_field_label.length&&this.form_field.id.length&&(this.form_field_label=t("label[for='"+this.form_field.id+"']")),this.form_field_label.length>0)return this.form_field_label.on("click.chosen",this.label_click_handler)},n.prototype.show_search_field_default=function(){return this.is_multiple&&this.choices_count()<1&&!this.active_field?(this.search_field.val(this.default_text),this.search_field.addClass("default")):(this.search_field.val(""),this.search_field.removeClass("default"))},n.prototype.search_results_mouseup=function(e){var s;if((s=t(e.target).hasClass("active-result")?t(e.target):t(e.target).parents(".active-result").first()).length)return this.result_highlight=s,this.result_select(e),this.search_field.focus()},n.prototype.search_results_mouseover=function(e){var s;if(s=t(e.target).hasClass("active-result")?t(e.target):t(e.target).parents(".active-result").first())return this.result_do_highlight(s)},n.prototype.search_results_mouseout=function(e){if(t(e.target).hasClass("active-result")||t(e.target).parents(".active-result").first())return this.result_clear_highlight()},n.prototype.choice_build=function(e){var s,i;return s=t("<li />",{"class":"search-choice"}).html("<span>"+this.choice_label(e)+"</span>"),e.disabled?s.addClass("search-choice-disabled"):((i=t("<a />",{"class":"search-choice-close","data-option-array-index":e.array_index})).on("click.chosen",function(t){return function(e){return t.choice_destroy_link_click(e)}}(this)),s.append(i)),this.search_container.before(s)},n.prototype.choice_destroy_link_click=function(e){if(e.preventDefault(),e.stopPropagation(),!this.is_disabled)return this.choice_destroy(t(e.target))},n.prototype.choice_destroy=function(t){if(this.result_deselect(t[0].getAttribute("data-option-array-index")))return this.active_field?this.search_field.focus():this.show_search_field_default(),this.is_multiple&&this.choices_count()>0&&this.get_search_field_value().length<1&&this.results_hide(),t.parents("li").first().remove(),this.search_field_scale()},n.prototype.results_reset=function(){if(this.reset_single_select_options(),this.form_field.options[0].selected=!0,this.single_set_selected_text(),this.show_search_field_default(),this.results_reset_cleanup(),this.trigger_form_field_change(),this.active_field)return this.results_hide()},n.prototype.results_reset_cleanup=function(){return this.current_selectedIndex=this.form_field.selectedIndex,this.selected_item.find("abbr").remove()},n.prototype.result_select=function(t){var e,s;if(this.result_highlight)return e=this.result_highlight,this.result_clear_highlight(),this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger("chosen:maxselected",{chosen:this}),!1):(this.is_multiple?e.removeClass("active-result"):this.reset_single_select_options(),e.addClass("result-selected"),s=this.results_data[e[0].getAttribute("data-option-array-index")],s.selected=!0,this.form_field.options[s.options_index].selected=!0,this.selected_option_count=null,this.is_multiple?this.choice_build(s):this.single_set_selected_text(this.choice_label(s)),this.is_multiple&&(!this.hide_results_on_select||t.metaKey||t.ctrlKey)?t.metaKey||t.ctrlKey?this.winnow_results({skip_highlight:!0}):(this.search_field.val(""),this.winnow_results()):(this.results_hide(),this.show_search_field_default()),(this.is_multiple||this.form_field.selectedIndex!==this.current_selectedIndex)&&this.trigger_form_field_change({selected:this.form_field.options[s.options_index].value}),this.current_selectedIndex=this.form_field.selectedIndex,t.preventDefault(),this.search_field_scale())},n.prototype.single_set_selected_text=function(t){return null==t&&(t=this.default_text),t===this.default_text?this.selected_item.addClass("chosen-default"):(this.single_deselect_control_build(),this.selected_item.removeClass("chosen-default")),this.selected_item.find("span").html(t)},n.prototype.result_deselect=function(t){var e;return e=this.results_data[t],!this.form_field.options[e.options_index].disabled&&(e.selected=!1,this.form_field.options[e.options_index].selected=!1,this.selected_option_count=null,this.result_clear_highlight(),this.results_showing&&this.winnow_results(),this.trigger_form_field_change({deselected:this.form_field.options[e.options_index].value}),this.search_field_scale(),!0)},n.prototype.single_deselect_control_build=function(){if(this.allow_single_deselect)return this.selected_item.find("abbr").length||this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'),this.selected_item.addClass("chosen-single-with-deselect")},n.prototype.get_search_field_value=function(){return this.search_field.val()},n.prototype.get_search_text=function(){return t.trim(this.get_search_field_value())},n.prototype.escape_html=function(e){return t("<div/>").text(e).html()},n.prototype.winnow_results_set_highlight=function(){var t,e;if(e=this.is_multiple?[]:this.search_results.find(".result-selected.active-result"),null!=(t=e.length?e.first():this.search_results.find(".active-result").first()))return this.result_do_highlight(t)},n.prototype.no_results=function(t){var e;return e=this.get_no_results_html(t),this.search_results.append(e),this.form_field_jq.trigger("chosen:no_results",{chosen:this})},n.prototype.no_results_clear=function(){return this.search_results.find(".no-results").remove()},n.prototype.keydown_arrow=function(){var t;return this.results_showing&&this.result_highlight?(t=this.result_highlight.nextAll("li.active-result").first())?this.result_do_highlight(t):void 0:this.results_show()},n.prototype.keyup_arrow=function(){var t;return this.results_showing||this.is_multiple?this.result_highlight?(t=this.result_highlight.prevAll("li.active-result")).length?this.result_do_highlight(t.first()):(this.choices_count()>0&&this.results_hide(),this.result_clear_highlight()):void 0:this.results_show()},n.prototype.keydown_backstroke=function(){var t;return this.pending_backstroke?(this.choice_destroy(this.pending_backstroke.find("a").first()),this.clear_backstroke()):(t=this.search_container.siblings("li.search-choice").last()).length&&!t.hasClass("search-choice-disabled")?(this.pending_backstroke=t,this.single_backstroke_delete?this.keydown_backstroke():this.pending_backstroke.addClass("search-choice-focus")):void 0},n.prototype.clear_backstroke=function(){return this.pending_backstroke&&this.pending_backstroke.removeClass("search-choice-focus"),this.pending_backstroke=null},n.prototype.search_field_scale=function(){var e,s,i,n,r,o,h;if(this.is_multiple){for(r={position:"absolute",left:"-1000px",top:"-1000px",display:"none",whiteSpace:"pre"},s=0,i=(o=["fontSize","fontStyle","fontWeight","fontFamily","lineHeight","textTransform","letterSpacing"]).length;s<i;s++)r[n=o[s]]=this.search_field.css(n);return(e=t("<div />").css(r)).text(this.get_search_field_value()),t("body").append(e),h=e.width()+25,e.remove(),this.container.is(":visible")&&(h=Math.min(this.container.outerWidth()-10,h)),this.search_field.width(h)}},n.prototype.trigger_form_field_change=function(t){return this.form_field_jq.trigger("input",t),this.form_field_jq.trigger("change",t)},n}()}).call(this);

function refresh() {
    _doClick('$Refresh',this,'_self');
}

function refreshParent() {
    _doClick('$Refresh',this,'_parent');
}

function refreshFields () {
	_doClick('$Refresh', this, '_self', '#_RefreshKW',"")
}

function goBack(){
	console.log(navigator.appName);
	if(navigator.appName == "Microsoft Internet Explorer"){
		//location.href = document.referrer;
		history.back(-2);
		return false;
	}else{
		history.back();
		return false;
	}
}

//Verificar se está em um aparelho mobile
var userAgent = navigator.userAgent.toLowerCase();
var devices = new Array('nokia','iphone','blackberry','sony','lg',
	'htc_tattoo','samsung','symbian','SymbianOS','elaine','palm',
	'series60','windows ce','android','obigo','netfront',
	'openwave','mobilexplorer','operamini');
function mobileDetect(userAgent, devices) {
	for(var i = 0; i < devices.length; i++) {
		if (userAgent.search(devices[i]) > 0) {
			return true;
		}
	}
	return false;
}

function mudaTab(tabActive){
	$("#CA_TabActive").val(tabActive);
}

function showAlertBtn(title, msg, theme , caminho)
{
	$.jAlert({
		'title': title,
		'content': msg,
		'theme': theme,
		'showAnimation': 'fadeInDown',
		'closeBtn': false,
		'btns': [{
	        	'text': 'OK', 
	        	'theme': theme, 
	        	'onClick': function(e, btn){
			           e.preventDefault();
			           eval(caminho);
			           return false;
		        }
		}]
	});	
}

function confirma(msg, confirmCallback, denyCallback)
{
	var tit = "Selecione";
	if(language == "EN"){
		tit = "Confirm";
	}else{
		if(language == "ES"){
			tit = "Seleccione";
		}
	}
	$.jAlert({
		'title': tit, 
		'type': 'confirm',
		'theme': "blue",
		'showAnimation': 'fadeInDown',
		'closeBtn': false,
		'content': msg, 
		'onConfirm': confirmCallback, 
		'onDeny': denyCallback });
}

function msgAlerta(msg, caminho){
	/* msg - texto a ser exibido no alerta
	 * caminho - javascript que será executado após o usuário clicar em "OK"
	 */
	var tit = "Atenção";
	if(language == "EN"){
		tit = "Attention";
	}else{
		if(language == "ES"){
			tit = "Atención";
		}
	}
	showAlertBtn(tit, msg, "red", caminho);
}

function msgSucesso(msg, caminho){
	/* msg - texto a ser exibido no alerta
	 * caminho - javascript que será executado após o usuário clicar em "OK"
	 */
	var tit = "Sucesso";
	if(language == "EN"){
		tit = "Success";
	}else{
		if(language == "ES"){
			tit = "Éxito";
		}
	}
	
	showAlertBtn(tit, msg, "green", caminho);
}

function msgConfirma(msg, confirmCallback, denyCallback){
	/* msg - texto a ser exibido no alerta
	 * confirmCallback - javascript que será executado após o usuário clicar em "Sim"
	 * denyCallback - javascript que será executado após o usuario clica em "Não"
	 */
	confirma(msg, function() {
			eval(confirmCallback);
		}, function() {
			eval(denyCallback);
			return false;		
	});
}

function BloqueiaEdicao(){
	var caminho = location.href;
	//Verifica se o form está em modo de leitura, se não, redireciona
	if (caminho.indexOf("EditDocument") > 0) {
		location.href= caminho.replace("EditDocument", "OpenDocument");
	}
}

$(document).ready(function(){
	
	//MASCARAS
	$(".mask-cpf")	.mask("999.999.999-99");
	$(".mask-cnpj")	.mask("99.999.999/9999-99");
	$(".mask-tel")	.mask("(99) 9999-9999?9");
	$(".mask-telforn")	.mask("9999-9999?9");
	$(".mask-cep")	.mask("99999-999");
	$(".mask-data")	.mask("99/99/9999");
	$(".mask-ano")	.mask("9999");
	$(".mask-data").datepicker({
		dateFormat: "dd/mm/yy",
		dayNamesMin: [ "D", "S", "T", "Q", "Q", "S", "S" ],
		monthNames: [ "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro" ]
	});
	//$(".mask-maxDate")	.mask("99/99/9999");
	$(".mask-maxDate").datepicker({
		dateFormat: "dd/mm/yy",
		maxDate: '0',
		dayNamesMin: [ "D", "S", "T", "Q", "Q", "S", "S" ],
		monthNames: [ "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro" ]
	});
	$('[data-toggle="tooltip"]').tooltip();
	
	//Filtro nos campos select
	$("select").select2();

	
	//VALIDAÇÃO PARA NUMEROS INTEIROS
	var nums = $(".numero");
	nums.on("keypress", function(event){
		var theEvent = event || window.event;
		var key = theEvent.keyCode || theEvent.which;
		key = String.fromCharCode( key );
		var regex = /^[0-9\b]+$/;    // allow only numbers [0-9] 
		if( !regex.test(key)) {
			theEvent.returnValue = false; //para IE 8
			if(theEvent.preventDefault) theEvent.preventDefault(); //para os outros navegadores
		}
	});
	
	//IMPEDIR AUTOCOMPLETE
	$("input").attr("autocomplete", "off");
	
	//NÃO PERMITE CTRL+V
	var num = $(".numero");
	num.on("paste", function(event){
		var theEvent = event || window.event;
		var key = theEvent.keyCode || theEvent.which;
		key = String.fromCharCode( key );
		//var regex = /^[0-9\b]+$/;    // allow only numbers [0-9] 
		if(key) {
			theEvent.returnValue = false; //para IE 8
			if(theEvent.preventDefault) theEvent.preventDefault(); //para os outros navegadores
		}
	});
	
	//TROCA DE MASCARA DO CAMPO CPF-CNPJ 
	var tipoCpf = $(".radio-cpf");
	tipoCpf.on('change', function(event) {
		/*if (event.preventDefault){
			event.preventDefault();
		}else{
			event.returnValue = false;
		}*/
		
		tipocpfselecionado = $("input[name="+this.name+"]:checked").val();

		var cpf = $(".cpf-cnpj");
		cpf.removeClass("mask-cpf");
		cpf.removeClass("mask-cnpj");
		if (tipocpfselecionado == "0"){
			cpf.mask("999.999.999-99");
			cpf.addClass("mask-cpf");
		}else if (tipocpfselecionado == "1"){
			cpf.mask("99.999.999/9999-99");
			cpf.addClass("mask-cnpj");
		
		}else if (tipocpfselecionado == "2"){
			cpf.removeClass("mask-cpf");
			cpf.removeClass("mask-cnpj");

		}	
	});
	
	// VALIDAÇÃO DE EMAIL
	var emails = $(".email");
	emails.on('blur', function(event){
		var str = this.value;
	    var filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	    if (!(filtro.test(str))) {
	    	if (str != "") {
	    		alert("Por favor insira um email válido!");
		    	this.value= "";
	    	}
	    }
	});	
	
	//VERIFICA OS CAMPOS OBRIGATÓRIO E CHAMA O AGENTE QUE SALVA O DOCUMENTO
	$(".btnSalvar").on("click", function(event){
	
		if (event.preventDefault){
			event.preventDefault();
		}else{
			event.returnValue = false;
		}

		var campos = $(".required");
		var divMsg = $("#divMsg");
		var camposObrigPreenchidos = 0; //campos obrigatórios preenchidos
		var totalCamposObrig = campos.length; //total de campos obrigatórios

		//limpa a msg de erro
		divMsg.attr("display", "none");//esconde a msg de erro
		divMsg.removeClass("alert-warning");
		divMsg.removeClass("alert-danger");
		divMsg.removeClass("alert-success");
		divMsg.removeClass("alert-info");

		//limpa todos os campos com a classe has-error
		var erros = $(".is-invalid");
		erros.each(function(){
			$(this).removeClass("is-invalid");
		});

		//vai em cada campo com a classe required e verifica se está preenchido
		campos.each(function () {
	
			if ($(this).prop("type") == "checkbox" || $(this).prop("type") == "radio"){
				//Se o campo for do tipo checkbox ou radio, verifica se possui algum campo marcado (checked)
				var contaCheck = $("input[name="+ $(this)[0].name +"]:checked").length;
				$("input[name="+ $(this)[0].name +"]").parent().removeClass("rbInvalid");
				if (contaCheck == 0){
					//$("input[name="+ $(this)[0].name +"]").parent().attr("style","color:#e4002b;");
					$("input[name="+ $(this)[0].name +"]").parent().addClass("rbInvalid");
				}else{
					//$("input[name="+ $(this)[0].name +"]").parent().attr("style","color:black;");
					camposObrigPreenchidos += 1;
				}
			}else {
				if ($(this).val() == ""){		
					//$(this).parent().addClass("has-error");
					$(this).addClass("is-invalid");
					console.log($(this).attr('class'));
					//avisa quais os campos precisam ser preenchidos
					if ($(this).is("select")) {
						//Se for um campo select, estará usando o "chosen" para filtrar oa elementos, logo preciso marca o chosen em vermelho
						$(this).next().children().addClass("is-invalid");
					}
				}else{
					
					//Se o campo não estiver vazio, verfica se possui a classe "valor" ou "numero. Se sim, verificase o campo está com value "0" ou "0,00"
					if ($(this).hasClass("valor") || $(this).hasClass("numero")) {
						if($(this).val() == "0,00" || $(this).val() == "0"){
							$(this).addClass("is-invalid");
						}else{
							camposObrigPreenchidos += 1;
						}
					}else{
						camposObrigPreenchidos += 1;
					}
				}
			}
		});

		
		if (camposObrigPreenchidos == totalCamposObrig){
			
			var botao = $(this).attr("botao"); //busca o valor do atributo "botao" do campo
			if (botao == null) {//caso esteja vazio chama o salvarForm por padrão
				$(".salvarform")[0].click();
			}else{//clica no botÃƒÂ£o com o id que estiver no atributo "botao" do campo;
				$("#"+ botao +"")[0].click();
			}
			return false;
		}else{
			divMsg.attr("style", "display:block; margin: 0;");
			divMsg.addClass("alert-warning");
			if(language == "EN"){
				divMsg.text("There are required fields that are not filled out, please review the form!");
			}else{
				if(language == "ES"){
					divMsg.text("Hay campos obligatorios que no se han cumplido, por favor revise el formulario!");
				}else{
					divMsg.text("Há campos obrigatórios que não foram preenchidos, por favor reveja o formulário!");
				}
			}
				
			
		}	
	});
	
	//VALIDAÇÃO DE CAMPOS MONETÁRIOS
	$('.valor').keyup(function(event){
	if (window.navigator.language === undefined || window.navigator.language.substring(0,2) == "en"){
	
	    var v = $(this).val();
	    v=v.replace(/\D/g,'');
	    v=v.replace(/(\d{1,2})$/, '.$1');  
	    v=v.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');  
	    //v = v != ''?'R$ '+v:'';
	    v = v != ''?''+v:'';
	    //$(this).val(v);
	//});
	}else{
		//$('.valor').keyup(function(event){
		    var v = $(this).val();
		    v=v.replace(/\D/g,'');
		    v=v.replace(/(\d{1,2})$/, ',$1');  
		    v=v.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');  
		    //v = v != ''?'R$ '+v:'';
		    v = v != ''?''+v:'';
		   // $(this).val(v);
	//});
	}
    $(this).val(v);
});/*
	
	//VALIDAÇÃO DE CAMPOS MONETÁRIOS
	var valores = $(".valor");
	valores.keyup(function(event){
		var v = $(this).val();
		
		v=v.replace(/\D/g,"") // permite digitar apenas numero 
		v=v.replace(/[^\d\.\,]/g,"") // permite digitar apenas numero
		if (window.navigator.language === undefined || window.navigator.language.substring(0,2) == "en"){
		//MASCARA PARA IDIOMA INGLES
			v=v.replace(/(\d{1})(\d{14})$/,"$1,$2") // coloca ponto antes dos ultimos digitos 
			v=v.replace(/(\d{1})(\d{11})$/,"$1,$2") // coloca ponto antes dos ultimos 11 digitos 
			v=v.replace(/(\d{1})(\d{8})$/,"$1,$2") // coloca ponto antes dos ultimos 8 digitos 
			v=v.replace(/(\d{1})(\d{5})$/,"$1,$2") // coloca ponto antes dos ultimos 5 digitos 
			v=v.replace(/(\d{1})(\d{0,2})$/,"$1.$2") // coloca virgula antes dos ultimos 2 digitos 
		}else{
			//MASCARA PARA IDIOMA PORTUGUES
			v=v.replace(/(\d{1})(\d{14})$/,"$1.$2") // coloca ponto antes dos ultimos digitos 
			v=v.replace(/(\d{1})(\d{11})$/,"$1.$2") // coloca ponto antes dos ultimos 11 digitos 
			v=v.replace(/(\d{1})(\d{8})$/,"$1.$2") // coloca ponto antes dos ultimos 8 digitos 
			v=v.replace(/(\d{1})(\d{5})$/,"$1.$2") // coloca ponto antes dos ultimos 5 digitos 
			v=v.replace(/(\d{1})(\d{0,2})$/,"$1,$2") // coloca virgula antes dos ultimos 2 digitos
		}
		$(this).val(v);
	});*/
	
	//VALIDAÇÃO DE CPF
	function validarCPF(cpf) {  
	    cpf = cpf.replace(/[^\d]+/g,'');    
	    if(cpf == '') return false; 
	    // Elimina CPFs invalidos conhecidos    
	    if (cpf.length != 11 || 
	        cpf == "00000000000" || 
	        cpf == "11111111111" || 
	        cpf == "22222222222" || 
	        cpf == "33333333333" || 
	        cpf == "44444444444" || 
	        cpf == "55555555555" || 
	        cpf == "66666666666" || 
	        cpf == "77777777777" || 
	        cpf == "88888888888" || 
	        cpf == "99999999999")
	        return false;       
	    // Valida 1o digito 
	    add = 0;    
	    for (i=0; i < 9; i ++)       
	        add += parseInt(cpf.charAt(i)) * (10 - i);  
	        rev = 11 - (add % 11);  
	        if (rev == 10 || rev == 11)     
	            rev = 0;    
	        if (rev != parseInt(cpf.charAt(9)))     
	            return false;       
	    // Valida 2o digito 
	    add = 0;    
	    for (i = 0; i < 10; i ++)        
	        add += parseInt(cpf.charAt(i)) * (11 - i);  
	    rev = 11 - (add % 11);  
	    if (rev == 10 || rev == 11) 
	        rev = 0;    
	    if (rev != parseInt(cpf.charAt(10)))
	        return false;
	    
	    return true;   
	}
	
	//VALIDAÇÃO DE CNPJ
	function validarCNPJ(CNPJ) {
		
		//if(language == "PT"){
			erro = new String;
			if (CNPJ.length < 18) erro += msg1; 

			if ((CNPJ.charAt(2) != ".") || (CNPJ.charAt(6) != ".") || (CNPJ.charAt(10) != "/") || (CNPJ.charAt(15) != "-")){
				if (erro.length == 0) erro += "é necessário preencher corretamente o número do CNPJ! \n\n";
			}
		
			if (CNPJ == "00.000.000/0000-00"){
				erro = "CNPJ inválido!";
			}

		//substituir os caracteres que não são números
		if(document.layers && parseInt(navigator.appVersion) == 4){
			x = CNPJ.substring(0,2);
			x += CNPJ. substring (3,6);
			x += CNPJ. substring (7,10);
			x += CNPJ. substring (11,15);
			x += CNPJ. substring (16,18);
			CNPJ = x; 
		} else {
			CNPJ = CNPJ. replace (".","");
			CNPJ = CNPJ. replace (".","");
			CNPJ = CNPJ. replace ("-","");
			CNPJ = CNPJ. replace ("/","");
		}
		var nonNumbers = /\D/;
		if (nonNumbers.test(CNPJ)) erro += "A verificação de CNPJ suporta apenas números! \n\n"; 

		var a = [];
		var b = new Number;
		var c = [6,5,4,3,2,9,8,7,6,5,4,3,2];
		for (i=0; i<12; i++){
			a[i] = CNPJ.charAt(i);
			b += a[i] * c[i+1];
		}

		if ((x = b % 11) < 2) { 
			a[12] = 0 
		} else { 
			a[12] = 11-x 
		}

		b = 0;
		for (y=0; y<13; y++) {
		 	b += (a[y] * c[y]); 
		}

		if ((x = b % 11) < 2) { 
			a[13] = 0; 
		} else { 
			a[13] = 11-x; 
		}

		if ((CNPJ.charAt(12) != a[12]) || (CNPJ.charAt(13) != a[13])){
			erro +="Dígito verificador com problema!";
		}

		if (erro.length > 0){
			//alert(erro);
			return false;
		}
		return true;
	//}
	}
	
	/*$(".mask-cpf").on('blur', function(event) {
		if (event.preventDefault){
			event.preventDefault();
		}else{
			event.returnValue = false;
		}
		var numCpf = $(this).val();
		if (!validarCPF(numCpf)){
			if (numCpf != ""){
				alert("CPF InvÃƒÂ¡lido!");
				$(this).val("");
			}
		}
	});
	
	$(".mask-cnpj").on('blur', function(event) {
		if (event.preventDefault){
			event.preventDefault();
		}else{
			event.returnValue = false;
		}
		var numCnpj = $(this).val();
		if(!validarCNPJ(numCnpj)){
			if (numCnpj != ""){
				alert("CNPJ InvÃƒÂ¡lido!");
				$(this).val("");
			}
		}
	});*/
	
	$(".cpf-cnpj").on('blur', function(event) {
		if (event.preventDefault){
			event.preventDefault();
		}else{
			event.returnValue = false;
		}
		if ($(this).hasClass("mask-cpf")) {
			var numCpf = $(this).val();
			if (!validarCPF(numCpf)){
				if (numCpf != ""){
					alert("CPF Inválido!");
					$(this).val("");
				}
			}
		}else if ($(this).hasClass("mask-cnpj")) {
			var numCnpj = $(this).val();
			if(!validarCNPJ(numCnpj)){
				if (numCnpj != ""){
					alert("CNPJ Inválido!");
					$(this).val("");
				}
			}
		}
	});
	
	//QUANDO INSERIR UMA DATA INICIAL, A DATA FINAL RECEBE O MESMO VALOR
	var dtini = $(".dtini");
	dtini.on("change", function(){
		var inicio = $(this);
		var termino = $(".dtfim");
		
		termino.val(inicio.val());
	});
	
	//AO ALTERAR A DATA FINAL VERIFICA SE É MAIOR QUE A DATA INICIAL
	var dtfim = $(".dtfim");
	dtfim.on("change", function(){
		var inicio = $(".dtini");
		var termino = $(this);
		
		var data =  inicio.val().split("/");
		var dia = data[0]; 
		var mes = data[1];
		var ano = data[2];
		var dtInicio = new Date(mes+"/"+dia+"/"+ano);
		
		data =  termino.val().split("/");
		dia = data[0]; 
		mes = data[1];
		ano = data[2];
		var dtTermino = new Date(mes+"/"+dia+"/"+ano);
		
		if (dtTermino < dtInicio){
			termino.val(inicio.val());
		}
	});
	
	//PAGINAÇÃO
	$("#Pages").on("change", function(){
		var viewName = $("#ViewNameDiv").text();
		location.href='./'+ viewName + '?OpenView&start=1&count='+ $(this).val();
	});
	$(".itemPage").on("click", function(event){
		if (event.preventDefault){
			event.preventDefault();
		}else{
			event.returnValue = false;
		}
		var viewName = $('#ViewNameDiv').text();
		var count = $('#ParamCountDiv').text();
		var page = $(this).attr("page");
		page = Number(page) - 1
		
		if (page == 0){
			count = Number(count)
		}else{
			count = Number(count) * (Number(page));
		}
		$("#conteudo").append("<div class='overlay'><i class='fa fa-refresh fa-spin'></i></div>");
		$.ajax({
			url: viewName + '?ReadViewEntries&start=1&count=' + count,
			method: 'get',
			datatype: 'text'
		})
		.done(function(resp){
			var resp;
			if(navigator.appName.indexOf('Internet Explorer')>0){
			    resp = resp.xml
			}else{
			    resp = new XMLSerializer().serializeToString(resp); 
			}
			var posIndex = resp.lastIndexOf('position');
			var ultPos = '';
			if (posIndex > 0) { //pega a posição do ultimo documento
				resp = resp.substring(resp.indexOf('\"', posIndex) +1);
				ultPos = resp.substring(0, resp.indexOf('\"'));
				
				PageNumber = page - 1;
				if ( page == '0' ){
					start = 1
				}else{
					start = ultPos;
				}
				ParamCount = $("#ParamCountDiv").text();
				var viewName = $("#ViewNameDiv").text();
				url = './' + viewName +'?openview&start='+start + '&count=' + ParamCount;
				location.href = url;
			}	
		})
	});
	
	//remover anexos
	$("#RemAnexo").on("click", function(event){
		if (event.preventDefault){
			event.preventDefault();
		}else{
			event.returnValue = false;
		}
		var baseAtual = $("#BaseAtual").val();
		
		//Busca os nomes dos anexos marcados apra exclusão
		var vetAnexos = $("input[name='%%Detach']:checked");
		var anexos = "0";
	  
		for (i = 0; i < vetAnexos.length; i++){
			anexos += "," + vetAnexos[i].value;
		}
			
		if (anexos == '0') {
			var tit = "Você deve selecionar o documento primeiro!";
			if(language == "EN"){
				tit = "You must select the document first!";
			}else{
				if(language == "ES"){
					tit = "Usted debe seleccionar el documento primero!";
				}
			}
			  alert(tit);
			  return false;
		}
		//Busca o id do documento
		var doc = $("#idDoc").val();
		
		console.log(anexos);
		console.log(doc);
		
		//chamar o agent e enviar a informação do id do documento e os anexos que serão apagados;
		caminho = "http://" + location.host; //server name
		
		if (baseAtual != null){
			caminho += "/" + baseAtual;
		}else{
			//PEGA O CAMINHO DA URL ATE O CAMINHO DA BASE E IGNORA O RESTANTE
			var base = location.pathname;
			var index = base.indexOf(".nsf");
			base = base.substring(0, index + 4);
			caminho += base;
		}
		caminho += "/(ag_RemoverAnexos)?OpenAgent&anexos="+ anexos + "&doc=" + doc;
		
		window.location.href = caminho;
	});
	
	$('#BuscarCep').click(function(){
		//'CA_Logradouro','CA_Bairro','CA_Cidade','CA_Estado'
		//Melhorar essa função: criar função onde serão passados os ids dos campos que serão preenchidos
		//Com isso será possivel ter dois endereços no emsmo formulário
		var valCep = $.trim($("#CA_CEP").val());
		if(valCep != ""){

			$("#divMsg").html('(Aguarde, consultando CEP ...)');
			$("#divMsg").addClass("alert-info");
			$("#divMsg").toggle();
			$.ajax({
				//url: 'http://cep.republicavirtual.com.br/web_cep.php',
				url: 'https://viacep.com.br/ws/'+valCep+'/json/',
				type: 'get',
				datatype: 'json',
				crossdomain: true,
				//data: {
				//	cep: valCep,
				//	formato: 'json'
				//},
				success: function(res){
					console.log(res);
					if (res.cep != "") {
						$("#CA_Logradouro").val(res.logradouro);
						$("#CA_Bairro").val(res.bairro);
						$("#CA_Cidade").val(res.localidade);
						$("#CA_Estado").val(res.uf);
						$("#CA_Estado").trigger('change');

					}
					else if (res.resultado == 2){
						$("#CA_Logradouro").val("");
						$("#CA_Bairro").val("");
						$("#CA_Cidade").val(res.cidade);
						$("#CA_Estado").val(res.uf);
						$("#CA_Estado").trigger('change');

					}
					else{
						$("#CA_CEP").val("");
						var tit = "CEP não encontrado!";
						if(language == "EN"){
							tit = "Zipcode not found!";
						}else{
							if(language == "ES"){
								tit = "Código Postal no encontrado!";
							}
						}
						alert(tit);
					}
					
					$("#divMsg").toggle();
					$("#divMsg").html('');
					$("#divMsg").removeClass("alert-info");
				},
				error: function(){
					$("#CA_CEP").val("");
					alert("Erro ao buscar o CEP!");
				}
			});
			
			
		}
		else{
			var tit = "Por favor digite um CEP para pesquisar!";
			if(language == "EN"){
				tit = "Please enter a zip code to search";
			}else{
				if(language == "ES"){
					tit = "Por favor, introduzca un código postal para buscar!";
				}
			}
			alert(tit);
		}
	});
	
});

function GetQueryString(param)
{
    var url = window.location.search.substring(1);
    var urlVars = url.split('&');

    for (var i = 0; i < urlVars.length; i++)
    {
        var nomeParam = urlVars[i].split('=');
        if (nomeParam[0] == param)
        {
            return nomeParam[1];
        }
    }
}
//FUNCÇÃO PARA SELECIONAR OS DOCUMENTOS DA VIEW E ENVIAR PARA O AGENTE PASSADO POR PARAMETRO
function SelecionaDocsAnexos(id, usuario, agent, campo, view){
	

	// A view será usada para fazer o retorno depois que o documento são salvo;
	/*if (event.preventDefault){
		event.preventDefault();
	}else{
		event.returnValue = false;
	}*/

	var marcados = $("input[name='%%Detach']:checked");
	

	var baseAtual = $("#BaseAtual").val();
	var listaDocs = "0";
	var caminho = "";
	var cont	= 0;
		
	marcados.each(function(){
		listaDocs += "," + $(this).val(); 
		cont = cont + 1
	});

	if (listaDocs == '0') {
		var tit = "Você deve selecionar o documento desejado!";
		if(language == "EN"){
			tit = "Please select the document!";
		}else{
			if(language == "ES"){
				tit = "¡Usted debe seleccionar el documento deseado!";
			}
		}
	  alert(tit);
	  return false;
	}else{

		caminho = "http://" + location.host; //server name
	
		if (baseAtual != null){
			caminho += "/" + baseAtual;
		}else{
			//PEGA O CAMINHO DA URL ATE O CAMINHO DA BASE E IGNORA O RESTANTE
			var base = location.pathname;
			var index = base.indexOf(".nsf");
			base = base.substring(0, index + 4);
			caminho += base;
		}	

		if (agent == "fo_Demanda"){
			var id = listaDocs.substr(2);
			caminho += "/"+ agent +"?Openform&ParentUNID=" + id + "&FLAG=1" ;
			window.location.href = caminho;
		}else{
		
			caminho += "/("+ agent +")?OpenAgent&id="+ id  + "&docs=" + listaDocs + "&usuario="+ usuario + "&campo="+ campo + "&view="+ view;

			window.location.href = caminho
		}
	}
}




function SelecionaDocs(view, usuario, agent){
	// A view será usada para fazer o retorno depois que o documento é salvo;
	/*if (event.preventDefault){
		event.preventDefault();
	}else{
		event.returnValue = false;
	}*/
	
	
	var marcados = $("input[name='$$SelectDoc']:checked");
	var baseAtual = $("#BaseAtual").val();
	var listaDocs = "0";
	var caminho = "";
	var cont	= 0;
		
	marcados.each(function(){
		listaDocs += "," + $(this).val(); 
		cont = cont + 1
	});

	if (agent == "ag_ExcluirDeslocamento" || agent == "ag_ExcluirItemContrato" || agent == "dlg_GerarPedido" ){
		if (cont > 1){
			var tit = "Você deve selecionar apenas um documento!";
			if(language == "EN"){
				tit = "Please select just one document!";
			}else{
				if(language == "ES"){
					tit = "¡Usted debe seleccionar solamente uno documento!";
				}
			}
			alert(tit);
			return false;
		}
	}

	if (listaDocs == '0') {
		var tit = "Você deve selecionar o documento desejado!";
		if(language == "EN"){
			tit = "Please select the document!";
		}else{
			if(language == "ES"){
				tit = "¡Usted debe seleccionar el documento deseado!";
			}
		}
	  alert(tit);
	  return false;
	}else{

		caminho = "http://" + location.host; //server name
	
		if (baseAtual != null){
			caminho += "/" + baseAtual;
		}else{
			//PEGA O CAMINHO DA URL ATE O CAMINHO DA BASE E IGNORA O RESTANTE
			var base = location.pathname;
			var index = base.indexOf(".nsf");
			base = base.substring(0, index + 4);
			caminho += base;
		}	

		if (agent == "dlg_GerarPedido"){
			var id = listaDocs.substr(2);
			var idpedido = usuario
			caminho += "/"+ agent +"?Openform&docs=" + id + "&idped=" + idpedido ;
			window.open(caminho,"_blank");
		}else{
			caminho += "/("+ agent +")?OpenAgent&docs=" + listaDocs + "&view="+ view + "&usuario="+ usuario;
			window.location.href = caminho
		}
	}
}

function SelecDocsOnColumn(view, idSelec, usuario, agent){
	// A view será usada para fazer o retorno depois que o documento é salvo;
	/*if (event.preventDefault){
		event.preventDefault();
	}else{
		event.returnValue = false;
	}*/
	
	
	var marcados = $("input[name='$$SelectDoc']:checked");
	var baseAtual = $("#BaseAtual").val();
	var listaDocs = "0";
	var caminho = "";
	var cont	= 0;
		
//	marcados.each(function(){
//		listaDocs += "," + $(this).val(); 
//		cont = cont + 1
//	});

//	if (agent == "ag_ExcluirDeslocamento" || agent == "ag_ExcluirItemContrato" || agent == "dlg_GerarPedido" ){
//		if (cont > 1){
//			alert('Você deve selecionar apenas um documento!');
//			return false;
//		}
//	}

//	if (listaDocs == '0') {
//	  alert('Você deve selecionar o documento desejado!');
//	  return false;
//	}else{

		caminho = "http://" + location.host; //server name
	
		if (baseAtual != null){
			caminho += "/" + baseAtual;
		}else{
			//PEGA O CAMINHO DA URL ATE O CAMINHO DA BASE E IGNORA O RESTANTE
			var base = location.pathname;
			var index = base.indexOf(".nsf");
			base = base.substring(0, index + 4);
			caminho += base;
		}	

		if (agent == "dlg_GerarPedido"){
			var id = listaDocs.substr(2);
			var idpedido = usuario
			caminho += "/"+ agent +"?Openform&docs=" + idSelec + "&idped=" + idpedido ;
			window.open(caminho,"_blank");
		}else{
			caminho += "/("+ agent +")?OpenAgent&docs=" + idSelec + "&view="+ view + "&usuario="+ usuario;
			window.location.href = caminho
		}
//	}
}

function SelecionaDocsComJust(view, id, agent, mostrar){
	// A view será usada para fazer o retorno depois que o documento é salvo;
	/*if (event.preventDefault){
		event.preventDefault();
	}else{
		event.returnValue = false;
	}*/

	var marcados = $("input[name='$$SelectDoc']:checked");
	var baseAtual = $("#BaseAtual").val();
	var listaDocs = "0";
	var caminho = "";
	var cont	= 0;
	var acao 	= "";
	
	if (view == "vi_PedidosBalaoIdPai?OpenView"){
		acao = "excluirPedidoFilho"; 
	}else{
		acao = "excluirForn";
	}
		
	marcados.each(function(){
		listaDocs += "," + $(this).val(); 
		cont = cont + 1
	});

	if (agent == "ag_ExcluirDeslocamento" || agent == "ag_ExcluirItemContrato"){
		if (cont > 1){
			var tit = "Você deve selecionar apenas um documento!";
			if(language == "EN"){
				tit = "Please select just one document!";
			}else{
				if(language == "ES"){
					tit = "¡Usted debe seleccionar solamente uno documento!";
				}
			}
			alert(tit);
			return false;
		}
	}

	if (listaDocs == '0') {
		var tit = "Você deve selecionar o documento desejado!";
		if(language == "EN"){
			tit = "Please select the document!";
		}else{
			if(language == "ES"){
				tit = "¡Usted debe seleccionar el documento deseado!";
			}
		}
	  alert(tit);
	  return false;
	}else{

		caminho = "http://" + location.host; //server name
	
		if (baseAtual != null){
			caminho += "/" + baseAtual;
		}else{
			//PEGA O CAMINHO DA URL ATE O CAMINHO DA BASE E IGNORA O RESTANTE
			var base = location.pathname;
			var index = base.indexOf(".nsf");
			base = base.substring(0, index + 4);
			caminho += base;
		}

		if (mostrar == "S") {
			var form = window.document.forms[0]
			var pathname = window.location.pathname;
			var path = pathname.substring(0,(pathname.lastIndexOf('.nsf')+5));
			var winFeature = "Width=650px; Height=450px; top=100, left=350; help=no; status=no; directories  =0; scroll=yes; resizable=yes";
			var url = "http://" + window.location.host + "/" + path + "dlg_Justificativa?OpenForm&acao="+acao+"&docs=" + listaDocs + "&view="+ view + "&id="+ id;
			window.open(url, "_blank", winFeature);
		}else{
			caminho += "/("+ agent +")?OpenAgent&docs=" + listaDocs + "&view="+ view + "&id="+ id;
			window.location.href = caminho
		}
		

		/*if (agent == "fo_Demanda"){
			var id = listaDocs.substr(2);
			caminho += "/"+ agent +"?Openform&ParentUNID=" + id + "&FLAG=1" ;
			window.location.href = caminho;
		}else{
			caminho += "/("+ agent +")?OpenAgent&docs=" + listaDocs + "&view="+ view + "&usuario="+ usuario;
			window.location.href = caminho
		}*/
	}
}

function DocComJust(view, idPai, idSelec, agent, mostrar){
	// A view será usada para fazer o retorno depois que o documento é salvo;
	/*if (event.preventDefault){
		event.preventDefault();
	}else{
		event.returnValue = false;
	}*/

	//var marcados = $("input[name='$$SelectDoc']:checked");
	var baseAtual = $("#BaseAtual").val();
	var listaDocs = "0";
	var caminho = "";
	var cont	= 0;
	var acao 	= "";
	
	if (view == "vi_PedidosBalaoIdPai"){
		acao = "excluirPedidoFilho"; 
	}else{
		acao = "excluirForn";
	}
		
	//marcados.each(function(){
		//listaDocs += "," + $(this).val(); 
		//cont = cont + 1
	//});
	
	//if (listaDocs == '0') {
	  //alert('Você deve selecionar o documento desejado!');
	  //return false;
	//}else{

		caminho = "http://" + location.host; //server name
	
		if (baseAtual != null){
			caminho += "/" + baseAtual;
		}else{
			//PEGA O CAMINHO DA URL ATE O CAMINHO DA BASE E IGNORA O RESTANTE
			var base = location.pathname;
			var index = base.indexOf(".nsf");
			base = base.substring(0, index + 4);
			caminho += base;
		}
		
		if (mostrar == "S") {
			var form = window.document.forms[0];
			var pathname = window.location.pathname;
			var path = pathname.substring(0,(pathname.lastIndexOf('.nsf')+5));
			var winFeature = "Width=650px; Height=450px; top=100, left=350; help=no; status=no; directories  =0; scroll=yes; resizable=yes";
			var url = "http://" + window.location.host + "/" + path + "dlg_Justificativa?OpenForm&acao="+acao+"&docs=" + idSelec + "&view="+ view + "&id="+ idPai;
			window.open(url, "_blank", winFeature);		
		}else{
			caminho += "/("+ agent +")?OpenAgent&just="+mostrar+"&docs=" + idSelec + "&view="+ view + "&id="+ idPai;
			window.location.href = caminho
		}
		
		/*if (agent == "fo_Demanda"){
			var id = listaDocs.substr(2);
			caminho += "/"+ agent +"?Openform&ParentUNID=" + id + "&FLAG=1" ;
			window.location.href = caminho;
		}else{
			caminho += "/("+ agent +")?OpenAgent&docs=" + listaDocs + "&view="+ view + "&usuario="+ usuario;
			window.location.href = caminho
		}*/
	//}
}


function ExibeMsg(tipo, msg){
	//função que mostra a div de msg, sendo mensgaem de sucesso ou alerta
	/*tipos de msg
	 * 0 -> success/ sucesso / verde
	 * 1 -> warning/ alerta / amarelo
	 * 2 -> danger/ perigo / vermelho
	 * 3 -> info / informaÃƒÂ§ÃƒÂ£o / azul
	 */
	var divMsg = $("#divMsg");
	var tipoMsg = "";
	divMsg.attr("display", "none");//esconde a msg de erro
	divMsg.removeClass("alert-success");
	divMsg.removeClass("alert-warning");
	divMsg.removeClass("alert-danger");
	divMsg.removeClass("alert-info");
	
	switch(tipo){
		case 0: tipoMsg = "alert-success"; 	break;
		case 1: tipoMsg = "alert-warning"; 	break;
		case 2: tipoMsg = "alert-danger"; 	break;
		case 3: tipoMsg = "alert-info"; 	break;
		default: break;
	}
	
	divMsg.attr("style", "display:block");
	divMsg.addClass(tipoMsg);
	divMsg.text(msg);	
}

function SelecionaDocsExcluirComJust(view, id, agent, mostrar){
	//Exibe a mensagem de confirmaçãoo antes de excluir, 
	//se o usuário escolher sim, continua com o agente
	// se não, não faz nada

	var tit = "Tem certeza que deseja excluir esse item?";
	if(language == "EN"){
		tit = "Are you sure you want to delete this item?";
	}else{
		if(language == "ES"){
			tit = "¿Está seguro de que desea eliminar este elemento?";
		}
	}
	msgConfirma(tit, 
			"SelecionaDocsComJust('"+view+"', '"+id+"', '"+agent+"', '"+mostrar+"')",
			"");
}

function DocExcluirComJust(view, idPai, idSelec, agent, mostrar){
	//Exibe a mensagem de confirmaçãoo antes de excluir, 
	//se o usuário escolher sim, continua com o agente
	// se não, não faz nada

	var tit = "Tem certeza que deseja excluir esse item?";
	if(language == "EN"){
		tit = "Are you sure you want to delete this item?";
	}else{
		if(language == "ES"){
			tit = "¿Está seguro de que desea eliminar este elemento?";
		}
	}
	msgConfirma(tit, 
			"DocComJust('"+view+"', '"+idPai+"', '"+idSelec+"', '"+agent+"', '"+mostrar+"')",
			"");
}

function SelecionaDocsExcluir(view, usuario, agent){
	//Exibe a mensagem de confirmaçãoo antes de excluir, 
	//se o usuário escolher sim, continua com o agente
	// se não, não faz nada
	var tit = "Tem certeza que deseja excluir esse item?";
	if(language == "EN"){
		tit = "Are you sure you want to delete this item?";
	}else{
		if(language == "ES"){
			tit = "¿Está seguro de que desea eliminar este elemento?";
		}
	}
	msgConfirma(tit, 
			"SelecionaDocs('"+view+"', '"+usuario+"', '"+agent+"')",
			"");
}

function SelecionaDocsExcluirAnexos(id, usuario, agent, campo, view){
	//alert(id);
	//Exibe a mensagem de confirmação antes de excluir, 
	//se o usuário escolher sim, continua com o agente
	// se não, não faz nada
	var tit = "Tem certeza que deseja excluir esse item?";
	if(language == "EN"){
		tit = "Are you sure you want to delete this item?";
	}else{
		if(language == "ES"){
			tit = "¿Está seguro de que desea eliminar este elemento?";
		}
	}
	msgConfirma(tit, 
			"SelecionaDocsAnexos('"+id+"', '"+usuario+"', '"+agent+"', '"+campo+"', '"+view+"')",
			"");
}

function pesquisar(){
	var view = 'vi_PesqGeral'
	var chave = $("#chave").val();
	var query = '';
	var url = '';
	//var baseContato = $("#baseContatos").val();

	var tit = "Informe uma chave para pesquisa!";
	if(language == "EN"){
		tit = "Please enter a search key!";
	}else{
		if(language == "ES"){
			tit = "¡Introduzca una clave de búsqueda!";
		}
	}
	
	if ( chave == '' | chave == 'Chave para pesquisa') {
	  alert(tit);
	 return false;
	}
	
	query = chave+"&view="+view;	

	url = baseurl + view + "?SearchView&start=1&count=15" + "&Query="+ query;

	window.location = url;
	//window.open(url, "conteudo");
	//zera os valores da pesquisa
	//$('#search_param').val("");
	$("#chave").val("");
	//$('.search-panel span#search_concept').text("Selecione...");
}

function chamarRelatorio(){	
	var rel = document.getElementById("CA_Relatorio").options[document.getElementById("CA_Relatorio").selectedIndex].text;

	var tit = "O filtro -Relatorio- deve ser informado!";
	if(language == "EN"){
		tit = "The -Report- filter must be informed!";
	}else{
		if(language == "ES"){
			tit = "¡El filtro -Informe- debe ser informado!";
		}
	}
	if (rel == '' | rel == '0'){
		alert(tit);
		return '';
	} 
	
	switch(rel)
	{
		case "Gerencial":
			//var forn = document.getElementById("CA_Fornecedor").options[document.getElementById("CA_Fornecedor").selectedIndex].text;
			var cont =  document.getElementById("CA_Contrato").options[document.getElementById("CA_Contrato").selectedIndex].text;
			var prod = document.getElementById("CA_Produto").options[document.getElementById("CA_Produto").selectedIndex].text;
		    var dem = document.getElementById("CA_Tipo").options[document.getElementById("CA_Tipo").selectedIndex].text;
    		var subt = document.getElementById("CA_Requisitante").options[document.getElementById("CA_Requisitante").selectedIndex].text;
		    var stat = document.getElementById("CA_Cliente").options[document.getElementById("CA_Cliente").selectedIndex].value;
    		var aprov = document.getElementById("CA_Projeto").options[document.getElementById("CA_Projeto").selectedIndex].value;
    		if(aprov != "TODOS"){
    			
    			var numvoto = document.getElementById("CA_NumVoto").value;
    			
    		}
    		var tPag = document.getElementById("CA_TipoPagamento").value;
   		    var diret = document.getElementById("CA_Diretoria").options[document.getElementById("CA_Diretoria").selectedIndex].text;
   		    var ger = document.getElementById("CA_Gerencia").options[document.getElementById("CA_Gerencia").selectedIndex].text;   		     
   		    var coord = document.getElementById("CA_Coordenacao").options[document.getElementById("CA_Coordenacao").selectedIndex].text;   		     
   		    var area = document.getElementById("CA_Area").options[document.getElementById("CA_Area").selectedIndex].text;   		     
			break;
		case "Financeiro":
			var cont =  document.getElementById("CA_Contrato").options[document.getElementById("CA_Contrato").selectedIndex].text;
			if(cont=="TODOS"){
				var data = document.getElementById("CA_DatVigInicial").value;
				var data2 = document.getElementById("CA_DaVigFinal").value;
			}
			break;
		case "COSUP":
				var prod = document.getElementById("CA_Produto").options[document.getElementById("CA_Produto").selectedIndex].text;
		
			break;
		case "Saidas Produtos":
			var dem = document.getElementById("CA_Demanda").options[document.getElementById("CA_Demanda").selectedIndex].text;
  			//var cid   =  document.getElementById("CA_CID").options[document.getElementById("CA_CID").selectedIndex].text;				
			var cid   =  document.getElementById("CA_CID").value;
			var prod = document.getElementById("CA_Materiais").options[document.getElementById("CA_Materiais").selectedIndex].text;
	
			break;
		case "Controle de Estoque":
				var forn = document.getElementById("CA_Fornecedor").options[document.getElementById("CA_Fornecedor").selectedIndex].text;
      			var cont =  document.getElementById("CA_Contrato").options[document.getElementById("CA_Contrato").selectedIndex].text;				
				var prod = document.getElementById("CA_Produto").options[document.getElementById("CA_Produto").selectedIndex].text;
	
			break;
		case "Extrato":
			var forn = document.getElementById("CA_Fornecedor").options[document.getElementById("CA_Fornecedor").selectedIndex].text;
  			var cont =  document.getElementById("CA_Contrato").options[document.getElementById("CA_Contrato").selectedIndex].text;				
  			//var dem = document.getElementById("CA_TipoDemanda").options[document.getElementById("CA_TipoDemanda").selectedIndex].text;	
		break;
			

	}

	caminho = window.location.pathname.substring(0, window.location.pathname.toLowerCase().indexOf(".nsf") + 4);
	
	window.open(caminho+'/(ag_GerarRelatorio)?OpenAgent&rel='+rel+'&forn='+forn+'&cont='+cont+'&data='+data+'&data2='+data2+'&prod='+prod+'&dem='+dem+'&subt='+subt+'&stat='+stat+'&aprov='+aprov+'&tPag='+tPag+'&diret='+diret+'&ger='+ger+'&coord='+coord+'&area='+area+'&cid='+cid+'&numvoto='+numvoto);
	
}

function ChamarAgente(view, id, agent){

	caminho = "http://" + location.host; //server name

	var baseAtual = $("#BaseAtual").val();
	var caminho = "";
	var cont	= 0;

	if (baseAtual != null){

		
		caminho += "/" + baseAtual;
	}else{
		//PEGA O CAMINHO DA URL ATE O CAMINHO DA BASE E IGNORA O RESTANTE
		var base = location.pathname;
		var index = base.indexOf(".nsf");
		base = base.substring(0, index + 4);
		caminho += base;
	
		caminho += "/("+ agent +")?OpenAgent&view="+ view + "&p2="+ id;
		//alert(caminho);
		window.location.href = caminho
		

	}
	
}

//desmarca o campo quando o mesmo é preenchido
function desmarcaCampo(id)
{
	$('#'+id).removeClass('marca-campo');
}

//Habilitar ou desabilitar campo lista
function hadeCampo(id){
	if ($("#"+id).is(":disabled")){
	 	$("#"+id).removeAttr("disabled"); 
	}else{
		$("#"+id).val('');
		desmarcaCampo(id);
		$("#"+id).attr("disabled",true);
	}  
}

function getCookie(name) {
		var value = "; " + document.cookie;
		var parts = value.split("; " + name + "=");
		if (parts.length == 2) return parts.pop().split(";").shift();
}

