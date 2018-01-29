/**
 * BLOCK: cscard
 * Registering a editable block with Gutenberg
 * Styles:editor.css — Editor styles for the block.
 *        style.css — Frontend styles for the block.
 */

function () {
    var __ = wp.i18n.__;
    var el = wp.element;
    var blocks = wp.blocks.Editable;
    var children = wp.blocks.source.children;
    var registerBlockType = wp.blocks.registerBlockType;
    var attr = wp.blocks.source.attr;
    var mediaUploadButton = wp.blocks.MediaUploadButton;

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
        icon: 'welcome-add-page',
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

            function onSelectImage(media) {
                props.setAttribute({
                    mediaURL: media.url,
                    mediaID: media.id
                });
            }

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
                    el.createElement('div', {className: "cscard-img"},
                            el.createElement(
                                    mediaUploadButton,
                                    {
                                        buttonProps: {
                                            className: "largeButton"
                                        },
                                        onSelect: onSelectImage,
                                        type: 'image',
                                        value: props.attributes.mediaID
                                    },
                                    props.attributes.mediaID ? el.createElement('img', {src: props.attributes.mediaURL}) : 'Upload Image'
                                    )),
                    el.createElement(blocks.Editable, {
                        tagName: 'h3',
                        onChange: onChangeCsname,
                        value: attributes.Csname,
                        focus: focus,
                        onFocus: props.setFocus
                    }),
                    el.createElement(blocks.Editable, {
                        tagName: 'h4',
                        className: "grey",
                        onChange: onChangeCsmeta,
                        value: attributes.Csmeta,
                        focus: focus,
                        onFocus: props.setFocus
                    })
                    );
        }
    });
}
;
