Ext.define('Sencha.store.Questions', {
    extend: 'Ext.data.Store',

    config: {
        model: 'Sencha.model.Question',
        autoLoad: true/*,
        //sorters: 'name',
        grouper: {
            groupFn: function(record) {
                return record.get('name')[0];
            }
        }*/
    }
});
