( function () {
    var __ = wp.i18n.__;
    var element = wp.element;
    var blocks = wp.blocks;
    
    blocks.registerBlockType( 'hgd/block-buttontext-03', {
	title: __( 'HGD Button-Text', 'HGD' ),
	icon: 'edit',
	category: 'common',
	
	attributes: {
	    content: {
		type: 'array',
		source: 'children',
		selector: 'p'
	    }
	},

	edit: function ( props ) {
	    var content = props.attributes.content;
	    var focus = props.focus;
	    function onChangeContent( newContent ) {
		props.setAttributes( { content: newContent } );
	    }
	    
	    return element.createElement( blocks.Editable, {
		tagName: 'p',
		className: props.className,
		onChange: onChangeContent,
		value: content,
		focus: focus,
		onFocus: props.SetFocus
		},
	    );
	},
	
	save: function ( props ) {
	    var content = props.attributes.content;
	    
	    return element.createElement( 'div',  
				{className: props.className },
				element.createElement( 'input', 
						    {
							type: 'button',
							value: content,
							className: 'hgd-button'
						    }
						)
				);
	}
    });
    
} )();