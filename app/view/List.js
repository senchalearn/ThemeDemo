Ext.define('ThemeDemo.view.List', {
    extend: 'Ext.Container',
    xtype: 'demolist',

    requires: ['ThemeDemo.model.Contact'],
    config: {
        layout: 'fit',
        cls: 'demo-list',
        items: [{
            xtype: 'list',
            store: 'Contacts',
            itemTpl: '{firstName} {lastName}'
        }]
    }
});
