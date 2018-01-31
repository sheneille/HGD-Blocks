( function () {
    var i18n = wp.i18n;
    var element = wp.element;
    var blocks = wp.blocks;
    
    blocks.registerBlockType( 'hgd/block-editablelist-01', {
	title: i18n( 'HGD Icon-Text', 'HGD' ),
	icon: 'edit',
	category: 'common',
	
	attributes: {
	    content: {
		children: 'p'
	    }
	},
	
    }
	)
    
} )();