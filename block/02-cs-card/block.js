/**
 * BLOCK: cscard
 * Registering a editable block with Gutenberg
 * Styles:editor.css — Editor styles for the block.
 *        style.css — Frontend styles for the block.
 */

function(){
    var __ = wp.i18n.__;
    var el = wp.element;
    var blocks = wp.blocks.Editable;
    var children = wp.blocks.source.children;
    var registerBlockType = wp.blocks.registerBlockType;
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
    
};