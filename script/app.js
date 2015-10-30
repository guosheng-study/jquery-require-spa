/** 社区路配置 */
var routes = {
    '/home/': {
        js: '/script/src/home/main.js', //首页
        tpl: '/html/home/template.tpl' //模板
    },
    '/circle/': {
        js: '/script/src/circle/main.js',
        tpl: '/html/circle/template.tpl' //模板
    }, //圈圈
    '/welfare/': {
        js: '/script/src/welfare/main.js', //好货
        tpl: '/html/welfare/template.tpl' //模板
    },
    '/find/': {
        js: '/script/src/find/main.js', //发现
        tpl: '/html/find/template.tpl' //模板
    },
    '/my/': {
        js: '/script/src/my/main.js', //我的
        tpl: '/html/my/template.tpl' //模板
    }
};

//绑定路由

var page = $('#page')
_.each(routes, function (v, key, list) {
    $.routes.add(key, function (data) {
        require([v.js, 'text!' + v.tpl], function (main, tpl) {
            page.html(tpl);
            main.init();
        });
    });
});