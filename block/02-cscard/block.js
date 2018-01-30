/**
 * BLOCK: cscard
 * Registering a editable block with Gutenberg
 * Styles:editor.css — Editor styles for the block.
 *        style.css — Frontend styles for the block.
 */

(function () {
    var __ = wp.i18n.__;
    var el = wp.element;
    var blocks = wp.blocks;
    var children = blocks.source.children;
    var registerBlockType = blocks.registerBlockType;
    var mediaUploadButton = blocks.MediaUploadButton;

    /**
     * Register cscard Block.
     *
     * Registers a new block provided a unique name and an object defining its
     * behavior. Once registered, the block is made available as an option to any
     * editor interface where blocks are implemented.
     *
     * @param  {string}   name     Block name.
     * @param  {Object}   settings Block settings.
     * @return {?WPBlock}          The block, if it has been successfully
     *                             registered; otherwise `undefined`.
     */

    registerBlockType('hgd/block-cscard-02', {
        title: __('HGD cscard', 'HGD'),
        icon: 'plus-alt',
        category: 'common',

        attributes: {
            mediaID: {
                type: 'number'
            },
            mediaURL: {
                type: 'string',
                source: 'attributes',
                selector: 'img',
                attrbute: 'src'
            },
            csName: {
                type: 'array',
                source: 'children',
                selector: 'h3'
            },
            csMeta: {
                type: 'array',
                source: 'children',
                selector: 'h4'
            }
        },

        edit: function (props) {
            var attributes = props.attributes;
            var focus = props.focus;

            /* Update csName*/

            var onSelectImage = (media) => {
                props.setAttributes({
                    mediaURL: media.url,
                    mediaID: media.id
                });
                console.log(media.id);
            };

            function onChangeCsname(newCsname) {
                props.setAttributes({csName: newCsname});
            }
            ;

            function onChangeCsmeta(newCsmeta) {
                props.setAttributes({csMeta: newCsmeta});
            }
            ;

            return el.createElement(
                    'div', {className: "cscard-container"},
                    el.createElement(mediaUploadButton, {
                        buttonProps: {
                            className: attributes.mediaID ? 'image-button' : 'button-large'
                        },
                        onSelect: onSelectImage,
                        type: 'image',
                        value: attributes.mediaID
                    },
                            attributes.mediaID ? el.createElement('img', {src: attributes.mediaURL}) : 'Upload Image'
                            ),
                    el.createElement(blocks.Editable, {
                        tagName: 'h3',
                        placeholder: __('Case Study Name'),
                        onChange: onChangeCsname,
                        value: attributes.csName,
                        focus: focus,
                        onFocus: props.setFocus
                    }),
                    el.createElement(blocks.Editable, {
                        tagName: 'h4',
                        placeholder: __('Service . Year'),
                        className: "grey",
                        onChange: onChangeCsmeta,
                        value: attributes.csMeta,
                        focus: focus,
                        onFocus: props.setFocus
                    })
                    );
        },

        save: function (props) {
//            var attributes = props.attributes;
//            return(
//            el.createElement('div', {className: "cscard-container"},
//            el.createElement('img', {src: attributes.mediaURL}
//                    ),
//            el.createElement('h3',)
//                    )
//            );
        }
    });
}
)();
