require.config({
    paths: {
        'jquery': '../lib/jquery-1.8.3',
        'handlebars': '../lib/handlebars-v4.0.11',
        'template': '../common/template'
    }
});

require([
        'jquery',
        'handlebars',
        'template'
    ],
    function($, template) {
        $.ajax({
            url: 'api/get_main_data',
            type: 'get',
            dataType: 'json',
            success: function(data) {
                console.log(data);
                template('#icon_tpl', {
                    data: data.items[0].data.data
                }, '.icon');
            }
        });
    });