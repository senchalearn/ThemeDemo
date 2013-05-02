Ext.define('ThemeDemo.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'ThemeDemo.view.FormPanel',
        'ThemeDemo.view.List'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Home',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                layout: {
                    type: 'vbox',
                    align: 'stretch',
                    pack: 'center'
                },
                defaults: {
                    xtype: 'button',
                    margin: '4 0'
                },
                items: [{
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to Sencha Touch 2'
                },{
                    text: 'Default theme',
                    handler: function() {window.location.assign(location.pathname)}
                },{
                    text: 'Windows phone theme',
                    handler: function() {window.location.assign(location.pathname+'?platform=ie10')}
                },{
                    text: 'Blackberry theme',
                    handler: function() {window.location.assign(location.pathname+'?platform=blackberry')}
                },{
                    text: 'Base demo theme',
                    handler: function() {window.location.assign(location.pathname+'?platform=demo')}
                }]
            },
            {
                xtype: 'demolist',
                iconCls: 'list',
                title: 'List'
            },
            {
                xtype: 'demoform',
                iconCls: 'compose',
                title: 'Form'
            }
        ]
    }
});
