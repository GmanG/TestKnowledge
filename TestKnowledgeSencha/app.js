Ext.application({
    name: 'Sencha',

    requires: [
        'Ext.MessageBox'
    ],

    views: ['Main'],
    stores: ['Questions'],
    models: ['Question'],

    launch: function() {
        Ext.Viewport.add(Ext.create('Sencha.view.Main'));
    }
});
