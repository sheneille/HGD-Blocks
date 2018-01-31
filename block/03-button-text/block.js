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

	edit: function ( props ) {
	    var content = props.attributes.content;
	    var focus = props.focus;
	    var onChangeContent = function ( newContent ) {
		props.setAttributes( { content: newContent } );
	    };
	    
	    return element.createElement( blocks.Editable, {
		tagName: 'p',
		className: props.className,
		onChange: onChangeContent,
		value: content,
		focus: focus,
		onFocus: props.SetFocus
		},
	    );
	}
    }
	);
    
} )();