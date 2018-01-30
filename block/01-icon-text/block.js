/**
 * BLOCK: Editablelist
 */
(function () {
    var __ = wp.i18n.__;
    var el = wp.element.createElement; 
    var Editable = wp.blocks.Editable; 
    var children = wp.blocks.source.children; 
    var registerBlockType = wp.blocks.registerBlockType; 
    var attr = wp.blocks.source.attr;
    var mediaUploadButton = wp.blocks.MediaUploadButton;
    /**
     * Register Editablelist Block.
     */
    registerBlockType('hgd/block-editablelist-01', {
        title: __('HGD Editablelist', 'HGD'),
        icon: 'edit',
        category: 'common', 

        attributes: {
            mediaID: {
                type: 'number'
            },
            mediaURL: {
                type: 'string',
                source: 'attribute',
                selector: 'img',
                attribute: 'src'
            },
            content: {
                type: 'array',
                source: 'children',
                selector: 'p'
            }
        },

        
        edit: function (props) {
            // var focusedEditable = props.focus ? props.focus.editable || 'title' : null;
            var content = props.attributes.content; 
            var focus = props.focus; 
          var attributes = props.attributes;
            var onSelectImage = (media) => {
                props.setAttributes({
                    mediaURL: media.url,
                    mediaID: media.id
                });
            }

            function onChangeContent(newContent) {
                props.setAttributes({content: newContent});
            }

            // The editable content.
            return (
                    el('div', {className: props.className},
                            el('div', {className: "icon-container"},
                                    el(mediaUploadButton,
                                            {
                                                buttonProps: {
                                                    className: props.attributes.mediaID ? 'image-button' : 'components-button button button-large'
                                                },
                                                onSelect: onSelectImage,
                                                type: 'image', //ask saurabh
                                                value: props.attributes.mediaID,
                                            },
                                            props.attributes.mediaID ? el('img', {src: props.attributes.mediaURL}) : 'Upload Image'
                                            )
                                    ),
                            el(Editable, {
                                
                                tagName: 'p',
                                onChange: onChangeContent, 
                                value: content, 
                                focus: focus, 
                                onFocus: props.setFocus,
                                placeholder: __('enter para')
                            }),
                            )
                    );
        },

      
        save: function (props) {
            var content = props.attributes.content; 

          
            return el('div', {className: props.className},
                    el('p', {}, props.attributes.content),
                    el('div', {className: "icon-container"},
                            el('img', {src: props.attributes.mediaURL}
                            ))
                    );
        }
    });
})();
