/**
 * BLOCK: Editablelist
 *
 * Registering a basic editablelist block with Gutenberg.
 * Introduces the concept of attributes and extracting
 * them, and the default text formatting added by Editable.
 *
 * Styles:
 *        editor.css — Editor styles for the block.
 *        style.css — Frontend styles for the block.
 */
(function () {
    var __ = wp.i18n.__; // The __() for internationalization.
    var el = wp.element.createElement; // The wp.element.createElement() function to create elements.
    var Editable = wp.blocks.Editable; // Editable component of React.
    var children = wp.blocks.source.children; // The children() function to extract child nodes from a paragraph of rich text.
    var registerBlockType = wp.blocks.registerBlockType; // The registerBlockType() to register blocks.
    var attr = wp.blocks.source.attr;
    var mediaUploadButton = wp.blocks.MediaUploadButton;

    /**
     * Register Editablelist Block.
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
    registerBlockType('hgd/block-editablelist-01', {// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
        title: __('HGD Editablelist', 'HGD'), // Block title.
        icon: 'edit', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
        category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.

        /**
         * Attribute matchers!
         *
         * Attribute matchers are used to define the strategy by which block
         * attribute values are extracted from saved post content. They provide
         * a mechanism to map from the saved markup to a JavaScript representation
         * of a block.
         *
         * children() — Use children to extract child nodes of the matched element,
         * returned as an array of virtual elements. This is most commonly used in
         * combination with the Editable component.
         *
         * Example: Extract child nodes from a paragraph of rich text.
         */
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

        // The "edit" property must be a valid function.
        edit: function (props) {
            var content = props.attributes.content; // Content in our block.
            var focus = props.focus; // Focus — should be truthy.
//          var attributes = props.attributes;
            var onSelectImage = (media) => {
                props.setAttributes({
                    mediaURL: media.url,
                    mediaID: media.id
                });
            }
            /**
             * Update content on change.
             */
            function onChangeContent(newContent) {
                props.setAttributes({content: newContent});
                console.log(content);
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
                                // Creates <div class="wp-block-hgd-block-editablelist-01"><p></p></div>
                                tagName: 'p', // <p></p>.
                                onChange: onChangeContent, // Run the onChangeContent() function onChange of content.
                                value: content, // Content in our block. i.e. props.attributes.content;
                                focus: focus, // Focus — should be truthy. i.e. props.focus;
                                onFocus: props.setFocus
                            }),
                            )
                    );
        },

        // The "save" property must be specified and must be a valid function.
        save: function (props) {
            var content = props.attributes.content; // Content in our block.

            // The frontend content.
            return el('div', {className: props.className},
                    el('p', {}, props.attributes.content),
                    el('div', {className: "icon-container"},
                            el('img', {src: props.attributes.mediaURL}
                            ))
                    );
        }
    });
})();
